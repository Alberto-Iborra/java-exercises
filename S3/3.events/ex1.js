const btn$$ = document.createElement('button')
btn$$.setAttribute('id','btnClick')
btn$$.textContent='púlsame'
document.body.appendChild(btn$$)

function click(params) {
    console.log('me han clickado')
}

btn$$.addEventListener('click',click)
