const func = (string, arrayChars) => {
    let newString = "";
    let canAdd = true;
    console.log(arrayChars.length);

    for (let i = 0; i < string.length; i++) {
        canAdd = true;

        for (let j = 0; j < arrayChars.length; j++) {
            if (string[i] === arrayChars[j]) {
                canAdd = false;
            }
        }

        if (canAdd) {
            newString += string[i];
        }
    }

    return newString;
}


const result = func('hello world', ['l', 'd'])

console.log(result)