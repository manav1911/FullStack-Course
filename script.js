// // fetch('https://jsonplaceholder.typicode.com/todos')
// //     //If one then has an error and no other one will work as the error will go in catch and return the error
// //     .then(data => data.json())
// //     // .then(data => {     
// //     //     return data.json()
// //     // })

// //     .then(finalData => {
// //         console.log(finalData)
// //     })
// //     //Catch is needed when using promises
// //     .catch(error => {
// //         console.log(error)
// //     })  

// //async must be used before the function to use await
// const getTodos = async () => {
//     // //await can only be used next to a promise
//     // const result = await fetch('https://jsonplaceholder.typicode.com/todos')
//     // //result.json() is not a function but it is a promise (pending promise)
//     // const data = await result.json()
//     // console.log(data)

//     // //To catch errors use the try/catch block
//     // //This is a modern approach for more complex code
//     // try {
//     //     console.log(1)
//     //     //Whenever an aynchronous item has await to it, it will be added to the queue and no further execution happens
//     //     const result = await fetch('https://jsonplaceholder.typicode.com/todos')
//     //     console.log(2)
//     //     const data = await result.json()
//     //     console.log(3)
//     //     console.log(data)
//     // }
//     // catch(error) {
//     //     console.log(error)
//     // }

//     // try{
//     //     console.log(1)
//     //     await new Promise(resolve => {
//     //         setTimeout(() => resolve(),5000)
//     //     })
//     //     console.log(2)
//     //     await new Promise(resolve => {
//     //         setTimeout(() => resolve(),4000)
//     //     })
//     //     console.log(3)
//     // }
//     // catch (error) {
//     //     console.log(error)
//     // }

//     // try{
//     //     //From this example we see that await doesn't let the execution of the function to move on whether it's synchronous or asynchronous 
//     //     console.log(1)

//     //     new Promise((resolve) => {
//     //         setTimeout(() => resolve(), 4000)
//     //     }).then(() => console.log(2))

//     //     new Promise((resolve) => {
//     //         setTimeout(() => resolve(), 4000)
//     //     }).then(() => console.log(3))
//     // }
//     // catch (error) {
//     //     console.log(error)
//     // }

//     try{
//         console.log(1)

//         const p1 = new Promise((resolve) => {
//             setTimeout(() => resolve(), 5000)
//         })

//         const p2 = new Promise((resolve) => {
//             setTimeout(() => resolve(), 4000)
//         })

//         //Executing all the promises at once
//         /*promise.all() is a method that accepts an array of promises 
//         Therefore, it accepts an array of promises and it returns a new promise which only resolves when all the promises in the array have been fullfiled*/
//         const p3 = Promise.all([p1,p2])
//         await p3
//         console.log(p3)
//     }
//     catch (error) {
//         console.log(error)
//     }
    
// }
// getTodos()
// //We get this output below first because when a function is made async the execution order is not guaranteed, it is placed into the queue and it will keep waiting until everything else is executed
// console.log('Hello')




const input = document.querySelector('input')
const button = document.querySelector('button')
const ul = document.querySelector('ul')


const searchForRecipe = async()=>{
    try {
        ul.innerHTML=""
        const searchString = input.value
        const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchString}&app_id=286bc7ab&app_key=35a1884caeea3f9d221f90a10178d3de%09`
        const response = await fetch(endpoint)
        const data = await response.json()
        console.log(data)
        const recipes = data.hits
        console.log(recipes)
        recipes.forEach(obj=>{
            const {recipe} = obj
            console.log(recipe)
            const li = document.createElement('li')
            const img = document.createElement('img')
            img.src = recipe.image
            li.innerHTML = recipe.label
            li.appendChild(img)
            ul.appendChild(li)
        })

    } catch (error) {
        
    }
}

button.addEventListener('click', searchForRecipe)