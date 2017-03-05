const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

document.addEventListener('DOMContentLoaded', ready)

function ready() {
  dropdown()
  // disqus
  if (window.isPost) {
    disqus()
    makeZoom()
  }
  if (window.hexoLayout === 'page') {
    makeZoom()
  }
  function disqus() {
    var d = document, s = d.createElement('script');
    s.src = "//egoistian.disqus.com/embed.js";
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  }
  function makeZoom() {
    Array.prototype.forEach.call($$('.post-content img'), el => {
      el.setAttribute('data-action', 'zoom')
    })
    zoom.setup()
  }
  function dropdown() {
    const el = $('.nav-more-trigger')
    const list = $('.dropdown-list')
    const menu = $('.dropdown-menu')
    el.addEventListener('click', e => {
      if (list.classList.contains('visible')) {
        list.classList.remove('visible')
      } else {
        list.classList.add('visible')
      }
    })
    document.addEventListener('click', e => {
      if (!menu.contains(e.target)) {
        list.classList.remove('visible')
      }
    })
  }
}
