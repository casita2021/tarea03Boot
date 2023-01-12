var factorial = 10;
var i = 1;

while (i > 0) {
    factorial = factorial * i;
    i++;
    if (i > 9) {
        break;
    }
}

console.log(`El factorial de 10 es:${factorial}`)