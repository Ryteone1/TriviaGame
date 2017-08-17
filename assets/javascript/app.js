// function myFunction() {
// 	    var coffee = document.forms[0];
// 	    var txt = "";
// 	    var i;
// 	    for (i = 0; i < coffee.length; i++) {
// 	        if (coffee[i].checked) {
// 	            txt = txt + coffee[i].value + " ";
// 	        }
// 	    }
// 	    document.getElementById("order").value = "You ordered a coffee with: " + txt;
// 	}
$(function(){
        $('#start').click(function() {
            $(this).hide();
        });
    });



var number = 90;

var intervalId;

function run() {
      intervalId = setInterval(decrement, 1000);
    }

function decrement() {

  number--;

  $("#time-remaining").html("<h3>Time Remaining: " + number + " seconds</h3>");

  if (number === 0) {

    stop();

    alert("Time Up!");
  }
}


function stop() {

  clearInterval(intervalId);
}

run();





$("#q1").on("click", "input", function() {
	var checkVal = ($(this).val());
	var userGuess = checkVal;
	console.log(userGuess);
	var questionOne = $("input[name='factoid']:checked").val();

	if(questionOne == "john-mary") {
		correctCounter++;
		console.log(correctCounter);		
	}else if(questionOne != "john-mary") {
		incorrectCounter++;
		console.log(incorrectCounter);		
	}else if(questionOne == "") {
		unansweredcounter++;
		console.log(unansweredcounter);
	}
});

$("#q2").on("click", "input", function() {
	var checkVal = ($(this).val());
	var userGuess = checkVal;
	console.log(userGuess);
	var questionTwo = $("input[name='factoid']:checked").val();

	if(questionTwo == "18") {
		correctCounter++;
		console.log(correctCounter);		
	}else if(questionTwo != "18") {
		incorrectCounter++;
		console.log(incorrectCounter);		
	}else if(questionTwo == "") {
		unansweredcounter++;
		console.log(unansweredcounter);
	}
});

$("#q3").on("click", "input", function() {
	var checkVal = ($(this).val());
	var userGuess = checkVal;
	console.log(userGuess);
	var questionThree = $("input[name='factoid']:checked").val();

	if(questionThree == "cocker-spaniel") {
		correctCounter++;
		console.log(correctCounter);		
	}else if(questionThree != "cocker-spaniel") {
		incorrectCounter++;
		console.log(incorrectCounter);		
	}else if(questionThree == "") {
		unansweredcounter++;
		console.log(unansweredcounter);
	}
});

$("#q4").on("click", "input", function() {
	var checkVal = ($(this).val());
	var userGuess = checkVal;
	console.log(userGuess);
	var questionFour = $("input[name='factoid']:checked").val();

	if(questionFour == "31") {
		correctCounter++;
		console.log(correctCounter);		
	}else if(questionFour != "31") {
		incorrectCounter++;
		console.log(incorrectCounter);		
	}else if(questionFour == "") {
		unansweredcounter++;
		console.log(unansweredcounter);
	}
});

$("#q5").on("click", "input", function() {
	var checkVal = ($(this).val());
	var userGuess = checkVal;
	console.log(userGuess);
	var questionFive = $("input[name='factoid']:checked").val();

	if(questionFive == "compact-disk-player") {
		correctCounter++;
		console.log(correctCounter);		
	}else if(questionFive != "compact-disk-player") {
		incorrectCounter++;
		console.log(incorrectCounter);		
	}else if(questionFive == "") {
		unansweredcounter++;
		console.log(unansweredcounter);
	}
});