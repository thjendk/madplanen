import { gql } from 'apollo-server-express';

export const recipeTypeDefs = gql`
	type Recipe {
		id: Int
		name: String
		ingredients: [Ingredient]
	}
`;

export const recipeResolvers = {};
