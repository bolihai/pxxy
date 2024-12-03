const express = require("express");
const path = require("path");
const { root } = require("./src/server/root");
const app = express();
const port = 3000;
const dist_dir = path.join(__dirname, "src/dist");

// 添加中间件
app.use(express.json());
app.use(express.static(dist_dir));

/**
 * 根据路径返回对应的页面
 */
app.get("/*", root(dist_dir));

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
