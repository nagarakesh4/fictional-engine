function loadAlert(){
	console.log("THis prints something in the console");
	
}

document.addEventListener('DOMContentLoaded', function(){
	alert("this alert is loaded onload and before any external resources (images and css) are loaded")
});