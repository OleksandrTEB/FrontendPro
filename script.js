const arr = ['asd', 3, 6756, '123', false, 134, null, 423, undefined, 2134, true, ['asd', 'ad'], {name: 'John'}];

function calculate(arr) {
    const sortedArr = [];
    let counter = 0;

    arr.forEach(number => {
        if (typeof number === "number") {
            sortedArr.push(number);
        }
    })

    sortedArr.forEach(number => {
        counter += number;
    })

    return counter / sortedArr.length;
}

const result = calculate(arr)

console.log(result)