const path = require("path");
const utils = require("./build/utils");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  pages: utils.setPages(),
  chainWebpack(config) {
    // set svg-sprite-loader
    config.module
      .rule("svgicon")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .tap(options => {
        options = {
          symbolId: "icon-[name]"
        };
        return options;
      });
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
  }
};
