const toDoForm = document.querySelector('#todo_form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('.list_todo');


function paintToDo(toDoValue) {
    const listItem = document.createElement('li');
    const spanTxt = document.createElement('span');
    listItem.appendChild(spanTxt);
    spanTxt.innerText = toDoValue;
    toDoList.appendChild(listItem);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const toDoValue = toDoInput.value;
    toDoInput.value = "";
    paintToDo(toDoValue);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
