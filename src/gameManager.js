import { WORLD } from "./worldConfig.js";
import { player } from "./entities/player.js";
import { fortress } from "./entities/fortress.js";
import { wood, fiber, isGathering, gatherResource } from "./systems/resourceSystem.js";
import { playerMovement } from "./systems/playerMovement.js";

// change game state
export function update(deltaTime) {
    playerMovement(deltaTime);
    
    
}

// show current game state
export function render(ctx) {
    // clear canvas each frame
    ctx.clearRect(0, 0, WORLD.width, WORLD.height);
    
    // draw player
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(player.x, player.y, player.w, player.h);

    // draw fortress
    ctx.fillStyle = '#0000FF';
    ctx.fillRect(fortress.x - fortress.w / 2, fortress.y - fortress.h / 2, fortress.w, fortress.h);

    // draw resources
    ctx.fillStyle = '#78440a';
    ctx.fillRect(wood.x, wood.y, wood.w, wood.h);

    ctx.fillStyle = '#008800';
    ctx.fillRect(fiber.x, fiber.y, fiber.w, fiber.h);

}