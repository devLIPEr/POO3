import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    startDelivery(): void {
        this.getDrink();
        console.log("SoftDrink: Saiu para entrega...");
    }
    getDrink(): void {
        console.log("SoftDrink: Retirada para entrega!");
    }
}