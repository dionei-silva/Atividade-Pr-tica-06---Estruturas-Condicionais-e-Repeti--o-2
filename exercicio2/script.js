/* 2. Para o mesmo exercício acima insira mais uma variável a
condicional, além de saber se o motorista tem 18 anos ou mais,
temos que saber também se ele é habilitado para dirigir. Caso ele
tenha idade maior ou igual a 18 anos e possua habilitação, insira no
html “Pode dirigir” caso contrário imprima “Não pode dirigir”. */

let idade = Number(prompt("Insira idade: "));
let habilitado = prompt("É habilitado? ");
let sim = true;
let nao = false;
if (idade < 18) {
    console.log("Nao pode dirigir");
} else if (idade >= 18 && habilitado === sim) {
    console.log("Habilitado pode dirigir");
} else {
    console.log("nao habilitado, nao pode dirigir");
}
