const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sql = require('mssql/msnodesqlv8');

//Database
const conn = new sql.ConnectionPool({
  database: 'guiaperguntas',
  server: 'localhost',
  driver: 'msnodesqlv8',
  options: {
    trustServerCertificate: true,
    trustedConnection: true
  }
})

conn.connect()
  .then((result) => {
    if (result.connecting) {
      console.log('connecting')
    }
    if (result.connected) {
      console.log('connected')
    }
  })

//Estou dizendo para o Express usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Body parser - captura de dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get('/', (req, res) => {

  res.render('index');
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarPergunta', (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  res.send(`Formulário recebido! Titulo: ${titulo} Descrição: ${descricao}`);
});

//Configuração a porta localhost
app.listen(8080, () => {
  console.log('App rodando!');
});