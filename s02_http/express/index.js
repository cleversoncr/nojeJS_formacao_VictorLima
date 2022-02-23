const express = require('express'); // Importando o express
const app = express(); // Iniciando o express

app.get('/', function (req, res) {
  res.send('Bem vindo ao guia do programador')
  // res.send('Outra resposta') // A resposta só pode ser enviada 1x após a chamada
});

// Rotas
app.get('/blog', function (req, res) {
  res.send('Bem vindo ao meu blog!')
})

app.get('/canal/youtube', function (req, res) {
  res.send('Bem vindo ao meu canal!')
})

app.get('/ola', function (req, res) {
  res.send('<h1>Oi</h1>')
})

//Criando servidor
app.listen(4000, function (erro) {
  if (erro) {
    console.log('Ocorreu um erro!');
  } else {
    console.log('Servidor iniciado com sucesso!')
  }
})