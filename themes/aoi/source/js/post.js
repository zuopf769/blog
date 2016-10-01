var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

// highlight js
hljs.initHighlightingOnLoad();

document.addEventListener('DOMContentLoaded', ready)

function ready() {
  fixBackButton()

  function fixBackButton() {
    var backButton = $('.home-icon')
    var offsetTop = backButton.offsetTop
    var offsetLeft = backButton.offsetLeft

    backButton.style.top = offsetTop + 'px'
    backButton.style.left = offsetLeft + 'px'
    backButton.style.position = 'fixed'

    // check if header is in view during first load
    // if not, add .exit className to header
    var header = document.querySelector('.post-header')
    var isInViewDuringIntialRender = inView.is(header)
    if (!isInViewDuringIntialRender) {
      header.classList.add('exit')
    }

    inView('.post-header')
      .on('enter', function (el) {
        el.classList.remove('exit')
      })
      .on('exit', function (el) {
        el.classList.add('exit')
      })

  }
}
