import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('shopping_list', (t) => {
		t.increments();
		t.integer('ingredient').unsigned().references('ingredients.id').onDelete('cascade').onUpdate('cascade');
		t.float('amount');
		t.integer('day_recipe_id').unsigned().references('day_recipes.id').onDelete('cascade').onUpdate('cascade');
		t.integer('user_id').unsigned().references('users.id').onDelete('cascade').onUpdate('cascade');
		t.integer('purchased', 1).defaultTo(0); // Man skal trykke gem efter man har købt ind, for at overføre det til lager (hvis man ændrer mening undervejs mens man handler, er det nemmere).
		t.timestamps(true, true);
	});
}

export async function down(knex: Knex): Promise<void> {}
