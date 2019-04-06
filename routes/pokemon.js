'use strict';

const controller = require('../controllers/pokemon')

const routes  = [
    {
        method: 'get',
        path: '/',
        handler: controller.retrieve
    },
    {
        method: 'get',
        path: '/:id',
        handler: controller.get
    },
    {
        method: 'post',
        path: '/',
        handler: controller.create
    },
    {
        method: 'put',
        path: '/:id',
        handler: controller.update
    },
    {
        method: 'post',
        path: '/buy',
        handler: controller.buy
    },
    {
        method: 'delete',
        path: '/:id',
        handler: controller.delete
    }
]

module.exports = routes
