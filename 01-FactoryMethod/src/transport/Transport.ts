import IVehicle from "./vehicles/interfaces/IVehicle";

export default abstract class Transport{
    startTransport(): void {
        const vehicle: IVehicle = this.createTransport();
        vehicle.startRoute();
    };
    protected abstract createTransport(): IVehicle;
}