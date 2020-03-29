(this["webpackJsonpcontest-arena"] = this["webpackJsonpcontest-arena"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);"]);
// Module
exports.push([module.i, "/* Global Styles */\n:root {\n  --primary-color:#185461;\n  --dark-color: #053945;\n  --light-color: #f4f4f4;\n  --danger-color: #dc3545;\n  --success-color: #28a745;\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: 'Roboto', sans-serif !important;\n  line-height: 1.6 ;\n  background-color: #fff;\n  color: #333;\n}\nh1{\n  font-weight: 450;\n  font-size: 2rem;\n}\n\na {\n  color: var(--primary-color);\n  text-decoration: none;\n}\n\na:hover {\n  color: #666;\n}\n\nul {\n  list-style: none;\n}\n\nimg {\n  width: 100%;\n}\n\n/* Utilities */\n.container {\n  max-width: 1100px;\n  margin: auto;\n  overflow: hidden;\n  padding: 0 2rem;\n}\n\n/* Text Styles*/\n.x-large {\n  font-size: 4rem;\n  line-height: 1.2;\n  margin-bottom: 1rem;\n}\n\n.large {\n  font-size: 3rem;\n  line-height: 1.2;\n  margin-bottom: 1rem;\n}\n\n.lead {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-primary {\n  color: var(--primary-color);\n}\n\n.text-dark {\n  color: var(--dark-color);\n}\n\n.text-success {\n  color: var(--success-color);\n}\n\n.text-danger {\n  color: var(--danger-color);\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-left {\n  text-align: left;\n}\n\n/* Center All */\n.all-center {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: auto;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n/* Cards */\n.card {\n  padding: 1rem;\n  border: #ccc 1px dotted;\n  margin: 0.7rem 0;\n}\n.carduser {\n  padding: 4px;\n  border: #ccc 1px dotted;\n  margin: 7px auto;\n}\n\n/* List */\n.list {\n  margin: 0.5rem 0;\n}\n\n.list li {\n  padding-bottom: 0.3rem;\n}\n\n/* Padding */\n.p {\n  padding: 0.5rem;\n}\n.p-1 {\n  padding: 1rem;\n}\n.p-2 {\n  padding: 2rem;\n}\n.p-3 {\n  padding: 3rem;\n}\n.py {\n  padding: 0.5rem 0;\n}\n.py-1 {\n  padding: 1rem 0;\n}\n.py-2 {\n  padding: 2rem 0;\n}\n.py-3 {\n  padding: 3rem 0;\n}\n\n/* Margin */\n.m {\n  margin: 0.5rem;\n}\n.m-1 {\n  margin: 1rem;\n}\n.m-2 {\n  margin: 2rem;\n}\n.m-3 {\n  margin: 3rem;\n}\n.my {\n  margin: 0.5rem 0;\n}\n.my-1 {\n  margin: 1rem 0;\n}\n.my-2 {\n  margin: 2rem 0;\n}\n.my-3 {\n  margin: 3rem 0;\n}\n\n/* Grid */\n.grid-2 {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 1rem;\n}\n\n.grid-3 {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 1rem;\n}\n\n.grid-4 {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 1rem;\n}\n\n.btn {\n  display: inline-block;\n  background: var(--light-color);\n  color: #333;\n  padding: 0.3rem 1.3rem;\n  font-size: 1rem;\n  border: none;\n  cursor: pointer;\n  margin-right: 0.5rem;\n  transition: opacity 0.2s ease-in;\n  outline: none;\n  border-radius: 10px;\n}\n\n.btn-link {\n  background: none;\n  padding: 0;\n  margin: 0;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-sm {\n  font-size: 0.8rem;\n  padding: 0.3rem 1rem;\n  margin-right: 0.2rem;\n}\n\n.badge {\n  display: inline-block;\n  font-size: 0.8rem;\n  padding: 0.2rem 0.7rem;\n  text-align: center;\n  margin: 0.3rem;\n  background: var(--light-color);\n  color: #333;\n  border-radius: 5px;\n}\n\n.alert {\n  padding: 0.7rem;\n  margin: 1rem 0;\n  opacity: 0.9;\n  background: var(--light-color);\n  color: #333;\n}\n\n.btn-primary,\n.bg-primary,\n.badge-primary,\n.alert-primary {\n  background: var(--primary-color);\n  color: #fff;\n}\n\n.btn-light,\n.bg-light,\n.badge-light,\n.alert-light {\n  background: var(--light-color);\n  color: #333;\n}\n\n.btn-dark,\n.bg-dark,\n.badge-dark,\n.alert-dark {\n  background: var(--dark-color);\n  color: #fff;\n}\n\n.btn-danger,\n.bg-danger,\n.badge-danger,\n.alert-danger {\n  background: var(--danger-color);\n  color: #fff;\n}\n\n.btn-success,\n.bg-success,\n.badge-success,\n.alert-success {\n  background: var(--success-color);\n  color: #fff;\n}\n\n.btn-white,\n.bg-white,\n.badge-white,\n.alert-white {\n  background: #fff;\n  color: #333;\n  border: #ccc solid 1px;\n}\n\n.btn:hover {\n  opacity: 0.8;\n}\n\n.bg-light,\n.badge-light {\n  border: #ccc solid 1px;\n}\n\n.round-img {\n  border-radius: 50%;\n}\n\n/* Forms */\ninput {\n  margin: 1.2rem 0;\n}\n\n.form-text {\n  display: block;\n  margin-top: 0.3rem;\n  color: #888;\n}\n\ninput[type='text'],\ninput[type='email'],\ninput[type='password'],\ninput[type='date'],\nselect,\ntextarea {\n  width: 100%;\n  padding:1rem;\n  font-size: 1.2rem;\n  border: 1px solid #ccc;\n}\n\ninput[type='submit'],\nbutton {\n  font: inherit;\n  padding: 0.3rem;\n  font-size: 1.2rem;\n}\n\ntable th,\ntable td {\n  padding: 1rem;\n  text-align: left;\n}\n\ntable th {\n  background: var(--light-color);\n}\n\n/* Navbar */\n.navbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0.7rem 2rem;\n    z-index: 1;\n    width: 100%;\n    opacity: 0.9;\n    margin-bottom: 1rem;\n    padding-left: 5%;\n    background: var(--primary-color) !important;\n    padding-right: 5%;\n}\n\n\n.navbar ul {\n  display: flex;\n}\n\n.navbar a {\n  color: #fff;\n  padding: 0.45rem;\n  margin: 0 0.25rem;\n}\n\n.navbar a:hover {\n  color: var(--light-color);\n}\n\n.navbar .welcome span {\n  margin-right: 0.6rem;\n}\n\n/* Mobile Styles */\n@media (max-width: 700px) {\n  .hide-sm {\n    display: none;\n  }\n\n  .grid-2,\n  .grid-3,\n  .grid-4 {\n    grid-template-columns: 1fr;\n  }\n\n  /* Text Styles */\n  .x-large {\n    font-size: 3rem;\n  }\n\n  .large {\n    font-size: 2rem;\n  }\n\n  .lead {\n    font-size: 1rem;\n  }\n\n  /* Navbar */\n  .navbar {\n    display: block;\n    text-align: center;\n  }\n\n  .navbar ul {\n    text-align: center;\n    justify-content: center;\n  }\n}\n.myContainer{\n  width: 30%;\n  margin: 7% auto;\n  text-align: center;\n  padding:7% 0;\n  border:2px solid #185461;\n  color: #12343b;\n  border-radius: 10px;\n\n}\n.myContainer button{\n  background-color: #053945;\n  color: white;\n  width: 80%;\n  margin-top:10%;\n  margin-left: 10%;\n  margin-right: 10%;\n  border-radius: 5px;\n  box-shadow: 2px 2px #185461 ;\n}\nbody {\n  font-family: Helvetica, sans-serif;\n}\n\n.react-autosuggest__container {\n  position: relative;\n}\n\n.react-autosuggest__input {\n  width: 240px;\n  height: 30px;\n  padding: 10px 20px;\n  font-family: Helvetica, sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n}\n\n.react-autosuggest__input--focused {\n  outline: none;\n}\n\n.react-autosuggest__input--open {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.react-autosuggest__suggestions-container {\n  display: none;\n}\n\n.react-autosuggest__suggestions-container--open {\n  display: block;\n  position: absolute;\n  top: 51px;\n  width: 100%;\n  border: 1px solid #aaa;\n  background-color: #fff;\n  font-family: Helvetica, sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n  z-index: 2;\n}\n\n.react-autosuggest__suggestions-list {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.react-autosuggest__suggestion {\n  cursor: pointer;\n  padding: 10px 20px;\n}\n\n.react-autosuggest__suggestion--highlighted {\n  background-color: #ddd;\n}\n.contest{\n  margin: 0 auto;\n  width: 80%;\n  /* display: grid;\n  grid-template-columns: 2fr 1fr; */\n}\n.timer{\n  padding:5%;\n  margin:10% auto;\n  text-align: center;\n  float: right;\n\n}\ntable th, table td{\n  text-align: center;\n}\n.problemContainer{\n  width: 90%;\n  margin: 2% auto;\n  padding: 2%;\n}\n.contestHeading{\n  width: 90%;\n  margin: 0% auto;\n  padding: 10px; \n}\n.banner{\n  width:70%;\n  margin:0 auto;\n  border: 1px dotted #ccc;\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  padding-left: 1%;\n  padding-right: 1%;\n  text-align: center;\n}\n.table{\n  width: 70%;\n  margin: 2% auto;\n}\n.item span{\n  padding: 10px;\n  font-size: 1.5em;\n}\n.element{\n  padding: 10px;\n  font-size: 1.5em;\n}\n.myCard{\n  padding: 1rem;\n  border: #ccc 1px dotted;\n  margin: 2% auto;\n  width:75%;\n}\n.content{\n  margin: 5% 0;\n  overflow-wrap: break-word;\n}\n.heading{\n  color:brown;\n  margin:2% auto;\n}\n.item span{\n  cursor: pointer;\n\n}\n.item span:hover{\n  background-color: #ccc;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n\n}\n.select{\n  background-color: #ccc;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n\n\n}\n#dropdown {\n  min-height:190px; \n  overflow-y :auto; \n  overflow-x:hidden; \n  position:absolute;\n  width:300px;\n  display: contents;\n}\n.form input{\n  width: 30%; \n  display: inline !important;\n  margin: 2%;\n}\n.form select{\n  width: 30%;\n  display: inline;\n  margin: 2%;\n}\n.form button{\n  width: 10%;\n}\n@media only screen and (max-width: 600px) {\n  .form input{\n    width: 80%; \n    display: block !important;\n    margin: 2%;\n  }\n  .form select{\n    width: 80%;\n    display: block;\n    margin: 2%;\n  }\n  .form button{\n    width: 50%;\n    margin: 2%;\n  }\n  .clearfix{\n    margin: 5% 5%;\n  }\n  .myContainer{\n    width: 80%;\n    margin: 5% auto;\n    margin-top:20%;\n    padding: 10% 0;\n    padding-bottom: 20%;\n  }\n  .myContainer button{\n    background-color: #053945;\n    color: white;\n    width: 80%;\n    margin-top:10%;\n    margin-left: 10%;\n    margin-right: 10%;\n    border-radius: 5px;\n  }\n  .contest{\n    grid-template-columns: 1fr 1fr;\n  }\n}\n/* Small devices (portrait tablets and large phones, 600px and up) */\n@media only screen and (min-width: 600px) {\n  \n}\n\n/* Medium devices (landscape tablets, 768px and up) */\n@media only screen and (min-width: 768px) {\n\n}\n\n/* Large devices (laptops/desktops, 992px and up) */\n@media only screen and (min-width: 992px) {\n  .myContainer{\n    width:50%;\n    margin:20% auto;\n    padding: 7% 0;\n    padding-bottom: 15%;\n  }\n}\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n@media only screen and (min-width: 1200px) {\n  .clearfix{\n    margin: 5% 40%;\n  }\n  .myContainer{\n    width: 30%;\n    margin: 7% auto;\n    text-align: center;\n    padding:7% 0;\n    border:1px solid #185461;\n  }\n}\n.pagination-status__item{\n  display: inline;\n}\n.Search{\n  width:70%;\n  padding:5%;\n  margin :0 auto;\n}\n.Search input[type=\"text\"]{\n  border-radius: 10px;\n}\n.Search input[type=\"text\"]:focus{\n  border:1px solid var(--dark-color);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_layout_navbar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/layout/navbar.js */ "./src/Components/layout/navbar.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Components_pages_about_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/pages/about.js */ "./src/Components/pages/about.js");
/* harmony import */ var _Components_pages_home_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/pages/home.js */ "./src/Components/pages/home.js");
/* harmony import */ var _Components_pages_login_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/pages/login.js */ "./src/Components/pages/login.js");
/* harmony import */ var _Context_auth_AuthState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Context/auth/AuthState */ "./src/Context/auth/AuthState.js");
/* harmony import */ var _Context_codechef_CodechefState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Context/codechef/CodechefState */ "./src/Context/codechef/CodechefState.js");
/* harmony import */ var _Components_pages_load_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/pages/load.js */ "./src/Components/pages/load.js");
/* harmony import */ var _Components_pages_ranking_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Components/pages/ranking.js */ "./src/Components/pages/ranking.js");
/* harmony import */ var _Components_pages_problem_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/pages/problem.js */ "./src/Components/pages/problem.js");
/* harmony import */ var _Components_contestProblem_problemStatement__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Components/contestProblem/problemStatement */ "./src/Components/contestProblem/problemStatement.js");
/* harmony import */ var _Components_Routing_privateRoute__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/Routing/privateRoute */ "./src/Components/Routing/privateRoute.js");
var _jsxFileName = "/home/bhoomik/contest-arena/src/App.js";















