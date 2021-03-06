
'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + '/../config/config.json')[env];
var db = {};

module.exports =  (sequelize, DataTypes) => {
    var foodPairings = sequelize.define("foodPairings", {
        // age: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        zip_code: {
            type: DataTypes.STRING,
            allowNull: true
        },
        foodInput: {
            type: DataTypes.STRING,
            // allowNull: false
        },
        // paired: {
        //     type: DataTypes.BOOLEAN,
        //     default: true
        // },
        //  description: {
        //      type: DataTypes.STRING,
        //      allowNull: false,
        //      max_allowed_packet: true
        //  },

        first_match: {
            type: DataTypes.STRING,
        // mmmmSuperSexy_match
        },
        // second_match: {
        //     type: DataTypes.STRING,
        //     // mmmmSuperSexy_match
        // },
        description: {
            type: DataTypes.STRING(2000),
            // allowNull: false
        },
    });
    return foodPairings;
};

