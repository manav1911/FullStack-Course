// console.log('Hello World')

// for(let i=0; i<100;i++){
//     console.log('hi')
// }

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Success')
//     },1000)
// })
// myPromise.then(data => {
//     console.log(data)
// })

// console.log(module)

// // const mathModule = require('./math')
// //Destructuring
// const {add, multiply} = require('./math')
// // console.log(mathModule)

// const result = multiply(1,2,2,4,34,45,6)
// console.log(result)

const { error } = require('console')
const fs = require('fs')
// console.log(fs)

const text = 'this is a text'
// const text = 'this is a test and this file was written in NodeJs'
// fs.writeFileSync('temp.txt',text)

// //To keep the IO(network/thread) fast, use a asynchronous 
// fs.writeFile('temp.txt', text, (error) => {
//     if(error) console.log(error)
//     console.log('File Created')
// })

const data = fs.readFileSync('temp.txt')
console.log(data)