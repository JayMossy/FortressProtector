import { keys } from "../input/input.js";
import { player } from "../entities/player.js";


export function playerMovement(deltaTime) {
    if (keys.right) {
        player.x += player.speed * deltaTime;
    }

    if (keys.left) {
        player.x -= player.speed * deltaTime;
    }

    if (keys.up) {
        player.y -= player.speed * deltaTime;
    }

    if (keys.down) {
        player.y += player.speed * deltaTime;
    }
}