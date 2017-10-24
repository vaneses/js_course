/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__substring__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffer__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summing__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calculator__ = __webpack_require__(4);





/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function SubstitutionCipher(str1, str2){
    if (str1.lenght == str2.lenght){
        var encodeDict = {}
        var decodeDict = {}
        for(var i=0; i<str1.length; i++){
            encodeDict[str1[i]] = str2[i]
            decodeDict[str2[i]] = str1[i]
        }
    } else {
        console.log('Неверная длина строк')
    }
    var obj = {
        encodeDict: encodeDict,
        decodeDict: decodeDict,
        encode: function(str){
        var newStr = ''
        for(var i=0; i<str.length; i++){
            newStr = newStr + encodeDict[str[i]]
        }
        return newStr
        },
        decode: function(str){
        var newStr = ''
        for(var i=0; i<str.length; i++){
            newStr = newStr + decodeDict[str[i]]
        }
        return newStr
        }

    }
    return obj
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function makeBuffer() {
  var buffer_str = ""
  
  function addToByffer(str){
    if (str !== undefined){
      buffer_str = buffer_str + str
    } else{
      return buffer_str
    }
    
  }
  addToByffer.clear = function(){
    buffer_str = ""
  }
  return addToByffer
}


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
function sum(a){
  var c = a
  function add(b=undefined){
    if (b !== undefined){
      c += b
      return add
    } else{
      return c
    }
  }
  return add
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export zero */
/* unused harmony export one */
/* unused harmony export two */
/* unused harmony export three */
/* unused harmony export four */
/* unused harmony export five */
/* unused harmony export six */
/* unused harmony export seven */
/* unused harmony export eight */
/* unused harmony export nine */
/* unused harmony export plus */
/* unused harmony export minus */
/* unused harmony export times */
/* unused harmony export dividedBy */
function zero(a){
    if(a===undefined){ return 0} 
    else if (a === "/0") {return "На ноль делить нельзя"} 
    else { return eval("0" + a)}
  }
  
  function one(a){
    if(a===undefined){ return 1} 
    else if (a === "/0") {return "На ноль делить нельзя"} 
    else { return eval("1" + a)}
  }
  
  function two(a){
    if(a===undefined){ return 2} 
    else if (a === "/0") {return "На ноль делить нельзя"} 
    else { return eval("2" + a)}
  }
  
  function three(a){
    if(a===undefined){ return 3} 
    else if (a === "/0") {return "На ноль делить нельзя"} 
    else { return eval("3" + a)}
  }
  
  function four(a){
    if(a===undefined){ return 4} 
    else if (a === "/0") {return "На ноль делить нельзя"} 
    else { return eval("4" + a)}
  }
  
  function five(a){
    if(a===undefined){ return 5} 
    else if (a === "/0") {return "На ноль делить нельзя"} 
    else { return eval("5" + a)}
  }
  
  function six(a){
    if(a===undefined){ return 6} 
    else if (a === "/0") {return "На ноль делить нельзя"} 
    else { return eval("6" + a)}
  }
  
  function seven(a){
    if(a===undefined){ return 7} 
    else if (a === "/0") {return "На ноль делить нельзя"} 
    else { return eval("7" + a)}
  }
  
  function eight(a){
    if(a===undefined){ return 8} 
    else if (a === "/0") {return "На ноль делить нельзя"} 
    else { return eval("8" + a)}
  }
  
  function nine(a){
    if(a===undefined){ return 9} 
    else if (a === "/0") {return "На ноль делить нельзя"} 
    else { return eval("9" + a)}
  }
  
  function plus(a){
    return "+" + a
  }
  
  function minus(a){
    return "-" + a
  }
  
  function times(a){
    return "*" + a
  }
  
  function dividedBy(a){
    return "/" + a
  }

/***/ })
/******/ ]);