// Class in JavaScript
// Class keyword
// Classes are fake

class Createuser{
    // console.log('constructor called');
    constructor(firstName,lastName,age,email,address){
          this.firstName = firstName;
          this.lastName = lastName;
          this.email = email;
          this.age = age;
          this.address = address;
    
    }
    about(){
        return `${this.firstName}`
    }
    
    
}


const user = new Createuser("Shaurya",'Tiwari',22,'ltsm@gaj.com','kkh');

console.log(user);

console.log(Object.getPrototypeOf(user));


