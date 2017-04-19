
exports.up = function(knex, Promise) {
    return knex.schema.createTable('movie', (table) => {
        table.increments()
        table.string('title')
        table.integer('year_released')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('movie')
}
