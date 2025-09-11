// getter and setter

class Person{
    constructor(firstName,lastName,phone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
    
  get  fullname(){
        return `${this.firstName} ${this.lastName}`;
    }
    
    // setName(firstName,lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    
    set fullname(fullName){
           
        const [firstName,lastName] = fullName.split(' ');
        this.firstName = firstName ;
        this.lastName = lastName;
    }
    
}


const person1 = new Person ('Shaurya' ,'Tiwari',4927364423);

console.log(person1.fullname);



