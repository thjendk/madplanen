import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('day_recipes', (t) => {
		t.increments();
		t.integer('day_id').unsigned().references('days.id').onDelete('cascade').onUpdate('cascade');
		t.integer('recipe_id').unsigned().references('recipes.id').onDelete('cascade').onUpdate('cascade');
		t.unique(['day_id', 'recipe_id']);
	});
}

export async function down(knex: Knex): Promise<void> {}
