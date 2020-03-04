let barras = '/' + '/' + '/';

function TodoList() {
    this.description = [];
    this.dueDate = [];
}

let array = new TodoList();


function todo() {
    this.description = document.getElementById('description').value;
    this.dueDate = document.getElementById('dueDate').value;
}

function addTodoItem(text) {
    var ul = document.getElementById("todosList");
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(text.description + " - " + text.dueDate));
    ul.appendChild(li);
}

function showErrorMessage(message) {
    var alert = document.getElementById("alert");
    alert.innerHTML = message;
    alert.style.visibility = "visible";
}

function hideErrorMessage() {
    document.getElementById("alert").style.visibility = "hidden";
}

function onAddClicked() {
    let tudo = new todo();
    validTodo(tudo);

}

function validTodo(todo) {
    if (todo.description.length < 2 || todo.dueDate.length < 2 || !todo.dueDate.includes(barras)) {
        showErrorMessage('Envio inválido! É necessário informar no mínimo 2 caracteres ou a barra para divisória de datas!')
    }
    else {
        hideErrorMessage();
        addTodoItem(todo);
        array.description.push(todo.description);
        array.dueDate.push(todo.dueDate);
        console.log(array.description);
        console.log(array.dueDate);
    }
}

function clearTodos() {
    document.getElementById('todosList').innerHTML = '';
    array.description = [];
    array.dueDate = [];
}
