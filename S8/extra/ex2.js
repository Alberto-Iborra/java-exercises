fetch(`http://localhost:3000/diary`)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    printCard(myJson)
    return myJson
  });
  const printCard = (array) => {
    array = array.sort(function(a,b){return new Date(a.date)-new Date(b.date)})
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let div$$ = document.createElement('div')
        let p$$ = document.createElement('p')
        let h3$$ = document.createElement('h3')
        let h5$$ = document.createElement('h5')
        h3$$.textContent=element.date
        h5$$.textContent=element.tittle
        p$$.textContent=element.description
        div$$.appendChild(p$$)
        div$$.appendChild(h3$$)
        div$$.appendChild(h5$$)
        document.body.appendChild(div$$)
        let btn$$ = document.createElement('button') 
        btn$$.textContent='x' 
        div$$.appendChild(btn$$)
        btn$$.addEventListener('click',()=>{removeP(div$$)})
    }
  } 
  const removeP = (element) => {}