// rest Parameters

function add(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${a}`);
    console.log(`c is ${Array.isArray(c)}`);
}


add(1,2,3,4,5,6,7);
