const book = {
    contacts: [
        {
            name: 'John',
            number: 209756273,
            email: 'john@gmail.com'
        },
        {
            name: 'Mark',
            number: 908234577,
            email: 'mark@gmail.com'
        },
        {
            name: 'Anna',
            number: 686342100,
            email: 'anna@gmail.com'
        },
        {
            name: 'Karl',
            number: 567234890,
            email: 'karl@gmail.com'
        },
    ],

    search(name) {
        for(let i = 0; i < book.contacts.length; i++){
            if(book.contacts[i].name === name) {
                console.log(book.contacts[i])
            }
        }
    },

    addUser(name, number, email) {

        const data = {
            name: name,
            number: number,
            email: email
        }

        this.contacts.push(data);
    }
}

let stop = false;

while (!stop) {
    const instruction = prompt('Please enter an instruction');

    switch(true) {
        case instruction === null:
            stop = true;
            break;

        case instruction === 'add':
            const [name, number, email] = prompt('Please enter: (name,number,email)').split(',');
            book.addUser(name, +number, email);
            break;

        case instruction === 'search':
            const userName = prompt('Please enter username for search');
            book.search(userName);
            break;
    }
}
