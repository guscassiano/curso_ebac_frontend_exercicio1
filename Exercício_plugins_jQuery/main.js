$(document).ready(function(){
    $('#tel').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            address: {
                required: true
            }
        },
        messages: {
            name: 'Por favor, insira seu nome completo no campo acima',
            tel: 'Por favor, insira seu telefone no campo acima',
            email: 'Por favor, insira seu email  no campo acima',
            cpf: 'Por favor, insira seu CPF no campo acima',
            cep: 'Por favor, insira o CEP da sua cidade no campo acima',
            address: 'Por favor, insira seu endereço no campo acima'
        }
    })
})