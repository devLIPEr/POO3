import Token from "../utils/token";
import IMercadoPagoPayment from "./interfaces/IMercadoPagoPayment";

export default class MercadoPago implements IMercadoPagoPayment{
    private token: Token;

    authToken(): Token {
        return new Token();
    }
    sendPayment(): void {
        this.token = this.authToken();
        console.log("TOKEN: " + this.token.token);
        console.log("Enviando pagamento via MercadoPago");
    }
    receivePayment(): void {
        console.log("Recebendo pagamento via MercadoPago");
    }
}