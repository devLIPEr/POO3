import Client from "./clients/Client";
import AiqfomeDelivery from "./deliveries/AiqfomeDelivery";
import Company from "./deliveries/Company";
import IFoodDelivery from "./deliveries/IFoodDelivery";
import IDeliveryFactory from "./deliveries/interfaces/IDeliveryFactory";

const currentCompany = Company.IFOOD;
let factory: IDeliveryFactory;

if(currentCompany === Company.IFOOD){
    factory = new IFoodDelivery();
}else if(currentCompany === Company.AIQFOME){
    factory = new AiqfomeDelivery();
}else{
    console.log("Companhia não definida!");
}

if(factory){
    const client = new Client(factory);
    client.startDelivery(true, true);
}