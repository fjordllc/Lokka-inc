---
title: foodfoto inc.サイトの作成に使ったツール・サービス
author: komagata
date: 2011-02-03T12:50:12+00:00
url: /articles/756.html
pvc_views:
  - 96554
dsq_thread_id:
  - 1521482315
---
お手伝いさせて頂いた[foodfoto inc][1]のコーポレートサイトが2月1日に公開されました。デザインプロセスは@machidaさんが書かれたので僕はシステム面について書きたいと思います。

といってもプログラマーの僕は殆ど何もやってません。これは依頼者である@func09さんとデザイナーの@machidaさんがコラボレーションツールを上手く使った為だと思います。そこでfoodfoto.jpサイトを作るに当たって使ったツールやサービスを紹介してみたいと思います。

## Basecamp

[<img src="http://farm5.static.flickr.com/4080/5412268263_622eae84d0.jpg" width="250" height="147" alt="basecamp" />][2]

言わずと知れた[37signals, LLC][3]のコラボレーションツール。ハードに使う人・ソフトに使う人、プロジェクトに関わる人は色々いると思いますが、今回、常にBasecampの画面を睨んでいるというようなハードな使い方ではなく、ソフトに関わった僕としては&#8221;メッセージ&#8221;の機能が便利に思いました。

&#8220;メッセージ&#8221;は要は掲示板なんですが、デザインラフをアップしたとき、進捗があったときなど、必要な時にメールで飛んでくるのが便利でした。メールだと他の作業の妨げにならずに、自分のペースで確認できます。やり取りを確認しながら、技術的なポイントについて確認を取ったりしました。

FJORDでは[Heroku上のRedmine][4]を使っているので早速真似して&#8221;メッセージ&#8221;に似た&#8221;フォーラム&#8221;機能を有効にしてみました。

## Github

[<img src="http://farm6.static.flickr.com/5173/5412284521_7fe22807ea_m.jpg" width="160" height="240" alt="github-mobile-wallpaper" />][5]

お馴染みのソースコードリポジトリ共有サイト。あーだこーだ言うよりコード自身でコミュニケーションするのが一番早いとつくづく思いました。今回はサイトの多言語化について、文章で説明すると長いんですが、コードだとすぐ済みました。

今回は後述のHerokuとLokkaをあわせてリモートリポジトリをorigin(github), heroku, lokkaと使い分けました。

## Heroku

[<img src="http://farm5.static.flickr.com/4082/5412906786_4a9eed3bd5_o.png" width="162" height="70" alt="heroku_logo" />][6]

最近[Salesforce][7]に買収されたRubyのRackアプリのホスティングをしてくれるサービス。FJORDでも殆どのサービスで使っています。一番気に入っているのは無料なところです！

無料なので、旧foodfotoサイトと新foodfotoサイトの二つを用意し、公開時に単純にDNSを切り替えました。(@func09さんが)

## Lokka

[<img src="http://farm6.static.flickr.com/5212/5412909542_d496b61e9f.jpg" width="500" height="108" alt="Lokka - CMS for Cloud" />][8]

言わずと知れないクラウド向けCMS。要はHeroku等のクラウド環境で動くRuby製のWordPressです。HerokuとMacで簡単に動く事に注力して出来ているのですんなり行きました。また、&#8221;たまたま&#8221;僕が開発を行っていて、@machidaさんが扱いに習熟していたので問題ありませんでした。

元々WordPressでも殆ど僕の出番は無かったんですが「ちょっとこの機能のプラグインを作って欲しい」といったことはよくありました。その時にPHPを書くのとRubyを書くのでは精神的に全然違います・・・。テーマ修正もHamlなら快適です。(erbも使えますよ！)

## デザイナーが“黒い画面”を使える効能

プロジェクト開始の日に上記のBasecamp, Github, Herokuのコラボレーターに@komagataと@machidaを追加して頂きました。とっても楽です。

プログラマの方なら「何か普通なツールばっかりじゃないか」と思われるかも知れません。しかし、プログラマーの僕が殆ど手を動かさずできたのは、

「Basecampでスケジュールを確認し、GithubからpullしてきてテーマをHamlで書き、ローカルのLokkaで確認してcommitし、Herokuにpushする」

ということを全てデザイナーが出来るからこそなのです。

もちろん全てのデザイナーがこれらを使いこなせるべきとは言いませんが、これによって可能になる生産性の向上は素晴らしいものがありました。またデザイナーがgitやherokuを使うといっても完璧に理解するという感じではなく、基本的な手順がなぞれるぐらいで十分です。想定外の事が起きたらプログラマーにやってもらえばいいんです。

僕らのような小さな会社はこれからますます他の会社や個人と協力しながら仕事をする機会が増えていくと思います。そのためにはこういったコラボレーションツールを活用することはとても重要になっていくと感じました。

## 宣伝

@machidaさんがfoodfoto inc.の作成が終わって暇なので「あら、うちのサイトもこの会社に頼もうかしら」という方がいらっしゃったら[@machida][9]か[@komagata][10]までご連絡下さい。

 [1]: http://foodfoto.jp
 [2]: http://basecamphq.com/ "basecamp by komagata, on Flickr"
 [3]: http://37signals.com/
 [4]: http://docs.komagata.org/4558
 [5]: http://github.com "github-mobile-wallpaper by komagata, on Flickr"
 [6]: http://heroku.com "heroku_logo by komagata, on Flickr"
 [7]: http://www.salesforce.com
 [8]: http://lokka.org "Lokka - CMS for Cloud by komagata, on Flickr"
 [9]: http://twitter.com/machida
 [10]: http://twitter.com/komagata
