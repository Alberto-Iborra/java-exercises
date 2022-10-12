const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
const input$$ = document.querySelector('input')
for (const streamer of streamers) {
    const lol = streamer.filter((streamer) => {return input$$.addEventListener('click',()=>busqueda())})
function busqueda(name) {if (streamer.name.includes(name)) { console.log (streamer.name)
    
}
    
}
}

console.log(lol)