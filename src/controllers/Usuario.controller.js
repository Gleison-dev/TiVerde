import { Usuario } from "../models/Usuario.model.js";

let listaUsuarios = [];

function criarUsuario(nome, email, senha){
    const novoUsuario = new Usuario(nome, email, senha);
    listaUsuarios.push(novoUsuario);
    return novoUsuario;
}

function buscarTodosUsuarios(){
    return listaUsuarios;
}

export { criarUsuario, buscarTodosUsuarios }