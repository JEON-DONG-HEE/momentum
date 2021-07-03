const toDoForm = document.querySelector("#todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".list_todo");

let toDos = []; // 로컬 스토리지의 내용이 변경될 수 있도록 let 으로 변경
const TODOS_KEY = "toDos";

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));   // JSON.stringify 는 입력값을 string 으로 변환해 준다
}


// to do 리스트를 추가하는 기능만 있는 함수
function paintToDo(toDoValue) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = toDoValue;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const toDoValue = toDoInput.value;
    toDoInput.value = "";
    toDos.push(toDoValue);
    paintToDo(toDoValue);
    saveTodo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
    const parseTodos = JSON.parse(savedTodos);
    toDos = parseTodos; // 기존 localStorage 에 있던 값을 그대로 받아온 후 새로운 할 일 목록이 추가되도록, 기존 값 받아서 업데이트
    parseTodos.forEach(paintToDo);
}




