'use strict';

const pokemonController = require('../controllers/pokemon')
const routes  = [
    {
        method: 'get',
        path: '/get-pokemons',
        handler: pokemonController.get
    },
    {
        method: 'put',
        path: '/create-pokemons',
        handler: pokemonController.create
    },
    {
        method: 'post',
        path: '/buy-pokemons',
        handler: pokemonController.buy
    }
]

module.exports = routes
