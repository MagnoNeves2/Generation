const express = require('express'); //Importanto o framework express
let port = 3000;
let app = express(); // Inicializando uma aplicação express

app.get('/', (req, res) => { // Criando uma rota GET
    res.send('Hello World'); //Resposta do servidor
});

app.get('/contato', (req, res) => { // Criando uma rota GET
    res.send('trocou de página!'); //Resposta do servidor
});

app.listen(3000, () => { 
    console.log(`Servidor executando em http://localhost:${port}`);
}); //O parametro informado é o valor de uma porta, pois a função listen pede.



// O primeiro parametro é onde irei acessar (pagina raiz), o segundo representa oq será mostrado quando chegar lá.