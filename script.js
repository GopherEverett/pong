let rightInterval
let puckColor
let leftInterval
let upInterval
let downInterval
const DELAY = 20
const XMAX = 360
const YMAX = 255
const XMIN = 10
const YMIN = 20
const PXMOVE = 1

const paddle = document.querySelector(".paddle");
const puck = document.querySelector(".puck");
const startButton = document.querySelector("#start");
const container = document.querySelector(".wrapper");
let contRect = container.getBoundingClientRect();
let padRect = paddle.getBoundingClientRect();
console.log(contRect)



const movePaddle = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    paddle.style.left = `${x - 20}px`;
    paddle.style.top = `${y - 20}px`;
}


const movePuckDown = () => {
    clearInterval(upInterval);
    let y = puck.getBoundingClientRect().top;
    if (y > YMAX) {
        clearInterval(downInterval);
        upInterval = setInterval(movePuckUp, DELAY)
        pickColor();
    }
    puck.style.top = `${y + PXMOVE}px`;
    
}
const movePuckUp = () => {
    clearInterval(downInterval);
    let y = puck.getBoundingClientRect().top;
    if (y < YMIN) {
        clearInterval(upInterval);
        downInterval = setInterval(movePuckDown, DELAY)
        pickColor();
    }
    puck.style.top = `${y - PXMOVE}px`;
  
}
const movePuckLeft = () => {
    clearInterval(rightInterval)
    let x = puck.getBoundingClientRect().left;
    if (x < XMIN) {
        clearInterval(leftInterval)
        rightInterval = setInterval(movePuckRight, DELAY);
        pickColor();
    }
    puck.style.left = `${x - PXMOVE}px`;
    
}
const movePuckRight = () => {
    clearInterval(leftInterval)
    let x = puck.getBoundingClientRect().left;
    if (x > XMAX) {
        clearInterval(rightInterval)
        leftInterval = setInterval(movePuckLeft, DELAY);
        pickColor();
    }
    puck.style.left = `${x + PXMOVE}px`;
    
}

// const puckMotion = () => {
//     let x = puck.getBoundingClientRect().left;
//     let y = puck.getBoundingClientRect().top;

//     if (x < XMIN) {
//         if (leftInterval) {
//             clearInterval(leftInterval)
//         }
//         rightInterval = setInterval(movePuckRight, DELAY);
//     }

//     if (y < YMIN) {
//         if (upInterval) {
//             clearInterval(upInterval)
//         }
//         downInterval = setInterval(movePuckDown, DELAY);
//     }
// }

const startGame = () => {
    rightInterval = setInterval(movePuckRight, DELAY);
    downInterval = setInterval(movePuckDown, DELAY);
    document.addEventListener("mousemove", movePaddle);
}
startButton.addEventListener("click", startGame);

function pickColor(){
    r = Math.random() * (254 - 0) + 0;
    g = Math.random() * (254 - 0) + 0;
    b = Math.random() * (254 - 0) + 0;

    puckColor = 'rgb('+r+','+g+', '+b+')';
    puck.style.backgroundColor = puckColor;
}