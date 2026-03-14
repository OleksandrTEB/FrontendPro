const form = document.querySelector('.form');
const toDoWrapper = document.querySelector('.js--todos-wrapper');

let toDoArr = [];

if(localStorage.getItem('toDoTasks')) {
    toDoArr = JSON.parse(localStorage.getItem('toDoTasks'));

    renderTasks(toDoArr)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    const data = {
        id: new Date().getTime(),
        description: formData.get('task'),
        checked: false
    }

    toDoArr.push(data);

    updateTasks()

    form.reset();
})

function renderTasks(arr) {
    toDoWrapper.innerHTML = '';

    const fragment = document.createDocumentFragment();

    arr.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        if(item.checked === true) {
            li.classList.add('todo-item--checked')
        }

        const checkbox = document.createElement('input');
        checkbox.dataset.id = item.id;
        checkbox.type = 'checkbox';
        checkbox.checked = item.checked;
        li.appendChild(checkbox);

        const span = document.createElement('span');
        span.classList.add('todo-item__description')
        span.textContent = item.description;
        li.appendChild(span);

        const button = document.createElement('button');
        button.classList.add('todo-item__delete')
        button.dataset.delete_id = item.id;
        button.textContent = 'Видалити';
        li.appendChild(button);

        fragment.appendChild(li);
    })

    toDoWrapper.appendChild(fragment);
}

function restoreLocalStorage(arr) {
    localStorage.removeItem('toDoTasks');
    localStorage.setItem('toDoTasks', JSON.stringify(arr));
}

toDoWrapper.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    const checked = e.target.checked;

    if(id) {
        for(let i = 0; i < toDoArr.length; i++) {
            if(toDoArr[i].id === +id) {
                toDoArr[i].checked = checked;
            }
        }

        updateTasks()
    }
})

toDoWrapper.addEventListener('click', (e) => {
    const id = e.target.dataset.delete_id;

    if(id) {
        for(let i = 0; i < toDoArr.length; i++) {
            if(toDoArr[i].id === +id) {
                toDoArr.splice(i, 1);
            }
        }

        updateTasks()

        if(toDoArr.length < 1) {
            localStorage.removeItem('toDoTasks');
        }
    }
})

function updateTasks() {
    restoreLocalStorage(toDoArr)
    renderTasks(toDoArr)
}