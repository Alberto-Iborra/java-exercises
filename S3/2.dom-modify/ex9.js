
const div$$ = document.querySelectorAll('.fn-insert-here')
for (let index = 0; index < div$$.length; index++) {
    const element = div$$[index];
    const p$$ = document.createElement('p')
    p$$.textContent = 'Voy dentro!'
    element.appendChild(p$$)
    
}
