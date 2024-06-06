import Middleware from "./Middleware";

export default class CheckPasswordMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        if(password.length < 6){
            console.log("Senha precisa ter 6 ou mais caracteres");
            return false;
        }
        return this.checkNext(email, password);
    }
}