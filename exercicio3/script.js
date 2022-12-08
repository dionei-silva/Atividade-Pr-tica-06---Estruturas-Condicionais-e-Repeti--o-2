/* 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”. */

const dia = Number(prompt("Digite o dia da semana"));

if (dia === 1) {
    document.write("Hoje é domingo");
} else if (dia === 2) {
    document.write("Hoje é segunda");
} else if (dia === 3) {
    document.write("Hoje é terca");
} else if (dia === 4) {
    document.write("Hoje é quarta");
} else if (dia === 5) {
    document.write("Hoje é quinta");
} else if (dia === 6) {
    document.write("Hoje é sexta");
} else if (dia === 7) {
    document.write("Hoje é sabado");
} else {
    document.write("dia nao reconhecido");
}
