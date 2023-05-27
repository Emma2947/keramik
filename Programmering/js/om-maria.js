//Javascript til Burgermenuen

function myFunction() {
    var x = document.getElementById("menu");
    var y = document.getElementById("topnav");
    if (x.style.display === "block") {
     x.style.display = "none";
     } else {
      x.style.display = "block";
     }
    }



//Keramik rejse 
document.addEventListener("DOMContentLoaded", function() {

var knap = document.getElementById('knap');
var tekst = document.getElementById('tekst');

knap.addEventListener('click', function() {

  if (tekst.style.visibility == "hidden") {
    tekst.style.visibility = "visible";
  } else {
    tekst.style.visibility = "hidden";
  }
});

var knap1 = document.getElementById('knap1');
var tekst1 = document.getElementById('tekst1');

knap1.addEventListener('click', function() {

  if (tekst1.style.visibility == "hidden") {
    tekst1.style.visibility = "visible";
  } else {
    tekst1.style.visibility = "hidden";
  }
});

var knap2 = document.getElementById('knap2');
var tekst2 = document.getElementById('tekst2');

knap2.addEventListener('click', function() {

  if (tekst2.style.visibility == "hidden") {
    tekst2.style.visibility = "visible";
  } else {
    tekst2.style.visibility = "hidden";
  }
});

var knap3 = document.getElementById('knap3');
var tekst3 = document.getElementById('tekst3');

knap3.addEventListener('click', function() {

  if (tekst3.style.visibility == "hidden") {
    tekst3.style.visibility = "visible";
  } else {
    tekst3.style.visibility = "hidden";
  }
});

var knap4 = document.getElementById('knap4');
var tekst4 = document.getElementById('tekst4');

knap4.addEventListener('click', function() {

  if (tekst4.style.visibility == "hidden") {
    tekst4.style.visibility = "visible";
  } else {
    tekst4.style.visibility = "hidden";
  }
});

var knap5 = document.getElementById('knap5');
var tekst5 = document.getElementById('tekst5');

knap5.addEventListener('click', function() {

  if (tekst5.style.visibility == "hidden") {
    tekst5.style.visibility = "visible";
  } else {
    tekst5.style.visibility = "hidden";
  }
});

});



var map;
function initMap() {
  var mapOptions = {
    center: { lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE },
    zoom: YOUR_ZOOM_LEVEL,
    styles: YOUR_STYLE_OBJECT
  };
  
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

  


