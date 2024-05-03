import IFood from "./interfaces/IFood";

export default class HotDog implements IFood{
    startDelivery(): void {
        this.getFood();
        console.log("Cachorro Quente: Saiu para entrega...");
    }
    getFood(): void {
        console.log("Cachorro Quente: Retirando para entrega.");
    }
}