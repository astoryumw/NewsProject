/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/utilAuthor.js":
/*!***************************!*\
  !*** ./lib/utilAuthor.js ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n__webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n\nfunction getAuthorNews(author, apiKey) {\n  return fetch(\"https://newsapi.org/v2/everything?author=\".concat(author, \"&apiKey=\").concat(apiKey)).then(function (resp) {\n    return resp.json();\n  });\n}\n\nfunction handleError(error) {\n  console.warn(error);\n  return null;\n}\n\nmodule.exports = {\n  getAuthorStory: function getAuthorStory(author, apiKey) {\n    return getAuthorNews(author, apiKey)[\"catch\"](handleError);\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxBdXRob3IuanM/YjMyNCJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZ2V0QXV0aG9yTmV3cyIsImF1dGhvciIsImFwaUtleSIsImZldGNoIiwidGhlbiIsInJlc3AiLCJqc29uIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldEF1dGhvclN0b3J5Il0sIm1hcHBpbmdzIjoiO0FBQUFBLG1CQUFPLENBQUMsaUZBQUQsQ0FBUDs7QUFFQSxTQUFTQyxhQUFULENBQXVCQyxNQUF2QixFQUE4QkMsTUFBOUIsRUFBc0M7QUFDckMsU0FBT0MsS0FBSyxvREFBNkNGLE1BQTdDLHFCQUE4REMsTUFBOUQsRUFBTCxDQUE2RUUsSUFBN0UsQ0FBa0YsVUFBU0MsSUFBVCxFQUFlO0FBQ3ZHLFdBQU9BLElBQUksQ0FBQ0MsSUFBTCxFQUFQO0FBQ0EsR0FGTSxDQUFQO0FBR0E7O0FBRUQsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDM0JDLFNBQU8sQ0FBQ0MsSUFBUixDQUFhRixLQUFiO0FBQ0EsU0FBTyxJQUFQO0FBQ0E7O0FBRURHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNoQkMsZ0JBQWMsRUFBRSx3QkFBU1osTUFBVCxFQUFnQkMsTUFBaEIsRUFBd0I7QUFDdkMsV0FBT0YsYUFBYSxDQUFDQyxNQUFELEVBQVFDLE1BQVIsQ0FBYixVQUFtQ0ssV0FBbkMsQ0FBUDtBQUNBO0FBSGUsQ0FBakIiLCJmaWxlIjoiLi9saWIvdXRpbEF1dGhvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpXG5cbmZ1bmN0aW9uIGdldEF1dGhvck5ld3MoYXV0aG9yLGFwaUtleSkge1xuXHRyZXR1cm4gZmV0Y2goYGh0dHBzOi8vbmV3c2FwaS5vcmcvdjIvZXZlcnl0aGluZz9hdXRob3I9JHthdXRob3J9JmFwaUtleT0ke2FwaUtleX1gKS50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcblx0XHRyZXR1cm4gcmVzcC5qc29uKCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvcikge1xuXHRjb25zb2xlLndhcm4oZXJyb3IpO1xuXHRyZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGdldEF1dGhvclN0b3J5OiBmdW5jdGlvbihhdXRob3IsYXBpS2V5KSB7XG5cdFx0cmV0dXJuIGdldEF1dGhvck5ld3MoYXV0aG9yLGFwaUtleSkuY2F0Y2goaGFuZGxlRXJyb3IpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/utilAuthor.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Austin_NewsIdea_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _lib_util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/util.js */ \"./lib/util.js\");\n/* harmony import */ var _lib_util_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_util_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _lib_utilAuthor_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/utilAuthor.js */ \"./lib/utilAuthor.js\");\n/* harmony import */ var _lib_utilAuthor_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lib_utilAuthor_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles.module.css */ \"./styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_12__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Austin/NewsIdea/pages/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Home = /*#__PURE__*/function (_React$Component) {\n  (0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(Home, _React$Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _this;\n\n    (0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, Home);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      news: [],\n      topic: \"\",\n      author: \"\",\n      exists: false\n    };\n    return _this;\n  }\n\n  (0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(Home, [{\n    key: \"handleUpdate\",\n    value: function handleUpdate(evt) {\n      this.setState({\n        topic: evt.target.value\n      });\n    }\n  }, {\n    key: \"handleUpdateAuthor\",\n    value: function handleUpdateAuthor(evt) {\n      this.setState({\n        author: evt.target.value\n      });\n    }\n  }, {\n    key: \"handleSearch\",\n    value: function () {\n      var _handleSearch = (0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_Austin_NewsIdea_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(evt) {\n        var _this2 = this;\n\n        var story, author, i;\n        return _Users_Austin_NewsIdea_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(this.state.author === \"\")) {\n                  _context.next = 6;\n                  break;\n                }\n\n                _context.next = 3;\n                return (0,_lib_util_js__WEBPACK_IMPORTED_MODULE_10__.getStory)(this.state.topic, \"2f50b435635d4b8d9be43f04da54b9ef\");\n\n              case 3:\n                story = _context.sent;\n                _context.next = 10;\n                break;\n\n              case 6:\n                if (!(this.state.topic === \"\")) {\n                  _context.next = 10;\n                  break;\n                }\n\n                _context.next = 9;\n                return (0,_lib_utilAuthor_js__WEBPACK_IMPORTED_MODULE_11__.getAuthorStory)(this.state.author, \"2f50b435635d4b8d9be43f04da54b9ef\");\n\n              case 9:\n                story = _context.sent;\n\n              case 10:\n                try {\n                  this.setState({\n                    news: []\n                  });\n\n                  if (story.articles.totalResults !== 0) {\n                    this.setState({\n                      exists: true\n                    }); // console.log(story);\n                    // this.setState({\n                    // \tnewsAuthor: story.articles[0].author\n                    // })\n\n                    author = \"\"; // newsAuthor story.articles[0].author\n\n                    for (i = 0; i < story.articles.length; i++) {\n                      // console.log(this.state.newsAuthor);\n                      author = story.articles[i].source.id + \", \" + story.articles[i].author + \", \" + story.articles[i].content; // console.log(author.split('\\n').map(str => <p>{str}</p>));\n\n                      this.setState(function (previousState) {\n                        return {\n                          news: [].concat((0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(previousState.news), [author.split('\\n').map(function (str) {\n                            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                              children: str\n                            }, void 0, false, {\n                              fileName: _jsxFileName,\n                              lineNumber: 57,\n                              columnNumber: 67\n                            }, _this2);\n                          })])\n                        };\n                      });\n                    }\n                  }\n                } catch (err) {\n                  console.log(err);\n                }\n\n              case 11:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function handleSearch(_x) {\n        return _handleSearch.apply(this, arguments);\n      }\n\n      return handleSearch;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          children: [\"Topic: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"text\",\n            value: this.state.topic,\n            onChange: this.handleUpdate.bind(this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 14\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 4\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          children: [\"Author: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"text\",\n            value: this.state.author,\n            onChange: this.handleUpdateAuthor.bind(this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 15\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 4\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: this.handleSearch.bind(this),\n          children: \"Search\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 5\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n          align: \"right\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n            children: this.state.exists ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_12___default().newsTable),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: this.state.news\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 8\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 7\n            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 7\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 6\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return Home;\n}((react__WEBPACK_IMPORTED_MODULE_9___default().Component));\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJzdGF0ZSIsIm5ld3MiLCJ0b3BpYyIsImF1dGhvciIsImV4aXN0cyIsImV2dCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJnZXRTdG9yeSIsInN0b3J5IiwiZ2V0QXV0aG9yU3RvcnkiLCJhcnRpY2xlcyIsInRvdGFsUmVzdWx0cyIsImkiLCJsZW5ndGgiLCJzb3VyY2UiLCJpZCIsImNvbnRlbnQiLCJwcmV2aW91c1N0YXRlIiwic3BsaXQiLCJtYXAiLCJzdHIiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlVXBkYXRlIiwiYmluZCIsImhhbmRsZVVwZGF0ZUF1dGhvciIsImhhbmRsZVNlYXJjaCIsInN0eWxlcyIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFcUJBLEk7Ozs7O0FBQ3BCLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2xCLDhCQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLFVBQUksRUFBRSxFQURNO0FBRVpDLFdBQUssRUFBRSxFQUZLO0FBR1pDLFlBQU0sRUFBRSxFQUhJO0FBSVpDLFlBQU0sRUFBRTtBQUpJLEtBQWI7QUFGa0I7QUFRbEI7Ozs7aUNBRVlDLEcsRUFBSztBQUNqQixXQUFLQyxRQUFMLENBQWM7QUFBRUosYUFBSyxFQUFFRyxHQUFHLENBQUNFLE1BQUosQ0FBV0M7QUFBcEIsT0FBZDtBQUNBOzs7dUNBRWtCSCxHLEVBQUs7QUFDdkIsV0FBS0MsUUFBTCxDQUFjO0FBQUVILGNBQU0sRUFBRUUsR0FBRyxDQUFDRSxNQUFKLENBQVdDO0FBQXJCLE9BQWQ7QUFDQTs7OzsyUkFFa0JILEc7Ozs7Ozs7O3NCQUlkLEtBQUtMLEtBQUwsQ0FBV0csTUFBWCxLQUFzQixF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QTtBQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBZ0JBOzs7O0VBaEZnQzhCLHdEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0U3RvcnkgfSBmcm9tIFwiLi4vbGliL3V0aWwuanNcIjtcbmltcG9ydCB7IGdldEF1dGhvclN0b3J5IH0gZnJvbSBcIi4uL2xpYi91dGlsQXV0aG9yLmpzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5ld3M6IFtdLFxuXHRcdFx0dG9waWM6IFwiXCIsXG5cdFx0XHRhdXRob3I6IFwiXCIsXG5cdFx0XHRleGlzdHM6IGZhbHNlLFxuXHRcdH1cblx0fVxuXG5cdGhhbmRsZVVwZGF0ZShldnQpIHtcblx0XHR0aGlzLnNldFN0YXRlKHsgdG9waWM6IGV2dC50YXJnZXQudmFsdWUgfSk7XG5cdH1cblxuXHRoYW5kbGVVcGRhdGVBdXRob3IoZXZ0KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGF1dGhvcjogZXZ0LnRhcmdldC52YWx1ZSB9KTtcblx0fVxuXG5cdGFzeW5jIGhhbmRsZVNlYXJjaChldnQpIHtcblx0XHQvLyBjb25zdCB1c2VyID0gYXdhaXQgZ2V0TmV3cygpO1xuXHRcdC8vIGNvbnNvbGUubG9nKHVzZXIpO1xuXHRcdHZhciBzdG9yeTtcblx0XHRpZiAodGhpcy5zdGF0ZS5hdXRob3IgPT09IFwiXCIpIHtcblx0XHRcdHN0b3J5ID0gYXdhaXQgZ2V0U3RvcnkodGhpcy5zdGF0ZS50b3BpYyxcIjJmNTBiNDM1NjM1ZDRiOGQ5YmU0M2YwNGRhNTRiOWVmXCIpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50b3BpYyA9PT0gXCJcIikge1xuXHRcdFx0c3RvcnkgPSBhd2FpdCBnZXRBdXRob3JTdG9yeSh0aGlzLnN0YXRlLmF1dGhvcixcIjJmNTBiNDM1NjM1ZDRiOGQ5YmU0M2YwNGRhNTRiOWVmXCIpO1xuXHRcdH0gXG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRuZXdzOiBbXVxuXHRcdFx0fSlcblx0XHRcdGlmIChzdG9yeS5hcnRpY2xlcy50b3RhbFJlc3VsdHMhPT0wKSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdGV4aXN0czogdHJ1ZVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhzdG9yeSk7XG5cblx0XHRcdFx0Ly8gdGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdC8vIFx0bmV3c0F1dGhvcjogc3RvcnkuYXJ0aWNsZXNbMF0uYXV0aG9yXG5cdFx0XHRcdC8vIH0pXG5cblx0XHRcdFx0dmFyIGF1dGhvciA9IFwiXCI7XG5cblx0XHRcdFx0Ly8gbmV3c0F1dGhvciBzdG9yeS5hcnRpY2xlc1swXS5hdXRob3Jcblx0XHRcdFx0Zm9yICh2YXIgaT0wOyBpPHN0b3J5LmFydGljbGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codGhpcy5zdGF0ZS5uZXdzQXV0aG9yKTtcblx0XHRcdFx0XHRhdXRob3IgPSBzdG9yeS5hcnRpY2xlc1tpXS5zb3VyY2UuaWQgKyBcIiwgXCIgKyBzdG9yeS5hcnRpY2xlc1tpXS5hdXRob3IgKyBcIiwgXCIgKyBzdG9yeS5hcnRpY2xlc1tpXS5jb250ZW50O1xuXHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGF1dGhvci5zcGxpdCgnXFxuJykubWFwKHN0ciA9PiA8cD57c3RyfTwvcD4pKTtcblx0XHRcdFx0XHRcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcblx0XHRcdFx0XHRcdG5ld3M6IFsuLi5wcmV2aW91c1N0YXRlLm5ld3MsIGF1dGhvci5zcGxpdCgnXFxuJykubWFwKHN0ciA9PiA8cD57c3RyfTwvcD4pXVxuXHRcdFx0XHRcdH0pKVxuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdH1cblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PHA+VG9waWM6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRvcGljfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVVcGRhdGUuYmluZCh0aGlzKX0gLz48L3A+XG5cdFx0XHQ8cD5BdXRob3I6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLmF1dGhvcn0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXBkYXRlQXV0aG9yLmJpbmQodGhpcyl9IC8+PC9wPlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyl9PlNlYXJjaDwvYnV0dG9uPlxuXHRcdFx0XHQ8dGFibGUgYWxpZ249XCJyaWdodFwiPlxuXHRcdFx0XHRcdDx0ZD57dGhpcy5zdGF0ZS5leGlzdHMgPyAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5ld3NUYWJsZX0+XG5cdFx0XHRcdFx0XHRcdDxwPnt0aGlzLnN0YXRlLm5ld3N9PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdDxwPjwvcD5cblx0XHRcdFx0XHQpfTwvdGQ+XG5cdFx0XHRcdDwvdGFibGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});