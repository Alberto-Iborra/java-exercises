const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];
let counter=0
for (const toy of toys) {
  if (!toy.name.includes("gato")) {
    counter++
  } else {toys.splice(counter,1)}
  
}
console.log(toys)

let play = []
for (const toy of toys) {
    if (!toy.name.includes("gato")) {
      play.push(toy)
    } 
    
  }
  console.log(play)

