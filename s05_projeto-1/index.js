const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./database/database');
const Pergunta = require('./database/Pergunta');

//Database
connection
  .authenticate()
  .then(() => {
    console.log('DB Conectado!');
  })
  .catch((msgErro) => {
    console.log(msgErro);
  })

//Estou dizendo para o Express usar o EJS como View engine
app.set('view engine', 'ejs');
app.use(express.static('public'));

//Body parser - captura de dados do formulário
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get('/', (req, res) => {
  Pergunta.findAll({ raw: true, order: [['id', 'DESC']] }) //ASC = Crescente || DESC = Decrescente
    .then(perguntas => {
      console.log(perguntas);
      res.render('index', {
        perguntas: perguntas
      });
    });
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/salvarPergunta', (req, res) => {
  let titulo = req.body.titulo;
  let descricao = req.body.descricao;
  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect('/')
  });
});

app.get('/pergunta/:id', (req, res) => {
  let id = req.params.id;
  Pergunta.findOne({
    where: { id: id }
  }).then(pergunta => {
    if (pergunta != undefined) {
      res.render('pergunta', {
        pergunta: pergunta
      });
    } else {
      res.redirect('/');
    }
  });
});

//Configuração a porta localhost
app.listen(8080, () => {
  console.log('App rodando!');
});