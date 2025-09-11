// More About Prototype


const nums = new Array(1,2,3,4,5);
console.log(Object.getPrototypeOf(nums));
console.log(Array.isArray(Array.prototype));

function hello(){
    console.log('hello bro how are you');
}

console.log(nums);


// change the prototype

hello.prototype = [];

console.log(hello.prototype);

hello.prototype.push(1);
console.log(hello.prototype);

