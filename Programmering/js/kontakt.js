//Javascript til Burgermenuen
function myFunction() {
  var x = document.getElementById("menu");
  if (x.style.display === "block") {
   x.style.display = "none";
   } else {
    x.style.display = "block";
   }
  }


//Skrifttype
(function(d) {
  var config = {
    kitId: 'uex2dst',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);



//Confirmation besked
//Besteden vises når man har trykket send
function visBesked() {
  const besked = document.getElementById('confirmation-message')
  const tekst = document.getElementById('tekst-message')
  besked.style.display = 'block';

  localStorage.setItem('confirmationMessage', tekst.textContent); //beskeden gemmes i local storage, da form-tag gør at siden hurtigt reloades efter at have trykket send
}

document.addEventListener('DOMContentLoaded', function() {
  const besked = document.getElementById('confirmation-message');
  const tekst = document.getElementById('tekst-message')
  const confirmationMessage = localStorage.getItem('confirmationMessage'); //Beskeden bliver hentet, hver gang siden bliver loaded

  if (confirmationMessage) {
    //Hvis confirmationbeskeden er i local storage, så vises beskeden

    besked.style.display = 'block';
    tekst.textContent = confirmationMessage;

    localStorage.removeItem('confirmationMessage'); //og confirmationbeskeden slettes fra local storage
  }
});


// lukknap til popup
var closeBtn = document.getElementById("close");
  function closePopup() {
    const popup = document.getElementById('confirmation-message');
    popup.style.display = "none";
}


// popups med tekst til markedskalender -> Bliver vist når man trykker på begivenheden og lukkes med luk knappen

function showEvent1() {
  const popup1 = document.getElementById('popup1');
  popup1.style.display = 'block';
}
  var closeBtn = document.getElementById("close1");
  function closePopup1() {
    const popup1 =document.getElementById('popup1');
    popup1.style.display = "none";
}

function showEvent2() {
  const popup2 = document.getElementById('popup2');
  popup2.style.display = 'block';
}
  var closeBtn = document.getElementById("close2");
  function closePopup2() {
    const popup2 = document.getElementById('popup2');
    popup2.style.display = "none";
}


  //Mapbox  -  video guide vi har brugt: https://docs.mapbox.com/help/tutorials/custom-markers-gl-js-video/
  // API fra Mapbox tilføjes
  mapboxgl.accessToken = 'pk.eyJ1IjoiZW1tYTI5NDciLCJhIjoiY2xocTY2cndxMDE1cjNmbzh5dmducjdyciJ9.qTGQsI4BH-7Q2AQ1uFuFnA';

  const map = new mapboxgl.Map({ //Det nye map bliver hentet, med styling fra mapboxs hjemmeside
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [10.2, 56.1482], // Jeg har ændres koordinater og zoom, for at den automatisk viser Aarhus
    zoom: 17
  });
  
  const geojson = { // Her bliver der lagret koordinater og informationer om Nr4 i json
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [10.199861, 56.148211,]
        },
        properties: {
          title: 'Nr4 Kunsthåndværk, design og interiør',
          description: 'Jægergårdsgade 51, 8000 Aarhus C'
        }
      },
    ]
  };
  
  // indsætter markør over placeringen
  for (const feature of geojson.features) {
    // Der tilføjes et html element med markøren
    const el = document.createElement('div');
    el.className = 'marker';
  
    // Her laves markøren og den popup som vises, hvis man trykker på markøren
    new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // popuppen tilføjes
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
    )
    .addTo(map);
  } 