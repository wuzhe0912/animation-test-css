let vid = document.getElementById('video');

setInterval(function(){
  vid.currentTime = window.pageYOffset/1000;
},100);