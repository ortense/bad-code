'use strict';

const fs        = require('fs')
const path      = require('path')
const router    = require('express').Router()
const routeList = []
const routes    = fs.readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
    .map(file => require(path.join(__dirname, file)))
    .reduce((prev, next) => prev.concat(next), [])

routes.forEach(route => {
    let routeName = `${route.method.toUpperCase()}:\t${route.path}`
    if (routeList.indexOf(routeName) !== -1) {
        throw new Error(`"${routeName}" Overwrited!`)
    }
    else {
        routeList.push(routeName)
        router[route.method](route.path, route.handler)
    }
})

module.exports = { router, routeList }
