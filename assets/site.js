(function(){
  var path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  var links = document.querySelectorAll('.nav a');
  for(var i=0;i<links.length;i++){
    var href = (links[i].getAttribute('href') || '').toLowerCase();
    if(href.endsWith(path)) links[i].classList.add('active');
  }
})();

(function(){
  // Open external links and PDF files in a new tab.
  var anchors = document.querySelectorAll('a[href]');
  for(var i=0;i<anchors.length;i++){
    var a = anchors[i];
    var href = a.getAttribute('href');
    if(!href) continue;

    var isExternal = /^https?:\/\//i.test(href) || /^\/\//.test(href);
    var isPdf = /\.pdf($|\?)/i.test(href);

    if(isExternal || isPdf){
      a.setAttribute('target','_blank');
      a.setAttribute('rel','noopener noreferrer');
    }
  }
})();
