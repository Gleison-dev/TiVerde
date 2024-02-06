import { Router } from "express";
import { criarEmpresa, buscarTodasEmpresas, verificarConsumo, alterarConsumo } from "../controllers/Empresa.controller.js"

const empresaRoute = Router();

empresaRoute.post("/nova-empresa", (req, res) => {
    const { nome, cnpj, produtos, consumo } = req.body;
    const novaEmpresa = criarEmpresa(nome, cnpj, produtos, consumo);
    res.status(201).json(novaEmpresa);
});

empresaRoute.get("/empresas", (req, res) => {
    const empresas = buscarTodasEmpresas();
    res.status(201).json(empresas);
});

empresaRoute.get("/verificar-consumo", (req, res) => {
    const { id } = req.body;
    const verificar = verificarConsumo(id);
    res.status(201).json(verificar);
});

empresaRoute.patch("/alterar-consumo", (req, res) => {
    const { id, novoConsumo } = req.body;
    const consumoAlterado = alterarConsumo(id, novoConsumo);
    res.status(201).json(consumoAlterado);
});

export { empresaRoute }