import { gql } from 'apollo-server-express';

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
`;

export const ingredientResolvers = {};
