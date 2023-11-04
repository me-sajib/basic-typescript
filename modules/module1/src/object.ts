{// Reference type --> object

const user : {
    name: "sajib"; // literal type
    readonly age: number; //readonly mean - access modifier 
    isMarried: boolean;
    company: {
        name: string,
        address: string
    },
    address?: string;
} = {
    name: "sajib",
    age: 22,
    isMarried: false,
    company: {
        name: "PB",
        address: "Rangpur"
    }
}
}