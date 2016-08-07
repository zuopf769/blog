var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

document.addEventListener('DOMContentLoaded', ready)

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

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
    [].forEach.call($$('pre'), function (pre) {
      var lang = pre.querySelector('code').className.match(/-(\w+)/)[1]
      var div = document.createElement('div')
      div.className = 'highlight'
      div.innerHTML = pre.outerHTML
      div.setAttribute('data-lang', capitalizeFirstLetter(lang))
      pre.parentNode.insertBefore(div, pre)
      pre.parentNode.removeChild(pre)
    })
    hljs.initHighlightingOnLoad()
  }
}
