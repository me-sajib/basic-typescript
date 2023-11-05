{
    // learn utilites

    type Person = {
        name: string;
        age: number;
        email?: string;
        phone: number;
    }

    type  allName = Pick<Person, "name">; //only pick the name

    type contactInfo = Omit<Person, "name" | "age"> //expect the this keys

    type Rquire = Required<Person>;

    type pertialInfo = Partial<Person>;

    type readOnlyPerson = Readonly<Person>

    const person1 : readOnlyPerson = {
        name: "string",
        age: 123,
        email: "string",
        phone: 12872,
    }

    type Myobj = Record<string, unknown>

    const obj: Myobj = {
        a: "aa",
        n: 3245,
        j: "jj"
    }






}