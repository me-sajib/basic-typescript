{

    class Addition{
        public static total : number = 0

        set Set(num: number){
            Addition.total = Addition.total + num
        }

        get GetTotal(){
            return Addition.total
        }
    }

    const sum = new Addition();
    sum.Set = 20
    sum.Set = 20
    console.log(sum.GetTotal)



}