const inputTask = document.querySelector('#input-task');
const addTask = document.querySelector('#add-task');
const taskContainer = document.querySelector('#task-container');




addTask.addEventListener('click', () => {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');

    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa-duotone fa-check"></i>'

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>'

})





