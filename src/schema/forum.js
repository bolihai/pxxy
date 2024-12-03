const mongoose = require("mongoose");

/**
 * 定义回复帖子表
 */
const replySchema = new mongoose.Schema({
  /**
   * 名称：发送人
   * 备注：发送人id, 不可修改
   */
  sender: { type: String, required: true, immutable: true },

  /**
   * 名称：回复人
   * 备注：回复给那个人，回复人的id, 不可修改
   */
  replier: { type: String, required: true, immutable: true },

  /**
   * 名称：回复内容
   * 备注：最大不超过 300 字
   */
  replyContent: { type: String, maxlength: 300, required: true },

  /**
   * 名称：回复时间
   * 备注：以创建时间作为回复时间，不可修改
   */
  replyTime: { type: Date, immutable: true, default: Date.now },

  /**
   * 名称：点赞数
   * 备注：后期可以根据点赞数作为排序, 在进行服务器操作的时候使用 findOneAndUpdate 来避免两个用户同时点赞出现错误
   */
  likes: { type: Number, default: 0 },
});

/**
 * 定义评论表
 */
const commentSchema = new mongoose.Schema({
  /**
   * 名称：发布人
   * 备注：发布人id
   */
  commenter: { type: String, required: true, immutable: true },

  /**
   * 名称：评论内容
   * 备注：最大长度为300
   */
  content: { type: String, required: true, maxlength: 300 },

  /**
   * 名称：点赞数
   * 备注：后期可以根据点赞数作为排序, 在进行服务器操作的时候使用 findOneAndUpdate 来避免两个用户同时点赞出现错误
   */
  likes: { type: Number, default: 0 },

  /**
   * 名称：回复帖子
   * 备注：将回复该条评论的所有表放进来
   */
  reply: { type: [replySchema] },

  /**
   * 名称：时间
   * 备注：评论时间，不可修改
   */
  createdAt: { type: Date, immutable: true, default: Date.now },
});

/**
 * 定义教师论坛帖子表
 */
const forumSchema = new mongoose.Schema({
  /**
   * 名称：种类
   * 备注：属于哪一个论坛里的帖子
   */
  category: { type: String, required: true },

  /**
   * 名称：内容
   * 备注：最大三千字
   */
  content: { type: String, required: true, maxlength: 3000 },

  /**
   * 名称：评论
   * 备注：
   */
  comment: { type: [commentSchema] },

  /**
   * 名称：作者
   * 备注：作者的id，不可修改
   */
  author: { type: String, required: true, immutable: true },

  /**
   * 名称：点赞数
   * 备注：后期可以根据点赞数作为排序, 在进行服务器操作的时候使用 findOneAndUpdate 来避免两个用户同时点赞出现错误
   */
  likes: { type: Number, default: 0 },

  /**
   * 名称：发布时间
   * 备注：不可修改
   */
  createdAt: { type: Date, immutable: true, default: Date.now },
});

// 创建论坛帖子表
const Forum = mongoose.model("Forum", forumSchema);

// 导出
module.exports = { Forum, commentSchema, replySchema };
