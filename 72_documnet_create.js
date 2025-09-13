// documnent.createElement()
// append
// prepend
// remove 

// const newtodo = document.createElement('li');

// const newtodoText = document.createTextNode('New Todo');
// newtodo.append(newtodoText);


// newtodo.textContent = 'New Todo';
// const todoList = document.querySelector('.todo-list');

// todoList.prepend(newtodo);


// const todo = document.querySelector('.todo-list li');

// todo.remove();

// before
// after

const newtodo2 = document.createElement('li');

newtodo2.textContent = 'New Todo 2';

const todoList = document.querySelector('.todo-list');

todoList.before(newtodo2);


const todox = document.createElement('li');

todox.textContent = 'New Todo X';

todoList.after(todox);


