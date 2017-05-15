var fNameValid = false;
var lNameValid = false;
var emailValid = false;
var messageValid = false;
var validemail = false;
function main() {
    console.log("in main function");
	console.log("If you're looking at this, it means something has gone wrong. sad times.");
  document.getElementById("firstName").addEventListener("change", fNameCheck);
  document.getElementById("lastName").addEventListener("change", lNameCheck);
  document.getElementById("e-mail").addEventListener("change", emailCheck);
  document.getElementById("message").addEventListener("change", messageCheck);
	googleMap();

}

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
}
function fNameCheck(){
  console.log("we are now in fNameCheck")
  if(document.getElementById("firstName").value == ''){
    document.getElementById("firstName").style.backgroundColor = "red";
    document.getElementById("firstName").style.Color = "black";
		document.getElementById("fError").style.display = "block";
    document.getElementById("fCorrect").style.display = "none";
		console.log("First name is missing.");
		fNameValid = false;
  }else{
    document.getElementById("fError").style.display = "none";
    document.getElementById("fCorrect").style.display = "block";
    document.getElementById("firstName").style.backgroundColor = "";
    document.getElementById("firstName").style.Color = "";
    fNameValid = true
  }
}
function lNameCheck(){
  console.log("we are now in lNameCheck")
  if(document.getElementById("lastName").value == ''){
    document.getElementById("lastName").style.backgroundColor = "red";
    document.getElementById("lastName").style.Color = "black";
		document.getElementById("lError").style.display = "block";
    document.getElementById("lCorrect").style.display = "none";
		console.log("last name is missing.");
		lNameValid = false;
  }else{
    document.getElementById("lError").style.display = "none";
    document.getElementById("lCorrect").style.display = "block";
    document.getElementById("lastName").style.backgroundColor = "";
    document.getElementById("lastName").style.Color = "";
    lNameValid = true
  }
}
function emailCheck(){
  validemail = false;
  var x = document.getElementById("e-mail").value;
  console.log("we are now in emailCheck")
  if(x == ''){
		document.getElementById("eError").style.display = "block";
    document.getElementById("eCorrect").style.display = "none";
    document.getElementById("e-mail").style.backgroundColor = "red";
    document.getElementById("e-mail").style.Color = "black";
		console.log("e-mail is missing.");
		emailValid = false;
  }else{
    var i;
    for(i=0;i<x.length;i++){
      if(x[i] == "@"){
        for(i=i;i<x.length;i++){
          if(x[i] == "."){
            validemail = true;
          }
        }
      }
    }
    if(validemail == false){
      document.getElementById("eError").style.display = "block";
      document.getElementById("eCorrect").style.display = "none";
      document.getElementById("e-mail").style.backgroundColor = "red";
      document.getElementById("e-mail").style.Color = "black";
    }else{
    document.getElementById("eError").style.display = "none";
    document.getElementById("eCorrect").style.display = "block";
    document.getElementById("e-mail").style.backgroundColor = "";
    document.getElementById("e-mail").style.Color = "";

    emailValid = true
  }
  }
}
function messageCheck(){
  console.log("we are now in messageCheck")
  if(document.getElementById("message").value == ''){
    document.getElementById("message").style.backgroundColor = "red";
		document.getElementById("mError").style.display = "block";
    document.getElementById("mCorrect").style.display = "none";
    document.getElementById("message").style.Color = "black";
		console.log("message is missing.");
		messageValid = false;
  }else{
    document.getElementById("mError").style.display = "none";
    document.getElementById("mCorrect").style.display = "block";
    document.getElementById("message").style.backgroundColor = "";
    document.getElementById("message").style.Color = "";
    messageValid = true
  }
}
function formvalid(){
    if(fNameValid == true && lNameValid == true && emailValid == true && messageValid == true){
      console.log("Great success");
    }else{
      event.preventDefault();
      if(fNameValid == false){
        alert("First name is missing");
      }else{
        if(lNameValid == false){
          alert("last name is missing");
        }else{
          if(emailValid == false){
            if(validemail == false){
              alert("Invalid E-mail");
            }else{
              alert("E-mail is missing");
            }
          }else {
            if(messageValid == false){
              alert("You have not entered a message");
            }
          }
        }
      }
    }


}
/*
function formvalid(){
	console.log("I have been called");
	var x = 1; /* used to determin weather the form is valid
	if(document.getElementById("firstName").value == ''){
		document.getElementById("fError").style.display = "block";
		console.log("First name is missing.");
		x = 0;
	}else{
		console.log("First name is fine")
		document.getElementById("fError").style.display = "none";
		if(document.getElementById("lastName").value == ''){
			document.getElementById("lError").style.display = "block";
			console.log("Last name is missing");
			event.preventDefault();
			x = 0;
		}else{
			console.log("Last name is fine")
			document.getElementById("lError").style.display = "none";
			if(document.getElementById("e-mail").value == ''){
				document.getElementById("eError").style.display = "block";
				console.log("email is missing");
				event.preventDefault();
				x = 0;
			}else{
			console.log("email is fine")
			if(document.getElementById("message").value == ''){
				document.getElementById("mError").style.display = "block";
				console.log("message is missing");
				event.preventDefault();
				x = 0;
	}else{
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
*/
