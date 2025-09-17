const head1 = document.querySelector('.heading1');
const head2 = document.querySelector('.heading2');
const head3 = document.querySelector('.heading3');
const head4 = document.querySelector('.heading4');
const head5 = document.querySelector('.heading5');
const head6 = document.querySelector('.heading6');
const head7 = document.querySelector('.heading7');
const head8 = document.querySelector('.heading8');




function changeText(elment,text,color,time){
return new Promise((resolve,reject)=>{
    setTimeout(() => {
        if(elment){
        elment.textContent = text;
        elment.style.background = color;
       resolve();
        }else{
           reject("Element not found");
        }
       },time);
})
}


const returnPromise = changeText(head1,"one","red",1000);


returnPromise.then(()=>{
    return changeText(head2,"two","purple",1000);

}).then(()=>{
    return changeText(head3,"three","green",1000);

}).then(()=>{
    return changeText(head4,"four","blue",1000);

}).then(()=>{
    return changeText(head5,"five","pink",1000);
}).then(()=>{
    return changeText(head6,"six","orange",1000);
}).then(()=>{
    return changeText(head7,"seven","brown",1000);
}).then(()=>{
    return changeText(head8,"eight","aqua",1000);
}).catch((err)=>{
    alert(err);});



