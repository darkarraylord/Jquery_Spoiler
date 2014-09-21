//Problem:  Prevent spolierphones from seeing spolier
//Solution: Hide Spoilers and reveal them them throu user interaction

//1 - Hide spoilers
$(".spoiler span").hide();
//2 - Add a button
$(".spoiler").append("<button>Reveal spolier</button;>")
//3 - When button is pressed 
$("button").click(function() {
	//Show spoilers
	$(this).prev().show();
	//get rid of button
	$(this).remove();
});
	
