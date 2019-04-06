'use strict';

const fs        = require('fs')
const path      = require('path')
const router    = require('express').Router()
const routeList = []

const fileLoader  = file => {
    let routes  = require(path.join(__dirname, file))
        .map(route => {
            route.path = `/${file.replace('.js', '')}${route.path}`
            return route
        })
    return routes
}

const routeLoader = route => {
    let routeName = `${route.method.toUpperCase()}:\t${route.path}`
    if (routeList.indexOf(routeName) !== -1) {
        throw new Error(`"${routeName}" Overwrited!`)
    }
    else {
        routeList.push(routeName)
        router[route.method](route.path, route.handler)
    }
    return route
}

const routes = fs.readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== 'index.js'))
    .map(fileLoader)
    .reduce((prev, next) => prev.concat(next))

routes.forEach(routeLoader)

module.exports = { router, routeList }
