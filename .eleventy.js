module.exports = function(eleventyConfig) {
  // Copy assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("images");
  
  // Watch for changes in CSS
  eleventyConfig.addWatchTarget("src/assets/css/");
  
  // Create blog collection
  eleventyConfig.addCollection("blog", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/*.md");
  });
  
  // Date filter
  eleventyConfig.addFilter("date", function(date, format) {
    const d = new Date(date);
    if (format === '%Y-%m-%d') {
      return d.toISOString().split('T')[0];
    } else if (format === '%B %d, %Y') {
      return d.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } else if (format === '%Y') {
      return d.getFullYear().toString();
    }
    return d.toLocaleDateString();
  });
  
  // Set input and output directories
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};