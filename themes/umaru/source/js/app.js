$(document).ready(function() {
	$('body')
		.on('click', '.post-os', function() {
			$(this).slideUp()
		})
})

highlight()
replaceCount()
osNotify()
fuckUCBrowser()
makeZoom()

function highlight() {
	$('code').each(function () {
		var code = $(this)
		var lang = code.attr('class') || 'html'
		code.attr('class', 'language-' + lang)

	})
	Prism.highlightAll()
}

function replaceCount() {
	if (!$('.post-content') || $('.post-content').length === 0) {
		return
	}
	var content = $('.post-content').text()
	var count = countWords(content)
	$('.post-count-words').text(count)
}

function countWords(string) {
	return string.match(/[\u00ff-\uffff]|\S+/g).length
}

function osNotify() {
	if (navigator && navigator.platform == 'Win32' && $('.post-os')) {
		$('.post-os').slideDown()
	}
}

function fuckUCBrowser() {
	if (navigator && navigator.userAgent.indexOf('UCBrowser') > -1) {
		$('pre').css('width', $('.page').innerWidth() + 'px')
	}
}

function makeZoom() {
	$('.post-content').find('img').attr('data-action', 'zoom')
}

InstantClick.on('change', function() {
	highlight()
	replaceCount()
	osNotify()
	fuckUCBrowser()
	makeZoom()
})
