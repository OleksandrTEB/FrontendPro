// HW 1
console.log("HW 1")

console.log('')

console.log(typeof 'asd')
console.log(typeof 123)
console.log(typeof true)
console.log(typeof BigInt(123))
console.log(typeof undefined)
console.log(typeof 1.2)
console.log(typeof null)

console.log('')

// HW 2
console.log("HW 2")

console.log('')

const str1 = prompt('Введіть перший рядок')
const str2 = prompt('Введіть другий рядок')
const str3 = prompt('Введіть трейтій рядок')

const allStrings = `${str1}, ${str2}, ${str3}`

console.log(allStrings)

console.log('')
// HW 3
console.log("HW 3")

console.log('')

let num = 45628;
console.log(num)
let myString = String(num)
let str = ``;
let reverseStr = ``;

for (let i = 0; i < myString.length; i++) {
    str += ` ${myString.charAt(i)}`;
}

console.log(str)

console.log("Reverse num:")
for (let i = myString.length - 1; i >= 0; i--) {
    reverseStr += ` ${myString.charAt(i)}`;
}

console.log(reverseStr)