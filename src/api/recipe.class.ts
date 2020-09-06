import gql from 'graphql-tag';
import { Recipe as RecipeType, RecipeInput } from 'types/generated';
import RecipeIngredient from './RecipeIngredient.class';
import API from './api.class';
import { store } from 'index';
import recipeReducer from 'redux/reducers/recipe.reducer';

interface Recipe extends RecipeType {}

class Recipe {
	static fragment = gql`
		fragment Recipe on Recipe {
			id
			name
			ingredients {
				...RecipeIngredient
			}
		}
		${RecipeIngredient.fragment}
	`;

	static fetchAll = async () => {
		const query = gql`
			query Recipes {
				recipes {
					...Recipe
				}
			}
			${Recipe.fragment}
		`;

		const recipes = await API.query<Recipe[]>('recipes', query);
		store.dispatch(recipeReducer.actions.setRecipes(recipes));
	};

	static fetchById = async (id: number) => {
		const query = gql`
			query Recipe($id: Int) {
				recipe(id: $id) {
					...Recipe
				}
			}
			${Recipe.fragment}
		`;

		const recipe = await API.query<Recipe>('recipe', query, { id });
		store.dispatch(recipeReducer.actions.addRecipes(recipe));
	};

	static create = async (data: RecipeInput) => {
		const mutation = gql`
			mutation CreateRecipe($data: RecipeInput) {
				createRecipe(data: $data) {
					...Recipe
				}
			}
			${Recipe.fragment}
		`;

		const recipe = await API.mutate<Recipe>('createRecipe', mutation, { data });
		store.dispatch(recipeReducer.actions.addRecipes(recipe));
	};

	static;
}

export default Recipe;
