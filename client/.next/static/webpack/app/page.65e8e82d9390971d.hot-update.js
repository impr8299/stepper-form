"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/component/review.js":
/*!*************************************!*\
  !*** ./src/app/component/review.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n // Assuming you're using axios for API calls\nconst Review = (param)=>{\n    let { formData, previousStep } = param;\n    console.log(formData, \"formData\");\n    // Function to handle the API call for export\n    const exportOrder = async ()=>{\n        try {\n            // Sending a POST request to the export API with form data\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/export\", formData, {\n                responseType: \"blob\"\n            });\n            // Create a Blob from the API response\n            const blob = new Blob([\n                response.data\n            ], {\n                type: response.data.type\n            });\n            const url = URL.createObjectURL(blob);\n            // Create a link element and trigger download\n            const link = document.createElement(\"a\");\n            link.href = url;\n            link.setAttribute(\"download\", \"order.csv\"); // You can customize the file name\n            document.body.appendChild(link);\n            link.click();\n            document.body.removeChild(link); // Clean up\n        } catch (error) {\n            console.error(\"Error exporting order:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center mb-2\",\n                children: \"Review Your Order\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\stepper-form\\\\client\\\\src\\\\app\\\\component\\\\review.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold\",\n                                children: \"Meal Category:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\stepper-form\\\\client\\\\src\\\\app\\\\component\\\\review.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \",\n                            formData.mealCategory\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\stepper-form\\\\client\\\\src\\\\app\\\\component\\\\review.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold\",\n                                children: \"Number of People:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\stepper-form\\\\client\\\\src\\\\app\\\\component\\\\review.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, undefined),\n                            \" \",\n                            formData.numberOfPeople\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\stepper-form\\\\client\\\\src\\\\app\\\\component\\\\review.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold\",\n                                children: \"Restaurant: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\stepper-form\\\\client\\\\src\\\\app\\\\component\\\\review.js\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, undefined),\n                            formData.restaurant\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\stepper-form\\\\client\\\\src\\\\app\\\\component\\\\review.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold\",\n                                children: \"Dishes: \"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\stepper-form\\\\client\\\\src\\\\app\\\\component\\\\review.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, undefined),\n                            formData.dishes.map((dish)=>\"\".concat(dish.name, \" (Servings: \").concat(dish.servings, \")\")).join(\", \")\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\stepper-form\\\\client\\\\src\\\\app\\\\component\\\\review.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\stepper-form\\\\client\\\\src\\\\app\\\\component\\\\review.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex space-x-64\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10\",\n                        onClick: previousStep,\n                        children: \"Previous\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\stepper-form\\\\client\\\\src\\\\app\\\\component\\\\review.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10\",\n                        onClick: exportOrder,\n                        children: \"Export\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\stepper-form\\\\client\\\\src\\\\app\\\\component\\\\review.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\stepper-form\\\\client\\\\src\\\\app\\\\component\\\\review.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\Downloads\\\\stepper-form\\\\client\\\\src\\\\app\\\\component\\\\review.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Review;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Review);\nvar _c;\n$RefreshReg$(_c, \"Review\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L3Jldmlldy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDMEI7QUFDQSxDQUFDLDRDQUE0QztBQUV2RSxNQUFNRSxTQUFTO1FBQUMsRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUU7SUFDeENDLFFBQVFDLEdBQUcsQ0FBQ0gsVUFBVTtJQUV0Qiw2Q0FBNkM7SUFDN0MsTUFBTUksY0FBYztRQUNsQixJQUFJO1lBQ0YsMERBQTBEO1lBQzFELE1BQU1DLFdBQVcsTUFBTVAsNkNBQUtBLENBQUNRLElBQUksQ0FBQyxlQUFlTixVQUFVO2dCQUN6RE8sY0FBYztZQUNoQjtZQUVBLHNDQUFzQztZQUN0QyxNQUFNQyxPQUFPLElBQUlDLEtBQUs7Z0JBQUNKLFNBQVNLLElBQUk7YUFBQyxFQUFFO2dCQUFFQyxNQUFNTixTQUFTSyxJQUFJLENBQUNDLElBQUk7WUFBQztZQUNsRSxNQUFNQyxNQUFNQyxJQUFJQyxlQUFlLENBQUNOO1lBRWhDLDZDQUE2QztZQUM3QyxNQUFNTyxPQUFPQyxTQUFTQyxhQUFhLENBQUM7WUFDcENGLEtBQUtHLElBQUksR0FBR047WUFDWkcsS0FBS0ksWUFBWSxDQUFDLFlBQVksY0FBYyxrQ0FBa0M7WUFDOUVILFNBQVNJLElBQUksQ0FBQ0MsV0FBVyxDQUFDTjtZQUMxQkEsS0FBS08sS0FBSztZQUNWTixTQUFTSSxJQUFJLENBQUNHLFdBQVcsQ0FBQ1IsT0FBTyxXQUFXO1FBQzlDLEVBQUUsT0FBT1MsT0FBTztZQUNkdEIsUUFBUXNCLEtBQUssQ0FBQywwQkFBMEJBO1FBQzFDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFBR0MsV0FBVTswQkFBbUI7Ozs7OzswQkFFakMsOERBQUNDOztrQ0FDQyw4REFBQ0M7OzBDQUNDLDhEQUFDQztnQ0FBS0gsV0FBVTswQ0FBWTs7Ozs7OzRCQUFxQjs0QkFBRTNCLFNBQVMrQixZQUFZOzs7Ozs7O2tDQUUxRSw4REFBQ0Y7OzBDQUNDLDhEQUFDQztnQ0FBS0gsV0FBVTswQ0FBWTs7Ozs7OzRCQUF3Qjs0QkFBRTNCLFNBQVNnQyxjQUFjOzs7Ozs7O2tDQUUvRSw4REFBQ0g7OzBDQUNDLDhEQUFDQztnQ0FBS0gsV0FBVTswQ0FBWTs7Ozs7OzRCQUFvQjNCLFNBQVNpQyxVQUFVOzs7Ozs7O2tDQUVyRSw4REFBQ0o7OzBDQUNDLDhEQUFDQztnQ0FBS0gsV0FBVTswQ0FBWTs7Ozs7OzRCQUMzQjNCLFNBQVNrQyxNQUFNLENBQ2JDLEdBQUcsQ0FBQyxDQUFDQyxPQUFTLEdBQTJCQSxPQUF4QkEsS0FBS0MsSUFBSSxFQUFDLGdCQUE0QixPQUFkRCxLQUFLRSxRQUFRLEVBQUMsTUFDdkRDLElBQUksQ0FBQzs7Ozs7Ozs7Ozs7OzswQkFJWiw4REFBQ2Q7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDYTt3QkFDQzdCLE1BQUs7d0JBQ0xnQixXQUFVO3dCQUNWYyxTQUFTeEM7a0NBQ1Y7Ozs7OztrQ0FHRCw4REFBQ3VDO3dCQUNDN0IsTUFBSzt3QkFDTGdCLFdBQVU7d0JBQ1ZjLFNBQVNyQztrQ0FDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7S0FuRU1MO0FBcUVOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50L3Jldmlldy5qcz8zN2M4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjsgLy8gQXNzdW1pbmcgeW91J3JlIHVzaW5nIGF4aW9zIGZvciBBUEkgY2FsbHNcclxuXHJcbmNvbnN0IFJldmlldyA9ICh7IGZvcm1EYXRhLCBwcmV2aW91c1N0ZXAgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGZvcm1EYXRhLCBcImZvcm1EYXRhXCIpO1xyXG5cclxuICAvLyBGdW5jdGlvbiB0byBoYW5kbGUgdGhlIEFQSSBjYWxsIGZvciBleHBvcnRcclxuICBjb25zdCBleHBvcnRPcmRlciA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFNlbmRpbmcgYSBQT1NUIHJlcXVlc3QgdG8gdGhlIGV4cG9ydCBBUEkgd2l0aCBmb3JtIGRhdGFcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9leHBvcnRcIiwgZm9ybURhdGEsIHtcclxuICAgICAgICByZXNwb25zZVR5cGU6IFwiYmxvYlwiLCAvLyBUbyBlbnN1cmUgdGhlIGZpbGUgaXMgdHJlYXRlZCBhcyBhIGJsb2JcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBDcmVhdGUgYSBCbG9iIGZyb20gdGhlIEFQSSByZXNwb25zZVxyXG4gICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdLCB7IHR5cGU6IHJlc3BvbnNlLmRhdGEudHlwZSB9KTtcclxuICAgICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcbiAgICAgIC8vIENyZWF0ZSBhIGxpbmsgZWxlbWVudCBhbmQgdHJpZ2dlciBkb3dubG9hZFxyXG4gICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgIGxpbmsuaHJlZiA9IHVybDtcclxuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJkb3dubG9hZFwiLCBcIm9yZGVyLmNzdlwiKTsgLy8gWW91IGNhbiBjdXN0b21pemUgdGhlIGZpbGUgbmFtZVxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgICBsaW5rLmNsaWNrKCk7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQobGluayk7IC8vIENsZWFuIHVwXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZXhwb3J0aW5nIG9yZGVyOlwiLCBlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0yXCI+UmV2aWV3IFlvdXIgT3JkZXI8L2gyPlxyXG5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPk1lYWwgQ2F0ZWdvcnk6PC9zcGFuPiB7Zm9ybURhdGEubWVhbENhdGVnb3J5fVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICAgPGxpPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+TnVtYmVyIG9mIFBlb3BsZTo8L3NwYW4+IHtmb3JtRGF0YS5udW1iZXJPZlBlb3BsZX1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPlJlc3RhdXJhbnQ6IDwvc3Bhbj57Zm9ybURhdGEucmVzdGF1cmFudH1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPkRpc2hlczogPC9zcGFuPlxyXG4gICAgICAgICAge2Zvcm1EYXRhLmRpc2hlc1xyXG4gICAgICAgICAgICAubWFwKChkaXNoKSA9PiBgJHtkaXNoLm5hbWV9IChTZXJ2aW5nczogJHtkaXNoLnNlcnZpbmdzfSlgKVxyXG4gICAgICAgICAgICAuam9pbihcIiwgXCIpfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC02NFwiPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1ibHVlLTcwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBtdC0xMFwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtwcmV2aW91c1N0ZXB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUHJldmlvdXNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIG10LTEwXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2V4cG9ydE9yZGVyfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEV4cG9ydFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXZpZXc7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiUmV2aWV3IiwiZm9ybURhdGEiLCJwcmV2aW91c1N0ZXAiLCJjb25zb2xlIiwibG9nIiwiZXhwb3J0T3JkZXIiLCJyZXNwb25zZSIsInBvc3QiLCJyZXNwb25zZVR5cGUiLCJibG9iIiwiQmxvYiIsImRhdGEiLCJ0eXBlIiwidXJsIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJzZXRBdHRyaWJ1dGUiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGljayIsInJlbW92ZUNoaWxkIiwiZXJyb3IiLCJkaXYiLCJoMiIsImNsYXNzTmFtZSIsInVsIiwibGkiLCJzcGFuIiwibWVhbENhdGVnb3J5IiwibnVtYmVyT2ZQZW9wbGUiLCJyZXN0YXVyYW50IiwiZGlzaGVzIiwibWFwIiwiZGlzaCIsIm5hbWUiLCJzZXJ2aW5ncyIsImpvaW4iLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/review.js\n"));

/***/ })

});