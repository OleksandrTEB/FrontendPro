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

function checkAllNums() {
    for (let i = 1; i < nums.length; i++) {
        if (nums[0] !== nums[i]) {
            return false;
        }
    }
    return true;
}

function checkSomeNums() {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j) {
                if (nums[i] === nums[j]) {
                    return true;
                }
            }
        }
    }
    return false;
}

if (checkAllNums() === false) {
    allNums = 'Ні'
}

if (checkSomeNums() === true) {
    someNums = 'Так'
}

alert(`Чи правда, що всі цифри однакові? ${allNums}`);
alert(`Чи є серед цифр цифри однакові? ${someNums}`);

console.log(nums)