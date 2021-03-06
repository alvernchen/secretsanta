/*
Secret Santa front-end
Last modified November 3, 2017
*/

var listOfNames = [];
var finalNames = [];

document.getElementById("name_form").addEventListener("submit", function(event){
    event.preventDefault();
	displayName();
});
 
function loadNames() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
    	xmlhttp = new XMLHttpRequest();
    }
    else {
	// code for older browsers
    	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
      	    listOfNames = this.responseText.trim().split(" ");
       	}
    };
    xmlhttp.open("GET", "https://raw.githubusercontent.com/alvernchen/secretsanta/gh-pages/names.txt", true);
    xmlhttp.send();
}

function loadFinal() {
    var xmlhttp;
    if (window.XMLHttpRequest) {
	xmlhttp = new XMLHttpRequest();
    } else {
	// code for older browsers
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	    finalNames = this.responseText.trim().split(" ");
	}
    };
    xmlhttp.open("GET", "https://raw.githubusercontent.com/alvernchen/secretsanta/gh-pages/final.txt", true);
    xmlhttp.send();
}
        
function displayName() {
    var name = document.getElementById("name").value;
	
	name = name.charAt(0).toUpperCase() + name.slice(1);
	
    if (listOfNames.indexOf(name) !== -1) {
		document.getElementById("rec").innerHTML = "You are sending a gift to " + finalNames[listOfNames.indexOf(name)] + ". Happy Holidays!";
		//return true;
    }
    else {
		document.getElementById("rec").innerHTML = "Please enter a valid name. Happy Holidays!";
		//return false;
    }
}
        
function main() {
    loadNames();
    loadFinal();
}

window.onload = main();