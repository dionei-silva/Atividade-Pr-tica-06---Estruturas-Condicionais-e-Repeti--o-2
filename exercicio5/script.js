/* 5. Utilizando FOR, percorra os números de 1 a 10 e imprima no console
os números pares. */

let pares = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        document.write(`<p>${i}</p>`);
    }
}
