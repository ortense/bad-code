'use strict';

const payment     = require('../services/payment-gateway')
const purchaseble = Model => ({
    buy: (req, res) => {
        Model.findOne({
            where: { name: req.body.name }
        })
        .then(product => {
            if (product.stock < req.body.quantity) {
                return res.status(400).json({
                    error: `Not enought ${product.name} in stock: ${product.stock}`
                })
            }

            req.body.price = product.price
            req.body.productName = Model.name

            // req.body.product.price = product.price
            // req.body.product.productName = Model.name
            // payment(req.body)
            
            payment({
                buyer: {
                    card_number: '4024007138010896',
                    card_expiration_date: '1050',
                    card_holder_name: 'Ash Ketchum',
                    card_cvv: '123'
                },
                product: req.body
            })
            .then(body => {
                if (body.status === 'paid') {

                    product.stock = product.stock - req.body.quantity;
                    product.save()
                        .then(product => res.json(body))
                }
            })
            .catch(err => {
                console.log(JSON.stringify(err, null, 4));
                res.status(err.response.statusCode).json(err.response.body)
            })
        })
    }
})

module.exports = purchaseble
