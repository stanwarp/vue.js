/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 725:
/***/ (() => {

const a = 'asddh'

console.log(a)

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./module.js
const calc = (a, b) => {
    return a + b;
}

/* harmony default export */ const module_0 = ({
    calc: calc
});
// EXTERNAL MODULE: ./module2.js
var module2 = __webpack_require__(725);
;// CONCATENATED MODULE: ./script.js



const script_calc = module_0.calc
console.log(script_calc(2, 5))
})();

/******/ })()
;