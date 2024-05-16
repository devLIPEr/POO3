import MercadoPago from "../mercadoPago/MercadoPago";
import IPayPalPayment from "../paypal/interfaces/IPayPalPayment";
import Token from "../utils/token";

export default class MercadoPagoAdapter implements IPayPalPayment{
    constructor(private mercadoPago: MercadoPago){
        console.log("Adaptando MercadoPago no PayPal");
    }
    
    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.mercadoPago.sendPayment();
    }
    paypalReceive(): void {
        this.mercadoPago.receivePayment();
    }
}