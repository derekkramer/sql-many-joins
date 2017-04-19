
exports.up = function(knex, Promise) {
    return knex.schema.createTable('movie_actor', (table) => {
        table.increments()
        table.integer('actor_id').references('actor.id')
        table.integer('movie_id').references('movie.id')
    })
}

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('movie_actor')
}
