

class Animal{
    constructor(name,eat){
        this.name = name;
        this.eat = eat;
    }
    
    eats(){
        return `${this.name} eats ${this.eat}`
    }
    
}

const buff = new Animal('Elephant','SugarCane');

console.log(buff.eats())

