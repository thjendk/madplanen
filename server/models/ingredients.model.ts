import { Model } from 'objection';

interface Ingredient {
	id: number;
	name: string;
	price: number;
	categoryId: number;
}

class Ingredient extends Model {
	static tableName = 'ingredients';
}

export default Ingredient;
