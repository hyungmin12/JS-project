// const toDoForm = document.getElementById("todo-form")
// const toDoList = document.getElementById("todo-list")

const toDoForm = document.querySelector("#todo-form")
const toDoList = document.querySelector("#todo-list")
// const toDoInput = toDoForm.querySelector("input")
const toDoInput = document.querySelector("#todo-form input")


function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    console.log(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);