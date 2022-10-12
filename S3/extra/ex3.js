const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const div$$ = document.querySelector('[data-function="printHere"]')
const ul$$ = document.createElement('ul')
div$$.appendChild(ul$$)
for (let index = 0; index < cars.length; index++) {
    const myUl = document.body.querySelector('ul')
    const li$$ = document.createElement('li');
    li$$.textContent = cars[index];
    myUl.appendChild(li$$)
}