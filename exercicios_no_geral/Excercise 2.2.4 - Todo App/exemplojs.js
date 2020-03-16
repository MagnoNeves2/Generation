function addTodoItem(todo){
    var ul = document.getElementById("todosList");
    var li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(todo.description + " - "+todo.dueDate));
    ul.appendChild(li);
}

function showErrorMessage(message){
    var alert = document.getElementById("alert");
    alert.innerHTML = message;
    alert.style.visibility = "visible";
}

function hideErrorMessage(){
    document.getElementById("alert").style.visibility = "hidden";
}

function onAddClicked(){
    var description = document.getElementById("description").value;
    var dueDate = document.getElementById("dueDate").value;
    console.log("description: "+description);
    console.log("dueDate: "+dueDate);   
}

function validTodo(todo){
}

function clearTodos(){
}