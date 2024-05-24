import IConsole from "../consoles/interfaces/IConsole";
import Play from "./Play";

export default class AdvancedPlay extends Play{
    constructor(gameConsole: IConsole){
        super(gameConsole);
    }
    
    challenge(): void{
        console.log("Desafios ativados");
    }
}