const express = require("express");
const UserSchema = require("../schema/user");

const router = express.Router();

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
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ message: "获取数据失败", error: error.message });
  }
});

module.exports = router;
