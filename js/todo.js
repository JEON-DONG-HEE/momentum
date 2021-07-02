const toDoForm = document.querySelector("#todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".list_todo");

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

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
    paintToDo(toDoValue);
}

toDoForm.addEventListener("submit", handleToDoSubmit);



