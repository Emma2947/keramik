//Javascript til Burgermenuen
    function myFunction() {
    var x = document.getElementById("menu");
    var navigation = document.getElementById('topnav');
    if (x.style.display === "block") {
     x.style.display = "none";
     } else {
      x.style.display = "block";
      navigation.style.backgroundColor = '#f9f3ef';
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

 // navigation

 //Når man begynder at scrolle ned over siden, så kommer der farve bag på navigationen, ved at der er angivet en højde, som bestemmer om der er backgroundcolor eller ej.
 window.addEventListener('scroll', function() {
  var navigation = document.getElementById('topnav');
  var threshold = 60;

  if (window.pageYOffset > threshold) {
    navigation.style.backgroundColor = '#f9f3ef';
    navigation.style.boxShadow = '0px 2px 15px -10px #7f5849';
  } else {
    navigation.style.backgroundColor = 'transparent';
    navigation.style.boxShadow = 'none';
  }
});





//Mapbox - der er fulgt denne videoguide: https://docs.mapbox.com/help/tutorials/custom-markers-gl-js-video/

mapboxgl.accessToken = 'pk.eyJ1IjoiZW1tYTI5NDciLCJhIjoiY2xocTY2cndxMDE1cjNmbzh5dmducjdyciJ9.qTGQsI4BH-7Q2AQ1uFuFnA'; //API fra Mapbox tilføjes

const map = new mapboxgl.Map({ //Kortet bliver hentet, med styling fra mapboxs hjemmeside
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [10.2, 56.1482], // koordinater og zoom ændres, for at den automatisk viser Aarhus
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

  
