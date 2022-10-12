let players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
function swap(players,a,b) { 
    const element1 = players[a]
    players[a]=players[b]
    players[b]=element1;
    return players

}
swap(players, 0,3)
console.log(players);