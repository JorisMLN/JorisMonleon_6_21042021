const http = require ('http');

const server =  http.createServer((req, res) => {
    res.end('voila lol');
});

server.listen(process.env.PORT || 4200);
