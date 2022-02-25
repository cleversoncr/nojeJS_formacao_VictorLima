DROP TABLE usuarios;

CREATE DATABASE sistemaDeCadastro;

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    'João Pedro',
    'email@teste.com',
    16
);

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE idade = 8;
SELECT * FROM usuarios WHERE nome = 'Cleverson Rocha';
SELECT * FROM usuarios WHERE idade >= 18;

DELETE FROM usuarios WHERE nome = 'Luiz Henrique';

UPDATE usuarios SET nome = 'Nome de Teste' WHERE nome = 'João Pedro';