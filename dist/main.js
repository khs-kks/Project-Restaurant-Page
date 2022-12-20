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
  tabcontacts.classList.add("current-tab");
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
  tabmenu.classList.add("current-tab");
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
  tabhome.classList.add("current-tab");
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
(0,_pageload__WEBPACK_IMPORTED_MODULE_0__["default"])();
// ContactPage();

const mainContent = document.querySelector("#content");

function deleteDisplay(parent) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}

function renderDisplay() {
  const allTabs = document.querySelectorAll("button");
  allTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      deleteDisplay(mainContent);

      if (tab.textContent === "Home") {
        (0,_pageload__WEBPACK_IMPORTED_MODULE_0__["default"])();
        renderDisplay();
      } else if (tab.textContent === "Menu") {
        (0,_menuload__WEBPACK_IMPORTED_MODULE_2__["default"])();
        renderDisplay();
      } else {
        (0,_contactload__WEBPACK_IMPORTED_MODULE_1__["default"])();
        renderDisplay();
      }
    });
  });
}

renderDisplay();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RGZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNsRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDa0M7QUFDTTtBQUNOOztBQUVsQztBQUNBLHFEQUFRO0FBQ1I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxxREFBUTtBQUNoQjtBQUNBLFFBQVE7QUFDUixRQUFRLHFEQUFRO0FBQ2hCO0FBQ0EsUUFBUTtBQUNSLFFBQVEsd0RBQVc7QUFDbkI7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0bG9hZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51bG9hZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlbG9hZC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QtcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIC8vICAgUE9QVUxBVEUgSEVBREVSXG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGgxLnRleHRDb250ZW50ID0gXCJHYWJieSdzIEJha2VyeVwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJzLmNsYXNzTGlzdC5hZGQoXCJ0YWJzXCIpO1xuXG4gIGNvbnN0IHRhYmhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0YWJob21lLmNsYXNzTGlzdC5hZGQoXCJ0YWJob21lXCIpO1xuICB0YWJob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgY29uc3QgdGFibWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRhYm1lbnUuY2xhc3NMaXN0LmFkZChcInRhYm1lbnVcIik7XG4gIHRhYm1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICBjb25zdCB0YWJjb250YWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRhYmNvbnRhY3RzLmNsYXNzTGlzdC5hZGQoXCJ0YWJjb250YWN0c1wiKTtcbiAgdGFiY29udGFjdHMuY2xhc3NMaXN0LmFkZChcImN1cnJlbnQtdGFiXCIpO1xuICB0YWJjb250YWN0cy50ZXh0Q29udGVudCA9IFwiQ29udGFjdHNcIjtcblxuICB0YWJzLmFwcGVuZENoaWxkKHRhYmhvbWUpO1xuICB0YWJzLmFwcGVuZENoaWxkKHRhYm1lbnUpO1xuICB0YWJzLmFwcGVuZENoaWxkKHRhYmNvbnRhY3RzKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRhYnMpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAvLyAgIFBPUFVMQVRFIE1BSU5cblxuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcblxuICBjb25zdCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHBob25lLnRleHRDb250ZW50ID0gXCLwn5OeIDEyMyA0NTYgNzg5XCI7XG5cbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIvCfj6AgSG9sbHl3b29kIEJvdWxldmFyZCA0MiwgTG9zIEFuZ2VsZXMsIFVTQVwiO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3Jlc3RhdXJhbnQtbG9jYXRpb24ucG5nXCIpO1xuICBpbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiT3VyIGxvY2F0aW9uXCIpO1xuICBpbWcuY2xhc3NMaXN0LmFkZChcImltZy1sb2NhdGlvblwiKTtcblxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIG1haW4uYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gIC8vICAgUE9QVUxBVEUgRk9PVEVSXG5cbiAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gIGZvb3Rlci50ZXh0Q29udGVudCA9IFwiQ29weWxlZnQgMjAyMlwiO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZ2l0aHViTGluay5zZXRBdHRyaWJ1dGUoXG4gICAgXCJocmVmXCIsXG4gICAgXCJodHRwczovL2dpdGh1Yi5jb20va2hzLWtrcy9Qcm9qZWN0LVJlc3RhdXJhbnQtUGFnZVwiXG4gICk7XG4gIGdpdGh1YkxpbmsudGV4dENvbnRlbnQgPSBcIiBLSFNcIjtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAvLyAgIFBPUFVMQVRFIEhFQURFUlxuXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMS50ZXh0Q29udGVudCA9IFwiR2FiYnkncyBCYWtlcnlcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGgxKTtcblxuICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGFicy5jbGFzc0xpc3QuYWRkKFwidGFic1wiKTtcblxuICBjb25zdCB0YWJob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFiaG9tZS5jbGFzc0xpc3QuYWRkKFwidGFiaG9tZVwiKTtcbiAgdGFiaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXG4gIGNvbnN0IHRhYm1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0YWJtZW51LmNsYXNzTGlzdC5hZGQoXCJ0YWJtZW51XCIpO1xuICB0YWJtZW51LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXRhYlwiKTtcbiAgdGFibWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gIGNvbnN0IHRhYmNvbnRhY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGFiY29udGFjdHMuY2xhc3NMaXN0LmFkZChcInRhYmNvbnRhY3RzXCIpO1xuICB0YWJjb250YWN0cy50ZXh0Q29udGVudCA9IFwiQ29udGFjdHNcIjtcblxuICB0YWJzLmFwcGVuZENoaWxkKHRhYmhvbWUpO1xuICB0YWJzLmFwcGVuZENoaWxkKHRhYm1lbnUpO1xuICB0YWJzLmFwcGVuZENoaWxkKHRhYmNvbnRhY3RzKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRhYnMpO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAvLyAgIFBPUFVMQVRFIE1BSU5cblxuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudC1tZW51XCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSArPSAxKSB7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XG5cbiAgICBjb25zdCBicmVhZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBicmVhZEltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vcGV4ZWxzLWVtbWFudWVsLXp1YS04NzE0Nzk0LmpwZ1wiKTtcbiAgICBicmVhZEltYWdlLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkJyZWFkIHBpY3R1cmVcIik7XG4gICAgYnJlYWRJbWFnZS5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIxNTBweFwiKTtcbiAgICBicmVhZEltYWdlLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiYXV0b1wiKTtcbiAgICBicmVhZEltYWdlLmNsYXNzTGlzdC5hZGQoXCJmb29kLXBpY3R1cmVcIik7XG5cbiAgICBjb25zdCBmb29kVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb29kVGl0bGUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS10aXRsZVwiKTtcbiAgICBmb29kVGl0bGUudGV4dENvbnRlbnQgPSBcIlRpdGxlXCI7XG5cbiAgICBjb25zdCBmb29kSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb29kSW5ncmVkaWVudHMuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbS1pbmdyZWRpZW50c1wiKTtcbiAgICBmb29kSW5ncmVkaWVudHMudGV4dENvbnRlbnQgPSBcIkxpc3Qgb2YgaW5ncmVkaWVudHNcIjtcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGJyZWFkSW1hZ2UpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2RUaXRsZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZEluZ3JlZGllbnRzKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gIH1cblxuICBtYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcblxuICAvLyAgIFBPUFVMQVRFIEZPT1RFUlxuXG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBmb290ZXIudGV4dENvbnRlbnQgPSBcIkNvcHlsZWZ0IDIwMjJcIjtcblxuICBjb25zdCBnaXRodWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGdpdGh1Ykxpbmsuc2V0QXR0cmlidXRlKFxuICAgIFwiaHJlZlwiLFxuICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2tocy1ra3MvUHJvamVjdC1SZXN0YXVyYW50LVBhZ2VcIlxuICApO1xuICBnaXRodWJMaW5rLnRleHRDb250ZW50ID0gXCIgS0hTXCI7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkSG9tZXBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIC8vICAgUE9QVUxBVEUgSEVBREVSXG5cbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGgxLnRleHRDb250ZW50ID0gXCJHYWJieSdzIEJha2VyeVwiO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0YWJzLmNsYXNzTGlzdC5hZGQoXCJ0YWJzXCIpO1xuXG4gIGNvbnN0IHRhYmhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0YWJob21lLmNsYXNzTGlzdC5hZGQoXCJ0YWJob21lXCIpO1xuICB0YWJob21lLmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50LXRhYlwiKTtcbiAgdGFiaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuXG4gIGNvbnN0IHRhYm1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0YWJtZW51LmNsYXNzTGlzdC5hZGQoXCJ0YWJtZW51XCIpO1xuICB0YWJtZW51LnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgY29uc3QgdGFiY29udGFjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0YWJjb250YWN0cy5jbGFzc0xpc3QuYWRkKFwidGFiY29udGFjdHNcIik7XG4gIHRhYmNvbnRhY3RzLnRleHRDb250ZW50ID0gXCJDb250YWN0c1wiO1xuXG4gIHRhYnMuYXBwZW5kQ2hpbGQodGFiaG9tZSk7XG4gIHRhYnMuYXBwZW5kQ2hpbGQodGFibWVudSk7XG4gIHRhYnMuYXBwZW5kQ2hpbGQodGFiY29udGFjdHMpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFicyk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIC8vICAgUE9QVUxBVEUgTUFJTlxuXG4gIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50XCIpO1xuXG4gIGNvbnN0IGJyZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnJlYWQudGV4dENvbnRlbnQgPSBcIkJlc3QgYnJlYWQgaW4geW91ciB0b3duXCI7XG5cbiAgY29uc3Qgc2luY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzaW5jZS50ZXh0Q29udGVudCA9IFwiTWFkZSB3aXRoIHBhc3Npb24gc2luY2UgMTg5OVwiO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL3BleGVscy1tYWxpZGF0ZS12YW4tNzg0NjMyLmpwZ1wiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIk91ciBiYWtlcnlcIik7XG4gIGltZy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCIzMzBweFwiKTtcbiAgaW1nLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMzMwcHhcIik7XG4gIGltZy5jbGFzc0xpc3QuYWRkKFwiaW1nLW1haW5cIik7XG5cbiAgY29uc3Qgb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvcmRlci50ZXh0Q29udGVudCA9IFwiT3JkZXIgT25saW5lIG9yIHZpc2l0IHVzIVwiO1xuXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGJyZWFkKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoc2luY2UpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChpbWcpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChvcmRlcik7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG5cbiAgLy8gICBQT1BVTEFURSBGT09URVJcblxuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgZm9vdGVyLnRleHRDb250ZW50ID0gXCJDb3B5bGVmdCAyMDIyXCI7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICBnaXRodWJMaW5rLnNldEF0dHJpYnV0ZShcbiAgICBcImhyZWZcIixcbiAgICBcImh0dHBzOi8vZ2l0aHViLmNvbS9raHMta2tzL1Byb2plY3QtUmVzdGF1cmFudC1QYWdlXCJcbiAgKTtcbiAgZ2l0aHViTGluay50ZXh0Q29udGVudCA9IFwiIEtIU1wiO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuaW1wb3J0IEhvbWVwYWdlIGZyb20gXCIuL3BhZ2Vsb2FkXCI7XG5pbXBvcnQgQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdGxvYWRcIjtcbmltcG9ydCBNZW51UGFnZSBmcm9tIFwiLi9tZW51bG9hZFwiO1xuXG4vLyBNZW51UGFnZSgpO1xuSG9tZXBhZ2UoKTtcbi8vIENvbnRhY3RQYWdlKCk7XG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5mdW5jdGlvbiBkZWxldGVEaXNwbGF5KHBhcmVudCkge1xuICB3aGlsZSAocGFyZW50Lmxhc3RDaGlsZCkge1xuICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQubGFzdENoaWxkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJEaXNwbGF5KCkge1xuICBjb25zdCBhbGxUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcbiAgYWxsVGFicy5mb3JFYWNoKCh0YWIpID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRlbGV0ZURpc3BsYXkobWFpbkNvbnRlbnQpO1xuXG4gICAgICBpZiAodGFiLnRleHRDb250ZW50ID09PSBcIkhvbWVcIikge1xuICAgICAgICBIb21lcGFnZSgpO1xuICAgICAgICByZW5kZXJEaXNwbGF5KCk7XG4gICAgICB9IGVsc2UgaWYgKHRhYi50ZXh0Q29udGVudCA9PT0gXCJNZW51XCIpIHtcbiAgICAgICAgTWVudVBhZ2UoKTtcbiAgICAgICAgcmVuZGVyRGlzcGxheSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgQ29udGFjdFBhZ2UoKTtcbiAgICAgICAgcmVuZGVyRGlzcGxheSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxucmVuZGVyRGlzcGxheSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9