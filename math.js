const add = (...rest)=> rest.reduce((acc, val)=> acc + val, 0)
const multiply = (...rest)=> rest.reduce((acc, val)=> acc * val, 1)

// module.exports = {
//     add,
//     multiply,
//     something: 'else',
//     age:22
// }

console.log('This is a log from the math module')

// module.exports = add
module.exports = [1,2,5]