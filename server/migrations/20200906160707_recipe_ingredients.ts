import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('recipe_ingredients', (t) => {
		t.increments();
		t.integer('ingredient_id').unsigned().references('ingredients.id').onDelete('set null').onUpdate('cascade');
		t.integer('recipe_id').unsigned().references('recipes.id').onDelete('cascade').onUpdate('cascade');
		t.float('amount');
	});
}

export async function down(knex: Knex): Promise<void> {}
