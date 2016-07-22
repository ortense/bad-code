'use strict';

const crudable = Model => ({

    create: (req, res) =>
        Model.create(req.body).then(object => res.send(object)),

    retrieve: (req, res) =>
        Model.findAll().then(objects => res.json(objects)),

    update: (req, res) =>
        Model.update(req.body, { where: {id: req.params.id} })
            .then(() => Model.findById(req.params.id))
            .then(object => res.json(object)),

    delete: (req, res) =>
        Model.findById(req.params.id)
            .then(data => data.destroy())
            .then(object => res.json(object)),

    get: (req, res) =>
        Model.findById(req.params.id).then(object => res.json(object))
})

module.exports = crudable
