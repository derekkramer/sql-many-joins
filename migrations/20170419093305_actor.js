
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actor', (table) => {
        table.increments()
        table.string('name')
        table.string('birthday')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actor')
}
