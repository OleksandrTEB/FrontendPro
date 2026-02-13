function sumFunction(sum = 0, userNumber = 0) {
    sum = sum + userNumber;
    console.log(`Sum: ${sum}`);
    userNumber = prompt("Enter your number");

    if (userNumber === null) return;

    sumFunction(sum, +userNumber);
}

sumFunction()