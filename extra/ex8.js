//Dado el siguiente javascript, crea una función `attack` a la que le pases como parametro las dos naves y simule un disparo.
//Esta función generara un numero aleatorio de 1 al numero de la propiedad `.damage` de la primera nave y le restará el resultado al valor de la propiedad `.pv` de la segunda nave.
//Ejecuta la función tantas veces como quieras.

const ship1 = {name: "Banca rota", damage: 44, pv: 150};
const ship2 = {name: "Cacique pero no", damage: 66, pv: 124}
function attack (shipA,shipB){
    let attack1 = Math.floor(Math.random()*shipA.damage)+1;
    shipB.pv=shipB.pv-attack1
    if(ship1.pv<0||ship2.pv<0){console.log('final juego')}
        else {attack(ship2,ship1)
        console.log(ship1)
        console.log(ship2)
        }
}
  

attack(ship1,ship2)
   
