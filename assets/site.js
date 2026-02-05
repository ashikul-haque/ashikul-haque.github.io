(function(){
  var path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var links = document.querySelectorAll('.nav a');
  for(var i=0;i<links.length;i++){
    var href = (links[i].getAttribute('href') || '').toLowerCase();
    if(href.endsWith(path)) links[i].classList.add('active');
  }
})();
