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

/***/ "./src/menuload.js":
/*!*************************!*\
  !*** ./src/menuload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu() {
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
  mainContent.classList.add("main-content-menu");

  for (let i = 0; i < 8; i += 1) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const breadImage = document.createElement("img");
    breadImage.setAttribute("src", "./pexels-emmanuel-zua-8714794.jpg");
    breadImage.setAttribute("alt", "Bread picture");
    breadImage.setAttribute("height", "150px");
    breadImage.setAttribute("width", "auto");
    breadImage.classList.add("food-picture");

    const foodTitle = document.createElement("p");
    foodTitle.classList.add("menu-item-title");
    foodTitle.textContent = "Title";

    const foodIngredients = document.createElement("p");
    foodIngredients.classList.add("menu-item-ingredients");
    foodIngredients.textContent = "List of ingredients";

    menuItem.appendChild(breadImage);
    menuItem.appendChild(foodTitle);
    menuItem.appendChild(foodIngredients);
    mainContent.appendChild(menuItem);
  }

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
/* harmony import */ var _menuload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuload */ "./src/menuload.js");
/* eslint-disable no-alert */




// MenuPage();
// Homepage();
// ContactPage();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNqRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDa0M7QUFDTTtBQUNOOztBQUVsQztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0bG9hZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51bG9hZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlbG9hZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIC8vICAgUE9QVUxBVEUgSEVBREVSXG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGgxLnRleHRDb250ZW50ID0gXCJHYWJieSdzIEJha2VyeVwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJzLmNsYXNzTGlzdC5hZGQoXCJ0YWJzXCIpO1xuXG4gIGNvbnN0IHRhYmhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0YWJob21lLmNsYXNzTGlzdC5hZGQoXCJ0YWJob21lXCIpO1xuICB0YWJob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgY29uc3QgdGFibWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRhYm1lbnUuY2xhc3NMaXN0LmFkZChcInRhYm1lbnVcIik7XG4gIHRhYm1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICBjb25zdCB0YWJjb250YWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRhYmNvbnRhY3RzLmNsYXNzTGlzdC5hZGQoXCJ0YWJjb250YWN0c1wiKTtcbiAgdGFiY29udGFjdHMudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RzXCI7XG5cbiAgdGFicy5hcHBlbmRDaGlsZCh0YWJob21lKTtcbiAgdGFicy5hcHBlbmRDaGlsZCh0YWJtZW51KTtcbiAgdGFicy5hcHBlbmRDaGlsZCh0YWJjb250YWN0cyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0YWJzKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgLy8gICBQT1BVTEFURSBNQUlOXG5cbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG5cbiAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwaG9uZS50ZXh0Q29udGVudCA9IFwi8J+TniAxMjMgNDU2IDc4OVwiO1xuXG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCLwn4+gIEhvbGx5d29vZCBCb3VsZXZhcmQgNDIsIExvcyBBbmdlbGVzLCBVU0FcIjtcblxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9yZXN0YXVyYW50LWxvY2F0aW9uLnBuZ1wiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIk91ciBsb2NhdGlvblwiKTtcbiAgaW1nLmNsYXNzTGlzdC5hZGQoXCJpbWctbG9jYXRpb25cIik7XG5cbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICBtYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuICAvLyAgIFBPUFVMQVRFIEZPT1RFUlxuXG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBmb290ZXIudGV4dENvbnRlbnQgPSBcIkNvcHlsZWZ0IDIwMjJcIjtcblxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKFxuICAgIFwiaHJlZlwiLFxuICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2tocy1ra3MvUHJvamVjdC1SZXN0YXVyYW50LVBhZ2VcIlxuICApO1xuICBnaXRodWJMaW5rLnRleHRDb250ZW50ID0gXCIgS0hTXCI7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgLy8gICBQT1BVTEFURSBIRUFERVJcblxuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaDEudGV4dENvbnRlbnQgPSBcIkdhYmJ5J3MgQmFrZXJ5XCI7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChoMSk7XG5cbiAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRhYnMuY2xhc3NMaXN0LmFkZChcInRhYnNcIik7XG5cbiAgY29uc3QgdGFiaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRhYmhvbWUuY2xhc3NMaXN0LmFkZChcInRhYmhvbWVcIik7XG4gIHRhYmhvbWUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblxuICBjb25zdCB0YWJtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFibWVudS5jbGFzc0xpc3QuYWRkKFwidGFibWVudVwiKTtcbiAgdGFibWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gIGNvbnN0IHRhYmNvbnRhY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFiY29udGFjdHMuY2xhc3NMaXN0LmFkZChcInRhYmNvbnRhY3RzXCIpO1xuICB0YWJjb250YWN0cy50ZXh0Q29udGVudCA9IFwiQ29udGFjdHNcIjtcblxuICB0YWJzLmFwcGVuZENoaWxkKHRhYmhvbWUpO1xuICB0YWJzLmFwcGVuZENoaWxkKHRhYm1lbnUpO1xuICB0YWJzLmFwcGVuZENoaWxkKHRhYmNvbnRhY3RzKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRhYnMpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAvLyAgIFBPUFVMQVRFIE1BSU5cblxuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudC1tZW51XCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSArPSAxKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5cbiAgICBjb25zdCBicmVhZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBicmVhZEltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vcGV4ZWxzLWVtbWFudWVsLXp1YS04NzE0Nzk0LmpwZ1wiKTtcbiAgICBicmVhZEltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkJyZWFkIHBpY3R1cmVcIik7XG4gICAgYnJlYWRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNTBweFwiKTtcbiAgICBicmVhZEltYWdlLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiYXV0b1wiKTtcbiAgICBicmVhZEltYWdlLmNsYXNzTGlzdC5hZGQoXCJmb29kLXBpY3R1cmVcIik7XG5cbiAgICBjb25zdCBmb29kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb29kVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS10aXRsZVwiKTtcbiAgICBmb29kVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG5cbiAgICBjb25zdCBmb29kSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb29kSW5ncmVkaWVudHMuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1pbmdyZWRpZW50c1wiKTtcbiAgICBmb29kSW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBcIkxpc3Qgb2YgaW5ncmVkaWVudHNcIjtcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGJyZWFkSW1hZ2UpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2RUaXRsZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZEluZ3JlZGllbnRzKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gIH1cblxuICBtYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuICAvLyAgIFBPUFVMQVRFIEZPT1RFUlxuXG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBmb290ZXIudGV4dENvbnRlbnQgPSBcIkNvcHlsZWZ0IDIwMjJcIjtcblxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKFxuICAgIFwiaHJlZlwiLFxuICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2tocy1ra3MvUHJvamVjdC1SZXN0YXVyYW50LVBhZ2VcIlxuICApO1xuICBnaXRodWJMaW5rLnRleHRDb250ZW50ID0gXCIgS0hTXCI7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZXBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIC8vICAgUE9QVUxBVEUgSEVBREVSXG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGgxLnRleHRDb250ZW50ID0gXCJHYWJieSdzIEJha2VyeVwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJzLmNsYXNzTGlzdC5hZGQoXCJ0YWJzXCIpO1xuXG4gIGNvbnN0IHRhYmhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0YWJob21lLmNsYXNzTGlzdC5hZGQoXCJ0YWJob21lXCIpO1xuICB0YWJob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgY29uc3QgdGFibWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRhYm1lbnUuY2xhc3NMaXN0LmFkZChcInRhYm1lbnVcIik7XG4gIHRhYm1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICBjb25zdCB0YWJjb250YWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRhYmNvbnRhY3RzLmNsYXNzTGlzdC5hZGQoXCJ0YWJjb250YWN0c1wiKTtcbiAgdGFiY29udGFjdHMudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RzXCI7XG5cbiAgdGFicy5hcHBlbmRDaGlsZCh0YWJob21lKTtcbiAgdGFicy5hcHBlbmRDaGlsZCh0YWJtZW51KTtcbiAgdGFicy5hcHBlbmRDaGlsZCh0YWJjb250YWN0cyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0YWJzKTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgLy8gICBQT1BVTEFURSBNQUlOXG5cbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpblwiKTtcblxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNvbnRlbnRcIik7XG5cbiAgY29uc3QgYnJlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBicmVhZC50ZXh0Q29udGVudCA9IFwiQmVzdCBicmVhZCBpbiB5b3VyIHRvd25cIjtcblxuICBjb25zdCBzaW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpbmNlLnRleHRDb250ZW50ID0gXCJNYWRlIHdpdGggcGFzc2lvbiBzaW5jZSAxODk5XCI7XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vcGV4ZWxzLW1hbGlkYXRlLXZhbi03ODQ2MzIuanBnXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiT3VyIGJha2VyeVwiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjMzMHB4XCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIzMzBweFwiKTtcbiAgaW1nLmNsYXNzTGlzdC5hZGQoXCJpbWctbWFpblwiKTtcblxuICBjb25zdCBvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG9yZGVyLnRleHRDb250ZW50ID0gXCJPcmRlciBPbmxpbmUgb3IgdmlzaXQgdXMhXCI7XG5cbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYnJlYWQpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChzaW5jZSk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGltZyk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG9yZGVyKTtcblxuICBtYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuICAvLyAgIFBPUFVMQVRFIEZPT1RFUlxuXG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBmb290ZXIudGV4dENvbnRlbnQgPSBcIkNvcHlsZWZ0IDIwMjJcIjtcblxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKFxuICAgIFwiaHJlZlwiLFxuICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2tocy1ra3MvUHJvamVjdC1SZXN0YXVyYW50LVBhZ2VcIlxuICApO1xuICBnaXRodWJMaW5rLnRleHRDb250ZW50ID0gXCIgS0hTXCI7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG5pbXBvcnQgSG9tZXBhZ2UgZnJvbSBcIi4vcGFnZWxvYWRcIjtcbmltcG9ydCBDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0bG9hZFwiO1xuaW1wb3J0IE1lbnVQYWdlIGZyb20gXCIuL21lbnVsb2FkXCI7XG5cbi8vIE1lbnVQYWdlKCk7XG4vLyBIb21lcGFnZSgpO1xuLy8gQ29udGFjdFBhZ2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==