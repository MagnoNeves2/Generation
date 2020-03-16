class Dados {
    nome: string;
    rg: string;
    cpf: string;
    email: string;

    constructor(nome: string, rg: string, cpf: string, email: string) {
        this.nome = nome;
        this.rg = rg;
        this.cpf = cpf;
        this.email = email;
    }
}

let cadastro: Dados = new Dados('Magno de Oliveira Neves', '37.750.614-x', '228.495.698-01', 'magnoneves2@gmail.com')

console.log(cadastro);