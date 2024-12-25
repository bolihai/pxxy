import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login, { loader as loginLoader } from "./component/login/Login";
import Forum, { loader as forumLoader } from "./component/forum/Forum";
import HomePage, {
  loader as homePageLoader,
} from "./component/homepage/HomePage";
import Person, { loader as personLoader } from "./component/person/Person";
import Register, {
  loader as registerLoader,
} from "./component/register/Register";
import InstitutionList, {
  loader as institutionListLoader,
} from "./component/institution/InstitutionList";
import Root from "./component/root/Root";
import RootError from "./component/error/RootError";
import Error from "./component/error/Error";
import ProgressDialog from "./component/common/ProgressDialog";
import src, { loader as srcLoader } from "./component/src/src";
import TeacherDetail, {
  loader as teacherDetailLoader,
} from "./component/institution/TeacherDetail";

/**
 * 错误展示
 * @param {*} component
 * @returns
 */
function suspenseLoading(component) {
  return (
    <Suspense
      fallback={<ProgressDialog loading={true} title="正在加载，请稍候……" />}
    >
      {component}
    </Suspense>
  );
}

/**
 * 待渲染的路由
 */
const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: suspenseLoading(<RootError />),
    loader: loginLoader,
  },
  {
    path: "/register",
    element: suspenseLoading(<Register />),
    errorElement: suspenseLoading(<RootError />),
    loader: registerLoader,
  },
  {
    path: "/",
    element: <Root />,
    errorElement: suspenseLoading(<RootError />),
    children: [
      {
        errorElement: suspenseLoading(<Error />),
        children: [
          // 主页
          {
            index: true,
            path: "/homepage",
            element: <HomePage />,
            loader: homePageLoader,
          },
          // 学院
          {
            path: "/institution",
            element: <InstitutionList />,
            loader: institutionListLoader,
          },
          {
            path: "/institution/:institutionId",
            element: <src />,
            loader: srcLoader,
            children: [
              {
                path: "teacher/:teacherId",
                element: <TeacherDetail />,
                loader: teacherDetailLoader,
              },
            ],
          },

          // 个人信息
          {
            path: "/person",
            element: <Person />,
            loader: personLoader,
          },
          // 论坛
          {
            path: "/forum",
            element: <Forum />,
            loader: forumLoader,
          },
          {
            path: "error",
            element: suspenseLoading(<Error />),
          },
        ],
      },
    ],
  },
]);

/**
 * 单页应用，获取主页面的 body
 */
const pxxy = createRoot(document.getElementById("pxxy"));

/**
 * 根据路由渲染
 */
pxxy.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
