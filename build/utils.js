const path = require("path");
// glob 是 webpack 安装时依赖的一个第三方模块，该模块允许你使用 * 等符号,
// 例如 lib/*.js 就是获取 lib 文件夹下的所有 js 后缀名的文件
const glob = require("glob");
// 取得相应的页面路径，因为之前的配置，所以是 src 文件夹下的 pages 文件夹
const PAGE_PATH = path.resolve(__dirname, "../src/pages");

exports.setPages = configs => {
  let entryFiles = glob.sync(PAGE_PATH + "/*/*.js");
  let map = {};

  entryFiles.forEach(filePath => {
    let filename = filePath.substring(
      filePath.lastIndexOf("/") + 1,
      filePath.lastIndexOf(".")
    );

    let conf = {
      entry: filePath,
      template: "index.html",
      filename: filename + ".html",
      // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
      chunks: ["manifest", "vendor", filename],
      inject: true
    };

    if (configs) {
      conf = merge(conf, configs);
    }

    // if (process.env.NODE_ENV === "production") {
    //   conf = merge(conf, {
    //     minify: {
    //       removeComments: true, // 删除 html 中的注释代码
    //       collapseWhitespace: true // 删除 html 中的空白符
    //       // removeAttributeQuotes: true // 删除 html 元素中属性的引号
    //     },
    //     chunksSortMode: "manual" // 按 manual 的顺序引入
    //   });
    // }

    map[filename] = conf;
  });
  return map;
};
