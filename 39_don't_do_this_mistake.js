// don't do this mistake

const user = {
    firstName : "Shaurya",
    age: 22,
    email: "shaurya2803090@gmail.com",
    about: function(){
        console.log(`hello bro I am ${this.firstName} and I am ${this.age} years old`);
    }
}

// #mistake wrong Method X
// const fun = user.about;
// fun();

// # correct Way of Doing all this

const fun = user.about.bind(user);

fun();






