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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parse_operation__ = __webpack_require__(1);


// [ { "date": "2017-07-31", "amount": "5422", "links": [ { "name": "link1", "href": "http://google.com", "method": "GET" } ] }, { "date": "2017-07-31", "amount": "34343", "links": [ { "name": "link2", "href": "https://amazon.com", "method": "GET" } ] }, { "date": "2017-08-31", "amount": "5422", "links": [ { "name": "link1", "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates", "method": "GET" } ] }]

alert(JSON.stringify(Object(__WEBPACK_IMPORTED_MODULE_0__parse_operation__["a" /* default */])(), null, 4));

//alert(getString());

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = main;
/* unused harmony export modifyJSON */
/* unused harmony export getString */
/* unused harmony export modifyJSONStrToObj */
function main(){
    let str = getString();
    let object = modifyJSONStrToObj(str)
    let resultObject = modifyJSON(object)

    return resultObject
}

function modifyJSON(object){
    let resultObject = {};

    object.forEach(function(item, i, arr) {
        if(!(item['date'] in resultObject)){
            resultObject[item['date']] = {
                'operations': [],
                'links':[]
            }
        }
        resultObject[item['date']]['operations'].push(item)

        let flagExist = false
        resultObject[item['date']]['links'].forEach(function(item2, i2, arr2) {
            if(item2['name'] === item['links'][0]['name']){
                flagExist = true
            }
        });
        if(!flagExist){
            resultObject[item['date']]['links'].push(item['links'][0])
        }
        //alert( i + ": " + item + " (массив:" + arr + ")" );
      });
    return resultObject
}


function getString(){
    let str = prompt('Введите строку');
    return str
}

function modifyJSONStrToObj(str){
    let object = JSON.parse(str)
    return object
}

/***/ })
/******/ ]);