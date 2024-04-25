import BicycleTransport from "./transport/BicycleTransport";
import CarTransport from "./transport/CarTransport";
import MotorcycleTransport from "./transport/MotorcycleTransport";
import Transport from "./transport/Transport";

declare var process;

let transport: Transport;

if(process.argv.includes("uber")){
    transport = new CarTransport();
}else if(process.argv.includes("moto")){
    transport = new MotorcycleTransport();
}else if(process.argv.includes("bike")){
    transport = new BicycleTransport();
}else{
    console.log("Selecione o tipo de transporte");
}

if(transport){
    transport.startTransport();
}