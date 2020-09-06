import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Recipe from 'api/recipe.class';
import { insertOrReplace } from 'redux/utils';

const initialState = {
	recipes: [] as Recipe[]
};

const recipeReducer = createSlice({
	name: 'recipe',
	initialState,
	reducers: {
		setRecipes: (state, action: PayloadAction<Recipe[]>) => {
			state.recipes = action.payload;
		},
		addRecipes: (state, action: PayloadAction<Recipe | Recipe[]>) => {
			insertOrReplace(state.recipes, action.payload);
		}
	}
});

export default recipeReducer;
