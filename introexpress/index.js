const express = require('express'); //Importanto o framework express
const routes = require('./routes'); // Importando o múdulo de rotas
let port = 3000;
let app = express(); // Inicializando uma aplicação express
app.use(routes); // Inicializando o módulo rotas
app.disable('x-powered-by'); // Oculta as informações do framework utilizado nos headers


app.listen(3000, () => {
    console.log(`Servidor executando em http://localhost:${port}`);
}); //O parametro informado é o valor de uma porta, pois a função listen pede.



// O primeiro parametro é onde irei acessar (pagina raiz), o segundo representa oq será mostrado quando chegar lá.
// Eu posso ter diversas rotas no mesmo (/produtos) por exemplo...
// O .use serve para "ativar"/inicializar.