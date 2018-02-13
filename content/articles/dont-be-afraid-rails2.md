---
title: 本当は怖くないRuby on Rails入門 Part.2
author: komagata
date: 2018-02-02T00:01:07+09:00
url: /articles/dont-be-afraid-rails2.html
draft: true
categories:
  - blog
tags:
  - dont-be-afraid-rails
---
## 自分のページを表示してみよう
{{% teacher %}}
さて、Railsを立ち上げることができたので、用意されているページではなく、自分で書いたページを表示してみましょう。

自分で書いたページを表示するには最低下記の3つのファイルが必要です。

- View（ビュー）
- Controller（コントローラー）
- Routes（ルーツ）

ViewはHTMLを書くファイルです。これはHTMLにrubyを混ぜて書くことのできるerbで書きます。

Controllerはデータベースから値を取ってきたり、Viewで表示したいものを変数に詰めたりといったRubyでの処理を書くファイルです。

RoutesはどのURLでどのControllerを表示するのか、といった設定を書くファイルです。
{{% /teacher %}}
{{% student %}}
なんとなく、rubyでいろいろ書くためのファイルとHTMLを書くファイルがあるというのはわかりますが、Routesっていうのがピンときません。
{{% /student %}}
{{% teacher %}}
確かにそうかもしれませんね。とにかく一番シンプルなページを書いてみましょう。そうすれば上記で言った意味がわかると思いますよ。

これからはこんなイメージを頭に浮かべながら書いてもらえるとわかりやすいかもしれません。

![ss](/images/dont-be-afraid-rails/mvc.png)
{{% /teacher %}}
{{% teacher %}}
まずはViewを書きましょう。`bundle install`したディレクトリから見て`app/views/home/index.html.erb`に下記のような内容のファイルを作ってください。`home`ディレクトリは無いと思うので作ってくださいね。

app/views/home/index.html.erb:

```ruby
<h1>Hello, Rails</h1>
```
{{% /teacher %}}
{{% student %}}
簡単なHTMLですね。erbは以前のカリキュラムでやりましたね。
{{% /student %}}
{{% teacher %}}
次はControllerを作ります。`app/controllers/home_controller.rb`というファイル名で下記の内容のファイルを作ってください。

app/controllers/home_controller.rb:

```ruby
class HomeController < ApplicationController
  def index                    
  end
end
```
{{% /teacher %}}
{{% student %}}
あ、これはクラスの継承ですね？

rubyのカリキュラムをやっているとき、継承なんていつ使うんだろうっておもってましたけど、すぐに出てきましたね。indexメソッドは空でいいんですか？
{{% /student %}}
{{% teacher %}}
今は空でいいです。

最後はRoutesを作ります。Routesファイルは既にあると思います。`config/routes.rb`を下記のように修正してください。

config/routes.rb:

```ruby
Rails.application.routes.draw do
  get "/home", to: "home#index"
end
```
{{% /teacher %}}
{{% student %}}
見慣れない書き方ですね。これはrubyなんですか？
{{% /student %}}
{{% teacher %}}
これもれっきとしたrubyですよ。`get`というメソッドに`"/home"`と`{ to: "home#index" }`という引数を2つ渡しているだけです。

引数の最後のhashは省略できるのでこんな見た目になっています。

`get`というのはHTTPプロトコルのところで学んだ`GET`や`POST`の`get`です。

`/home`というURLに`GET`でアクセスすると`app/controllers/home_controller.rb`にある`HomeController`の`index`メソッドを呼び出す。

という設定になります。

`HomeController`の`Controller`は省略して、メソッド名と`#`でつなげて書きます。

メソッドを表すのに`#`を使うのはrubyではよくでてくるので覚えておくといいでしょう。

`Dog#jump`と書くと`Dog`クラスの`jump`メソッドという意味です。
{{% /teacher %}}
{{% student %}}
なるほどー。HTTPプロトコルで学んだ`GET`や`POST`って意味あるのかなって思ってたんですが、知らないとRoutesが書けないんですね。

ってことは

```ruby
post "/home", to: "home#index"
```

というのもあるんですか？
{{% /student %}}
{{% teacher %}}
はい。`put`や`delete`、`patch`などたくさんありますよ。
{{% /teacher %}}
{{% teacher %}}
View、Controller、Routesの3つのファイルが書けたら`http://localhost:3000/home`にアクセスしてみてください。
{{% /teacher %}}
{{% student %}}
あ！私の書いたHTMLが表示されました！
先生、やりました！

