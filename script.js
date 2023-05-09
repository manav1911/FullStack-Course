// console.log(document)

// const headingObject = document.querySelector('h1')
// headingObject.innerHTML = 'this is a new heading'
// headingObject.style.color = 'red'
// console.log(headingObject)

// //Calling the elements by Id returns only one element
// const headingObject = document.getElementById('heading')
// const listObject = document.getElementById('list')
// console.log(listObject)

// //Other ways of calling elements by class returns an array
// //For each will never work in getElementsByClassName
// const listElement = document.getElementsByClassName('list-ele')
// console.log(listElement)
// listElement.forEach(ele => {
//     console.log(ele)
// });


// // Accessing the HTML element and editing using innerHTML
// headingObject.innerHTML = 'Hello World'
// headingObject.style = 'color:orange'
// console.log(headingObject)

// const arr = ['element1', 'element2', 'element3', 'element4','element5']

// arr.forEach((element) => {
//     const li = document.createElement('li')
//     const text = document.createTextNode(element)
//     li.appendChild(text)
//     listObject.appendChild(li)
//     console.log(li)
// })

// // //Creating a text node
// const textNode = document.createTextNode('Hello World')
// console.log(textNode)

// //Below is a dynamic heading that shows time
// setInterval(() => {
//     headingObject.innerHTML = new Date().toLocaleTimeString()
// }, 1000)


//Query Selector
// const heading = document.querySelectorAll('.list-ele')
// const heading2 = document.querySelector('.list-ele')
// console.log(heading)
// console.log(heading2)

const body = document.querySelector('body')
const button = document.querySelector('button')
const content = document.querySelector('#content')
const progressBar = document.querySelector('progress')



// button.addEventListener('click', (event) => {
//     console.log(event)
// })
// const callback = (event) => {
//     console.log(event)
// }
// button.addEventListener('click', callback)

// const toggleTheme = () => {
//     body.classList.toggle('dark')
    // if(body.classList.contains('dark')){
    //     body.classList.remove('dark')
    //     body.classList.add('light')
    // }
    // else {
    //     body.classList.remove('light')
    //     body.classList.add('dark')
    // }
// }

// body.addEventListener('keydown', (event) => {
//     console.log(`Key Pressed: ${event.key}`)
// })

// body.addEventListener('click', (event) => {
//     console.log(`You clicked on this position: ${event.clientX} ${event.clientY}`)
    
//     const ele = document.createElement('div')
//     ele.style.position = 'absolute'
//     ele.style.top = `${event.clientY}px`
//     ele.style.left = `${event.clientX}px`
//     ele.style.width = '10px'
//     ele.style.height = '10px'
//     ele.style.backgroundColor = '#ffbf00'
//     ele.style.borderRadius = '50%'
//     body.appendChild(ele)
// })

// body.addEventListener('mousemove', (event) => {
//     console.log(`You clicked on this position: ${event.clientX} ${event.clientY}`)
    
//     const ele = document.createElement('div')
//     ele.style.position = 'absolute'
//     ele.style.top = `${event.clientY}px`
//     ele.style.left = `${event.clientX}px`
//     ele.style.width = '10px'
//     ele.style.height = '10px'
//     ele.style.backgroundColor = '#ffbf00'
//     ele.style.borderRadius = '50%'
//     body.appendChild(ele)
// })

// body.addEventListener('scroll',(event) => {
    // if(window.scrollY > 400){
    //     const ele = document.createElement('h1')
    //     ele.innerText = 'Hello World'
    //     body.appendChild(ele)
    //     ele.style = `
    //     transition: 1s ease;
    //     position: absolute;
    //     top: 450px;
    //     left: 500px;`
    // }
// })

const contentHeight = content.clientHeight

document.addEventListener('scroll', (event) => {
    const scroll = window.screenY
    const percentage = scroll / (contentHeight - window.innerHeight)
    console.log(percentage*100)
    progressBar.value = (percentage*100).toFixed(0)
})