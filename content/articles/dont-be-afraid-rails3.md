---
title: 本当は怖くないRuby on Rails入門 Part.3
author: komagata
date: 2018-02-03T00:01:07+09:00
url: /articles/dont-be-afraid-rails3.html
draft: true
categories:
  - blog
tags:
  - dont-be-afraid-rails
---
## データベースの中身を表示しよう
{{% teacher %}}
今回はModel（モデル）を使ってDBの中身を表示してみましょう。

まずは`rails db:create`でDBを作成します。

```bash
$ rails db:create
Created database 'db/development.sqlite3'
Created database 'db/test.sqlite3'
```

railsはさまざまなDBに対応していますが、デフォルトではsqlite3が使われます。sqlite3はDBはファイルとしてできます。

上記でdevelopment用のDBとtest用のDBが作成されました。
{{% /teacher %}}
## 開発環境
{{% teacher %}}
railsでは基本的に3種類の実行モードがあります。

- production（本番）
- development（開発）
- test（テスト）

この実行モードごとにDBが分かれています。

productionモードは速度のために無駄な処理が少なくなっています。

developmentモードはrailsサーバーの再起動無しにファイルが読み込めたりといった開発中に便利なモードです。

testモードは自動テスト実行時のモードで後々出てきます。
{{% /teacher %}}
## テーブル作成
{{% teacher %}}
ModelはDBのTableと一対一の関係になります。DBにFruits（フルーツ）テーブルを作って、Fruitモデルも作りましょう。

