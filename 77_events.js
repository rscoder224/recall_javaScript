// intro 
// events in Js
// events are actions that occur when the user or the browser manipulates a page
// events can be things the browser does, or actions the user takes

// click

const btn = document.querySelector('.btn-headline');



// btn.onclick = function() {
//     console.log('you clicked me');
// }
// use of this keyword


function clickMe() {
    console.log(this);
}

btn.addEventListener('click', clickMe);

// btn.addEventListener('click', ()=>{
//     console.log(this);
// });

