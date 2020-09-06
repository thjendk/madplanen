import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Day from 'api/day.class';
import { insertOrReplace } from 'redux/utils';

const initialState = {
	days: [] as Day[]
};

const daysReducer = createSlice({
	name: 'days',
	initialState,
	reducers: {
		setDays: (state, action: PayloadAction<Day[]>) => {
			state.days = action.payload;
		},
		addDays: (state, action: PayloadAction<Day | Day[]>) => {
			insertOrReplace(state.days, action.payload);
		}
	}
});

export default daysReducer;
