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

eval("document.addEventListener(\"DOMContentLoaded\", function () {\r\n  const burger = document.querySelector(\".burger\");\r\n  if (burger) {\r\n    const navLinks = document.querySelectorAll(\r\n      \".header__nav-menu .nav-menu__link, .logo-img\"\r\n    );\r\n    const nav = document.querySelector(\".header__nav-menu\");\r\n    const body = document.querySelector(\"body\");\r\n    burger.addEventListener(\"click\", () => {\r\n      burger.classList.toggle(\"burger-rotate\");\r\n      nav.classList.toggle(\"nav-hidden\");\r\n      body.classList.toggle(\"hidden\");\r\n    });\r\n    navLinks.forEach((link) => {\r\n      link.addEventListener(\"click\", () => {\r\n        burger.classList.remove(\"burger-rotate\");\r\n        nav.classList.remove(\"nav-hidden\");\r\n        body.classList.remove(\"hidden\");\r\n      });\r\n    });\r\n  }\r\n\r\n  // const header = document.querySelector(\".header\");\r\n  // function checkScroll() {\r\n  //   if (window.scrollY > 0) {\r\n  //     header.classList.add(\"header-scroll\");\r\n  //   } else {\r\n  //     header.classList.remove(\"header-scroll\");\r\n  //   }\r\n  // }\r\n  // checkScroll();\r\n  // window.addEventListener(\"scroll\", checkScroll);\r\n  // });\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXN0XzEvLi9zcmMvc2NyaXB0LmpzPzY4YjAiXSwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyXCIpO1xyXG4gIGlmIChidXJnZXIpIHtcclxuICAgIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgXCIuaGVhZGVyX19uYXYtbWVudSAubmF2LW1lbnVfX2xpbmssIC5sb2dvLWltZ1wiXHJcbiAgICApO1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX25hdi1tZW51XCIpO1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKFwiYnVyZ2VyLXJvdGF0ZVwiKTtcclxuICAgICAgbmF2LmNsYXNzTGlzdC50b2dnbGUoXCJuYXYtaGlkZGVuXCIpO1xyXG4gICAgICBib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XHJcbiAgICB9KTtcclxuICAgIG5hdkxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKFwiYnVyZ2VyLXJvdGF0ZVwiKTtcclxuICAgICAgICBuYXYuY2xhc3NMaXN0LnJlbW92ZShcIm5hdi1oaWRkZW5cIik7XHJcbiAgICAgICAgYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJcIik7XHJcbiAgLy8gZnVuY3Rpb24gY2hlY2tTY3JvbGwoKSB7XHJcbiAgLy8gICBpZiAod2luZG93LnNjcm9sbFkgPiAwKSB7XHJcbiAgLy8gICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLXNjcm9sbFwiKTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLXNjcm9sbFwiKTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbiAgLy8gY2hlY2tTY3JvbGwoKTtcclxuICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGVja1Njcm9sbCk7XHJcbiAgLy8gfSk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/script.js\n");

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