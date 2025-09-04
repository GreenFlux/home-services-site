const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes = "100vw", loading = "lazy") {
  // Handle both absolute and relative paths
  let inputPath = src;
  if (src.startsWith('/')) {
    inputPath = `./src${src}`;
  }
  
  let metadata = await Image(inputPath, {
    widths: [320, 640, 1024, 1920],
    formats: ["webp", "jpeg"],
    outputDir: "./_site/img/",
    urlPath: "/img/",
    sharpOptions: {
      jpeg: {
        quality: 85,
        progressive: true
      },
      webp: {
        quality: 80
      }
    }
  });

  let imageAttributes = {
    alt,
    sizes,
    loading,
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  // Add image shortcode
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  
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