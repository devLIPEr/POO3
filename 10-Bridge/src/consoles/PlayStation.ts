import IConsole from "./interfaces/IConsole";

export default class PlayStation implements IConsole{
    constructor(){
        this.configureGame();
        console.log("PlayStation: Jogo iniciado");
    }

    configureGame(): void {
        this.authToken();
        console.log("PlayStation: Configurando jogo");
    }
    authToken(): void {
        console.log("PlayStation: Autorizando usuário");
    }
}