// callbacks  in javaSCript

// function hello(callback){
//     console.log("Hello World");
//     callback();
//     callback();
//     callback();
//     callback();

// }


// function hello2(){
//     console.log("This is a callback function");
// }


// hello(hello2);



function getnums(num1,num2,callback){
    if(typeof num1===Number && typeof num2===Number){
    callback(num1,num2);}else{
        console.log("Please provide numbers");
    }
}


// function add(num1,num2){
//     console.log(num1*num2);
// }

getnums(2,3,add);

