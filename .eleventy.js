module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy({ "_src/_styles": "styles" });
    eleventyConfig.addPassthroughCopy({ "_src/_assets": "assets" });

    // Layouts
    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('meeting', 'layouts/meeting.njk');

    // Collections

    // All Meetings
    eleventyConfig.addCollection("meetings", function(collection) {
        return collection.getFilteredByGlob("_src/pages/meetings/**/*.md");
    });

    // Markdown library to manage Headings ID
    const markdownIt = require("markdown-it");
    // create a new markdown-it instance with the plugin
    const markdownItAnchor = require("markdown-it-anchor");
    const markdownLib = markdownIt({ html: true }).use(markdownItAnchor);
    // replace the default markdown-it instance
    eleventyConfig.setLibrary("md", markdownLib);

    // Plugins

    // Eleventy navigation
    // const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
    // module.exports = function(eleventyConfig) {
    //     eleventyConfig.addPlugin(eleventyNavigationPlugin);
    // };
    eleventyConfig.addPlugin(require('@11ty/eleventy-navigation'));

    return {
        dir: {
            input: "_src",
            output: "public",
        }
    }
}