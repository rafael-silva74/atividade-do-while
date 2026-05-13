const numeroSecreto = 2;
let tentativa;
let contador = 0;
do {
    tentativa = parseInt(prompt("Adivinhe o número entre 1 e 10:"));
    contador++;
    if (tentativa !== numeroSecreto) {
    alert("Número incorreto. Tente novamente.");
}
} while (tentativa !== numeroSecreto);
alert("Parabéns você acertou em " + contador + " tentativa(s).");