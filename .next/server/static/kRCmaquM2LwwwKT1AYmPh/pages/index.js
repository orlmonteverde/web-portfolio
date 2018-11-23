module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	"Header": "_3kY49n2SAZ358emRD57TKt",
	"HeaderContent": "QDd5NCYFmUgvxXVu0WHCL",
	"HeaderImg": "_1mHmISh7o8huJXLtlwWurP"
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
	"spinner": "_21DmZyQLEv6Qgxw9yx1St5",
	"sk-rotate": "_3Gu1nhQQzNFxKdpvhoGlLk",
	"dot1": "GgB2FIs8XSAe9UeIbtSPQ",
	"dot2": "_3YelvgcE3dcnoSip3ljhPR",
	"sk-bounce": "hvP4CcO0ib0OPQdSK76Tj"
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module) {

module.exports = {"client_id":"5df020d93a40e3250582","client_secret":"bbd7278204fb3438001031a218ca4a5b322b6102"};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/purple");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/teal");

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);


/***/ }),
/* 16 */
/***/ (function(module, exports) {



/***/ }),
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(6);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__(7);
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__(2);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(8);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./config/github-keys.json
var github_keys = __webpack_require__(9);

// CONCATENATED MODULE: ./services/get-repositories.js



var get_repositories_GetRepos = function GetRepos() {
  var URL = 'https://api.github.com/users/orlmonteverde/repos';
  return external_axios_default.a.get(URL, github_keys);
};

/* harmony default export */ var get_repositories = (get_repositories_GetRepos);
// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__(4);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__(10);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__(5);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: ./components/main-header/index.scss
var main_header = __webpack_require__(1);
var main_header_default = /*#__PURE__*/__webpack_require__.n(main_header);

// CONCATENATED MODULE: ./components/main-header/index.js






var main_header_MainHeader = function MainHeader() {
  return external_react_default.a.createElement(Grid_default.a, {
    className: main_header_default.a.Header,
    container: true,
    justify: "center",
    component: "header"
  }, external_react_default.a.createElement(Grid_default.a, {
    item: true,
    xs: 12,
    className: main_header_default.a.HeaderContent
  }, external_react_default.a.createElement(Typography_default.a, {
    align: "center",
    variant: "h2",
    component: "h1",
    className: main_header_default.a.HeaderTitle
  }, "Orlando Monteverde"), external_react_default.a.createElement("img", {
    src: "/static/profile.png",
    alt: "Orlando Monteverde Photo",
    className: main_header_default.a.HeaderImg
  }), external_react_default.a.createElement(Typography_default.a, {
    className: main_header_default.a.HeaderSubtitle,
    align: "center",
    variant: "h4",
    component: "h3"
  }, "Web Developer"), external_react_default.a.createElement(Button_default.a, {
    color: "primary"
  }, "Resuelvo problemas")));
};

/* harmony default export */ var components_main_header = (main_header_MainHeader);
// EXTERNAL MODULE: ./components/repositories/index.scss
var repositories = __webpack_require__(16);

// CONCATENATED MODULE: ./components/repositories/index.js



var repositories_Repositories = function Repositories(_ref) {
  var repos = _ref.repos;
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h2", null, "Repositories works!"), external_react_default.a.createElement("ul", null, repos.map(function (r, i) {
    return external_react_default.a.createElement("li", {
      key: r.id
    }, r.name);
  })));
};

/* harmony default export */ var components_repositories = (repositories_Repositories);
// EXTERNAL MODULE: ./components/spinner/index.scss
var spinner = __webpack_require__(3);
var spinner_default = /*#__PURE__*/__webpack_require__.n(spinner);

// CONCATENATED MODULE: ./components/spinner/index.js



var spinner_Spinner = function Spinner() {
  return external_react_default.a.createElement("div", {
    className: spinner_default.a.spinner
  }, external_react_default.a.createElement("div", {
    className: spinner_default.a.dot1
  }), external_react_default.a.createElement("div", {
    className: spinner_default.a.dot2
  }));
};

/* harmony default export */ var components_spinner = (spinner_Spinner);
// EXTERNAL MODULE: external "@material-ui/core/colors/purple"
var purple_ = __webpack_require__(11);
var purple_default = /*#__PURE__*/__webpack_require__.n(purple_);

// EXTERNAL MODULE: external "@material-ui/core/colors/teal"
var teal_ = __webpack_require__(12);
var teal_default = /*#__PURE__*/__webpack_require__.n(teal_);

// CONCATENATED MODULE: ./config/theme.js



var theme = Object(styles_["createMuiTheme"])({
  palette: {
    primary: {
      main: purple_default.a[900],
      light: '#7c43bd',
      dark: '#12005e',
      constrastText: '#fff'
    },
    secondary: {
      main: teal_default.a[500],
      light: '#52c7b8',
      dark: '#00675b',
      constrastText: '#000'
    }
  },
  typography: {
    useNextVariants: true
  }
});
// CONCATENATED MODULE: ./pages/index.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var pages_Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this));
    _this.state = {
      repos: null
    };
    _this.getRepos = _this.getRepos.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getRepos();
    }
  }, {
    key: "getRepos",
    value: function getRepos() {
      var _this2 = this;

      get_repositories().then(function (result) {
        var repositories = result.data.filter(function (repo) {
          return !repo.fork && repo.name !== 'orlmonteverde.github.io';
        });

        _this2.setState({
          repos: repositories
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_react_["Fragment"], null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Orlando Monteverde"), external_react_default.a.createElement("link", {
        rel: "icon",
        href: "/static/favicon.png"
      }), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      })), external_react_default.a.createElement(styles_["MuiThemeProvider"], {
        theme: theme
      }, external_react_default.a.createElement(components_main_header, null), external_react_default.a.createElement(CssBaseline_default.a, null), this.state.repos ? external_react_default.a.createElement(components_repositories, {
        repos: this.state.repos
      }) : external_react_default.a.createElement(components_spinner, null)));
    }
  }]);

  return Index;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ })
/******/ ]);