const markdownShortcode = require("eleventy-plugin-markdown-shortcode");

module.exports = function (eleventyConfig) {
    eleventyConfig.setLiquidOptions({
        dynamicPartials: true,
        strict_filters: true
    });
    eleventyConfig.addPlugin(markdownShortcode);
    eleventyConfig.setTemplateFormats([
        'html',
        'ico',
        'css',
        'png',
    ])
};
