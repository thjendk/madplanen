import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('users', (t) => {
		t.increments();
		t.string('username').unique().notNullable();
		t.string('password').notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {}
