let num = 0, counter = 0;

do {
    num = +prompt("Please enter a number");
} while (!(num > 0));

while (counter <= 100) {
    let myNum = counter**2;

    if (myNum > num) {
        break;
    }

    console.log(myNum);
    counter++;
}