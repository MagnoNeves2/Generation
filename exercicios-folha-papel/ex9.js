let quartos = 30;
let valorDiaria = 50;
let n = 1;

while (n < quartos) {
    let nomeCliente = prompt('Insira o nome do Cliente.');
    let diaria = parseInt(prompt('Insira a quantidade de diárias do cliente.'));

    if (diaria < 15) {
        for (i = 1; i <= diaria; i++) {
            let gastoDiaria = valorDiaria + 4;
            var debito = gastoDiaria * diaria;
            console.log(`Cliente: ${nomeCliente} | Número de diarias: ${i} | Valor da diaria: ${gastoDiaria}`);
        };
        console.log(`Total a receber: R$${debito}`)
    }

    else if (diaria == 15) {
        for (i = 1; i <= 15; i++) {
            let gastoDiaria = valorDiaria + 3.60;
            var debito = gastoDiaria * diaria;
            console.log(`Cliente: ${nomeCliente} | Número de diarias: ${i} | Valor da diaria: ${gastoDiaria}`);
        };
        console.log(`Total a receber: R$${debito}`)
    }

    else if (diaria > 15) {
        for (i = 1; i <= diaria; i++) {
            let gastoDiaria = valorDiaria + 3;
            var debito = gastoDiaria * diaria;
            console.log(`Cliente: ${nomeCliente} | Número de diarias: ${i} | Valor da diaria: ${gastoDiaria}`);
        };
        console.log(`Total a receber: R$${debito}`)
    }
    n++;
}



