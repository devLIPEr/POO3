import IConsole from "./consoles/interfaces/IConsole";
import PlayStation from "./consoles/PlayStation";
import XBox from "./consoles/XBox";
import AdvancedPlay from "./playing/AdvancedPlay";
import Play from "./playing/Play";

function startPlay(gameConsole: IConsole){
    console.log("Aguarde....");
    const play = new Play(gameConsole);
    play.playing();
    play.result();
    console.log('');
}

function startAdvancedPlay(gameConsole: IConsole){
    console.log("Aguarde....");
    const play = new AdvancedPlay(gameConsole);
    play.playing();
    play.result();
    play.challenge();
    console.log('');
}

startAdvancedPlay(new PlayStation());
startAdvancedPlay(new XBox());