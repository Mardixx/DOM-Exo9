/* function addButton() {
    let body = document.querySelector('body')
    
    let button = document.createElement('button')
    
    body.appendChild(button)
} */

/* setTimeout(addButton, 2000) */ //Adds a delay on a function activation

//Prompts don't work in live preview

/* function addbuttonTimes() {
    let body = document.querySelector('body')
    
    let button = document.createElement('button')
    
    body.appendChild(button)
} */

/* setInterval(addbuttonTimes, 1000) */ // Works the same as setTimeout() but calls the function repetitively

// Each letter gets displayed after the other
/* let text = 'Keller'
let i = 0

function typeWritter() {
    document.write(text[i]);
    i++
    if (i >= text.length) {
        clearInterval(timer)
    }
}
let timer = setInterval(typeWritter, 1000) */
// secondPassed() writes the seconds passed on a website and says when each minutes passes
/* let i = 0
let body = document.querySelector('body')
let span = document.createElement('span')
body.appendChild(span)
body.style.display = 'flex'
body.style.flexDirection = 'column'

function secondPassed() {let i = 0
let body = document.querySelector('body')
let span = document.createElement('span')
body.appendChild(span)
body.style.display = 'flex'
body.style.flexDirection = 'column'

function secondPassed() {
    span.innerText = ''
    i++
    let total = 0 + i
    span.innerText = total
    if (total % 60 == 0) {
        let minute = total / 60
        let minutes = document.createElement('span')
        body.appendChild(minutes)
        minutes.innerText = minute + ' minute(s) has passed'
    }
}

setInterval(secondPassed, 1000)
    span.innerText = ''
    i++
    let total = 0 + i
    span.innerText = total
    if (total % 60 == 0) {
        let minute = total / 60
        let minutes = document.createElement('span')
        body.appendChild(minutes)
        minutes.innerText = minute + ' minute(s) has passed'
    }
}

setInterval(secondPassed, 1000) */

