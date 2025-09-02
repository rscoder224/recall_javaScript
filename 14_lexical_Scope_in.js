// lexical Scope

function myapp(){
    
     const myVar = "value1";
 
    
    function cau(){
        // const myVar = '443'
        console.log(myVar);
    }
    
    const babu = function(){
        console.log('hello Babu What you are doing');
    }
    
    const kaju = (a,b)=>a*b;
    
    cau();
    // console.log(myVar);
    
    
}

myapp();

