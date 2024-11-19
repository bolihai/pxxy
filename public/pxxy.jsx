import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
/**
 * 待渲染的路由
 */
const router = createBrowserRouter([]);

/**
 * 单页应用，获取主页面的 body
 */
const pxxy = document.getElementById("pxxy");

/**
 * 根据路由渲染
 */
pxxy.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
