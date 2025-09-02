// Call Back Functions in JavaScript



function newfunc(){
    console.log('inside new func');
    
}


function myFunc(callback){
    console.log('hello I am function');
    console.log(callback);
    newfunc();
    newfunc();
    newfunc();
    newfunc();
}

myFunc(newfunc);


const fc1 = (callback)=>{
    console.log(callback);
    fc2();
    fc2();
    fc2();
}

const fc2 = ()=>{
    console.log('Hello Shaurya How are You!!');
    
}


fc1(fc2);


