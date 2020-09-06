import { Day as DayType, DayInput, DayRecipeInput } from 'types/generated';
import gql from 'graphql-tag';
import Recipe from './recipe.class';
import API from './api.class';
import { store } from 'index';
import daysReducer from 'redux/reducers/days.reducer';

interface Day extends DayType {}

class Day {
	static fragment = gql`
		fragment Day on Day {
			id
			date
			recipes {
				...Recipe
			}
		}
		${Recipe.fragment}
	`;

	static fetch7Days = async (startDate: Date, numberOfDays: number) => {
		const query = gql`
			query days($startDate: String, $numberOfDays: Int) {
				days(startDate: $startDate, numberOfDays: $numberOfDays) {
					...Day
				}
			}
			${Day.fragment}
		`;

		const days = await API.query<Day[]>('days', query, { startDate: startDate.toISOString(), numberOfDays });
		store.dispatch(daysReducer.actions.setDays(days));
	};

	static fetchById = async (id: number) => {
		const query = gql`
			query day($id: Int) {
				day(id: $id) {
					...Day
				}
			}
			${Day.fragment}
		`;

		const day = await API.query<Day>('day', query, { id });
		store.dispatch(daysReducer.actions.addDays(day));
	};

	static create = async (data: DayInput) => {
		const mutation = gql`
			mutation CreateDay($data: DayInput) {
				createDay(data: $data) {
					...Day
				}
			}
			${Day.fragment}
		`;

		const day = await API.mutate<Day>('createDay', mutation, { data });
		store.dispatch(daysReducer.actions.addDays(day));
	};

	static addRecipe = async (data: DayRecipeInput) => {
		const mutation = gql`
			mutation AddRecipeToDay($data: DayRecipeInput) {
				addRecipeToDay(data: $data) {
					...Day
				}
			}
			${Day.fragment}
		`;

		const day = await API.mutate<Day>('addRecipeToDay', mutation, { data });
		store.dispatch(daysReducer.actions.addDays(day));
	};

	static removeRecipe = async (data: DayRecipeInput) => {
		const mutation = gql`
			mutation RemoveRecipeFromDay($data: DayRecipeInput) {
				removeRecipeFromDay(data: $data) {
					...Day
				}
			}
			${Day.fragment}
		`;

		const day = await API.mutate<Day>('removeRecipeFromDay', mutation, { data });
		store.dispatch(daysReducer.actions.addDays(day));
	};
}

export default Day;
