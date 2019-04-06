'use strict';

const fs        = require('fs')
const path      = require('path')
const Sequelize = require('sequelize')
const env       = process.env.NODE_ENV || 'development'
const dbuser    = process.env.DBUSER
const dbpass    = process.env.DBPASS
const dbname    = process.env.DBNAME
const dbconfig  = require('../config/config.json').db[env]
const sequelize = new Sequelize(dbname, dbuser, dbpass, dbconfig)
const db        = {}

fs.readdirSync(__dirname)
    .filter(file =>
        (file.indexOf('.') !== 0) && (file !== 'index.js'))
    .forEach(file => {
        var model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })

Object.keys(db)
    .forEach(modelName => {
        if ('associate' in db[modelName]) {
            db[modelName].associate(db)
        }
    })

db.sequelize   = sequelize
db.Sequelize   = Sequelize
module.exports = db
