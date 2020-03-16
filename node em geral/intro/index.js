const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end('Hello World');    
});

server.listen(port, hostname, () => {
    console.log(`servidor rodando em http://${hostname}:${port}`);
});
