
const text = `gracioso-pero-no-gracioso-de-risa-gracioso-de-raro`
let text1=[]
const palabras = text.split('-')
for (let index = 0; index < palabras.length; index++) {
    const palabra = palabras[index];
    text1.push(palabra[0].toUpperCase()+ palabra.substring(1,palabra.length))
}
const text3 = text1.join(' ')
console.log(text3) 