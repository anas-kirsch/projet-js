import { stdin, stdout } from "process";
import {createInterface} from "readline";

// Je crée un objet qui fait interface avec les fd stdin et stdout
const logger = createInterface({
    input : stdin,
    output : stdout
});

let nbInput = 0;

logger.addListener("line",onUserAnswer);

function onUserAnswer(answer){
   console.log(nbInput,answer);
    nbInput++;
   if(nbInput > 3){
    logger.removeListener("line",onUserAnswer);
    logger.close();
   }
}