const arr = ['asd', 3, 6756, '123', false, 134, null, 423, undefined, 2134, true, ['asd', 'ad'], {name: 'John'}];

function calculate(arr) {
    const sortedArr = [];
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sortedArr.push(arr[i]);
        }
    }

    for (let i = 0; i < sortedArr.length; i++) {
        counter += sortedArr[i];
    }

    return counter / sortedArr.length;
}

const result = calculate(arr)

console.log(result)