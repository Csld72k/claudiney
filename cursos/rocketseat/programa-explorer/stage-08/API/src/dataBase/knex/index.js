const config = require('../../../knexfile.js');
const knex = require('knex');

const connection = knex(config.development);

module.exports = connection;