__webpack_require__(/*! dotenv */ "./node_modules/dotenv/lib/main.js").config();

function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context_auth_AuthState__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Context_codechef_CodechefState__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_layout_navbar_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: "/",
    component: _Components_pages_load_js__WEBPACK_IMPORTED_MODULE_9__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Routing_privateRoute__WEBPACK_IMPORTED_MODULE_13__["default"], {
    exact: true,
    path: "/home",
    component: _Components_pages_home_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: "/about",
    component: _Components_pages_about_js__WEBPACK_IMPORTED_MODULE_4__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    exact: true,
    path: "/login",
    component: _Components_pages_login_js__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Routing_privateRoute__WEBPACK_IMPORTED_MODULE_13__["default"], {
    exact: true,
    path: "/problem/:contestcode",
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_pages_problem_js__WEBPACK_IMPORTED_MODULE_11__["default"], Object.assign({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 74
      }
    })),
    component: _Components_pages_problem_js__WEBPACK_IMPORTED_MODULE_11__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Routing_privateRoute__WEBPACK_IMPORTED_MODULE_13__["default"], {
    exact: true,
    path: "/problem/:contestcode/:problemcode",
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_contestProblem_problemStatement__WEBPACK_IMPORTED_MODULE_12__["default"], Object.assign({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 87
      }
    })),
    component: _Components_contestProblem_problemStatement__WEBPACK_IMPORTED_MODULE_12__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Routing_privateRoute__WEBPACK_IMPORTED_MODULE_13__["default"], {
    exact: true,
    path: "/rankings/:contestcode",
    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_pages_ranking_js__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 75
      }
    })),
    component: _Components_pages_ranking_js__WEBPACK_IMPORTED_MODULE_10__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Components/Routing/privateRoute.js":
