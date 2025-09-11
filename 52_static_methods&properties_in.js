// static methods and Properties

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
   static classInfo(){
       return `this is class name`
   }
    
    static desc = 'static property'
    
  get fullName(){
       return ` ${this.firstName} ${this.lastName}`;
    }
    
    set fullName(fullName){
        const [firstName,lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
}

console.log(Person.classInfo());


// static properties

console.log(Person.desc);










