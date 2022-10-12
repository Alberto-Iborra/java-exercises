const numbersList = [];

function sum(a,b){ return a+b

}

function substract(a,b){ return a-b

}

function father(a,b, callback){
const resultado = callback(a,b)
numbersList.push(resultado)
console.log(resultado)
}
father(38,23,substract)