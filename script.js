let nextStep = false;
let nums = [];
let allNums = 'Так';
let someNums = 'Ні';


while (nextStep !== true) {
    const num = prompt("Enter a 3-digit number")
    nums = Array.from(num)
    if (nums.length === 3) {
        nextStep = true;
    }
}
let currentNum = nums[0];

nums.forEach(num => {
    if (num !== currentNum) {
        allNums = 'Ні'
    }
})

for (let i = 1; i < nums.length; i++) {
    if (currentNum === nums[i]) {
        someNums = 'Так'
    }
}


alert(`Чи правда, що всі цифри однакові? ${allNums}`);
alert(`Чи є серед цифр цифри однакові? ${someNums}`);

console.log(nums)