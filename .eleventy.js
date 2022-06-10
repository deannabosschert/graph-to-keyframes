module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('assets/')

  return {
    dir: {
      input: 'src',
      data: '_data'
    },
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}