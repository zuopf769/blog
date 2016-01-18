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
positionToc()

function highlight() {
	$('code').each(function () {
		var code = $(this)
		var lang = code.attr('class') || 'html'
		code.attr('class', 'language-' + lang)
		if (code.parent()[0].tagName === 'PRE') {
			code.parent().perfectScrollbar()
		}
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
	positionToc()
})

function positionToc() {
	if ($('.post-toc')) {
		var leftPad = ($('body').outerWidth() - $('.page').outerWidth()) / 2
		var left = leftPad + $('.page').outerWidth() + 20
		left = left + 'px'
		$('.post-toc').css('left', left)
		setTimeout(function () {
			$('.post-toc').addClass('active')
		}, 200)
	}
}
