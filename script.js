const userTask = document.getElementById('userTask');
const addTaskBtn = document.getElementById('addTask');
const taskSection = document.getElementById('scroll');

function deleteTask() {
    const taskToDelete = this.parentElement;

    taskToDelete.classList.add('fade-out');

    taskToDelete.addEventListener('transitionend', function () {
        taskToDelete.remove();
    });
}

function addTask() {
    if (userTask.value !== "") {
        const newTask = document.createElement("div");
        newTask.className = "task";

        newTask.innerHTML = `
            <input type="checkbox" class="concluded">
            <h2>${userTask.value}</h2>
            <button class="remove"><img src="icons8-remover.svg"></button>
        `;

        taskSection.appendChild(newTask);

        const deleteTaskBtn = newTask.querySelector('.remove');
        deleteTaskBtn.addEventListener('click', deleteTask);

        const checkbox = newTask.querySelector('.concluded');
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                newTask.style.backgroundColor = 'lightgreen';
            } else {
                newTask.style.backgroundColor = '';
            }
        });

        userTask.value = ""
    }
}

addTaskBtn.addEventListener('click', addTask);