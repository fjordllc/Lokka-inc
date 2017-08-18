---
title: コードDJ 第3回 – selectが無いならtextareaを食べればいいじゃない
author: komagata

date: 2010-06-15T04:46:26+00:00
url: /articles/349.html
pvc_views:
  - 27236
dsq_thread_id:
  - 1574799333
tags:
  - Help me hackers!
  - コードDJ
---
父の日前に「電子書籍リーダーに興味がある」ってiPad送れってことか？

汚い。流石親父汚い。

komagata a.k.a. DJです。

今週はコレ：[COOK後にHTMLをクリップボードに保存したい &#8211; Help me, hackers!][1]

やってくれたのは[@func09][2] a.k.a. [ラペコ][3]の中の人だ。

Ham CutletはHTMLのインデントを綺麗にする誰得サービスだ。タグのネストが綺麗に揃うと尋常じゃない行数になることがあるので全選択してコピーするのが非常に面倒臭い。これを解決したいという依頼。（というかほとんどバグかってぐらい苦痛）

コレ、textareaだったら

````javascript
elem.select()
````

で完了なんだけど、コードはpre, codeタグで出したいというDJと@machida a.k.a. マークアップエンジニアのわがままで実装方法がわからず心が折れてた。

それをエレガントに解決してくれた@func09のコードがコレ。

[父の日前に「電子書籍リーダーに興味がある」ってiPad送れってことか？

汚い。流石親父汚い。

komagata a.k.a. DJです。

今週はコレ：[COOK後にHTMLをクリップボードに保存したい &#8211; Help me, hackers!][1]

やってくれたのは[@func09][2] a.k.a. [ラペコ][3]の中の人だ。

Ham CutletはHTMLのインデントを綺麗にする誰得サービスだ。タグのネストが綺麗に揃うと尋常じゃない行数になることがあるので全選択してコピーするのが非常に面倒臭い。これを解決したいという依頼。（というかほとんどバグかってぐらい苦痛）

コレ、textareaだったら

````javascript
elem.select()
````

で完了なんだけど、コードはpre, codeタグで出したいというDJと@machida a.k.a. マークアップエンジニアのわがままで実装方法がわからず心が折れてた。

それをエレガントに解決してくれた@func09のコードがコレ。

````haml
#created.section
  - if flash[:error]
    .error
      %h2 HTMLに下記の問題があります。
      %p= flash[:error]
      .to_top
        %a{:href => '/'}トップページに戻る

  - else
    %h2 インデントの美しいHTMLが出来ました
    %button.raw plane text
    .source
      %textarea{:style => 'display:none;'}
        =h @html
      %pre
        %code=h @html
:javascript
  $(function(){

    $('.source textarea').height($('.source pre').height());

    $('button.raw').click(function(){
      if ($('.source textarea').css('display') == 'none') {
        $('button.raw').text('html')
        $('.source textarea').fadeIn();
        $('.source pre').hide();
        $('.source textarea').focus().select();
      } else {
        $('button.raw').text('plane text')
        $('.source textarea').hide();
        $('.source pre').fadeIn();
      }
    });
  });
````

このテンプレはお馴染みのHaml。:javascriptというのはjavascript用のhaml_filterで、この中はHaml記法から離れて自由にJavascriptが書ける。Hamlの構文チェッカーから逃れてホッとするという記法だ。

13行目で非表示のtextareaを作っておいて、22行目以降のボタンのonclickでpre, codeタグ表記とtextarea表記を入れ替えてる。

そうか、選択する時だけtextareaに変えちゃえばいいのか。そういわれてみればたしかにブラウザのwysiwygエディタでよく見る手法だ。頭柔らかいね・・・。

23行目の表示状態をトグル条件にするってのも色々なところでパクろうと密かに思ったよ。

25, 31行目のfadeIn()はDJ、バファリンの半分と同じ成分だと思うな。

自分のコードを書くのも楽しいけど、人のコードにちょっかい出すのも楽しい。githubも素敵だ。

次回からも更にコードにフォーカスして行くのでみんなのコードを晒してくれ、そして読ませてくれ！

 [1]: http://help-me-hackers.com/tasks/69
 [2]: http://help-me-hackers.com/func09
 [3]: http://rapeco.jp/
 [4]: http://github.com/func09/hamcutlet/blob/b90a0fa5115c188f6209e292519a8ba3b59bd3eb/views/created.haml
