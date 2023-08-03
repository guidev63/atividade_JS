function verificarpositivonegativo(numero) {
    let mensagem;
    if (numero > 0) {
        return "o Numero e Positivo.";
    } else if (numero < 0) {
        return "o Numero e Negativo.";
    } else {
        return "o numero e zero"
    }

}
let valor = verificarpositivonegativo(-5)
console.log(valor);