import House from "./house"

console.log("Boilerplate Webpack Server")

const smallHouse = new House(40, 200_000)
const largeHouse = new House(80, 501_000)

console.log(largeHouse.pricePerSquareMeter() - smallHouse.pricePerSquareMeter())
