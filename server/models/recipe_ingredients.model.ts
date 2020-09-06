import { Model } from 'objection';

interface RecipeIngredient {
	id: number;
	ingredientId: number;
	recipeId: number;
	amount: number;
}

class RecipeIngredient extends Model {
	static tableName = 'recipeIngredients';
}

export default RecipeIngredient;
