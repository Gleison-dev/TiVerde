import { v4 as uuidv4 } from "uuid";

class Usuario{
    constructor(nome, email, senha){
        this.id = uuidv4;
        this.nome = nome
        this.email = email;
        this.senha = senha;
        this.created_at = new Date().toUTCString();
    }
}

export { Usuario }