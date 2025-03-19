const express = require("express");
const UserSchema = require("../schema/user");
const router = express.Router();

// 登录
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // 检查用户是否存在
    const user = await UserSchema.UserSchema.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "用户不存在" });
    }

    // 验证密码
    if (password !== user.password) {
      return res.status(400).json({ message: "密码错误" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "服务器错误", error: error.message });
  }
});

// 获取教师信息
router.get("/", async (req, res) => {
  try {
    const persons = await UserSchema.UserSchema.find();
    res.json(persons);
  } catch (error) {
    res.status(500).json({ message: "获取数据失败", error: error.message });
  }
});

// 获取该学院的信息
router.get("/:collegeName", async (req, res) => {
  const collegeName = req.params.collegeName;
  try {
    const teachers = await UserSchema.UserSchema.find({
      department: collegeName,
    });
    if (teachers.length === 0) {
      return res.status(404).json({ message: "未找到该学院的教师" });
    }
    res.json({ teachers });
  } catch (error) {
    res.status(500).json({ message: "获取数据失败", error: error.message });
  }
});

// 根据用户名获取人员
router.get("/byName/:fullName", async (req, res) => {
  const fullName = req.params.fullName;
  try {
    const teacher = await UserSchema.UserSchema.find({
      fullName: fullName,
    });
    console.log(teacher);
    if (teacher.length === 0) {
      return res.status(404).json({ message: "未找到该学院的教师" });
    }
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ message: "获取数据失败", error: error.message });
  }
});

module.exports = router;
