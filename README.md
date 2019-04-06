# Good code :)


## Entry points

### GET /pokemon

`content-type`: `application/json`

`body`:
```js
{}
```

`response example`:
```js
[
    {
        "id": 1,
        "name": "Eevee",
        "price": 500,
        "stock": 10,
        "createdAt": "2016-07-18T14:34:13.025Z",
        "updatedAt": "2016-07-22T16:35:01.638Z"
    },
    {
        "id": 2,
        "name": "Umbreon",
        "price": 1000,
        "stock": 100,
        "createdAt": "2016-07-22T16:27:33.337Z",
        "updatedAt": "2016-07-22T16:27:33.337Z"
  }
]
```

### GET /pokemon/:id

`content-type`: `application/json`

`body`:
```js
{}
```

`response example`:
```js

{
    "id": 1,
    "name": "Eevee",
    "price": 500,
    "stock": 10,
    "createdAt": "2016-07-18T14:34:13.025Z",
    "updatedAt": "2016-07-22T16:35:01.638Z"
}
```

### POST /pokemon/

`content-type`: `application/json`

`body`:
```js
{
    "name": "Espeon",
    "price": 1000,
    "stock": 100
}
```

`response example`:
```js
{
    "id": 3,
    "name": "Espeon",
    "price": 1000,
    "stock": 100,
    "updatedAt": "2016-07-22T16:36:37.143Z",
    "createdAt": "2016-07-22T16:36:37.143Z"
}
```

### PUT /pokemon/:id

`content-type`: `application/json`

`body`:
```js
{
    "price": 1000,
    "stock": 99
}
```

`response example`:
```js
{
    "id": 3,
    "name": "Espeon",
    "price": 1000,
    "stock": 100,
    "updatedAt": "2016-07-22T16:36:37.143Z",
    "createdAt": "2016-07-22T16:36:37.143Z"
}
```

### DELETE /pokemon/:id

`content-type`: `application/json`

`body`:
```js
{}
```

`response example`:
```js
{
    "id": 3,
    "name": "Espeon",
    "price": 1000,
    "stock": 100,
    "updatedAt": "2016-07-22T16:36:37.143Z",
    "createdAt": "2016-07-22T16:36:37.143Z"
}
```

### POST /pokemon/buy

`content-type`: `application/json`

`body`:
```js
{
    "buyer": {
        "card_number": "4024007138010896",
        "card_expiration_date": "1050",
        "card_holder_name": "Ash Ketchum",
        "card_cvv": "123"
    },
    "product": {
        "name": "eevee",
        "quantity": 1
    }
}
```

`response example`:
```js
{
    "object": "transaction",
    "status": "paid",
    "refuse_reason": null,
    "status_reason": "acquirer",
    "acquirer_response_code": "00",
    "acquirer_name": "pagarme",
    "authorization_code": "195260",
    "soft_descriptor": null,
    "tid": 584705,
    "nsu": 584705,
    "date_created": "2016-07-22T20:39:48.745Z",
    "date_updated": "2016-07-22T20:39:49.112Z",
    "amount": 100000,
    "authorized_amount": 100000,
    "paid_amount": 100000,
    "refunded_amount": 0,
    "installments": 1,
    "id": 584705,
    "cost": 50,
    "card_holder_name": "Ash Ketchum",
    "card_last_digits": "0896",
    "card_first_digits": "402400",
    "card_brand": "visa",
    "postback_url": null,
    "payment_method": "credit_card",
    "capture_method": "ecommerce",
    "antifraud_score": null,
    "boleto_url": null,
    "boleto_barcode": null,
    "boleto_expiration_date": null,
    "referer": "api_key",
    "ip": "189.102.100.45",
    "subscription_id": null,
    "phone": null,
    "address": null,
    "customer": null,
    "card": {
        "object": "card",
        "id": "card_ciqqqbpyy00vgx26e26b84fgt",
        "date_created": "2016-07-17T15:00:31.933Z",
        "date_updated": "2016-07-17T15:00:32.469Z",
        "brand": "visa",
        "holder_name": "Ash Ketchum",
        "first_digits": "402400",
        "last_digits": "0896",
        "country": "US",
        "fingerprint": "Eh77mr4zT8zz",
        "valid": true,
        "expiration_date": "1050"
    },
        "split_rules": null,
        "metadata": {
        "product": "pokemon",
        "name": "umbreon",
        "quantity": 1
    },
    "antifraud_metadata": {}
}
```
