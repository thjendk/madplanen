import { gql } from 'apollo-server-express';
import { Resolvers } from 'types/resolvers-types';
import Ingredient from 'models/ingredients.model';

export const ingredientTypeDefs = gql`
	type Ingredient {
		id: Int
		name: String
		price: Int
		category: IngredientCategory
	}

	type IngredientCategory {
		id: Int
		name: String
		index: Int
	}

	extend type Query {
		ingredients: [Ingredient]
	}

	extend type Mutation {
		createIngredient(data: IngredientInput): Ingredient
	}

	input IngredientInput {
		id: Int
		name: String
		price: Int
		categoryId: Int
	}
`;

export const ingredientResolvers: Resolvers = {
	Ingredient: {
		id: ({ id }) => id,
		name: async ({ id }, args, ctx) => {
			console.log(id);
			const ingredient = await ctx.ingredientLoader.load(id);
			return ingredient.name;
		},
		price: async ({ id }, args, ctx) => {
			const ingredient = await ctx.ingredientLoader.load(id);
			return ingredient.price;
		},
		category: async ({ id }, args, ctx) => {
			const ingredient = await ctx.ingredientLoader.load(id);
			return { id: ingredient.categoryId };
		}
	},

	IngredientCategory: {
		id: ({ id }) => id,
		name: async ({ id }, args, ctx) => {
			const ic = await ctx.ingredientCategoryLoader.load(id);
			return ic.name;
		},
		index: async ({ id }, args, ctx) => {
			const ic = await ctx.ingredientCategoryLoader.load(id);
			return ic.index;
		}
	},

	Query: {
		ingredients: async () => {
			const ingredients = await Ingredient.query().select('id');
			return ingredients.map((i) => ({ id: i.id }));
		}
	},

	Mutation: {
		createIngredient: async (root, { data }, ctx) => {
			let ingredient: Ingredient;
			if (data.id) {
				ingredient = await Ingredient.query().updateAndFetchById(data.id, data);
			} else {
				ingredient = await Ingredient.query().insertAndFetch(data);
			}
			return { id: ingredient.id };
		}
	}
};
