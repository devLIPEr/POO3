import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreios from "./correios/interfaces/ICorreios";
import Transportadora from "./transportadora/Transportadora";

// const delivery: ICorreios = new Correios();
const delivery: ICorreios = new TransportadoraAdapter(new Transportadora());

delivery.sendCorreios();
delivery.receiveCorreios();