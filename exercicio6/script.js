/* 6. Insira no html 30 ( trinta ) números ímpares. */

let impares = 0;
for (let i = 1; i <= 60; i++) {
    if (i % 2 == 1) {
        document.write(`<p>${i}</p>`);
    }
}
