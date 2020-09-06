import { combineReducers } from 'redux';
import daysReducer from './days.reducer';
import recipeReducer from './recipe.reducer';

const rootReducer = combineReducers({
	daysReducer: daysReducer.reducer,
	recipeReducer: recipeReducer.reducer
});

export type ReduxState = ReturnType<typeof rootReducer>;

export default rootReducer;
