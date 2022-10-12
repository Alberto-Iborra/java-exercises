const input$$ = document.querySelector('input')

function ford(event) {
    console.log(event.target.value)
}

input$$.addEventListener('input', ford)