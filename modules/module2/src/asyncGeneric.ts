// async generic
type Something = {something: string}

const createPromise = (): Promise<Something> =>{
    return new Promise((resolve, reject)=>{
        const data : Something = {something: "something"};
        if(data){
            resolve(data);
        }else{
            reject("Fail to fetch data");
        }
    })
}

const getPromise = async () : Promise<Something> =>{
    const getP : Something = await createPromise();
    return getP;
}

getPromise()