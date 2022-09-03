const inputField = document.getElementById('task__input');
const addBtn = document.getElementById('tasks__add');
const taskList = document.getElementById('tasks__list');

function addingTask(task) {
    let taskTemplate = `<div class="task">
    <div class="task__title">
    ${task}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`;

    taskList.insertAdjacentHTML('afterbegin', taskTemplate);

    inputField.value = '';
};

inputField.addEventListener('keyup', (event) => {
    event.preventDefault();
    if (event.key.toLowerCase() === 'enter' && inputField.value != '') {
        inputField.value = inputField.value.trim();
        addingTask(inputField.value);
    }
});

addBtn.addEventListener('click', () => {
    event.preventDefault();
    if (inputField.value != '') {
        inputField.value = inputField.value.trim();
        addingTask(inputField.value);
    }
});