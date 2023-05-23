const express = require('express')
const port = 8080
const app = express()
const fs = require('fs')

//The get method below does the following: So when we make a request to the slash route the 
app.get('/', (request,response) => {
    response.send('First response from express server!!').status(200)
})


app.get('/todos',(req,res)=>{
    console.log({
        headers:req.headers,
        body:req.body,
        params:req.params,
        query:req.query
    })
    fs.readFile('./db.js','utf-8',(err,data)=>{
        if(err){
            console.log(err)
        }
        // //This is a textual response
        // res.status(200).send(
        //     data
        // )
        //Send as an object converts to JSON response
        res.status(200).json(
            JSON.parse(data)
        )
    })
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})