/*!************************************************!*\
  !*** ./src/Components/Routing/privateRoute.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/Routing/privateRoute.js";



const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], Object.assign({}, rest, {
    render: props => !localStorage.accessToken ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
      to: "/login",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 72
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 14
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);

/***/ }),

/***/ "./src/Components/contestProblem/SubmissionTable.js":
/*!**********************************************************!*\
  !*** ./src/Components/contestProblem/SubmissionTable.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/codechef/codechefContext */ "./src/Context/codechef/codechefContext.js");
/* harmony import */ var _layout_spinner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/spinner.js */ "./src/Components/layout/spinner.js");
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/contestProblem/SubmissionTable.js";




const SubmissionTable = props => {
  const [Search, setSearch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    username: '',
    result: '',
    year: '',
    language: ''
  });

  const onChange = e => {
    setSearch({ ...Search,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    codechefContext.getSubmission(props.contestcode, props.problemcode, Search.username, Search.language);
  };

  const codechefContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    codechefContext.getSubmission(props.contestcode, props.problemcode);
  }, []);

  if (codechefContext.loadingDetail) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 12
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_spinner_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 16
      }
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onSubmit,
    className: "form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "username",
    type: "text",
    placeholder: "Username",
    name: "username",
    value: Search.username,
    onChange: onChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    id: "language",
    name: "language",
    onChange: onChange,
    value: Search.language,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, "Select any language"), props.language.map(lang => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    key: lang,
    value: lang,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 44
    }
  }, lang))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, "Submit"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      overflowX: "auto"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, codechefContext.submissionList.length !== 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    style: {
      width: "80%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 57
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, "Date"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, "Username"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, "Language"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, "Result"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, "Score"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, "Time"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "Memory"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, codechefContext.submissionList.map((submission, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 25
    }
  }, submission.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, submission.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, submission.language), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, submission.result), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, submission.score), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, submission.time), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, submission.memory))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 23
    }
  }, "No Submissions Found")));
};

