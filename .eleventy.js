const markdownShortcode = require("eleventy-plugin-markdown-shortcode");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(markdownShortcode);
    eleventyConfig.setTemplateFormats([
        'html',
        'ico',
        'css',
        'png',
    ])
};