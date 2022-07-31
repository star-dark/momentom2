const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");
const TODOS_KEY = "todos"
let toDos = []

function deleteTodo(event) {
    const deletli = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(deletli.id));
    deletli.remove();
    saveToDos()
}
function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
} 

function addList(todo) {   
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function upload(evn){
    evn.preventDefault();
    const newToDo = {text:toDoInput.value, id:Date.now(),};
    toDoInput.value = "";
    toDos.push(newToDo);
    addList(newToDo);
    saveToDos();
}

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos!==null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(addList);
}

toDoForm.addEventListener("submit",upload);