import ITransportFactory from "../transport/interfaces/ITransportFactory";
import IAircraft from "../vehicles/aerial/interfaces/IAircraft";
import ILandVehicle from "../vehicles/land/interfaces/ILandVehicle";
import Vehicle from "../vehicles/Vehicle";

export default class Client{
    private vehicle: ILandVehicle;
    private aircraft: IAircraft;

    constructor(factory: ITransportFactory){
        this.vehicle = factory.createTransportVehicle();
        this.aircraft = factory.createTransportAircraft();
    }

    startRoute(tipo: any): void{
        if(tipo === Vehicle.LAND){
            this.vehicle.startRoute();
        }else if(tipo === Vehicle.AERIAL){
            this.aircraft.startRoute();
        }
    }
}