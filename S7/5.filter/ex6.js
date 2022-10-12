const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const lol = streamers.filter((streamer) => {if( streamer.gameMorePlayed.includes('Legends') && streamer.age <35) {return  streamer.gameMorePlayed} else if (streamer.gameMorePlayed.includes('Legends') && streamer.age >35) { streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase() ; return  streamer.gameMorePlayed
} })
console.log(lol)