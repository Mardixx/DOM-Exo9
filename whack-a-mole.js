let body = document.querySelector('body')
let bigDiv = document.createElement('div')
body.appendChild(bigDiv)
let thirdDiv = document.createElement('div')
let scoreText = document.createElement('div')
scoreText.textContent = 'Score: '
body.appendChild(thirdDiv)
thirdDiv.appendChild(scoreText)
body.style.display = 'flex'
body.style.flexDirection = 'row'
body.style.alignItems = 'center'
let i = 0

function terrain() {
    i++
    let div = document.createElement('div')
    let secondDiv = document.createElement('div')
    let score = document.createElement('div')
    div.appendChild(secondDiv)

    div.style.display = 'flex'
    div.style.justifyContent = 'center'
    div.style.alignItems = 'center'

    secondDiv.style.backgroundColor = 'black'
    secondDiv.classList.add('moleHole')
    secondDiv.style.borderRadius = '50%'
    secondDiv.style.height = '90%'
    secondDiv.style.width = '60%'

    thirdDiv.style.display = 'flex'
    thirdDiv.style.flexDirection = 'column'
    thirdDiv.style.justifyContent = 'center'
    thirdDiv.style.alignItems = 'center'

    bigDiv.style.display = 'grid'
    bigDiv.style.gridTemplateColumns = 'repeat(4, 25%)'
    bigDiv.style.gridTemplateRows = 'repeat(3, 32vh)'
    bigDiv.style.width = '80%'
    bigDiv.style.height = '100%'

    if (i >= 12) {
        clearInterval(timer)
    }
    bigDiv.appendChild(div)
    thirdDiv.appendChild(score)
    
}

let timer = terrain()

setInterval(terrain)

let moleHole = document.querySelectorAll('moleHole')
/*
    moleHole.addEventListener("click", () => {
    body.style.backgroundColor = 'red'
}) */

moleHole.forEach(function(item) {
    item.addEventListener('click', function() {
        body.style.backgroundColor = 'red'
    });
  });
