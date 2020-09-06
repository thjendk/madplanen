import { gql } from 'apollo-server-express';
import { dayTypeDefs, dayResolvers } from './day.type';
import { ingredientTypeDefs, ingredientResolvers } from './ingredient.type';
import { recipeTypeDefs, recipeResolvers } from './recipe.type';
import { userTypeDefs, userResolvers } from './user.type';

const rootDefs = gql`
	type Query {
		_empty: Boolean
	}

	type Mutation {
		_empty: Boolean
	}
`;

export const typeDefs = [rootDefs, dayTypeDefs, ingredientTypeDefs, recipeTypeDefs, userTypeDefs];

export const resolvers = [dayResolvers, ingredientResolvers, recipeResolvers, userResolvers];
