let animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(animals, text) {
    for (let index = 0; index < animals.length; index++) {
        const animal = animals[index];
        if (animal==text) {return index}
    } 
}
const one = findArrayIndex(animals,'Caracol')
const two = findArrayIndex(animals,'Mosquito')
const three = findArrayIndex(animals,'Salamandra')
const four = findArrayIndex(animals,'Ajolote')
console.log(one);
console.log(two);
console.log(three);
console.log(four);
