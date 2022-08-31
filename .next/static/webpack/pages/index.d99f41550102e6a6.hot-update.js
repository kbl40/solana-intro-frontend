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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_AddressForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AddressForm */ \"./components/AddressForm.tsx\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), balance1 = ref[0], setBalance = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), address1 = ref1[0], setAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), isExecutable = ref2[0], setIsExecutable = ref2[1];\n    var addressSubmittedHandler = function(address) {\n        try {\n            var key = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey(address);\n            setAddress(key.toBase58());\n            var connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Connection(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.clusterApiUrl(\"devnet\"));\n            connection.getBalance(key).then(function(balance) {\n                setBalance(balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.LAMPORTS_PER_SOL);\n            });\n            if (key) {\n                connection.getAccountInfo(key).then(function(accountInfo) {\n                    setIsExecutable(accountInfo.executable);\n                });\n            }\n        } catch (error) {\n            setAddress(\"\");\n            setBalance(0);\n            alert(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().App),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().AppHeader),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Start Your Solana Journey\"\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddressForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    handler: addressSubmittedHandler\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Address: \".concat(address1)\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Balance: \".concat(balance1, \" SOL\")\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this),\n                balance1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Is it executable? \".concat(isExecutable)\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 20\n                }, _this) : \"\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"h6PL2nn6sOnUadzOttcMs8cV97c=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ2dDO0FBQ2M7QUFDSztBQUNaOztBQUV2QyxJQUFNSSxJQUFJLEdBQWEsV0FBTTs7SUFDM0IsSUFBOEJKLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFQM0MsUUFPZ0IsR0FBZ0JBLEdBQVcsR0FBM0IsRUFQaEIsVUFPNEIsR0FBSUEsR0FBVyxHQUFmO0lBQzFCLElBQThCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBUjVDLFFBUWdCLEdBQWdCQSxJQUFZLEdBQTVCLEVBUmhCLFVBUTRCLEdBQUlBLElBQVksR0FBaEI7SUFDMUIsSUFBd0NBLElBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFUeEQsWUFTcUIsR0FBcUJBLElBQWMsR0FBbkMsRUFUckIsZUFTc0MsR0FBSUEsSUFBYyxHQUFsQjtJQUVwQyxJQUFNVyx1QkFBdUIsR0FBRyxTQUFDSixPQUFlLEVBQUs7UUFDbkQsSUFBSTtZQUNGLElBQU1LLEdBQUcsR0FBRyxJQUFJVCxzREFBYyxDQUFDSSxPQUFPLENBQUM7WUFDdkNDLFVBQVUsQ0FBQ0ksR0FBRyxDQUFDRSxRQUFRLEVBQUUsQ0FBQztZQUMxQixJQUFNQyxVQUFVLEdBQUcsSUFBSVosdURBQWUsQ0FBQ0EsMERBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEVZLFVBQVUsQ0FBQ0csVUFBVSxDQUFDTixHQUFHLENBQUMsQ0FBQ08sSUFBSSxDQUFDZCxTQUFBQSxPQUFPLEVBQUk7Z0JBQ3pDQyxVQUFVLENBQUNELE9BQU8sR0FBR0YsNkRBQXFCLENBQUM7YUFDNUMsQ0FBQztZQUNGLElBQUlTLEdBQUcsRUFBRTtnQkFDUEcsVUFBVSxDQUFDTSxjQUFjLENBQUNULEdBQUcsQ0FBQyxDQUFDTyxJQUFJLENBQUNHLFNBQUFBLFdBQVcsRUFBSTtvQkFDbkRaLGVBQWUsQ0FBQ1ksV0FBVyxDQUFDQyxVQUFVLENBQUM7aUJBQ3RDLENBQUM7YUFDSDtTQUNGLENBQUMsT0FBT0MsS0FBSyxFQUFFO1lBQ2RoQixVQUFVLENBQUMsRUFBRSxDQUFDO1lBQ2RGLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDYm1CLEtBQUssQ0FBQ0QsS0FBSyxDQUFDO1NBQ2I7S0FDRjtJQUVELHFCQUNFLDhEQUFDRSxLQUFHO1FBQUNDLFNBQVMsRUFBRTFCLG9FQUFVO2tCQUN4Qiw0RUFBQzRCLFFBQU07WUFBQ0YsU0FBUyxFQUFFMUIsMEVBQWdCOzs4QkFDakMsOERBQUM4QixHQUFDOzhCQUFDLDJCQUVIOzs7Ozt5QkFBSTs4QkFDSiw4REFBQzdCLCtEQUFXO29CQUFDOEIsT0FBTyxFQUFFckIsdUJBQXVCOzs7Ozt5QkFBSTs4QkFDakQsOERBQUNvQixHQUFDOzhCQUFFLFdBQVUsQ0FBVSxPQUFSeEIsUUFBTyxDQUFFOzs7Ozt5QkFBSzs4QkFDOUIsOERBQUN3QixHQUFDOzhCQUFFLFdBQVUsQ0FBVSxNQUFJLENBQVoxQixRQUFPLEVBQUMsTUFBSSxDQUFDOzs7Ozt5QkFBSztnQkFDakNBLFFBQU8saUJBQUcsOERBQUMwQixHQUFDOzhCQUFFLG9CQUFtQixDQUFlLE9BQWJ0QixZQUFZLENBQUU7Ozs7O3lCQUFLLEdBQUcsRUFBRTs7Ozs7O2lCQUNyRDs7Ozs7YUFDTCxDQUNQO0NBQ0Y7R0F0Q0tMLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQXdDViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgQWRkcmVzc0Zvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9BZGRyZXNzRm9ybSdcbmltcG9ydCAqIGFzIFdlYjMgZnJvbSAnQHNvbGFuYS93ZWIzLmpzJ1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtpc0V4ZWN1dGFibGUsIHNldElzRXhlY3V0YWJsZV0gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IGFkZHJlc3NTdWJtaXR0ZWRIYW5kbGVyID0gKGFkZHJlc3M6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBrZXkgPSBuZXcgV2ViMy5QdWJsaWNLZXkoYWRkcmVzcylcbiAgICAgIHNldEFkZHJlc3Moa2V5LnRvQmFzZTU4KCkpXG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gbmV3IFdlYjMuQ29ubmVjdGlvbihXZWIzLmNsdXN0ZXJBcGlVcmwoJ2Rldm5ldCcpKVxuICAgICAgY29ubmVjdGlvbi5nZXRCYWxhbmNlKGtleSkudGhlbihiYWxhbmNlID0+IHtcbiAgICAgICAgc2V0QmFsYW5jZShiYWxhbmNlIC8gV2ViMy5MQU1QT1JUU19QRVJfU09MKVxuICAgICAgfSlcbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgY29ubmVjdGlvbi5nZXRBY2NvdW50SW5mbyhrZXkpLnRoZW4oYWNjb3VudEluZm8gPT4ge1xuICAgICAgICBzZXRJc0V4ZWN1dGFibGUoYWNjb3VudEluZm8uZXhlY3V0YWJsZSlcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0QWRkcmVzcygnJylcbiAgICAgIHNldEJhbGFuY2UoMClcbiAgICAgIGFsZXJ0KGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHB9PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5BcHBIZWFkZXJ9PlxuICAgICAgICA8cD5cbiAgICAgICAgICBTdGFydCBZb3VyIFNvbGFuYSBKb3VybmV5XG4gICAgICAgIDwvcD5cbiAgICAgICAgPEFkZHJlc3NGb3JtIGhhbmRsZXI9e2FkZHJlc3NTdWJtaXR0ZWRIYW5kbGVyfSAvPlxuICAgICAgICA8cD57YEFkZHJlc3M6ICR7YWRkcmVzc31gfTwvcD5cbiAgICAgICAgPHA+e2BCYWxhbmNlOiAke2JhbGFuY2V9IFNPTGB9PC9wPlxuICAgICAgICB7YmFsYW5jZSA/IDxwPntgSXMgaXQgZXhlY3V0YWJsZT8gJHtpc0V4ZWN1dGFibGV9YH08L3A+IDogJyd9XG4gICAgICA8L2hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJBZGRyZXNzRm9ybSIsIldlYjMiLCJIb21lIiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsImlzRXhlY3V0YWJsZSIsInNldElzRXhlY3V0YWJsZSIsImFkZHJlc3NTdWJtaXR0ZWRIYW5kbGVyIiwia2V5IiwiUHVibGljS2V5IiwidG9CYXNlNTgiLCJjb25uZWN0aW9uIiwiQ29ubmVjdGlvbiIsImNsdXN0ZXJBcGlVcmwiLCJnZXRCYWxhbmNlIiwidGhlbiIsIkxBTVBPUlRTX1BFUl9TT0wiLCJnZXRBY2NvdW50SW5mbyIsImFjY291bnRJbmZvIiwiZXhlY3V0YWJsZSIsImVycm9yIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJBcHAiLCJoZWFkZXIiLCJBcHBIZWFkZXIiLCJwIiwiaGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});