/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/AddressForm.module.css":
/*!***************************************!*\
  !*** ./styles/AddressForm.module.css ***!
  \***************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"input\": \"AddressForm_input__L_FFo\",\n\t\"formField\": \"AddressForm_formField__7l0Cl\",\n\t\"formButton\": \"AddressForm_formButton__aV_Nh\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQWRkcmVzc0Zvcm0ubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2xhbmEtaW50cm8tZnJvbnRlbmQvLi9zdHlsZXMvQWRkcmVzc0Zvcm0ubW9kdWxlLmNzcz83NjQxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImlucHV0XCI6IFwiQWRkcmVzc0Zvcm1faW5wdXRfX0xfRkZvXCIsXG5cdFwiZm9ybUZpZWxkXCI6IFwiQWRkcmVzc0Zvcm1fZm9ybUZpZWxkX183bDBDbFwiLFxuXHRcImZvcm1CdXR0b25cIjogXCJBZGRyZXNzRm9ybV9mb3JtQnV0dG9uX19hVl9OaFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/AddressForm.module.css\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"App\": \"Home_App__2g2bl\",\n\t\"AppHeader\": \"Home_AppHeader__EWHKt\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zb2xhbmEtaW50cm8tZnJvbnRlbmQvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2IxNzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQXBwXCI6IFwiSG9tZV9BcHBfXzJnMmJsXCIsXG5cdFwiQXBwSGVhZGVyXCI6IFwiSG9tZV9BcHBIZWFkZXJfX0VXSEt0XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./components/AddressForm.tsx":
/*!************************************!*\
  !*** ./components/AddressForm.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_AddressForm_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/AddressForm.module.css */ \"./styles/AddressForm.module.css\");\n/* harmony import */ var _styles_AddressForm_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_AddressForm_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction AddressForm(props) {\n    const { 0: values1 , 1: setValues  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        address: \"\"\n    });\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        props.handler(values1.address);\n    };\n    const handleAddressInputChange = (event)=>{\n        event.persist();\n        setValues((values)=>({\n                ...values,\n                address: event.target.value\n            })\n        );\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_AddressForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().Form),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    id: \"public-key\",\n                    className: (_styles_AddressForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().formField),\n                    type: \"text\",\n                    placeholder: \"Public Address, e.g. 7C4jsPZpht42Tw6MjXWF56Q5RQUocjBBmciEjDa8HRtp\",\n                    name: \"firstName\",\n                    value: values1.address,\n                    onChange: handleAddressInputChange\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/components/AddressForm.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/components/AddressForm.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: (_styles_AddressForm_module_css__WEBPACK_IMPORTED_MODULE_2___default().formButton),\n                    children: \"Check SOL Balance\"\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/components/AddressForm.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/klack/solana-intro-frontend/components/AddressForm.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/klack/solana-intro-frontend/components/AddressForm.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddressForm);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZHJlc3NGb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZ0U7QUFDWDtBQUVyRCxTQUFTRyxXQUFXLENBQUNDLEtBQTZDLEVBQUU7SUFFbEUsTUFBTSxFQUxSLEdBS1NDLE9BQU0sR0FMZixHQUtpQkMsU0FBUyxNQUFJTCwrQ0FBUSxDQUFDO1FBQ25DTSxPQUFPLEVBQUUsRUFBRTtLQUNaLENBQUM7SUFFRixNQUFNQyxZQUFZLEdBQUcsQ0FBQ0MsQ0FBNkIsR0FBSztRQUN0REEsQ0FBQyxDQUFDQyxjQUFjLEVBQUUsQ0FBQztRQUNuQk4sS0FBSyxDQUFDTyxPQUFPLENBQUNOLE9BQU0sQ0FBQ0UsT0FBTyxDQUFDO0tBQzlCO0lBRUQsTUFBTUssd0JBQXdCLEdBQUcsQ0FBQ0MsS0FBb0MsR0FBSztRQUN6RUEsS0FBSyxDQUFDQyxPQUFPLEVBQUUsQ0FBQztRQUNoQlIsU0FBUyxDQUFDLENBQUNELE1BQU0sR0FBSyxDQUFDO2dCQUNyQixHQUFHQSxNQUFNO2dCQUNURSxPQUFPLEVBQUVNLEtBQUssQ0FBQ0UsTUFBTSxDQUFDQyxLQUFLO2FBQzVCLENBQUM7UUFBQSxDQUFDLENBQUM7S0FDTDtJQUVELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRWhCLDRFQUFXO2tCQUN6Qiw0RUFBQ2tCLE1BQUk7WUFBQ0MsUUFBUSxFQUFFYixZQUFZOzs4QkFDMUIsOERBQUNjLE9BQUs7b0JBQ0pDLEVBQUUsRUFBQyxZQUFZO29CQUNmTCxTQUFTLEVBQUVoQixpRkFBZ0I7b0JBQzNCdUIsSUFBSSxFQUFDLE1BQU07b0JBQ1hDLFdBQVcsRUFBQyxtRUFBbUU7b0JBQy9FQyxJQUFJLEVBQUMsV0FBVztvQkFDaEJYLEtBQUssRUFBRVgsT0FBTSxDQUFDRSxPQUFPO29CQUNyQnFCLFFBQVEsRUFBRWhCLHdCQUF3Qjs7Ozs7d0JBQ2xDOzhCQUNGLDhEQUFDaUIsSUFBRTs7Ozt3QkFBRzs4QkFDTiw4REFBQ0MsUUFBTTtvQkFBQ0wsSUFBSSxFQUFDLFFBQVE7b0JBQUNQLFNBQVMsRUFBRWhCLGtGQUFpQjs4QkFBRSxtQkFFcEQ7Ozs7O3dCQUFTOzs7Ozs7Z0JBQ0o7Ozs7O1lBQ0gsQ0FDTjtDQUNIO0FBRUQsaUVBQWVDLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbGFuYS1pbnRyby1mcm9udGVuZC8uL2NvbXBvbmVudHMvQWRkcmVzc0Zvcm0udHN4PzU2NmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50LCBGb3JtRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQWRkcmVzc0Zvcm0ubW9kdWxlLmNzcydcblxuZnVuY3Rpb24gQWRkcmVzc0Zvcm0ocHJvcHM6IHsgaGFuZGxlcjogKGFkZHJlc3M6IHN0cmluZykgPT4gdm9pZCB9KSB7XG5cbiAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcbiAgICBhZGRyZXNzOiAnJyxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IEZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb3BzLmhhbmRsZXIodmFsdWVzLmFkZHJlc3MpXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkcmVzc0lucHV0Q2hhbmdlID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnBlcnNpc3QoKTtcbiAgICBzZXRWYWx1ZXMoKHZhbHVlcykgPT4gKHtcbiAgICAgIC4uLnZhbHVlcyxcbiAgICAgIGFkZHJlc3M6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvcm19PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwicHVibGljLWtleVwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUZpZWxkfVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlB1YmxpYyBBZGRyZXNzLCBlLmcuIDdDNGpzUFpwaHQ0MlR3Nk1qWFdGNTZRNVJRVW9jakJCbWNpRWpEYThIUnRwXCJcbiAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICB2YWx1ZT17dmFsdWVzLmFkZHJlc3N9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFkZHJlc3NJbnB1dENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1CdXR0b259PlxuICAgICAgICAgIENoZWNrIFNPTCBCYWxhbmNlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQWRkcmVzc0Zvcm0iLCJwcm9wcyIsInZhbHVlcyIsInNldFZhbHVlcyIsImFkZHJlc3MiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVyIiwiaGFuZGxlQWRkcmVzc0lucHV0Q2hhbmdlIiwiZXZlbnQiLCJwZXJzaXN0IiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJGb3JtIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJpZCIsImZvcm1GaWVsZCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJvbkNoYW5nZSIsImJyIiwiYnV0dG9uIiwiZm9ybUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/AddressForm.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_AddressForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AddressForm */ \"./components/AddressForm.tsx\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @solana/web3.js */ \"@solana/web3.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst Home = ()=>{\n    const { 0: balance1 , 1: setBalance  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: address1 , 1: setAddress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const addressSubmittedHandler = (address)=>{\n        try {\n            const key = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.PublicKey(address);\n            setAddress(key.toBase58());\n            const connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.Connection(_solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.clusterApiUrl(\"devnet\"));\n            connection.getBalance(key).then((balance)=>{\n                setBalance(balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_3__.LAMPORTS_PER_SOL);\n            });\n        } catch (error) {\n            setAddress(\"\");\n            setBalance(0);\n            alert(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().App),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().AppHeader),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Start Your Solana Journey\"\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddressForm__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    handler: addressSubmittedHandler\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: `Address: ${address1}`\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: `Balance: ${balance1} SOL`\n                }, void 0, false, {\n                    fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/klack/solana-intro-frontend/pages/index.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ2dDO0FBQ2M7QUFDSztBQUNaO0FBRXZDLE1BQU1JLElBQUksR0FBYSxJQUFNO0lBQzNCLE1BQU0sRUFQUixHQU9TQyxRQUFPLEdBUGhCLEdBT2tCQyxVQUFVLE1BQUlOLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sRUFSUixHQVFTTyxRQUFPLEdBUmhCLEdBUWtCQyxVQUFVLE1BQUlSLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBRTFDLE1BQU1TLHVCQUF1QixHQUFHLENBQUNGLE9BQWUsR0FBSztRQUNuRCxJQUFJO1lBQ0YsTUFBTUcsR0FBRyxHQUFHLElBQUlQLHNEQUFjLENBQUNJLE9BQU8sQ0FBQztZQUN2Q0MsVUFBVSxDQUFDRSxHQUFHLENBQUNFLFFBQVEsRUFBRSxDQUFDO1lBQzFCLE1BQU1DLFVBQVUsR0FBRyxJQUFJVix1REFBZSxDQUFDQSwwREFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRVUsVUFBVSxDQUFDRyxVQUFVLENBQUNOLEdBQUcsQ0FBQyxDQUFDTyxJQUFJLENBQUNaLENBQUFBLE9BQU8sR0FBSTtnQkFDekNDLFVBQVUsQ0FBQ0QsT0FBTyxHQUFHRiw2REFBcUIsQ0FBQzthQUM1QyxDQUFDO1NBQ0gsQ0FBQyxPQUFPZ0IsS0FBSyxFQUFFO1lBQ2RYLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDZEYsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNiYyxLQUFLLENBQUNELEtBQUssQ0FBQztTQUNiO0tBQ0Y7SUFFRCxxQkFDRSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUVyQixvRUFBVTtrQkFDeEIsNEVBQUN1QixRQUFNO1lBQUNGLFNBQVMsRUFBRXJCLDBFQUFnQjs7OEJBQ2pDLDhEQUFDeUIsR0FBQzs4QkFBQywyQkFFSDs7Ozs7NkJBQUk7OEJBQ0osOERBQUN4QiwrREFBVztvQkFBQ3lCLE9BQU8sRUFBRWxCLHVCQUF1Qjs7Ozs7NkJBQUk7OEJBQ2pELDhEQUFDaUIsR0FBQzs4QkFBRSxDQUFDLFNBQVMsRUFBRW5CLFFBQU8sQ0FBQyxDQUFDOzs7Ozs2QkFBSzs4QkFDOUIsOERBQUNtQixHQUFDOzhCQUFFLENBQUMsU0FBUyxFQUFFckIsUUFBTyxDQUFDLElBQUksQ0FBQzs7Ozs7NkJBQUs7Ozs7OztxQkFDM0I7Ozs7O2lCQUNMLENBQ1A7Q0FDRjtBQUVELGlFQUFlRCxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29sYW5hLWludHJvLWZyb250ZW5kLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEFkZHJlc3NGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvQWRkcmVzc0Zvcm0nXG5pbXBvcnQgKiBhcyBXZWIzIGZyb20gJ0Bzb2xhbmEvd2ViMy5qcydcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IGFkZHJlc3NTdWJtaXR0ZWRIYW5kbGVyID0gKGFkZHJlc3M6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBrZXkgPSBuZXcgV2ViMy5QdWJsaWNLZXkoYWRkcmVzcylcbiAgICAgIHNldEFkZHJlc3Moa2V5LnRvQmFzZTU4KCkpXG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gbmV3IFdlYjMuQ29ubmVjdGlvbihXZWIzLmNsdXN0ZXJBcGlVcmwoJ2Rldm5ldCcpKVxuICAgICAgY29ubmVjdGlvbi5nZXRCYWxhbmNlKGtleSkudGhlbihiYWxhbmNlID0+IHtcbiAgICAgICAgc2V0QmFsYW5jZShiYWxhbmNlIC8gV2ViMy5MQU1QT1JUU19QRVJfU09MKVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgc2V0QWRkcmVzcygnJylcbiAgICAgIHNldEJhbGFuY2UoMClcbiAgICAgIGFsZXJ0KGVycm9yKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHB9PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5BcHBIZWFkZXJ9PlxuICAgICAgICA8cD5cbiAgICAgICAgICBTdGFydCBZb3VyIFNvbGFuYSBKb3VybmV5XG4gICAgICAgIDwvcD5cbiAgICAgICAgPEFkZHJlc3NGb3JtIGhhbmRsZXI9e2FkZHJlc3NTdWJtaXR0ZWRIYW5kbGVyfSAvPlxuICAgICAgICA8cD57YEFkZHJlc3M6ICR7YWRkcmVzc31gfTwvcD5cbiAgICAgICAgPHA+e2BCYWxhbmNlOiAke2JhbGFuY2V9IFNPTGB9PC9wPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiQWRkcmVzc0Zvcm0iLCJXZWIzIiwiSG9tZSIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJhZGRyZXNzU3VibWl0dGVkSGFuZGxlciIsImtleSIsIlB1YmxpY0tleSIsInRvQmFzZTU4IiwiY29ubmVjdGlvbiIsIkNvbm5lY3Rpb24iLCJjbHVzdGVyQXBpVXJsIiwiZ2V0QmFsYW5jZSIsInRoZW4iLCJMQU1QT1JUU19QRVJfU09MIiwiZXJyb3IiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsIkFwcCIsImhlYWRlciIsIkFwcEhlYWRlciIsInAiLCJoYW5kbGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@solana/web3.js":
/*!**********************************!*\
  !*** external "@solana/web3.js" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@solana/web3.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();