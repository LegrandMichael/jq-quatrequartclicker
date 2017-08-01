$(document).ready(function(){
	//votre code
	var count = 0;
	var quotes = ["Talk is cheap. Show me the code",
	"When you don't create things, you become defined by your tastes rather than ability. Your tastes only narrow & exclude people. so create.",
	"Programs must be written for people to read, and only incidentally for machines to execute.",
	"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
	"You've baked a really lovely cake, but then you've used dog shit for frosting.",
	"Truth can only be found in one place : the code.",
	"In case of fire, don't run make a fucking git commit and PUSH"]
	

	$(".cake-is-a-lie").click(function(){
		count++;
		$(".counter").html(count);
		if (count % 20 === 0) {
			var randomQuotes = Math.floor(Math.random() * (quotes.length));
			alert(quotes[randomQuotes]);
		}
	});
});