function main() {
    console.log("in main function");
	console.log("If you're looking at this, it means something has gone wrong. sad times.");
	/*googleMap();*/
	
}
/*
function googleMap() {
	var uluru = {lat: 50.9080, lng: -1.4002};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}*/
function formvalid(){
	console.log("I have been called");
	var x = 1; /* used to determin weather the form is valid*/
	if(document.getElementById("firstName").value == ''){
		document.getElementById("fError").style.display = "block";
		console.log("First name is missing.");
		x = 0;
	}
	else{
		console.log("First name is fine")
		document.getElementById("fError").style.display = "none";
		if(document.getElementById("lastName").value == ''){
			document.getElementById("lError").style.display = "block";
			console.log("Last name is missing");
			event.preventDefault();
			x = 0;
		}
		else{
			console.log("Last name is fine")
			document.getElementById("lError").style.display = "none";
			if(document.getElementById("e-mail").value == ''){
				document.getElementById("eError").style.display = "block";
				console.log("email is missing");
				event.preventDefault();
				x = 0;
			}
		else{
			console.log("email is fine")
			if(document.getElementById("message").value == ''){
				document.getElementById("mError").style.display = "block";
				console.log("message is missing");
				event.preventDefault();
				x = 0;
	}
	else{
		console.log("everything is fine")
		return true;
		}
		}
		}
	}
	if (x == 0){
		event.preventDefault();
	}
}