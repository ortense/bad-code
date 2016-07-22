'use strict';

const controller = require('../controllers/pokemon')

const routes  = [
    {
        method: 'get',
        path: '/get-pokemons', // '/pokemon'
        handler: controller.retrieve
    },
    {
        method: 'get',
        path: '/get-pokemon/:id',
        handler: controller.get
    },
    {
        method: 'put', // 'post'
        path: '/create-pokemons', // '/pokemon'
        handler: controller.create
    },
    {
        method: 'put',
        path: '/update-pokemon/:id', // '/pokemon/:id'
        handler: controller.update
    },
    {
        method: 'post',
        path: '/buy-pokemons', // 'pokemon/buy'
        handler: controller.buy
    },
    {
        method: 'delete',
        path: '/delete-pokemon/:id', // '/pokemon/:id'
        handler: controller.delete
    }
]

module.exports = routes
