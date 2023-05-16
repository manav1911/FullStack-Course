// const age =  2

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(age > 18) resolve('You are eligible to vote')
//         else reject ('You are not eligible to vote')
//     },5000)
// })

// myPromise
// .then(result => {
//     console.log(result)
// })
// .catch(error => {
//     console.log(error)
// })

// const response = fetch('https://jsonplaceholder.typicode.com/todos')
// // console.log(response)

// //We can chain dofferent promises together (A promise can return a prom)
// response
// .then(data => {
//     // // console.log(data)
//     // // console.log(data.json())
//     // const streamData = data.json()
//     // streamData.then(finalData => {
//     //     console.log(finalData)
//     // })
//     return data.json()
// })
// .then(finalData => {
//     console.log(finalData)
// })

fetch('https://jsonplaceholder.typicode.com/todos')
//If one then has an error and no other one will work as the error will go in catch and return the error
.then(data => {     
    return data.json()
})
.then(finalData => {
    console.log(finalData)
})
//Catch is needed when using promises
.catch(error => {
    console.log(error)
})