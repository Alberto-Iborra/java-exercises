const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];


for (let index = 0; index < countries.length; index++) {
    const div$$ = document.createElement('div')
    document.body.appendChild(div$$)
    const countrie = countries[index];
    const {title,imgUrl} = countrie;
    const h4$$ = document.createElement('h4');
    h4$$.textContent = title;
    const img$$ = document.createElement('img');
    img$$.src= imgUrl
    div$$.appendChild(h4$$);
    div$$.appendChild(img$$);
    
}
const btn$$ = document.createElement('button');
btn$$.textContent='remove-div'
document.body.appendChild(btn$$)
const removeDiv = document.body.querySelectorAll('div')
btn$$.addEventListener('click',()=>removeDiv[removeDiv.length-1].remove())
