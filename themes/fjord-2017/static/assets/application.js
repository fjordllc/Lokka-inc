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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(function () {
  return $(".js-autosize").autosize({
    append: "\n"
  });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {
  Mojik.compose(".js-mojik, .js-mojik-text *");
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {
  // external links to new window
  $('a[href^="http"]').attr('target', '_blank');
  // force PDF Files to open in new window
  $('a[href$=".pdf"]').attr('target', '_blank');
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Mojik v0.1.5 https://github.com/terkel/mojik
 * @author Takeru Suzuki http://terkel.jp/
 * @license MIT http://opensource.org/licenses/MIT
 */
(function (root, factory) {
    if (typeof module === "object" && module.exports) {
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
}(this, function () {

    var Mojik = Mojik || {};

    Mojik.htmlClassPrefix = "mjk-";

    Mojik.htmlClass = {
        punctuationSpacer: "punctuationSpacer",
        leadOpeningBracket: "leadOpeningBracket",
        leadOpeningBracket_atLineHead: "leadOpeningBracket-atLineHead",
        leadOpeningBracket_atParagraphHead: "leadOpeningBracket-atParagraphHead",
        leadOpeningBracketBefore: "leadOpeningBracketBefore",
        leadOpeningBracketBefore_atLineEnd: "leadOpeningBracketBefore-atLineEnd",
        western: "western",
        western_number: "western-number",
        western_noSpaceBefore: "western-noSpaceBefore",
        western_noSpaceAfter: "western-noSpaceAfter",
        western_atLineHead: "western-atLineHead",
        western_atParagraphHead: "western-atParagraphHead",
        western_atParagraphEnd: "western-atParagraphEnd",
        western_afterLineBreak: "western-afterLineBreak"
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

        // 欧文文字
        western:
            "\\u0000-\\u007F" + // Basic Latin
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
            "\\u2000-\\u206F" + // General Punctuation
            "\\u2070-\\u209F" + // Superscripts and Subscripts
            "\\u20A0-\\u20CF" + // Currency Symbols
            // "\\u20D0-\\u20FF" + // Combining Diacritical Marks for Symbols
            "\\u2100-\\u214F" + // Letterlike Symbols
            "\\u2150-\\u218F",  // Number Forms

        // 欧文始め括弧
        westernOpeningBrackets: "‘“\\(\\[\\{<«‹",

        // 欧文終わり括弧
        westernClosingBrackets: "’”)]}>»›",

        // 欧文ダッシュ (FIGURE DASH, EN DASH, EM DASH, HORIZONTAL BAR, SWUNG DASH)
        westernDashes: "\\u2012\\u2013\\u2014\\u2015\\u2053",

        // 欧文ハイフン (HYPHEN-MINUS, HYPHEN, NON-BREAKING HYPHEN)
        westernHyphens: "\\u002D\\u2010\\u2011",

        // 欧文リード (HORIZONTAL ELLIPSIS, TWO DOT LEADER)
        westernEllipses: "\\u2025\\u2026"
    };

    Mojik.ignoreTag = "pre|code|kbd|samp";

    Mojik.compose = function (selector/*, options*/) {
        var elements = document.querySelectorAll(selector);
        var reCommentStr = "<!--[\\s\\S]*?-->";
        var reTagStr = "<\\/?[^>]+?\\/?>";
        var reTag = new RegExp(reTagStr);
        var reTagDivider = new RegExp(reCommentStr + "|" + reTagStr + "|[^<>]+", "gi");
        var reIgnoreTag = new RegExp("^<(" + Mojik.ignoreTag + ")[ >]", "i");
        var reWestern = new RegExp("[" + Mojik.characters.western + "]+", "g");
        var reWesternAhead = new RegExp("[" + Mojik.characters.western + "]+$");
        var reWesternBehind = new RegExp("^[" + Mojik.characters.western + "]+");
        var rePuncStr =
                Mojik.characters.japaneseOpeningBrackets +
                Mojik.characters.japaneseClosingBrackets +
                Mojik.characters.japaneseMiddleDots +
                Mojik.characters.japaneseFullStops +
                Mojik.characters.japaneseCommas +
                Mojik.characters.japaneseFullWidthSpace;
        var rePuncAhead = new RegExp("[" + rePuncStr + "]$");
        var rePuncBehind = new RegExp("^[" + rePuncStr + "]");
        var reOpeningBracket = new RegExp("[" + Mojik.characters.japaneseOpeningBrackets + "]", "g");
        var puncPairs = [
            [Mojik.characters.japaneseClosingBrackets,
                Mojik.characters.japaneseOpeningBrackets +
                Mojik.characters.japaneseClosingBrackets +
                Mojik.characters.japaneseDividingPunctuations +
                Mojik.characters.japaneseMiddleDots +
                Mojik.characters.japaneseFullStops +
                Mojik.characters.japaneseCommas +
                Mojik.characters.japaneseFullWidthSpace
            ],
            [Mojik.characters.japaneseDividingPunctuations,
                Mojik.characters.japaneseFullWidthSpace
            ],
            [Mojik.characters.japaneseMiddleDots,
                Mojik.characters.japaneseOpeningBrackets
            ],
            [Mojik.characters.japaneseFullStops + Mojik.characters.japaneseCommas,
                Mojik.characters.japaneseOpeningBrackets +
                Mojik.characters.japaneseClosingBrackets +
                Mojik.characters.japaneseMiddleDots +
                Mojik.characters.japaneseFullWidthSpace
            ]
        ];
        var htmlClass = (function () {
            var obj = {};
            for (key in Mojik.htmlClass) {
                obj[key] = Mojik.htmlClassPrefix + Mojik.htmlClass[key];
            }
            return obj;
        }());

        // 要素ごとに処理
        Array.prototype.forEach.call(elements, function (el) {

            // 要素内の文字列をテキストとタグのスライス（文字列片）に分割
            var slices = el.innerHTML.match(reTagDivider);

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
                if ((new RegExp(reCommentStr + "|" + reTagStr + "|^\\s+$")).test(slices[i])) {
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
                        (offset > 0 && rePuncAhead.test(slices[i].slice(0, offset))) ||
                        // スライスの先頭で、先行する直近のテキストスライスが和文約物か欧文で終わる
                        (offset === 0 && textSlices.length > 1 && (
                            rePuncAhead.test(textSlices[textSlices.length - 2]) ||
                            reWesternAhead.test(textSlices[textSlices.length - 2])
                        ))
                    ) {
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
                                match = match.slice(0, - trailingWhitespace.length);
                            } else {
                                // 空白文字のみの場合はなにもしない
                                return match;
                            }
                        }
                    } else if (!hasNoSpaceAfter && (
                        // 空白で終わる
                        /\s$/.test(match) ||
                        // 和文約物が直接後続する
                        rePuncBehind.test(slices[i].slice(matchEndPosition))
                    )) {
                        hasNoSpaceAfter = true;
                    }

                    return leadingWhitespace + "<span class=\"" + htmlClass.western +
                            (isNumber? " " + htmlClass.western_number: "") +
                            (isAtParagraphHead? " " + htmlClass.western_atParagraphHead: "") +
                            (isAtParagraphEnd? " " + htmlClass.western_atParagraphEnd: "") +
                            (hasNoSpaceBefore? " " + htmlClass.western_noSpaceBefore: "") +
                            (hasNoSpaceAfter? " " + htmlClass.western_noSpaceAfter: "") +
                            "\">" + match + "</span>" + trailingWhitespace;
                });

                // 和文始め括弧を検出
                slices[i] = slices[i].replace(reOpeningBracket, function (match, offset) {
                    var isAtParagraphHead;
                    var isLead;
                    var hasSucceeding;
                    var matchBefore =
                            offset === 0? (new RegExp("[" + Mojik.characters.japaneseOpeningBrackets + "]$")).exec(textSlices[textSlices.length - 2]):
                            offset > 0? (new RegExp("[" + Mojik.characters.japaneseOpeningBrackets + "]")).exec(slices[i].charAt(offset - 1)):
                            null;

                    // 直前のテキストスライスが始め括弧
                    if (matchBefore) {
                        return "<span class=\"" + htmlClass.punctuationSpacer +
                                "\" data-mjk-punc-pair=\"" + matchBefore[0] + match +
                                "\"></span>" + match;
                    }

                    // 要素の先頭
                    else if (textSlices.length === 1 &&
                        (offset === 0 || /^\s+$/.test(slices[i].slice(0, offset)))
                    ) {
                        return "<span class=\"" + htmlClass.leadOpeningBracket +
                                " " + htmlClass.leadOpeningBracket_atParagraphHead +
                                "\">" + match + "</span>";
                    }

                    // 独立した、または連続した始め括弧の先頭
                    else {
                        return "<span class=" + htmlClass.leadOpeningBracketBefore + "></span>" +
                                "<span class=" + htmlClass.leadOpeningBracket + ">" + match + "</span>";
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
            observedFragments = el.querySelectorAll(
                "." + htmlClass.leadOpeningBracket +
                    ":not(." + htmlClass.leadOpeningBracket_atParagraphHead + ")," +
                "." + htmlClass.western +
                    ":not(." + htmlClass.western_atParagraphHead + ")" +
                    ":not(." + htmlClass.western_noSpaceBefore + ")"
            );
            parseLines();
            throttle("resize", "optimizedResize");
            window.addEventListener("optimizedResize", parseLines);

            function parseLines () {
                var staticParent = window.getComputedStyle(el).position === "static";
                var parentPaddingLeft = parseFloat(window.getComputedStyle(el).paddingLeft);

                // 検出結果をリセット
                Array.prototype.forEach.call(observedFragments, function (frag) {
                    frag.classList.remove(
                        htmlClass.western_atLineHead,
                        htmlClass.western_afterLineBreak,
                        htmlClass.leadOpeningBracket_atLineHead,
                        htmlClass.fullStopAndComma_atLineEnd,
                        htmlClass.fullStopAndComma_hangingEnd
                    );

                    if (frag.classList.contains(htmlClass.leadOpeningBracket)) {
                        frag.previousSibling.classList.remove(
                            htmlClass.leadOpeningBracketBefore_atLineEnd
                        );
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
                            frag.classList.add(
                                htmlClass.western_atLineHead,
                                htmlClass.western_afterLineBreak
                            );
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

            function isLineBreak (node) {
                return node &&
                        node.nodeName === "BR" &&
                        window.getComputedStyle(node).display !== "none";
            }
        });
    }

    // https://developer.mozilla.org/en-US/docs/Web/Events/resize#requestAnimationFrame_customEvent
    function throttle (type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    return Mojik;
}));


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);
__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(2);
window.Mojik = __webpack_require__(5);
__webpack_require__(3);

/***/ })
/******/ ]);