const form = document.getElementById('form-compare')

form.addEventListener ('submit', function (comparacao){
    comparacao.preventDefault()

    const numA = document.getElementById('number-A')
    const numB = document.getElementById('number-B')

    console.log(numA.lenght, numB.value)
    if ((numA.value && numB.value) == '') {
        msgResultado = document.querySelector('.result')
        msgResultado.innerHTML = "Entre com dois números"
        msgResultado.style.display = 'Block'
    } else if (Number(numA.value) < Number(numB.value)) {
        msgResultado = document.querySelector('.result')
        msgResultado.innerHTML = "Formulário válido, 2°número maior que o primeiro"
        msgResultado.style.display = 'Block'
        numA.value = ''
        numB.value = ''
    } else {
        msgResultado = document.querySelector('.result')
        msgResultado.innerHTML = "Formulário inválido, 2°número menor que o primeiro"
        msgResultado.style.display = 'Block'
        numA.value = ''
        numB.value = ''
    }
})

