function myFunction() {
	    var coffee = document.forms[0];
	    var txt = "";
	    var i;
	    for (i = 0; i < coffee.length; i++) {
	        if (coffee[i].checked) {
	            txt = txt + coffee[i].value + " ";
	        }
	    }
	    document.getElementById("order").value = "You ordered a coffee with: " + txt;
	}