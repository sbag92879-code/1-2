const http = require('http');

const server = http.createServer((req, res) => {
    res.statuCode = 200;
    res.setHaeder('Content-Type', 'text/plain');
    res.end('Hello', 'world!\n');
    
});

server.listen(3000, '0.0.0.0',() => {
    console.log('Sever running at http://localhost:3000/');

});
