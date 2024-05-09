import IBuilder from "./builders/interfaces/IBuilder";
import VehicleBuilder from "./builders/VehicleBuilder";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

function printDetails(vehicle: Vehicle){
    console.log("Construindo Veículo...");
    console.log("   Tipo: "+vehicle.vehicleType);
    console.log("   Quantidade de assentos: "+vehicle.seats);
    console.log("   Potência: "+vehicle.engine.power);
    console.log("   Quantidade de rodas: "+vehicle.wheels.length);
    console.log("   Aro: "+vehicle.wheels[0].rim);
    console.log("   Transmissão: "+vehicle.transmission);
}

const builder: IBuilder = new VehicleBuilder();
const director: Director = new Director(builder);

director.constructSedanCar();
const sedan: Vehicle = builder.getVehicle();
printDetails(sedan);

director.constructTruck();
const truck: Vehicle = builder.getVehicle();
printDetails(truck);

director.constructMotorcycle();
const motorcycle: Vehicle = builder.getVehicle();
printDetails(motorcycle);