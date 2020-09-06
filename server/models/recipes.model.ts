import { Model } from 'objection';

interface Recipe {
	id: number;
	name: string;
}

class Recipe extends Model {
	static tableName = 'recipes';
}

export default Recipe;
