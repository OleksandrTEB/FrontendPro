let company = {
    sales: [
        {name: 'John', salary: 1000},
        {name: 'Alice', salary: 600 }
    ],
    development: {
        web: [
            {name: 'Peter', salary: 2000},
            {name: 'Alex', salary: 1800 }
        ],
        internals: [
            {name: 'Jack', salary: 1300}
        ]
    }
};

function calculateSalary(states) {
    if(Array.isArray(states)) {
        let localSum = 0;
        for(let i = 0; i < states.length; i++) {
            localSum += states[i].salary;
        }
        return localSum;
    }

    let sum = 0;

    for (let key in states) {
        sum += calculateSalary(states[key]);
    }

    return sum;
}

console.log(calculateSalary(company))