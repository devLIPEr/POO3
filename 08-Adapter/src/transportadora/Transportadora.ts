import TrackingCode from "../utils/TrackingCode";
import ITransportadora from "./interfaces/ITransportadora";

export default class Transportadora implements ITransportadora{
    private code: TrackingCode;
    
    trackingCode(): TrackingCode {
        let possibleDigits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let codeString = "";
        for(let i = 0; i < 13; i++){
            codeString += possibleDigits[Math.floor((Math.random() * possibleDigits.length))];
        }
        return new TrackingCode(codeString);
    }
    send(): void {
        this.code = this.trackingCode();
        console.log("Código de rastreio: " + this.code.code);
        console.log("Enviando encomenda via Transportadora");
    }
    receive(): void {
        console.log("Recebendo encomenda via Transportadora");
    }
}