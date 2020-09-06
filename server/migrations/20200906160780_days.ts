import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('days', (t) => {
		t.increments();
		t.date('date');
		t.integer('user_id').unsigned().references('users.id').onDelete('cascade').onUpdate('cascade');
	});
}

export async function down(knex: Knex): Promise<void> {}
