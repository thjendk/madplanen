import { gql } from 'apollo-server-express';

export const userTypeDefs = gql`
	type User {
		id: Int
		username: String
		password: String
	}
`;

export const userResolvers = {};
