/*
const todo = [{
    text: string,
    completed: boolean | false,
    id: string
}]
*/

const todoContainer = document.querySelector('ul')
const input = document.querySelector('input')
const addButton = document.querySelector('#add')
const editButton = document.querySelector('#edit')

editButton.style = 'display: none'

//Add | Edit
let idOfElementToEdit = null

const todos = []

//Display the edit box when clicking on Edit
const showEdit = (id) => {
    // console.log(id)
    const element = todos.find((todo) => todo.id === id)
    input.value = element.text
    // button.innerHTML = 'Edit'
    addButton.style = 'display: none'
    editButton.style = 'display: inline'
    idOfElementToEdit = id
}
// const handleDelete = (e) => {}

//It takes the array maps the list
const renderList = () => {
    todoContainer.innerHTML = ''
    todos.forEach((todo) => {
        const li = document.createElement('li')
        const deleteButton = document.createElement('button')
        const editButton = document.createElement('button')
        //One Approach to delete an element from the list
        deleteButton.addEventListener('click', (e) => {
            li.remove()
            const id = todo.id
            const index = todos.findIndex((todo) => todo.id === id)
            todos.splice(index,1)
        })
        editButton.addEventListener('click', (e) => {
            showEdit(todo.id)
        })

        editButton.style = `
        background:red;`
        
        deleteButton.innerHTML = 'Delete'
        editButton.innerHTML = 'Edit'
        li.innerHTML = `
        ${todo.text}`
        li.appendChild(editButton)
        li.appendChild(deleteButton)
        todoContainer.appendChild(li)
        
    })

    // console.log(todos)
}

//Adds an element
const handleAdd = (e) => {
    // if (mode === 'add') {
        // console.log('adding item')
        // console.log(input.value)
        const itemToAdd = input.value
        if(itemToAdd !== null && itemToAdd!==''){
            todos.push({
                text: itemToAdd,
                completed: false,
                id: Date.now()
                //Date.now() is an universal date object in JS and gives a date
            })
            input.value = ''
            renderList()
            return
        }
        else{
            return window.alert('Adding an empty item is not possible')
        }
        // console.log(todos)
    // }
    // else {
    //     console.log('Edit things')
    // }
    
}

//Edit the data
const handleEdit = (e) => {
    const newValue = input.value
    const element = todos.find((todo) => todo.id === idOfElementToEdit)
    element.text = newValue
    console.log(todos)
    renderList()
    addButton.style = 'display: inline'
    editButton.style = 'display: none'
    input.value = ''
}

addButton.addEventListener('click', handleAdd)
editButton.addEventListener('click', handleEdit)