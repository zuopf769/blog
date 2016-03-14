export function deploy() {
	const message = cli.input[1] || `updated at ${new Date()}`
	exec(`
	git add -A
	git commit -m "${message}"
	git push origin master -f
	hexo gm
	hexo d
	`.trim().split('\n').join('&&'))
}
