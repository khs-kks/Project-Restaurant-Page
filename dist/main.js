/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactload.js":
/*!****************************!*\
  !*** ./src/contactload.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
function contact() {
  const content = document.querySelector("#content");
  const header = document.createElement("div");
  const main = document.createElement("div");
  const footer = document.createElement("div");

  header.classList.add("header");

  //   POPULATE HEADER

  const h1 = document.createElement("h1");
  h1.textContent = "Gabby's Bakery";
  header.appendChild(h1);

  const tabs = document.createElement("div");
  tabs.classList.add("tabs");

  const tabhome = document.createElement("button");
  tabhome.classList.add("tabhome");
  tabhome.textContent = "Home";

  const tabmenu = document.createElement("button");
  tabmenu.classList.add("tabmenu");
  tabmenu.textContent = "Menu";

  const tabcontacts = document.createElement("button");
  tabcontacts.classList.add("tabcontacts");
  tabcontacts.textContent = "Contacts";

  tabs.appendChild(tabhome);
  tabs.appendChild(tabmenu);
  tabs.appendChild(tabcontacts);
  header.appendChild(tabs);

  content.appendChild(header);

  //   POPULATE MAIN

  main.classList.add("main");

  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");

  const phone = document.createElement("div");
  phone.textContent = "📞 123 456 789";

  const address = document.createElement("div");
  address.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA";

  const img = document.createElement("img");
  img.setAttribute("src", "./restaurant-location.png");
  img.setAttribute("alt", "Our location");
  img.classList.add("img-location");

  mainContent.appendChild(phone);
  mainContent.appendChild(address);
  mainContent.appendChild(img);

  main.appendChild(mainContent);
  content.appendChild(main);

  //   POPULATE FOOTER

  footer.classList.add("footer");
  footer.textContent = "Copyleft 2022";

  const githubLink = document.createElement("a");
  githubLink.setAttribute(
    "href",
    "https://github.com/khs-kks/Project-Restaurant-Page"
  );
  githubLink.textContent = " KHS";

  footer.appendChild(githubLink);
  content.appendChild(footer);
}


/***/ }),

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHomepage)
/* harmony export */ });
function loadHomepage() {
  const content = document.querySelector("#content");
  const header = document.createElement("div");
  const main = document.createElement("div");
  const footer = document.createElement("div");

  header.classList.add("header");

  //   POPULATE HEADER

  const h1 = document.createElement("h1");
  h1.textContent = "Gabby's Bakery";
  header.appendChild(h1);

  const tabs = document.createElement("div");
  tabs.classList.add("tabs");

  const tabhome = document.createElement("button");
  tabhome.classList.add("tabhome");
  tabhome.textContent = "Home";

  const tabmenu = document.createElement("button");
  tabmenu.classList.add("tabmenu");
  tabmenu.textContent = "Menu";

  const tabcontacts = document.createElement("button");
  tabcontacts.classList.add("tabcontacts");
  tabcontacts.textContent = "Contacts";

  tabs.appendChild(tabhome);
  tabs.appendChild(tabmenu);
  tabs.appendChild(tabcontacts);
  header.appendChild(tabs);

  content.appendChild(header);

  //   POPULATE MAIN

  main.classList.add("main");

  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");

  const bread = document.createElement("div");
  bread.textContent = "Best bread in your town";

  const since = document.createElement("div");
  since.textContent = "Made with passion since 1899";

  const img = document.createElement("img");
  img.setAttribute("src", "./pexels-malidate-van-784632.jpg");
  img.setAttribute("alt", "Our bakery");
  img.setAttribute("height", "330px");
  img.setAttribute("width", "330px");
  img.classList.add("img-main");

  const order = document.createElement("div");
  order.textContent = "Order Online or visit us!";

  mainContent.appendChild(bread);
  mainContent.appendChild(since);
  mainContent.appendChild(img);
  mainContent.appendChild(order);

  main.appendChild(mainContent);
  content.appendChild(main);

  //   POPULATE FOOTER

  footer.classList.add("footer");
  footer.textContent = "Copyleft 2022";

  const githubLink = document.createElement("a");
  githubLink.setAttribute(
    "href",
    "https://github.com/khs-kks/Project-Restaurant-Page"
  );
  githubLink.textContent = " KHS";

  footer.appendChild(githubLink);
  content.appendChild(footer);
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pageload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageload */ "./src/pageload.js");
/* harmony import */ var _contactload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactload */ "./src/contactload.js");
/* eslint-disable no-alert */


