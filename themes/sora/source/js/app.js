var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

hljs.initHighlightingOnLoad()

document.addEventListener('DOMContentLoaded', ready)

function ready() {
  var tocOpen = true
  var toc = $('.post-toc')
  var postPage = $('.post-page')

  ;(function stickyToc() {
    var tocLeft = postPage.offsetLeft + postPage.clientWidth + 20 + 'px'
    var tocHeight = toc.querySelector('.toc').clientHeight + 'px'

    toc.style.left = tocLeft
    toc.style.height = tocHeight
    toc.style.visibility = 'visible'
    setTimeout(function () {
      toc.querySelector('.toc').classList.add('toc-visible')
    }, 200)
  })();

  $('.toggle-toc').addEventListener('click', toggleToc)

  function toggleToc(e) {
    var target = e.target
    var tocButton = toc.querySelector('.toc')
    if (tocOpen) {
      tocButton.classList.remove('toc-visible')
      target.innerHTML = '显示 TOC'
    } else {
      tocButton.classList.add('toc-visible')
      target.innerHTML = '隐藏 TOC'
    }
    tocOpen = !tocOpen
  }
}
