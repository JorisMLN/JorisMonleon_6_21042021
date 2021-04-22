const http = require ('http');

const server =  http.creatServer((req, res) => {
    res.end('voila lol');
});

server.listen(process.env.PORT || 3000);
