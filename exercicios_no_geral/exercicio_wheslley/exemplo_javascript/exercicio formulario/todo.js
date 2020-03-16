let todoList = new Array();

function addTodoItem(todo) {
    let ul = document.getElementById("todosList");
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(todo.description + " - " + todo.dueDate));
    ul.appendChild(li);
    todoList.push(todo);
    console.log(todoList);

}

function showErrorMessage(message) {
    let alert = document.getElementById("alert");
    alert.innerHTML = message;
    alert.style.visibility = "visible";
}

function hideErrorMessage() {
    document.getElementById("alert").style.visibility = "hidden";
}

function Init() {
    document.getElementById('btnAdd').addEventListener('click', () => {

        let description = document.getElementById("description").value;
        let dueDate = document.getElementById("dueDate").value;
        let obj = NewObj(description, dueDate);

        if (validTodo(obj) == true) {
            addTodoItem(obj);
        }

    })
}

function NewObj(description, dueDate) {
    return {
        "description": description,
        "dueDate": dueDate
    }
}

function validTodo(todo) {

    if (todo.description.length === 0) {
        showErrorMessage('Descrição Obrigatória!');
    }
    else if (todo.dueDate.length === 0) {
        showErrorMessage('Data Obrigatória!');
    }
    else {
        hideErrorMessage();
        return true;
    }
    return false;
}


document.getElementById('btnClear').addEventListener('click', () => {
    let ul = document.getElementById('todosList');
    ul.innerHTML = '';
    todoList = 0;
    console.log(todoList);
});


Init();