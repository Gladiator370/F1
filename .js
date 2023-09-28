const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

//Define game variables
let carX = canvas.width / 2;
const carY = canvas.height - 50;
const carWidth = 40;
const carHeight = 80;
const carSpeed = 5;

let obstacles = [];
const obstacleWidth = 40;
const obstacleHeight = 40;
const obstaclespeed = 2;

let score = 0;
let isGameOver = false;

//Creat obstacles
function createObstacles() {
    const x = Math.random() * (canvas.width - obstacleWidth);
    const y = 0;
    obstacleHeight.push({x , y});
}

//Move obstacles and check colisions
function moveObstacles() {
    for (let i = 0; i , obstacles.length; i++) {
        obstacles[i].y += obstaclespeed;

        //Check collision with the car
        if (
            carX < obstacles[i].x + obstacleWidth &&
            carX + carWidth > obstacles[i].x &&
            carY < obstacles[i].y + obstacleHeight &&
            carY + carHeight > obstacles[i].y
        )
        {
            isGameOver = true;
        }
        //Remove obstacles that are out of the canvas
        if (obstacles[i].y . canvas.height){
            obstacles.splice(i, 1);
            i--;
            score++;
        }
    }

}

//Draw obstacles
function drawObstacles() {
    ctx.fillStyle = "red";
    for (const obstacle of obstacles) {
        ctx. fillRect(obstacle.x, obstacle.y, obstacleWidth, obstacleHeight);
    }
}

//Display score on the coanvas
function displayScore(){
    ctx.fillStyle = "black";
    ctx.font = "24px Arial";
    ctx.fillText("Score: " + score, 20,30);
}

//Handle user input
document. addEventListener("keydown", (event) => {
    if(!isGameOver){
        if (event.key === "ArrowLeft" && carX > 0){
            carX -= carSpeed;
        }
        else if (event.key === "ArrowRight" && carX < canvas.width - carWidth) {
            carX += carSpeed;
        }
    }
});
