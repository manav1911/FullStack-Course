const express = require('express')
const port = 8080
const app = express()
const fs = require('fs')

// //Middleswares - First to be ran
// const logUserIp= (req,res,next) => {
//     console.log('middleware function ran')
//     //if we don't call the next function, it gets stuck at processing. It's a must to call next
//     next()
// }
const logUserAgent= (req,res,next) => {
    const agent = req.headers['user-agent']
    // console.log(agent)
    if (agent.includes('Chrome'))
    return res.status(403).send('Unauthorised')
    next()
}

const logger = (req,res,next)=>{
    console.log(`Request method: ${req.method} and request path: ${req.path}`)
    next()
}

app.use(logUserAgent)
app.use(logger)


//The get method below does the following: So when we make a request to the slash route the 
app.get('/', (request, response) => {
    response.send('First response from express server!!').status(200)
})

//Params
app.get('/name/:username', (req,res) => {
    console.log(req.params)
    const {username} = req.params
    res.status(200).send(`My name is ${username}`)
})
// app.get('/product/:name', (req,res) => {
    // console.log(req.params.name)
    // const {name} = req.params
    // res.status(200).send(`My name is ${username}`)
// })

app.get("/todos", (req, res) => {
    // console.log({
    //     headers:req.headers,
    //     body:req.body,
    //     params:req.params,
    //     query:req.query
    // })
    const { count } = req.query
    if (count) {
        fs.readFile("./db.js", "utf-8", (err, data) => {
            if (err) {
                console.log(err)
            }
            res.status(200).json(JSON.parse(data).slice(0, count))
        })
    } else {
        fs.readFile("./db.js", "utf-8", (err, data) => {
            if (err) {
                console.log(err)
            }
            res.status(200).json(JSON.parse(data));
        })
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})