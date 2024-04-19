import { Cliente } from "./Cliente";
import { Endereco } from "./Endereco";
import { Produto } from "./Produto";
import { Telefone } from "./Telefone";
import { Venda } from "./Venda";

var endereco : Endereco = new Endereco("Rua Apucarana", 0, "Guarapuava", "Paraná");
var telefones : Telefone[] = [new Telefone("42", 912345678, "Celular"), new Telefone("42", 987654321, "Celular")];
var cliente : Cliente = new Cliente("Rafael Davi", 48619729063, 19041956, "Masculino", endereco, telefones);

var produtos : Produto[] = [
    new Produto(2192, "Açúcar", 10.9),
    new Produto(389, "Arroz", 7.19),
    new Produto(111, "Sabonete", 3.35),
    new Produto(111, "Sabonete", 3.35),
    new Produto(111, "Sabonete", 3.35),
    new Produto(111, "Sabonete", 3.35),
    new Produto(111, "Sabonete", 3.35),
    new Produto(111, "Sabonete", 3.35)
];
var venda: Venda = new Venda(11125463, 19042024, cliente, produtos);

console.log(`O valor da venda #${venda.codigo} feita pelo cliente ${venda.cliente.nome} foi de: ${Math.round(venda.calcularTotal()*100)/100}`)