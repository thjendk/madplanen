import { combineReducers } from 'redux';

const rootReducer = combineReducers({});

export type ReduxState = ReturnType<typeof rootReducer>;

export default rootReducer;
