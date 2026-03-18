// Resource node state
// Resource node methods
export class ResourceNode {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.h = 40;
        this.w = 40;
        this.type = type;
        this.capacity = 5;
        this.empty = false;
        this.respawnInterval = 5; // seconds to respawn
    }

    isEmpty() {
        if (capacity <= 0) {
            this.empty = true;
        }
    }
}