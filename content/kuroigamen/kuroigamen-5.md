---
title: ネットから簡単ダウンロードcURL、とにかく開くコマンド open
page: 05
author: komagata
date: 2010-12-19T10:36:06+00:00
url: /kuroigamen/5.html
aliases:
- "/love/617.html"
- "/articles/617.html"
---

今回は「黒い画面」で使える便利コマンドを紹介していきます。

## ネットから簡単ダウンロード cURL

ネットからファイルを簡単にダウンロードできるcurl（シーユーアールエル）というコマンドがあります。「Client for URLs」の略だそうです。

````bash
$ curl http://example.com
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<HTML>
<HEAD>
  <META http-equiv="Content-Type" content="text/html; charset=utf-8">
  <TITLE>Example Web Page</TITLE>
</HEAD>
<body>
<p>You have reached this web page by typing "example.com",
"example.net","example.org"
  or "example.edu" into your web browser.</p>
<p>These domain names are reserved for use in documentation and are not available
  for registration. See <a href="http://www.rfc-editor.org/rfc/rfc2606.txt">RFC
  2606</a>, Section 3.</p>
</BODY>
</HTML>
````

`curl` は引数に URL を指定するとネットから取ってきて表示してくれます。ブラウザから [http://example.com](http://example.com) にアクセスしてソースを表示したときと同じものが表示されているはずです。

````bash
$ curl http://example.com -o foo.html
````

<a href="http://www.flickr.com/photos/komagata/5273561768/" title="ターミナル — bash — 80×24 by komagata, on Flickr"><img src="http://farm6.static.flickr.com/5248/5273561768_1a3a31482f.jpg" width="500" height="313" alt="ターミナル — bash — 80×24" /></a>

`curl` は `-o` オプションにファイル名を渡すと内容をそのファイル名で保存してくれます。他のソフトをインストールするときも、`curl` でこうやってダウンロードしてくると楽ですね。

## とにかく開くコマンド open

`open` はその名の通り開くコマンドです。

````bash
$ open スタックについて.pdf
$ open http://www.facebook.com
$ open .
````

普通のファイルは Mac で関連付けられてるソフトで開きます。URL は標準のブラウザで開きます。最後のはよく使うんですが、今いるディレクトリを Finder で開きます。「.（ドット）」は今いるディレクトリの意味でしたよね。