// Homepage();
// ContactPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztVQ2pGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ2tDO0FBQ007QUFDeEM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3Rsb2FkLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2Vsb2FkLmpzIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgLy8gICBQT1BVTEFURSBIRUFERVJcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEudGV4dENvbnRlbnQgPSBcIkdhYmJ5J3MgQmFrZXJ5XCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG5cbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhYnMuY2xhc3NMaXN0LmFkZChcInRhYnNcIik7XG5cbiAgY29uc3QgdGFiaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRhYmhvbWUuY2xhc3NMaXN0LmFkZChcInRhYmhvbWVcIik7XG4gIHRhYmhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblxuICBjb25zdCB0YWJtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFibWVudS5jbGFzc0xpc3QuYWRkKFwidGFibWVudVwiKTtcbiAgdGFibWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gIGNvbnN0IHRhYmNvbnRhY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFiY29udGFjdHMuY2xhc3NMaXN0LmFkZChcInRhYmNvbnRhY3RzXCIpO1xuICB0YWJjb250YWN0cy50ZXh0Q29udGVudCA9IFwiQ29udGFjdHNcIjtcblxuICB0YWJzLmFwcGVuZENoaWxkKHRhYmhvbWUpO1xuICB0YWJzLmFwcGVuZENoaWxkKHRhYm1lbnUpO1xuICB0YWJzLmFwcGVuZENoaWxkKHRhYmNvbnRhY3RzKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRhYnMpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAvLyAgIFBPUFVMQVRFIE1BSU5cblxuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcblxuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBob25lLnRleHRDb250ZW50ID0gXCLwn5OeIDEyMyA0NTYgNzg5XCI7XG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIvCfj6AgSG9sbHl3b29kIEJvdWxldmFyZCA0MiwgTG9zIEFuZ2VsZXMsIFVTQVwiO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3Jlc3RhdXJhbnQtbG9jYXRpb24ucG5nXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiT3VyIGxvY2F0aW9uXCIpO1xuICBpbWcuY2xhc3NMaXN0LmFkZChcImltZy1sb2NhdGlvblwiKTtcblxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIC8vICAgUE9QVUxBVEUgRk9PVEVSXG5cbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiQ29weWxlZnQgMjAyMlwiO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoXG4gICAgXCJocmVmXCIsXG4gICAgXCJodHRwczovL2dpdGh1Yi5jb20va2hzLWtrcy9Qcm9qZWN0LVJlc3RhdXJhbnQtUGFnZVwiXG4gICk7XG4gIGdpdGh1YkxpbmsudGV4dENvbnRlbnQgPSBcIiBLSFNcIjtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lcGFnZSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgLy8gICBQT1BVTEFURSBIRUFERVJcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEudGV4dENvbnRlbnQgPSBcIkdhYmJ5J3MgQmFrZXJ5XCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG5cbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhYnMuY2xhc3NMaXN0LmFkZChcInRhYnNcIik7XG5cbiAgY29uc3QgdGFiaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRhYmhvbWUuY2xhc3NMaXN0LmFkZChcInRhYmhvbWVcIik7XG4gIHRhYmhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblxuICBjb25zdCB0YWJtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFibWVudS5jbGFzc0xpc3QuYWRkKFwidGFibWVudVwiKTtcbiAgdGFibWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gIGNvbnN0IHRhYmNvbnRhY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFiY29udGFjdHMuY2xhc3NMaXN0LmFkZChcInRhYmNvbnRhY3RzXCIpO1xuICB0YWJjb250YWN0cy50ZXh0Q29udGVudCA9IFwiQ29udGFjdHNcIjtcblxuICB0YWJzLmFwcGVuZENoaWxkKHRhYmhvbWUpO1xuICB0YWJzLmFwcGVuZENoaWxkKHRhYm1lbnUpO1xuICB0YWJzLmFwcGVuZENoaWxkKHRhYmNvbnRhY3RzKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRhYnMpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAvLyAgIFBPUFVMQVRFIE1BSU5cblxuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcblxuICBjb25zdCBicmVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJyZWFkLnRleHRDb250ZW50ID0gXCJCZXN0IGJyZWFkIGluIHlvdXIgdG93blwiO1xuXG4gIGNvbnN0IHNpbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2luY2UudGV4dENvbnRlbnQgPSBcIk1hZGUgd2l0aCBwYXNzaW9uIHNpbmNlIDE4OTlcIjtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9wZXhlbHMtbWFsaWRhdGUtdmFuLTc4NDYzMi5qcGdcIik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJPdXIgYmFrZXJ5XCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMzMwcHhcIik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjMzMHB4XCIpO1xuICBpbWcuY2xhc3NMaXN0LmFkZChcImltZy1tYWluXCIpO1xuXG4gIGNvbnN0IG9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3JkZXIudGV4dENvbnRlbnQgPSBcIk9yZGVyIE9ubGluZSBvciB2aXNpdCB1cyFcIjtcblxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChicmVhZCk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHNpbmNlKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQob3JkZXIpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIC8vICAgUE9QVUxBVEUgRk9PVEVSXG5cbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiQ29weWxlZnQgMjAyMlwiO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoXG4gICAgXCJocmVmXCIsXG4gICAgXCJodHRwczovL2dpdGh1Yi5jb20va2hzLWtrcy9Qcm9qZWN0LVJlc3RhdXJhbnQtUGFnZVwiXG4gICk7XG4gIGdpdGh1YkxpbmsudGV4dENvbnRlbnQgPSBcIiBLSFNcIjtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbmltcG9ydCBIb21lcGFnZSBmcm9tIFwiLi9wYWdlbG9hZFwiO1xuaW1wb3J0IENvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3Rsb2FkXCI7XG4vLyBIb21lcGFnZSgpO1xuLy8gQ29udGFjdFBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==