// new Keyword 
// how it works all the things

function createUser(firstName,age){
    this.firstName = firstName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(`${this.firstName} and age is ${this.age}` );
}

const user = new createUser("Shaurya",22);

console.log(user);

// new keyword yahan teen kaam kar rha hai
// 1.) creating Empty object like this = {}
// 2.) Return this 
// 3.) Object.create(createUser.prototype.func)
// function direct call karna hoga

user.about();


