const toDoForm = document.querySelector("#todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".list_todo");

const toDos = [];
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

// function sayHello(item) {
//     console.log("안녕하세요", item);
// }

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

console.log(savedTodos);

if (savedTodos !== null) {
    const parseTodos = JSON.parse(savedTodos);
    console.log(parseTodos);
    parseTodos.forEach((item) => console.log("안녕하세요", item));  // arrow function(화살표 함수) 로 sayHello() 와 동일 하다
}




