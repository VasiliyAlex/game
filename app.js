let btn = document.querySelector('.btn'),
    input = document.querySelector('.input'),
    timeOut = document.querySelector('.time'),
    gameBox = document.querySelector('.game__block'),
    time = 0,
    score = 0,
    interval = 0;
    
btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0
        clearInterval(interval)
        start()
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }
})

gameBox.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})




function start() {
    btn.disabled = true
    timeOut.innerHTML = time
    interval = setInterval(() => {
        decrease()
    }, 1000);
    createBall()
}

function decrease() {
    if(time == 0) {
        endGame()
    }else {
        let currentTime = --time
        timeOut.innerHTML = currentTime
    }
}

function endGame() {
    gameBox.innerHTML = `<h2 class="result">Вы набрали: ${score} очков</h2>`
    btn.disabled = false
}

function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    ball.style.clipPath = form()
    let size = sizeBall()
    let coor = gameBox.getBoundingClientRect()
    let x = random(0, coor.width - size)
    let y = random(0, coor.height - size)
    
    ball.style.width = size + 'px' 
    ball.style.height = size + 'px'
    ball.style.background = randomColor()
    ball.style.top = y + 'px'
    ball.style.left = x + 'px'
    
    gameBox.append(ball)
}

function random(min,max){
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
 
function sizeBall() {
    let min = 20
    let max = 100
 return Math.floor(Math.random() * (max + 1 - min)  + min ) 
 }
 
 function randomColor() {
    let x = Math.floor(Math.random() * 255)
     let y = Math.floor(Math.random() * 255)
     let z = Math.floor(Math.random() * 255)
     let i = `rgb(${x}, ${y}, ${z})`
     return i;
}
 

let figura = ['polygon(50% 0%, 0% 100%, 100% 100%)','circle(50% at 50% 50%)', 'none' ]
function form() { 
    let i =  Math.floor(Math.random() * figura.length )
    return figura[i]
}