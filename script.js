const arr = [4,2344,23,565,432,12,76,878689,6,332,55,765,7];
const filterArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        filterArr.push(arr[i]);
    }
}
console.log(`Arr: ${arr}`)
console.log(`Filter arr: ${filterArr}`);