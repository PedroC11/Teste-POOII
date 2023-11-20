import usuario from "./usuario";

class leilao{
    private produto: String;
    private preco: DoubleRange;
    private datalimite: Date;
    private dono: usuario;
    private listadelances: String;

    constructor(produto: String, preco: DoubleRange, datalimite: Date, dono: usuario, listadelances: String){
        this.produto = produto;
        this.preco = preco;
        this.datalimite = datalimite;
        this.dono = dono;
        this.listadelances = listadelances;
    }
}

export default leilao;
