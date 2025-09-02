// function inside function
// function inside functions are only accessble in the function scope.

const app = ()=>{
    console.log('inside App');
    
    const inappadd = (a,b)=>a+b;
    
    const inappsub = (a,b)=>a-b;
    
    const inappmul = (a,b)=>a*b;
    
    let res = inappadd(12,12);
    console.log(res);
    
    
}

app();

