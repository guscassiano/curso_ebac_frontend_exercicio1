//Herança
function Marca(marca){
    this.marca = marca
}

//Classe
function Veiculo(marca, modelo, conjuntoPneus) {  
    this.modelo = modelo
    let _conjuntoPneus = conjuntoPneus

    this.getPneus = function () {
        return _conjuntoPneus
    }

    this.setPneus = function (valor) {
        if (typeof valor == "number")
        _conjuntoPneus = valor
    }

    this.totalPneus = function() {
        const novaconjuntoPneus = _conjuntoPneus
        _conjuntoPneus = novaconjuntoPneus
    }

    Marca.call(this, marca)
}

//Herança
function Carro(marca, modelo, conjuntoPneus) {                     
    Veiculo.call(this, marca, modelo, conjuntoPneus)

    this.totalPneus = function() {
        const novaconjuntoPneus = this.getPneus() * 4
        this.setPneus(novaconjuntoPneus)
    }
}

//Herança
function Moto(marca, modelo, conjuntoPneus) {
    Veiculo.call(this, marca, modelo, conjuntoPneus)

    this.totalPneus = function() {
        const novaconjuntoPneus = this.getPneus() * 2
        this.setPneus(novaconjuntoPneus)
    }
}

//Instancias
const veiculo1 = new Carro("Hyundai", "HB20", 5)
const veiculo2 = new Moto("Honda", "Shadow 750", 2)
const veiculo3 = new Moto("Kawazaki", "Vulcan S", 4)


veiculo1.totalPneus()
veiculo2.totalPneus()
veiculo3.totalPneus()
console.log(`Levará ${veiculo1.getPneus()} pneus`)
console.log(`Levará ${veiculo2.getPneus()} pneus`)
console.log(`Levará ${veiculo3.getPneus()} pneus`)
