import { RecipeIngredient as RecipeIngredientType } from 'types/generated';
import gql from 'graphql-tag';
import Ingredient from './ingredient.class';

interface RecipeIngredient extends RecipeIngredientType {}

class RecipeIngredient {
	static fragment = gql`
		fragment RecipeIngredient on RecipeIngredient {
			id
			ingredient {
				...Ingredient
			}
			amount
		}
		${Ingredient.fragment}
	`;
}

export default RecipeIngredient;
