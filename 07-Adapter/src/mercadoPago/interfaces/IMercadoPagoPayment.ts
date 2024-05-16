import Token from "../../utils/token";

export default interface IMercadoPagoPayment{
    authToken(): Token;
    sendPayment(): void;
    receivePayment(): void;
}