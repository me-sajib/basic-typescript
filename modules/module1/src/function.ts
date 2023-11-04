{function addName(name: string):string {
    return name;
}

const setName = (name:string):string =>{
    return `my name is ${name}`;
}

//object -> method

const PoorPerson = {
    name: "sajib",
    balance: 0,

    addBalance(amount :number): number {
        return this.balance + amount;
    }
}


// array map

const newArry : number[] = [1, 2, 4,5];

const maping : number[] = newArry.map((element : number) : number => element * 2);}