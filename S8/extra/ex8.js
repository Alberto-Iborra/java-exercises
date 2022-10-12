const btn$$ = document.querySelector('[data-fn="callACat"]')
btn$$.addEventListener('click',()=>callACAt())

const callACAt = async ()=>{
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const cats = await res.json();
    printCats(cats)
    }
const printCats = (cats)=>{
    for (const cat of cats) {
        const div$$ = document.createElement('div')
        const img$$ = document.createElement('img')
        img$$.setAttribute('src',cat.url)
        div$$.appendChild(img$$) 
        const removeBtn$$ = document.createElement('button')
        div$$.appendChild(removeBtn$$)
        removeBtn$$.textContent='removeCat'
        removeBtn$$.addEventListener('click',()=>removedCat(div$$))
        document.body.appendChild(div$$)
        }   
}    
const   removedCat = (div$$) =>{
   div$$.remove(); 
}
