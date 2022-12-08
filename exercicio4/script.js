/* 4. Reescreva o exercício 3, utilizando apenas o SWITCH. */
const dia = window.prompt("insira um numero");
switch (dia) {
    case "1":
        document.write("hoje é domingo");
        break;
    case "2":
        document.write("hoje é segunda");
        break;
    case "3":
        document.write("hoje é terca");
        break;
    case "4":
        document.write("hoje é quarta");
        break;
    case "5":
        document.write("hoje é quinta");
        break;
    case "6":
        document.write("hoje é sexta");
        break;
    case "7":
        document.write("hoje é sabado");
        break;
    default:
        document.write("dia nao reconhecido");
}
