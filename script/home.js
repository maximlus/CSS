function main() {
  console.log("in main function");
	console.log("If you're looking at this, it means something has gone wrong. sad times.");
	clock();

}

function clock(){
	var today = new Date();
	var hour = today.getHours();
	var minuite = today.getMinutes();
	var amPm = "AM";
	hour = checkTime(hour);
	minuite = checkTime(minuite);
	if(hour > 12){
		amPm = "PM";
		hour = hour - 12;
	}
	else{
		amPm = "AM";
	}
	document.getElementById("clock").innerHTML = "the current time is " + hour + ":" + minuite + amPm;
	var temp = setTimeout(clock, 600)
}
function checkTime(i){
	if(i<10) {i="0" + i};
	return i;
}
function rollover(MyImage){
  MyImage.src = "img/pizza2.jpg";
}
function rollback(MyImage){
  MyImage.src = "img/pizza1.jpeg";
}
