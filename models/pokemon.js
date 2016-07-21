'use strict';

const pokemonFactory = (sequelize, DataType) =>
    sequelize.define('pokemon', {
    	name: {
    		type: DataType.STRING,
    		allowNull: false
    	},
    	price: {
    		type: DataType.INTEGER,
    		allowNull: false
    	},
    	stock: {
    		type: DataType.INTEGER,
    		allowNull: true,
    		defaultValue: 1
    	}
    })

module.exports = pokemonFactory
