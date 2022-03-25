const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress', 'sa', '54Gy934f86vX4y2k', {
  host: 'localhost',
  dialect: 'mssql'
});

module.exports = connection;