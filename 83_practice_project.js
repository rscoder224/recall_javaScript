
const button = document.querySelector('button');
const span = document.querySelector('.currentbg');
const body = document.body;

function randomColorgenerator() {const red = Math.floor(Math.random()*256);
const green = Math.floor(Math.random()*256);
const yellow = Math.floor(Math.random()*256);

const randomColor = `rgb(${red},${green},${yellow})`;
return randomColor;
}




button.addEventListener('click',(e)=>{
const randomColor = randomColorgenerator();
span.textContent = randomColor;
body.style.backgroundColor = randomColor;

});
