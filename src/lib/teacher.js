import axios from "axios";

/**
 * 获取所有人姓名，id和头像
 */
export async function getTeacherMap(department) {
  try {
    const url = `http://localhost:3000/institution/${department}`;
    const response = await axios.get(url);
    if (response.status !== 200) {
      console.log("出错了");
    } else {
      const teacherObj = response.data;

      const TeacherMap = new Map(Object.entries(teacherObj));
      console.log(TeacherMap);

      return TeacherMap;
    }
  } catch (e) {
    console.log("出错了", e);
  }
}

/**
 * 编辑人员信息
 * @param {*} name
 * @param {*} data
 * @returns
 */
export async function editPeopleInfo(name, data) {
  try {
    const url = `http://localhost:3000/peopleEdit/${name}`;
    const response = await axios.post(url, { data }); // 包装data对象

    if (response.status === 200) {
      console.log("编辑人员信息成功");
      return { success: true, message: response.data.message };
    } else {
      throw new Error(response.data.message || "编辑失败");
    }
  } catch (error) {
    console.error("编辑人员信息失败!", error);
    return { success: false, message: error.message };
  }
}

/**
 * 根据id获取人员数据获取人员数据
 */
export async function getPeopleInfo(id) {}
