const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let wavesCounter=0
let firecampCounter=0
let windCounter=0
let showerCounter=0
let trainCounter=0
let rainCounter=0
for (const user of users) for (const key in user.favoritesSounds) {
    { const sound = user.favoritesSounds[key];
        for (let index = 0; index < user.favoritesSounds.length; index++) {
            const element = sound[index];
            if (element='waves') {wavesCounter++    
            } if (element='firecamp') {firecampCounter++    
            } if (element='train') {trainCounter++    
            } if (element='shower') {showerCounter++    
            } if (element='wind') {windCounter++    
            } if (element='rain') {rainCounter++    
            }
            
        }
   }
}   
console.log(wavesCounter);
console.log(firecampCounter);
console.log(windCounter);
console.log(showerCounter);
console.log(trainCounter);
console.log(rainCounter);