exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('actor').del()
        .then(function() {
            // Inserts seed entries
            return knex('actor').insert([
                {
                    name: 'Robert DeNiro',
                    birthday: '01/01/1950'
                },
                {
                    name: 'Leonardo Dicaprio',
                    birthday: '02/02/1960'
                },
                {
                    name: 'Daniel Day Lewis',
                    birthday: '03/03/1965'
                }
            ])
        })
}
