(function () {
	var $ = document.querySelector.bind(document)
	var $$ = document.querySelectorAll.bind(document)

	highlight()
	replaceCount()
	osNotify()
	fuckUCBrowser()

	function highlight () {
		var codes = $$('code')
		Array.prototype.forEach.call(codes, function (code) {

			var lang = code.className || 'html'
			code.className = 'language-' + lang

		})
		Prism.highlightAll()
	}

	function replaceCount () {
		if (!$('.post-content')) {
			return
		}
		var content = $('.post-content').textContent
		var count = countWords(content)
		$('.post-count-words').innerHTML = count
	}

	function countWords (string) {
		return string.match(/[\u00ff-\uffff]|\S+/g).length
	}

	function osNotify () {
		if (navigator && navigator.platform == 'Win32' && $('.post-os')) {
			$('.post-os').style.display = 'block'
		}
	}

	function fuckUCBrowser () {
		if (navigator && navigator.userAgent.indexOf('UCBrowser') > 0) {
			var pres = $$('pre')
			Array.prototype.forEach.call(pres, function (pre) {
				pre.style.width = $('.page').clientWidth
			})
		}
	}
})();
