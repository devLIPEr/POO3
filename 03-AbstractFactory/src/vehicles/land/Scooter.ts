import ILandVehicle from "./interfaces/ILandVehicle";

export default class Scooter implements ILandVehicle{
    startRoute(): void {
        this.getCargo();
        console.log("Scooter: Iniciando entrega...");
    }
    getCargo(): void {
        console.log("Scooter: Encomenda retirada!");
    }
}