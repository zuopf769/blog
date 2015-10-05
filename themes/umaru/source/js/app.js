(function () {
	var $ = document.querySelector.bind(document)
	var $$ = document.querySelectorAll.bind(document)

	highlight()
	replaceCount()
	
	function highlight () {
		var codes = $$('code')
		Array.prototype.forEach.call(codes, function (code) {

			var lang = code.className || 'html'
			code.className = 'language-' + lang 
			
		})
		Prism.highlightAll()
	}

	function replaceCount () {
		var content = $('.post-content').textContent
		var count = countWords(content)
		$('.post-count-words').innerHTML = count
	}

	function countWords (string) {
		return string.match(/[\u00ff-\uffff]|\S+/g).length
	}
})();