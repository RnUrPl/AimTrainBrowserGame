const startBtn = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const tileList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['#000080', '#00008B', '	#0000FF', '#008000', '008B8B','	#00CED1','	#00FFFF']
let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

tileList.addEventListener('click', event => {
    if(event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
        
    screens[1].classList.add('up')
        startGame()
    }
})

board.addEventListener('click', event => {
    if(event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})


function startGame(){
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function finishGame(){
    // timeEl.parenеNode.classList.add('hide')
    board.innerHTML = `<h1>Ваш счет: ${score}</h1>`
}

function decreaseTime(){
    if(time === 0){
        finishGame()
    }else{ 
        let currentTime = --time
        if(currentTime < 10 ){
         currentTime = `0${currentTime}`
    }
    setTime(currentTime)
}
}

function setTime(value){
    timeEl.innerHTML = `00:${value}` 
}



function createRandomCircle(){
    const circle = document.createElement('div')
    const size = getRandomNum(10,60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNum(0, width - size)
    const y = getRandomNum(0, height- size)
    const color = randomColor()

    circle.classList.add('circle')
    
    circle.style.background = color
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${x}px`
    circle.style.left = `${y}px`
    board.append(circle)
}

function getRandomNum(min,max){
   return Math.round( Math.random() *(max - min) +min)
}

function randomColor(){
    const index = Math.floor(Math.random() *colors.length)
    return colors[index]
}