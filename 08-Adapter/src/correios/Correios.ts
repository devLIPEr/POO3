import TrackingCode from "../utils/TrackingCode";
import ICorreios from "./interfaces/ICorreios";

export default class Correios implements ICorreios{
    private code: TrackingCode;

    trackingCode(): TrackingCode {
        let possibleDigits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let codeString = "";
        for(let i = 0; i < 13; i++){
            codeString += possibleDigits[Math.floor((Math.random() * possibleDigits.length))];
        }
        return new TrackingCode(codeString);
    }
    sendCorreios(): void {
        this.code = this.trackingCode();
        console.log("Código de rastreio: " + this.code.code);
        console.log("Enviando encomenda via Correios");
    }
    receiveCorreios(): void {
        console.log("Recebendo encomenda via Correios");
    }
}