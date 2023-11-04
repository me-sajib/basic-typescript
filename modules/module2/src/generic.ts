//learn generic type
{
type GenericArray<T> = Array<T>;

const students: GenericArray<string | number | object> = ['sajib', 'sarker', 23, {name: "sajib"}];

const teacher: GenericArray<{name: string, age: number, role: string}> = [
    {
        name: "sajib",
        age: 32,
        role: "admin"
    },
    {
        name: "masum",
        age: 22,
        role: "admin"
    }
]

type TupleGen<x, y> = [x, y];

const studentID : TupleGen<number, {name: string, age: number}> = [121, {name:'sajib', age: 22}];














}