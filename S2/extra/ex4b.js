let animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(animals, text) {
    for (let index = 0; index < animals.length; index++) {
        let animal = animals[index];
        if (animal===text) {
            return index}
    } 
}
function removeItem (animals, text) {
   const position = findArrayIndex(animals, text);
    animals.splice(position,1);
    return animals;
}
//const animals2= removeItem (animals,'Mosquito')
//console.log(animals2)
const animals3= removeItem (animals,'Salamandra')
console.log(animals3)