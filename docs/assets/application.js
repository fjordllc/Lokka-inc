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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
window.SmoothScroll = __webpack_require__(4);
__webpack_require__(6);
//window.Mojik = require('mojik/mojik.js');
window.Mojik = __webpack_require__(7);
__webpack_require__(9);
__webpack_require__(10);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*--------------------------------------------------------------------------*
 *
 *  footerFixed.js
 *
 *  MIT-style license.
 *
 *  2007 Kazuma Nishihata [to-R]
 *  http://blog.webcreativepark.net
 *
 *--------------------------------------------------------------------------*/

new function () {

  var footerId = "footer";
  //メイン
  function footerFixed() {
    //ドキュメントの高さ
    var dh = document.getElementsByTagName("body")[0].clientHeight;
    //フッターのtopからの位置
    document.getElementById(footerId).style.top = "0px";
    var ft = document.getElementById(footerId).offsetTop;
    //フッターの高さ
    var fh = document.getElementById(footerId).offsetHeight;
    //ウィンドウの高さ
    if (window.innerHeight) {
      var wh = window.innerHeight;
    } else if (document.documentElement && document.documentElement.clientHeight != 0) {
      var wh = document.documentElement.clientHeight;
    }
    if (ft + fh < wh) {
      document.getElementById(footerId).style.position = "relative";
      document.getElementById(footerId).style.top = wh - fh - ft - 1 + "px";
    }
  }

  //文字サイズ
  function checkFontSize(func) {

    //判定要素の追加
    var e = document.createElement("div");
    var s = document.createTextNode("S");
    e.appendChild(s);
    e.style.visibility = "hidden";
    e.style.position = "absolute";
    e.style.top = "0";
    document.body.appendChild(e);
    var defHeight = e.offsetHeight;

    //判定関数
    function checkBoxSize() {
      if (defHeight != e.offsetHeight) {
        func();
        defHeight = e.offsetHeight;
      }
    }
    setInterval(checkBoxSize, 1000);
  }

  //イベントリスナー
  function addEvent(elm, listener, fn) {
    try {
      elm.addEventListener(listener, fn, false);
    } catch (e) {
      elm.attachEvent("on" + listener, fn);
    }
  }

  addEvent(window, "load", footerFixed);
  addEvent(window, "load", function () {
    checkFontSize(footerFixed);
  });
  addEvent(window, "resize", footerFixed);
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
	Autosize v1.18.4 - 2014-01-11
	Automatically adjust textarea height based on user input.
	(c) 2014 Jack Moore - http://www.jacklmoore.com/autosize
	license: http://www.opensource.org/licenses/mit-license.php
*/
!function (a) {
	var b,
	    c = { className: "autosizejs", append: "", callback: !1, resizeDelay: 10, placeholder: !0 },
	    d = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',
	    e = ["fontFamily", "fontSize", "fontWeight", "fontStyle", "letterSpacing", "textTransform", "wordSpacing", "textIndent"],
	    f = a(d).data("autosize", !0)[0];f.style.lineHeight = "99px", "99px" === a(f).css("lineHeight") && e.push("lineHeight"), f.style.lineHeight = "", a.fn.autosize = function (d) {
		return this.length ? (d = a.extend({}, c, d || {}), f.parentNode !== document.body && a(document.body).append(f), this.each(function () {
			function c() {
				var b,
				    c = window.getComputedStyle ? window.getComputedStyle(m, null) : !1;c ? (b = m.getBoundingClientRect().width, 0 === b && (b = parseInt(c.width, 10)), a.each(["paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth"], function (a, d) {
					b -= parseInt(c[d], 10);
				})) : b = Math.max(n.width(), 0), f.style.width = b + "px";
			}function g() {
				var g = {};if (b = m, f.className = d.className, j = parseInt(n.css("maxHeight"), 10), a.each(e, function (a, b) {
					g[b] = n.css(b);
				}), a(f).css(g), c(), window.chrome) {
					var h = m.style.width;m.style.width = "0px";{
						m.offsetWidth;
					}m.style.width = h;
				}
			}function h() {
				var e, h;b !== m ? g() : c(), f.value = !m.value && d.placeholder ? (a(m).attr("placeholder") || "") + d.append : m.value + d.append, f.style.overflowY = m.style.overflowY, h = parseInt(m.style.height, 10), f.scrollTop = 0, f.scrollTop = 9e4, e = f.scrollTop, j && e > j ? (m.style.overflowY = "scroll", e = j) : (m.style.overflowY = "hidden", k > e && (e = k)), e += o, h !== e && (m.style.height = e + "px", p && d.callback.call(m, m));
			}function i() {
				clearTimeout(l), l = setTimeout(function () {
					var a = n.width();a !== r && (r = a, h());
				}, parseInt(d.resizeDelay, 10));
			}var j,
			    k,
			    l,
			    m = this,
			    n = a(m),
			    o = 0,
			    p = a.isFunction(d.callback),
			    q = { height: m.style.height, overflow: m.style.overflow, overflowY: m.style.overflowY, wordWrap: m.style.wordWrap, resize: m.style.resize },
			    r = n.width();n.data("autosize") || (n.data("autosize", !0), ("border-box" === n.css("box-sizing") || "border-box" === n.css("-moz-box-sizing") || "border-box" === n.css("-webkit-box-sizing")) && (o = n.outerHeight() - n.height()), k = Math.max(parseInt(n.css("minHeight"), 10) - o || 0, n.height()), n.css({ overflow: "hidden", overflowY: "hidden", wordWrap: "break-word", resize: "none" === n.css("resize") || "vertical" === n.css("resize") ? "none" : "horizontal" }), "onpropertychange" in m ? "oninput" in m ? n.on("input.autosize keyup.autosize", h) : n.on("propertychange.autosize", function () {
				"value" === event.propertyName && h();
			}) : n.on("input.autosize", h), d.resizeDelay !== !1 && a(window).on("resize.autosize", i), n.on("autosize.resize", h), n.on("autosize.resizeIncludeStyle", function () {
				b = null, h();
			}), n.on("autosize.destroy", function () {
				b = null, clearTimeout(l), a(window).off("resize", i), n.off("autosize").off(".autosize").css(q).removeData("autosize");
			}), h());
		})) : this;
	};
}(window.jQuery || window.$);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
  return $(".js-autosize").autosize({
    append: "\n"
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * smooth-scroll v12.1.5: Animate scrolling to anchor links
 * (c) 2017 Chris Ferdinandi
 * MIT License
 * http://github.com/cferdinandi/smooth-scroll
 */

(function (root, factory) {
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return factory(root);
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.SmoothScroll = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, (function (window) {

	'use strict';

	//
	// Feature Test
	//

	var supports =
		'querySelector' in document &&
		'addEventListener' in window &&
		'requestAnimationFrame' in window &&
		'closest' in window.Element.prototype;


	//
	// Default settings
	//

	var defaults = {
		// Selectors
		ignore: '[data-scroll-ignore]',
		header: null,

		// Speed & Easing
		speed: 500,
		offset: 0,
		easing: 'easeInOutCubic',
		customEasing: null,

		// Callback API
		before: function () {},
		after: function () {}
	};


	//
	// Utility Methods
	//

	/**
	 * Merge two or more objects. Returns a new object.
	 * @param {Object}   objects  The objects to merge together
	 * @returns {Object}          Merged values of defaults and options
	 */
	var extend = function () {

		// Variables
		var extended = {};
		var deep = false;
		var i = 0;
		var length = arguments.length;

		// Merge the object into the extended object
		var merge = function (obj) {
			for (var prop in obj) {
				if (obj.hasOwnProperty(prop)) {
					extended[prop] = obj[prop];
				}
			}
		};

		// Loop through each object and conduct a merge
		for ( ; i < length; i++ ) {
			var obj = arguments[i];
			merge(obj);
		}

		return extended;

	};

	/**
	 * Get the height of an element.
	 * @param  {Node} elem The element to get the height of
	 * @return {Number}    The element's height in pixels
	 */
	var getHeight = function (elem) {
		return parseInt(window.getComputedStyle(elem).height, 10);
	};

	/**
	 * Escape special characters for use with querySelector
	 * @param {String} id The anchor ID to escape
	 * @author Mathias Bynens
	 * @link https://github.com/mathiasbynens/CSS.escape
	 */
	var escapeCharacters = function (id) {

		// Remove leading hash
		if (id.charAt(0) === '#') {
			id = id.substr(1);
		}

		var string = String(id);
		var length = string.length;
		var index = -1;
		var codeUnit;
		var result = '';
		var firstCodeUnit = string.charCodeAt(0);
		while (++index < length) {
			codeUnit = string.charCodeAt(index);
			// Note: there’s no need to special-case astral symbols, surrogate
			// pairs, or lone surrogates.

			// If the character is NULL (U+0000), then throw an
			// `InvalidCharacterError` exception and terminate these steps.
			if (codeUnit === 0x0000) {
				throw new InvalidCharacterError(
					'Invalid character: the input contains U+0000.'
				);
			}

			if (
				// If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
				// U+007F, […]
				(codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
				// If the character is the first character and is in the range [0-9]
				// (U+0030 to U+0039), […]
				(index === 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
				// If the character is the second character and is in the range [0-9]
				// (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
				(
					index === 1 &&
					codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
					firstCodeUnit === 0x002D
				)
			) {
				// http://dev.w3.org/csswg/cssom/#escape-a-character-as-code-point
				result += '\\' + codeUnit.toString(16) + ' ';
				continue;
			}

			// If the character is not handled by one of the above rules and is
			// greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
			// is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
			// U+005A), or [a-z] (U+0061 to U+007A), […]
			if (
				codeUnit >= 0x0080 ||
				codeUnit === 0x002D ||
				codeUnit === 0x005F ||
				codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
				codeUnit >= 0x0041 && codeUnit <= 0x005A ||
				codeUnit >= 0x0061 && codeUnit <= 0x007A
			) {
				// the character itself
				result += string.charAt(index);
				continue;
			}

			// Otherwise, the escaped character.
			// http://dev.w3.org/csswg/cssom/#escape-a-character
			result += '\\' + string.charAt(index);

		}

		return '#' + result;

	};

	/**
	 * Calculate the easing pattern
	 * @link https://gist.github.com/gre/1650294
	 * @param {String} type Easing pattern
	 * @param {Number} time Time animation should take to complete
	 * @returns {Number}
	 */
	var easingPattern = function (settings, time) {
		var pattern;

		// Default Easing Patterns
		if (settings.easing === 'easeInQuad') pattern = time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutQuad') pattern = time * (2 - time); // decelerating to zero velocity
		if (settings.easing === 'easeInOutQuad') pattern = time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
		if (settings.easing === 'easeInCubic') pattern = time * time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutCubic') pattern = (--time) * time * time + 1; // decelerating to zero velocity
		if (settings.easing === 'easeInOutCubic') pattern = time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
		if (settings.easing === 'easeInQuart') pattern = time * time * time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutQuart') pattern = 1 - (--time) * time * time * time; // decelerating to zero velocity
		if (settings.easing === 'easeInOutQuart') pattern = time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
		if (settings.easing === 'easeInQuint') pattern = time * time * time * time * time; // accelerating from zero velocity
		if (settings.easing === 'easeOutQuint') pattern = 1 + (--time) * time * time * time * time; // decelerating to zero velocity
		if (settings.easing === 'easeInOutQuint') pattern = time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration

		// Custom Easing Patterns
		if (!!settings.customEasing) pattern = settings.customEasing(time);

		return pattern || time; // no easing, no acceleration
	};

	/**
	 * Determine the document's height
	 * @returns {Number}
	 */
	var getDocumentHeight = function () {
		return Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		);
	};

	/**
	 * Calculate how far to scroll
	 * @param {Element} anchor The anchor element to scroll to
	 * @param {Number} headerHeight Height of a fixed header, if any
	 * @param {Number} offset Number of pixels by which to offset scroll
	 * @returns {Number}
	 */
	var getEndLocation = function (anchor, headerHeight, offset) {
		var location = 0;
		if (anchor.offsetParent) {
			do {
				location += anchor.offsetTop;
				anchor = anchor.offsetParent;
			} while (anchor);
		}
		location = Math.max(location - headerHeight - offset, 0);
		return location;
	};

	/**
	 * Get the height of the fixed header
	 * @param  {Node}   header The header
	 * @return {Number}        The height of the header
	 */
	var getHeaderHeight = function (header) {
		return !header ? 0 : (getHeight(header) + header.offsetTop);
	};

	/**
	 * Bring the anchored element into focus
	 * @param {Node}     anchor      The anchor element
	 * @param {Number}   endLocation The end location to scroll to
	 * @param {Boolean}  isNum       If true, scroll is to a position rather than an element
	 */
	var adjustFocus = function (anchor, endLocation, isNum) {

		// Don't run if scrolling to a number on the page
		if (isNum) return;

		// Otherwise, bring anchor element into focus
		anchor.focus();
		if (document.activeElement.id !== anchor.id) {
			anchor.setAttribute('tabindex', '-1');
			anchor.focus();
			anchor.style.outline = 'none';
		}
		window.scrollTo(0 , endLocation);

	};

	/**
	 * Check to see if user prefers reduced motion
	 * @param  {Object} settings Script settings
	 */
	var reduceMotion = function (settings) {
		if ('matchMedia' in window && window.matchMedia('(prefers-reduced-motion)').matches) {
			return true;
		}
		return false;
	};


	//
	// SmoothScroll Constructor
	//

	var SmoothScroll = function (selector, options) {

		//
		// Variables
		//

		var smoothScroll = {}; // Object for public APIs
		var settings, anchor, toggle, fixedHeader, headerHeight, eventTimeout, animationInterval;


		//
		// Methods
		//

		/**
		 * Cancel a scroll-in-progress
		 */
		smoothScroll.cancelScroll = function () {
			// clearInterval(animationInterval);
			cancelAnimationFrame(animationInterval);
		};

		/**
		 * Start/stop the scrolling animation
		 * @param {Node|Number} anchor  The element or position to scroll to
		 * @param {Element}     toggle  The element that toggled the scroll event
		 * @param {Object}      options
		 */
		smoothScroll.animateScroll = function (anchor, toggle, options) {

			// Local settings
			var animateSettings = extend(settings || defaults, options || {}); // Merge user options with defaults

			// Selectors and variables
			var isNum = Object.prototype.toString.call(anchor) === '[object Number]' ? true : false;
			var anchorElem = isNum || !anchor.tagName ? null : anchor;
			if (!isNum && !anchorElem) return;
			var startLocation = window.pageYOffset; // Current location on the page
			if (animateSettings.header && !fixedHeader) {
				// Get the fixed header if not already set
				fixedHeader = document.querySelector( animateSettings.header );
			}
			if (!headerHeight) {
				// Get the height of a fixed header if one exists and not already set
				headerHeight = getHeaderHeight(fixedHeader);
			}
			var endLocation = isNum ? anchor : getEndLocation(anchorElem, headerHeight, parseInt((typeof animateSettings.offset === 'function' ? animateSettings.offset() : animateSettings.offset), 10)); // Location to scroll to
			var distance = endLocation - startLocation; // distance to travel
			var documentHeight = getDocumentHeight();
			var timeLapsed = 0;
			var start, percentage, position;

			/**
			 * Stop the scroll animation when it reaches its target (or the bottom/top of page)
			 * @param {Number} position Current position on the page
			 * @param {Number} endLocation Scroll to location
			 * @param {Number} animationInterval How much to scroll on this loop
			 */
			var stopAnimateScroll = function (position, endLocation) {

				// Get the current location
				var currentLocation = window.pageYOffset;

				// Check if the end location has been reached yet (or we've hit the end of the document)
				if ( position == endLocation || currentLocation == endLocation || ((startLocation < endLocation && window.innerHeight + currentLocation) >= documentHeight )) {

					// Clear the animation timer
					smoothScroll.cancelScroll();

					// Bring the anchored element into focus
					adjustFocus(anchor, endLocation, isNum);

					// Run callback after animation complete
					animateSettings.after(anchor, toggle);

					// Reset start
					start = null;

					return true;

				}
			};

			/**
			 * Loop scrolling animation
			 */
			var loopAnimateScroll = function (timestamp) {
				if (!start) { start = timestamp; }
				timeLapsed += timestamp - start;
				percentage = (timeLapsed / parseInt(animateSettings.speed, 10));
				percentage = (percentage > 1) ? 1 : percentage;
				position = startLocation + (distance * easingPattern(animateSettings, percentage));
				window.scrollTo(0, Math.floor(position));
				if (!stopAnimateScroll(position, endLocation)) {
					window.requestAnimationFrame(loopAnimateScroll);
					start = timestamp;
				}
			};

			/**
			 * Reset position to fix weird iOS bug
			 * @link https://github.com/cferdinandi/smooth-scroll/issues/45
			 */
			if (window.pageYOffset === 0) {
				window.scrollTo( 0, 0 );
			}

			// Run callback before animation starts
			animateSettings.before(anchor, toggle);

			// Start scrolling animation
			smoothScroll.cancelScroll();
			window.requestAnimationFrame(loopAnimateScroll);


		};

		/**
		 * Handle has change event
		 */
		var hashChangeHandler = function (event) {

			// Only run if there's an anchor element to scroll to
			if (!anchor) return;

			// Reset the anchor element's ID
			anchor.id = anchor.getAttribute('data-scroll-id');

			// Scroll to the anchored content
			smoothScroll.animateScroll(anchor, toggle);

			// Reset anchor and toggle
			anchor = null;
			toggle = null;

		};

		/**
		 * If smooth scroll element clicked, animate scroll
		 */
		var clickHandler = function (event) {

			// Don't run if the user prefers reduced motion
			if (reduceMotion(settings)) return;

			// Don't run if right-click or command/control + click
			if (event.button !== 0 || event.metaKey || event.ctrlKey) return;

			// Check if a smooth scroll link was clicked
			toggle = event.target.closest(selector);
			if (!toggle || toggle.tagName.toLowerCase() !== 'a' || event.target.closest(settings.ignore)) return;

			// Only run if link is an anchor and points to the current page
			if (toggle.hostname !== window.location.hostname || toggle.pathname !== window.location.pathname || !/#/.test(toggle.href)) return;

			// Get the sanitized hash
			var hash;
			try {
				hash = escapeCharacters(decodeURIComponent(toggle.hash));
			} catch(e) {
				hash = escapeCharacters(toggle.hash);
			}

			// If the hash is empty, scroll to the top of the page
			if (hash === '#') {

				// Prevent default link behavior
				event.preventDefault();

				// Set the anchored element
				anchor = document.body;

				// Save or create the ID as a data attribute and remove it (prevents scroll jump)
				var id = anchor.id ? anchor.id : 'smooth-scroll-top';
				anchor.setAttribute('data-scroll-id', id);
				anchor.id = '';

				// If no hash change event will happen, fire manually
				// Otherwise, update the hash
				if (window.location.hash.substring(1) === id) {
					hashChangeHandler();
				} else {
					window.location.hash = id;
				}

				return;

			}

			// Get the anchored element
			anchor = document.querySelector(hash);

			// If anchored element exists, save the ID as a data attribute and remove it (prevents scroll jump)
			if (!anchor) return;
			anchor.setAttribute('data-scroll-id', anchor.id);
			anchor.id = '';

			// If no hash change event will happen, fire manually
			if (toggle.hash === window.location.hash) {
				event.preventDefault();
				hashChangeHandler();
			}

		};

		/**
		 * On window scroll and resize, only run events at a rate of 15fps for better performance
		 */
		var resizeThrottler = function (event) {
			if (!eventTimeout) {
				eventTimeout = setTimeout((function() {
					eventTimeout = null; // Reset timeout
					headerHeight = getHeaderHeight(fixedHeader); // Get the height of a fixed header if one exists
				}), 66);
			}
		};

		/**
		 * Destroy the current initialization.
		 */
		smoothScroll.destroy = function () {

			// If plugin isn't already initialized, stop
			if (!settings) return;

			// Remove event listeners
			document.removeEventListener('click', clickHandler, false);
			window.removeEventListener('resize', resizeThrottler, false);

			// Cancel any scrolls-in-progress
			smoothScroll.cancelScroll();

			// Reset variables
			settings = null;
			anchor = null;
			toggle = null;
			fixedHeader = null;
			headerHeight = null;
			eventTimeout = null;
			animationInterval = null;
		};

		/**
		 * Initialize Smooth Scroll
		 * @param {Object} options User settings
		 */
		smoothScroll.init = function (options) {

			// feature test
			if (!supports) return;

			// Destroy any existing initializations
			smoothScroll.destroy();

			// Selectors and variables
			settings = extend(defaults, options || {}); // Merge user options with defaults
			fixedHeader = settings.header ? document.querySelector(settings.header) : null; // Get the fixed header
			headerHeight = getHeaderHeight(fixedHeader);

			// When a toggle is clicked, run the click handler
			document.addEventListener('click', clickHandler, false);

			// Listen for hash changes
			window.addEventListener('hashchange', hashChangeHandler, false);

			// If window is resized and there's a fixed header, recalculate its size
			if (fixedHeader) {
				window.addEventListener('resize', resizeThrottler, false);
			}

		};


		//
		// Initialize plugin
		//

		smoothScroll.init(options);


		//
		// Public APIs
		//

		return smoothScroll;

	};

	return SmoothScroll;

}));
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', function () {
  var scroll = new SmoothScroll('a[href*="#"]', {
    // Selectors
    ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
    header: null, // Selector for fixed headers (must be a valid CSS selector)

    // Speed & Easing
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
    easing: 'easeInOutCubic', // Easing pattern to use
    customEasing: function customEasing(time) {}, // Function. Custom easing pattern

    // Callback API
    before: function before() {}, // Callback to run before scroll
    after: function after() {} // Callback to run after scroll
  });
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Mojik v0.3.0 https://github.com/terkel/mojik
 * @author Takeru Suzuki http://terkel.jp/
 * @license MIT http://opensource.org/licenses/MIT
 */
(function (root, factory) {
    if (( false ? "undefined" : _typeof(module)) === "object" && module.exports) {
        module.exports = factory();
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
        root.Mojik = factory();
    }
})(undefined, function () {

    var Mojik = Mojik || {};
    var cutsTheMustard = "classList" in document.documentElement && "requestAnimationFrame" in window;
    var isOldAndroid = /Android [1-5]\./.test(navigator.userAgent);
    var defaults = {
        doubleDash: false,
        supportOldAndroid: false
    };

    throttle("resize", "optimizedResize");

    Mojik.htmlClassPrefix = "mjk-";

    Mojik.htmlClass = {
        punctuationSpacer: "punctuationSpacer",
        leadOpeningBracket: "leadOpeningBracket",
        leadOpeningBracket_atLineHead: "leadOpeningBracket-atLineHead",
        leadOpeningBracket_atParagraphHead: "leadOpeningBracket-atParagraphHead",
        leadOpeningBracketBefore: "leadOpeningBracketBefore",
        leadOpeningBracketBefore_atLineEnd: "leadOpeningBracketBefore-atLineEnd",
        dash: "dash",
        dash_2em: "dash-2em",
        dash_3em: "dash-3em",
        western: "western",
        western_number: "western-number",
        western_noSpaceBefore: "western-noSpaceBefore",
        western_noSpaceAfter: "western-noSpaceAfter",
        western_atLineHead: "western-atLineHead",
        western_atParagraphHead: "western-atParagraphHead",
        western_atParagraphEnd: "western-atParagraphEnd",
        western_afterLineBreak: "western-afterLineBreak",
        hidden: "hidden"
    };

    Mojik.characters = {

        // 始め括弧類
        japaneseOpeningBrackets: "「『（｟［〚｛〔〘〈《【〖〝",

        // 終わり括弧類
        japaneseClosingBrackets: "」』）｠］〛｝〕〙〉》】〗〞〟",

        // 区切り約物類
        japaneseDividingPunctuations: "！？",

        // 中点類
        japaneseMiddleDots: "・：；゠",

        // 句点類
        japaneseFullStops: "。．",

        // 読点類
        japaneseCommas: "、，",

        // 前置省略記号
        // japanesePrefixedAbbreviations: "￥＄￡＃",

        // 後置省略記号
        // japanesePostfixedAbbreviations: "℃￠％‰",

        // 和字間隔
        japaneseFullWidthSpace: "　",

        // ダッシュ
        dashes: "\\u2014\\u2015", // EM DASH, HRIZONTAL BAR

        // リーダー
        leaders: "\\u2025\\u2026", // TWO DOT LEADER, HORIZONTAL ELLIPSIS

        // 欧文文字
        western: "\\u0000-\\u007F" + // Basic Latin
        "\\u0080-\\u00FF" + // Latin-1 Supplement
        "\\u0100-\\u017F" + // Latin Extended-A
        "\\u0180-\\u024F" + // Latin Extended-B
        // "\\u0250-\\u02AF" + // IPA Extensions
        // "\\u02B0-\\u02FF" + // Spacing Modifier Letters
        // "\\u0300-\\u036F" + // Combining Diacritical Marks
        // "\\u0370-\\u03FF" + // Greek and Coptic
        // "\\u0400-\\u04FF" + // Cyrillic
        // "\\u0500-\\u052F" + // Cyrillic Supplement
        // ...
        "\\u2000-\\u203A\\u203C-\\u206F" + // General Punctuation excluding U+203B REFERENCE MARK
        "\\u2070-\\u209F" + // Superscripts and Subscripts
        "\\u20A0-\\u20CF" + // Currency Symbols
        // "\\u20D0-\\u20FF" + // Combining Diacritical Marks for Symbols
        "\\u2100-\\u214F" + // Letterlike Symbols
        "\\u2150-\\u218F", // Number Forms

        // 欧文始め括弧
        westernOpeningBrackets: "‘“\\(\\[\\{<«‹",

        // 欧文終わり括弧
        westernClosingBrackets: "’”)]}>»›"
    };

    Mojik.ignoreTag = "pre";

    Mojik.compose = function (selector, options) {

        options = extend(defaults, options);

        if (!cutsTheMustard || isOldAndroid && !options.supportOldAndroid) {
            return;
        }

        var elements = document.querySelectorAll(selector);
        var reCommentStr = "<!--[\\s\\S]*?-->";
        var reTagStr = "<\\/?[^>]+?\\/?>";
        var reTag = new RegExp(reTagStr);
        var reTagDivider = new RegExp(reCommentStr + "|" + reTagStr + "|[^<>]+", "gi");
        var reIgnoreTag = new RegExp("^<(" + Mojik.ignoreTag + ")[\\s>]", "i");
        var reWestern = new RegExp("[" + Mojik.characters.western + "]+", "g");
        var reWesternAhead = new RegExp("[" + Mojik.characters.western + "]+$");
        var reWesternBehind = new RegExp("^[" + Mojik.characters.western + "]+");
        var rePuncStr = Mojik.characters.japaneseOpeningBrackets + Mojik.characters.japaneseClosingBrackets + Mojik.characters.japaneseMiddleDots + Mojik.characters.japaneseFullStops + Mojik.characters.japaneseCommas + Mojik.characters.japaneseFullWidthSpace;
        var rePuncAhead = new RegExp("[" + rePuncStr + "]$");
        var rePuncBehind = new RegExp("^[" + rePuncStr + "]");
        var reOpeningBracket = new RegExp("[" + Mojik.characters.japaneseOpeningBrackets + "]", "g");
        var reStartWithDashOrLeader = new RegExp("^([" + Mojik.characters.dashes + Mojik.characters.leaders + "])");
        var reEndWithDashOrLeader = new RegExp("([" + Mojik.characters.dashes + Mojik.characters.leaders + "])$");
        var reConsecutiveDashes = new RegExp("([" + Mojik.characters.dashes + "])\\1+", "g");
        var puncPairs = [[Mojik.characters.japaneseClosingBrackets, Mojik.characters.japaneseOpeningBrackets + Mojik.characters.japaneseClosingBrackets + Mojik.characters.japaneseDividingPunctuations + Mojik.characters.japaneseMiddleDots + Mojik.characters.japaneseFullStops + Mojik.characters.japaneseCommas + Mojik.characters.japaneseFullWidthSpace], [Mojik.characters.japaneseDividingPunctuations, Mojik.characters.japaneseFullWidthSpace], [Mojik.characters.japaneseMiddleDots, Mojik.characters.japaneseOpeningBrackets], [Mojik.characters.japaneseFullStops + Mojik.characters.japaneseCommas, Mojik.characters.japaneseOpeningBrackets + Mojik.characters.japaneseClosingBrackets + Mojik.characters.japaneseMiddleDots + Mojik.characters.japaneseFullWidthSpace], [Mojik.characters.japaneseFullWidthSpace, Mojik.characters.japaneseOpeningBrackets]];
        var htmlClass = function () {
            var obj = {};
            var key;
            for (key in Mojik.htmlClass) {
                obj[key] = Mojik.htmlClassPrefix + Mojik.htmlClass[key];
            }
            return obj;
        }();

        // 要素ごとに処理
        Array.prototype.forEach.call(elements, function (el) {

            // 要素内の文字列をテキストとタグのスライス（文字列片）に分割
            var slices = el.innerHTML.match(reTagDivider) || [];

            var textSlices = [];
            var openingBracketList;
            var westernList;
            var observedFragments;
            var ignoreTagMatch;
            var ignoreTagMatchs;
            var reIgnoreEndTag;
            var reIgnoreStartTag;
            var i;
            var j;

            // スライスごとに処理
            for (i = 0; i < slices.length; i++) {

                // 特定のタグ内のすべてのスライスを無視
                ignoreTagMatch = slices[i].match(reIgnoreTag);
                if (ignoreTagMatch) {
                    reIgnoreEndTag = new RegExp("</" + ignoreTagMatch[1] + "\\s*>");
                    reIgnoreStartTag = new RegExp("<" + ignoreTagMatch[1] + "(?:\\s*|\\s+[^>]+)>");
                    ignoreTagMatchs = 1;
                    for (j = i + 1; j < slices.length; j++) {
                        if (reIgnoreEndTag.test(slices[j])) {
                            ignoreTagMatchs--;
                            if (ignoreTagMatchs === 0) {
                                i = j;
                                break;
                            }
                        } else if (reIgnoreStartTag.test(slices[j])) {
                            ignoreTagMatchs++;
                        }
                    }
                    continue;
                }

                // そのほかのタグ、コメント、または空白のみのテキストを無視
                if (new RegExp(reCommentStr + "|" + reTagStr + "|^\\s+$").test(slices[i])) {
                    continue;
                }

                // テキストスライスを保存
                textSlices.push(slices[i]);

                // 欧文を検出
                slices[i] = slices[i].replace(reWestern, function (match, offset) {
                    var matchEndPosition = offset + match.length;
                    var isNumber = /^\d([\d.,/]*\d)?$/.test(match);
                    var isAtParagraphHead = offset === 0 && textSlices.length === 1;
                    var leadingWhitespace = "";
                    var trailingWhitespace = "";
                    var matchLeadingWhitespace = /^(\s+)(\S*)/.exec(match);
                    var matchTrailingWhitespace = /(\S*)(\s+)$/.exec(match);
                    var isAtParagraphEnd;
                    var hasNoSpaceBefore;
                    var hasNoSpaceAfter;
                    var k;

                    // 要素の先頭
                    if (isAtParagraphHead) {
                        if (matchLeadingWhitespace) {
                            if (matchLeadingWhitespace[2]) {
                                // 先頭の空白文字はマークアップに含めない
                                leadingWhitespace = matchLeadingWhitespace[1];
                                match = match.slice(leadingWhitespace.length);
                            } else {
                                // 空白文字のみの場合はなにもしない
                                return match;
                            }
                        }
                    } else if (
                    // 空白で始まる
                    /^\s/.test(match) ||
                    // スライス中の2文字目以降で和文約物に後続
                    offset > 0 && rePuncAhead.test(slices[i].slice(0, offset)) ||
                    // スライスの先頭で、先行する直近のテキストスライスが和文約物か欧文で終わる
                    offset === 0 && textSlices.length > 1 && (rePuncAhead.test(textSlices[textSlices.length - 2]) || reWesternAhead.test(textSlices[textSlices.length - 2]))) {
                        hasNoSpaceBefore = true;
                    }

                    // 後続するスライスの検査
                    if (slices[i].length === matchEndPosition) {
                        // 要素の最後
                        if (i === slices.length - 1) {
                            isAtParagraphEnd = true;
                        } else {
                            for (k = i + 1; k < slices.length; k++) {
                                if (reTag.test(slices[k]) || /^\s+$/.test(slices[k])) {
                                    // テキストスライスが後続しない
                                    if (k === slices.length - 1) {
                                        isAtParagraphEnd = true;
                                    } else {
                                        continue;
                                    }
                                } else {
                                    // タグをまたいで後続する直近のテキストスライスが和文約物か欧文で始まる
                                    if (rePuncBehind.test(slices[k]) || reWesternBehind.test(slices[k])) {
                                        hasNoSpaceAfter = true;
                                    }
                                    break;
                                }
                            }
                        }
                    }

                    // 要素の末尾
                    if (isAtParagraphEnd) {
                        if (matchTrailingWhitespace) {
                            if (matchTrailingWhitespace[1]) {
                                // 末尾の空白文字はマークアップに含めない
                                trailingWhitespace = matchTrailingWhitespace[2];
                                match = match.slice(0, -trailingWhitespace.length);
                            } else {
                                // 空白文字のみの場合はなにもしない
                                return match;
                            }
                        }
                    } else if (!hasNoSpaceAfter && (
                    // 空白で終わる
                    /\s$/.test(match) ||
                    // 和文約物が直接後続する
                    rePuncBehind.test(slices[i].slice(matchEndPosition)))) {
                        hasNoSpaceAfter = true;
                    }

                    // ダッシュまたはリーダーで始まる
                    if (reStartWithDashOrLeader.test(match)) {
                        hasNoSpaceBefore = true;
                    }

                    // ダッシュまたはリーダーで終わる
                    if (reEndWithDashOrLeader.test(match)) {
                        hasNoSpaceAfter = true;
                    }

                    // 2倍ダッシュ・3倍ダッシュ
                    if (options.doubleDash) {
                        match = match.replace(reConsecutiveDashes, wrapDashes);
                    }

                    return leadingWhitespace + "<span class=\"" + htmlClass.western + (isNumber ? " " + htmlClass.western_number : "") + (isAtParagraphHead ? " " + htmlClass.western_atParagraphHead : "") + (isAtParagraphEnd ? " " + htmlClass.western_atParagraphEnd : "") + (hasNoSpaceBefore ? " " + htmlClass.western_noSpaceBefore : "") + (hasNoSpaceAfter ? " " + htmlClass.western_noSpaceAfter : "") + "\">" + match + "</span>" + trailingWhitespace;
                });

                // 和文始め括弧を検出
                slices[i] = slices[i].replace(reOpeningBracket, function (match, offset) {
                    var isAtParagraphHead;
                    var isLead;
                    var hasSucceeding;
                    var matchBefore = offset === 0 ? new RegExp("[" + Mojik.characters.japaneseOpeningBrackets + "]$").exec(textSlices[textSlices.length - 2]) : offset > 0 ? new RegExp("[" + Mojik.characters.japaneseOpeningBrackets + "]").exec(slices[i].charAt(offset - 1)) : null;

                    // 直前のテキストスライスが始め括弧
                    if (matchBefore) {
                        return "<span class=\"" + htmlClass.punctuationSpacer + "\" data-mjk-punc-pair=\"" + matchBefore[0] + match + "\"></span>" + match;
                    }

                    // 要素の先頭
                    else if (textSlices.length === 1 && (offset === 0 || /^\s+$/.test(slices[i].slice(0, offset)))) {
                            return "<span class=\"" + htmlClass.leadOpeningBracket + " " + htmlClass.leadOpeningBracket_atParagraphHead + "\">" + match + "</span>";
                        }

                        // 独立した、または連続した始め括弧の先頭
                        else {
                                return "<span class=" + htmlClass.leadOpeningBracketBefore + "></span>" + "<span class=" + htmlClass.leadOpeningBracket + ">" + match + "</span>";
                            }
                });

                // 連続する和文約物を検出
                puncPairs.forEach(function (pair) {
                    var reAhead = new RegExp("[" + pair[0] + "]", "g");
                    var reBehind = new RegExp("^(?:" + reTagStr + ")*([" + pair[1] + "])");

                    slices[i] = slices[i].replace(reAhead, function (match, offset) {
                        var ret = match;
                        var textBehind = "";
                        var l;

                        if (offset + match.length === slices[i].length) {
                            for (l = i + 1; l < slices.length; l++) {
                                if (reTag.test(slices[l])) {
                                    continue;
                                } else {
                                    textBehind = slices[l];
                                    break;
                                }
                            }
                        } else {
                            textBehind = slices[i].slice(offset + 1);
                        }

                        if (textBehind && reBehind.test(textBehind)) {
                            ret += "<span class=\"" + htmlClass.punctuationSpacer + "\"></span>";
                        }

                        return ret;
                    });
                });
            }

            el.innerHTML = slices.join("");

            // 行頭の欧文と始め括弧類を検出
            observedFragments = el.querySelectorAll("." + htmlClass.leadOpeningBracket + ":not(." + htmlClass.leadOpeningBracket_atParagraphHead + ")," + "." + htmlClass.western + ":not(." + htmlClass.western_atParagraphHead + ")" + ":not(." + htmlClass.western_noSpaceBefore + ")");
            parseLines();
            window.addEventListener("optimizedResize", parseLines);
            window.matchMedia("print").addListener(parseLines);

            function parseLines() {
                var staticParent = window.getComputedStyle(el).position === "static";
                var parentPaddingLeft = parseFloat(window.getComputedStyle(el).paddingLeft);

                // 検出結果をリセット
                Array.prototype.forEach.call(observedFragments, function (frag) {
                    frag.classList.remove(htmlClass.western_atLineHead, htmlClass.western_afterLineBreak, htmlClass.leadOpeningBracket_atLineHead, htmlClass.fullStopAndComma_atLineEnd, htmlClass.fullStopAndComma_hangingEnd);

                    if (frag.classList.contains(htmlClass.leadOpeningBracket)) {
                        frag.previousSibling.classList.remove(htmlClass.leadOpeningBracketBefore_atLineEnd);
                    }
                });

                // 欧文・約物の相対位置を検出するため親要素のpositionプロパティを一時的に変更
                if (staticParent) {
                    el.style.position = "relative";
                }

                Array.prototype.forEach.call(observedFragments, function (frag) {
                    var marginLeft;
                    var fragBefore;

                    // 行頭欧文
                    if (frag.classList.contains(htmlClass.western)) {
                        marginLeft = parseFloat(window.getComputedStyle(frag).marginLeft);

                        // 直前の要素がbrかどうか
                        if (isLineBreak(frag.previousSibling)) {
                            frag.classList.add(htmlClass.western_atLineHead, htmlClass.western_afterLineBreak);
                        }

                        // 要素内の相対位置を検出
                        else if (frag.offsetLeft - marginLeft - parentPaddingLeft < 1) {
                                frag.classList.add(htmlClass.western_atLineHead);
                            }
                    }

                    // 行頭始め括弧類
                    else if (frag.classList.contains(htmlClass.leadOpeningBracket)) {
                            fragBefore = frag.previousSibling;

                            // 直前がbrかどうか
                            if (isLineBreak(fragBefore.previousSibling)) {
                                frag.classList.add(htmlClass.leadOpeningBracket_atLineHead);
                            }

                            // 要素内の相対位置を検出
                            else if (frag.offsetLeft - parentPaddingLeft < 1) {
                                    frag.classList.add(htmlClass.leadOpeningBracket_atLineHead);
                                    fragBefore.classList.add(htmlClass.leadOpeningBracketBefore_atLineEnd);
                                }
                        }
                });

                // 親要素のpositionプロパティを元に戻す
                if (staticParent) {
                    el.style.position = "";
                }
            }

            function isLineBreak(node) {
                return node && node.nodeName === "BR" && window.getComputedStyle(node).display !== "none";
            }
        });

        function wrapDashes(dashes) {
            var dashesLength = dashes.length;
            var dash = dashes.slice(0, 1);
            var result = "";
            var odd = dashesLength % 2 > 0;
            var len = odd ? (dashesLength - 3) / 2 : dashesLength / 2;
            var l;
            if (dashes.length > 1) {
                for (l = 0; l < len; l++) {
                    result += "<span class=\"" + htmlClass.dash + " " + htmlClass.dash_2em + "\">" + dash + "<span class=\"" + htmlClass.hidden + "\">" + dash + "</span>" + "</span>";
                }
                if (odd) {
                    result += "<span class=\"" + htmlClass.dash + " " + htmlClass.dash_3em + "\">" + dash + "<span class=\"" + htmlClass.hidden + "\">" + dash + dash + "</span>" + "</span>";
                }
            } else {
                result = "<span class=\"" + htmlClass.dash + "\">" + dashes + "</span>";
            }
            return result;
        }
    };

    // https://developer.mozilla.org/en-US/docs/Web/Events/resize#requestAnimationFrame_customEvent
    function throttle(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function func() {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(function () {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    function extend(target, source) {
        var key;
        var val;
        if (source) {
            for (key in source) {
                val = source[key];
                if (typeof val !== "undefined") {
                    target[key] = val;
                }
            }
        }
        return target;
    }

    return Mojik;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {
  $('p:empty').remove();
  $('br + br').remove();
  Mojik.compose(".js-mojik, .js-mojik-text p, .js-mojik-text h2 .js-mojik-text h3 .js-mojik-text h4 .js-mojik-text h5 .js-mojik-text li");
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', function () {
  if (!document.forms.inquiry) {
    return;
  }

  var form = document.forms.inquiry;

  form.addEventListener('submit', function (event) {
    var errorCount = 0;
    event.preventDefault();

    // username
    if (form.username.value.length > 0) {
      document.getElementById('username-error').classList.add('is-hide');
    } else {
      document.getElementById('username-error').classList.remove('is-hide');
      errorCount += 1;
    }

    // email
    if (form.email.value.length > 0) {
      document.getElementById('email-error').classList.add('is-hide');
    } else {
      document.getElementById('email-error').classList.remove('is-hide');
      errorCount += 1;
    }

    // body
    if (form.name.value.length > 0) {
      document.getElementById('name-error').classList.add('is-hide');
    } else {
      document.getElementById('name-error').classList.remove('is-hide');
      errorCount += 1;
    }

    // pp
    if (form.pp.checked) {
      document.getElementById('pp-error').classList.add('is-hide');
    } else {
      document.getElementById('pp-error').classList.remove('is-hide');
      errorCount += 1;
    }

    if (errorCount == 0) {
      form.submit();
    }
  });
});

/***/ })
/******/ ]);