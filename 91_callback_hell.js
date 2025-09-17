// callback hell
// piramid of doom;

const head1 = document.querySelector('.heading1');
const head2 = document.querySelector('.heading2');
const head3 = document.querySelector('.heading3');
const head4 = document.querySelector('.heading4');
const head5 = document.querySelector('.heading5');
const head6 = document.querySelector('.heading6');
const head7 = document.querySelector('.heading7');
const head8 = document.querySelector('.heading8');


// callback hell  
// setTimeout(() => {
//    head1.textContent = "Heading 1";
//    head1.style.background = "linear-gradient(to right, red , yellow)";
  
//    setTimeout(()=>{
//     head2.textContent = "Heading 2";
//    head2.style.background = "linear-gradient(to right, green , grey)";

//     setTimeout(()=>{
//      head3.textContent = "Heading 3";
//      head3.style.background = "linear-gradient(to right, pink , purple)";


//      setTimeout(()=>{
//         head4.textContent = "Heading 4";
//        head4.style.background = "linear-gradient(to right aqua, pink)";

   

//        setTimeout(()=>{
//         head5.textContent = "Heading 5";
//        head5.style.background = "linear-gradient(to right blue , black)";

       
//      },1000);    


//      },1000);    

//     },1000);

//    },1000);

// },1000);


function changeText(elment,text,color,time,onSuccess,onFailure){
   setTimeout(() => {
    if(elment){
    elment.textContent = text;
    elment.style.background = color;
    if(onSuccess)
onSuccess();
}else{
    if(onFailure)
        onFailure();
}
   },time);
}



//    changeText(head1,"Heading 1","linear-gradient(to right, red , yellow)",1000);
// callback hello Pyramid of doom
   
changeText(head1,"Heading 1","green",1000,()=>{
    console.log("Element exists");
changeText(head2,"Heading 1","green",1000,()=>{
    console.log("Element exists");
changeText(head3,"Heading 1","green",1000,()=>{
    console.log("Element exists");
},()=>{
    console.log("Element does not exist");
})
},()=>{
    console.log("Element does not exist");
})
},()=>{
    console.log("Element does not exist");
})
