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

eval("// function findTheSock() {\n//     console.log('Yep, the sock is found');\n// }\n\n// export default findTheSock;\n\n// import * as openpgp from 'openpgp';\n// import * as openpgp from 'openpgp/lightweight';\n// import { generateKey } from 'openpgp/lightweight';\n\nconst openpgp = __webpack_require__(/*! openpgp */ \"./node_modules/openpgp/dist/openpgp.min.mjs\");\n\n(async () => {\n    const { privateKey, publicKey } = await openpgp.generateKey({\n        type: 'rsa', // Type of the key\n        rsaBits: 2048, // RSA key size (defaults to 4096 bits)\n        userIDs: [{ name: 'Jon Smith', email: 'jon@example.com' }], // you can pass multiple user IDs\n        passphrase: 'super long and hard to guess secret' // protects the private key\n    });\n    document.getElementById('key').value = publicKey;\n    console.log(await openpgp.readPrivateKey({\n        armoredKey: privateKey\n    }));\n    return\n    const unsignedMessage = await openpgp.createCleartextMessage({\n        text: 'Hello'\n    });\n    const privateKey1 = await openpgp.decryptKey({\n        privateKey,\n        passphrase:'super long and hard to guess secret'\n    })\n    console.log(unsignedMessage);\n    const cleartextMessage = await openpgp.sign({\n        message: unsignedMessage,\n        signingKeys: privateKey\n    });\n    console.log(cleartextMessage);\n})();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGNBQWM7O0FBRTFCLGdCQUFnQixtQkFBTyxDQUFDLDREQUFTOztBQUVqQztBQUNBLFlBQVksd0JBQXdCO0FBQ3BDO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQTZDO0FBQ2pFO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3RmbGFzay8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGZ1bmN0aW9uIGZpbmRUaGVTb2NrKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKCdZZXAsIHRoZSBzb2NrIGlzIGZvdW5kJyk7XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZpbmRUaGVTb2NrO1xuXG4vLyBpbXBvcnQgKiBhcyBvcGVucGdwIGZyb20gJ29wZW5wZ3AnO1xuLy8gaW1wb3J0ICogYXMgb3BlbnBncCBmcm9tICdvcGVucGdwL2xpZ2h0d2VpZ2h0Jztcbi8vIGltcG9ydCB7IGdlbmVyYXRlS2V5IH0gZnJvbSAnb3BlbnBncC9saWdodHdlaWdodCc7XG5cbmNvbnN0IG9wZW5wZ3AgPSByZXF1aXJlKCdvcGVucGdwJyk7XG5cbihhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBwcml2YXRlS2V5LCBwdWJsaWNLZXkgfSA9IGF3YWl0IG9wZW5wZ3AuZ2VuZXJhdGVLZXkoe1xuICAgICAgICB0eXBlOiAncnNhJywgLy8gVHlwZSBvZiB0aGUga2V5XG4gICAgICAgIHJzYUJpdHM6IDIwNDgsIC8vIFJTQSBrZXkgc2l6ZSAoZGVmYXVsdHMgdG8gNDA5NiBiaXRzKVxuICAgICAgICB1c2VySURzOiBbeyBuYW1lOiAnSm9uIFNtaXRoJywgZW1haWw6ICdqb25AZXhhbXBsZS5jb20nIH1dLCAvLyB5b3UgY2FuIHBhc3MgbXVsdGlwbGUgdXNlciBJRHNcbiAgICAgICAgcGFzc3BocmFzZTogJ3N1cGVyIGxvbmcgYW5kIGhhcmQgdG8gZ3Vlc3Mgc2VjcmV0JyAvLyBwcm90ZWN0cyB0aGUgcHJpdmF0ZSBrZXlcbiAgICB9KTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2V5JykudmFsdWUgPSBwdWJsaWNLZXk7XG4gICAgY29uc29sZS5sb2coYXdhaXQgb3BlbnBncC5yZWFkUHJpdmF0ZUtleSh7XG4gICAgICAgIGFybW9yZWRLZXk6IHByaXZhdGVLZXlcbiAgICB9KSk7XG4gICAgcmV0dXJuXG4gICAgY29uc3QgdW5zaWduZWRNZXNzYWdlID0gYXdhaXQgb3BlbnBncC5jcmVhdGVDbGVhcnRleHRNZXNzYWdlKHtcbiAgICAgICAgdGV4dDogJ0hlbGxvJ1xuICAgIH0pO1xuICAgIGNvbnN0IHByaXZhdGVLZXkxID0gYXdhaXQgb3BlbnBncC5kZWNyeXB0S2V5KHtcbiAgICAgICAgcHJpdmF0ZUtleSxcbiAgICAgICAgcGFzc3BocmFzZTonc3VwZXIgbG9uZyBhbmQgaGFyZCB0byBndWVzcyBzZWNyZXQnXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyh1bnNpZ25lZE1lc3NhZ2UpO1xuICAgIGNvbnN0IGNsZWFydGV4dE1lc3NhZ2UgPSBhd2FpdCBvcGVucGdwLnNpZ24oe1xuICAgICAgICBtZXNzYWdlOiB1bnNpZ25lZE1lc3NhZ2UsXG4gICAgICAgIHNpZ25pbmdLZXlzOiBwcml2YXRlS2V5XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coY2xlYXJ0ZXh0TWVzc2FnZSk7XG59KSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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