// Select element by ID using getElementById

const element = document.getElementById('main-heading');

console.log(element); 

// querySelecter


const element2 = document.querySelector('#main-heading');

console.log(element2);

// Select element by class name using querySelectorAll
// it will return nodelist
// array like object have length property 
const navs = document.querySelectorAll('.nav-item');

console.log(navs);

