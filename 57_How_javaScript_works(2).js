
console.log(this);
// console.log(window);
console.log(myFunction);
console.log(fullName);





function myFunction(){
  console.log('This is my function');
}

var firstName = "Shaurya";
var lastName = "Tiwari";

var fullName = firstName + " " + lastName;

console.log(fullName);

// exection

// 1. this ==> window
// 2. window ==> {}
// 3. printed myFunction
// 4. fullName undefined(printed)
// firstName value chaged from UD to "Shaurya"
// lastName value = "Tiwari
// var fullname = "Shaurya" + "Tiwari"
// fullName Printed on the screen







