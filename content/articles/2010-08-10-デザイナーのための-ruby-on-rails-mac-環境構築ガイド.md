---
title: デザイナーのための Ruby on Rails + Mac 環境構築ガイド
author: komagata

date: 2010-08-10T06:10:21+00:00
url: /articles/423.html
pvc_views:
  - 34510
dsq_thread_id:
  - 1522846543
---
つくる社さんの環境構築ガイドを勉強してKEIO Railsのイベントに参加しようとした矢先、@machidaさんがWindowsからMacにSwitchしてしまって、当日何も出来ずに精神的に追い詰められてゲロを吐いてしまいそうだというのでMac用のガイドを書いてみます。

全面参考：[デザイナーのための Ruby on Rails + Windows 環境構築ガイド | つくる社LLC][1]

Railsのアプリを作るには下記の物をインストールする必要があります。

  1. Xcode + iOS SDK（両方必要無いが、MacPortsを使うのに必要なソフトが一杯付いてくる）
  2. MacPorts（Macのアプリを簡単にインストールするプログラム）
  3. Ruby（プログラミング言語）
  4. RubyGems（Rubyのライブラリを簡単にインストールするプログラム）
  5. SQLite3（データベース。Railsのデフォルトデータベース）
  6. Ruby on Rails（RubyのWebアプリが簡単に作れるフレームワーク）

## Xcode + iOS SDKのインストール

下記から最新版をダウンロードしてインストール。（要デベロッパー登録）

<https://developer.apple.com/mac/>

## MacPortsをインストール

下記から最新版をダウンロードしてインストール。（数字が一番大きくて、SnowLeopard対応で拡張子がdmgのヤツ）

例：MacPorts-1.9.1-10.6-SnowLeopard.dmg

<http://distfiles.macports.org/MacPorts/>

## Ruby、RubyGems、SQLite3をインストール

ターミナル.app（別名「黒い画面」）で下記を入力。

    sudo port install ruby rb-rubygems sqlite3 rb-sqlite3


  <a href="http://www.flickr.com/photos/komagata/4878554162/" title="ターミナル — bash — 80×24 by komagata, on Flickr"><img src="http://farm5.static.flickr.com/4097/4878554162_d3efcaa656.jpg" width="500" height="313" alt="ターミナル — bash — 80×24" /></a>


## RubyGemsを最新版にアップデート

    sudo gem update --system

## Ruby on Railsをインストール

    sudo gem install rails

## サンプルアプリを作成してRailsの動作確認

    cd (ホームディレクトリに移動)
    mkdir rails
    cd rails
    rails test (test という Rails アプリを作成)
    cd test
    ruby script/generate scaffold Customer name:string (name というフィールドをひとつだけ持った Customer というモデルをベースにテンプレートの画面を作成)
    rake db:migrate (DB にテーブルを作成)
    ruby script/server (アプリケーションサーバーを起動)


  <a href="http://www.flickr.com/photos/komagata/4878556256/" title="ターミナル — bash — 80×24 by komagata, on Flickr"><img src="http://farm5.static.flickr.com/4102/4878556256_f1cc7c3543.jpg" width="500" height="313" alt="ターミナル — bash — 80×24" /></a>


ブラウザより、http://localhost:3000/customers にアクセスし、New customer で新しいレコードを追加したり、そのあと編集・削除などの操作ができれば成功です。


  <a href="http://www.flickr.com/photos/komagata/4877941951/" title="Customers: index by komagata, on Flickr"><img src="http://farm5.static.flickr.com/4139/4877941951_a593339207.jpg" width="498" height="261" alt="Customers: index" /></a>


 [1]: http://tsukurusha.com/2010/07/ruby_on_rails_setup_guide_for_designers/
