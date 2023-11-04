{

    const creatArry = (param: string) : string[] => {
        return [param]
    }
    

    interface User{
        name: string;
        age: number;
        role: string;
    }

  const arryGen = <X, Y, P>(num1: X, num2: Y, param: P) : [X, Y, P] =>{
    return [num1, num2, param];
  }

  const res2 = arryGen<number, number, User>(11, 22, {
    name: "sajib",
    age: 11,
    role: "admin"
  });


  const addStudent = <T>(student: T) =>{
    const level2 = "Learn level 2";
    return {
        ...student,
        level2
    }
  }
 interface StudentSchema{
    name: string;
    age: number;
    role: string;
 }
  const res3 = addStudent<StudentSchema>({name: "sajib", age: 22, role: "Frontend Enginner"});











}