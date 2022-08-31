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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_AddressForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AddressForm */ \"./components/AddressForm.tsx\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), balance1 = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), address1 = ref1[0], setAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), nope = ref2[0], setNope = ref2[1];\n    var addressSubmittedHandler = function(address) {\n        try {\n            var key = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey(address);\n            setAddress(key.toBase58());\n            var connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Connection(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.clusterApiUrl(\"devnet\"));\n            connection.getBalance(key).then(function(balance) {\n                setBalance(balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.LAMPORTS_PER_SOL);\n            });\n            connection.getAccountInfo(key).then(function(accountInfo) {\n                if (accountInfo === null || accountInfo === void 0 ? void 0 : accountInfo.executable) {\n                    console.log(\"It is execuiting\");\n                    setNope(\"Yep\");\n                } else {\n                    setNope(\"Nope\");\n                }\n            });\n        } catch (error) {\n            setAddress(\"\");\n            setBalance(0);\n            alert(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().App),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().AppHeader),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Start Your Solana Journey\"\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddressForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    handler: addressSubmittedHandler\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Address: \".concat(address1)\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Balance: \".concat(balance1, \" SOL\")\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this),\n                balance1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Is it executable? \".concat(nope)\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 20\n                }, _this) : \"\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"YF0wPl7Rco63s2SpOU5v58FlgvQ=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ2dDO0FBQ2M7QUFDSztBQUNaOztBQUV2QyxJQUFNSSxJQUFJLEdBQWEsV0FBTTs7SUFDM0IsSUFBOEJKLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFQM0MsUUFPZ0IsR0FBZ0JBLEdBQVcsR0FBM0IsRUFQaEIsVUFPNEIsR0FBSUEsR0FBVyxHQUFmO0lBQzFCLElBQThCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUjVDLFFBUWdCLEdBQWdCQSxJQUFZLEdBQTVCLEVBUmhCLFVBUTRCLEdBQUlBLElBQVksR0FBaEI7SUFDMUIsSUFBd0JBLElBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFUdEMsSUFTYSxHQUFhQSxJQUFZLEdBQXpCLEVBVGIsT0FTc0IsR0FBSUEsSUFBWSxHQUFoQjtJQUVwQixJQUFNVyx1QkFBdUIsR0FBRyxTQUFDSixPQUFlLEVBQUs7UUFDbkQsSUFBSTtZQUNGLElBQU1LLEdBQUcsR0FBRyxJQUFJVCxzREFBYyxDQUFDSSxPQUFPLENBQUM7WUFDdkNDLFVBQVUsQ0FBQ0ksR0FBRyxDQUFDRSxRQUFRLEVBQUUsQ0FBQztZQUMxQixJQUFNQyxVQUFVLEdBQUcsSUFBSVosdURBQWUsQ0FBQ0EsMERBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEVZLFVBQVUsQ0FBQ0csVUFBVSxDQUFDTixHQUFHLENBQUMsQ0FBQ08sSUFBSSxDQUFDZCxTQUFBQSxPQUFPLEVBQUk7Z0JBQ3pDQyxVQUFVLENBQUNELE9BQU8sR0FBR0YsNkRBQXFCLENBQUM7YUFDNUMsQ0FBQztZQUNGWSxVQUFVLENBQUNNLGNBQWMsQ0FBQ1QsR0FBRyxDQUFDLENBQUNPLElBQUksQ0FBQ0csU0FBQUEsV0FBVyxFQUFJO2dCQUNqRCxJQUFJQSxXQUFXLGFBQVhBLFdBQVcsV0FBWSxHQUF2QkEsS0FBQUEsQ0FBdUIsR0FBdkJBLFdBQVcsQ0FBRUMsVUFBVSxFQUFFO29CQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7b0JBQy9CZixPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUNmLE1BQU07b0JBQ0xBLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQ2hCO2FBQ0YsQ0FBQztTQUNILENBQUMsT0FBT2dCLEtBQUssRUFBRTtZQUNkbEIsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUNkRixVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2JxQixLQUFLLENBQUNELEtBQUssQ0FBQztTQUNiO0tBQ0Y7SUFFRCxxQkFDRSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUU1QixvRUFBVTtrQkFDeEIsNEVBQUM4QixRQUFNO1lBQUNGLFNBQVMsRUFBRTVCLDBFQUFnQjs7OEJBQ2pDLDhEQUFDZ0MsR0FBQzs4QkFBQywyQkFFSDs7Ozs7eUJBQUk7OEJBQ0osOERBQUMvQiwrREFBVztvQkFBQ2dDLE9BQU8sRUFBRXZCLHVCQUF1Qjs7Ozs7eUJBQUk7OEJBQ2pELDhEQUFDc0IsR0FBQzs4QkFBRSxXQUFVLENBQVUsT0FBUjFCLFFBQU8sQ0FBRTs7Ozs7eUJBQUs7OEJBQzlCLDhEQUFDMEIsR0FBQzs4QkFBRSxXQUFVLENBQVUsTUFBSSxDQUFaNUIsUUFBTyxFQUFDLE1BQUksQ0FBQzs7Ozs7eUJBQUs7Z0JBQ2pDQSxRQUFPLGlCQUFHLDhEQUFDNEIsR0FBQzs4QkFBRSxvQkFBbUIsQ0FBTyxPQUFMeEIsSUFBSSxDQUFFOzs7Ozt5QkFBSyxHQUFHLEVBQUU7Ozs7OztpQkFDN0M7Ozs7O2FBQ0wsQ0FDUDtDQUNGO0dBekNLTCxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUEyQ1YsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEFkZHJlc3NGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQWRkcmVzc0Zvcm0nXG5pbXBvcnQgKiBhcyBXZWIzIGZyb20gJ0Bzb2xhbmEvd2ViMy5qcydcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbbm9wZSwgc2V0Tm9wZV0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBhZGRyZXNzU3VibWl0dGVkSGFuZGxlciA9IChhZGRyZXNzOiBzdHJpbmcpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qga2V5ID0gbmV3IFdlYjMuUHVibGljS2V5KGFkZHJlc3MpXG4gICAgICBzZXRBZGRyZXNzKGtleS50b0Jhc2U1OCgpKVxuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IG5ldyBXZWIzLkNvbm5lY3Rpb24oV2ViMy5jbHVzdGVyQXBpVXJsKCdkZXZuZXQnKSlcbiAgICAgIGNvbm5lY3Rpb24uZ2V0QmFsYW5jZShrZXkpLnRoZW4oYmFsYW5jZSA9PiB7XG4gICAgICAgIHNldEJhbGFuY2UoYmFsYW5jZSAvIFdlYjMuTEFNUE9SVFNfUEVSX1NPTClcbiAgICAgIH0pXG4gICAgICBjb25uZWN0aW9uLmdldEFjY291bnRJbmZvKGtleSkudGhlbihhY2NvdW50SW5mbyA9PiB7XG4gICAgICAgIGlmIChhY2NvdW50SW5mbz8uZXhlY3V0YWJsZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdJdCBpcyBleGVjdWl0aW5nJylcbiAgICAgICAgICBzZXROb3BlKCdZZXAnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNldE5vcGUoJ05vcGUnKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBzZXRBZGRyZXNzKCcnKVxuICAgICAgc2V0QmFsYW5jZSgwKVxuICAgICAgYWxlcnQoZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcH0+XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLkFwcEhlYWRlcn0+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFN0YXJ0IFlvdXIgU29sYW5hIEpvdXJuZXlcbiAgICAgICAgPC9wPlxuICAgICAgICA8QWRkcmVzc0Zvcm0gaGFuZGxlcj17YWRkcmVzc1N1Ym1pdHRlZEhhbmRsZXJ9IC8+XG4gICAgICAgIDxwPntgQWRkcmVzczogJHthZGRyZXNzfWB9PC9wPlxuICAgICAgICA8cD57YEJhbGFuY2U6ICR7YmFsYW5jZX0gU09MYH08L3A+XG4gICAgICAgIHtiYWxhbmNlID8gPHA+e2BJcyBpdCBleGVjdXRhYmxlPyAke25vcGV9YH08L3A+IDogJyd9XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJBZGRyZXNzRm9ybSIsIldlYjMiLCJIb21lIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsIm5vcGUiLCJzZXROb3BlIiwiYWRkcmVzc1N1Ym1pdHRlZEhhbmRsZXIiLCJrZXkiLCJQdWJsaWNLZXkiLCJ0b0Jhc2U1OCIsImNvbm5lY3Rpb24iLCJDb25uZWN0aW9uIiwiY2x1c3RlckFwaVVybCIsImdldEJhbGFuY2UiLCJ0aGVuIiwiTEFNUE9SVFNfUEVSX1NPTCIsImdldEFjY291bnRJbmZvIiwiYWNjb3VudEluZm8iLCJleGVjdXRhYmxlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJBcHAiLCJoZWFkZXIiLCJBcHBIZWFkZXIiLCJwIiwiaGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});