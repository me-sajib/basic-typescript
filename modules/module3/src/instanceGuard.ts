{

    class Animal{
        name : string;
        speace: string;
        
        constructor(name: string, speace: string){
            this.name = name;
            this.speace = speace;
        }

        makeSound(){
            console.log(`${this.name} is sound is ${this.speace}`)
        }
    }

    class Cat extends Animal{
        constructor(name: string, speace: string){
            super(name, speace);
        }
        makeMeow(){
            console.log("I am mewowing");
        }
    }


    class Dog extends Animal{
        constructor(name: string, speace: string){
            super(name, speace);
        }
        makeDog(){
            console.log("Dog are crowing");
        }
    }

    
    const isDog = (animal : Animal) : animal is Dog =>{
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal) : animal is Cat =>{
        return animal instanceof Cat;
    }
    
    const getAnimal = (animal:  Animal) =>{
        if(isCat(animal)){
            animal.makeMeow();
        }else if(isDog(animal)){
            animal.makeDog();
        }else{
            animal.makeSound();
        }
    }

const cat = new Cat("Cat mama", "Cat");
const dog = new Dog("Dog bhai ", "Dog");

getAnimal(cat)




}