function rollDice() {
    const dado = Math.floor(Math.random()*7)
    return dado
}
let tirada = rollDice()
console.log(tirada)