/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// function findTheSock() {\n//     console.log('Yep, the sock is found');\n// }\n\n// export default findTheSock;\n\n// import * as openpgp from 'openpgp';\n// import * as openpgp from 'openpgp/lightweight';\n// import { generateKey } from 'openpgp/lightweight';\n\nconst openpgp = __webpack_require__(/*! openpgp */ \"./node_modules/openpgp/dist/openpgp.min.mjs\");\n\n(async () => {\n    const { privateKey, publicKey } = await openpgp.generateKey({\n        type: 'rsa', // Type of the key\n        rsaBits: 2048, // RSA key size (defaults to 4096 bits)\n        userIDs: [{ name: 'Jon Smith', email: 'jon@example.com' }], // you can pass multiple user IDs\n        passphrase: 'super long and hard to guess secret' // protects the private key\n    });\n    document.getElementById('key').value = publicKey;\n    const privateKey1 = await openpgp.decryptKey({\n        privateKey: await openpgp.readPrivateKey({\n            armoredKey: privateKey\n        }),\n        passphrase: 'super long and hard to guess secret'\n    });\n    \n    const unsignedMessage = await openpgp.createCleartextMessage({\n        text: 'Hello'\n    });\n\n    const cleartextMessage = await openpgp.sign({\n        message: unsignedMessage,\n        signingKeys: privateKey1\n    });\n    console.log(cleartextMessage);\n    document.getElementById('signature').value = cleartextMessage;\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7O0FBRTFCLGdCQUFnQixtQkFBTyxDQUFDLDREQUFTOztBQUVqQztBQUNBLFlBQVksd0JBQXdCO0FBQ3BDO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQTZDO0FBQ2pFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdGZsYXNrLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZnVuY3Rpb24gZmluZFRoZVNvY2soKSB7XG4vLyAgICAgY29uc29sZS5sb2coJ1llcCwgdGhlIHNvY2sgaXMgZm91bmQnKTtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgZmluZFRoZVNvY2s7XG5cbi8vIGltcG9ydCAqIGFzIG9wZW5wZ3AgZnJvbSAnb3BlbnBncCc7XG4vLyBpbXBvcnQgKiBhcyBvcGVucGdwIGZyb20gJ29wZW5wZ3AvbGlnaHR3ZWlnaHQnO1xuLy8gaW1wb3J0IHsgZ2VuZXJhdGVLZXkgfSBmcm9tICdvcGVucGdwL2xpZ2h0d2VpZ2h0JztcblxuY29uc3Qgb3BlbnBncCA9IHJlcXVpcmUoJ29wZW5wZ3AnKTtcblxuKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IHByaXZhdGVLZXksIHB1YmxpY0tleSB9ID0gYXdhaXQgb3BlbnBncC5nZW5lcmF0ZUtleSh7XG4gICAgICAgIHR5cGU6ICdyc2EnLCAvLyBUeXBlIG9mIHRoZSBrZXlcbiAgICAgICAgcnNhQml0czogMjA0OCwgLy8gUlNBIGtleSBzaXplIChkZWZhdWx0cyB0byA0MDk2IGJpdHMpXG4gICAgICAgIHVzZXJJRHM6IFt7IG5hbWU6ICdKb24gU21pdGgnLCBlbWFpbDogJ2pvbkBleGFtcGxlLmNvbScgfV0sIC8vIHlvdSBjYW4gcGFzcyBtdWx0aXBsZSB1c2VyIElEc1xuICAgICAgICBwYXNzcGhyYXNlOiAnc3VwZXIgbG9uZyBhbmQgaGFyZCB0byBndWVzcyBzZWNyZXQnIC8vIHByb3RlY3RzIHRoZSBwcml2YXRlIGtleVxuICAgIH0pO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZXknKS52YWx1ZSA9IHB1YmxpY0tleTtcbiAgICBjb25zdCBwcml2YXRlS2V5MSA9IGF3YWl0IG9wZW5wZ3AuZGVjcnlwdEtleSh7XG4gICAgICAgIHByaXZhdGVLZXk6IGF3YWl0IG9wZW5wZ3AucmVhZFByaXZhdGVLZXkoe1xuICAgICAgICAgICAgYXJtb3JlZEtleTogcHJpdmF0ZUtleVxuICAgICAgICB9KSxcbiAgICAgICAgcGFzc3BocmFzZTogJ3N1cGVyIGxvbmcgYW5kIGhhcmQgdG8gZ3Vlc3Mgc2VjcmV0J1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnN0IHVuc2lnbmVkTWVzc2FnZSA9IGF3YWl0IG9wZW5wZ3AuY3JlYXRlQ2xlYXJ0ZXh0TWVzc2FnZSh7XG4gICAgICAgIHRleHQ6ICdIZWxsbydcbiAgICB9KTtcblxuICAgIGNvbnN0IGNsZWFydGV4dE1lc3NhZ2UgPSBhd2FpdCBvcGVucGdwLnNpZ24oe1xuICAgICAgICBtZXNzYWdlOiB1bnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgIHNpZ25pbmdLZXlzOiBwcml2YXRlS2V5MVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGNsZWFydGV4dE1lc3NhZ2UpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWduYXR1cmUnKS52YWx1ZSA9IGNsZWFydGV4dE1lc3NhZ2U7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./node_modules/openpgp/dist/openpgp.min.mjs":
/*!***************************************************!*\
  !*** ./node_modules/openpgp/dist/openpgp.min.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;