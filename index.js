const { resolveObjectURL } = require('buffer')
const { error } = require('console')
const express = require('express')
const uuid = require("uuid")
const port = 8080
const app = express()
const fs = require('fs')

const logger = (req, res, next) => {
    console.log(`Request method: ${req.method} and request path: ${req.path}`);
    next();
};

app.use(logger);
app.use(express.json());

app.get("/ping", (req, res) => {
    res.status(200).send("PONG");
});

// create an endpoint to get all of the todos

/**
 response body structure
 * status: 200
 * data: {}
 * message: "Success"
 */

app.get("/todos", async (req, res) => {
    try {
        //This gives a promise
        const data = await fs.promises.readFile("./db.json", "utf-8");
        return res.status(200).json({
            message: "Successfully fetched the todos",
            data: JSON.parse(data),
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            data: null,
        });
    }
});

// create an endpoint to add a todo
app.post("/todos", async (req, res) => {
    try {
        console.log(req.body);
        const { title } = req.body;
        const todo = {
            title: title,
            isComplete: false,
            id: uuid.v4(),
        };
        const data = await fs.promises.readFile("./db.json", "utf-8");
        const parsedData = JSON.parse(data);
        parsedData.push(todo);
        await fs.promises.writeFile("./db.json", JSON.stringify(parsedData));
        return res.status(200).json({
            message: "Successfully fetched the todos",
            data: parsedData,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            data: null,
        });
    }
});

// create an endpoint to delete a todo

app.delete('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await fs.promises.readFile("./db.json", "utf-8");
        const parsedData = JSON.parse(data);
        const todo = parsedData.find((todo) => todo.id === id);
        if (todo) {
            // delete the todo from array
            const filteredData = parsedData.filter((todo) => todo.id !== id);
            await fs.promises.writeFile("./db.json", JSON.stringify(filteredData));
            return res.status(200).json({
                message: "Todo deleted successfully",
                data: filteredData
            })
        }
        return res.status(400).json({
            message: "Todo with this id does not exist",
            data: null,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            data: null,
        });
    }
})

// create an endpoint to update a todo
app.patch('/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, isComplete } = req.body;
        const parsedData = JSON.parse(data);
        const todo = parsedData.find((todo) => todo.id === id);
        if (title && title === '') return res.status(400).json({
            message: "Todo title can not be empty",
            data: null,
        });
        if (todo) {
            // delete the todo from array
            todo = {
                ...todo,
                title: title || todo.title,
                isComplete: isComplete || todo.isComplete
            }
            await fs.promises.writeFile("./db.json", JSON.stringify(parsedData));
            return res.status(200).json({
                message: "Todo deleted successfully",
                data: parsedData
            })
        }
        return res.status(400).json({
            message: "Todo with this id does not exist",
            data: null,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            data: null,
        });
    }
})
// //Middleware
// const logger = (req,res,next)=>{
//     console.log(`Request method: ${req.method} and request path: ${req.path}`)
//     next()
// }
// app.use(logger)
// //When payload with http request, we need to parse it
// //We use a builtin middleware
// app.use(express.json())

// app.get('/ping', (req, res) => {
//     res.status(200).send('PONG')
// })

// //Create an endpoint to get all the todos
// /*
// RESPONSE STRUCTURE
//     contain the status: 200
//     data:{}
//     message: "Success"
// */
// app.get('/todos', async(req, res) => {
//     try{
//         const data = await fs.promises.readFile('/db.json','utf-8')
//         return res.status(200).json({
//             message: "Successfully fetched the todos",
//             data: JSON.parse(data)
//         })

//         // //This implementation relies on a callback function 
//         // fs.readFile('./db.json', 'utf-8', (err, data) => {
//         //     if(err){
//         //         console.log(err)
//         //         return res.status(500).json({
//         //             message: "Internal Server Error",
//         //             data: null
//         //         }) 
//         //     }
//         //     //Data is sent in textual form but tells the client the response is a json response
//         //     return res.status(200).json({
//         //         message: "Successfully fetched the todos",
//         //         data: JSON.parse(data)
//         //     })
//         // })
//     }
//     catch(error){
//         console.log(error)
//         return res.status(500).json({
//             message: "Internal Server Error",
//             data: null
//         }) 
//     }
// })

// //Creating an endpoint to add a todo
// app.post('/todos', async(req,res) => {
//     console.log(req.body)
//     const {title} = req.body
//     const todo = {
//         title: title,
//         isComplete: false
//     }
//     const data = await fs.promises.readFile('/db.json','utf-8')
//     const parseData = JSON.parse(data)
//     parseData.push(todo)
//     await fs.writeFile('/db.json', JSON.stringify(parseData))
//     return res.json(req.body)
//     // const {isComplete,title} = req.body
// })

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})