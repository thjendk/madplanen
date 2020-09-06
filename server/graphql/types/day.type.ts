import { gql } from 'apollo-server-express';
import { Resolvers } from 'types/resolvers-types';
import Day from 'models/days.model';
import { format } from 'date-fns';
import DayRecipe from 'models/dayRecipes.model';

export const dayTypeDefs = gql`
	type Day {
		id: Int
		date: String
		recipes: [Recipe]
		user: User
	}

	extend type Query {
		days(startDate: String, numberOfDays: Int): [Day]
		day(id: Int): Day
	}

	extend type Mutation {
		createDay(data: DayInput): Day
		addRecipeToDay(data: DayRecipeInput): Day
		removeRecipeFromDay(data: DayRecipeInput): Day
	}

	input DayInput {
		date: String
	}

	input DayRecipeInput {
		dayId: Int
		recipeId: Int
	}
`;

export const dayResolvers: Resolvers = {
	Day: {
		id: ({ id }) => id,
		date: async ({ id }, args, ctx) => {
			const day = await ctx.daysLoader.load(id);
			return day.date.toISOString();
		},
		recipes: async ({ id }, args, ctx) => {
			const recipes = await DayRecipe.query().where({ dayId: id });
			return recipes.map((r) => ({ id: r.recipeId }));
		},
		user: async ({ id }, args, ctx) => {
			const day = await ctx.daysLoader.load(id);
			return { id: day.userId };
		}
	},

	Query: {
		days: async (root, { startDate, numberOfDays }, ctx) => {
			const days = await Day.query()
				.where('date', '>=', format(new Date(startDate), 'yyyy-MM-dd'))
				.orderBy('date')
				.limit(numberOfDays);
			return days.map((d) => ({ id: d.id }));
		},
		day: async (root, { id }) => {
			const day = await Day.query().findById(id);
			return { id: day.id };
		}
	},

	Mutation: {
		createDay: async (root, { data }, ctx) => {
			const day = await Day.query().insertAndFetch({ date: new Date(data.date), userId: ctx.user?.id });
			return { id: day.id };
		},
		addRecipeToDay: async (root, { data }, ctx) => {
			await DayRecipe.query().insert(data);
			return { id: data.dayId };
		},
		removeRecipeFromDay: async (root, { data }, ctx) => {
			await DayRecipe.query().where(data).delete();
			return { id: data.dayId };
		}
	}
};
