function MyCar(cor, velociadeMaxima) {
    this.Cor = cor;
    this.VelocidadeMaxima = velociadeMaxima;
    this.VelocidadeAtual = 0;
}

MyCar.prototype.Acelerar = function () {
    if (this.VelocidadeAtual < this.VelocidadeMaxima) {
        this.VelocidadeAtual++;
    }
}

MyCar.prototype.Frear = function () {
    if (this.VelocidadeAtual > 0) {
        this.VelocidadeAtual--;
    }
}

let meuCarro = new MyCar('Preta', 10);
let meuFusca = new MyCar('Vermelha', 5);

var minhaFerrari = {

    Cor: "Amarela",
    VelocidadeMaxima: 300,
    VelocidadeAtual: 0,

    Acelerar: function () {
        if (this.VelocidadeAtual < this.VelocidadeMaxima) {
            this.VelocidadeAtual++;
        }
    }
};

document.getElementById('acelerar').addEventListener('click', () => {
    meuCarro.Acelerar();
    console.log('MeuCarro: ' + meuCarro.VelocidadeAtual);

    meuFusca.Acelerar();
    console.log('MeuFusca: ' + meuFusca.VelocidadeAtual);

    minhaFerrari.Acelerar();
    console.log('MinhaFerrari: ' + minhaFerrari.VelocidadeAtual);
});

// mycar é um objeto ("classe")
// prototype é usado para criar "algo" em função do objeto.
// this serve para criar uma propriedade/atributo dentro de um objeto.
