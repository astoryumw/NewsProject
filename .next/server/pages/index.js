/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("__webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\nfunction getNews(q, apiKey) {\n  return fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=${apiKey}`).then(function (resp) {\n    return resp.json();\n  });\n}\n\nfunction handleError(error) {\n  console.warn(error);\n  return null;\n}\n\nmodule.exports = {\n  getStory: function (q, apiKey) {\n    return getNews(q, apiKey).catch(handleError);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXdzSWRlYS8uL2xpYi91dGlsLmpzP2EzNTEiXSwibmFtZXMiOlsicmVxdWlyZSIsImdldE5ld3MiLCJxIiwiYXBpS2V5IiwiZmV0Y2giLCJ0aGVuIiwicmVzcCIsImpzb24iLCJoYW5kbGVFcnJvciIsImVycm9yIiwiY29uc29sZSIsIndhcm4iLCJtb2R1bGUiLCJleHBvcnRzIiwiZ2V0U3RvcnkiLCJjYXRjaCJdLCJtYXBwaW5ncyI6IkFBQUFBLG1CQUFPLENBQUMsMENBQUQsQ0FBUDs7QUFFQSxTQUFTQyxPQUFULENBQWlCQyxDQUFqQixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDMUIsU0FBT0MsS0FBSyxDQUFFLHVDQUFzQ0YsQ0FBRSxXQUFVQyxNQUFPLEVBQTNELENBQUwsQ0FBbUVFLElBQW5FLENBQXdFLFVBQVNDLElBQVQsRUFBZTtBQUM3RixXQUFPQSxJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNBLEdBRk0sQ0FBUDtBQUdBOztBQUVELFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzNCQyxTQUFPLENBQUNDLElBQVIsQ0FBYUYsS0FBYjtBQUNBLFNBQU8sSUFBUDtBQUNBOztBQUVERyxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDaEJDLFVBQVEsRUFBRSxVQUFTWixDQUFULEVBQVdDLE1BQVgsRUFBbUI7QUFDNUIsV0FBT0YsT0FBTyxDQUFDQyxDQUFELEVBQUdDLE1BQUgsQ0FBUCxDQUFrQlksS0FBbEIsQ0FBd0JQLFdBQXhCLENBQVA7QUFDQTtBQUhlLENBQWpCIiwiZmlsZSI6Ii4vbGliL3V0aWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKVxuXG5mdW5jdGlvbiBnZXROZXdzKHEsYXBpS2V5KSB7XG5cdHJldHVybiBmZXRjaChgaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi9ldmVyeXRoaW5nP3E9JHtxfSZhcGlLZXk9JHthcGlLZXl9YCkudGhlbihmdW5jdGlvbihyZXNwKSB7XG5cdFx0cmV0dXJuIHJlc3AuanNvbigpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IpIHtcblx0Y29uc29sZS53YXJuKGVycm9yKTtcblx0cmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRnZXRTdG9yeTogZnVuY3Rpb24ocSxhcGlLZXkpIHtcblx0XHRyZXR1cm4gZ2V0TmV3cyhxLGFwaUtleSkuY2F0Y2goaGFuZGxlRXJyb3IpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/util.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/util.js */ \"./lib/util.js\");\n/* harmony import */ var _lib_util_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_util_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles.module.css */ \"./styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/Austin/NewsIdea/pages/index.js\";\n\n\n\nclass Home extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n  constructor(props) {\n    super(props);\n    this.state = {\n      news: [],\n      topic: \"\",\n      exists: false\n    };\n  }\n\n  handleUpdate(evt) {\n    this.setState({\n      topic: evt.target.value\n    });\n  }\n\n  async handleSearch(evt) {\n    // const user = await getNews();\n    // console.log(user);\n    const story = await (0,_lib_util_js__WEBPACK_IMPORTED_MODULE_2__.getStory)(this.state.topic, \"2f50b435635d4b8d9be43f04da54b9ef\");\n    this.setState({\n      news: []\n    });\n\n    if (story.articles.totalResults !== 0) {\n      this.setState({\n        exists: true\n      });\n      console.log(story); // this.setState({\n      // \tnewsAuthor: story.articles[0].author\n      // })\n\n      var author = \"\"; // newsAuthor story.articles[0].author\n\n      for (var i = 0; i < story.articles.length; i++) {\n        // console.log(this.state.newsAuthor);\n        author = story.articles[i].source.id + \", \" + story.articles[i].author + \", \" + story.articles[i].content; // console.log(author.split('\\n').map(str => <p>{str}</p>));\n\n        this.setState(previousState => ({\n          news: [...previousState.news, author.split('\\n').map(str => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: str\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 66\n          }, this))]\n        }));\n      }\n    }\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: [\"Topic: \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n          type: \"text\",\n          value: this.state.topic,\n          onChange: this.handleUpdate.bind(this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 14\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 4\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: this.handleSearch.bind(this),\n        children: \"Search\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        align: \"right\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n          children: this.state.exists ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_css__WEBPACK_IMPORTED_MODULE_3___default().newsTable),\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: this.state.news\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 61,\n              columnNumber: 8\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 7\n          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 4\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXdzSWRlYS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwibmFtZXMiOlsiSG9tZSIsIlJlYWN0IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInN0YXRlIiwibmV3cyIsInRvcGljIiwiZXhpc3RzIiwiaGFuZGxlVXBkYXRlIiwiZXZ0Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVNlYXJjaCIsInN0b3J5IiwiZ2V0U3RvcnkiLCJhcnRpY2xlcyIsInRvdGFsUmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJhdXRob3IiLCJpIiwibGVuZ3RoIiwic291cmNlIiwiaWQiLCJjb250ZW50IiwicHJldmlvdXNTdGF0ZSIsInNwbGl0IiwibWFwIiwic3RyIiwicmVuZGVyIiwiYmluZCIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxNQUFNQSxJQUFOLFNBQW1CQyx3REFBbkIsQ0FBbUM7QUFDakRDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2xCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWkMsVUFBSSxFQUFFLEVBRE07QUFFWkMsV0FBSyxFQUFFLEVBRks7QUFHWkMsWUFBTSxFQUFFO0FBSEksS0FBYjtBQUtBOztBQUVEQyxjQUFZLENBQUNDLEdBQUQsRUFBTTtBQUNqQixTQUFLQyxRQUFMLENBQWM7QUFBRUosV0FBSyxFQUFFRyxHQUFHLENBQUNFLE1BQUosQ0FBV0M7QUFBcEIsS0FBZDtBQUNBOztBQUNELFFBQU1DLFlBQU4sQ0FBbUJKLEdBQW5CLEVBQXdCO0FBQ3ZCO0FBQ0E7QUFDQSxVQUFNSyxLQUFLLEdBQUcsTUFBTUMsc0RBQVEsQ0FBQyxLQUFLWCxLQUFMLENBQVdFLEtBQVosRUFBa0Isa0NBQWxCLENBQTVCO0FBQ0EsU0FBS0ksUUFBTCxDQUFjO0FBQ2JMLFVBQUksRUFBRTtBQURPLEtBQWQ7O0FBR0EsUUFBSVMsS0FBSyxDQUFDRSxRQUFOLENBQWVDLFlBQWYsS0FBOEIsQ0FBbEMsRUFBcUM7QUFDcEMsV0FBS1AsUUFBTCxDQUFjO0FBQ2JILGNBQU0sRUFBRTtBQURLLE9BQWQ7QUFHQVcsYUFBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVosRUFKb0MsQ0FNcEM7QUFDQTtBQUNBOztBQUVBLFVBQUlNLE1BQU0sR0FBRyxFQUFiLENBVm9DLENBWXBDOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDUCxLQUFLLENBQUNFLFFBQU4sQ0FBZU0sTUFBL0IsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDM0M7QUFDQUQsY0FBTSxHQUFHTixLQUFLLENBQUNFLFFBQU4sQ0FBZUssQ0FBZixFQUFrQkUsTUFBbEIsQ0FBeUJDLEVBQXpCLEdBQThCLElBQTlCLEdBQXFDVixLQUFLLENBQUNFLFFBQU4sQ0FBZUssQ0FBZixFQUFrQkQsTUFBdkQsR0FBZ0UsSUFBaEUsR0FBdUVOLEtBQUssQ0FBQ0UsUUFBTixDQUFlSyxDQUFmLEVBQWtCSSxPQUFsRyxDQUYyQyxDQUczQzs7QUFFQSxhQUFLZixRQUFMLENBQWNnQixhQUFhLEtBQUs7QUFDL0JyQixjQUFJLEVBQUUsQ0FBQyxHQUFHcUIsYUFBYSxDQUFDckIsSUFBbEIsRUFBd0JlLE1BQU0sQ0FBQ08sS0FBUCxDQUFhLElBQWIsRUFBbUJDLEdBQW5CLENBQXVCQyxHQUFHLGlCQUFJO0FBQUEsc0JBQUlBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBOUIsQ0FBeEI7QUFEeUIsU0FBTCxDQUEzQjtBQUdBO0FBR0Q7QUFFRDs7QUFFREMsUUFBTSxHQUFHO0FBQ1Isd0JBQ0M7QUFBQSw4QkFDQTtBQUFBLDJDQUFVO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsZUFBSyxFQUFFLEtBQUsxQixLQUFMLENBQVdFLEtBQXJDO0FBQTRDLGtCQUFRLEVBQUUsS0FBS0UsWUFBTCxDQUFrQnVCLElBQWxCLENBQXVCLElBQXZCO0FBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREEsZUFFQztBQUFRLGVBQU8sRUFBRSxLQUFLbEIsWUFBTCxDQUFrQmtCLElBQWxCLENBQXVCLElBQXZCLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQsZUFHQztBQUFPLGFBQUssRUFBQyxPQUFiO0FBQUEsK0JBQ0M7QUFBQSxvQkFBSyxLQUFLM0IsS0FBTCxDQUFXRyxNQUFYLGdCQUNKO0FBQUsscUJBQVMsRUFBRXlCLHFFQUFoQjtBQUFBLG1DQUNDO0FBQUEsd0JBQUksS0FBSzVCLEtBQUwsQ0FBV0M7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESSxnQkFLSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERDtBQWVBOztBQWhFZ0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRTdG9yeSB9IGZyb20gXCIuLi9saWIvdXRpbC5qc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRuZXdzOiBbXSxcblx0XHRcdHRvcGljOiBcIlwiLFxuXHRcdFx0ZXhpc3RzOiBmYWxzZSxcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVVcGRhdGUoZXZ0KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHRvcGljOiBldnQudGFyZ2V0LnZhbHVlIH0pO1xuXHR9XG5cdGFzeW5jIGhhbmRsZVNlYXJjaChldnQpIHtcblx0XHQvLyBjb25zdCB1c2VyID0gYXdhaXQgZ2V0TmV3cygpO1xuXHRcdC8vIGNvbnNvbGUubG9nKHVzZXIpO1xuXHRcdGNvbnN0IHN0b3J5ID0gYXdhaXQgZ2V0U3RvcnkodGhpcy5zdGF0ZS50b3BpYyxcIjJmNTBiNDM1NjM1ZDRiOGQ5YmU0M2YwNGRhNTRiOWVmXCIpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0bmV3czogW11cblx0XHR9KVxuXHRcdGlmIChzdG9yeS5hcnRpY2xlcy50b3RhbFJlc3VsdHMhPT0wKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0ZXhpc3RzOiB0cnVlXG5cdFx0XHR9KVxuXHRcdFx0Y29uc29sZS5sb2coc3RvcnkpO1xuXG5cdFx0XHQvLyB0aGlzLnNldFN0YXRlKHtcblx0XHRcdC8vIFx0bmV3c0F1dGhvcjogc3RvcnkuYXJ0aWNsZXNbMF0uYXV0aG9yXG5cdFx0XHQvLyB9KVxuXG5cdFx0XHR2YXIgYXV0aG9yID0gXCJcIjtcblxuXHRcdFx0Ly8gbmV3c0F1dGhvciBzdG9yeS5hcnRpY2xlc1swXS5hdXRob3Jcblx0XHRcdGZvciAodmFyIGk9MDsgaTxzdG9yeS5hcnRpY2xlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLm5ld3NBdXRob3IpO1xuXHRcdFx0XHRhdXRob3IgPSBzdG9yeS5hcnRpY2xlc1tpXS5zb3VyY2UuaWQgKyBcIiwgXCIgKyBzdG9yeS5hcnRpY2xlc1tpXS5hdXRob3IgKyBcIiwgXCIgKyBzdG9yeS5hcnRpY2xlc1tpXS5jb250ZW50O1xuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyhhdXRob3Iuc3BsaXQoJ1xcbicpLm1hcChzdHIgPT4gPHA+e3N0cn08L3A+KSk7XG5cdFx0XHRcdFxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHByZXZpb3VzU3RhdGUgPT4gKHtcblx0XHRcdFx0XHRuZXdzOiBbLi4ucHJldmlvdXNTdGF0ZS5uZXdzLCBhdXRob3Iuc3BsaXQoJ1xcbicpLm1hcChzdHIgPT4gPHA+e3N0cn08L3A+KV1cblx0XHRcdFx0fSkpXG5cdFx0XHR9XG5cdFx0XHRcblxuXHRcdH1cblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0PHA+VG9waWM6IDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLnRvcGljfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVVcGRhdGUuYmluZCh0aGlzKX0gLz48L3A+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX0+U2VhcmNoPC9idXR0b24+XG5cdFx0XHRcdDx0YWJsZSBhbGlnbj1cInJpZ2h0XCI+XG5cdFx0XHRcdFx0PHRkPnt0aGlzLnN0YXRlLmV4aXN0cyA/IChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3c1RhYmxlfT5cblx0XHRcdFx0XHRcdFx0PHA+e3RoaXMuc3RhdGUubmV3c308L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0PHA+PC9wPlxuXHRcdFx0XHRcdCl9PC90ZD5cblx0XHRcdFx0PC90YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles.module.css":
/*!***************************!*\
  !*** ./styles.module.css ***!
  \***************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"newsTable\": \"styles_newsTable___Ctb7\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9OZXdzSWRlYS8uL3N0eWxlcy5tb2R1bGUuY3NzPzMzZDMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5ld3NUYWJsZVwiOiBcInN0eWxlc19uZXdzVGFibGVfX19DdGI3XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles.module.css\n");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("isomorphic-fetch");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();