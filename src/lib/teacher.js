import axios from "axios";

/**
 * 登录
 * @param {*} name - 登录名
 * @param {*} pwd - 登录密码
 */
export async function Login(name, pwd) {
  try {
    const url = `http://localhost:3000/login`;
    const response = await axios.post(
      url,
      { name, pwd },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data && response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.message || "登录失败");
    }
  } catch (e) {
    console.log("出错了", e);
  }
}

/**
 * 获取所有人姓名，id和头像
 * @param {*} department - 部门
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
    const response = await axios.post(url, { data });

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
 * 根据登录人员，获取信息
 */
