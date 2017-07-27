var inquirer = require('inquirer');
var flashCards = require('./BasicCard.js');
var clozeCards = require('./ClozeCard.js');
var questions = require('./questions.js');
var prompt = inquirer.createPromptModule();
var correct = 0;
var incorrect = 0;



function getQuestion(){

	var randomIndex = Math.floor(Math.random()* questions.length);
	var newQuestion = new clozeCards(questions[randomIndex].text, questions[randomIndex].cloze);
	console.log("Correct Answers: " + correct);
	console.log("Incorrect Answers: " + incorrect + "\n");
	inquirerPrompt(newQuestion);

	if (correct === 5) {

		console.log("Congrats you candy genius! YOU WON!");
		correct = 0;
		incorrect = 0;

	}

	else if (incorrect === 5) {

		console.log("You Lost! Maybe you should try eatting more candy?")
		correct = 0;
		incorrect = 0;

	}

}

function inquirerPrompt(newQuestion){

	var promptQuestions = [

	{
		type: "input",
		message: newQuestion.cloze,
		name: "cloze"

	}

	];


	inquirer.prompt(promptQuestions).then(function(cardResult){

		if (newQuestion.text === cardResult.cloze) {

			console.log("You are correct!")
			correct++;
			getQuestion();
		}

		else {

			console.log("Try again!");
			incorrect++;
			getQuestion();
		}


	}); 

}

getQuestion();

