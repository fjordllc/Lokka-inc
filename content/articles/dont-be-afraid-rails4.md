---
title: 本当は怖くないRuby on Rails入門 Part.4
author: komagata
date: 2018-02-04T00:01:07+09:00
url: /articles/dont-be-afraid-rails4.html
draft: true
categories:
  - blog
tags:
  - dont-be-afraid-rails
---
## データベースの中身を表示しよう
{{% teacher %}}
今回はHTMLのFormについて話しましょう。

まずは簡単なHTMLフォームをrailsで作ってみます。下記のファイルを作ってみてください。

config/routes.rb:

```ruby
Rails.application.routes.draw do
  get "fruits/new", to: "fruits#new"
end
```

app/controllers/fruits_controller.rb:

```ruby
class FruitsController < ApplicationController
  def new
  end
end
```

app/views/fruits/new.html.erb:

```html
<h1>フルーツ作成</h1>

<form action="/fruits/new" method="get">
  <p>
    Name:
    <br>
    <input name="name" />
  </p>
  <p>
    Price:
    <br>
    <input name="price" />
  </p>
  <input type="submit" />
</form>
```

{{% /teacher %}}
![ss](https://i.gyazo.com/d8963f817997e48e1d288dde6823991d.png)
{{% student %}}
表示されました。

フォームはユーザーの入力を使って情報を送れる（HTTPリクエストを送れる）んですよね。

これは前Partで作った`fruit`を追加するフォームですね。

HTMLのFormは勉強したのでそれぞれのタグや`action`、`method`などのアトリビュートは知ってます！
{{% /student %}}
{{% teacher %}}
`action`はリクエストを送る対象のURLを指定できて、`method`には`get`や`post`などを選べるんでしたね。

実際にこのフォームを使ってリクエストを送ってみましょう。
{{% /teacher %}}
{{% student %}}
わかりました。Grapeを作ってみます。
{{% /student %}}
![ss](https://i.gyazo.com/b5953c574c721ba167302e7fa5f2e35e.png)
{{% student %}}
・・・入力して送信っと。
{{% /student %}}
![ss](https://i.gyazo.com/33b99c3dfc74e4159a68d3df799c9be6.png)
{{% student %}}
次のページでURLが長くなりました！

この`?`のあとに続いてるのは私が入力したヤツですね。
{{% /student %}}
{{% topic %}}
## 前提となる技術とカリキュラム

リンク先はFjord Boot Camp内のカリキュラムになっています。

- データベース
  - [mysqlの基本](https://bootcamp.fjord.jp/practices/21)
- SQL
  - [sqlの基本](https://bootcamp.fjord.jp/practices/20)
- ruby
  - [Rubyの基本](https://bootcamp.fjord.jp/practices/26)
{{% /topic %}}

{{< bootcamp >}}
