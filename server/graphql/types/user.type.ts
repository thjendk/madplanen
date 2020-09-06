import { gql } from 'apollo-server-express';
import User from 'models/user.model';
import { Resolvers } from 'types/resolvers-types';

export const userTypeDefs = gql`
	type User {
		id: Int
		username: String
		password: String
	}

	extend type Mutation {
		login(data: LoginInput): String
		logout: String
		createUser(data: UserInput): String
	}

	input UserInput {
		username: String
		password: String
	}

	input LoginInput {
		username: String
		password: String
	}
`;

export const userResolvers: Resolvers = {
	Mutation: {
		login: async (root, { data: { username, password } }, ctx) => {
			const user = await User.query().findOne({ username });
			if (!user) throw new Error('Incorrect password or username');
			const isValid = user.verify(password);
			if (!isValid) throw new Error('Incorrect password or username');
			const token = user.signToken();
			ctx.res.cookie('user', token, { expires: new Date(253402300000000) });
			return 'Logged in';
		},
		logout: async (root, args, ctx) => {
			ctx.res.cookie('user', {}, { expires: new Date(0) });
			return 'Logged out';
		},
		createUser: async (root, { data }, ctx) => {
			const user = await User.query().insertAndFetch(data);
			const token = user.signToken();
			ctx.res.cookie('user', token, { expires: new Date(253402300000000) });
			return 'Signed up and logged in';
		}
	}
};
