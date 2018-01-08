window.onload = function () {
	var element = document.querySelector("#map");

	var options = {
		zoom: 16,
		center: {
			lat: 55.687540,
			lng: 37.529479
		}
	};

	var myMap = new google.maps.Map(element, options);

	var marker = new google.maps.Marker({
		position: {lat: 55.687140, lng: 37.529479},
		map: myMap
	});

	var infoWindow = new google.maps.InfoWindow({
		content: "<p>ул. Строителей 15</p>"
	});

	marker.addListener("click", function(){
		infoWindow.open(myMap, marker);
	});
}
