const request = require('request-promise')

const pagarme = purchase => {
    let json    = {
        api_key: 'ak_test_WHgSu2XFmvoopAZMetV3LfA2RfEEQg',
        amount: purchase.pokemon.price * purchase.pokemon.quantity * 100,
        card_number: purchase.buyer.card_number,
        card_expiration_date: purchase.buyer.card_expiration_date,
        card_holder_name: purchase.buyer.card_holder_name,
        card_cvv: purchase.buyer.card_cvv,
        metadata: {
            product: 'pokemon',
            name: purchase.pokemon.name,
            quantity: purchase.pokemon.quantity
        }
    }

    return request({
        uri: 'https://api.pagar.me/1/transactions',
        method: 'POST',
        json
    })
}


module.exports = pagarme
