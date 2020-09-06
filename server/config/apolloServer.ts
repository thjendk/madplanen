import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from 'graphql/types';
import generateLoaders from 'graphql/loaders';
import express from 'express';

const generateContext = (req: express.Request, res: express.Response) => ({
	...generateLoaders(),
	res,
	req
});

export type Context = ReturnType<typeof generateContext>;

export default new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ req, res }) => generateContext(req, res)
});
