import { ResourceNode } from "../entities/resourceNode.js"
import { player } from "../entities/player.js"

const resource = new ResourceNode();
const player = new player();
let gathering = false;
export function isGathering() {
    if (player.x >= resource.x +- 5 && !resource.empty) {
        resource.capacity--;
        player += resource.type;
    }
}