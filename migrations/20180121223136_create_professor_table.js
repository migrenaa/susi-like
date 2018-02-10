exports.up = function (knex) {
    return knex.schema.createTable('professors', function (t) {
      t.increments('id').primary()
      t.string('name').notNullable()
      t.string('discipline').notNullable()
      t.string('office').notNullable()
      t.string('email').notNullable()
      t.string('visiting_hours').notNullable()
      t.string('user_id').notNullable()
      t.timestamps(false, true)
    })
  }
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('professors')
  }