

// const nav_items = document.getElementsByClassName('nav-item');
// const nav_items = document.getElementsByTagName('a');
// use can use for loop and for of loop in html collection
// cannot use forEach loop in html collection

// for(let items of nav_items){
//     items.style.backgroundColor =  'yellow';
// }

// for(let i = 0; i < nav_items.length; i++){
//     nav_items[i].style.color = 'red';
// }



// we can convert html collection into array

// let no = Array.from(nav_items);

// console.log(no);


// function bgchange(item){
//     item.style.backgroundColor = 'yellow';
//     item.style.color = 'red';
// }

// no.forEach(bgchange);


const nav_items = document.querySelectorAll('a');

// in nodelist we can use 
// forEach loop
// for loop
// for of loop


// const no = Array.from(nav_items);



