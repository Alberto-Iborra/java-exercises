//En base al siguiente array cuenta cuantas letras "a" tenemos. El resultado debería ser 9.


const animals = ["Salamandra montesa", "Delinicio", "Tigre de puntos", "Saltamontañas"]
let caracter ='a'
let contador=0
for (let index = 0; index < animals.length; index++) {
    const element = animals[index];
    for (let i = 0; i < element.length; i++) {
        if(element.charAt(i) == caracter.charAt(0) ){
        contador ++;
        }
        }
}
console.log(contador);

