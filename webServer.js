// 导包
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const { root } = require("./src/server/root");
const { UserSchema } = require("./src/schema/user");

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

/**
 * 获取指定学院的所有老师的id，名字和头像
 */
app.get("/institution/:department", async (req, res) => {
  const { department } = req.query;

  try {
    const users = await UserSchema.find({ department }, "id fullName portrait");

    // 如果没有找到教师信息
    if (users.length === 0) {
      return res.status(404).json({ message: "没有教师" });
    }

    // 返回个人id和名字，头像
    const peopleMap = users.reduce((map, user) => {
      map[user.id] = { fullName: user.fullName, portrait: user.portrait };
      return map;
    }, {});

    console.log(peopleMap);

    // 返回符合条件的教师信息
    res.status(200).json(peopleMap);
  } catch (e) {
    console.log("出错了", e);
    res.status(500).send("出错了");
  }
});
/**
 * 根据id获取人员数据
 */
app.get("/getPeopleInfo", async (req, res) => {
  const { id } = req.body;

  if (!id) {
    return res.status(400).send("缺少 id 参数");
  }

  try {
    const user = await UserSchema.findOne({ id });

    if (!user) {
      return res.status(404).send("未找到该人员");
    }

    console.log(user);
    // 返回人员数据
    res.status(200).json(user);
  } catch (e) {
    console.log("出错了", e);
    res.status(500).send("出错了");
  }
});

/**
 * 根据路径返回对应的页面
 */
app.get("/*", root(dist_dir));

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}`);
});
