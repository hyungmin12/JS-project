// const toDoForm = document.getElementById("todo-form")
// const toDoList = document.getElementById("todo-list")

// const toDoForm = document.querySelector("#todo-form")
// const toDoList = document.querySelector("#todo-list")
// // const toDoInput = toDoForm.querySelector("input")
// const toDoInput = document.querySelector("#todo-form input")

// let toDos = []
// const TODOS_KEY = "todos"

// function saveToDos(){
//     localStorage.setItem("todos", JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//     const li = event.target.parentElement;
//     console.log(li.id);
//     li.remove();
//     toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
//     saveToDos();
//   }

// function paintToDo(newToDo){
//     const li = document.createElement("li")
//     li.id = newToDo.id
//     const span = document.createElement("span");
//     const button = document.createElement("button");
//     span.innerText = newToDo.text
//     button.innerText = "❌"

//     button.addEventListener("click", deleteToDo)

//     li.appendChild(span)
//     li.appendChild(button);
//     toDoList.appendChild(li);
// }


// function handleToDoSubmit(event){
//     event.preventDefault();
//     const newToDo = toDoInput.value;
//     toDoInput.value = "";
//     const newToDoObj = {
//         text:newToDo,
//         id : Date.now(),
//     };
//     toDos.push(newToDo);
//     // console.log(toDos[toDos.length - 1]);
//     // localStorage.setItem(toDos);
//     paintToDo(newToDoObj);
//     saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// // function sayHello(item){
// //     console.log("hello", item)
// // }

// const savedToDos = localStorage.getItem(TODOS_KEY)

// if (savedToDos)
// {
//     const parsedToDos = JSON.parse(savedToDos);
//     // parsedToDos.forEach(sayHello)
//     // parsedToDos.forEach((item) => console.log("hello", item)); // 위 sayHello만들고 하는거랑 같음.
//     toDos = parsedToDos;
//     parsedToDos.forEach(paintToDo);
// }

const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}