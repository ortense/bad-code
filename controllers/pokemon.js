'use strict';

const Model       = require('../models').pokemon
const crudable    = require('../factories/crudable')
const purchaseble = require('../factories/purchasable')

const pokemon     = Model => Object.freeze(
    Object.assign({},
        crudable(Model),
        purchaseble(Model)
        /** {custom Methods} **/))

module.exports = pokemon(Model)
