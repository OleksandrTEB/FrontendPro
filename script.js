const taskInput = document.querySelector(".task_input");
const addButton = document.querySelector(".add_button");
const cancel = document.querySelector(".cancel");
const removeButton = document.querySelector(".remove_button");
const warning = document.querySelector(".warning");
const tasksContainer = document.querySelector(".tasks_container");
const tasksArray = []
let arrForDelete = []
let currentId = 0;


addButton.addEventListener("click", () => {
    const text = taskInput.value
    if(text.length < 1) {
        warning.style.display = "block";
        return;
    } else {
        warning.style.display = "none";
    }

    const task = {
        id: currentId,
        text: text
    };
    tasksArray.push(task);
    renderTasks(tasksArray);

    taskInput.value = "";
    currentId++;
})

function renderTasks(array, remowing = false) {
    tasksContainer.innerHTML = "";

    if(remowing === true) {
        array.forEach(task => {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task_container");

            const div = document.createElement("div");
            div.textContent = task.text;
            taskDiv.append(div);

            const changeBtn = document.createElement("button");
            changeBtn.textContent = "Change";
            changeBtn.dataset.id = task.id;
            taskDiv.append(changeBtn);

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.dataset.idRemove = task.id;
            taskDiv.append(checkbox);


            tasksContainer.appendChild(taskDiv);
        })

        return
    }

    array.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task_container");

        const div = document.createElement("div");
        div.classList.add("task");
        div.textContent = task.text;
        taskDiv.append(div);

        const changeBtn = document.createElement("button");
        changeBtn.textContent = "Change";
        changeBtn.dataset.id = task.id;
        taskDiv.append(changeBtn);

        tasksContainer.appendChild(taskDiv);
    })
}

tasksContainer.addEventListener("click", (e) => {
    if(e.target.dataset.idRemove) {
        arrForDelete.push(+e.target.dataset.idRemove);
    }

    const id = e.target.dataset.id;

    if(e.target.parentElement.lastElementChild.classList.contains("changing")) {
        const value = e.target.parentElement.firstElementChild.firstElementChild.value;

        const textDiv = e.target.parentElement.firstElementChild;
        textDiv.innerHTML = "";
        textDiv.textContent = value;
        e.target.parentElement.lastElementChild.classList.remove("changing")


        for(let i = 0; i < tasksArray.length; i++) {
            if(tasksArray[i].id === +id) {
                tasksArray[i].text = value;
            }
        }

        return;
    }

    if(id) {
        const value = e.target.parentElement.firstElementChild.textContent;

        const divElement = e.target.parentElement.firstElementChild;
        e.target.parentElement.lastElementChild.classList.add("changing");
        const input = document.createElement("input");
        divElement.textContent = "";
        divElement.type = "text";
        input.value = value;
        divElement.appendChild(input);
    }
})

removeButton.addEventListener("click", () => {
    cancel.style.display = "block";

    console.log(arrForDelete)
    if(arrForDelete.length > 0) {
        for(let i = 0; i < arrForDelete.length; i++) {
            for(let j = 0; j < tasksArray.length; j++) {
                if(arrForDelete[i] === tasksArray[j].id) {
                    tasksArray.splice(j, 1);
                }
            }
        }

        cancel.style.display = "none";
        arrForDelete = [];
        renderTasks(tasksArray)
    } else {
        renderTasks(tasksArray, true)
    }
})

cancel.addEventListener("click", () => {
    arrForDelete = [];
    renderTasks(tasksArray)
    cancel.style.display = "none";
})