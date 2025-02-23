// 导包
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const { root } = require("./src/server/root");

// app
const app = express();

// 常数
const port = 3000;
const dist_dir = path.join(__dirname, "src/dist");

// 添加中间件
app.use(express.json());
app.use(express.static(dist_dir));

// 连接数据库
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/pxxy")
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((error) => {
    console.error("数据库连接失败:", error);
    process.exit(1);
  });

// 挂载老师路由
app.use("/server/teacher", require("./src/server/teacher"));

/**
 * 根据路径返回对应的页面
 */
app.get("/*", root(dist_dir));

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
