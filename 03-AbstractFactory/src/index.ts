import Client from "./clients/Client";
import Company from "./transport/Company";
import InDriveTransport from "./transport/InDriveTransport";
import ITransportFactory from "./transport/interfaces/ITransportFactory";
import NineNineTransport from "./transport/NineNineTransport";
import UberTransport from "./transport/UberTransport";
import Vehicle from "./vehicles/Vehicle";

const currentCompany = Company.INDRIVE;
let factory: ITransportFactory;

switch(currentCompany){
    case Company.UBER:
        factory = new UberTransport();
        break;
    case Company.NINENINE:
        factory = new NineNineTransport();
        break;
    case Company.INDRIVE:
        factory = new InDriveTransport();
        break;
    default:
        console.log("Companhia não definida!");
        break;
}

const client = new Client(factory);
client.startRoute(Vehicle.LAND);