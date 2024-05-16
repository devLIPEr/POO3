import Payoneer from "../payoneer/Payoneer";
import IPayPalPayment from "../paypal/interfaces/IPayPalPayment";
import Token from "../utils/token";

export default class PayoneerAdapter implements IPayPalPayment{
    constructor(private payoneer: Payoneer){
        console.log("Adaptando Payoneer no PayPal");
    }

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.payoneer.sendPayment();
    }
    paypalReceive(): void {
        this.payoneer.receivePayment();
    }
}