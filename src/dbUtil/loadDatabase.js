// 导入数据库
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

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

// 导入模型
const { Forum } = require("../schema/forum.js");
const { TeacherSchema } = require("../schema/resource.js");
const { UserSchema } = require("../schema/user.js");

// 导入数据
const data = require("../../modelData/user.json");

// 清除数据库
const removePromises = [
  Forum.deleteMany({}),
  TeacherSchema.deleteMany({}),
  UserSchema.deleteMany({}),
];

let usersNumber = 0;

// 清空数据库后开始导入数据
Promise.all(removePromises)
  .then(async () => {
    console.log("清除数据库成功，开始导入数据：");

    // 获取用户数据
    const users = data.users;

    // 插入课程资源
    const resourcePromises = [];
    const resources = [];

    // 遍历所有用户的资源并插入到 TeacherSchema
    users.forEach((user) => {
      user.resource.forEach((resourceData) => {
        resourcePromises.push(
          TeacherSchema.create(resourceData).then((savedResource) => {
            resources.push(savedResource);
          })
        );
      });
    });

    await Promise.all(resourcePromises);
    console.log("课程资源导入完成");

    // 插入用户数据，并关联资源
    const userPromise = users.map((user) => {
      console.log(`正在导入用户: ${user.fullName}`);

      // 将插入的资源 _id 关联到用户的 resource 字段
      user.resource = resources
        .filter((resource) =>
          user.resource.some(
            (userResource) => userResource.headline === resource.headline
          )
        )
        .map((resource) => resource._id);

      return UserSchema.create(user)
        .then(() => {
          usersNumber++;
          console.log(`人员 ${user.fullName} 导入成功`);
        })
        .catch((error) => {
          console.log(
            `人员 ${user.fullName} 导入失败, ${error.message || error}`
          );
        });
    });

    try {
      await Promise.all(userPromise);
      console.log("用户数据导入完成");
      console.log(`共导入 ${usersNumber} 条人员数据`);
    } catch (err) {
      console.error("导入过程中出现错误:", err);
    }
  })
  .catch((err) => {
    console.error("清除数据库时发生错误:", err);
  });
