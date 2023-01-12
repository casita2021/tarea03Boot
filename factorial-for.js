var factorial = 1;

for (var i = 1; i <= 10; i++) {
    document.write(factorial + " x " + i + "=");

    factorial = factorial * i;

    document.write(factorial + "<br>");
}
console.log(`El factorial de 10 es: ${factorial}`);