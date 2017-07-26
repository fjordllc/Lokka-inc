---
title: HTMLのインデントを綺麗にするサービス、「Ham Cutlet」を公開しました！
author: machida

date: 2010-06-01T02:38:12+00:00
url: /articles/281.html
pvc_views:
  - 26515
dsq_thread_id:
  - 1524153302
categories:
  - blog
tags:
  - haml
  - Help me hackers!
  - information

---
<p class="center">
  <a href="http://hamcutlet.fjord.jp/"><img src="http://farm2.static.flickr.com/1291/4658008987_39e78f9f79.jpg" width="500" height="55" alt="snapshot.png" /></a>
</p>

Help me, hackers!に続くフィヨルドのサービス第二弾をリリース！
  
今回はちょっとした便利ツールHTMLのインデントを美しくするサービス、その名も「Ham Cutlet（通称ハムカツ）」です。

色んな人が触ってHTMLがガタガタなサイトをいじってイライラ、なんてことはよくありませんか？そんなとき、Ham Cutletにそのソースを貼ってみてください。
  
インデントの美しいHTMLがゲット出来ます。

このツールはHelp me, hackers!でも採用しているHamlというマークアップ言語を実現する<del datetime="2010-06-01T08:57:05+00:00">rails</del>rubyのgemを使っています（詳しいことは@komagataさんまで）。

技術的には、

（インデントがぐちゃぐちゃの）HTML → 一旦hamlにする → HTMLに戻す（インデントが美しくなってる！）

…ということをしています。
  
早速、イライラさせられるHTMLをHamlを使ってCOOK！