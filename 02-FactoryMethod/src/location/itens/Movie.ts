import IItem from "./interfaces/IItem";

export default class Movie implements IItem{
    start(): void {
        this.getDescription();
        console.log("Iniciando filme...");
    }
    getDescription(): void {
        console.log("Descrição do filme...");
    }
}