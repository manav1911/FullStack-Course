// console.log('1')
// for(let i=0; i<10; i++){
//     console.log('Loop')
// }
// console.log('2')

//Setting a timer for executing something
//setTimeout is a global function and is part of the Web API
// setTimeout(() => {
//     console.log('Executing')
// },5000)

// for(let i=0; i<1000; i++){
//     console.log('Ones')
// }
// for(let i=0; i<1000; i++){
//     console.log('Twos')
// }
// for(let i=0; i<1000; i++){
//     console.log('Threes')
// }

// // The output will be 1,2,3 for setTimeout no matter where we place this function because it is not part of JS, but it is a part of utilities of the WEBAPI helping to extend the functionality in JS
// setTimeout(() => {
//     console.log('Three')
// },400)

// console.log('One')

// setTimeout(() => {
//     console.log('Four')
// },400)

// console.log('Two')

// for(let i = 0; i<10000; i++){
//     console.log('Three')
// }

// // Similar to setTimeout
// let i = 0

// const id = setInterval(() => {
//     console.log('Interval')
//     if(++i===10){
//         clearInterval(id)
//     }
// },1000)

const getProduct1 = () => {}

const products = getProduct1()

//.then is not working idk why
products.then((result) => {
    console.log(result)
})

console.log('Hello')
console.log('Hello')
console.log('Hello')
console.log('Hello')
console.log(10+12)

// console.log(results)
// let products

// const getProduct2 = () => {}

// getProduct2()

// console.log(products)
// setTimeout(() => {
//     console.log(products)
// },1000)