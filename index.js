const express = require('express')
const port = 8080
const app = express()

//The get method below does the following: So when we make a request to the slash route the 
app.get('/', (request,response) => {
    console.log(request.headers)
    console.log(request.path)
    console.log('Hello World')
    response.send('First response from express server!!').status(200)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})