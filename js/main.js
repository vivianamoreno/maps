let map = L.map('mapid').setView([40.749133, -73.971074], 12.00);

L.tileLayer('https://api.mapbox.com/styles/v1/vivianaxmoreno/ck2xh0y760kkk1cnqgbvjlnkx/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoidml2aWFuYXhtb3Jlbm8iLCJhIjoiY2syeGdpdDV1MGVnYjNnbGUxemlvbGh2NyJ9.XwV8OuFUyNlC_b3IGo9PMQ', {
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18
}).addTo(map);

let marker1 = L.marker([40.7831064,-73.9593996]).addTo(map);
let marker2 = L.marker([40.7395877,-74.0110516]).addTo(map);
let marker3 = L.marker([40.7614327,-73.9798103]).addTo(map);
let marker4 = L.marker([40.7223376,-73.9950792]).addTo(map);

marker1.bindPopup("<b>Solomon R. Guggenheim Museum</b>");
marker2.bindPopup("<b>Whitney Museum of American Art</b>").openPopup();
marker3.bindPopup("<b>The Museum of Modern Art</b>");
marker4.bindPopup("<b>New Museum</b>");
