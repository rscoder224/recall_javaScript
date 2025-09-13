

const allbuttons = document.querySelectorAll('.my-buttons button');

console.log(allbuttons);

for(let button of allbuttons){
    button.addEventListener('click', function(){
     console.log('youclicked me');
    });
} 
