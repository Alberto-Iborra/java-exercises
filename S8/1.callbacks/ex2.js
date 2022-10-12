const userAnwsers = [];

function confirmExample(tex){
    confirm(tex)
    return confirm(tex)
}

function promptExample(tex){
    prompt(tex)
    return prompt(tex)
}

function father(tex,callback){
    userAnwsers.push(callback(tex));
}

father('atento', confirmExample);
father('Prueba', promptExample);

console.log(userAnwsers);