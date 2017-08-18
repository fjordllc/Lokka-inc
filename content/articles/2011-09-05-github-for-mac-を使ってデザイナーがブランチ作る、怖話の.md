---
title: Github for Mac を使ってデザイナーがブランチ作る、怖話の開発レポート
author: machida
date: 2011-09-05T10:14:01+00:00
url: /articles/890.html
pvc_views:
  - 85263
dsq_thread_id:
  - 1525062437
categories:
  - blog

---
只今開発中のサービス、スマホで怖い話が17,000話以上が無料で読めるサイト「<a href="http://kowabana.jp/" target="_blank">怖話</a>」のIssueをGithub for Macを使ってブランチを作って作業をしたので、それのレポート。

## 今回はこのIssueをやってみます。

開発にはGithubにリポジトリを置いて、Issueの管理もGithubを使ってます。


  <a href="http://www.flickr.com/photos/fjord_llc/6114565692/" title="#82: 沢山話があることを表すデザイン - Issues - komagata/kowabana - GitHub by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6087/6114565692_943b4e7d9d.jpg" width="500" height="273" alt="#82: 沢山話があることを表すデザイン - Issues - komagata/kowabana - GitHub" /></a>


## このIssueで解決させたい問題と解決策

### 怖話には17,000話以上もの怖い話があるんだけど、全然そんなにあるように見えない！

なので、トップページにババンッと現在の怖話総数を表示します。

### サイトを開いたらすぐに怖話を読みたい！

怖話の総数の横にランダムで怖話の個別ページに飛ぶリンクを配置します。

## 今回の簡単なラフ


  <a href="http://www.flickr.com/photos/fjord_llc/6114629998/" title="moc by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6067/6114629998_bc23128bf2_z.jpg" width="341" height="640" alt="moc" /></a>


こんな感じで作ってみようと思います。

## ブランチ作成

今回はデザイン（コーディングも含む）を先に作って、後からkomagataさんにその部分にシステムを入れてもらう、っていう手順で進めていきます。

まずは今回のIssue用のブランチを作成。

Github for Macを使うとブランチ作成がすごい楽。Github for Macを使って作業を進めていきます。

Github for Macでkowabanaリポジトリを表示。Wクリック。


  <a href="http://www.flickr.com/photos/fjord_llc/6114640716/" title="GitHub by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6199/6114640716_c6330fc1a3.jpg" width="500" height="347" alt="GitHub" /></a>


ブランチを表示。


  <a href="http://www.flickr.com/photos/fjord_llc/6114096367/" title="GitHub by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6210/6114096367_4b7425882d.jpg" width="500" height="347" alt="GitHub" /></a>


ブランチを追加。今回は「Issue82」というブランチを作りました。


  <a href="http://www.flickr.com/photos/fjord_llc/6115206259/" title="branch by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6080/6115206259_df38e81c56.jpg" width="500" height="347" alt="branch" /></a>


Issue82ブランチの作成直後は、Issue82ブランチが選択された状態になります。


  <a href="http://www.flickr.com/photos/fjord_llc/6115756186/" title="github by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6201/6115756186_70b07aa226.jpg" width="500" height="347" alt="github" /></a>


これだけで、デザイナーにとってはちょっと怖いブランチの作成作業があっという間に完了。

UIも直感的！

## デザイン＋コーディング

では、先ほど作ったdesignブランチにデザインを入れていきます。

ローカルで怖話を立ち上げて作業開始！

ちょこちょこっといじって … 完成。


  <a href="http://www.flickr.com/photos/fjord_llc/6115646924/" title="iOSシミュレータ - iPhone / iOS 4.3 (8F192) by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6088/6115646924_b850f0bbca_z.jpg" width="341" height="640" alt="iOSシミュレータ - iPhone / iOS 4.3 (8F192)" /></a>


## リモートリポジトリへpush

まだデザインとコーディングが出来ただけで、システムは入っていない状態。

このブランチをpushして、komagataさんにシステムを入れてもらって、masterのブランチにマージしてもらいます。

### Github for Macを使ったcommit

まずは作業内容をcommit。commitもGithub for Macを使ってやってみます。

「Changes」をクリック。


  <a href="http://www.flickr.com/photos/fjord_llc/6115834970/" title="changes2 by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6090/6115834970_d4c930a2d0.jpg" width="500" height="347" alt="changes2" /></a>


今回の変更点、追加画像ファイルなどが表示されています。チェックボックスでcommitする内容を選択できるのはかなり便利！

「1回のcommitには一つのIssueだけにする」、という決まりがあったのにcommitを忘れていた、なんてことがあった場合、commitを小分けすることが出来ます。

今回は一つのIssueの作業しかしてないので、全部のチェックボックスにチェックを入れます。


  <a href="http://www.flickr.com/photos/fjord_llc/6115226043/" title="select by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6202/6115226043_63785dffc3.jpg" width="500" height="347" alt="select" /></a>


commitメッセージを記入したら「Commit Chenges」ボタンをクリックしてcommit。

Issue82ブランチにcommitしましたよ、と表示されました。


  <a href="http://www.flickr.com/photos/fjord_llc/6115768834/" title="commiting by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6082/6115768834_2db8a22102.jpg" width="500" height="347" alt="commiting" /></a>


### push

では、いよいよリモートリポジトリへpush。

Branchesに戻って、Issue82ブランチの「Publish」ボタンをクリック。


  <a href="http://www.flickr.com/photos/fjord_llc/6115200103/" title="GitHub by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6070/6115200103_04926f4676.jpg" width="500" height="347" alt="GitHub" /></a>


pushをすると、lingrの社内チャットにメッセージが流れるようになってます。


  <a href="http://www.flickr.com/photos/fjord_llc/6115760488/" title="lingr by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6181/6115760488_7fe3ae5afa.jpg" width="500" height="157" alt="lingr" /></a>


では、Githubに行って確認してみます。


  <a href="http://www.flickr.com/photos/fjord_llc/6115304797/" title="complete by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6197/6115304797_5ccf1e010c.jpg" width="500" height="353" alt="complete" /></a>


出来ました！

Github for Macを使えばデザイナーでも簡単にブランチを作ってpushが出来てしまうのでオススメ。
