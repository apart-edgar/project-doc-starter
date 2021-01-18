const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginDate = require("eleventy-plugin-date");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy({ "_src/_styles": "styles" });
    eleventyConfig.addPassthroughCopy({ "_src/_assets": "assets" });
    eleventyConfig.addPassthroughCopy("_src/robots.txt");

    // Layouts
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('meeting', 'layouts/meeting.njk');

    // Collections

    // All Meetings
    eleventyConfig.addCollection("meetings", function(collection) {
        return collection.getFilteredByGlob("_src/pages/meetings/**/*.md");
    });

    // Filters
    eleventyConfig.addFilter("groupByEx", (arr, key) => {
        const result = {};
        arr.forEach(item => {
            const keys = key.split('.');
            const value = keys.reduce((object, key) => object[key], item);

            (result[value] || (result[value] = [])).push(item);
        });
        return result;
    });

    // Markdown library to manage Headings ID
    const markdownIt = require("markdown-it");
    // create a new markdown-it instance with the plugin
    const markdownItAnchor = require("markdown-it-anchor");
    const markdownLib = markdownIt({ html: true }).use(markdownItAnchor);
    // replace the default markdown-it instance
    eleventyConfig.setLibrary("md", markdownLib);

    // Plugins
    eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'));
    eleventyConfig.addPlugin(pluginDate);

    return {
        dir: {
            input: "_src",
            output: "public",
        }
    }
}