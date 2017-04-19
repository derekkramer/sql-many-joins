const express = require('express')
const pg = require ('./db/knex')

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    pg('movie').select().then((data) => {
        res.json(data)
        // res.send(pg.raw('SELECT actor.name, movie.title FROM actor INNER JOIN movie_actor ON actor.id = movie_actor.actor_id INNER JOIN movie ON movie_actor.movie_id = movie.id;'))
    })
})

app.listen(port, () => {
    console.log('App running on 3000')
})
