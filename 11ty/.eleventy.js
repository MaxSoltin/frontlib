module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/css')
	eleventyConfig.addPassthroughCopy('src/js')
	eleventyConfig.addPassthroughCopy('src/fonts')
	eleventyConfig.addPassthroughCopy('src/img')
	eleventyConfig.addPassthroughCopy('src/content/images/**/*.(jpg|png|webp|svg)')

	const hljs = require('highlight.js')
	const markdownIt = require('markdown-it')

	let options = {
		html: true,
		linkify: true,
		breaks: true,
		highlight: function (str, lang) {
			if (lang && hljs.getLanguage(lang)) {
				try {
					let codeBr = ''
					const code = hljs.highlight(str, { language: lang }).value.trim().split(/\n/)

					for (let index = 0; index < code.length; index++) {
						codeBr += `<code class="language-${lang}">${code[index]}</code>`
					}

					return `<span class="codeLang codeLang-${lang}">${lang}</span><div class="hljs code"><pre>${codeBr}</pre></div>`
				} catch (__) {}
			}

			return  md.utils.escapeHtml(str)
		},
	}

	eleventyConfig.setLibrary('md', markdownIt(options))

	return {
		dir: {
			input: 'src',
			output: 'dist',
			includes: 'includes',
			layouts: 'layouts',
		},
		markdownTemplateEngine: 'njk',
		passthroughFileCopy: true,
		templateFormats: ['njk', 'md'],
	}
}
