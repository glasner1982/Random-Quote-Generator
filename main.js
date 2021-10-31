const quote = document.getElementById("quote");
const myQuotes = [
	"If you continue to do what you've always done, you'll continue to get what you've always got. So if you want what you've never had, you must do what you've never done.",
	"Be who you are and say what you feel because those who mind don't matter and those who matter don't mind.",
	"Insanity is doing the same thing over and over and expecting different results.",
	"You ARE enough!",
	"Live your best life!"
];

window.onload = function(){
	getQuote();
}

function getQuote() {
	quote.innerHTML = myQuotes[Math.floor(Math.random() * myQuotes.length)];
}