![ss](https://i.gyazo.com/7a1536258c51fa266be00ab273bd9a84.png)
{{% /teacher %}}
{{% student %}}
Modelの名前は単数形なのにDBテーブルは複数形なんですね。
{{% /student %}}
{{% teacher %}}
railsは名前に非常にうるさいフレームワークです。DBテーブルは1レコードにつき1fruitを表現しています。テーブルは複数レコードを持つので複数形のfruitsになります。

単数形・複数形を変換する機能もあります。

railsの中身を手軽に試せるコマンド`rails console`で試してみましょう。

```bash
$ rails console
>> "fruit".pluralize
=> "fruits"
>> "fruits".singularize
=> "fruit"
```

`pluralize`は文字列を複数形にするメソッドで、`singularize`はその逆です。
{{% /teacher %}}
{{% student %}}
細かいですね。英語の先生みたい。
{{% /student %}}
{{% teacher %}}
`rails generate`コマンドを使ってfruitsテーブルを作成しましょう。string型のnameカラムとinteger型のpriceカラムを持ちます。

```bash
$ rails generate model fruit name:string price:integer
      invoke  active_record
      create    db/migrate/20180206061109_create_fruits.rb
      create    app/models/fruit.rb
      invoke    test_unit
      create      test/models/fruit_test.rb
      create      test/fixtures/fruits.yml
```

`rails generate`はさまざまなコードを生成してくれる便利なコマンドです。手で書くより早いのでどんどん活用しましょう。

- `db/migrate/20180206061109_create_fruits.rb`
- `app/models/fruit.rb`

が生成されたことに注目してください。（test/以下については今は気にしないでください）
{{% /teacher %}}
{{% student %}}
ファイルが勝手にできるとびっくりしますね。
{{% /student %}}
## Migration（マイグレーション）
{{% teacher %}}
生成されたファイルを順に見ていきましょう。

`db/migrate/20180206061109_create_fruits.rb`はMigration（マイグレーション）ファイルと呼ばれるものです。

db/migrate/20180206061109_create_fruits.rb:

```ruby
class CreateFruits < ActiveRecord::Migration[5.1]
  def change
    create_table :fruits do |t|
      t.string :name
      t.integer :price

      t.timestamps
    end
  end
end
```

普通DBテーブルを作成するにはSQLでCREATE文を使います。しかしrailsではテーブル作成や削除、カラム追加の操作はこのMigrationの仕組みを使って行います。
{{% /teacher %}}
{{% student %}}
苦労してSQLのCREATE文を覚えたのに！CREATE文じゃ駄目なんですか？
{{% /student %}}
{{% teacher %}}
もちろんMigrationならではの利点があります。

まずはCREATE文はPostgreSQL, MySQLなどのDBによって書き方に微妙な違いがあります。その違いをMigrationは吸収してくれます。

また、Migrationで書いておくと、一度実行したテーブル構造の変更を戻すことができます。
{{% /teacher %}}
{{% student %}}
ええ！！そんなことできるんですか？
{{% /student %}}
{{% teacher %}}
実際の仕組みは単純で、上記の`create_table`の場合は戻す場合にMigrationがCREATEとは逆のSQLを発行しています。

`CREATE TABLE`だったら戻す場合は`DROP TABLE`。カラム追加を戻す場合はカラム削除のSQLを発行してくれます。
{{% /teacher %}}
{{% student %}}
へぇ〜すごい。やっぱりMigrationを使ったほうがいいですね。
{{% /student %}}
{{% teacher %}}
もちろん中のデータが戻るわけではないので完全にDBがもとに戻るわけではないですが、これによってカラム追加や不要になったカラム削除を気軽にできます。

ファイルの中身を見ると大体わかると思いますが、`name`というstring型のカラムと`price`というinteger型のカラムを持つfruitsテーブルを作成しています。
{{% /teacher %}}
## Timestamp
{{% teacher %}}
`t.timestamps`というのは下記の省略記法になります。

```ruby
t.datetime :created_at
t.datetime :updated_at
```

`created_at`というのはrails（Active Record）の便利機能で、モデルのデータを新規作成（DBのレコードを追加）した時、`created_at`というカラムがあったら、そこに作成した時の日付と時間を入れておいてくれます。

また、`updated_at`というカラムがあると、レコードの更新時にその時の日付と時間を入れておいてくれます。

実際にWebアプリを作った人ならわかりますが、DBテーブルには大抵こんな感じのカラムを付けることが多いので自動で付いてくれるととてもうれしいのです。
{{% /teacher %}}
{{% student %}}
Active Record、空気の読めるヤツ・・・。
{{% /student %}}
## Migrationの実行と確認
{{% teacher %}}
それでは実際にMigrationを実行してみましょう。
```bash
$ rails db:migrate
== 20180206061109 CreateFruits: migrating =====================================
-- create_table(:fruits)
   -> 0.0008s
== 20180206061109 CreateFruits: migrated (0.0008s) ============================
```
下記でログを見てみると実際に発行されたSQLが確認できます。
```bash
$ cat log/development.log
（省略）
   (0.4ms)  CREATE TABLE "fruits" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar, "price" integer, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL)
（省略）
```
{{% /teacher %}}
{{% student %}}
あ、ほんとだ。`CREATE TABLE "fruits"`って書いてある。
{{% /student %}}
{{% teacher %}}
sqlite3に付属のコマンドで調べてみてもしっかりテーブルが作成されています。
```bash
$ sqlite3 db/development.sqlite3
> .schema fruits
CREATE TABLE "fruits" ("id" INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar, "price" integer, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
```
{{% /teacher %}}
{{% student %}}
`id`というカラムが勝手にできてる気がするんですが？
{{% /student %}}
{{% teacher %}}
よく気づきましたね。

Active Recordでは指定しない場合、`id`というカラムがプライマリキーとして作成されます。
{{% /teacher %}}
{{% student %}}
プリイマリキー・・・習ったような聞いたことあるような・・・
{{% /student %}}
{{% teacher %}}
データベースのカリキュラムで習ったはずですよ。テーブルの中でそのレコードを一意に識別するための重複する値を持たないカラムです。
{{% /teacher %}}
## データの追加
{{% teacher %}}
sqlite3を使ったついでにSQL文でfruitsをいくつか追加しましょう。
{{% /teacher %}}
{{% student %}}
えー、INSERT文でしたっけ・・・書けるかなー。

```bash
$ sqlite3 db/development.sqlite3
> INSERT INTO "fruits" (name, price, created_at, updated_at) VALUES ("Apple", 100, "2018-01-01 00:00:00", "2018-01-01 00:00:00");
> INSERT INTO "fruits" (name, price, created_at, updated_at) VALUES ("Orange", 180, "2018-01-01 00:00:00", "2018-01-01 00:00:00");
> INSERT INTO "fruits" (name, price, created_at, updated_at) VALUES ("Banana", 80, "2018-01-01 00:00:00", "2018-01-01 00:00:00");
```
なんとかINSERTできましたよ。
```bash
> SELECT * FROM "fruits";
        id = 1
      name = Apple
     price = 100
created_at = 2018-01-01 00:00:00
updated_at = 2018-01-01 00:00:00

        id = 2
      name = Orange
     price = 180
created_at = 2018-01-01 00:00:00
updated_at = 2018-01-01 00:00:00

        id = 3
      name = Banana
     price = 80
created_at = 2018-01-01 00:00:00
updated_at = 2018-01-01 00:00:00
```
ちゃんとデータも入っています。
{{% /student %}}
## フルーツの一覧表示
{{% teacher %}}
表示するデータが整ったのでページに表示してみましょう。

Part.2を思い出して、Routes, Controller, Viewを書きます。

app/controllers/fruits_controller.rb:

```ruby
class FruitsController < ApplicationController
  def index
    @fruits = Fruit.all
  end
end
```

app/views/fruits/index.html.erb:

```erb
<h1>フルーツ一覧</h1>

<table>
  <tr>
    <th>名前</th>
    <th>値段</th>
  </tr>
<% @fruits.each do |fruit| %>
  <tr>
    <td><%= fruit.name %></td>
    <td><%= fruit.price %></td>
  </tr>
<% end %>
</table>
```

config/routes.rb:

```ruby
Rails.application.routes.draw do
  get "home", to: "home#index"
  get "fruits", to: "fruits#index"
end
```

`http://localhost:3000/fruits`にアクセスすると下記のように表示されるはずです。

![ss](https://i.gyazo.com/4524d38426a79ed5709070b2e457e527.png)
{{% /teacher %}}
{{% student %}}
今回はControllerのindexメソッドに何か増えてます。Viewもちょっと難しく見えます。
{{% /student %}}
{{% teacher %}}
順を追って説明しますね。
```ruby
@fruits = Fruit.all
```
Controllerのこの部分はモデルである`Fruit`クラスを使ってDBからデータをとっています。

Modelが`rails generate`で自動生成されていることを思い出してください。中身を見てみましょう。

app/models/fruit.rb:

```ruby
class Fruit < ApplicationRecord
end
```
{{% /teacher %}}
{{% student %}}
シンプル〜
{{% /student %}}
{{% teacher %}}
Modelはテーブル名（の単数形）のクラスが`ApplicationRecord`を継承して存在しているだけでさまざまな機能が使えます。

ここで使っている`all`メソッドは単純に全部を持ってくるメソッドです。

SQLで言えば`SELECT * FROM "fruits"`をしているといえばわかりやすいでしょうか。

次にViewを見てみましょう。
{{% /teacher %}}
{{% student %}}
`@fruits`にfruitsテーブルの全レコードが入っているというのはなんとなくわかりますが、Fruitクラスには1つもメソッドがなかったのに`name`や`price`メソッドが使えているのが不思議です。
{{% /student %}}
{{% teacher %}}
鋭いですね。それが不思議に見えるのは正しいです。Rubyの勉強をよく頑張りましたね。

それこそが正にrubyとActive Recordの大きなマジックです。

`ApplicationRecord`の更に親となるクラスが

なんとDBのカラム情報を見に行って、同じ名前のメソッドを勝手に定義しているのです！
{{% /teacher %}}
{{% student %}}
ナ、ナンダッテー！！！
{{% /student %}}
{{% student %}}
rubyファイルのどこにも`name`メソッドや`price`メソッドは書いてないのに使えちゃうなんてほんと不思議ですねー。
{{% /student %}}
{{% teacher %}}
今回はMigrationの使い方を中心にDBの情報を表示する方法を学びました。次回からはついにScaffoldに入りますのでこれまでの内容を復習しておいてくださいね。特にSQLやRubyの構文が怪しい人は見直しておきましょう。
{{% /teacher %}}
{{% student %}}
今回のPartでテーブル内容を全部出すだけだったらできるような気がしてきました！次もがんばります！
{{% /student %}}

{{% topic %}}
## 前提となる技術とカリキュラム

- データベース
  - [mysqlの基本](https://bootcamp.fjord.jp/practices/21)
- SQL
  - [sqlの基本](https://bootcamp.fjord.jp/practices/20)
- ruby
  - [Rubyの基本](https://bootcamp.fjord.jp/practices/26)
{{% /topic %}}

{{< bootcamp >}}
