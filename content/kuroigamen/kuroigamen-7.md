---
title: ファイルの作成、ディレクトリの作成、ファイルのコピー、ファイルの移動、ファイルの削除、ファイルの表示
page: 07
author: komagata
date: 2010-12-20T16:01:44+00:00
url: /kuroigamen/7.html
aliases:
- "/love/649.html"
- "/articles/649.html"
---

前回で「黒い画面」用のフリーソフトが使えるようになったので次は「簡単な自動化」が出来るようにファイル操作の基本を覚えてしまいましょう。

## ファイルの作成

```bash
$ touch foo
```

touchコマンドは空のファイルを作成します。本来既にあるファイルに触って(touchして)最終更新日を更新するだけのコマンドですが、空ファイルを作るのにも使われます。

## ディレクトリの作成

```bash
$ mkdir bar
```

mkdirはMaKe DIRectoryの略でディレクトリを作成します。-pオプションで深い階層を持つディレクトリも一気に作れるのが便利です。

```bash
$ mkdir -p foo/bar/buz
```

<a href="http://www.flickr.com/photos/komagata/5277162694/" title="ターミナル — bash — 80×24 by komagata, on Flickr"><img src="http://farm6.static.flickr.com/5203/5277162694_308eae9af9.jpg" width="500" height="313" alt="ターミナル — bash — 80×24" /></a>


## ファイルのコピー

```bash
$ cp foo /tmp
```

cpはCoPyの略で、そのまんまですがファイルをコピーするコマンドです。上記ではfooファイルを/tmpディレクトリにコピーしています。

```bash
$ cp foo bar
```

ファイル名を指定すればその名前でコピーされます。fooの複製barが出来ました。

```bash
$ cp -r foo /tmp
```

-rオプションを付ければディレクトリを丸ごとコピーできます。


<a href="http://www.flickr.com/photos/komagata/5277169482/" title="ターミナル — bash — 80×24 by komagata, on Flickr"><img src="http://farm6.static.flickr.com/5242/5277169482_506bfa2952.jpg" alt="ターミナル — bash — 80×24" /></a>


-rを付けないと「fooはディレクトリだからコピーできないよ」とエラーが出ています。親切ですね。

## ファイルの移動

```bash
$ mv foo bar
```

mvはMoVeの略でそのまんまですが、ファイルを移動するコマンドです。cpと違って元のファイルは無くなってしまうので注意です。また、cpと違ってオプションを付けなくてもディレクトリの移動が可能です。

## ファイルの削除

```bash
$ rm foo
```

rmはReMoveの略でファイルを削除するコマンドです。略し過ぎですね。

```bash
$ mkdir -p foo/bar/buz
$ rm -r foo
```

-rオプションを付けるとディレクトリを丸ごと削除してくれます。危ないですね。sudoと組み合わせればどんな物も削除出来てしまうので注意してください。下記は絶対に実行してはいけません。

```bash
$ sudo rm -rf / # 絶対に実行してはいけない
```

## ファイルの表示

```bash
$ cat /etc/hosts
##
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting.  Do not change this entry.
##
127.0.0.1     localhost
255.255.255.255     broadcasthost
::1             localhost
fe80::1%lo0     localhost
```

catはconCATenateの略でファイルの中身を表示するコマンドです。concatenateは連結させるという意味で本来は引数に渡した二つのファイルを繋げて表示するコマンドですが、一つしかファイルを渡さなければ単に中身を表示するのでその用途の方で主に使われている悲しいコマンドです。lsやrmやcatのような基本的なコマンドは問答無用で覚えさせられることが多いので「cat?何で猫がファイルを表示するんだろう？」と思う人は多い(ハズ)です。

<div class="tips">
  <h3>ファイルの編集は？</h3>

  <p>
    ファイルの作成、コピー、移動、削除と来たら編集を何故やらないの？と思うかもしれません。「黒い画面」にも当然テキストエディターソフトがあります。代表的なものはviとemacsです。両方とも使い方に癖があるため「黒い画面って怖い」と思われる原因になっている気がするのでこのシリーズでは説明しません。
</div>

さあこれでファイル操作がひと通り出来るようになりました。普段Finderでやっていることもなるべく「黒い画面」でやるようにしてみてください。
