let todos = [];

function renderTodos() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    const todoText = document.createElement('span');
    todoText.textContent = todo;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTodo(index));

    li.appendChild(todoText);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

function addTodo() {
  const todoInput = document.getElementById('todo-input');
  const todo = todoInput.value.trim();

  if (todo !== '') {
    todos.push(todo);
    todoInput.value = '';
    renderTodos();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

document.getElementById('todo-form').addEventListener('submit', (event) => {
  event.preventDefault();
  addTodo();
});
