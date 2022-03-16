// const Sequelize = require('sequelize');


const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'SA',
  password: '242960',
  database: 'guiaperguntas'
});

// module.exports = connection;