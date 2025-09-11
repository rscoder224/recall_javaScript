
// class keyword javaScript 
// class consturcture in JS;;


class Animal{
      constructor(name,eat){
        this.name = name;
        this.eat = eat;
    }
    
    eats(){
        return `${this.name} eats ${this.eat}`
    }
    
}




class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age)
        this.speed = speed;
    }
    
    run(){
        return `${this.name} is running at speed ${this.speed}`;
    }
    
}


const tom = new Dog('kallu',"bones",25);


// object or Inctance 


console.log(tom.eats());

console.log(tom);
console.log(tom.run());
console.log(tom.eats());



