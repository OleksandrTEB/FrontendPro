const getTodosButton = document.querySelector('.button-container > button');
const container = document.querySelector('.container');
const status = document.querySelector('.status');
const modalWindow = document.querySelector('.modal-window');
const addTodoBtn = document.querySelector('.button-container-add > button');
const form = document.querySelector('form');

const BASE_URL = "https://jsonplaceholder.typicode.com";

let limit = 10;

let arrTodos = [];

getTodosButton.addEventListener('click', async () => {
    status.style.display = 'block';
    status.textContent = "Status: Loading...";
    await getTodos();
})

async function getTodos() {
    try {
        const response = await fetch(`${BASE_URL}/todos`);

        const json = await response.json();

        if (response.ok) {
            arrTodos = [];

            for (let i = 0; i < limit; i++) {
                arrTodos.push(json[i]);
            }

            renderTodos(arrTodos);

            status.textContent = "Status: Succefully";

            document.querySelector('.button-container-add').style.display = 'block';
        } else {
            status.textContent = "Status: Error!";
        }
    } catch (e) {
        console.error(e);
    }
}

async function deleteTodo(id) {
    try {
        for(let i = 0; i < arrTodos.length; i++) {
            if (arrTodos[i].id === id) {
                arrTodos.splice(i, 1);

                renderTodos(arrTodos);
                return;
            }
        }
    } catch (e) {
        console.error(e);
    }
}

function renderTodos(arr) {
    if(document.querySelector('.todos-container')) {
        document.querySelector('.todos-container').remove();
    }

    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todos-container');
    container.appendChild(todosContainer);

    const fragment = document.createDocumentFragment();

    let i = 0;

    arr.forEach((item) => {
        if(i <= limit) {
            const todo = document.createElement("div");
            todo.classList.add("todo");
            todo.dataset.id = item.id;
            fragment.appendChild(todo)

            const title = document.createElement("div");
            title.classList.add("title");
            title.textContent = item.title;
            todo.appendChild(title);

            const eventsContainer = document.createElement('div')
            eventsContainer.classList.add('events-container');
            todo.appendChild(eventsContainer);

            const divCompleted = document.createElement("div");
            divCompleted.classList.add("completed");
            eventsContainer.appendChild(divCompleted);

            const label = document.createElement("label");
            label.for = 'completed';
            divCompleted.appendChild(label);

            const checkbox = document.createElement("input");
            checkbox.id = 'completed';
            checkbox.type = 'checkbox';
            checkbox.checked = item.completed;
            label.appendChild(checkbox);

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete");
            deleteButton.textContent = 'Delete';
            eventsContainer.appendChild(deleteButton);
        }
        i++
    })

    todosContainer.appendChild(fragment);
}

container.addEventListener('click', async (e) => {
    const id = e.target.closest('[data-id]');
    if(!id) return;

    if(e.target.classList.contains('delete')) {
        await deleteTodo(+id.dataset.id);
    }
})

addTodoBtn.addEventListener('click', () => {
    modalWindow.style.display = 'flex';
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    if(data.get('title') !== '') {
        const lastId = arrTodos[arrTodos.length - 1].id;
        const userId = arrTodos[0].userId;

        const dataToPush = {
            userId: userId,
            id: lastId + 1,
            title: data.get('title'),
            completed: false
        }

        arrTodos.push(dataToPush);

        renderTodos(arrTodos);

        limit++;

        form.reset();
        modalWindow.style.display = 'none';
    }
})