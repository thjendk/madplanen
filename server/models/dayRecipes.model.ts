import { Model } from 'objection';

interface DayRecipe {
	id: number;
	recipeId: number;
	dayId: number;
}

class DayRecipe extends Model {
	static tableName = 'dayRecipes';
}

export default DayRecipe;
