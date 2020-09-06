import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('ingredient_categories', (t) => {
		t.increments();
		t.string('name');
		t.integer('index');
	});
}

export async function down(knex: Knex): Promise<void> {}
