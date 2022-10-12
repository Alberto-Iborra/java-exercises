let completName ='Abel Cabeza'
let nameSurname=[]
function splitName(completName) {
    let index1=completName.indexOf('A');
    let index2=completName.indexOf('l');
    let index3=completName.indexOf('C');
    let index4=completName.indexOf('a',10);
    let name=completName.substring(index1,index2+1)
    let surname=completName.substring(index3,index4+1)
    nameSurname.push(name,surname)
}
splitName(completName)
console.log(nameSurname)
