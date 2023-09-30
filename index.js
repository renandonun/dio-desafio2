console.log("Calculadora de Partidas Rankeadas");
let ranking;

function partidas (vitorias, derrotas) {
    return vitorias - derrotas;
}

let saldoVitorias = partidas(81, 13);

if (saldoVitorias <= 10) {
    ranking = "Ferro";
} else if (saldoVitorias > 10 && saldoVitorias <= 20) {
    ranking = "Bronze";
} else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    ranking = "Prata";
} else if (saldoVitorias > 50 && saldoVitorias <= 80) {
    ranking = "Ouro";
} else if (saldoVitorias > 80 && saldoVitorias <= 90) {
    ranking = "Diamante";
} else if (saldoVitorias > 90 && saldoVitorias <= 100) {
    ranking = "Lendário";
} else {
    ranking = "Imortal";
} 

console.log(`O  Herói tem o saldo de ${saldoVitorias} e está no nível de ${ranking}.`)