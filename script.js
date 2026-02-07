const user = {
    name: '',
    age: 0,
    citi: '',

    getData(userName, userAge, userCiti) {
        this.name = userName;
        this.age = userAge;
        this.citi = userCiti;
    },

    showData() {
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
        console.log(`Citi: ${this.citi}`)
    }
}

const userName = prompt('Enter your name')
const userAge = prompt('Enter your age')
const userCiti = prompt('Enter your citi')


user.getData(userName, userAge, userCiti);

user.showData();