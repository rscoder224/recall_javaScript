






// const user = {
//     firstName: "Shaurya",
//     lastName: "Tiwari",
//     email: "shauryacshd@gmail.com",
//     age:22,
//     address: "House No.233/kd/s87 colony/2830200",
//     about() {
//         return `${this.firstName} my age is ${this.age}`;
//     },
    
//     is18() {
//         return this.age >= 18;
//     }
    
// }

// function Create object and return that object
// function pahele ek object create krega 
// phir usme key value pairs add karega 
// phir us object ko return karega


//  const about_user = user.about;
//  user.about();


// function createUser(firstName,lastName,email,age,address){
//     const user = {};
//           user.firstName = firstName
//             user.lastName = lastName
//             user.email = email
//              user.age = age
//           user.address = address
//     user.about = function(){
//         return `${this.firstName} is ${this.age}`;
//     }
    
//     user.is18 = function(){
//         return this.age >= 18;
//     }
    
//     return user;
    
// }


// const user1 = createUser("Shaurya","Tiwari",'shauryabhanu@shaurya.com',22,'buddheswar');

// const user2 = createUser("Shaurya","Tiwari",'shauryabhanu@shaurya.com',22,'buddheswar');

// const user3 = createUser("Shaurya","Tiwari",'shauryabhanu@shaurya.com',22,'buddheswar');


// console.log(user1);



// const user18 = user1.is18();
// const user1about = user1.about();

// console.log(user18);
// console.log(user1about);

// Ish code me ek problem hai wo ye ki hum ishme jitni baar 
// user create karenge utni baar ishme method banege
// jis hamari memory me garbage jada ho jaayega 
// aur application time complexity badh jaayegi;

// const userMethods = {
//  about: function(){
//         return `${this.firstName} is ${this.age}`;
//     },
    
//  is18: function(){
//         return this.age >= 18;
//     },
//     eat : "grass on the paper"
// }


// function createUser(firstName,lastName,email,age,address){
//     const user = {};
//           user.firstName = firstName
//             user.lastName = lastName
//             user.email = email
//              user.age = age
//           user.address = address
//           user.about = userMethods.about
//           user.is18 = userMethods.is18
//           user.sing = userMethods.eat
//     return user;
// }

// const user3 = createUser("Shaurya","Tiwari",'shauryabhanu@shaurya.com',22,'buddheswar');


// console.log(user3);

// console.log(user3.about());
// console.log(user3.is18());

// Ab ish code me bhi Problem hai 
// woh kya hai woh ye hai ki 
// agr hame future me koi method add karna hua
// toh dikkat hogi
// kyuki hame dono jagah code ko update krna hoga
// suppose homko future me 1000 methods add krne hai
// hame dono 1000 baar update krna hoga
// ishse bachne ke liye hum __proto__ aur Object.create()
// ka use kareinge jiss ek object ko doosare object ka 
// proto set kar denge

const userMethods = {
 about: function(){
        return `${this.firstName} is ${this.age}`;
    },
    
 is18: function(){
        return this.age >= 18;
    },
    
 eat: function(what){
       return  `you Eaten ${what}`
    },
    
}


function createUser(firstName,lastName,email,age,address){
    const user = Object.create(userMethods)
          user.firstName = firstName
            user.lastName = lastName
            user.email = email
             user.age = age
          user.address = address
    return user;
}

const user1 = createUser("Shaurya","Tiwari",'shauryabhanu@shaurya.com',22,'buddheswar');

console.log(user1.eat('grass'));








