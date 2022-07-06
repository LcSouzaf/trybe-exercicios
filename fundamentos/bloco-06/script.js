const button = document.getElementById('button-submit')

function disableDefault(event){
    event.preventDEfault()
}
button.addEventListener('click',disableDefault)