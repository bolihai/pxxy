const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// 添加中间件
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
