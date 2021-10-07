// const {readFile} = require('fs');

// readFile('./myFolder/first.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.log('Error')
//         return
//     }else {
//         console.log(data)
//     }
// })

// const EventEmitter = require('events');

// const customEmitter = new EventEmitter();

// customEmitter.on('response', (name, reg, id) => {
//     console.log(`data received successfuly from ${name} with registration number ${reg} and ID Number ${id}!`)
// })

// customEmitter.emit('response', "ADE" , 777, '1B2QY')

const {writeFileSync} = require('fs');

for (let i = 1; i <= 100; i++) {
    writeFileSync('./myFolder/bigData.txt', `God is good...${i}\n`, {flag: 'a'})
    console.log(`Done...${i}`)
}
