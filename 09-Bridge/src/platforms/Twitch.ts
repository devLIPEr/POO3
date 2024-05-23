import IPlatform from "./interfaces/IPlatform";

export default class Twitch implements IPlatform{
    constructor(){
        this.configureRMTP();
        console.log("TwitchTV: Transmissão iniciada");
    }

    configureRMTP(): void {
        this.authToken();
        console.log("TwitchTV: Configurando broadcasting");
    }
    authToken(): void {
        console.log("TwitchTV: Autorizando aplicação");
    }
}