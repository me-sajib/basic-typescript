//generic with interface

{


    interface Developer<X, Y = null> {
        name: string;
        age: number;
        role: string;
        computer: {
            brand: string;
            model: string;
        };
        address: X,
        useMac?: Y
    }

    type SetAddress = {
        home: string;
        road: string;
    }

    const poorDeveloper: Developer<SetAddress> = {
        name: "sajib",
        age: 22,
        role: "Frontend Engineer",
        computer: {
            brand: "lenovo",
            model: "ideapad"
        },
        address: {
            home: "Rangpur",
            road: "Rangpur"
        }
    }


    interface SetAddresses {
        home: string;
        road: string;
        office: string;
    }

    interface MacUser{
        use: boolean;
        brand: string;
        model: string;
        color: string;
        memory: string;
        price: number;
    }

    const richDeveloper: Developer<SetAddresses, MacUser> = {
        name: "Masum",
        age: 17,
        role: "Backend Engineer",
        computer: {
            brand: "lenovo",
            model: "ideapad"
        },
        address: {
            home: "Gaibandha",
            road: "Gaibandha",
            office: "Rangpur"
        },
        useMac: {
            use: true,
            brand: "mac",
            model: "macbook",
            color: "silver",
            memory: "16gb",
            price: 1000
        }
    }

    interface AddClass<N1, N2>{
        process(key: N1, value: N2): void
    }

    class AddSummetion implements AddClass<number, number>{
        process(key: number, value: number): void {
            console.log(key + value);
        }
    }










}