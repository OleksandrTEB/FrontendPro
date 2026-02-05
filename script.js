let num = 0;
let proste = true;

do {
    num = +prompt("Please enter a number");
} while (!(num > 0));

if (num > 1) {
    for (let i = 2; i < 9; i++) {
        if (num % i === 0 && i !== num) {
            proste = false;
            break;
        }
    }
}

const result = proste ? 'Так' : 'Ні';

console.log(`Чи число є простим: ${result}`)