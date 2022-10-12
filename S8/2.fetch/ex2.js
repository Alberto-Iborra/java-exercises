const baseUrl = 'https://api.nationalize.io?name=';


const btn$$ = document.querySelector('button')
const input$$ = document.querySelector('input')


const search = () =>{
fetch(baseUrl+input$$.value)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson)
    return myJson
  });}
  btn$$.addEventListener('click',search);
  
  
