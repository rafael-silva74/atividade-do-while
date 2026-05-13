let soma = 0;
let continuar;
do {
    let numero = parseInt(prompt("digite o seu número porfavor :)"));
    soma += numero;
    continuar = prompt("Deseja inserir outro número? (s/n)");
} while (continuar === "s");
alert ("meus parabéns o valor deu " + soma);