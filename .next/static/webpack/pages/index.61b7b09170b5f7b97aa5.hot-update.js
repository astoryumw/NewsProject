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

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n__webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n\nfunction getAuthorNews(q, author, apiKey) {\n  return fetch(\"https://newsapi.org/v2/everything?q=\".concat(q, \"&author=\").concat(author, \"&apiKey=\").concat(apiKey)).then(function (resp) {\n    return resp.json();\n  });\n}\n\nfunction handleError(error) {\n  console.warn(error);\n  return null;\n}\n\nmodule.exports = {\n  getAuthorStory: function getAuthorStory(q, author, apiKey) {\n    return getAuthorNews(q, author, apiKey)[\"catch\"](handleError);\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxBdXRob3IuanM/YjMyNCJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiZ2V0QXV0aG9yTmV3cyIsInEiLCJhdXRob3IiLCJhcGlLZXkiLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwianNvbiIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwid2FybiIsIm1vZHVsZSIsImV4cG9ydHMiLCJnZXRBdXRob3JTdG9yeSJdLCJtYXBwaW5ncyI6IjtBQUFBQSxtQkFBTyxDQUFDLGlGQUFELENBQVA7O0FBRUEsU0FBU0MsYUFBVCxDQUF1QkMsQ0FBdkIsRUFBeUJDLE1BQXpCLEVBQWdDQyxNQUFoQyxFQUF3QztBQUN2QyxTQUFPQyxLQUFLLCtDQUF3Q0gsQ0FBeEMscUJBQW9EQyxNQUFwRCxxQkFBcUVDLE1BQXJFLEVBQUwsQ0FBb0ZFLElBQXBGLENBQXlGLFVBQVNDLElBQVQsRUFBZTtBQUM5RyxXQUFPQSxJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNBLEdBRk0sQ0FBUDtBQUdBOztBQUVELFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzNCQyxTQUFPLENBQUNDLElBQVIsQ0FBYUYsS0FBYjtBQUNBLFNBQU8sSUFBUDtBQUNBOztBQUVERyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDaEJDLGdCQUFjLEVBQUUsd0JBQVNiLENBQVQsRUFBV0MsTUFBWCxFQUFrQkMsTUFBbEIsRUFBMEI7QUFDekMsV0FBT0gsYUFBYSxDQUFDQyxDQUFELEVBQUdDLE1BQUgsRUFBVUMsTUFBVixDQUFiLFVBQXFDSyxXQUFyQyxDQUFQO0FBQ0E7QUFIZSxDQUFqQiIsImZpbGUiOiIuL2xpYi91dGlsQXV0aG9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIilcblxuZnVuY3Rpb24gZ2V0QXV0aG9yTmV3cyhxLGF1dGhvcixhcGlLZXkpIHtcblx0cmV0dXJuIGZldGNoKGBodHRwczovL25ld3NhcGkub3JnL3YyL2V2ZXJ5dGhpbmc/cT0ke3F9JmF1dGhvcj0ke2F1dGhvcn0mYXBpS2V5PSR7YXBpS2V5fWApLnRoZW4oZnVuY3Rpb24ocmVzcCkge1xuXHRcdHJldHVybiByZXNwLmpzb24oKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yKSB7XG5cdGNvbnNvbGUud2FybihlcnJvcik7XG5cdHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0Z2V0QXV0aG9yU3Rvcnk6IGZ1bmN0aW9uKHEsYXV0aG9yLGFwaUtleSkge1xuXHRcdHJldHVybiBnZXRBdXRob3JOZXdzKHEsYXV0aG9yLGFwaUtleSkuY2F0Y2goaGFuZGxlRXJyb3IpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/utilAuthor.js\n");

/***/ })

});