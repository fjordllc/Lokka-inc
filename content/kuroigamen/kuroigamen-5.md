---
title: ネットから簡単ダウンロードcURL、とにかく開くコマンド open、ニコニコ動画でお馴染みのあの声 SayKana
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

## ニコニコ動画でお馴染みのあの声 SayKana

あの声を使える SayKana というフリーソフトがあります。下記のページからダウンロード・インストールしてください。

[SayKana Mac用音声合成プログラム](https://www.a-quest.com/quickware/saykana/)

`/usr/local/bin/saykana` というコマンドがインストールされます。以前PATHを確認しましたが、`/usr/local/bin` も PATH に最初から含まれているのでディレクトリ名は省略して実行できます。

````bash
$ saykana くろいがめんわこわくないよ
````

saykana は引数にひらがな・カタカナを指定すると日本語音声で読み上げてくれる音声合成ソフトです。

````bash
$ saykana -s 70 ゆっくりよみあげることもできるよ
````

-sオプションで読み上げるスピードを調節することができます。（100がデフォルト）

````bash
$ saykana -s 70 くろいがめんわこわくないよ -o dont-be-afraid.aiff
````

`-o` オプションで AIFF（音声ファイル）として保存できます。`-h` でヘルプが表示されるので他にも色々試してみましょう。

<div class="tips">

<h4>saykana の元ネタ</h4>

<p>Macにはsayという英語の音声合成ソフトも入っています。saykanaはそれを意識して作られています。</p>

<pre class=" language-bash"><code class=" language-bash">$ say holy cow</code></pre>
</div>
