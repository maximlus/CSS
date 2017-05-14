function main() {
	console.log("hello");
}
function initMap() {
	var uluru = {lat: -25.363, lng: 131.044};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}
function async defer(){
	src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCYT1gBgN1a7Q7B0rrsyNKyirwnXdQPi54&callback=initMap">
}
