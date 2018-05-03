---
title: デザイナーとプログラマー、zip納品 vs Githubインテグレーション
author: komagata
date: 2011-09-16 17:21:05.000000000 +09:00
url: "/articles/904.html"
pvc_views:
- 73471
dsq_thread_id:
- 1543033136
categories:
- blog
aliases:
- "/love/904.html"
---
## Issue82の続き

[こちら][1]の開発レポート、プログラマー側はどうやっていくか実際のIssueをこなしながら紹介したいと思います。

[Github for Mac を使ってデザイナーがブランチ作る、怖話の開発レポート | FJORD, LLC（合同会社フィヨルド）」][1]

といってもプログラマーは黒い画面で黙々といつも通りやるだけなので目新しいことはありませんが・・・。

    % git branch -a
      issue20
      issue26
      issue28
      issue47
      issue52
      issue71
    * master
      refactor-string_size
      remotes/heroku/master
      remotes/origin/Issue82
      remotes/origin/master

@machidaさんが作ったIssue82ブランチがちゃんとありますね。（今度から全部小文字にしましょうと話しましたｗ）

    % git pull origin Issue82

さて、該当のコードを見てみます。


  <a href="http://www.flickr.com/photos/komagata/6152390974/" title="Terminal — vim — 80×24 by komagata, on Flickr"><img src="http://farm7.static.flickr.com/6064/6152390974_23fdd2c832.jpg" width="500" height="365" alt="Terminal — vim — 80×24" /></a>


あー、なるほど。数字の桁数が全部枠で囲われるデザインである以上、こういうマークアップになるのは仕方が無いけど、プログラムが面倒だな・・・。

文字をspanタグで装飾するhelperを作ります。

    # test/unit/helpers/home_helper.rb
    require 'test_helper'
    
    class HomeHelperTest < ActionView::TestCase
      should 'decorated_story_count return decorated html' do
        assert_equal decorated_story_count(17000), '<span class="number">1</span><span class="number">7</span><span class="comma">,</span><span class="number">0</span><<span class="number">0</span><span class="number">0</span>'
      end
    end

こんな感じのhelperがあれば楽かなあ。


  <a href="http://www.flickr.com/photos/komagata/6152405168/" title="Terminal — zsh — 80×24 by komagata, on Flickr"><img src="http://farm7.static.flickr.com/6069/6152405168_237c612242.jpg" width="500" height="365" alt="Terminal — zsh — 80×24" /></a>


テスト。（通常はrake testとguard-testを使っています。）

テストが通るようにします。


  <a href="http://www.flickr.com/photos/komagata/6151876617/" title="Terminal — vim — 80×24 by komagata, on Flickr"><img src="http://farm7.static.flickr.com/6199/6151876617_010c43ea59.jpg" width="500" height="365" alt="Terminal — vim — 80×24" /></a>


こんな感じかな？


  <a href="http://www.flickr.com/photos/komagata/6152423094/" title="Terminal — zsh — 80×24 by komagata, on Flickr"><img src="http://farm7.static.flickr.com/6193/6152423094_be53012800.jpg" width="500" height="365" alt="Terminal — zsh — 80×24" /></a>


OK。

decorated\_story\_countをviewに埋め込んで、後は怖話をランダムで読む部分。


  <a href="http://www.flickr.com/photos/komagata/6152516830/" title="Terminal — vim — 80×24 by komagata, on Flickr"><img src="http://farm7.static.flickr.com/6080/6152516830_3035611485.jpg" width="500" height="365" alt="Terminal — vim — 80×24" /></a>


これは重そうだ・・・。サイトの人気が出てアクセス増えたら直します・・・。

    % git commit -am 'fixed #82'
    % git pull origin master
    % git rebase master
    % git checkout master
    % git merge Issue82
    % git push

topic branchをmasterにmargeしてpush。


  <a href="http://www.flickr.com/photos/komagata/6151963131/" title="#82: 沢山話があることを表すデザイン - Issues - komagata/kowabana - GitHub by komagata, on Flickr"><img src="http://farm7.static.flickr.com/6185/6151963131_eee202a4d7.jpg" width="500" height="257" alt="#82: 沢山話があることを表すデザイン - Issues - komagata/kowabana - GitHub" /></a>


[こちら][2]に書いた通り、git pushするとgithubの該当issueが閉じて、jenkinsでテストされ、staging環境にdeployされます。

staging環境をPC, iPhone, AndoroidでチェックしてOKだったらproductionにdeployします。


  <a href="http://www.flickr.com/photos/komagata/6152467096/" title="iOS Simulator - iPhone / iOS 4.3 (8F192) by komagata, on Flickr"><img src="http://farm7.static.flickr.com/6151/6152467096_1e4830646a.jpg" width="257" height="500" alt="iOS Simulator - iPhone / iOS 4.3 (8F192)" /></a>


良さそう。

    % cap production deploy

で完了です。

## zip納品 vs Githubインテグレーション

一般的なやり方（htmlとcssが毎回zipで送られてくる）とGithubインテグレーション（Issuesに登録しておくと勝手にできてる）を比べてみると生産性が圧倒的に違います。デザイナーもGithubを使ったWebサイト開発のイテレーションの中に入るべきだと思います。

一般的なやり方の場合にプログラマーが何をやっているか思い出してください。zipを解凍して、まず前回のzipとどこが違うのかわからなくなる。diffを取る。直接railsに置けるわけではないので、前回との差分を試行錯誤しながらrailsに入れる。何かちょっとデザインがズレた。どうやってデザイナーに伝えよう。該当部分をブラウザからhtmlに保存してメールする？・・・ああ、考えただけでも面倒くさい・・・。

デザイナーにとってはGithub for Macを使えるだけでなく、ローカルにRails環境が作れる必要もあるので若干敷居が高いですが、それを補って余りあるメリットがあると強く感じました。

 [1]: http://fjord.jp/love/890.html
 [2]: http://fjord.jp/love/870.html