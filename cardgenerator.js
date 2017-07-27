var inquirer = require('inquirer');
var flashCards = require('./BasicCard.js');
var clozeCards = require('./ClozeCard.js');
var questions = require('./questions.js');
var prompt = inquirer.createPromptModule();



function getQuestion(){

var randomIndex = Math.floor(Math.random()* questions.length);
var newQuestion = new clozeCards(questions[randomIndex].text, questions[randomIndex].cloze);
inquirerPrompt(newQuestion);

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
		getQuestion();
	}

	else {

		console.log("Try again!");
		getQuestion();
	}


}); 

}

getQuestion();
