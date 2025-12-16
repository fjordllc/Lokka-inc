---
title: 作業の自動化、謎のおまじない shebang（シバン）、PATH を設定する
page: 08
author: komagata
date: 2010-12-20T16:55:34+00:00
url: /kuroigamen/8.html
aliases:
- "/love/655.html"
- "/articles/655.html"
---

## 作業の自動化

「黒い画面」での作業は文字を打ち込むだけの単純で厳密な手順なので簡単に自動化できます。

例えば、僕は [lokka]（https://github.com/lokka/lokka） というソフトを作っていますが、新しいバージョンをリリースする時に、その時の最新のファイルをダウンロードしてきてzipファイルに固める必要があります。下記のようなコマンドでそれが可能です。

````bash
$ git clone https://github.com/komagata/lokka lokka
$ zip -r lokka.zip lokka
$ rm -r lokka
````

git というコマンドで最新のファイルをlokkaというディレクトリ名でダウンロードしてきて、zip コマンドで zip に圧縮し、元のディレクトリはもう要らないので rm コマンドで削除しています。

実はこれをそのままファイルに書くだけで自動化が可能です。make-lokka-zipfile という分り易いファイル名に上記コマンドを書きました。cat コマンドで確認するとこんな感じです。

````bash
$ cat make-lokka-zipfile
git clone https://github.com/komagata/lokka lokka
zip -r lokka.zip lokka
rm -r lokka
````

そのままです。「黒い画面」に打ち込んでいた文字をファイルに書いただけですね。そのファイルを実行するには下記のようにshコマンドに渡します。

````bash
$ sh make-lokka-zipfile
````

ファイルの中に書いたコマンドを順番に実行してくれます。このようにやって欲しいコマンドを順番に書いたファイルを script（スクリプト）と言います。script は演劇などの台本という意味なのでそのままですね。台本通りに「黒い画面」が動いてくれるわけです。php プログラムの事を php スクリプトと言ったりすることがありますが、program（プログラム）も予定表・計画表という意味なので殆ど同じ意味です。

ただ一点、`sh` という謎のプログラムにファイルを渡して実行するという書き方がどうも野暮ったいです。`ls` みたいに自分の書いたスクリプトもコマンドっぽく実行したいところです。

## 謎のおまじない shebang（シバン）

「黒い画面」にはスクリプトを単体で実行するために `shebang`（シバン）という機能があります。

````bash
#!/bin/sh
echo hello
````

上記を `echo-hello` というファイル名で保存して実行してみてください。

````bash
$ chmod u+x echo-hello
$ /Users/komagata/echo-hello
hello
````

`chmod` は Chenge MODe の略でファイルの権限を変更するコマンドです。`echo-hello` というファイルにユーザー実行権限（u+x）を追加しています。

`shebang` とは1行目の最初の2文字

````bash
#!
````

の事です。sharp bang が短くなって shebang となったそうです。また、アメリカの俗語、the whole shebang（何もかも、一切合切）というのと掛けてるという説もあるそうです。シャープはわかります!が「バン！」って感じなのは日本人にはわかり辛いですね。でも #! の事を日本人は「シャープびっくり」と言ったりするので似たようなもんだと思います。

`shebang` は何なのかというと、

> 黒い画面で実行しようとしたファイルの1行目の最初の二文字が#!だったら、その後に書いてあるコマンドに2行目以降の全てを渡す

という機能です。

<a href="http://www.flickr.com/photos/komagata/5277789106/" title="ターミナル — vim — 61×20 by komagata, on Flickr"><img src="http://farm6.static.flickr.com/5289/5277789106_cfa293ab3f.jpg" width="500" height="322" alt="ターミナル — vim — 61×20" /></a>

もう「黒い画面」を作った人がそうなるように作りましたという以外に説明しようがないそのままの機能です。確かに便利ですが、他にやりようは無かったのか疑問です。

この `shebang` を利用すれば様々なスクリプトを単体で実行できる独自のコマンドにすることができます。

