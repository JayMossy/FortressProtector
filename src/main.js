import { update, render } from "gameManager.js";

export const canvas = document.getElementById("game-canvas");
export const ctx = canvas.getContext("2d");

update();
render(ctx);

