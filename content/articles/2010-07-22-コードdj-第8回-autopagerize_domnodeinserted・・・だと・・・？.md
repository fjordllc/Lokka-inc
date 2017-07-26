---
title: コードDJ 第8回 – AutoPagerize_DOMNodeInserted・・・だと・・・？
author: komagata

date: 2010-07-22T14:54:26+00:00
url: /articles/406.html
pvc_views:
  - 30636
dsq_thread_id:
  - 1560224168
categories:
  - blog
tags:
  - Help me hackers!
  - コードDJ

---
毎週火曜日、Help me, hackers!に上がったコードを紹介していくコードDJ 第8回。

「おでのからだはぼどぼどだー！」

komagata a.k.a. DJです。

今週はコレ。

[WordPress.orgのプラグイン一覧でダウンロード数に目印をつけて欲しい &#8211; Help me, hackers!][1]

登録してくれたのは[monoooki][2] a.k.a. 前田製作所。速攻解決してくれたのは[azu_re][3] a.k.a. Firefoxの人（DJ主観）。

ソースコード：

[cc lang=&#8221;javascript&#8221;]// ==UserScript==
  
// @name WordPress.org highlight counter
  
// @namespace http://efcl.info/
  
// @description WordPress.orgのタグ/単語検索のダウンロード数によって色を変える
  
// @include http://wordpress.org/extend/plugins/tags/*
  
// @include http://wordpress.org/extend/plugins/search*
  
// ==/UserScript==
  
/* TEST URL
      
http://wordpress.org/extend/plugins/search.php?q=word
      
http://wordpress.org/extend/plugins/tags/widget
  
*/
  
GM_addStyle(<> .GM\_downloads\_count\_50000{ background: #cc0000; color: #fff; padding: 1px 3px; -moz-border-radius: 3px; } .GM\_downloads\_count\_10000{ background:#ffb0b0; padding: 1px 3px; -moz-border-radius: 3px; } .GM\_downloads\_count\_5000{ background:#ffd792; padding: 1px 3px; -moz-border-radius: 3px; } .GM\_downloads\_count\_2000{ background:#f9f49d; padding: 1px 3px; -moz-border-radius: 3px; } </>);
  
function hilightCounter(node){
      
var downloadsSpan = $X(&#8216;//span\[@class=&#8221;info-marker&#8221;\]\[text()=&#8221;Downloads&#8221;\]&#8217; ,node);
      
for(var i=0,len=downloadsSpan.length;i<len;i++){ var countTextNode = downloadsSpan[i].nextSibling; var downloadCount = parseInt(countTextNode.textContent.replace(",","","g"), "10");// 数値化 var parDownload = downloadsSpan[i].parentNode; var span = document.createElement("span"); if(downloadCount > 50000){
              
span.setAttribute(&#8220;class&#8221; , &#8220;GM\_downloads\_count_50000&#8221;);
          
}else if(downloadCount > 10000){
              
span.setAttribute(&#8220;class&#8221; , &#8220;GM\_downloads\_count_10000&#8221;);
          
}else if(downloadCount > 5000){
              
span.setAttribute(&#8220;class&#8221; , &#8220;GM\_downloads\_count_5000&#8221;);
          
}else if(downloadCount > 2000){
              
span.setAttribute(&#8220;class&#8221; , &#8220;GM\_downloads\_count_2000&#8221;);
          
}else{
              
continue;
          
}
          
span.textContent = countTextNode.textContent;
          
parDownload.replaceChild(span , countTextNode);
      
}
  
}

document.body.addEventListener(&#8216;AutoPagerize_DOMNodeInserted&#8217;,function(evt){
      
var node = evt.target;
      
//var requestURL = evt.newValue;
      
//var parentNode = evt.relatedNode;
      
hilightCounter(node);
  
}, false);
  
hilightCounter(document);

// $X on XHTML
  
// @target Freifox3, Chrome3, Safari4, Opera10
  
// @source http://gist.github.com/184276.txt
  
function $X (exp, context) {
	  
context || (context = document);
	  
var _document = context.ownerDocument || context,
	  
documentElement = _document.documentElement,
	  
isXHTML = documentElement.tagName !== &#8216;HTML&#8217; && _document.createElement(&#8216;p&#8217;).tagName === &#8216;p&#8217;,
	  
defaultPrefix = null;
	  
if (isXHTML) {
		  
defaultPrefix = &#8216;\_\_default\_\_&#8217;;
		  
exp = addDefaultPrefix(exp, defaultPrefix);
	  
}
	  
function resolver (prefix) {
		  
return context.lookupNamespaceURI(prefix === defaultPrefix ? null : prefix) ||
			     
documentElement.namespaceURI || &#8220;&#8221;;
	  
}

var result = \_document.evaluate(exp, context, resolver, XPathResult.ANY\_TYPE, null);
	  
switch (result.resultType) {
		  
case XPathResult.STRING_TYPE : return result.stringValue;
		  
case XPathResult.NUMBER_TYPE : return result.numberValue;
		  
case XPathResult.BOOLEAN_TYPE: return result.booleanValue;
		  
case XPathResult.UNORDERED\_NODE\_ITERATOR_TYPE:
			  
// not ensure the order.
			  
var ret = [], i = null;
			  
while (i = result.iterateNext()) ret.push(i);
			  
return ret;
	  
}
  
}[/cc]

このブログを読んでる人達ならそろそろグリモン見慣れてきたんじゃないか？泣きながらソース読んでたDJも慣れてきたよ。

12行目からはxmlリテラルでstyleを追加。でも、先頭の<>ってのはなんだろう？

61行目の$X関数はXPathのためのラッパー。こうして見ると色々な人が色々なXPathユーティリティーを選んでるのがわかる。$X関数は比較的昔からあって有名な方なんじゃないかと思う。

26行目のhilightCounterで注文通り、ダウンロード数別に色を変えるためにclassを割り当ててる。

41行目はびっくり。AutoPagerizeのイベントにひっかけてる。ブログのソースコードのSyntax HilightingとかJSのonloadでやってる場合に、AutoPagerizeの2ページ目からは反映されなくてガッカリ・・・ってことが多かったんだけどこれを使えばイケる！

これはDJ得した気分。

WordPressのプラグインページは見る人が多いからuserscripts.orgにきちんと登録してある点も素敵だ。

 [1]: http://help-me-hackers.com/tasks/105
 [2]: http://help-me-hackers.com/monoooki
 [3]: http://help-me-hackers.com/azu_re