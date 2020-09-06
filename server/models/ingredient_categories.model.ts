import { Model } from 'objection';

interface IngredientCategory {
	id: number;
	name: string;
	index: number;
}

class IngredientCategory extends Model {
	static tableName = 'ingredientCategories';
}

export default IngredientCategory;
