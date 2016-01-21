var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

hljs.initHighlightingOnLoad()

;(function () {
  ready(function () {
  })
});

function ready(fn) {
  if (document.readyState != 'loading'){
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}
