{

    interface IStudent {
        name: string;
        age: number;
        address: string;
    }

    type IStudent2 = {
        name: string;
        age: number;
        address: string;
    }


    const student: IStudent = {
        name: "sajib",
        age: 22,
        address: "Rangpur"
    }
    
    type Roll = number[];

    interface Roll2 {
        [index: number] : string
    }

    const rolls: Roll2 = ['sajib', 'sarker' ];


    interface AddedNumbers {
        (number: number, number2: number) : number
    }

    const added : AddedNumbers = (number, number2) => number + number2;



}