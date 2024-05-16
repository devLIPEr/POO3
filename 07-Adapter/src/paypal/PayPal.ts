import Token from "../utils/token";
import IPayPalPayment from "./interfaces/IPayPalPayment";

export default class PayPal implements IPayPalPayment{
    private token: Token;

    authToken(): Token {
        return new Token();
    }
    paypalPayment(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Enviando pagamento via PayPal");
    }
    paypalReceive(): void {
        console.log("Recebendo pagamento via PayPal");
    }
}