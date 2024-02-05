import { v4 as uuidv4} from "uuid";
import { Usuario } from "./Usuario.model.js";

class Empresa extends Usuario{
    constructor(cnpj, produtos, consumo){
        super(nome);
        this.id = uuidv4();
        this.cpnj = cnpj;
        this.produtos = produtos;
        this.consumo = consumo;
        this.created_at = new Date().toUTCString();
    }
}

export { Empresa }