![ss](https://i.gyazo.com/cc421d38e0f6166bd99333f1f080f91e.png)

{{% /student %}}
{{% student %}}
なるほどー！

ということは、さっきの図はファイルでいうとこんな感じということですか？

![ss](/images/dont-be-afraid-rails/mvc2.png)
{{% /student %}}
{{% teacher %}}
その通りです。

routes.rbは1つのファイルに追記していくだけですが、ControllerやViewのファイルをたくさん作っていけばたくさんページが作れます。

それではViewのファイルのHTMLを好きに書き換えてみてください。
{{% /teacher %}}
{{% student %}}
なるほど！Viewファイルを変えれば好きな表示ができるんですね。

できました！
{{% /student %}}
{{% teacher %}}
これは・・・なんですか？

![https://gyazo.com/84ebc475d2733e8a37309a6891eb7b69](https://i.gyazo.com/84ebc475d2733e8a37309a6891eb7b69.png)
{{% /teacher %}}
{{% student %}}
羊羹の名作、とらやの夜の梅・・・です。（ゴクリ・・・）
{{% /student %}}
{{% teacher %}}
・・・好きに書き換えろと言ったのは私なので、まあいいでしょう。

そうです。そうやってViewファイルにHTMLを書いていけば自分のWebページができそうだということはわかりましたか？
{{% /teacher %}}
{{% student %}}
はい！`YokanController`に`yokan.html.erb`も作れそうです。

でもこれだと普通のHTMLを置いたほうが楽ですね。
{{% /student %}}
{{% teacher %}}
その通りですね。Viewがerbであることを活かしてちょっとアプリっぽくしましょう。

Controllerに下記を加えてください。

app/controllers/home_controller.rb:

```ruby
class HomeController < ApplicationController
  def index
    @time = Time.now
  end
end
```

Viewを下記のように変えてみてください。

app/views/home/index.html.erb:

```ruby
<p>只今の時間: <%= @time %></p>
```
{{% /teacher %}}
{{% student %}}
今の時間が表示されました。

![https://gyazo.com/5c3cbb1c3401b1d2862645776a7b8ccc](https://i.gyazo.com/5c3cbb1c3401b1d2862645776a7b8ccc.png)
{{% /student %}}
{{% teacher %}}
erbでは`<%`と`%>`の間にrubyが書けるんでしたよね。最初に`<%=`と書くとその式の結果をその場所に埋め込んでくれます。Controllerの方でインスタンス変数`@time`に入れたものをViewで出しています。
{{% /teacher %}}
{{% student %}}
インスタンス変数・・・あーrubyでやりましたね〜。こうやって使うんですね。

Controllerの方で値を詰め込んでおいて、Viewで表示するんですね。
{{% /student %}}
{{% student %}}
はい。Viewにrubyのロジックを書くこともできますが、ゴチャゴチャになってしまうのでrubyでの細かい処理はControllerの方に書くようにしましょう。
{{% /student %}}
{{% student %}}
あれ？そういえばrubyで出力するのは`puts`じゃなかったでしたっけ？
{{% /student %}}
{{% teacher %}}
良い質問ですね。では`<%= @time %>`の代わりに`<% puts @time %>`と書いてみてください。
{{% /teacher %}}
{{% student %}}
あっ、時間がでなくなった。

![ss](https://i.gyazo.com/e91c60c16d42af34354a65bd16740dfd.png)

時間はどこに行ったんでしょう？
{{% /student %}}
{{% teacher %}}
`rails server`でアプリを立ち上げたTerminalを見てください。
{{% /teacher %}}
{{% student %}}
あ、こっちに出てる！

![https://gyazo.com/8852224b38ab8f2da6b0570091fa657c](https://i.gyazo.com/8852224b38ab8f2da6b0570091fa657c.png)
{{% /student %}}
{{% teacher %}}
詳しい仕組みは省きますが、Viewの中での`puts`や`print`の出力先はあくまでTerminalなので注意してくださいね。
{{% /teacher %}}
{{% student %}}
はーい！
{{% /student %}}
{{% teacher %}}
今回はRoutes、Controller、Viewを自分で作って、独自の内容を表示しました。

次回はデータベースを使ってみましょう。データベースについて復習しておいてくださいね。
{{% /teacher %}}
{{% student %}}
わかりましたー！
{{% /student %}}

{{% topic %}}
## 前提となる技術とカリキュラム

- ruby
  - [Rubyの基本](https://bootcamp.fjord.jp/practices/26)
- httpプロトコル
  - [HTTPの基本](https://bootcamp.fjord.jp/practices/15)
{{% /topic %}}


{{< bootcamp >}}
