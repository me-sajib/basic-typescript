{
// contraints mane must be ditei hobe 




const addStudent = <T extends {id: number, email: string}>(student: T) =>{
    const level2 = "Learn level 2";
    return {
        ...student,
        level2
    }
  }
 interface StudentSchema{
    id: number,
    email: string,
    name: string;
    age: number;
    role: string;
 }
  const res3 = addStudent({id: 11, email: "me.mrsajib@gmail.com", name: "sajib", age: 22, role: "Frontend Enginner"});


//   typeof operator

type Vehicle = {
    bike: string;
    car: string;
    ship: string;
}

type Owner = keyof Vehicle;

const person2 : Owner = "bike" ;

// string litarel
// const value = "name" | "age" | "role"

const getValue =<X, Y extends keyof X> (obj : X, key : Y) =>{
    return obj[key]
}

const user = {
    name: "sajib",
    age: 22,
    role: "admin"
}

const result10 = getValue(user, "role");








}