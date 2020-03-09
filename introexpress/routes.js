const express = require('express'); //Importanto o framework express
const router = express.Router(); // Inicializa o módulo de rotas do framework Express

router.get('/', (req, res) => { // Criando uma rota GET
    res.send('Hello World'); //Resposta do servidor
});

router.get('/contato', (req, res) => { // Criando uma rota GET
    res.send('trocou de página!'); //Resposta do servidor
});

router.get('/produtos', (req, res) => { // Criando uma rota GET
    res.send('produto'); //Resposta do servidor
});

router.post('/produtos', (req, res) => { // Criando uma rota POST
    res.send('Estou com fome Patrick!'); //Resposta no Insominia, pois no navegador não é possível realixzar um Post somente um GET.
});

router.post('/servicos', (req, res) => { // Criando uma rota POST
    res.send('trocou de página!'); //Resposta no Insominia, pois no navegador não é possível realixzar um Post somente um GET
});

module.exports = router; //Exporta o módulo de Rotas

// Cria-se um modulo para poder ser exportado para outros arquivos.
//É necessário exportar o modulo para que possa ser acessado de outro lugar.