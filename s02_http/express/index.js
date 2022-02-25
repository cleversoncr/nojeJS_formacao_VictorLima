const express = require('express'); // Importando o express
const app = express(); // Iniciando o express

app.get('/', function (req, res) {
  res.send('Bem vindo ao guia do programador');
  // res.send('Outra resposta') // A resposta só pode ser enviada 1x após a chamada
});

// Rotas
app.get('/blog/:artigo?', function (req, res) { //Parâmetro opcional => /:<param>
  let artigo = req.params.artigo;
  if (artigo) {
    res.send(`<h2>Artigo: ${artigo}</h2>`)
  } else {
    res.send('Bem vindo ao meu blog!');
  }
})

app.get('/canal/youtube', function (req, res) {
  let canal = req.query['canal'];
  if (canal) {
    res.send(canal);
  } else {
    res.send('Nenhum canal fornecido');
  }
})

app.get('/ola/:nome/:empresa', function (req, res) {
  /*
   Para criar um parâmetro => :<param> e ao utilizar um parametro, é obrigatório digitar alguma
   informação após abarra
   req => Dados enviados pelo usuário
   res => Resposta que vai ser enviada para o usuário
  */
  let nome = req.params.nome;
  let empresa = req.params.empresa;
  res.send(`<h1>Oi ${nome} do ${empresa}</h1>`);
})

//Criando servidor
app.listen(4000, function (erro) {
  if (erro) {
    console.log('Ocorreu um erro!');
  } else {
    console.log('Servidor iniciado com sucesso!')
  }
})