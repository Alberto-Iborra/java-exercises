const moviesGalery = async ()=>{
    const res = await fetch("https://ghibliapi.herokuapp.com/films");
    const movies = await res.json()
    printMovie(movies)
    //console.log(movies)
}

const printMovie = (movies) =>{
    console.log(movies)
    for (const movie of movies){
        const div$$ = document.createElement('div')
        const img$$ = document.createElement('img')
        const h3$$ = document.createElement('h3')
        div$$.appendChild(img$$)
        div$$.appendChild(h3$$)
        document.body.appendChild(div$$)
        h3$$.textContent= movie.title
        div$$.setAttribute('class','b-gallery')
        img$$.setAttribute('src',movie.image)
        
    }
}
moviesGalery()