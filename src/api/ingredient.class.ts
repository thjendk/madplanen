import { Ingredient as IngredientType } from 'types/generated';
import gql from 'graphql-tag';
import IngredientCategory from './ingredientCategory.class';

interface Ingredient extends IngredientType {}

class Ingredient {
	static fragment = gql`
		fragment Ingredient on Ingredient {
			id
			name
			price
			category {
				...IngredientCategory
			}
		}
		${IngredientCategory.fragment}
	`;
}

export default Ingredient;
