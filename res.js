let btn = document.getElementById('button')

btn.addEventListener('click', function (e) {
    e.preventDefault()
    let names = document.getElementById('name').value
    let email = document.getElementById('email').value
    let categ = document.getElementById('categ').value
    let timing = document.getElementById('timing').value
    var xhttp = new XMLHttpRequest()
    xhttp.open('POST', '/', true)
    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            console.log(this.readyState, this.status, xhttp.responseText)
        }
    }
    xhttp.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded  ' );
    xhttp.send(`name=${names}&email=${email}&categ=${categ}&timing=${timing}&`)
})