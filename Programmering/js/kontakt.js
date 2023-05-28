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

function visBesked() {
  const besked = document.getElementById('confirmation-message')
  besked.style.display = 'block';
}


// popups

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
    const popup2 =document.getElementById('popup2');
    popup2.style.display = "none";
}


  //Mapbox

  mapboxgl.accessToken = 'pk.eyJ1IjoiZW1tYTI5NDciLCJhIjoiY2xocTY2cndxMDE1cjNmbzh5dmducjdyciJ9.qTGQsI4BH-7Q2AQ1uFuFnA';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [10.2, 56.1482],
    zoom: 17
  });
  
  const geojson = {
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
  
  // add markers to map
  for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
  
    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
    .setLngLat(feature.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
    )
    .addTo(map);
  } 