{

    class Parent{
        constructor(public name: string, public age: number){}
        getSleep(time: number){
            console.log(`Her name ${this.name} and sleep ${time}`)
        }
    }

    class Teacher extends Parent{
        constructor(public name: string, public age: number){
            super(name, age)
        }
    }

    class Student extends Parent{
        roll : number
        constructor(public name: string, public age: number, roll : number){
            super(name, age)
            this.roll = roll
        }
        getRoll(){
            console.log(`her roll is ${this.roll}`)
        }
    }

    const teac = new Teacher("faruk", 22)
    teac.getSleep(2);

    const stdn = new Student("sajib", 33, 33)
    stdn.getRoll();
    stdn.getSleep(22)
}