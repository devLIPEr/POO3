import Facebook from "./platforms/Facebook";
import IPlatform from "./platforms/interfaces/IPlatform";
import Twitch from "./platforms/Twitch";
import YouTube from "./platforms/YouTube";
import AdvancedLive from "./transmissions/AdvancedLive";
import Live from "./transmissions/Live";

function startLive(platform: IPlatform){
    console.log("Aguarde....");
    const live = new Live(platform);
    live.broadcasting();
    live.result();
    console.log('')
}

function startAdvancedLive(platform: IPlatform){
    console.log("Aguarde....");
    const live = new AdvancedLive(platform);
    live.broadcasting();
    live.result();
    live.subtitles();
    live.comments();
    console.log('')

}

startAdvancedLive(new YouTube());
startAdvancedLive(new Twitch());
startAdvancedLive(new Facebook());