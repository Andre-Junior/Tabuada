var res = window.document.getElementById("res")
res.innerHTML = 'Preparando para calcular a tabuada...'

function tabuada() {
    let numerocalcular = window.document.querySelector("input#Valorparacalcular")
    if (numerocalcular.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let numerocal = Number(numerocalcular.value)
        res.innerHTML = ""
        for (let index = 1; index <= 10; index++) {
            res.innerHTML += `${numerocal} x ${index} = ${index * numerocal}</br>`
        }
    }
}