/* harmony default export */ __webpack_exports__["default"] = (SubmissionTable);

/***/ }),

/***/ "./src/Components/contestProblem/problem.js":
/*!**************************************************!*\
  !*** ./src/Components/contestProblem/problem.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _problemItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./problemItem */ "./src/Components/contestProblem/problemItem.js");
/* harmony import */ var _Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Context/codechef/codechefContext */ "./src/Context/codechef/codechefContext.js");
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/contestProblem/problem.js";




const ProblemList = () => {
  const codechefContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const problemsList = codechefContext.contestDetail.problemsList;
  problemsList.sort((a, b) => {
    const submissionA = a.successfulSubmissions;
    const submissionB = b.successfulSubmissions;

    if (submissionB > submissionA) {
      return 1;
    } else if (submissionB < submissionA) {
      return -1;
    } else {
      return 0;
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "table",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Code"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Successful Submission"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Accuracy"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, problemsList.map(problem => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_problemItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
    problem: problem,
    key: problem.problemCode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 33
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProblemList);

/***/ }),

/***/ "./src/Components/contestProblem/problemItem.js":
/*!******************************************************!*\
  !*** ./src/Components/contestProblem/problemItem.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/contestProblem/problemItem.js";



const ProblemItem = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: `/problem/${props.problem.contestCode}/${props.problem.problemCode}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, props.problem.problemCode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, props.problem.successfulSubmissions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, props.problem.accuracy.toFixed(2))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProblemItem);

/***/ }),

/***/ "./src/Components/contestProblem/problemStatement.js":
/*!***********************************************************!*\
  !*** ./src/Components/contestProblem/problemStatement.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/codechef/codechefContext */ "./src/Context/codechef/codechefContext.js");
/* harmony import */ var _Context_auth_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Context/auth/authContext */ "./src/Context/auth/authContext.js");
/* harmony import */ var _layout_spinner_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/spinner.js */ "./src/Components/layout/spinner.js");
/* harmony import */ var _SubmissionTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubmissionTable */ "./src/Components/contestProblem/SubmissionTable.js");
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/contestProblem/problemStatement.js";






const ProblemStatement = props => {
  const codechefContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_auth_authContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const [displayProblem, setDisplayProblem] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [displaySubmissions, setDisplaySubmission] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [displaySubmit, setSubmit] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const onProblemClick = () => {
    setDisplayProblem(true);
    setDisplaySubmission(false);
    setSubmit(false);
  };

  const onSubmissionClick = () => {
    setDisplayProblem(false);
    setDisplaySubmission(true);
    setSubmit(false);
  };

  const onSubmitClick = () => {
    setDisplayProblem(false);
    setDisplaySubmission(false);
    setSubmit(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    authContext.loadHomePage();
    codechefContext.getProblem(props.match.params.contestcode, props.match.params.problemcode);
  }, []);

  if (codechefContext.loadingProblem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "contestHeading",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }, props.match.params.contestcode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "myCard",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "element",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }
    }, "Problem"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "element",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }, "Submissions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "element",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 25
      }
    }, "Submit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_spinner_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 25
      }
    }))));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "contestHeading",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, props.match.params.contestcode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "myCard",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "item",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      onClick: onProblemClick,
      className: displayProblem ? `select` + ` element` : `element`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 25
      }
    }, "Problem"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      onClick: onSubmissionClick,
      className: displaySubmissions ? `select` + ` element` : `element`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, "Submissions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      onClick: onSubmitClick,
      className: displaySubmit ? `select` + ` element` : `element`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    }, "Submit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "heading",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 29
      }
    }, codechefContext.problem.problemName)), displayProblem ? codechefContext.problem.body : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 75
      }
    }), displaySubmissions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubmissionTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
      contestcode: props.match.params.contestcode,
      problemcode: props.match.params.problemcode,
      language: codechefContext.problem.languagesSupported,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 47
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 83
      }
    }), displaySubmit ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 43
      }
    }, "Submit") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 63
      }
    }))));
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ProblemStatement);

/***/ }),

/***/ "./src/Components/layout/navbar.js":
/*!*****************************************!*\
  !*** ./src/Components/layout/navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Context_auth_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Context/auth/authContext */ "./src/Context/auth/authContext.js");
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/layout/navbar.js";




const Navbar = props => {
  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_auth_authContext__WEBPACK_IMPORTED_MODULE_2__["default"]);

  const logout = () => {
    authContext.logout();
  };

  const authLinks = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "Hello user"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: logout,
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-sign-out-alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 51
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "hide-sm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 90
    }
  }, "Logout"))));
  const guestLinks = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, "Login")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar bg-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, props.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, authContext.isAuthenticated ? authLinks : guestLinks));
};

Navbar.defaultProps = {
  title: 'Contest Arena'
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/Components/layout/spinner.gif":
/*!*******************************************!*\
  !*** ./src/Components/layout/spinner.gif ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ "./src/Components/layout/spinner.js":
/*!******************************************!*\
  !*** ./src/Components/layout/spinner.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _spinner_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinner.gif */ "./src/Components/layout/spinner.gif");
/* harmony import */ var _spinner_gif__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_spinner_gif__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/layout/spinner.js";



