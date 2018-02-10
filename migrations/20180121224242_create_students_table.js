exports.up = function (knex) {
    return knex.schema.createTable('students', function (t) {
      t.increments('id').primary()
      t.string('name').notNullable()
      t.string('f_number').notNullable()
      t.string('egn').notNullable()
      t.string('degree').notNullable()
      t.string('year').notNullable()
      t.string('user_id').notNullable()
      t.timestamps(false, true)
    })
  }
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists('students')
  }