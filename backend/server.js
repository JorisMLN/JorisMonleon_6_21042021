const http = require ('http');

const server =  http.createServer((req, res) => {
    res.end('voila plus de lol');
});

server.listen(process.env.PORT || 3000);
