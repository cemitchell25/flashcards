

function clozeCreator(text, cloze) {

	this.text = text;
	this.cloze = cloze;


	var newCloze = cloze.replace("...", "")

	this.fullText = text + newCloze;


}

//The constructed object should have a cloze property that contains only the cloze-deleted portion of the text.
//The constructed object should have a fullText property that contains only the full text.
//The constructor should throw or log an error when the cloze deletion does not appear in the input text.
//Use prototypes to attach these methods, wherever possible.

module.exports = clozeCreator;
