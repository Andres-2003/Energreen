const calculadoraModel = require("../models/calculadoraModel");
const calculadoraView = require("../views/calculadoraView");

// Controlador para obtener todos los consMensual y representarlos en una tabla HTML
exports.getAllCalculadoraTable = (req, res) => {
    const consMensual = calculadoraModel.getConsMensual();
    res.send(calculadoraView.renderConsMensual(consMensual));
};

// Controlador para obtener todos los consDiario y representarlos en una tabla HTML
exports.getAllCalculadoraTableD = (req, res) => {
    const consDiario = calculadoraModel.getConsDiario();
    res.send(calculadoraView.renderConsDiario(consDiario));
};