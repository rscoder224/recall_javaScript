// event bubbling


const grandParent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
const body = document.body;




// grandParent.addEventListener('click', (e)=>{
// console.log('grand parent clicked');
// },)


// parent.addEventListener('click', (e)=>{
// console.log('parent clicked');
// })


// child.addEventListener('click', (e)=>{
// console.log('Child clicked');
// })


// body.addEventListener('click', (e)=>{
// console.log('body clicked');
// })


// event capturing

// grandParent.addEventListener('click', (e)=>{
//     console.log('grand parent clicked');
//     },true)
    
    
//     parent.addEventListener('click', (e)=>{
//     console.log('parent clicked');
//     },true)
    
    
//     child.addEventListener('click', (e)=>{
//     console.log('Child clicked');
//     },true)
    
    
//     body.addEventListener('click', (e)=>{
//     console.log('body clicked');
//     },true)
    
    // event delegation

// body.addEventListener('click', (e)=>{


    grandParent.addEventListener('click', (e)=>{
            console.log(e.target.textContent);
            })
