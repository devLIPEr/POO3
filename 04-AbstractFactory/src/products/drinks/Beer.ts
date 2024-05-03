import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    startDelivery(): void {
        this.getDrink();
        console.log("Cerveja: Saiu para entrega...");
    }
    getDrink(): void {
        console.log("Cerveja: Retirada para entrega!");
    }
}