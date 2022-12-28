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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [textInput, setTextInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    async function onSubmit(event) {\n        event.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://127.0.0.1:8000/?text=\".concat(textInput));\n            console.log(response);\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            console.log(JSON.parse(response.request.responseText).choices[0].text);\n            setResult(JSON.parse(response.request.responseText).choices[0].text);\n            setTextInput(\"\");\n        } catch (error) {\n            // Consider implementing your own error handling logic here\n            console.error(error);\n            alert(error.message);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"translate text\"\n                        }, void 0, false, {\n                            fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: onSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"animal\",\n                                    placeholder: \"Enter text to translate\",\n                                    value: textInput,\n                                    onChange: (e)=>setTextInput(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"submit\",\n                                    value: \"translate!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                bgColor: \"orange.100\",\n                paddingBottom: \"100\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Center, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {\n                        width: \"80%\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                        children: \"Content to be tanslated\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Textarea, {\n                                        bgColor: \"white\",\n                                        type: \"text\",\n                                        name: \"translate\",\n                                        placeholder: \"Enter text to translate\",\n                                        value: textInput,\n                                        onChange: (e)=>setTextInput(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                        children: \"submit\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                fontSize: \"4xl\",\n                                children: [\n                                    \"output:\",\n                                    result\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/johnwang/projects/translation-app/translation/pages/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"1LMFM7Ub0DwWCnKR3lLqJec6c3E=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBOztBQU1NQTtBQU53QjtBQUVnQjtBQUNwQjtBQUNPO0FBQ21HO0FBRXJILFNBQVNnQixPQUFPOztJQUM3QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDZSxRQUFRQyxVQUFVLEdBQUdoQiwrQ0FBUUE7SUFFcEMsZUFBZWlCLFNBQVNDLEtBQUssRUFBRTtRQUM3QkEsTUFBTUMsY0FBYztRQUNwQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNckIsaURBQVMsQ0FBQywrQkFBeUMsT0FBVmM7WUFDaEVTLFFBQVFDLEdBQUcsQ0FBQ0g7WUFFWixJQUFJQSxTQUFTSSxNQUFNLEtBQUssS0FBSztnQkFDM0IsTUFBTUMsS0FBS0MsS0FBSyxJQUFJLElBQUlDLE1BQU0sOEJBQThDLE9BQWhCUCxTQUFTSSxNQUFNLEdBQUk7WUFDakYsQ0FBQztZQUNERixRQUFRQyxHQUFHLENBQUNLLEtBQUtDLEtBQUssQ0FBQ1QsU0FBU1UsT0FBTyxDQUFDQyxZQUFZLEVBQUVDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7WUFDckVqQixVQUFVWSxLQUFLQyxLQUFLLENBQUNULFNBQVNVLE9BQU8sQ0FBQ0MsWUFBWSxFQUFFQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJO1lBQ25FbkIsYUFBYTtRQUNmLEVBQUUsT0FBT1ksT0FBTztZQUNkLDJEQUEyRDtZQUMzREosUUFBUUksS0FBSyxDQUFDQTtZQUNkUSxNQUFNUixNQUFNUyxPQUFPO1FBQ3JCO0lBQ0Y7SUFDQSxxQkFDRTs7MEJBQ0UsOERBQUNDOzBCQUVDLDRFQUFDQztvQkFBS0MsV0FBV3hDLHFFQUFXOztzQ0FDMUIsOERBQUN5QztzQ0FBRzs7Ozs7O3NDQUNKLDhEQUFDQzs0QkFBS3ZCLFVBQVVBOzs4Q0FDZCw4REFBQ3dCO29DQUNDQyxNQUFLO29DQUNMQyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPaEM7b0NBQ1BpQyxVQUFVLENBQUNDLElBQU1qQyxhQUFhaUMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7OENBRTlDLDhEQUFDSjtvQ0FBTUMsTUFBSztvQ0FBU0csT0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSWpDLDhEQUFDekMsaURBQUdBO2dCQUFDNkMsU0FBUTtnQkFBYUMsZUFBYzswQkFDdEMsNEVBQUN4QyxvREFBTUE7OEJBQ0wsNEVBQUNELG9EQUFNQTt3QkFBQzBDLE9BQU07OzBDQUNaLDhEQUFDOUMseURBQVdBOztrREFDViw4REFBQ0MsdURBQVNBO2tEQUFDOzs7Ozs7a0RBQ1gsOERBQUNLLHNEQUFRQTt3Q0FBQ3NDLFNBQVE7d0NBQ2hCUCxNQUFLO3dDQUNMQyxNQUFLO3dDQUNMQyxhQUFZO3dDQUNaQyxPQUFPaEM7d0NBQ1BpQyxVQUFVLENBQUNDLElBQU1qQyxhQUFhaUMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7a0RBRTlDLDhEQUFDNUMsb0RBQU1BO2tEQUFDOzs7Ozs7Ozs7Ozs7MENBSVYsOERBQUNDLGtEQUFJQTtnQ0FBQ2tELFVBQVM7O29DQUFNO29DQUVsQnJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2YsQ0FBQztHQWpFdUJIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnQG5leHQvZm9udC9nb29nbGUnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBUZXh0LCBGbGV4LCBCb3gsIEZvcm1Db250cm9sLCBGb3JtTGFiZWwsIElucHV0LCBGb3JtSGVscGVyVGV4dCwgVlN0YWNrLCBDZW50ZXIsIFRleHRhcmVhIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdGV4dElucHV0LCBzZXRUZXh0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC8/dGV4dD0ke3RleHRJbnB1dH1gKVxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG5cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xuICAgICAgICB0aHJvdyBkYXRhLmVycm9yIHx8IG5ldyBFcnJvcihgUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhKU09OLnBhcnNlKHJlc3BvbnNlLnJlcXVlc3QucmVzcG9uc2VUZXh0KS5jaG9pY2VzWzBdLnRleHQpXG4gICAgICBzZXRSZXN1bHQoSlNPTi5wYXJzZShyZXNwb25zZS5yZXF1ZXN0LnJlc3BvbnNlVGV4dCkuY2hvaWNlc1swXS50ZXh0KTtcbiAgICAgIHNldFRleHRJbnB1dChcIlwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gQ29uc2lkZXIgaW1wbGVtZW50aW5nIHlvdXIgb3duIGVycm9yIGhhbmRsaW5nIGxvZ2ljIGhlcmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgYWxlcnQoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgPGgzPnRyYW5zbGF0ZSB0ZXh0PC9oMz5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cImFuaW1hbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGV4dCB0byB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGV4dElucHV0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInRyYW5zbGF0ZSFcIiAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgICA8Qm94IGJnQ29sb3I9J29yYW5nZS4xMDAnIHBhZGRpbmdCb3R0b209JzEwMCc+XG4gICAgICAgIDxDZW50ZXI+XG4gICAgICAgICAgPFZTdGFjayB3aWR0aD0nODAlJz5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgPEZvcm1MYWJlbD5Db250ZW50IHRvIGJlIHRhbnNsYXRlZDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICA8VGV4dGFyZWEgYmdDb2xvcj0nd2hpdGUnXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGV4dCB0byB0cmFuc2xhdGVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0ZXh0SW5wdXR9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uPnN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuXG4gICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nNHhsJz5cbiAgICAgICAgICAgICAgb3V0cHV0OlxuICAgICAgICAgICAgICB7cmVzdWx0fVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDwvVlN0YWNrPlxuICAgICAgICA8L0NlbnRlcj5cbiAgICAgIDwvQm94PlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJJbWFnZSIsInN0eWxlcyIsImF4aW9zIiwidXNlU3RhdGUiLCJCdXR0b24iLCJUZXh0IiwiRmxleCIsIkJveCIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiSW5wdXQiLCJGb3JtSGVscGVyVGV4dCIsIlZTdGFjayIsIkNlbnRlciIsIlRleHRhcmVhIiwiSG9tZSIsInRleHRJbnB1dCIsInNldFRleHRJbnB1dCIsInJlc3VsdCIsInNldFJlc3VsdCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImRhdGEiLCJlcnJvciIsIkVycm9yIiwiSlNPTiIsInBhcnNlIiwicmVxdWVzdCIsInJlc3BvbnNlVGV4dCIsImNob2ljZXMiLCJ0ZXh0IiwiYWxlcnQiLCJtZXNzYWdlIiwiZGl2IiwibWFpbiIsImNsYXNzTmFtZSIsImgzIiwiZm9ybSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiYmdDb2xvciIsInBhZGRpbmdCb3R0b20iLCJ3aWR0aCIsImZvbnRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});