---
title: コードDJ第9回 – Chrome Extensionに挑戦
author: komagata

date: 2010-07-27T07:04:32+00:00
url: /articles/414.html
pvc_views:
  - 34507
dsq_thread_id:
  - 1524522669
categories:
  - blog
tags:
  - Help me hackers!
  - コードDJ

---
毎週火曜日、Help me, hackers!に上がったコードを紹介していくコードDJ 第9回。

「あなだのコードがー　しぬほどスキダカダー！」（＠チャン・ドンゴン）

komagata a.k.a. DJです。

今回紹介するのはコレ。

[Ham Cutlet Chrome Extension &#8211; Help me, hackers!][1]

HTMLのインデントを綺麗にする誰得サービスHam CutletのGoogle Chrome Extension。ブラウザの「このページのソースを見る」の代わりにインデントを綺麗にしたソースを表示するボタンをOmniBoxの右に追加するExtensionだ。

[mongorian_chop][2] a.k.a. 自由人が作ってくれた。ボタンのアイコンは[machida][3] a.k.a. 漫★画太郎。軽いコラボ。

<p class="center">
  <img src="http://img.skitch.com/20100727-d8mxncfx7jqt6nyxdifxqrkh1g.png" />
</p>

コードはココ。

[mongorian-chop&#8217;s hamcutlet-extension at master &#8211; GitHub][4]

manifest.json

[cc lang=&#8221;javascript&#8221;]{
      
&#8220;name&#8221;: &#8220;Ham Cutlet Extension&#8221;,
      
&#8220;version&#8221;: &#8220;0.1&#8221;,
      
&#8220;description&#8221;: &#8220;Ham Cutletを使用したHTMLソース表示&#8221;,
      
&#8220;background_page&#8221;: &#8220;background.html&#8221;,
      
&#8220;browser_action&#8221;: {
          
&#8220;default_icon&#8221;: &#8220;icon.png&#8221;,
          
&#8220;defailt_title&#8221;: &#8220;Ham Cutlet&#8221;
      
},
      
&#8220;permissions&#8221;: [
          
&#8220;tabs&#8221;
      
]
  
}[/cc]

background.html

[cc lang=&#8221;html&#8221;]
  

  
</p> 

</body>
  
</html>[/cc]

Chrome Extensionの作り方なんて知らないって？それならDJに任せろ！当然の如くDJも知らないからお前らの代わりに泣きながら覚えてやる！

モダンブラウザ・JS好きなら知らぬものはいない[id:os0x][5]の連載、[続・先取り！ Google Chrome Extensions：第1回　Chrome ExtensionsのAPI#1｜gihyo.jp … 技術評論社][6]で丁寧に説明されてるのでこれでわかりそうだ。

DJが超訳するとこんな感じだ。

  * manifest.jsonの入ったディレクトリを作る
  * 上のバーの右にあるボタンはbrowser_actionという
  * browser\_actionのボタンを押した時の動きはbackground\_pageで指定したhtmlに書く
  * Chromeで.crxパッケージを作れる。（単なるzipなので解凍も出来る）（CUI野郎には[Constellation&#8217;s crxmake at master &#8211; GitHub][7]というパッケージングコマンドもあるらしい。）

作れる気がしてきた！早速コードを見ていこう。

6行目のbrowser_actionでタイトルとアイコンを設定してる。

10行目のpermissionsはクロスドメインでアクセスできるURLを指定するようだが、tabsはなんだろう？

5行目のbackground_pageで実際の動作を書くファイルを指定している。

background.htmlを見ていこう。

10行目のchrome.browserAction.onClicked.addListenerがキモだ。こうやってbrowser_actionをクリックした時の動作を設定するのだろう。

7行目のchrome.tabs.createでURLを指定してタブを開けるらしい。何かグリモンでも思ったけどクロスブラウザ問題が無いとJSってこんなにシンプルに書けるのかという・・・。

URLは以前、「[HTMLのインデントを綺麗にするAPI &#8211; Help me, hackers!][8]」で[kyanny][9] a.k.a. 刺身ブーメランが作ってくれたHam Cutlet APIを使って該当ページのソースをインデントを綺麗にした上で取得している。

これは簡単・・・。グリモンやFF拡張もそうだけど、実用的なものが簡単に作れるのがイイ！ECMAScripter的にもクロスブラウザに悩まされず思いっきりJSを書けるのも気持ちがイイ。

 [1]: http://help-me-hackers.com/projects/15
 [2]: http://help-me-hackers.com/mongorian_chop
 [3]: http://help-me-hackers.com/machida
 [4]: http://github.com/mongorian-chop/hamcutlet-extension
 [5]: http://d.hatena.ne.jp/os0x/
 [6]: http://gihyo.jp/dev/serial/01/chrome-extensions/0001
 [7]: http://github.com/Constellation/crxmake
 [8]: http://help-me-hackers.com/tasks/63
 [9]: http://help-me-hackers.com/kyanny