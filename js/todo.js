const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos=[];

function saveToDos(){
  localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDos=toDos.filter((toDo) => String(toDo.id) !==li.id);
  li.remove();
  saveToDos();
}

function paintToDo(newTodo) {
  const li=document.createElement("li");
  li.id=newTodo.id;
  const button=document.createElement("button");
  button.innerText="❌";
  button.classList.add("delete-button");
  const span=document.createElement("span");
  span.innerText=newTodo.text;
  button.addEventListener("click", deleteToDo);
  li.appendChild(button);
  li.appendChild(span);
  toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo=toDoInput.value;
  toDoInput.value="";
  const newTodoObj = {
    text:newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

function loginToDo(event){
  event.preventDefault();
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoInput.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
}


const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

loginForm.addEventListener("submit", loginToDo);

if(savedUsername !== null){
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  toDoInput.classList.remove(HIDDEN_CLASSNAME);
  toDoList.classList.remove(HIDDEN_CLASSNAME);
}