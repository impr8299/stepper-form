"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"a05947951415\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/ODBmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImEwNTk0Nzk1MTQxNVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/redux/Slice/stepformSlice.js":
/*!**********************************************!*\
  !*** ./src/app/redux/Slice/stepformSlice.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   stepFormFail: function() { return /* binding */ stepFormFail; },\n/* harmony export */   stepFormRequest: function() { return /* binding */ stepFormRequest; },\n/* harmony export */   stepFormSuccess: function() { return /* binding */ stepFormSuccess; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    message: \"\",\n    error: null,\n    restaurantData: {}\n};\nconst stepFormSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"stepForm\",\n    initialState,\n    reducers: {\n        stepFormRequest (state) {},\n        stepFormSuccess (state, action) {\n            console.log(action, \"action\");\n            state.restaurantData = action.payload.data.data;\n            state.error = null;\n        },\n        stepFormFail (state, action) {\n            state.error = action.payload;\n        }\n    }\n});\nconst { stepFormRequest, stepFormSuccess, stepFormFail } = stepFormSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (stepFormSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVkdXgvU2xpY2Uvc3RlcGZvcm1TbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQytDO0FBRS9DLE1BQU1DLGVBQWU7SUFDbkJDLFNBQVM7SUFDVEMsT0FBTztJQUNQQyxnQkFBZ0IsQ0FBQztBQUNuQjtBQUVBLE1BQU1DLGdCQUFnQkwsNkRBQVdBLENBQUM7SUFDaENNLE1BQU07SUFDTkw7SUFDQU0sVUFBVTtRQUNSQyxpQkFBZ0JDLEtBQUssR0FFckI7UUFDQUMsaUJBQWdCRCxLQUFLLEVBQUVFLE1BQU07WUFDM0JDLFFBQVFDLEdBQUcsQ0FBQ0YsUUFBUTtZQUNwQkYsTUFBTUwsY0FBYyxHQUFHTyxPQUFPRyxPQUFPLENBQUNDLElBQUksQ0FBQ0EsSUFBSTtZQUMvQ04sTUFBTU4sS0FBSyxHQUFHO1FBQ2hCO1FBQ0FhLGNBQWFQLEtBQUssRUFBRUUsTUFBTTtZQUN4QkYsTUFBTU4sS0FBSyxHQUFHUSxPQUFPRyxPQUFPO1FBQzlCO0lBQ0Y7QUFDRjtBQUdPLE1BQU0sRUFBRU4sZUFBZSxFQUFFRSxlQUFlLEVBQUVNLFlBQVksRUFBRSxHQUFHWCxjQUFjWSxPQUFPLENBQUM7QUFHeEYsK0RBQWVaLGNBQWNhLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3JlZHV4L1NsaWNlL3N0ZXBmb3JtU2xpY2UuanM/MDkxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtZXNzYWdlOiAnJyxcclxuICBlcnJvcjogbnVsbCxcclxuICByZXN0YXVyYW50RGF0YToge30sXHJcbn07XHJcblxyXG5jb25zdCBzdGVwRm9ybVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdzdGVwRm9ybScsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzdGVwRm9ybVJlcXVlc3Qoc3RhdGUpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgc3RlcEZvcm1TdWNjZXNzKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uLCBcImFjdGlvblwiKVxyXG4gICAgICBzdGF0ZS5yZXN0YXVyYW50RGF0YSA9IGFjdGlvbi5wYXlsb2FkLmRhdGEuZGF0YTtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xyXG4gICAgfSxcclxuICAgIHN0ZXBGb3JtRmFpbChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCB7IHN0ZXBGb3JtUmVxdWVzdCwgc3RlcEZvcm1TdWNjZXNzLCBzdGVwRm9ybUZhaWwgfSA9IHN0ZXBGb3JtU2xpY2UuYWN0aW9ucztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdGVwRm9ybVNsaWNlLnJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsIm1lc3NhZ2UiLCJlcnJvciIsInJlc3RhdXJhbnREYXRhIiwic3RlcEZvcm1TbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInN0ZXBGb3JtUmVxdWVzdCIsInN0YXRlIiwic3RlcEZvcm1TdWNjZXNzIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJkYXRhIiwic3RlcEZvcm1GYWlsIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/redux/Slice/stepformSlice.js\n"));

/***/ })

});