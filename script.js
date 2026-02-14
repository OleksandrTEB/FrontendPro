function conditions() {
    let userNumber = prompt("Введіть число більше 100");

    for (let i = 0; i <= 10; i++) {
        if (userNumber === null) {
            return;
        }

        if (+userNumber <= 100) {
            userNumber = prompt("Введіть ще раз");
        } else {
            console.log(userNumber);
        }
    }

    console.log(userNumber);
}


conditions()