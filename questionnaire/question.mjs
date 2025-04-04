

import { stdin, stdout } from 'process';
import { createInterface } from 'readline';

class Question {

    /**
     * Le constucteur est la fonction appelée par l'opérateur new lorsque l'on veut créer une variable (instance à partir d'une classe).
     * @param {string} phrase la question et les choix de réponses. 
     * @param {number} goodAnswerValue le numéro de la bonne réponse
     */
    constructor(phrase, goodAnswerValue) {

        this.phrase = phrase;
        this.goodAnswerValue = goodAnswerValue;
    }
}

// Je déclarer un tableau de questions
const questions = [
    new Question("Quelle est la couleur des cheveux blancs d'Henri IV ?\n1. Blanc\n2. Rouge", 1),
    new Question("Quelle est la capitale de la France ?\n1. Londres\n2. Paris", 2),
    new Question("Combien de côtés a un triangle ?\n1. Trois\n2. Quatre", 1),
    new Question("Quel est le plus grand océan du monde ?\n1. Atlantique\n2. Pacifique", 2),
    new Question("Qui a peint la Joconde ?\n1. Léonard de Vinci\n2. Picasso", 1),
    new Question("Quelle est la planète la plus proche du Soleil ?\n1. Mercure\n2. Mars", 1),
    new Question("En quelle année a eu lieu la Révolution française ?\n1. 1789\n2. 1815", 1),
];

const logger = createInterface({
    input: stdin,
    output: stdout
})




// console.log(question.phrase);
// console.log(question.goodAnswerValue);

let score = 0;
let numQuest = 0;
console.log(questions[numQuest].phrase);

    logger.addListener('line', (answer) => {
        // console.log(answer);
        
        if (answer == questions[numQuest].goodAnswerValue) {
            console.log("Bonne réponse !");
            score++;
        }
        else {
            console.log("Mauvaise réponse !");

        }
        console.log("Votre score est de " + score + "");

        numQuest++;
        if(numQuest >= questions.length){
            logger.close();
            logger.removeAllListeners('line');
            return;    
        }
        
        console.log(questions[numQuest].phrase);
        
        
    })

