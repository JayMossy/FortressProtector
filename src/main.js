import { update, render } from "./gameManager.js";

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

let lastTime = 0;

function gameLoop(timeStamp) {
    const deltaTime = (timeStamp - lastTime) / 1000 // compute deltaTime in seconds
    lastTime = timeStamp;

    update(deltaTime);
    render(ctx);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop)