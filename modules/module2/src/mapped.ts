{
// mapped  
// loop up type
const demoArr: number[] = [1, 3, 5];
const demoMap = demoArr.map(num => num.toString());

type Areas = {
    height: number;
    width: number;
}


type PerameterCheck <T> = {
    [key in keyof T]  : T[key];
}

const area1: PerameterCheck<{name: string, age: number}> = {
    name: "sajib",
    age: 22
}



}