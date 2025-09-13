// how get dimensions of element in JS

// mujhe iski height aur width chahiye

const heading = document.querySelector('.section-todo');

const info = heading.getBoundingClientRect();
const height = heading.getBoundingClientRect().height;
const width = heading.getBoundingClientRect().width;

console.log(info); 
console.log(height); 
console.log(width); 



