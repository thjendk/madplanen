import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('recipes', (t) => {
		t.increments();
		t.string('name');
	});
}

export async function down(knex: Knex): Promise<void> {}
