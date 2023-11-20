import usuario from "./usuario";
import leilao from "./leilao";

class lance{
    private comprador: usuario;
    private leilao: leilao;
    private valor: DoubleRange;

    constructor(comprador: usuario, leilao: leilao, valor: DoubleRange){
        this.comprador = comprador
        this.leilao = leilao
        this.valor = valor
    }

    fecharleilao(){
        
    }
}