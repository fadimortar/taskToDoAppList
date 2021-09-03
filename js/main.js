let addBtn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput');
let noTasks = document.getElementById('noTasks');
let allTasks = document.getElementById('allTasks');
let invalid = document.getElementById('invalid');
let closeValidationMessage = document.querySelector('#invalid .close');
let model = document.getElementById('model');
let modelBtn = document.getElementById('modelBtn')

let showModel = () => {
    model.classList.toggle('block');
}

modelBtn.addEventListener('click', showModel);

let closeValidationMessageFunc = () => {
    invalid.classList.toggle('none');
}

let noTasksShow = () => {
    if (allTasks.childElementCount > 0) {
        noTasks.classList.add('none');
    } else {
        noTasks.classList.remove('none');
    }

}

// ==================== Add Task ========================== //

let addTask = () => {
    let taskData = taskInput.value;
    if (taskData.trim() == "" || taskInput.value.length < 3 || taskInput.value.length > 20) {
        closeValidationMessageFunc();
    } else {
        noTasks.classList.add('none');
        allTasks.innerHTML += ` <div class= "alert task alert-info"> ${taskData}<i class="float-right fas delete fa-trash "></i></div>`;
        taskInput.value = "";
        showModel();
    }
    allTasks.addEventListener('click', function (e) {
        if (e.target.classList.contains('task')) {
            e.target.classList.toggle('check');
        }
    })
}

addBtn.addEventListener('click', addTask);
closeValidationMessage.addEventListener('click', closeValidationMessageFunc);

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {

        e.target.parentElement.remove();
    }
    noTasksShow();
})


// dark mood-------------------------------------------------
let dark = document.getElementById('dark');
let body = document.querySelector('body');

dark.addEventListener('click', function () {

    if (body.classList.contains('dark')) {
        body.classList.toggle('dark')
        dark.innerText = "Dark mood"
        dark.classList = "btn btn-dark"
    } else {
        body.classList.toggle('dark')
        dark.innerText = "Light mood"
        dark.classList = "btn btn-light"
    }
})