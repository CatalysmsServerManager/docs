const normalizedPath = require("path").join(__dirname);
const sidebars = {};

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    if (file === "index.js") {
        return;
    }
  sidebars[file.replace('.js', '')] = require("./" + file);
});

module.exports = sidebars;