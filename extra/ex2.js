// En base al siguiente javascript, modifícalo para crea una función para que podamos enviarle como parametro el precio y la función nos calcule y retorne el precio con iva + los gastos de envio (4.95). De esta forma estaremos optimizando el codigo y reutilizandolo.

const price1 = 8;
const ivaPrice1 = price1 * 1.21
const totalPrice1 = ivaPrice1 + 4.95

const price2 = 20;
const ivaPrice2 = price2 * 1.21
const totalPrice2 = ivaPrice2 + 4.95
let totalPrice
function pvpTotal(price) {
    let shipCost=4.95
    let ivaPrice=price*1.21
    const pvpTotal = price + ivaPrice + shipCost
    totalPrice=pvpTotal
}
pvpTotal(8);
console.log(totalPrice);
pvpTotal(20);
console.log(totalPrice);
pvpTotal(14);
console.log(totalPrice);
