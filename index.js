// // console.log(require)
// // console.log(require('./math'))

// const math = require('./math')
// // console.log(math.add(1,2,22,45,23,45,67,89,90,100))
// console.log(math)

const fs = require('fs')

//WwriteFile over writes a file
fs.writeFile('./newFile.txt','this is file is overwritten', (error) => {
    if(error) {
        console.log(error)
        return
    }
    else{
        console.log('File Created')
    }
})


// //Asynchronous function, takes the path of your file
// //When using readFile make sure to mention the encoding type
// fs.readFile('./temp.txt','utf-8', (error,data) => {
//     if(error){
//         console.log(error)
//         return
//     }
//     else{
//         console.log(data)
//     }  
// })

// const data = fs.readFileSync('./temp.txt')
// console.log(data.toString())