const Spinner = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _spinner_gif__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "...",
    style: {
      width: '200px',
      margin: 'auto',
      display: 'block'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Spinner);

/***/ }),

/***/ "./src/Components/pages/about.js":
/*!***************************************!*\
  !*** ./src/Components/pages/about.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/pages/about.js";


const About = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, "About Contest Arena"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "my-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "App"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "bg-dark p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "Version : "), "1.0.0"));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/Components/pages/banner.jpg":
/*!*****************************************!*\
  !*** ./src/Components/pages/banner.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/banner.234e1039.jpg";

/***/ }),

/***/ "./src/Components/pages/codecheficon2.png":
/*!************************************************!*\
  !*** ./src/Components/pages/codecheficon2.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/codecheficon2.42574564.png";

/***/ }),

/***/ "./src/Components/pages/contest.js":
/*!*****************************************!*\
  !*** ./src/Components/pages/contest.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/codechef/codechefContext */ "./src/Context/codechef/codechefContext.js");
/* harmony import */ var _layout_spinner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/spinner.js */ "./src/Components/layout/spinner.js");
/* harmony import */ var _banner_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./banner.jpg */ "./src/Components/pages/banner.jpg");
/* harmony import */ var _banner_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_banner_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/pages/contest.js";






const Contest = props => {
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [display, setDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const codechefContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_1__["default"]);

  const onLoad = () => {
    setLoaded(true);
  };

  const onError = e => {
    setLoaded(true);
    setError(true);
  };

  const calcContestTime = () => {
    if (!codechefContext.loadingDetail) {
      var startDate = codechefContext.contestDetail.startDate;
      var resStart = new Date(startDate.replace("-", "/"));
      var today = new Date();

      if (resStart > today) {
        setDisplay(false);
      } else {
        setDisplay(true);
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setLoaded(false);
    setError(false);
    calcContestTime();
  }, [codechefContext.loadingDetail]);

  if (codechefContext.loadingDetail) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    });
  }

  const detail = codechefContext.contestDetail;
  if (!codechefContext.loadingDetail) var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 18
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: detail.bannerFile,
    onLoad: onLoad,
    onError: onError,
    style: {
      margin: "2% auto",
      width: "inherit"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), !loaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_spinner_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 20
    }
  }));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, detail.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, !error ? content : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onLoad: onLoad,
    src: _banner_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    style: {
      margin: "2% auto",
      width: "inherit"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 32
    }
  })), detail.children.length === 2 && display ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "grid-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "If your rating is>=1800, you can only participate in Division 1. Please head over here ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: `/problem/${detail.children[0]}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 83
    }
  }, "here")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "If your rating is>=1800, you can only participate in Division 1. Please head over  ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: `/problem/${detail.children[1]}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 79
    }
  }, "here"))) : display ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 14
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: `/problem/${detail.code}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 36
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-light btn-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 73
    }
  }, "Go To Contest Problems"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Contest);

/***/ }),

/***/ "./src/Components/pages/home.js":
/*!**************************************!*\
  !*** ./src/Components/pages/home.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_auth_authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/auth/authContext */ "./src/Context/auth/authContext.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ "./src/Components/pages/search.js");
/* harmony import */ var _contest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contest */ "./src/Components/pages/contest.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer */ "./src/Components/pages/timer.js");
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/pages/home.js";






const Home = props => {
  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_auth_authContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (localStorage.accessToken) {
      authContext.loadHomePage();
    } //eslint-disable-next-line

  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_search__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contest",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "timer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_timer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 14
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contest__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/Components/pages/load.js":
/*!**************************************!*\
  !*** ./src/Components/pages/load.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_auth_authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/auth/authContext */ "./src/Context/auth/authContext.js");
/* harmony import */ var _layout_spinner_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout/spinner.js */ "./src/Components/layout/spinner.js");
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/pages/load.js";




const Load = props => {
  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_auth_authContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const getToken = async () => {
      if (!localStorage.requestLogin) {
        props.history.push('/login');
      } else if (!localStorage.accessToken && localStorage.requestLogin) {
        await authContext.getAccessToken();
      } else {
        props.history.push('/home');
      }
    };

    getToken(); //eslint-disable-next-line
  }, [authContext.accessToken]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_spinner_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Load);

/***/ }),

/***/ "./src/Components/pages/login.js":
/*!***************************************!*\
  !*** ./src/Components/pages/login.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_auth_authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/auth/authContext */ "./src/Context/auth/authContext.js");
/* harmony import */ var _codecheficon2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codecheficon2.png */ "./src/Components/pages/codecheficon2.png");
/* harmony import */ var _codecheficon2_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_codecheficon2_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/pages/login.js";




const Login = props => {
  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_auth_authContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (localStorage.accessToken) {
      props.history.push('/');
    }
  }, [props.history]);

  const onClick = () => {
    window.location.href = 'https://api.codechef.com/oauth/authorize?response_type=code&client_id=e5e6c5bae70021cf68095a49e9708f09&state=xyz&redirect_uri=http://localhost:3000/';
    authContext.setRequestLogin();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "myContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      width: "200px",
      height: "200px"
    },
    src: _codecheficon2_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "CodechefIcon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-block",
    onClick: onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 65
    }
  }, "Login")));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/Components/pages/problem.js":
/*!*****************************************!*\
  !*** ./src/Components/pages/problem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/codechef/codechefContext */ "./src/Context/codechef/codechefContext.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Context_auth_authContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Context/auth/authContext */ "./src/Context/auth/authContext.js");
/* harmony import */ var _layout_spinner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/spinner.js */ "./src/Components/layout/spinner.js");
/* harmony import */ var _contestProblem_problem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contestProblem/problem */ "./src/Components/contestProblem/problem.js");
/* harmony import */ var _banner_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./banner.jpg */ "./src/Components/pages/banner.jpg");
/* harmony import */ var _banner_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_banner_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timer */ "./src/Components/pages/timer.js");
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/pages/problem.js";









const Problem = props => {
  const codechefContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_auth_authContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const [loaded, setLoaded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const onLoad = () => {
    setLoaded(true);
  };

  const onError = e => {
    setLoaded(true);
    setError(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    authContext.loadHomePage();
    setLoaded(false);
    setError(false);
    codechefContext.getContestDetail(props.match.params.contestcode);
  }, []);

  if (codechefContext.loadingDetail) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "contestHeading",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }, props.match.params.contestcode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "banner",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_spinner_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    })));
  }

  const detail = codechefContext.contestDetail;
  var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: detail.bannerFile,
    onLoad: onLoad,
    onError: onError,
    style: {
      margin: "2% auto"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }), !loaded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_spinner_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 3
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_timer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn-sm btn-light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: '/rankings/' + props.match.params.contestcode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 42
    }
  }, "Go To Contest Ranks"))));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contestHeading",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, props.match.params.contestcode)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), !error ? content : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "banner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 28
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 52
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onLoad: onLoad,
    src: _banner_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    style: {
      margin: "2% auto"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 57
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 123
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_timer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 128
    }
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contestProblem_problem__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Problem);

/***/ }),

/***/ "./src/Components/pages/ranking.js":
/*!*****************************************!*\
  !*** ./src/Components/pages/ranking.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_auth_authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/auth/authContext */ "./src/Context/auth/authContext.js");
/* harmony import */ var _Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Context/codechef/codechefContext */ "./src/Context/codechef/codechefContext.js");
/* harmony import */ var react_pagination_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pagination-table */ "./node_modules/react-pagination-table/lib/index.js");
/* harmony import */ var react_pagination_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pagination_table__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/pages/ranking.js";





const Ranking = props => {
  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_auth_authContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const codechefContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    authContext.loadHomePage();
    codechefContext.getRankList(props.match.params.contestcode);
  }, []);

  if (codechefContext.loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }
    }, "yay");
  }

  console.log(codechefContext.rankList);
  const Header = ["rank", "username", "totalTime", "penalty", "country", "institution", "totalScore"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      overflowX: "auto"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Hello", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_pagination_table__WEBPACK_IMPORTED_MODULE_3__["TablePagination"], {
    title: "RankList",
    className: "rankList",
    subTitle: "RankList",
    headers: Header,
    data: codechefContext.rankList,
    columns: "rank.username.totalTime.penalty.country.institution.totalScore",
    perPageItemCount: 20,
    totalCount: codechefContext.rankList.length,
    arrayOption: [["size", 'all', ' ']],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Ranking);

/***/ }),

/***/ "./src/Components/pages/search.js":
/*!****************************************!*\
  !*** ./src/Components/pages/search.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-autosuggest */ "./node_modules/react-autosuggest/dist/index.js");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Context_auth_authContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Context/auth/authContext */ "./src/Context/auth/authContext.js");
/* harmony import */ var _Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Context/codechef/codechefContext */ "./src/Context/codechef/codechefContext.js");
/* harmony import */ var _layout_spinner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/spinner.js */ "./src/Components/layout/spinner.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/pages/search.js";







const Search = () => {
  const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_auth_authContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const codechefContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    authContext.loadHomePage();
    codechefContext.getContestList(); //eslint-disable-next-line
  }, []);
  const contests = codechefContext.contestList;
  const [value, setValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [suggestions, setSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [suggestionValue, setSuggestionValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const getSuggestionValue = suggestion => {
    setSuggestionValue(suggestion.name + ' (' + suggestion.code + ')');
    return suggestion.name + ' (' + suggestion.code + ')';
  };

  const renderSuggestion = suggestion => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, suggestion.name + ' (' + suggestion.code + ')');
  };

  const onChange = (event, {
    newValue,
    method
  }) => {
    setValue(newValue);
  };

  const getSuggestions = value => {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');
    return contests.filter(contest => regex.test(contest.name) || regex.test(contest.code));
  };

  const escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const onSuggestionsFetchRequested = ({
    value
  }) => {
    var fetchedSuggestions = getSuggestions(value);

    if (fetchedSuggestions.length > 5) {
      fetchedSuggestions = fetchedSuggestions.slice(0, 6);
    }

    setSuggestions(fetchedSuggestions);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    placeholder: "Type Contest Name or Contest Code",
    value,
    onChange: onChange
  };

  const onSubmit = async e => {
    e.preventDefault();
    var regExp = /\(([^]+)\)/;
    var match = regExp.exec(suggestionValue);
    codechefContext.getContestDetail(match[1]);
  };

  if (codechefContext.loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_spinner_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 12
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_autosuggest__WEBPACK_IMPORTED_MODULE_1___default.a, {
    suggestions: suggestions,
    onSuggestionsFetchRequested: onSuggestionsFetchRequested,
    onSuggestionsClearRequested: onSuggestionsClearRequested,
    getSuggestionValue: getSuggestionValue,
    renderSuggestion: renderSuggestion,
    inputProps: inputProps,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "submit",
    value: "search",
    className: "btn btn-dark btn-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/Components/pages/timer.js":
/*!***************************************!*\
  !*** ./src/Components/pages/timer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Context/codechef/codechefContext */ "./src/Context/codechef/codechefContext.js");
/* harmony import */ var react_compound_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-compound-timer */ "./node_modules/react-compound-timer/build/index.js");
/* harmony import */ var react_compound_timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_compound_timer__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/bhoomik/contest-arena/src/Components/pages/timer.js";




const Timer = () => {
  const [initialTime, setInitialTime] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);

  const calculateTime = () => {
    if (!codechefContext.loadingDetail) {
      var startDate = codechefContext.contestDetail.startDate;
      var endDate = codechefContext.contestDetail.endDate;
      var resStart = new Date(startDate.replace("-", "/"));
      var resEnd = new Date(endDate.replace("-", "/"));
      var today = new Date();

      if (resStart > today) {
        setTimerState('Contest Starts In');
        const time = resStart.getTime() - today.getTime();
        setInitialTime(time);
        setTimeout(() => {
          setTimerState('Contest Ends In');
          const contestTime = resEnd.getTime() - resStart.getTime();
          setInitialTime(contestTime);
          setInterval(() => {
            setInterval(() => {
              setTimerState('Contest Ended');
              setInitialTime(null);
            }, resEnd.getTime() - resEnd.getTime());
          }, time / 2);
        }, time / 2);
      } else {
        setTimerState('Contest ended');
      }
    } else {
      setInitialTime(null);
    }
  };

  const codechefContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_Context_codechef_codechefContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const [timerState, setTimerState] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    calculateTime();
  }, [codechefContext.loadingDetail]);

  if (codechefContext.loadingDetail) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, timerState), initialTime && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_2___default.a, {
    initialTime: initialTime,
    direction: "backward",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 28
    }
  }, () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_2___default.a.Days, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }), " days", '\n', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_2___default.a.Hours, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }), " hours", '\n', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_2___default.a.Minutes, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }), " minutes ", '\n', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_compound_timer__WEBPACK_IMPORTED_MODULE_2___default.a.Seconds, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), " seconds  ", '\n'))));
};

/* harmony default export */ __webpack_exports__["default"] = (Timer);

/***/ }),

/***/ "./src/Context/auth/AuthState.js":
/*!***************************************!*\
  !*** ./src/Context/auth/AuthState.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authContext */ "./src/Context/auth/authContext.js");
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authReducer */ "./src/Context/auth/authReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_setAuthToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/setAuthToken */ "./src/utils/setAuthToken.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../types */ "./src/Context/types.js");
var _jsxFileName = "/home/bhoomik/contest-arena/src/Context/auth/AuthState.js";






let CodechefClientId = '';
let CodechefClientSecret = '';
let redirect_uri = '';

if (true) {
  CodechefClientId = "e5e6c5bae70021cf68095a49e9708f09";
  CodechefClientSecret = "1976f2387da900347fe11d28f8f40a2a";
  redirect_uri = "http://localhost:3000/";
} else {}

const AuthState = props => {
  const initialState = {
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken'),
    isAuthenticated: null,
    error: null
  };
  const [state, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_authReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState);

  const getAccessToken = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');
    const data = {
      "grant_type": "authorization_code",
      "code": `${code}`,
      "client_id": `${CodechefClientId}`,
      "client_secret": `${CodechefClientSecret}`,
      "redirect_uri": `${redirect_uri}`
    };

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('https://api.codechef.com/oauth/token', data, config);
      loadHomePage();
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_5__["GET_ACCESS_TOKEN"],
        payload: res.data.result.data
      });
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["LOGOUT"]
    });
  };

  const loadHomePage = () => {
    Object(_utils_setAuthToken__WEBPACK_IMPORTED_MODULE_4__["default"])(localStorage.getItem('accessToken'));
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["LOAD_HOMEPAGE"]
    });
  };

  const setRequestLogin = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_5__["SET_REQUEST_LOGIN"]
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_authContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      accessToken: state.accessToken,
      refreshToken: state.refreshToken,
      isAuthenticated: state.isAuthenticated,
      error: state.error,
      getAccessToken,
      loadHomePage,
      logout,
      setRequestLogin
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (AuthState);

/***/ }),

/***/ "./src/Context/auth/authContext.js":
/*!*****************************************!*\
  !*** ./src/Context/auth/authContext.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const authContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (authContext);

/***/ }),

/***/ "./src/Context/auth/authReducer.js":
/*!*****************************************!*\
  !*** ./src/Context/auth/authReducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/Context/types.js");

/* harmony default export */ __webpack_exports__["default"] = ((state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["SET_REQUEST_LOGIN"]:
      localStorage.setItem('requestLogin', true);
      return { ...state
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_ACCESS_TOKEN"]:
      localStorage.setItem('accessToken', action.payload.access_token);
      localStorage.setItem('refreshToken', action.payload.refresh_token);
      return { ...state,
        accessToken: action.payload.access_token,
        refreshToken: action.payload.refresh_token,
        isAuthenticated: true
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOAD_HOMEPAGE"]:
      return { ...state,
        isAuthenticated: true
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOGOUT"]:
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('requestLogin');
      return { ...state,
        access_token: '',
        refreshToken: ''
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/Context/codechef/CodechefState.js":
/*!***********************************************!*\
  !*** ./src/Context/codechef/CodechefState.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _codechefContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codechefContext */ "./src/Context/codechef/codechefContext.js");
/* harmony import */ var _codechefReducer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./codechefReducer.js */ "./src/Context/codechef/codechefReducer.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../types */ "./src/Context/types.js");
var _jsxFileName = "/home/bhoomik/contest-arena/src/Context/codechef/CodechefState.js";






const CodechefState = props => {
  const initialState = {
    contestList: [],
    loading: true,
    loadingDetail: true,
    contestDetail: null,
    loadingProblem: true,
    submissionList: [],
    rankList: [],
    problem: null,
    error: null
  };
  const [state, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(_codechefReducer_js__WEBPACK_IMPORTED_MODULE_2__["default"], initialState);

  const getContestList = async () => {
    try {
      const Contestdata = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://api.codechef.com/contests/');
      const contest = Contestdata.data.result.data.content.contestList;
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__["GET_CONTEST"],
        payload: contest
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getContestDetail = async code => {
    setLoadingDetail();

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://api.codechef.com/contests/' + code);
      const detail = response.data.result.data.content;
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__["GET_CONTEST_DETAIL"],
        payload: detail
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getProblem = async (contestCode, problemCode) => {
    setLoadingProblem();

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://api.codechef.com/contests/' + contestCode + '/problems/' + problemCode);
      const detail = response.data.result.data.content;
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__["GET_PROBLEM"],
        payload: detail
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getSubmission = async (contestCode, problemCode, username = '', language = '') => {
    setLoadingDetail();

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://api.codechef.com/submissions/?problemCode=' + problemCode + '&contestCode=' + contestCode + '&fields=date,username,problemCode,language,result,score,time,memory&username=' + username + '&language=&' + language);
      const detail = response.data.result.data.content;
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__["GET_SUBMISSION"],
        payload: detail
      });
    } catch (err) {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__["GET_SUBMISSION"],
        payload: []
      });
      console.log(err);
    }
  };

  const getRankList = async contestCode => {
    setLoading();

    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('https://api.codechef.com/rankings/' + contestCode + '/?fields=rank,username,totalTime,penalty,country,institution,totalScore');
      const detail = response.data.result.data.content;
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_4__["GET_RANKLIST"],
        payload: detail
      });
    } catch (err) {
      console.log(err);
    }
  };

  const setLoadingDetail = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__["LOADING_DETAIL"]
    });
  };

  const setLoading = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__["LOADING"]
    });
  };

  const setLoadingProblem = () => {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_4__["LOADING_PROBLEM"]
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_codechefContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: {
      contestList: state.contestList,
      loading: state.loading,
      error: state.error,
      contestDetail: state.contestDetail,
      loadingDetail: state.loadingDetail,
      problem: state.problem,
      loadingProblem: state.loadingProblem,
      submissionList: state.submissionList,
      rankList: state.rankList,
      getContestList,
      getContestDetail,
      getSubmission,
      getProblem,
      getRankList
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (CodechefState);

/***/ }),

/***/ "./src/Context/codechef/codechefContext.js":
/*!*************************************************!*\
  !*** ./src/Context/codechef/codechefContext.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const codechefContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (codechefContext);

/***/ }),

/***/ "./src/Context/codechef/codechefReducer.js":
/*!*************************************************!*\
  !*** ./src/Context/codechef/codechefReducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./src/Context/types.js");

/* harmony default export */ __webpack_exports__["default"] = ((state, action) => {
  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_CONTEST"]:
      return { ...state,
        contestList: action.payload,
        loading: false
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_CONTEST_DETAIL"]:
      return { ...state,
        loadingDetail: false,
        contestDetail: action.payload
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_PROBLEM"]:
      return { ...state,
        problem: action.payload,
        loadingProblem: false
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_DETAIL"]:
      return { ...state,
        loadingDetail: true
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_SUBMISSION"]:
      return { ...state,
        submissionList: action.payload,
        loadingDetail: false
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOADING_PROBLEM"]:
      return { ...state,
        loadingProblem: true
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["LOADING"]:
      return { ...state,
        loading: true
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__["GET_RANKLIST"]:
      {
        return { ...state,
          rankList: action.payload,
          loading: false
        };
      }

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/Context/types.js":
/*!******************************!*\
  !*** ./src/Context/types.js ***!
  \******************************/
/*! exports provided: GET_ACCESS_TOKEN, GET_REFRESH_TOKEN, LOGOUT, LOAD_HOMEPAGE, SET_REQUEST_LOGIN, GET_CONTEST, GET_CONTEST_DETAIL, LOADING_DETAIL, LOADING_PROBLEM, GET_PROBLEM, GET_SUBMISSION, GET_RANKLIST, LOADING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ACCESS_TOKEN", function() { return GET_ACCESS_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_REFRESH_TOKEN", function() { return GET_REFRESH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HOMEPAGE", function() { return LOAD_HOMEPAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_REQUEST_LOGIN", function() { return SET_REQUEST_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CONTEST", function() { return GET_CONTEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CONTEST_DETAIL", function() { return GET_CONTEST_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_DETAIL", function() { return LOADING_DETAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING_PROBLEM", function() { return LOADING_PROBLEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROBLEM", function() { return GET_PROBLEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SUBMISSION", function() { return GET_SUBMISSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_RANKLIST", function() { return GET_RANKLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOADING", function() { return LOADING; });
const GET_ACCESS_TOKEN = 'GET_CONTACTS';
const GET_REFRESH_TOKEN = 'ADD_CONTACT';
const LOGOUT = 'LOGOUT';
const LOAD_HOMEPAGE = 'LOAD_HOMEPAGE';
const SET_REQUEST_LOGIN = 'SET_REQUEST_LOGIN';
const GET_CONTEST = 'GET_CONTEST';
const GET_CONTEST_DETAIL = 'GET_CONTEST_DETAIL';
const LOADING_DETAIL = 'LOADING_DETAIL';
const LOADING_PROBLEM = 'LOADING_PROBLEM';
const GET_PROBLEM = 'GET_PROBLEM';
const GET_SUBMISSION = 'GET_SUBMISSION';
const GET_RANKLIST = 'GET_RANKLIST';
const LOADING = 'LOADING';

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/home/bhoomik/contest-arena/src/index.js";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }
})), document.getElementById('root'));

/***/ }),

/***/ "./src/utils/setAuthToken.js":
/*!***********************************!*\
  !*** ./src/utils/setAuthToken.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const setAuthToken = token => {
  if (token) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  } else {
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'];
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setAuthToken);

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/bhoomik/contest-arena/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /home/bhoomik/contest-arena/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/bhoomik/contest-arena/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map