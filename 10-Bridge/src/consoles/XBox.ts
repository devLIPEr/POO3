import IConsole from "./interfaces/IConsole";

export default class XBox implements IConsole{
    constructor(){
        this.configureGame();
        console.log("XBox: Jogo iniciado");
    }

    configureGame(): void {
        this.authToken();
        console.log("XBox: Configurando jogo");
    }
    authToken(): void {
        console.log("XBox: Autorizando usuário");
    }
}