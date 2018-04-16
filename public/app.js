var initialize = function(){
  var mapDiv = document.getElementById('main-map');
  var chicagoButton = document.querySelector('#edinburgh-button');
  var whereAmIButton = document.querySelector('#geo-button');

  var center = { lat: 40.712784, lng: -74.005941 };

  var mainMap = new MapWrapper(mapDiv, center, 10);
  mainMap.addClickEvent();
  mainMap.addInfoWindow(center, "");

  var goToEdinburgh = function(){
    var edinburgh = { lat: 55.9533, lng: 3.1883 };
    mainMap.googleMap.setCenter(edinburgh);
    mainMap.addInfoWindow(edinburgh, "<h3>Edinburgh</h3>");
  }

  var findLocation = function(){
    mainMap.geoLocate();
  }

  chicagoButton.addEventListener('click', goToEdinburgh);
  whereAmIButton.addEventListener('click', findLocation);
}

window.addEventListener('load', initialize);
