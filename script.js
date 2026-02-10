const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeElement(array, item) {
    let sortedArray = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] !== item) {
            sortedArray.push(array[i]);
        }
    }

    return sortedArray;
}

console.log(removeElement(arr, 7));