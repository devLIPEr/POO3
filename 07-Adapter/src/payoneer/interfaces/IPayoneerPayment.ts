import Token from "../../utils/token";

export default interface IPayoneerPayment{
    authToken(): Token;
    sendPayment(): void;
    receivePayment(): void;
}