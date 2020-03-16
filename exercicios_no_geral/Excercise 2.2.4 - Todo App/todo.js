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

    /*// Exemplo 1 de um modo
    function onAddClicked(){
        var description = document.getElementById("description").value;
        var dueDate = document.getElementById("dueDate").value;
        console.log("description: "+description);
        console.log("dueDate: "+dueDate);
        let obj = {'description': description, 'dueDate': dueDate};
        addTodoItem(obj);
    }*/

    /*// Exemplo 1 de outro modo
    function onAddClicked(){
        var description = document.getElementById("description").value;
        var dueDate = document.getElementById("dueDate").value;
        console.log("description: "+description);
        console.log("dueDate: "+dueDate);
        addTodoItem({'description': description, 'dueDate': dueDate});
    }*/

    // Um objeto no Javascript é passado dentro de chaves e precisa de dois parametros!
    // Para solucionar esse exercicio basta pegar o exercício puro e criar um obejto que tenha como informações os dados a serem captados, e passar como parametro para a função q será responsável popr criar a lista e colocar as informações.

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
