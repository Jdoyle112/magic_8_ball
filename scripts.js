var answers = [
	"It is certain",
	"Yes",
	"No",
	"Maybe",
	"Maybe some day",
	"Looks promising",
	"Doubtful",
	"It is unclear",
	"Better not to tell you yet",
	"Don't count on it",
	"Highly unlikely"
];

var output;

function rand() {
	output = answers[Math.floor(Math.random() * answers.length)];
	$('#output').text("8 Ball Says:  " + " " + output);
}


$(document).ready(function(){
	$('form').submit(function(event){
		event.preventDefault();	
		rand();
	});
});