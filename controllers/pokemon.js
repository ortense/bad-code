'use strict';
const Model      = require('../models').pokemon
const payment    = require('../services/payment-gateway')
const controller = {
    get: (req, res) =>
        Model.findAll().then(pokemons => res.json(pokemons)),
    create: (req, res) =>
        Model.create(req.body).then(pokemon => res.send(pokemon)),
    buy: (req, res) => {
        Model.findOne({
            where: {
                name: req.body.name
            }
        })
        .then(pokemon => {
            if (pokemon.stock < req.body.quantity) {
                return res.status(400).json({
                    error: `Not enought ${pokemon.name} in stock: ${pokemon.stock}`
                })
            }

            payment({
                buyer: { // Esses dados deveriam estar no request ...
                    card_number: '4024007138010896',
                    card_expiration_date: '1050',
                    card_holder_name: 'Ash Ketchum',
                    card_cvv: '123'
                },
                pokemon: req.body
            })
            .then(body => {
                if (body.status == 'paid') {

                    pokemon.stock = pokemon.stock - req.body.quantity;
                    pokemon.save()
                        .then(pokemon => res.json(body))
                }
            })
            .catch(err => {
                console.log(JSON.stringify(err, null, 4));
                res.status(err.response.statusCode).json(err.response.body)
            })
        })
    }
}

module.require = pokemonController
