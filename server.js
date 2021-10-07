// CREATING SERVER METHOD 1

// const http = require('http');
// const server = http.createServer((req,res) => {
//   if(req.url === '/'){
//       res.end('Welcome to our home page')
//       return
//   }
//   if(req.url === '/about'){
//     res.end('Our brief History')
//     return
// }
//   res.end(`<p>Error Page...Click <a href= "/">here</a> to return to Home Page</p>`)
//   return
// })

// server.listen(5000, () => {
//     console.log('Server is listening on port 5000...')
// })

// -------------------------------------------------------------------------------

// CREATING SERVER METHOD 2

// Using Event Emitter API to create server

const http = require('http');
const server = http.createServer()
server.on('request', (req, res) => {
  res.end('Welcome Home..............')
})

server.listen(4000, () => {
  console.log('Server is up on port 4000...')
})