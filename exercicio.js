
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

const alunosAprovados = alunos.filter((nome) => {
    return nome.nota >= 6
}); 

console.log(alunosAprovados)
