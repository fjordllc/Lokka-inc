# ブログの投稿方法

## command

```
$ hugo new articles/`date "+%Y-%m-%d"`.md
```

```
/Users/[user]/dev/fjord-hugo/content/articles/2017-08-18.md created
```

この場所にmarkdownファイルが生成される。

## front matter

生成されたファイルにこのような記述がある。

```
---
title: XXXX
author: XXXX
date: 2017-08-15T17:44:48+09:00
url: /articles/XXXX.html
draft: true
tags:
  - XXXX
---
```

記述方法はyaml。
`XXXX`の部分に任意のテキストを入力する。

### title: XXXX

`title: XXXX` この `XXXX` には記事のタイトルを入力する。

### author: XXXX

`author: XXXX` この `XXXX` には投稿者の名前を入力（例: machida）。
名前は半角英数。

### date: 2017-08-15T17:44:48+09:00

`date: 2017-08-15T17:44:48+09:00` は投稿日時。
ファイル生成時の日時が書き込まれているが、公開するタイミングで日時を調整する。

### url: /articles/XXXX.html

`author: XXXX` この `XXXX` には記事のパーマリンクを入力。
全角も可能だが、半角英数で入力。

### draft: true

`draft: true` が書かれていると公開がされない。
公開時はこの行を削除する。

### `tags:`

`tags:` にはこの記事の任意のtagを入力する。
全角日本語も可能だが、半角の英語にする。
tagは複数可能。

#### 例

```
tags:
  - information
  - boughtit
```

### トップページに表示する投稿

#### 記事をトップページに表示する方法

記事をトップページに表示する場合は、tag に `information` を含める。

#### トップページに表示する投稿のルール

全文を表示させず、ちょうどいいところで

```
<!--more-->
```

を書く。
すると、その部分までがトップページに表示される。

#### 例

```
---
title: インターンシップのサイトがリニューアル
author: komagata
date: 2017-06-22T09:39:19+00:00
url: /articles/1941.html
tags:
  - information
---
弊社のインターンシップで使っているサイト（[256 INTERNS][1]）をリニューアルしました。

[<img src="https://i.gyazo.com/9c41f449fa958fc45b1062b95b43ae6b.png" alt="https://gyazo.com/9c41f449fa958fc45b1062b95b43ae6b" width="500" />][1]

<!--more-->

弊社インターンにならないとログインできませんが、中はEラーニングシステムになっています。

<img src="https://i.gyazo.com/43fd4cc9713b35d470ca73468b3930fc.png" alt="https://gyazo.com/43fd4cc9713b35d470ca73468b3930fc" width="500" />

インターン生は絶賛募集中ですので、こちらからぜひ！

 [1]: http://256interns.com
```
