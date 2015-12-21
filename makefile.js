deploy:
	var message = argv._[1] || `updated at ${new Date()}`
	>git add -A
	>git commit -m "${message}"
	>git push origin master
	>hexo gm
	>hexo d
