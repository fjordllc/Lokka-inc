---
title: Package Manager（パッケージマネージャー）の必要性、Xcode のインストール、Homebrew のインストール、Homebrewを使ってみる
page: 06
author: komagata
date: 2010-12-19T13:01:54+00:00
url: /kuroigamen/6.html
aliases:
- "/love/622.html"
- "/articles/622.html"
---

[![Image from Gyazo](https://i.gyazo.com/79509022544c97c250a18736b5e38b5c.png)](https://gyazo.com/79509022544c97c250a18736b5e38b5c)

今回は Homebrew を導入してフリーソフトを簡単にインストールできるようにしましょう。

## Package Manager（パッケージマネージャー）の必要性

「黒い画面」では以前紹介した ls や curl など、単機能のコマンドを組み合わせることで複雑な処理を実現します。一つのソフトが複数のソフトを利用するため、「ソフト A をアップデートしたらソフト B、ソフト C が動かなくなった「という状況が発生します。「ソフト B 5.0 にはソフト A 2.0 以上が必要「といった関係があるためです。これをソフトの依存関係と言います。

無数のソフトの依存関係を手動で管理するのは面倒過ぎるので Package Manager（パッケージマネージャー）と呼ばれる種類のソフトがよく使われます。Package Manager は「そのソフトにどのソフトのバージョン何以上が必要か」、「今インストールされているソフトは何か」といった情報を持っているため、必要に応じてソフトを勝手にダウンロードしてきてインストールしてくれます。便利過ぎますね。今回は最近 Mac で人気のある Package Manager の Homebrew を使ってみます。（「黒い画面」のテーマ名「Homebrew」とたまたま同名ですね。）

## Homebrew のインストール

Homebrew のインストール方法は斬新です。

```bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

上記は ruby コマンドと curl コマンドを組み合わせています。上記の URL には ruby プログラムで Homebrew のインストールプログラムが書かれています。それを curl で取ってきて ruby で実行しているわけです。（curl の-f -s -S -L オプションをそれぞれ man で調べてみましょう。）

これならば 1 行「黒い画面」にコピペすればインストールが完了するのでユーザーは簡単ですし、ソフトの提供側もインストールプログラムに変更があっても上記のファイルの中身を変えればユーザーに気付かれずに対応できます。

注意：上記のインストールコマンドの内容は変わるかもしれないので、その都度 Homebrew のサイトにアクセスして最新の内容に従ってください。

## Homebrew を使ってみる

Homebrew をインストールすると/usr/local/bin に brew というコマンドが増えます。では tree というフリーソフトをインストールしてみましょう。

```bash
$ brew search tree
git-subtree  pstree       quicktree    tree         treeline
```

brew は search, install, uninstall といったサブコマンドと言われる引数を最初に指定します。サブコマンド方式は一般的なコマンドのオプションとは少し違いますが、色々なことを一つのコマンドでやる場合に覚えやすくなるという利点があります。上記は tree という文字を含むソフトの一覧を表示しています。

僕の知らないコマンドも沢山あります。目的のコマンドである tree もちゃんと表示されていますね。

```bash
$ brew install tree
==> Downloading ftp://mama.indstate.edu/linux/tree/tree-1.5.3.tgz
File already downloaded and cached to /Users/komagata/Library/Caches/Homebrew
==> /usr/bin/cc -O3 -march=core2 -msse4.1 -w -pipe -o tree tree.c strverscmp.c
/usr/local/Cellar/tree/1.5.3: 4 files, 88K, built in 2 seconds
```

brew install ソフト名でダウンロード・インストールが完了します。tree は小さなソフトなので一瞬で終わりました。便利ですね。

<a href="http://www.flickr.com/photos/komagata/5273888442/" title="ターミナル — bash — 80×24 by komagata, on Flickr"><img src="http://farm6.static.flickr.com/5286/5273888442_727b34faca.jpg" width="500" height="313" alt="ターミナル — bash — 80×24" /></a>

ちなみに tree はこういうコマンドです。大体わかりますよね？

要らなくなったら brew uninstall ソフト名で綺麗に消えるので安心です。

```bash
$ brew uninstall tree
```

現状 Homebrew は 1356 個のソフトに対応しているそうです。tree のような小物から mysql のような大物まで沢山あります。是非色々と search して install してみてください。

<div class="tips">

<h3>curlに似たコマンド</h3>

<p>Macではダウンロードにcurlがよく使われますが、Linuxではwgetというコマンドが同じ用途によく使われます。"w" "g" "e" "t" というアルファベットは全て左手だけでタイプ出来るので個人的には好きです。</p>

<p>これももちろんbrewでインストールできます。</p>

<pre class=" language-bash"><code class=" language-bash">$ brew install wget</code></pre>

</div>
