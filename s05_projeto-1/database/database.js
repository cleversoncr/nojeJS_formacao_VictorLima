const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'sa', '54Gy934f86vX4y2k', {
host: 'localhost',
dialect: 'mssql'
});

module.exports = connection;