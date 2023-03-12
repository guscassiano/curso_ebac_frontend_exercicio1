
function Celular (produto) {
    this.produto = produto
}

function Eletrônico (produto, pagamento) {
    this.produto = produto
    let _pagamento = pagamento

    this.getPagamento = function () {
        return _pagamento
    }

    this.setPagamento = function (valor) {
        if (typeof valor == "number")
            _pagamento = valor.toFixed(2)
    }

    this.formaPagamento = function() {
        const novoPagamento = _pagamento
        _pagamento = novoPagamento
    }

    Celular.call(this, produto)
}

function AVista (produto) {
    Eletrônico.call(this, produto, 12000.00)
    const novoPagamento = this.getPagamento() * 0.9
    this.setPagamento(novoPagamento)
}

function CartaoSemJuros (produto) {
    Eletrônico.call(this, produto, 9000.00)
    const novoPagamento = this.getPagamento() / 6
    this.setPagamento(novoPagamento)
}

function CartaoComJuros (produto) {
    Eletrônico.call(this, produto, 6000.00)
    const novoPagamento = (this.getPagamento() * 1.1) / 12
    this.setPagamento(novoPagamento)
}


const cliente1 = new AVista ("Iphone 13")
const cliente2 = new CartaoSemJuros("Xiaomi 12T pro")
const cliente3 = new CartaoComJuros("Galaxy S23")

cliente1.formaPagamento()
console.log(`\nÉ possível pagar seu ${cliente1.produto} à vista com 10% de desconto - R$${cliente1.getPagamento()}\n`)

cliente1.formaPagamento()
console.log(`\nÉ possível parcelar seu ${cliente2.produto} em até 6x sem Juros - 6x R$${cliente2.getPagamento()}\n`)

cliente1.formaPagamento()
console.log(`\nÉ possível parcelar seu ${cliente3.produto} em até 12x com Juros - 12x R$${cliente3.getPagamento()}\n`)



