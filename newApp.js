console.log('start')

const {readFileSync, writeFileSync} = require('fs')

writeFileSync('./myFolder/first.txt', `God is good...`)
const file1 = readFileSync('./myFolder/first.txt', 'utf8')
console.log(file1)

writeFileSync('./myFolder/first.txt', `This is the FIRST text file...`, {flag: 'a'})
const final = readFileSync('./myFolder/first.txt', 'utf8')
console.log(final)

