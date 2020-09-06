import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('ingredients', (t) => {
		t.increments();
		t.string('name');
		t.float('price');
		t.integer('category_id')
			.unsigned()
			.references('ingredient_categories.id')
			.onDelete('set null')
			.onUpdate('cascade');
	});
}

export async function down(knex: Knex): Promise<void> {}
