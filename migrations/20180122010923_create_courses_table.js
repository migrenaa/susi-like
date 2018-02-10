exports.up = function (knex) {
    return knex.schema.createTable('courses', function (t) {
      t.increments('id').primary()
      t.string('name').notNullable()
      t.string('professor_id').notNullable()
      t.string('room_id').notNullable()
      t.string('start_time').notNullable()
      t.string('end_time').notNullable()
      t.string('department').notNullable()
      t.string('category').notNullable()
      t.timestamps(false, true)
    })
  }
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('courses')
  }