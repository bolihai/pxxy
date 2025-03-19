// 导入数据库
const mongoose = require("mongoose");

/**
 * 定义教师人员数据库模式
 */
const userSchema = new mongoose.Schema({
  /**
   * 名称：姓名
   * 备注：用户名, 必须填写, 最小长度为1，最大长度为10
   */
  fullName: { type: String, minlength: 1, required: true, maxlength: 10 },

  /**
   * 名称：性别
   * 备注：默认为男，只可选男或女
   */
  gender: { type: String, enum: ["男", "女"], default: "男" },

  /**
   * 名称：学院
   * 备注：必须填写，
   */
  department: { type: String, required: true },

  /**
   * 名称：邮箱
   * 备注：必须填写，唯一
   * 有效性检查： 字母/数字/./-/_ + @ + 字母/数字/./-/_ + 字母(2到6个)
   */
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      "邮箱错误请重试",
    ],
  },

  /**
   * 名称：密码，
   * 备注：不包含在查询结果中，必须填写，长度大于8，小于100
   * 有效性检查： 至少一个小写字母，一个大写字母，一个数字，一个特殊字符
   */
  password: {
    type: String,
    required: true,
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "密码强度不够",
    ],
    minlength: 8,
    maxlength: 100,
  },

  /**
   * 名称：头像
   * 备注: 文件保存地址
   */
  portrait: { type: String },

  /**
   * 名称：个人简介
   * 备注：零到三百字，不必须
   */
  individualResume: { type: String, maxlength: 300, minlength: 0 },

  /**
   * 名称：教育背景
   * 备注：
   */
  education: { type: String },

  /**
   * 名称：研究领域
   */
  researchField: { type: String },

  /**
   * 名称：电话
   */
  telephone: { type: String },

  /**
   * 名称：学术成果
   */
  academicAchevement: { type: String },

  /**
   * 名称：主页封面
   * 备注：文件位置
   */
  homePageBk: { type: String },

  /**
   * 名称：活跃度
   */
  likes: { type: Number, default: 0 },

  /**
   * 名称：课程资源
   */
  resource: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TeacherSchema",
    },
  ],

  /**
   * 名称：权限
   */
  permission: { type: String },
});

// 创建教师表
const UserSchema = mongoose.model("UserSchema", userSchema);

// 导出
module.exports = { UserSchema };
