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

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n  /* burger */\r\n  const burger = document.querySelector(\".burger\");\r\n\r\n  if (burger) {\r\n    const navLinks = document.querySelectorAll(\r\n      \".header__nav-menu .nav-menu__link, .logo-img\"\r\n    );\r\n    const nav = document.querySelector(\".header__nav-menu\");\r\n    const body = document.querySelector(\"body\");\r\n\r\n    burger.addEventListener(\"click\", () => {\r\n      toggleMenu();\r\n    });\r\n\r\n    navLinks.forEach((link) => {\r\n      link.addEventListener(\"click\", () => {\r\n        closeMenu();\r\n      });\r\n    });\r\n\r\n    function toggleMenu() {\r\n      burger.classList.toggle(\"burger-rotate\");\r\n      nav.classList.toggle(\"nav-hidden\");\r\n      body.classList.toggle(\"hidden\");\r\n    }\r\n\r\n    function closeMenu() {\r\n      burger.classList.remove(\"burger-rotate\");\r\n      nav.classList.remove(\"nav-hidden\");\r\n      body.classList.remove(\"hidden\");\r\n    }\r\n  }\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Nc3RfMS8uL3NyYy9zY3JpcHQuanM/NjhiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgLyogYnVyZ2VyICovXHJcbiAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXJnZXJcIik7XHJcblxyXG4gIGlmIChidXJnZXIpIHtcclxuICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIuaGVhZGVyX19uYXYtbWVudSAubmF2LW1lbnVfX2xpbmssIC5sb2dvLWltZ1wiXHJcbiAgICApO1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX25hdi1tZW51XCIpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICB0b2dnbGVNZW51KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBuYXZMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBjbG9zZU1lbnUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiB0b2dnbGVNZW51KCkge1xyXG4gICAgICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJ1cmdlci1yb3RhdGVcIik7XHJcbiAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwibmF2LWhpZGRlblwiKTtcclxuICAgICAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTWVudSgpIHtcclxuICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoXCJidXJnZXItcm90YXRlXCIpO1xyXG4gICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1oaWRkZW5cIik7XHJcbiAgICAgIGJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/script.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;