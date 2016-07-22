'use strict';

const controller = require('../controllers/pokemon')

const routes  = [
    {
        method: 'get',
        path: '/get-pokemons',
        handler: controller.retrieve
    },
    {
        method: 'get',
        path: '/get-pokemon/:id',
        handler: controller.get
    },
    {
        method: 'put', //Seria melhor usar post
        path: '/create-pokemons',
        handler: controller.create
    },
    {
        method: 'put',
        path: '/update-pokemon/:id',
        handler: controller.update
    },
    {
        method: 'post',
        path: '/buy-pokemons',
        handler: controller.buy
    },
    {
        method: 'delete',
        path: '/delete-pokemon/:id',
        handler: controller.delete
    }
]

module.exports = routes
