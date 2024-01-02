const express = require('express');
const bodyParser = require("body-parser");

const porta = 3000;
const app = express();

const usuarios = [
  { id: 1, nome: "Dexter Jackson" },
  { id: 2, nome: "Jeremy Reynolds" }
];

app.use(bodyParser.json());

app.get('/usuarios', (req, res) => {
  try {
    res.send(usuarios)
  } catch (error) {
    res.status(404).json({ mensagem: 'Usuários não encontrados' })
  }
});

app.get("/usuarios/:id", (req, res) => {
  const usuario = usuarios.find((l) => l.id === parseInt(req.params.id));

  if (!usuario) {
    return res.status(404).json({ mensagem: "Usuario não encontrado" });
  }
  res.send(usuario);
});

app.post("/usuarios", (req, res) => {
  const novoUsuario = {
    id: usuarios.length + 1,
    nome: req.body.nome,
  };

  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

app.put("/usuarios/:id", (req, res) => {
  const usuarioIndex = usuarios.findIndex((l) => l.id === parseInt(req.params.id));

  if (usuarioIndex === -1) {
    return res.status(404).json({ mensagem: "Usuario não encontrado" });
  }
  usuarios[usuarioIndex] = {
    id: usuarios[usuarioIndex].id,
    nome: req.body.nome,
  };
  res.json(usuarios[usuarioIndex]);
});


app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
