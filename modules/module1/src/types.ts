{
    
    type Student = {
        name: string;
        age: number;
        address: string;
        phone: number | string;
        position: "FrontendDev" | "BackendDev"
    }

    const student1: Student = {
        name: "sajib",
        age: 33,
        address: "Ranpgur",
        phone: '018121212',
        position: "FrontendDev"
    
    }



    type Summetion = (num: number, num2: number) => number;
    const added : Summetion = (number, number2) => number + number2;
    console.log(added(33, 3))


}