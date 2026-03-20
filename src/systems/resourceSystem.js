import { ResourceNode } from "../entities/resourceNode.js"
import { player } from "../entities/player.js"
import { WORLD } from "../worldConfig.js";

export const wood = new ResourceNode(x, y, "wood");
export const fiber = new ResourceNode(x, y, "fiber");
const FORTY_FIVE_DEGREES = Math.PI / 4; // 45 degrees in radians

wood.x = WORLD.centerX + (WORLD.nodeDistance * Math.cos(FORTY_FIVE_DEGREES))
wood.y = WORLD.centerY - (WORLD.nodeDistance * Math.sin(FORTY_FIVE_DEGREES))
fiber.x = WORLD.centerX + (WORLD.nodeDistance * Math.cos(FORTY_FIVE_DEGREES))
fiber.y = WORLD.centerY + (WORLD.nodeDistance * Math.sin(FORTY_FIVE_DEGREES))

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