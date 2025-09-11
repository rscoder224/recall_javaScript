

 CreateUser.prototype.userMethods = {
 about: function(){
        return `${this.firstName} is ${this.age}`;
    },
    
 is18: function(){
        return this.age >= 18;
    },
    
 eat: function(what){
      return  `you Eaten ${what}`
    }
    
}


function CreateUser(firstName,lastName,email,age,address){
          this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.age = age
        this.address = address
    return this;
}

const user1 = new CreateUser("Shaurya","Tiwari",'shauryabhanu@shaurya.com',22,'buddheswar');


const user1m = CreateUser.prototype?.userMethods?.eat('grass');

console.log(user1m);
// hasOwnProperty() ==> 

for(let key in user1){
   if(user1.hasOwnProperty(key)){
       console.log(key);
   }
}







