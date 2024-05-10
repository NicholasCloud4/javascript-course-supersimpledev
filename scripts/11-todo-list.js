const todoList = [
  {
    name: "wash car",
    dueDate: "2022-12-22",
  },
  {
    name: "buy food",
    dueDate: "2022-12-22",
  },
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    const { name, dueDate } = todoObject;
    //const dueDate = todoObject.dueDate;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
        <button onClick="
            todoList.splice(${i}, 1);
            renderTodoList();
        ">Delete</button>
        `;
    todoListHTML = todoListHTML + html;
  }

  console.log(todoListHTML);
  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");

  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");

  const dueDate = dateInputElement.value;

  todoList.push({ name: name, dueDate: dueDate });
  console.log(todoList);

  //   This will remove the input from textbox when button is clicked
  inputElement.value = "";
  renderTodoList();
}
