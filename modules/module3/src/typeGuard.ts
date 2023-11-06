{
    //type guard and typeof
    
    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string,
        role: "Admin"
    }
    const getUser = (user : AdminUser | NormalUser) =>{
        if("role" in user){
            console.log(`my name is ${user.name} and role ${user.role}`)
        }
        console.log(`my name is ${user.name}`)
    }

    getUser({name: "sajib", role: "Admin"})















}