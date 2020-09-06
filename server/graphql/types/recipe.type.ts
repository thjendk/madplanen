import { gql } from 'apollo-server-express';
import { Resolvers } from 'types/resolvers-types';
import Recipe from 'models/recipes.model';
import RecipeIngredient from 'models/recipe_ingredients.model';

export const recipeTypeDefs = gql`
	type Recipe {
		id: Int
		name: String
		ingredients: [RecipeIngredient]
	}

	type RecipeIngredient {
		id: Int
		amount: Int
		ingredient: Ingredient
		recipe: Recipe
	}

	extend type Query {
		recipes: [Recipe]
		recipe(id: Int): Recipe
	}

	extend type Mutation {
		createRecipe(data: RecipeInput): Recipe
		addIngredientToRecipe(data: RecipeIngredientInput): Recipe
		removeIngredientFromRecipe(id: Int): Recipe
	}

	input RecipeInput {
		id: Int
		name: String
	}

	input RecipeIngredientInput {
		ingredientId: Int
		recipeId: Int
		amount: Int
	}
`;

export const recipeResolvers: Resolvers = {
	Recipe: {
		id: ({ id }) => id,
		name: async ({ id }, args, ctx) => {
			const recipe = await ctx.recipeLoader.load(id);
			return recipe.name;
		},
		ingredients: async ({ id }, args, ctx) => {
			const ingredients = await RecipeIngredient.query().where({ recipeId: id });
			return ingredients.map((i) => ({ id: i.id }));
		}
	},

	Query: {
		recipes: async () => {
			const recipes = await Recipe.query().select('id');
			return recipes.map((r) => ({ id: r.id }));
		},
		recipe: async (root, { id }) => {
			const recipe = await Recipe.query().findById(id);
			return { id: recipe.id };
		}
	},

	Mutation: {
		createRecipe: async (root, { data }, ctx) => {
			let recipe: Recipe;
			if (data.id) {
				recipe = await Recipe.query().updateAndFetchById(data.id, data);
			} else {
				recipe = await Recipe.query().insertAndFetch(data);
			}

			return { id: recipe.id };
		},
		addIngredientToRecipe: async (root, { data }, ctx) => {
			await RecipeIngredient.query().insert(data);
			return { id: data.recipeId };
		},
		removeIngredientFromRecipe: async (root, { id }, ctx) => {
			const ingredient = await RecipeIngredient.query().findById(id);
			await ingredient.$query().delete();
			return { id: ingredient.recipeId };
		}
	},

	RecipeIngredient: {
		id: ({ id }) => id,
		amount: async ({ id }, args, ctx) => {
			const ri = await ctx.recipeIngredientLoader.load(id);
			return ri.amount;
		},
		recipe: async ({ id }, args, ctx) => {
			const ri = await ctx.recipeIngredientLoader.load(id);
			return { id: ri.recipeId };
		},
		ingredient: async ({ id }, args, ctx) => {
			const ri = await ctx.recipeIngredientLoader.load(id);
			return { id: ri.ingredientId };
		}
	}
};
