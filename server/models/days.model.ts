import { Model } from 'objection';

interface Day {
	id: number;
	date: Date;
	recipeId: number;
	userId: number;
}

class Day extends Model {
	static tableName = 'days';
}

export default Day;
