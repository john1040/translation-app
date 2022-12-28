"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [textInput, setTextInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    async function onSubmit(event) {\n        event.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/?text=\".concat(textInput));\n            console.log(response);\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            console.log(JSON.parse(response.request.responseText).choices[0].text);\n            setResult(JSON.parse(response.request.responseText).choices[0].text);\n            setTextInput(\"\");\n        } catch (error) {\n            // Consider implementing your own error handling logic here\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"translate text\"\n                        }, void 0, false, {\n                            fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: onSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"animal\",\n                                    placeholder: \"Enter text to translate\",\n                                    value: textInput,\n                                    onChange: (e)=>setTextInput(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"submit\",\n                                    value: \"translate!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Center, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                type: \"text\",\n                                name: \"translate\",\n                                placeholder: \"Enter text to translate\",\n                                value: textInput,\n                                onChange: (e)=>setTextInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                                children: \"submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                fontSize: \"6xl\",\n                                children: \" Enter ur text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                fontSize: \"6xl\",\n                                children: result\n                            }, void 0, false, {\n                                fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"1LMFM7Ub0DwWCnKR3lLqJec6c3E=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBOztBQU1NQTtBQU53QjtBQUVnQjtBQUNwQjtBQUNPO0FBQ2lGO0FBRW5HLFNBQVNjLE9BQU87O0lBQzdCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNhLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBO0lBRXBDLGVBQWVlLFNBQVNDLEtBQUssRUFBRTtRQUM3QkEsTUFBTUMsY0FBYztRQUNwQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNbkIsaURBQVMsQ0FBQywrQkFBeUMsT0FBVlk7WUFDaEVTLFFBQVFDLEdBQUcsQ0FBQ0g7WUFFWixJQUFJQSxTQUFTSSxNQUFNLEtBQUssS0FBSztnQkFDM0IsTUFBTUMsS0FBS0MsS0FBSyxJQUFJLElBQUlDLE1BQU0sOEJBQThDLE9BQWhCUCxTQUFTSSxNQUFNLEdBQUk7WUFDakYsQ0FBQztZQUNERixRQUFRQyxHQUFHLENBQUNLLEtBQUtDLEtBQUssQ0FBQ1QsU0FBU1UsT0FBTyxDQUFDQyxZQUFZLEVBQUVDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7WUFDckVqQixVQUFVWSxLQUFLQyxLQUFLLENBQUNULFNBQVNVLE9BQU8sQ0FBQ0MsWUFBWSxFQUFFQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJO1lBQ25FbkIsYUFBYTtRQUNmLEVBQUUsT0FBT1ksT0FBTztZQUNkLDJEQUEyRDtZQUMzREosUUFBUUksS0FBSyxDQUFDQTtZQUNkUSxNQUFNUixNQUFNUyxPQUFPO1FBQ3JCO0lBQ0Y7SUFDQSxxQkFDRTs7MEJBQ0UsOERBQUNDOzBCQUVDLDRFQUFDQztvQkFBS0MsV0FBV3RDLHFFQUFXOztzQ0FDMUIsOERBQUN1QztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQzs0QkFBS3ZCLFVBQVVBOzs4Q0FDZCw4REFBQ3dCO29DQUNDQyxNQUFLO29DQUNMQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPaEM7b0NBQ1BpQyxVQUFVLENBQUNDLElBQU1qQyxhQUFhaUMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7OENBRTlDLDhEQUFDSjtvQ0FBTUMsTUFBSztvQ0FBU0csT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWpDLDhEQUFDeEMsaURBQUdBOzBCQUNGLDRFQUFDTSxvREFBTUE7OEJBQ0wsNEVBQUNELG9EQUFNQTs7MENBQ0wsOERBQUNGLG1EQUFLQTtnQ0FDSmtDLE1BQUs7Z0NBQ0xDLE1BQUs7Z0NBQ0xDLGFBQVk7Z0NBQ1pDLE9BQU9oQztnQ0FDUGlDLFVBQVUsQ0FBQ0MsSUFBTWpDLGFBQWFpQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQ0FFOUMsOERBQUNJOzBDQUFPOzs7Ozs7MENBQ1IsOERBQUM5QyxrREFBSUE7Z0NBQUMrQyxVQUFTOzBDQUFNOzs7Ozs7MENBR3JCLDhEQUFDL0Msa0RBQUlBO2dDQUFDK0MsVUFBUzswQ0FDWm5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZixDQUFDO0dBOUR1Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICdAbmV4dC9mb250L2dvb2dsZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUZXh0LCBGbGV4LCBCb3gsIEZvcm1Db250cm9sLCBGb3JtTGFiZWwsIElucHV0LCBGb3JtSGVscGVyVGV4dCwgVlN0YWNrLCBDZW50ZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0ZXh0SW5wdXQsIHNldFRleHRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwLz90ZXh0PSR7dGV4dElucHV0fWApXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcblxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHRocm93IGRhdGEuZXJyb3IgfHwgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UocmVzcG9uc2UucmVxdWVzdC5yZXNwb25zZVRleHQpLmNob2ljZXNbMF0udGV4dClcbiAgICAgIHNldFJlc3VsdChKU09OLnBhcnNlKHJlc3BvbnNlLnJlcXVlc3QucmVzcG9uc2VUZXh0KS5jaG9pY2VzWzBdLnRleHQpO1xuICAgICAgc2V0VGV4dElucHV0KFwiXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBDb25zaWRlciBpbXBsZW1lbnRpbmcgeW91ciBvd24gZXJyb3IgaGFuZGxpbmcgbG9naWMgaGVyZVxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cblxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICA8aDM+dHJhbnNsYXRlIHRleHQ8L2gzPlxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwiYW5pbWFsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0ZXh0IHRvIHRyYW5zbGF0ZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0ZXh0SW5wdXR9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VGV4dElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwidHJhbnNsYXRlIVwiIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxDZW50ZXI+XG4gICAgICAgICAgPFZTdGFjaz5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJ0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRleHQgdG8gdHJhbnNsYXRlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RleHRJbnB1dH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b24+c3VibWl0PC9CdXR0b24+XG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nNnhsJz4gRW50ZXIgdXIgdGV4dDwvVGV4dD5cblxuXG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nNnhsJz5cbiAgICAgICAgICAgICAge3Jlc3VsdH1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L1ZTdGFjaz5cbiAgICAgICAgPC9DZW50ZXI+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImludGVyIiwiSW1hZ2UiLCJzdHlsZXMiLCJheGlvcyIsInVzZVN0YXRlIiwiVGV4dCIsIkZsZXgiLCJCb3giLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIklucHV0IiwiRm9ybUhlbHBlclRleHQiLCJWU3RhY2siLCJDZW50ZXIiLCJIb21lIiwidGV4dElucHV0Iiwic2V0VGV4dElucHV0IiwicmVzdWx0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZGF0YSIsImVycm9yIiwiRXJyb3IiLCJKU09OIiwicGFyc2UiLCJyZXF1ZXN0IiwicmVzcG9uc2VUZXh0IiwiY2hvaWNlcyIsInRleHQiLCJhbGVydCIsIm1lc3NhZ2UiLCJkaXYiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDMiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJCdXR0b24iLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});