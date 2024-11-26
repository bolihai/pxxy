// 导入数据库
const mongoose = require("mongoose");

/**
 * 定义教师课程资源上传表
 */
const teacherCourseResourceSchema = new mongoose.Schema({
  /**
   * 名称：课程资源
   * 备注：pdf, png, jpg, etc
   */
  type: { type: String },

  /**
   * 名称：标题
   * 备注：课程资源关联的标题
   */
  headline: { type: String },

  /**
   * 名称：简介
   */
  description: { type: String },

  /**
   * 名称：文件
   * 备注：文件保存地址
   */
  file: { type: String },

  /**
   * 名称：课程类别
   */
  category: { type: String },

  /**
   * 名称：创建时间
   */
  createdAt: { type: Date, default: Date.now },
});

// 创建教师课程资源表
const TeacherSchema = mongoose.model(
  "TeacherSchema",
  teacherCourseResourceSchema
);

// 导出
module.exports = { TeacherSchema };
