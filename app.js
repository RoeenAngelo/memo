const inputTask = document.querySelector('#input-task');
const addTask = document.querySelector('#add-task');
const taskContainer = document.querySelector('#task-container');




addTask.addEventListener('click', createTask);

// add task by typing and pressing enterx   
inputTask.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      createTask();
    }
});

function createTask() {
    
    let task = document.createElement('div');
    task.classList.add('task'); // add a class

    let li = document.createElement('li');
    li.classList.add('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.setAttribute('class', 'check-task'); // another way of adding a class
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>'
    deleteBtn.className = 'delete-task'; // another way of adding a class
    task.appendChild(deleteBtn);

    console.log(task.classList);

    checkBtn.addEventListener('click', () => {
        li.classList.toggle('li-active')
     // checkBtn.parentElement.style.textDecoration = 'line-through'; this was used before toggle was introduced
    })

    deleteBtn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove(); // can also use deleteBtn instead of e.target
    })
    
    inputTask.value === '' ? alert('Please Enter a Task') : taskContainer.appendChild(task);
    inputTask.value ='';
}






