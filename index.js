import * as sim from "lib-shlee-wasm"

const Counter = {
    data() {
        return {
            counter: 0,
            message: "sa ojpifd"
        }
    }
}

Vue.createApp(Counter).mount("#app")

CanvasRenderingContext2D.prototype.drawTriangle = function (x, y, size, rotation) {
    const pi = Math.PI;

    this.beginPath();
    this.moveTo(x + Math.cos(rotation) * size * 1.3,
        y + Math.sin(rotation) * size * 1.3);

    this.lineTo(x + Math.cos(rotation + 2 / 3 * pi) * size,
        y + Math.sin(rotation + 2 / 3 * pi) * size);

    this.lineTo(x + Math.cos(rotation - 2 / 3 * pi) * size,
        y + Math.sin(rotation - 2 / 3 * pi) * size);

    this.closePath();
    this.fillStyle = 'rgb(155, 7, 0)';
    this.fill();
};


const simulation = new sim.Simulation();
const world = simulation.world();
console.log(world)

const viewport = document.getElementById("viewport");

const WIDTH = viewport.width;
const HEIGHT = viewport.height;
const scale = window.devicePixelRatio || 1;

viewport.width = WIDTH * scale;
viewport.height = HEIGHT * scale;
viewport.style.width = WIDTH + 'px';
viewport.style.height = HEIGHT + 'px';


const ctx = viewport.getContext("2d");

ctx.scale(scale, scale);
ctx.translate(0.5, 0.5);

for (const anim of simulation.world().animals) {
    ctx.drawTriangle(anim.x * WIDTH, anim.y * HEIGHT, WIDTH * 0.02, anim.rotation);
}


