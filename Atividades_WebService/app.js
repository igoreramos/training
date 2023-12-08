const express = require("express");
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send('Bem-vindo ao meu web service!');
});

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
