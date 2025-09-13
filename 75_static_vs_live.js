// static vs live list
// querySelectorAll hame staic list return krta hai
// getElementsBySomething hame live list return krta hai
const  lisitems = document.querySelectorAll('.todo-list li'); 

const live_list = document.createElement('li');


live_list.textContent  = "item 1";

const ul = document.querySelector('.todo-list');

ul.append(live_list);

console.log(lisitems);

console.log(lisitems);

