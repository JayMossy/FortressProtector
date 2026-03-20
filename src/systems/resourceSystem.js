import { ResourceNode } from "../entities/resourceNode.js"
import { player } from "../entities/player.js"
import { WORLD } from "../worldConfig.js";

const wood = new ResourceNode("wood");
const fiber = new ResourceNode("fiber");

wood.x = WORLD.centerX + (WORLD.nodeDistance * Math.cos(Math.PI / 4))
wood.y = WORLD.centerY - (WORLD.nodeDistance * Math.sin(Math.PI / 4))
fiber.x = WORLD.centerX + (WORLD.nodeDistance * Math.cos(Math.PI / 4))
fiber.y = WORLD.centerY + (WORLD.nodeDistance * Math.sin(Math.PI / 4))

let gathering = false;

export function isGathering(player, resource) {
    if (player.x >= resource.x - 5 && player.x <= resource.x + 5 && !resource.empty) {
        if (player.y >= resource.y - 5 && player.y <= resource.y + 5) {
            gathering = true;
        }
    }
    return gathering
};

export function gatherResource(player, resource, deltaTime) {
    if (gathering) {
        const gatherAmount = player.gatherSpeed * deltaTime;
        resource.capacity -= gatherAmount;
        player.inventory[resource.type] += gatherAmount;
    }
}