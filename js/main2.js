var map = L.map('mapid').setView([38.599678, -94.921222], 3.68);

L.tileLayer('https://api.mapbox.com/styles/v1/vivianaxmoreno/ck30wkxay1ds71cm82ni4l9vy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoidml2aWFuYXhtb3Jlbm8iLCJhIjoiY2syeGdpdDV1MGVnYjNnbGUxemlvbGh2NyJ9.XwV8OuFUyNlC_b3IGo9PMQ', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(map);

for ( let i = 0; i < places.length; i++ ) {
	L.marker( [ places[i].latitude, places[i].longtitude ] )
	.bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>')
	.addTo( map );
}
