import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('Order', table => {
    table
      .string('id', 150)
      .notNullable()
      .primary();

    table
      .integer('userId')
      .nullable()
      .unsigned()
      .references('id')
      .inTable('User')
      .onDelete('CASCADE');

    table.string('description', 250).notNullable();
    table.integer('amount').notNullable();
    table.integer('value').notNullable();
    // table.uuid('currentToken').notNullable();
    // table.string('notificationToken', 250).nullable();
    table.dateTime('createdDate').notNullable();
    table.dateTime('updatedDate').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('Order');
}
