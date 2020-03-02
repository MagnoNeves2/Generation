// document.querySelector('#add').addEventListener('click', () => {
//     let estadoSelecionado = document.getElementById('estado').value;
//     localStorage.setItem('Estado', estadoSelecionado);
// });

// document.querySelector('#add').addEventListener('click', () => {
//     let dataInicioSelecionada = document.getElementById('dataInicio').value;
//     localStorage.setItem('Data Início', dataInicioSelecionada);
// });

// document.querySelector('#add').addEventListener('click', () => {
//     let dataFinalSelecionada = document.getElementById('dataFinal').value;
//     localStorage.setItem('Data Final', dataFinalSelecionada);
// });


// document.querySelector('#delete').addEventListener('click', () => {
//     localStorage.removeItem('Estado');
// });

// document.querySelector('#delete').addEventListener('click', () => {
//     localStorage.removeItem('Data Início');
// });

// document.querySelector('#delete').addEventListener('click', () => {
//     localStorage.removeItem('Data Final');
// });

// Verifica se existe a key estado dentro do localStorage e altera o valor da tag select
if(localStorage.Estado){
    document.getElementById('estado').value = localStorage.Estado;
};

// Verifica se existe a key dataInicio dentro do localStorage e altera o valor da tag input
if(localStorage.DataInicio){
    document.getElementById('dataInicio').value = localStorage.DataInicio;
};

// Verifica se existe a key DataFinal dentro do localStorage e altera o valor da tag input
if(localStorage.DataFinal){
    document.getElementById('dataFinal').value = localStorage.DataFinal;
};

// Função SalvarData (arrow function)
let salvarData = () =>{

    // Variavéis armazenando o Valor dos inputs e do Select
    let estadoSelecionado = document.getElementById('estado').value;
    let dataInicioSelecionada = document.getElementById('dataInicio').value;
    let dataFinalSelecionada = document.getElementById('dataFinal').value;

    // Armazenando as informações das variavéis dentro do LocalStorage
    localStorage.setItem('Estado', estadoSelecionado);
    localStorage.setItem('DataInicio', dataInicioSelecionada);
    localStorage.setItem('DataFinal', dataFinalSelecionada);
}

//onchange = Aciona a função salvarData toda vez que ocorrer uma mudança no documento
document.onchange = salvarData;



// Para atribuir os parametros do LocalStorage.setItem é necessário informar 2 parametros, um sendo a (KEY) e o outro sendo o (Value).
// Quando eu for criar a condição para manter as informações definidas pelo usuário, o objeto que eu puxarei do LocalStorage é o mesmo nome da Key.
// ESCREVA TUDO SEM PONTUAÇÃO, SEU CABAÇO!!!
// Usar o ('Use strict';) para forçar o meu JavaScript a rodar com todas as boas práticas no código, me lembra caso eu esqueça algum ; ou algo do tipo.
