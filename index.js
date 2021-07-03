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
const simulation = sim.Simulation();
