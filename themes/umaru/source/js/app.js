(function () {
	highlight()
	
	function highlight () {
		var codes = document.querySelectorAll('code')
		Array.prototype.forEach.call(codes, function (code) {

			var lang = code.className || 'html'
			code.className = 'language-' + lang 
			
		})
		Prism.highlightAll()
	}
})();