import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('stock', (t) => {
		t.increments();
		t.integer('ingredient').unsigned().references('ingredients.id').onDelete('cascade').onUpdate('cascade');
		t.float('amount');
		t.integer('user_id').unsigned().references('users.id').onDelete('cascade').onUpdate('cascade');
		t.timestamps(true, true);
	});
}

export async function down(knex: Knex): Promise<void> {}
