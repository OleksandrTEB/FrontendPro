function sumFunction() {
    let counter = 0;

    function inside(num) {
        return counter += num
    }

    return inside;
}

const sum =  sumFunction();

console.log(sum(4));

console.log(sum(6));

console.log(sum(10));

console.log(sum(7));