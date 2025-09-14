// Project 


const todo_form = document.querySelector('.form-todo');

const todo_input = document.querySelector('.form-todo input[type="text"]');
c
todo_form.addEventListener('submit',(e)=>{
const newtodoText = todo_input.value;


    e.preventDefault();
    const new_li = document.createElement('li');
    const new_lix = `<li>
          <span class="text">${newtodoText}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>
        </li>`

        new_li.innerHTML = new_lix.innerHTML;
        todo_input.value = '';

});


