const normalizedPath = require("path").join(__dirname);
const navs = {};

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    if (file === "index.js") {
        return;
    }
  navs[file.replace('.js', '')] = require("./" + file);
});

module.exports = navs;