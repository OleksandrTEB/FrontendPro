function multiply(num1) {
    return function (num2) {
        return num1 * num2
    }
}

console.log(multiply(5)(4))