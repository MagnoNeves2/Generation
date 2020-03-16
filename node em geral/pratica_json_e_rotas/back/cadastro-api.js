const express = require('express'); //Constante criada para "importar" o express no arquivo.
const port = 3000; // Constante criada para definir qual a porta a ser acessada no servidor.
const app = express(); // Constante criada para inicializar a plicação express.
const bodyParser = require('body-parser'); // Constante criada para "importar" o body-parser (que serve para permitir que clientes externos possam enviar informação para sua aplicação Node.js, através de formulários, por exemplo) no arquivo.
const fs = require('fs'); // Constante criada para "importar" o módulo File System do Node.js, que tem por finalidade operar em cima dos arquivos, ou seja, ser capaz de ler, criar, atualizar, deletar e renomear. 
let rawdata = fs.readFileSync('banco-dados.json'); // Variavél criada para ler o arquivo de forma bruta.
let banco_dados = JSON.parse(rawdata); // Variavél criada para converter o formato de arquivo, nesse caso, foi convertido para JSON. 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h1>Teste</h1>');
});

app.post('/cadastro', (req, res) => {
    const cadastro = req.body; // Constante criada para armazenar o corpo da requisição, ou seja, os dados a serem fornecidos.
    console.log(cadastro);
    banco_dados.push(cadastro); // Damos um Push na variavel (cadastro, no caso) que contém as informações a serem anexadas no arquivo JSON.
    let jsonList = JSON.stringify(banco_dados); // Variavel criada para converter valores em javascript para uma String JSON.
    fs.writeFile('banco-dados.json', jsonList, 'utf8', () => { }); //Usado para escrever no arquivo (banco-dados.js, no caso), o jsonList (que contêm os dados lá do banco-dados.js + cadastro, tudo em formato JSON) e ao final recebe um callback vazio. 
    res.send('Cadastro adicionado ao Banco de dados!') // Criado para dar uma resposta na tela de que foi add os dados.
});

app.get('/inscritos', (req, res) => {
    res.json(banco_dados);
});

app.get('/cadastro/:cpf', (req, res) => {
    const cpf = req.params.cpf; // Constante criada para ser utilizada como filtro na pesquisa.
    for (let dado of banco_dados) { // For criado para percorrer todo o arquivo (nesse caso, o arquivo banco-dados.js, em que seu valores estão atribuidos na variavel banco_dados)
        if (dado.cpf === cpf) { //Se o valor fornecido na url é igual em valor e tipo.
            res.json(dado); // Dará como resposta o dado encontrado!
            return;
        }
    }
    res.status(404).send('<h1>Dado não encontrado</h1>'); // Caso o dado não seja localizado retornará a mesagem.
});

app.delete('/cadastro/:cpf', (req, res) => {
    const cpf = req.params.cpf; // Constante criada para ser utilizada como filtro na pesquisa.
    for (dado of banco_dados) { // For criado para percorrer todo o arquivo (nesse caso, o arquivo banco-dados.js, em que seu valores estão atribuidos na variavel banco_dados)
        if (dado.cpf === cpf) { //Se o valor fornecido na url é igual em valor e tipo.
            let index = banco_dados.indexOf(dado, 0); // Variavel que armazena o elemento a ser encontrado dentro da String em sua posição inicial, ou seja, 0.
            banco_dados.splice(index, 1); // splice serve para "deletar/recortar" e pode ter indefinidos parametros, sendo q o primeiro paramentro a ser passado será o index(onde deve iniciar a remoção), o segundo parametro é a quantidade de valores a serem removidos a partir de onde se encontra.
        }
    }
    let jsonList = JSON.stringify(banco_dados); // Variavel criada para converter valores em javascript para uma String JSON.
    fs.writeFile('banco-dados.json', jsonList, 'utf8', () => { }); //Usado para escrever no arquivo (banco-dados.js, no caso), o jsonList (que contêm os dados lá do banco-dados.js + cadastro, tudo em formato JSON) e ao final recebe um callback vazio.
    res.send('Dado foi excluído com sucesso!'); // Criado para dar uma resposta na tela de que foi deletado os dados.
});

app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`);
});