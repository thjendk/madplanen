import { Model } from 'objection';

interface Day {
	id: number;
	date: Date;
	userId: number;
}

class Day extends Model {
	static tableName = 'days';
}

export default Day;
