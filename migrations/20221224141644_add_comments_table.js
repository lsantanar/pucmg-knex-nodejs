/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 export  const up = function(knex) {
    return knex.schema.createTable('comments', column => {
        column.increments('id').primary()
        column.string('name')
        column.string('comment')
        column.timestamps(false, true)
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function(knex) {
    return knex.schema.dropTableIfExists('comments')
};