<a href="http://www.flickr.com/photos/komagata/5276712507/" title="ターミナル — bash — 79×24 by komagata, on Flickr"><img src="http://farm6.static.flickr.com/5044/5276712507_03b31b1595.jpg" width="500" height="314" alt="ターミナル — bash — 79×24" /></a>

php もスクリプトを php コマンドに渡すという点では全く同じなのでこうやって独自のスクリプトを作ることが出来ます。

しかし当然、普通のテキストファイルで、もしファイルの一行目最初の2文字が `#!` だったら、2行目以降を1行目のプログラムに渡して実行しようとします...。

<a href="http://www.flickr.com/photos/komagata/5277755924/" title="ターミナル — bash — 80×24 by komagata, on Flickr"><img src="http://farm6.static.flickr.com/5044/5277755924_13bd315674.jpg" width="500" height="313" alt="ターミナル — bash — 80×24" /></a>

もちろん foo などというコマンドは無いのでエラーになります。interpreter（インタプリタ）というのは sh や php のようにスクリプトを実行する種類のプログラムのことです。

## PATH を設定する

自分独自のスクリプトはどこに置けばいいのでしょうか。`/bin` や `/usr/bin` はシステムの動作に必要なコマンドを置く場所です。`/usr/local/bin` は全ユーザー（例えばkomagataとmachida）で共有するようなコマンドなら置いても構わないでしょう。今回作ったような自分だけが使うようなスクリプトはホームディレクトリにbinというディレクトリを作ってそこに置く人が多いようです。

````bash
$ mkdir bin
$ mv make-lokka-zipfile bin/
````

置きました。しかし`/Users/komagata/bin` は以前説明した PATH に含まれてないのでいちいちフルパスで打つ必要があって不便です。そこで自分で PATHを 設定してみましょう。

````bash
$ export PATH=$PATH:~/bin
````

export は環境変数を設定するコマンドです。env コマンドの出力結果のように環境変数名と中身を =（イコール）で区切って渡すとその値に設定されます。

`~/bin` というのは妙ですね。これは `$HOME/bin` と同じ意味です。「黒い画面」では `$HOME `を 「~（チルダ）」一文字で表すことができます。

環境変数PATHは「:（コロン）」で区切ってディレクトリ名をつなげたものでした。上記は「今までPATHに設定されてたものに `~/bin` を追加する」という意味になります。

````bash
$ echo $PATH
/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin:/usr/X11/bin:/Users/komagata/bin
````

echo で確認するとちゃんと `/Users/komagata/bin` が PATH に追加されているのがわかります。

````bash
$ make-lokka-zipfile
````

これで自分独自のスクリプトがまるでコマンドのように使えるようになりました。便利ですね。

面倒な手順や覚え辛いオプションの組み合わせなどはスクリプトにしてしまいましょう。

<div class="tips">

<h3>作業を自動化して差をつけろ</h3>

<p>今回覚えたように「黒い画面」で行う処理は簡単にスクリプトにすることができます。スクリプトを書いておけば2度目は自動的に一瞬で作業が終わるので仕事の効率化に役立ちます。</p>

<p>以前、イベントのサイトを作る仕事がありました。イベントで撮った写真を次の日にはサイトに載せなければいけません。ところがその日のイベントの写真は600枚以上もあったのでとてもPhotoshopで一つ一つ縮小・形式変換していては間に合いません。</p>

<p>そこで<a href="http://www.imagemagick.org/script/index.php">ImageMagick</a>というソフトのconvertというコマンドを使って、フォルダ内のファイル全てをリサイズして変換するというスクリプトを書いて、数十分で処理を終わらせました。そしてイベントがあるたびにそのスクリプトを実行すればいいようになったのでとても助かりました。</p>

<p>ImageMagickはもちろんhomebrewでインストールできます。</p>

<pre class=" language-bash"><code class=" language-bash">brew install imagemagick</code></pre>

<p>このように「黒い画面」は自動化ととても相性がいいのです。</p>

</div>
