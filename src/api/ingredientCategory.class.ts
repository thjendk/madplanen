import { IngredientCategory as IngredientCategoryType } from 'types/generated';
import gql from 'graphql-tag';

interface IngredientCategory extends IngredientCategoryType {}

class IngredientCategory {
	static fragment = gql`
		fragment IngredientCategory on IngredientCategory {
			id
			name
			index
		}
	`;
}

export default IngredientCategory;
