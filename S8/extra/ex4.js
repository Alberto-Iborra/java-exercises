fetch('http://localhost:3000/planets')
  .then((response) => {
    return response.json();
  })
  .then((planets) => {
    console.log(planets);
    printPlanets(planets)
    return planets
  });
  const printPlanets = (planets) =>{
    const planetas$$ = document.querySelector("[data-function='planets']")
    for (const planet of planets) {
      const div$$ = document.createElement('div')
      div$$.innerHTML = `<img width=200px heigth=auto src="${planet.image}"/><p>"${planet.name}</p>`
      div$$.addEventListener('click',()=>takeCharacters(planet.id))
      planetas$$.appendChild(div$$)

    }
  }
const characters$$ = document.querySelector("[data-function='characters']")
 
const takeCharacters = async (idPlanet) => {
    const response = await fetch ('http://localhost:3000/characters?idPlanet='+ idPlanet);
    const characters = await response.json();
    characters$$.innerHTML='';
    characterList=[...characters]
    printcharacters(characters) 
    
  }
  
const printcharacters = (characters)=>{
  for (const character of characters) {
    const div2$$ = document.createElement('div')
    div2$$.innerHTML = `<img src="${character.avatar}"/><p>"${character.name}</p>`
    characters$$.appendChild(div2$$)
}}
  
const input$$= document.createElement('input')
input$$.addEventListener('change',() => characterSearch(input$$.value))
let characterList=[]
const divSearch$$ = document.querySelector("[data-function='search']")
divSearch$$.appendChild(input$$)
  
const characterSearch = (text)=>{
    const filterCharacters = characterList.filter(character => character.name.toLowerCase().includes(text.toLowerCase()));
    printcharacters(filterCharacters);
}
     
  