const scss = require("postcss-scss");
const autoprefixer = require("autoprefixer");
const postcssImport = require("postcss-import");

module.exports = {
    map: {
        sourcesContent: false,
        annotation: true,
        inline: false,
    },
    customSyntax: scss,
    parser: scss,
    plugins: [autoprefixer, postcssImport],
};
