const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const chalk = require('chalk')
const connection = require('./database/database');

//View engine - Páginas html
app.set('view engine', 'ejs');

//Static - Para o express aceitar trabalhar com arquivos de imagens...
app.use(express.static('public'));

//Body parser - Trabalhar com formulários
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Database - conexão no banco de dados SQL Server
connection
  .authenticate()
  .then(() => {
    console.log(chalk.blue('Database successfully connected'));
  }).catch((error) => {
    console.log(error);
  });

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(8080, () => {
  console.log('O servidor está rodando!')
});