let opcao;
let total = 0;

do {
opcao = parseInt(
    prompt(
    "=== CAFETERIA ===\n" +
    "1 - Café Expresso (R$ 5,00)\n" +
    "2 - Cappuccino (R$ 7,00)\n" +
    "3 - Pão de Queijo (R$ 4,00)\n" +
    "0 - Finalizar Pedido"
    )
);

switch (opcao) {
    case 1:
    total += 5;
    alert("Café Expresso adicionado.");
    break;

    case 2:
    total += 7;
    alert("Cappuccino adicionado.");
    break;

    case 3:
    total += 4;
    alert("Pão de Queijo adicionado.");
    break;

    case 0:
    alert("Finalizando pedido...");
    break;

    default:
    alert("Opção inválida.");
}

} while (opcao !== 0);

alert("Pedido finalizado. Total: R$ " + total.toFixed(2));