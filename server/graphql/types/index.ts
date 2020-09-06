import { gql } from 'apollo-server-express';

const rootDefs = gql`
	type Query {
		_empty: Boolean
	}

	type Mutation {
		_empty: Boolean
	}
`;

export const typeDefs = [rootDefs];

export const resolvers = [];
