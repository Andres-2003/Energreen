// index.js
const express = require('express');
const bodyParser = require('body-parser');
const calculadoraController = require("./controllers/calculadoraController")


const app = express();
const port = 3000;

// Middleware para analizar datos JSON
app.use(bodyParser.json());

app.get('/calculadora', calculadoraController.getAllCalculadoraTable);

app.get('/calculadora2', calculadoraController.getAllCalculadoraTableD);

// Inicia el servidor
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/calculadora`);
});