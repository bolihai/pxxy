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
 * 根据id获取人员数据获取人员数据
 */
export async function getPeopleInfo(id) {}
