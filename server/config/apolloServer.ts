import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from 'graphql/types';
import express from 'express';
import User from 'models/user.model';
import loaders from 'graphql/types/loaders';

const generateContext = (req: express.Request & { user: User }, res: express.Response) => ({
	...loaders(),
	res,
	req,
	user: req.user
});

export type Context = ReturnType<typeof generateContext>;

export default new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req, res }) => generateContext(req as any, res)
});
