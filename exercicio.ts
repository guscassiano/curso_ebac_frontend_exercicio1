
function multiplicacao(num1: number, num2: number): number {
    return num1 * num2
}

function saudacao(nome: string): string {
    return "Olá " + nome
}

console.log(`${saudacao('professor')}, o resultado da conta é: ${multiplicacao(7, 5)}`)