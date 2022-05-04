module.exports = function (eleventyConfig) {
  eleventyConfig.setQuietMode(true)
  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      includes: "_includes",
      layouts: "_layouts",
      output: "dist",
      data: "models",
    },
  }
}
