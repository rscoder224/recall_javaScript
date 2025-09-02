// parameter Destructuring
// Object 
// React


const person = {
    firstName : "Shaurya",
    gender : "Male",
    age : 22
}


function myFunc({firstName,gender}){
    console.log(firstName);
    console.log(gender);
}

myFunc(person);



