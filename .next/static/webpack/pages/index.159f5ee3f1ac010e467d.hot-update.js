/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/utilLanguage.js":
/*!*****************************!*\
  !*** ./lib/utilLanguage.js ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n__webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n\nfunction getLanguageNews(q, language, apiKey) {\n  return fetch(\"https://newsapi.org/v2/everything?q=\".concat(q, \"&language=\").concat(language, \"&apiKey=\").concat(apiKey)).then(function (resp) {\n    return resp.json();\n  });\n}\n\nfunction handleError(error) {\n  console.warn(error);\n  return null;\n}\n\nmodule.exports = {\n  getLanguageStory: function getLanguageStory(q, language, apiKey) {\n    return getLanguageNews(q, language, apiKey)[\"catch\"](handleError);\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxMYW5ndWFnZS5qcz8xMjRhIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJnZXRMYW5ndWFnZU5ld3MiLCJxIiwibGFuZ3VhZ2UiLCJhcGlLZXkiLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwianNvbiIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRMYW5ndWFnZVN0b3J5Il0sIm1hcHBpbmdzIjoiO0FBQUFBLG1CQUFPLENBQUMsaUZBQUQsQ0FBUDs7QUFFQSxTQUFTQyxlQUFULENBQXlCQyxDQUF6QixFQUEyQkMsUUFBM0IsRUFBb0NDLE1BQXBDLEVBQTRDO0FBQzNDLFNBQU9DLEtBQUssK0NBQXdDSCxDQUF4Qyx1QkFBc0RDLFFBQXRELHFCQUF5RUMsTUFBekUsRUFBTCxDQUF3RkUsSUFBeEYsQ0FBNkYsVUFBU0MsSUFBVCxFQUFlO0FBQ2xILFdBQU9BLElBQUksQ0FBQ0MsSUFBTCxFQUFQO0FBQ0EsR0FGTSxDQUFQO0FBR0E7O0FBRUQsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDM0JDLFNBQU8sQ0FBQ0MsSUFBUixDQUFhRixLQUFiO0FBQ0EsU0FBTyxJQUFQO0FBQ0E7O0FBRURHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNoQkMsa0JBQWdCLEVBQUUsMEJBQVNiLENBQVQsRUFBV0MsUUFBWCxFQUFvQkMsTUFBcEIsRUFBNEI7QUFDN0MsV0FBT0gsZUFBZSxDQUFDQyxDQUFELEVBQUdDLFFBQUgsRUFBWUMsTUFBWixDQUFmLFVBQXlDSyxXQUF6QyxDQUFQO0FBQ0E7QUFIZSxDQUFqQiIsImZpbGUiOiIuL2xpYi91dGlsTGFuZ3VhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKVxuXG5mdW5jdGlvbiBnZXRMYW5ndWFnZU5ld3MocSxsYW5ndWFnZSxhcGlLZXkpIHtcblx0cmV0dXJuIGZldGNoKGBodHRwczovL25ld3NhcGkub3JnL3YyL2V2ZXJ5dGhpbmc/cT0ke3F9Jmxhbmd1YWdlPSR7bGFuZ3VhZ2V9JmFwaUtleT0ke2FwaUtleX1gKS50aGVuKGZ1bmN0aW9uKHJlc3ApIHtcblx0XHRyZXR1cm4gcmVzcC5qc29uKCk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvcikge1xuXHRjb25zb2xlLndhcm4oZXJyb3IpO1xuXHRyZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGdldExhbmd1YWdlU3Rvcnk6IGZ1bmN0aW9uKHEsbGFuZ3VhZ2UsYXBpS2V5KSB7XG5cdFx0cmV0dXJuIGdldExhbmd1YWdlTmV3cyhxLGxhbmd1YWdlLGFwaUtleSkuY2F0Y2goaGFuZGxlRXJyb3IpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/utilLanguage.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_Austin_NewsIdea_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _lib_util_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/util.js */ \"./lib/util.js\");\n/* harmony import */ var _lib_util_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_lib_util_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _lib_utilLanguage_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/utilLanguage.js */ \"./lib/utilLanguage.js\");\n/* harmony import */ var _lib_utilLanguage_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lib_utilLanguage_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles.module.css */ \"./styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_12__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Austin/NewsIdea/pages/index.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Home = /*#__PURE__*/function (_React$Component) {\n  (0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(Home, _React$Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _this;\n\n    (0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, Home);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      news: [],\n      topic: \"\",\n      language: \"\",\n      exists: false\n    };\n    return _this;\n  }\n\n  (0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(Home, [{\n    key: \"handleUpdate\",\n    value: function handleUpdate(evt) {\n      this.setState({\n        topic: evt.target.value\n      });\n    }\n  }, {\n    key: \"handleUpdateLanguage\",\n    value: function handleUpdateLanguage(evt) {\n      this.setState({\n        language: evt.target.value\n      });\n    }\n  }, {\n    key: \"handleSearch\",\n    value: function () {\n      var _handleSearch = (0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_Users_Austin_NewsIdea_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(evt) {\n        var _this2 = this;\n\n        var story, author, i;\n        return _Users_Austin_NewsIdea_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(this.state.author === \"\")) {\n                  _context.next = 7;\n                  break;\n                }\n\n                _context.next = 3;\n                return (0,_lib_util_js__WEBPACK_IMPORTED_MODULE_10__.getStory)(this.state.topic, \"2f50b435635d4b8d9be43f04da54b9ef\");\n\n              case 3:\n                story = _context.sent;\n                console.log(story);\n                _context.next = 12;\n                break;\n\n              case 7:\n                if (!(this.state.topic === \"\")) {\n                  _context.next = 12;\n                  break;\n                }\n\n                _context.next = 10;\n                return getAuthorStory(this.state.topic, this.state.author, \"2f50b435635d4b8d9be43f04da54b9ef\");\n\n              case 10:\n                story = _context.sent;\n                console.log(story);\n\n              case 12:\n                try {\n                  this.setState({\n                    news: []\n                  });\n\n                  if (story.articles.totalResults !== 0) {\n                    this.setState({\n                      exists: true\n                    }); // console.log(story);\n                    // this.setState({\n                    // \tnewsAuthor: story.articles[0].author\n                    // })\n\n                    author = \"\"; // newsAuthor story.articles[0].author\n\n                    for (i = 0; i < story.articles.length; i++) {\n                      // console.log(this.state.newsAuthor);\n                      author = story.articles[i].source.id + \", \" + story.articles[i].author + \", \" + story.articles[i].content; // console.log(author.split('\\n').map(str => <p>{str}</p>));\n\n                      this.setState(function (previousState) {\n                        return {\n                          news: [].concat((0,_Users_Austin_NewsIdea_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__.default)(previousState.news), [author.split('\\n').map(function (str) {\n                            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                              children: str\n                            }, void 0, false, {\n                              fileName: _jsxFileName,\n                              lineNumber: 59,\n                              columnNumber: 67\n                            }, _this2);\n                          })])\n                        };\n                      });\n                    }\n                  }\n                } catch (err) {\n                  console.log(err);\n                }\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function handleSearch(_x) {\n        return _handleSearch.apply(this, arguments);\n      }\n\n      return handleSearch;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          children: [\"Topic: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"text\",\n            value: this.state.topic,\n            onChange: this.handleUpdate.bind(this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 14\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 4\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          children: [\"Language: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"text\",\n            value: this.state.language,\n            onChange: this.handleUpdateLanguage.bind(this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 17\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 4\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: this.handleSearch.bind(this),\n          children: \"Search\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 5\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"table\", {\n          align: \"right\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n            children: this.state.exists ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n              className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_12___default().newsTable),\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: this.state.news\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 80,\n                columnNumber: 8\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 7\n            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 7\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 6\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 4\n      }, this);\n    }\n  }]);\n\n  return Home;\n}((react__WEBPACK_IMPORTED_MODULE_9___default().Component));\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJzdGF0ZSIsIm5ld3MiLCJ0b3BpYyIsImxhbmd1YWdlIiwiZXhpc3RzIiwiZXZ0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImF1dGhvciIsImdldFN0b3J5Iiwic3RvcnkiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXV0aG9yU3RvcnkiLCJhcnRpY2xlcyIsInRvdGFsUmVzdWx0cyIsImkiLCJsZW5ndGgiLCJzb3VyY2UiLCJpZCIsImNvbnRlbnQiLCJwcmV2aW91c1N0YXRlIiwic3BsaXQiLCJtYXAiLCJzdHIiLCJlcnIiLCJoYW5kbGVVcGRhdGUiLCJiaW5kIiwiaGFuZGxlVXBkYXRlTGFuZ3VhZ2UiLCJoYW5kbGVTZWFyY2giLCJzdHlsZXMiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxJOzs7OztBQUNwQixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNsQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNaQyxVQUFJLEVBQUUsRUFETTtBQUVaQyxXQUFLLEVBQUUsRUFGSztBQUdaQyxjQUFRLEVBQUUsRUFIRTtBQUlaQyxZQUFNLEVBQUU7QUFKSSxLQUFiO0FBRmtCO0FBUWxCOzs7O2lDQUVZQyxHLEVBQUs7QUFDakIsV0FBS0MsUUFBTCxDQUFjO0FBQUVKLGFBQUssRUFBRUcsR0FBRyxDQUFDRSxNQUFKLENBQVdDO0FBQXBCLE9BQWQ7QUFDQTs7O3lDQUVvQkgsRyxFQUFLO0FBQ3pCLFdBQUtDLFFBQUwsQ0FBYztBQUFFSCxnQkFBUSxFQUFFRSxHQUFHLENBQUNFLE1BQUosQ0FBV0M7QUFBdkIsT0FBZDtBQUNBOzs7OzJSQUVrQkgsRzs7Ozs7Ozs7c0JBSWQsS0FBS0wsS0FBTCxDQUFX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O0FBQUEsMEJBQUksS0FBSy9CLEtBQUwsQ0FBV0M7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESSxnQkFLSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQ7QUFnQkE7Ozs7RUFsRmdDK0Isd0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRTdG9yeSB9IGZyb20gXCIuLi9saWIvdXRpbC5qc1wiO1xuaW1wb3J0IHsgZ2V0TGFuZ3VhZ2VTdG9yeSB9IGZyb20gXCIuLi9saWIvdXRpbExhbmd1YWdlLmpzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG5ld3M6IFtdLFxuXHRcdFx0dG9waWM6IFwiXCIsXG5cdFx0XHRsYW5ndWFnZTogXCJcIixcblx0XHRcdGV4aXN0czogZmFsc2UsXG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlVXBkYXRlKGV2dCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyB0b3BpYzogZXZ0LnRhcmdldC52YWx1ZSB9KTtcblx0fVxuXG5cdGhhbmRsZVVwZGF0ZUxhbmd1YWdlKGV2dCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoeyBsYW5ndWFnZTogZXZ0LnRhcmdldC52YWx1ZSB9KTtcblx0fVxuXG5cdGFzeW5jIGhhbmRsZVNlYXJjaChldnQpIHtcblx0XHQvLyBjb25zdCB1c2VyID0gYXdhaXQgZ2V0TmV3cygpO1xuXHRcdC8vIGNvbnNvbGUubG9nKHVzZXIpO1xuXHRcdHZhciBzdG9yeTtcblx0XHRpZiAodGhpcy5zdGF0ZS5hdXRob3IgPT09IFwiXCIpIHtcblx0XHRcdHN0b3J5ID0gYXdhaXQgZ2V0U3RvcnkodGhpcy5zdGF0ZS50b3BpYyxcIjJmNTBiNDM1NjM1ZDRiOGQ5YmU0M2YwNGRhNTRiOWVmXCIpO1xuXHRcdFx0Y29uc29sZS5sb2coc3RvcnkpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZS50b3BpYyA9PT0gXCJcIikge1xuXHRcdFx0c3RvcnkgPSBhd2FpdCBnZXRBdXRob3JTdG9yeSh0aGlzLnN0YXRlLnRvcGljLHRoaXMuc3RhdGUuYXV0aG9yLFwiMmY1MGI0MzU2MzVkNGI4ZDliZTQzZjA0ZGE1NGI5ZWZcIik7XG5cdFx0XHRjb25zb2xlLmxvZyhzdG9yeSk7XG5cdFx0fSBcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdG5ld3M6IFtdXG5cdFx0XHR9KVxuXHRcdFx0aWYgKHN0b3J5LmFydGljbGVzLnRvdGFsUmVzdWx0cyE9PTApIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0ZXhpc3RzOiB0cnVlXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHN0b3J5KTtcblxuXHRcdFx0XHQvLyB0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0Ly8gXHRuZXdzQXV0aG9yOiBzdG9yeS5hcnRpY2xlc1swXS5hdXRob3Jcblx0XHRcdFx0Ly8gfSlcblxuXHRcdFx0XHR2YXIgYXV0aG9yID0gXCJcIjtcblxuXHRcdFx0XHQvLyBuZXdzQXV0aG9yIHN0b3J5LmFydGljbGVzWzBdLmF1dGhvclxuXHRcdFx0XHRmb3IgKHZhciBpPTA7IGk8c3RvcnkuYXJ0aWNsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5ld3NBdXRob3IpO1xuXHRcdFx0XHRcdGF1dGhvciA9IHN0b3J5LmFydGljbGVzW2ldLnNvdXJjZS5pZCArIFwiLCBcIiArIHN0b3J5LmFydGljbGVzW2ldLmF1dGhvciArIFwiLCBcIiArIHN0b3J5LmFydGljbGVzW2ldLmNvbnRlbnQ7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coYXV0aG9yLnNwbGl0KCdcXG4nKS5tYXAoc3RyID0+IDxwPntzdHJ9PC9wPikpO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUocHJldmlvdXNTdGF0ZSA9PiAoe1xuXHRcdFx0XHRcdFx0bmV3czogWy4uLnByZXZpb3VzU3RhdGUubmV3cywgYXV0aG9yLnNwbGl0KCdcXG4nKS5tYXAoc3RyID0+IDxwPntzdHJ9PC9wPildXG5cdFx0XHRcdFx0fSkpXG5cdFx0XHRcdH1cblx0XHRcdFx0XG5cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0fVxuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHQ8cD5Ub3BpYzogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUudG9waWN9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVwZGF0ZS5iaW5kKHRoaXMpfSAvPjwvcD5cblx0XHRcdDxwPkxhbmd1YWdlOiA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5sYW5ndWFnZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXBkYXRlTGFuZ3VhZ2UuYmluZCh0aGlzKX0gLz48L3A+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX0+U2VhcmNoPC9idXR0b24+XG5cdFx0XHRcdDx0YWJsZSBhbGlnbj1cInJpZ2h0XCI+XG5cdFx0XHRcdFx0PHRkPnt0aGlzLnN0YXRlLmV4aXN0cyA/IChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3c1RhYmxlfT5cblx0XHRcdFx0XHRcdFx0PHA+e3RoaXMuc3RhdGUubmV3c308L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PHA+PC9wPlxuXHRcdFx0XHRcdCl9PC90ZD5cblx0XHRcdFx0PC90YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});