import IBuilder from "../builders/interfaces/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director{
    constructor(private _builder: IBuilder){}
    constructSedanCar(){
        this._builder.setVehicleType(VehicleType.SEDAN);
        this._builder.setSeat(5);
        this._builder.setTransmission(Transmission.AUTOMATIC);
        this._builder.setEngine(new Engine(1600));
        for(var i = 0; i < 4; i++){
            this._builder.addWheel(new Wheel(15));
        }
    }
    constructTruck(){
        this._builder.setVehicleType(VehicleType.TRUCK);
        this._builder.setSeat(3);
        this._builder.setTransmission(Transmission.MANUAL);
        this._builder.setEngine(new Engine(13000));
        for(var i = 0; i < 6; i++){
            this._builder.addWheel(new Wheel(17));
        }
    }
    constructMotorcycle(){
        this._builder.setVehicleType(VehicleType.MOTORCYCLE);
        this._builder.setSeat(2);
        this._builder.setTransmission(Transmission.MANUAL);
        this._builder.setEngine(new Engine(1000));
        for(var i = 0; i < 2; i++){
            this._builder.addWheel(new Wheel(14));
        }
    }
}