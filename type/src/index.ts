import express from 'express';
const app = express();
let port = 3000;

app.get('/', (req, res) => {
    res.send('FOI!!!')
});

app.listen(port);

console.log(`Servidor rodando em http://localhost:${port}.`);