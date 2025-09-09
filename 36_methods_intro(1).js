// 36 Methods in JavaScript
// function Inside object 
function personInfo(){console.log(`Person name is ${this.firstName} and his age is ${this.age}`)}
const person = {
    firstName : "shaurya",
    age : 22,
    about : personInfo 
}
const person2 = {
    firstName : "Ayush",
    age : 21,
    about : personInfo 
}
const person3 = {
    firstName : "Parth",
    age : 23,
    about : personInfo 
}
const person4 = {
    firstName : "Divyanshu",
    age : 19,
    about : personInfo 
}


person.about();
person2.about();
person3.about();
person4.about();



