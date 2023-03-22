
const alunos = [
    {
        nome: "Gustavo",
        nota: 6
    },
    {
        nome: "João",
        nota: 4
    }
]

alunos.push({nome: 'Marcos', nota: 5})
alunos.push({nome: 'Ana', nota: 10})

let acimaMedia = []

alunos.forEach((nome) => {
    if (nome.nota >= 6) {
        acimaMedia += (nome.nome + ' ')
    }
}); 

console.log("Notas acima da média: " + acimaMedia)
