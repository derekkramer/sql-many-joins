exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('movie').del()
        .then(function() {
            // Inserts seed entries
            return knex('movie').insert([
                {
                    title: 'Gangs of New York',
                    year_released: 1990
                },
                {
                    title: 'Titanic',
                    year_released: 1995
                },
                {
                    title: 'Heat',
                    year_released: 1998
                }
            ])
        })
}
