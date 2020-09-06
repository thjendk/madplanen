import { gql } from 'apollo-server-express';
import { Resolvers } from 'types/resolvers-types';
import Day from 'models/days.model';

const batchDays = (ids: number) => {};

export const dayTypeDefs = gql`
	type Day {
		id: Int
		date: String
		recipe: Recipe
		user: User
	}

	extend type Query {
		days(startDate: String, numberOfDays: Int): [Day]
	}

	extend type Mutation {
		createDay(data: DayInput): Day
	}

	input DayInput {
		date: String
		recipeId: Int
	}
`;

export const dayResolvers: Resolvers = {
	Query: {
		days: async (root, { startDate, numberOfDays }, ctx) => {
			const days = await Day.query().where('date', '>', new Date(startDate)).orderBy('date').limit(numberOfDays);
			return days.map((d) => ({ id: d.id }));
		}
	},

	Mutation: {
		createDay: async (root, { data }, ctx) => {
			const day = await Day.query().insertAndFetch({ ...data, date: new Date(data.date), userId: ctx.user?.id });
			return { id: day.id };
		}
	},

	Day: {
		id: ({ id }) => id
	}
};
