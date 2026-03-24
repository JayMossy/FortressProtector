import { ResourceNode } from "../entities/resourceNode.js"
import { WORLD } from "../worldConfig.js";

export const wood = new ResourceNode(0, 0, "wood");
export const fiber = new ResourceNode(0, 0, "fiber");
const FORTY_FIVE_DEGREES = Math.PI / 4; // 45 degrees in radians

wood.x = WORLD.centerX + (WORLD.nodeDistance * Math.cos(FORTY_FIVE_DEGREES)) - wood.w / 2;
wood.y = WORLD.centerY - (WORLD.nodeDistance * Math.sin(FORTY_FIVE_DEGREES)) - wood.h / 2;
fiber.x = WORLD.centerX + (WORLD.nodeDistance * Math.cos(FORTY_FIVE_DEGREES)) - fiber.w / 2;
fiber.y = WORLD.centerY + (WORLD.nodeDistance * Math.sin(FORTY_FIVE_DEGREES)) - fiber.h / 2;

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