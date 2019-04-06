'use strict';

const payment     = require('../services/payment-gateway')
const purchaseble = Model => ({
    buy: (req, res) => {
        Model.findOne({
            where: { name: req.body.product.name }
        })
        .then(product => {
            if (!product){
                return res.status(400).json({
                    error: `Product ${req.body.product.name} not found in stock`
                })
            }
            else if (product.stock < req.body.product.quantity) {
                return res.status(400).json({
                    error: `Not enought ${product.name} in stock: ${product.stock}`
                })
            }

            req.body.product.price = product.price
            req.body.product.productName = Model.name

            payment(req.body).then(body => {
                if (body.status === 'paid') {

                    product.stock = product.stock - req.body.product.quantity;
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
