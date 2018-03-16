class Cachorro{
    tamanho : number;
    raca: string;


    constructor(raca : string, tamanho: number){
        this.raca = raca;
        this.tamanho = tamanho;
    }

    latir(){
        console.log("AuAu");
    }
}

let c1 = new Cachorro("Beagle",1.0);

c1.latir();