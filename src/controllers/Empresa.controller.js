import { Empresa } from "../models/Empresa.model.js";

let listaEmpresas = [];

function criarEmpresa(nome, cnpj, produtos, consumo){
    const novaEmpresa = new Empresa(nome, cnpj, produtos, consumo);
    listaEmpresas.push(novaEmpresa);
    return novaEmpresa;
}

function buscarTodasEmpresas(){
    return listaEmpresas;
}

function verificarConsumo(id){
    const empresaIndex = listaEmpresas.findIndex(empresa => empresa.id === id);
    if(id){
        if(listaEmpresas[empresaIndex].consumo >= 10.000){
            return "VOCÊ ESTÁ ULTRAPASSANDO O LIMITE DE EMISSÃO DE GÁS CARBONO. CASO A SUA EMPRESA NÃO REDUZIR ESSE NÚMERO, VOCÊ SERÁ MULTADO!"
        }else{
            return "VOCÊ TEM UMA EMPRESA DO BEM, QUE PENSA NAS GERAÇÕES FUTURAS E NO MUNDO, PIX DE R$10"
        }
    }else{
        return "Empresa não encontrada!"
    }
}

export { criarEmpresa, buscarTodasEmpresas, verificarConsumo }