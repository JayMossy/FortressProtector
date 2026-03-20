import { WORLD } from '../config.js';
import { player } from '../entities/player.js';
import { isGathering, gatherResource } from '../systems/resourceSystem.js';
import { ResourceNode } from '../entities/resourceNode.js';

export function updateGameManager(player, deltaTime) {
    // Placeholder for game state management logic
    // This could include handling game states (e.g., main menu, playing, paused), transitions, and other high-level game logic
    function handleGameState() {
        // Example: Check if player is gathering resources
        if (isGathering(player, ResourceNode.wood)) {
            gatherResource(player, ResourceNode.wood, deltaTime);
        }
        if (isGathering(player, ResourceNode.fiber)) {
            gatherResource(player, ResourceNode.fiber, deltaTime);
        }
    }

    handleGameState();
}