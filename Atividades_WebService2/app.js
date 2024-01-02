const express = require('express');
const bodyParser = require("body-parser");
const { appendFileSync } = require('fs');

const porta = 3000;
const app = express();

const livros = [
  { id: 1, titulo: "The Lord of the Ring", autor: "J.R.R. Tolkien" },
  { id: 2, titulo: "The Hobbit: Unexpected Journey", autor: "J.R.R. Tolkien" }
];

app.use(bodyParser.json());

app.get('/livros', (req, res) => {
  res.send(livros);
});

app.get("/livros/:id", (req, res) => {
  const livro = livros.find((l) => l.id === parseInt(req.params.id));

  if (!livro) {
    return res.status(404).json({ mensagem: "Livro não encontrado" });
  }
  res.send(livro);
});



app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
