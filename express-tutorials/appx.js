


// SETTING UP SERVER USING THE "HTTP" METHOD...


// const http = require('http');
// const {readFileSync} = require('fs');

// const homePage = readFileSync('./index.html')
// const homeStyles = readFileSync('./style.css')

// const Server = http.createServer((req, res) => {
//     const url = req.url
//     if (url === '/') {
//         res.writeHead(200, {'content-type': 'text/html'})
//         res.write(homePage)
//         res.end()
//     } else if (url === '/style.css') {
//         res.writeHead(200, {'content-type': 'text/css'})
//         res.write(homeStyles)
//         res.end()
//     } else if (url === '/about') {
//         res.writeHead(200, {'content-type': 'text/html'})
//         res.write(`<h1 style='color:blue; font-size:32px'>About US</h1>`)
//         res.end()
//     } else {
//         res.writeHead(400, {'content-type': 'text/html'})
//         res.write(`<h1 style='font-size:32px'>Page not found</h1><p style='font-size:32px'>Go back to <a href='/'>Home Page</a></p>`)
//         res.end()
//     }
   
// })

// Server.listen(5500)

//-----------------------------------------------------------------------------------


// SETTING UP SERVER USING THE "EXPRESS" METHOD...


// const path = require('path');
// const express = require('express');
// const app = express()

// app.use(express.static('./public'))

// app.get('/flavor1', (req, res) => {
//     res.status(200)
//     res.sendFile(path.resolve(__dirname, './index.html'))
// })

// app.get('/flavor1/about', (req, res) => {
//     res.status(200)
//     res.send('About US...falvor 1')
// })

// app.all('*', (req, res) => {
//     res.status(404)
//     res.send('Page not found...flavor1')
// })




// --------------------------------------------------------------------------------


// SETTING UP APIs using EXPRESS...


// const {products} = require('./data')
// const express = require('express')
// const app = express()

// app.get('/flavor2', (req, res) =>{
//     res.send(`<h2>Welcome to our Home Page</h2><p>Click here to view our <a href ='/flavor2/welcome/products'>products</a></p>`)
// })

// app.get('/flavor2/welcome/products', (req, res) => {
//   const newProduct = products.map((pruductSummary) => {
//       const {id, name, image} = pruductSummary;
//       return {id, name, image}
//   })
//   res.json(newProduct)
//   res.end()
// })

// app.get('/flavor2/welcome/products/:productId', (req, res) =>{
//     const {productId} = req.params;

//     const singleProduct = products.find((singleItem) => singleItem.id === Number(productId))

//     if(!singleProduct) {
//         return res.status(404).send(`Ooops!...Product does not exist...<p>Click here to return to <a href ='/welcome/products'>Products Page</a></p>`)
//     }
//     return res.json(singleProduct)
// })

// app.get('/flavor2/search/v1/query', (req, res) => {
//     console.log(req.query)
//     const {search, limit} = req.query;
//     let sortedProducts = [...products];

//     if (search) {
//         sortedProducts = sortedProducts.filter((product) => {
//          return   product.name.startsWith(search)
//         })
//     }
//     if (limit) {
//        return sortedProducts = sortedProducts.slice(0,Number(limit))
//     }
//     if (sortedProducts.length < 1){
//       return  res.status(200).send('No Product match your search!')
//     }
//     res.status(200).json(sortedProducts)
// })

// app.all('*', (req, res) => {
//     res.status(404)
//     res.send(`Page not found...<p>Click here to return to <a href ='/'>Home Page</a></p>`)
// })




//------------------------------------------------------------------------------------


// NodeJS Middlewares...


// const { response } = require('express');
// const morgan = require('morgan')
// const logger = require('./logger')
// const authorize = require('./authorize')
// const express = require('express')
// const app = express();

// app.use([logger, authorize])
// app.use(morgan('tiny'))

// app.get('/flavor3', (req, res) => {
//  res.send(`<h1>HOME - NodeJS Middleware Tutorials</h1>`)
// })

// app.get('/flavor3/about', (req, res) => {
//     res.send(`<h1>About Page</h1>`)
//    })

// app.get('/flavor3/products', (req, res) => {
//     res.send(`<h1>Product Page</h1>`)
//    })

// app.get('/flavor3/contact', (req, res) => {
//     res.send(`<h1>Contact Page</h1>`)
//    })



//-----------------------------------------------------------------------------


// HTTP Request Methods - GET, POST, PUT, DELETE...

// Using Express to handle incoming POST request on the server side...
const express = require('express')
const app = express()
const router = require('./routerFolder/routerFile')



app.use(express.static('./methods-public'))
app.use(express.json())
app.use(express.urlencoded({extended: false})) 
app.use('/flavor4', router)


app.listen(5000, () => {
    console.log('Server is up on port 5000...')
})


