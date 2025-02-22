const path = require ("path")

module.exports = {
    target: "web",
    mode: "development",

    entry: path.resolve(__dirname, "src", "main.js"),
    output: {// a saida quando for fazer a build
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    }
}