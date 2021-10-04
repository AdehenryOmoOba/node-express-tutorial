const http = require('http');

const server = http.createServer((req, res) => {
 if (req.url === '/') {
     res.end('Welcome to our Home page!')
 }
 if (req.url === '/about') {
    res.end('Here is our brief history')
}
res.end("Page not found")
 
})
server.listen(5500)
