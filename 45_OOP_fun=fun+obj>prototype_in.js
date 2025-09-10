
// agr hum javaScript ki baat kare toh javaScript me
// jo functions hote hai woh 
// function + Object 
// yaani JavaScript Function = Function + Object ;
// .name will tell the name of the given function;
// console.log(hello.name);
// you can add you Own properties in the function 
// ex==> hello.myproperty
// name property of function tells the name;
// function provide more useful Properties
// function hame dete hai free space
// that free space is Called prototype
// only function provide prototype property

function hello(){
    console.log('hello bro how are you');
}

hello();



// hello.myproperty = {
//     name: 'Shaurya',
//     age : 22
// }



// console.log(typeof hello.myproperty);

hello.prototype.abc = 'abc';

hello.prototype.fun = function(){
    return 'Dil ne ye kaha hai dil se';
}

console.log(hello.prototype.fun);













