var initialize = function(){
  var mapDiv = document.getElementById('main-map');
  var edinburghButton = document.querySelector('#edinburgh-button');
  var whereAmIButton = document.querySelector('#geo-button');

  var center = { lat: 15.8700, lng: 100.9925 };

  var mainMap = new MapWrapper(mapDiv, center, 10);
  mainMap.addClickEvent();
  mainMap.addInfoWindow(center, "");

  var goToEdinburgh = function(){
    var edinburgh = { lat: 55.9533, lng:  3.1883 };
    mainMap.googleMap.setCenter(edinburgh);
    mainMap.addInfoWindow(edinburgh, "<h3>Edinburgh</h3>");
  }

  var findLocation = function(){
    mainMap.geoLocate();
  }

  edinburghButton.addEventListener('click', goToEdinburgh);
  whereAmIButton.addEventListener('click', findLocation);
}

window.addEventListener('load', initialize);3.1883
