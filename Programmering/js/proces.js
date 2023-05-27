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


 //Autoplay af videoer
 document.addEventListener('DOMContentLoaded', function() {
  var videos = document.getElementsByClassName('proces-video');
  for (var i = 0; i < videos.length; i++) {
    videos[i].play();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var videos = document.getElementsByClassName('proces-video-vis-venstre');
  for (var i = 0; i < videos.length; i++) {
    videos[i].play();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var videos = document.getElementsByClassName('proces-video-vis-hojre');
  for (var i = 0; i < videos.length; i++) {
    videos[i].play();
  }
});




  