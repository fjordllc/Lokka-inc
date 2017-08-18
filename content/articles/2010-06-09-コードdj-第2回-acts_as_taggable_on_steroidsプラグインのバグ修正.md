---
title: コードDJ 第2回 – acts_as_taggable_on_steroidsプラグインのバグ修正
author: komagata

date: 2010-06-08T15:58:40+00:00
url: /articles/317.html
pvc_views:
  - 25859
dsq_thread_id:
  - 1549537932
tags:
  - Help me hackers!
  - コードDJ

---
毎週火曜日、Help me, hackers!に上がったコードを紹介していく[コードDJ][1] 第2回。

「電子書籍通の俺から言わせてもらえば、電子書籍通の間での最新の流行、&#8221;青空文庫形式&#8221;。コレ。&#8221;青空文庫形式&#8221;は縦書きとルビを標準でサポート。しかしコレで保存しても海外ではまったく役に立たないという危険も伴う&#8221;諸刃の剣&#8221;。まあお前らド素人はAZWでも使ってなさいってこった。」

komagata a.k.a. DJです。

<a href="http://www.nicovideo.jp/watch/sm10849890">【ニコニコ動画】ゴノレゴさんがア○プルに問い詰めたいことがあるようです</a>

今回紹介するのはコレ。

[acts\_as\_taggable\_on\_steroidsのタグのValidationのエラーを直したい &#8211; Help me, hackers!][2]

毎週火曜日更新とかいってコレ書いてる現在火曜日 23時50分ということからわかるようにDJネタに困ってたんだ。

そこに現れた天使が[milk1000cc][3] a.k.a 牛乳嫌いプログラマ on Rails。

放置出来ないバグなのにうまい直し方がわからずDJが寝かせてたバグをサラっと解決してくれた上にネタまで提供してくれて最高だ。

神とアラン・ケイと[milk1000cc][3]に感謝。

コードはココ：

  * [http://github.com/komagata/help-me-hackers/blob/master/vendor/plugins/acts\_as\_taggable\_on\_steroids/lib/acts\_as\_taggable.rb][4]
  * [http://github.com/komagata/help-me-hackers/blob/master/vendor/plugins/acts\_as\_taggable\_on\_steroids/lib/tag.rb][5]

元はRailsのタグ付けプラグインの[acts\_as\_taggable\_on\_steroids][6]だが、Help me, hackers!向けにDJがちょっと修正を加えてある。

そもそも大元のacts\_as\_taggable自体、Rails初期からのプラグインで\_reduxとか\_steroidsとか色々派生を産んでるが品質も色々。ポリモーフィック関連が使えるようになってからは単純なacts\_as\_系は書いても実装は大分楽になったので若干重要性は薄れているが色々なところで使われている。

自分がURLの一部として使われるタグの実装をすることを想像してみて欲しい。DJが追加したかった部分は下記。

  * case insensitive（大文字・小文字を区別しない）
  * 小文字に統一
  * 空白禁止（ハイフン使ってね）

まあ、[stackoverflow][7]の仕様のパクリなんだけどね。

````ruby
class Tag < ActiveRecord::Base
  validates_presence_of :name
  validates_uniqueness_of :name, :case_sensitive => false # デフォルトはtrueなのでfalseにする
  validates_format_of :name, :with => /^S+$/ # Sは非空白文字

  def before_validation
    self.name.downcase! # 小文字に合わせる
  end
end
````

要はこんな感じにTagクラスを定義したいんだけど、Tagクラスはプラグインの中だから直接修正した。（app/models/tag.rbを置いて上書きできるけど、これはクラス読み込み順番の問題でproductionでは機能しない）

ところが、TagクラスのValidationエラーは誰にも拾われる事無くユーザーの前に表れやがる。

そこで[milk1000cc][3]がHackしてくれた部分のキモが[13行目][8]のvalidate :validate_tagsと[186-199行目][9]のvalidate_tagsメソッドだ。

````ruby
validate :validate_tags
````

Railsユーザーにはお馴染みのActiveRecord内での宣言的なメソッド指定。validateで引数のシンボルと同じ名前のメソッドをvalidate時に実行する。

````ruby
def validate_tags
  error_messages = []
  new_tag_names = @tag_list - tags.map(&:name)

  new_tag_names.each do |new_tag_name|
    tag = Tag.find_or_initialize_with_like_by_name(new_tag_name)
    error_messages << tag.errors.on(:name) unless tag.valid?
  end
  error_messages.flatten!

  error_messages.uniq.each do |msg|
    errors.add :tag_list, msg
  end
end
````

複数あるタグのエラーメッセージをflatten!してエラーに追加している。これは非常に真っ当な対処方法な気がする。正直DJ、エラーが出ないように適当に変換しちゃおうとしてたよ。（しかも失敗してた）

188行目で

````ruby
tags.map(&:name)
````

というコードが出てくるが、これはActiveSupportで追加されるSymbol#to_procを使ったRails以降Rubyで多用されるイディオムで

````ruby
tags.map {|tag| tag.name }
````

と同じ意味。

慣れると欠かせないが、初心者キラーとして有名なので「下の書き方でいいじゃねぇか・・・」という声も。しかしRuby1.8.7やRuby1.9以降ではコアに含まれてるので頑張って慣れるべしというのはRubyist豆知識だ。

Javascript続きで来たこの連載も[milk1000cc][3]のお陰でRubyが登場。しかも[gistにpatch形式][10]で貼ってくれるという親切設計・・・。Help me, hackers!はまだ収益とか上げてないので5000円しか振り込めないのがDJ情けない。

しかし、FJORD社（総勢2名）の経理を担当する者としてはPayPalに「受領書を印刷」という機能があって助かった。

大事なことだから強調しておこう。

**「Help me, hackers!の報奨金支払いは経費で落ちます。」**

 [1]: http://fjord.jp/tag/code-dj
 [2]: http://help-me-hackers.com/tasks/87
 [3]: http://help-me-hackers.com/milk1000cc
 [4]: http://github.com/komagata/help-me-hackers/blob/master/vendor/plugins/acts_as_taggable_on_steroids/lib/acts_as_taggable.rb
 [5]: http://github.com/komagata/help-me-hackers/blob/master/vendor/plugins/acts_as_taggable_on_steroids/lib/tag.rb
 [6]: http://github.com/jviney/acts_as_taggable_on_steroids
 [7]: http://stackoverflow.com/
 [8]: http://github.com/komagata/help-me-hackers/blob/master/vendor/plugins/acts_as_taggable_on_steroids/lib/acts_as_taggable.rb#L13
 [9]: http://github.com/komagata/help-me-hackers/blob/master/vendor/plugins/acts_as_taggable_on_steroids/lib/acts_as_taggable.rb#L186-199
 [10]: http://gist.github.com/429834
