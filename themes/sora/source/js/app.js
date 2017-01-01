var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

document.addEventListener('DOMContentLoaded', ready)

function ready() {
  // disqus
  if (window.isPost) {
    highlight()
    disqus()
  }
  function disqus() {
    var d = document, s = d.createElement('script');
    s.src = "//egoistian.disqus.com/embed.js";
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }
  function highlight() {
    hljs.initHighlightingOnLoad()
  }
}
