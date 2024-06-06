import Database from "../servers/Database";
import PermissionType from "../servers/PermissionType";
import Middleware from "./Middleware";

export default class CheckPermissionMiddleware extends Middleware{
    public check(email: string, password: string): boolean {
        const user = Database.filter(item => item.email === email);
        if(user[0].permission === PermissionType.ADMIN){
            console.log("Seja bem vindo administrador");
        }else{
            console.log("Seja bem vindo usuário");
        }
        return this.checkNext(email, password);
    }
}