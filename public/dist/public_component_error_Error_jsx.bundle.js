"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpxxy"] = self["webpackChunkpxxy"] || []).push([["public_component_error_Error_jsx"],{

/***/ "./public/component/error/Error.jsx":
/*!******************************************!*\
  !*** ./public/component/error/Error.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Error)\n/* harmony export */ });\n/* harmony import */ var _mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Error */ \"./node_modules/@mui/icons-material/Error.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _common_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Common */ \"./public/component/common/Common.jsx\");\n/**\r\n * Error, a React component of HollyWeb\r\n * @module components/error/Error\r\n */\n\n\n\n\n\n\n\n/**\r\n * Define Error, a React component of HollyWeb\r\n * @function Error\r\n * @returns Error component when error occurs\r\n * @static\r\n */\nfunction Error() {\n  var error = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useRouteError)();\n  console.error(\"Error:\", error);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_common_Common__WEBPACK_IMPORTED_MODULE_1__.ColumnFlexBoxCC, {\n    component: \"div\",\n    sx: {\n      pt: \"30vh\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    fontSize: \"large\",\n    sx: {\n      my: 1,\n      color: function color(theme) {\n        return theme.palette.error.main;\n      }\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    align: \"center\",\n    sx: {\n      color: function color(theme) {\n        return theme.palette.text.main;\n      }\n    },\n    variant: \"error\"\n  }, error.statusText || error.message));\n}\n\n//# sourceURL=webpack://pxxy/./public/component/error/Error.jsx?");

/***/ })

}]);