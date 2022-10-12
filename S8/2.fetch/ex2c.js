const baseUrl = 'https://api.nationalize.io';

const search = () => {
    const input$$ = document.querySelector('input');
    fetch(baseUrl + '?name=' + input$$.value).then(res => res.json()).then(data =>{
        createNationalizeP(data)
    })
}

const createNationalizeP = (data) => {
    const {name, country} = data;
    for (let index = 0; index < country.length; index++) {
        const {country_id, probability}=country[index]
        const p$$ = document.createElement('p');
        p$$.textContent = 'El nombre' + ' ' + name + ' ' + 'tiene un' + ' ' + probability*100 + ' ' + 'de ser de' + ' ' + country_id + '.';
        document.body.appendChild(p$$);
        const btn$$ = document.createElement('button')
        btn$$.textContent = 'X';
        document.body.appendChild(btn$$)
        btn$$.addEventListener('click',() =>{p$$.remove(); btn$$.remove()} );
    }

   

    

}   

const button$ = document.querySelector('button');

button$.addEventListener('click', search);