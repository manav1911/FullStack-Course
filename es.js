//Below is an example of spread operator


// const a = [1,2,3,4]
// const b = [5,6,7,8]
// const c = [...a, ...b]
// console.log(c)

// const a = {
//     name: 'John',
//     age: 30,
//     car: {
//         brand: 'BMW',
//         model: 'X5'
//     }
// }

// const b = {
//     ...a
// }

// a.name = 'Jane'
// a.age = 18
// a.car.brand = "Mercedes"
// a.car.model = 'C300D'
// console.log(b)

//Below is an example of shallow clone
// Object.keys(a).forEach(key => {
//     console.log(key)
// })
// for (let key in a){
//     console.log(key, a[key])
// }

//Below is an example of deep clone (Do more research on google, INCOMPLETE!!)
// const b = {}

// const deepClone = () => {}


// const name = a['name']
// const age = a.age
// const car = a.car
//Destructuring
// const{name, age, car} = a

// console.log(name,car,age)

// const arr = ['John', 'Jane', 'Cooper']
//To rename the values, use the semicolon and then name (':"rename"')
// const[name1,name2,name3] = arr
// console.log(name1,name2,name3)

//rest operator
// const greet = (...rest) => {
//     console.log(rest)
// }
// greet('John', 30, 12)

// const greet = (...params) => {
//     console.log(params)
// }

// const [name1,...rest] = ['John', 'Mario', 'Lightning']

// console.log(name1)
// console.log(rest)

//Ternary operator
const age = 19
const res = age > 18 ? 'adult' : 'child'
console.log(res)