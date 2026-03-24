export const keys = {
    up: false,
    down: false,
    left: false,
    right: false,
    gather: false
};

window.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();

    if (key === "w" || key === "arrowup") keys.up = true;
    if (key === "s" || key === "arrowdown") keys.down = true;
    if (key === "a" || key === "arrowleft") keys.left = true;
    if (key === "d" || key === "arrowright") keys.right = true;
    if (key === "shift") keys.gather = true;
});

window.addEventListener("keyup", (e) => {
    const key = e.key.toLowerCase();

    if (key === "w" || key === "arrowup") keys.up = false;
    if (key === "s" || key === "arrowdown") keys.down = false;
    if (key === "a" || key === "arrowleft") keys.left = false;
    if (key === "d" || key === "arrowright") keys.right = false;
    if (key === "shift") keys.gather = false;
});