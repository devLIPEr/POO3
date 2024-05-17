import ICorreios from "../correios/interfaces/ICorreios";
import Transportadora from "../transportadora/Transportadora";
import TrackingCode from "../utils/TrackingCode";

export default class TransportadoraAdapter implements ICorreios{
    constructor (private transportadora: Transportadora){
        console.log("Adaptando Transportadora para Correios");
    }
    
    trackingCode(): TrackingCode {
        let possibleDigits = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let codeString = "";
        for(let i = 0; i < 13; i++){
            codeString += possibleDigits[Math.floor((Math.random() * possibleDigits.length))];
        }
        return new TrackingCode(codeString);
    }
    sendCorreios(): void {
        this.transportadora.send();
    }
    receiveCorreios(): void {
        this.transportadora.receive();
    }
}