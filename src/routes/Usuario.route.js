import { Router } from "express";
import { criarUsuario, buscarTodosUsuarios } from "../controllers/Usuario.controller.js";

const usuarioRoute = Router();

usuarioRoute.post("/novo-usuario", (req, res) => {
    const { nome, email, senha } = req.body;
    const novoUsuario = criarUsuario(nome, email, senha);
    res.status(201).json(novoUsuario);
});

usuarioRoute.get("usuarios", (req, res) => {
    const usuarios = buscarTodosUsuarios();
    res.status(201).json(usuarios);
});

export { usuarioRoute }