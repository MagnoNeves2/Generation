"use strict";
var Dados = /** @class */ (function () {
    function Dados(nome, rg, cpf, email) {
        this.nome = nome;
        this.rg = rg;
        this.cpf = cpf;
        this.email = email;
    }
    return Dados;
}());
var cadastro = new Dados('Magno de Oliveira Neves', '37.750.614-x', '228.495.698-01', 'magnoneves2@gmail.com');
console.log(cadastro.nome);
