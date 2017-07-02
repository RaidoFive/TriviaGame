
//initialize variables
var arr = ["Martin van Buren was the 11th president of the United States.", 
		   "The capital of Brazil is Curitiba.",
		   "The first video game console was the Atari 2600.",
		   "A bolt of lightning in six times hotter than the sun.", 
		   "Bald Eagles are so named because the word balde is an old English word meaning white.", 
		   "You can start a fire with ice.",
		   "The Lord of the Rings was first published in 1954."];

var trashbin = [];
var time = 0;
var clockRunning = false;
var countDown = 3000;
var right = 0;
var wrong = 0;
var rand = arr[Math.floor(Math.random() * arr.length)];
      $("#q1").text(rand);

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

//hold Javascript until page loads
$(document).ready(function() {
//hiding my div id that holds results until game ends.
	$("#hideMe").hide();
	console.log('hidden');
//timer get!  functioning timer counting dwon, showing and hiding elements when the game ends.
	var timer = function() {
		countDown--;
		$("#stopwatch").html(" " + countDown);
		if (countDown === 0) {
			$("#hideMe").show();
			$("#q1").hide();
			$("button").hide();
			$("#correct").text(" " + right);
			$("#wrong").text(" " + wrong);
			clearInterval(time);
		}
	}
  		var time = setInterval(timer, 10);
//click functionality for my buttons, checking against the true or false value of player input versus question
    $("button").click(function() {
      var n = arr.indexOf(rand);  
      	arr.splice($.inArray(removeItem, arr), n);
      	console.log(arr);
      	if($(this).val() == "t1" && n >= 3) {
        	right++;
      	}else if($(this).val() == "t1" && n <=2) {        
        	wrong++;
      	}else if($(this).val() == "f1" && n <= 2) {        
        	right++;
      	}else if($(this).val() == "f1"  && n >=3) {      
        	wrong++;
      	}
     	 rand = arr[Math.floor(Math.random() * arr.length)];
      		$("#q1").text(rand);
    }); 

   // $("#audio").play();//music file to play music?
    
timer();
});