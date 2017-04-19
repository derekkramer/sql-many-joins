exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('movie_actor').del()
        .then(function() {
            // Inserts seed entries
            return knex('movie_actor').insert([
                {
                    actor_id: 1,
                    movie_id: 2
                },
                {
                    actor_id: 1,
                    movie_id: 1
                },
                {
                    actor_id: 2,
                    movie_id: 3
                }
            ])
        })
}
