// rest Parameters

function add(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${a}`);
    console.log(`c is ${Array.isArray(c)}`);
}


add(1,2,3,4,5,6,7);


function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

let ans = addAll(1,2,3,4,5,6,7,8,9,10);

console.log(ans);




