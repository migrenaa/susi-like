exports.up = function (knex) {
    return knex.schema.createTable('rooms', function (t) {
      t.increments('id').primary()
      t.string('building').notNullable()
      t.string('number').notNullable()
      t.string('floor').notNullable()
      t.timestamps(false, true)
    })
  }
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('rooms')
  }