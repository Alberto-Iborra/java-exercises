// Al siguiente javascript no funciona como deberia...podrias arreglarlo?

// Debería mostrar por consola "Juan Pui".

const name = "Juan Pui"
function a(){
    b(name);
}

function b(){
    console.log(name)
}

a(name);