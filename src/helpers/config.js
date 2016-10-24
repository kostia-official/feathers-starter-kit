const envFile = process.env.NODE_ENV === 'production' ? {} : require('../../.env.json');
const defaultConfig = require('../../config/default.json');
const productionConfig = require('../../config/production.json');
const config = require('node-helpers').config(defaultConfig, productionConfig, envFile);

module.exports = config;
