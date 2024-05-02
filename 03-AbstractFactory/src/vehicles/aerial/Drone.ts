import IAircraft from "./interfaces/IAircraft";

export default class Drone implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Drone: Iniciando a entrega...");
    }
    getCargo(): void {
        console.log("Drone: Entrega retirada!");
    }
    checkWind(): void {
        console.log("Drone: Ventos a 16km!");
    }
}