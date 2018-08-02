---
title: iPhoneでも見れるアニメが作れるMacアプリ「Hype」を使ってスライドショーを作る
author: machida
date: 2011-10-17 15:17:32.000000000 +09:00
url: "/articles/919.html"
pvc_views:
- 80076
dsq_thread_id:
- 1524646281
categories:
- blog
aliases:
- "/love/919.html"
---
<a href="http://kowabana.jp" target="_blank">怖話</a>を開くといきなり始まる怖〜いムービー。


  <a href="http://kowabana.jp"><img src="http://farm7.static.flickr.com/6164/6196762717_70f6536bfe.jpg" width="500" height="230" alt="Dreamweaver" /></a>


これ、HypeというMacのアプリで作りました。


  <a href="http://itunes.apple.com/jp/app/hype/id436931759" target="_blank"><img src="http://farm7.static.flickr.com/6151/6196820295_ee5dbc5c5f_m.jpg" width="215" height="194" alt="Hype" /></a><br /> <a href="http://itunes.apple.com/jp/app/hype/id436931759" target="_blank">Hype</a>


Hypeはすごく簡単にHTML5のアニメーションが作れて、しかも値段は **¥2,600**！（2011年9月現在）
  
HTML5でムービーが作れるのでiPhoneでもちゃんと表示されます。

ホームページ制作会社の方がiPhoneサイトを作る際にHypeでムービーを設置したら、よりお客さんに満足いただくものを納品出来そう。操作は簡単なので、使い方を説明するまでもないのですが、まぁ、こんなことが出来るっていうのの参考に、Hypeの使い方や手順をこちらで紹介したいと思います。

## Hypeを購入、インストール

HypeはMac版しかありませんので、Windowsの方はMacを買うところから（Macの購入は<a href="http://store.apple.com/jp/browse/home/shop_mac" target="_blank">こちら</a>）。

HypeはMac App Storeで購入します。<a href="http://itunes.apple.com/jp/app/hype/id436931759?mt=12" target="_blank">こちらクリック</a>。Mac App Storeなので金額が書いてあるボタンをクリックすればあとは勝手にインストールしてくれます。

## 今回つくるもの

今回はHypeを使って7枚の画像がそれぞれ別の動きをしながら次の画像に切り替わるスライドショーを作ることにしました。

画像が切り替わるまでの時間はそれぞれ8秒にします。8秒たったら次の画像に切り替わります。

「それぞれ別の動き」は、Hypeで簡単に設定できるシーンの切り替わり方の機能をそのまま使います。シーンの切り替わり方の一覧は以下になります。

### シーンの切り替わり方の一覧

  * Instant … 何の効果もなく次のシーンへ
  * Crossfade … 前のシーンがフェードアウトしながら次のシーンがフェードイン
  * Swap … 立体的に前のシーンが後ろに下がって次のシーンが前に現れる
  * Push（Left to Right） … 左から右にスライド
  * Push（Right to Left） … 右から左にスライド
  * Push（Bottom to Top） … 下から上にスライド
  * Push（Top to Bottom） … 上から下にスライド

…と、字にしてもいまいちわかりずらいですが、実際どう動くのかは出来てからのお楽しみ、ということで。

で、せっかくHypeはHTML5で書きだしてくれるので、iPhoneサイズでスライドショーを作り、iPhoneでも見れるようにしたいと思います。

## ムービーのサイズを設定

では、早速Hypeを開いてみましょう。
  
「File > New」をクリック。


  <a href="http://www.flickr.com/photos/fjord_llc/6197362206/" title="hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6164/6197362206_ec185ce194_m.jpg" width="235" height="240" alt="hype" /></a>


これからムービーを作るキャンバスが用意されました。

まずは、キャンバスのサイズを設定します。今回はiPhoneでも見られるように横幅を 320px、高さ198px のムービーの作成に挑戦したいと思います。

キャンバスと一緒に表示されたツールバーのココ（下図参照）をクリック。


  <a href="http://www.flickr.com/photos/fjord_llc/6197370782/" title="hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6028/6197370782_cd2484ff9b.jpg" width="277" height="500" alt="hype" /></a>


で、ココ（下図参照）に「横幅を 320px、高さ198px」を入力。


  <a href="http://www.flickr.com/photos/fjord_llc/6196867393/" title="Hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6176/6196867393_bfb5851b80.jpg" width="238" height="500" alt="Hype" /></a>


### Option について

先ほど横幅、高さを入力したボックスの下に「Options」というチェックボックスがあります。

「Show Loading Indicator」にチェックを入れると、ムービーを読み込んでる間、


  <a href="http://www.flickr.com/photos/fjord_llc/6197399692/" title="Hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6169/6197399692_c1276f76bb_o.png" width="237" height="109" alt="Hype" /></a>


というメッセージが表示されるようになります。

その下の「Draw Scene Backgrounds」にチェックを入れると、「Animation Timelines」で設定したBackgroundのcolorが有効になります。背景に色を付けたい場合はここにチェックを入れます。
  
今回はスライドショーを作ることに今決めました。なので今回は「Draw Scene Backgrounds」にチェックはいりません。

## それぞれのシーンで表示させる画像を用意

それぞれのシーンで表示させる画像を７枚用意しました（合計7シーン）。


  <a href="http://www.flickr.com/photos/fjord_llc/6196962771/" title="Instant by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6161/6196962771_6b46c68d91_o.jpg" width="320" height="198" alt="Instant" /></a>



  <a href="http://www.flickr.com/photos/fjord_llc/6197480914/" title="crossfade by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6157/6197480914_94ebf6ea01_o.jpg" width="320" height="198" alt="crossfade" /></a>



  <a href="http://www.flickr.com/photos/fjord_llc/6196964355/" title="swap by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6178/6196964355_e4ea367f5c_o.jpg" width="320" height="198" alt="swap" /></a>



  <a href="http://www.flickr.com/photos/fjord_llc/6197481020/" title="push_l_r by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6180/6197481020_3a749b5ef7_o.jpg" width="320" height="198" alt="push_l_r" /></a>



  <a href="http://www.flickr.com/photos/fjord_llc/6197481090/" title="push_r_l by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6027/6197481090_c3ae00da94_o.jpg" width="320" height="198" alt="push_r_l" /></a>



  <a href="http://www.flickr.com/photos/fjord_llc/6197481124/" title="push_b_t by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6174/6197481124_01efb67222_o.jpg" width="320" height="198" alt="push_b_t" /></a>



  <a href="http://www.flickr.com/photos/fjord_llc/6196964561/" title="push_t_b by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6168/6196964561_08b1aee189_o.jpg" width="320" height="198" alt="push_t_b" /></a>


それぞれの画像に「次はXXXXで切り替わります。」という文字が入ってます。これは先ほど説明しました「シーンの切り替わり方」です。

例えば、


  <a href="http://www.flickr.com/photos/fjord_llc/6196962771/" title="Instant by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6161/6196962771_6b46c68d91_o.jpg" width="320" height="198" alt="Instant" /></a>


から、


  <a href="http://www.flickr.com/photos/fjord_llc/6197480914/" title="crossfade by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6157/6197480914_94ebf6ea01_o.jpg" width="320" height="198" alt="crossfade" /></a>


へ、シーンが移動する際は、「Instant … 何の効果もなく次のシーンへ」の動きで切り替わります。

ちなみに今回使っている画像は、神戸市のデザイン事務所『<a href="Aqua style" target="_blank">Aqua style</a>』さんが運営していらっしゃる、無料の写真＆イラスト素材サイト「<a href="http://do-u-like.net/" target="_blank">Do U like? </a>」のものを使わせていただきました。ちなみに「Do U like?」はこれ以上ないくらいのゆるさで画像を配布してくれてる太っ腹なサービス（Policyは<a href="http://do-u-like.net/policy/index.html" target="_blank">こちら</a>）。「Do U like?」大好き！

## シーンに画像を配置

画像をシーンに配置してみましょう。

「Insert Elements」をクリックして、「Image」を選択します。


  <a href="http://www.flickr.com/photos/fjord_llc/6196977907/" title="hype_image by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6165/6196977907_af110832b6_o.jpg" width="400" height="400" alt="hype_image" /></a>


この画像を選択します。


  <a href="http://www.flickr.com/photos/fjord_llc/6196962771/" title="Instant by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6161/6196962771_6b46c68d91_o.jpg" width="320" height="198" alt="Instant" /></a>


配置されました。


  <a href="http://www.flickr.com/photos/fjord_llc/6197505506/" title="Hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6166/6197505506_f0ccbc95e8.jpg" width="500" height="420" alt="Hype" /></a>


## シーンに名前を付ける

今作った「次はInstantで切り替わります」という文字が入った画像が配置されたSceneに「next_instant」という名前を付けます。

ココ（下図）をダブルクリックで、名前を付けます。


  <a href="http://www.flickr.com/photos/fjord_llc/6197509220/" title="Hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6003/6197509220_4487e37a44.jpg" width="359" height="194" alt="Hype" /></a>


## シーンの追加

続いて、新たなシーンを追加してみます。

ココ（下図）をクリック。


  <a href="http://www.flickr.com/photos/fjord_llc/6196996005/" title="Hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6159/6196996005_b0bb0d2c95.jpg" width="287" height="162" alt="Hype" /></a>


このシーンにはこの画像（下画像）を配置して、「next_crossfade」という名前にします。


  <a href="http://www.flickr.com/photos/fjord_llc/6197480914/" title="crossfade by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6157/6197480914_94ebf6ea01_o.jpg" width="320" height="198" alt="crossfade" /></a>


完成。


  <a href="http://www.flickr.com/photos/fjord_llc/6197517806/" title="Dreamweaver by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6166/6197517806_2356bb00f4.jpg" width="500" height="276" alt="Dreamweaver" /></a>


この手順（シーンの作成→画像の配置→シーンに名前を付ける）を７枚の画像それぞれに対して行います。

シーンの名前は、

  * next_instant
  * next_crossfade
  * next_swap
  * next\_push\_l_r
  * next\_push\_r_l
  * next\_push\_b_t
  * next\_push\_t_b

と、します。

…7個のシーンが出来ました。


  <a href="http://www.flickr.com/photos/fjord_llc/6197527644/" title="Hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6176/6197527644_6152d92614.jpg" width="500" height="288" alt="Hype" /></a>


## シーン「next_instant」のアニメーションの設定

最初のシーン，「next_instant」のアニメーションの設定を行います。

アニメーションといっても、今回は8秒間待ったら次のシーンに切り替わるスライドショーを作るので、ただ単に、「8秒間待ったら次のシーンに切り替わる」の「8秒間」の設定を行うだけです。

シーン「next_instant」を選択（クリック）します。


  <a href="http://www.flickr.com/photos/fjord_llc/6197030165/" title="Hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6164/6197030165_658b76ffdd_o.png" width="234" height="147" alt="Hype" /></a>


下のTimelineのカーソルを「00:08.00」に持ってきます。


  <a href="http://www.flickr.com/photos/fjord_llc/6252508969/" title="Hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6211/6252508969_38d129e760.jpg" width="500" height="198" alt="Hype" /></a>


次に、「Main Timeline」の下の部分をクリックして選択した状態にします。


  <a href="http://www.flickr.com/photos/fjord_llc/6252516095/" title="Hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6052/6252516095_054da10864.jpg" width="298" height="226" alt="Hype" /></a>


菱形のアイコンがあるボタンをクリック。


  <a href="http://www.flickr.com/photos/fjord_llc/6252519643/" title="Hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6056/6252519643_a9ef4ddf66.jpg" width="500" height="195" alt="Hype" /></a>


すると、タイムラインの8秒のところに菱形のマークが置かれます。


  <a href="http://www.flickr.com/photos/fjord_llc/6252524909/" title="Hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6109/6252524909_b34739c3cf.jpg" width="500" height="188" alt="Hype" /></a>


これでシーン「next_instant」は8秒間ジーッと画像を映すだけのアニメーションが設定されました（実際何も動いていないのでアニメーションではありませんが…）。

では、全部のシーンにこの設定をしてしまいましょう。

## シーンからシーンへの移動の設定

「next\_instant」を8秒見せたあと、「next\_crossfade」に移動する、という設定を行います。

シーン「next_instant」を選択（クリック）します。


  <a href="http://www.flickr.com/photos/fjord_llc/6197030165/" title="Hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6164/6197030165_658b76ffdd_o.png" width="234" height="147" alt="Hype" /></a>


次に、ツールバーのココをクリック。


  <a href="http://www.flickr.com/photos/fjord_llc/6197038987/" title="Hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6159/6197038987_b366b6c13e.jpg" width="237" height="500" alt="Hype" /></a>


「On Animation Complete」に注目。「On Animation Complete」は「アニメーションが終わったら何をするか」、という設定をするところです。


  <a href="http://www.flickr.com/photos/fjord_llc/6252020719/" title="Scene Inspector by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6222/6252020719_0488aaf95e.jpg" width="282" height="253" alt="Scene Inspector" /></a>


「On Animation Complete」の「Action」を「Jump to Scene…」を選択。
  
その下の「Scene」に「next_crossfade」を選択。
  
「Transition」に「Instant」を選択。

アニメーションが終わったら、シーン「next_crossfade」に「Instant」の動きで移行する、という設定をしました。


  <a href="http://www.flickr.com/photos/fjord_llc/6252562680/" title="Scene Inspector by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6054/6252562680_0ccea37128.jpg" width="273" height="115" alt="Scene Inspector" /></a>


では、続いて、

シーン「next\_crossfade」、シーン「next\_swap」への移動の際は「Swap」。
  
シーン「next\_swap」、シーン「next\_push\_l\_r」への移動の際は「Push（Left to Right）」。
  
シーン「next\_push\_l\_r」、シーン「next\_push\_r\_l」への移動の際は「Push（Right to Left）」…

と、それぞれに順番に動きを設定していきます。
  
最後のシーン「next\_push\_t\_b」はシーン「next\_instant」へ移動するように設定して、延々とスライドショーがループするようにします。

## 書き出し

全シーンの設定が終わりましたらいよいよ書き出し。
  
その前にプレビューで確認をする際は、こちらをクリック。


  <a href="http://www.flickr.com/photos/fjord_llc/6252548623/" title="Hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6169/6252548623_69bd100396.jpg" width="457" height="169" alt="Hype" /></a>


では、書き出し。

File > Export As HTML5 > Folder をクリック。

なんか色々Warningが出てきました。


  <a href="http://www.flickr.com/photos/fjord_llc/6252557439/" title="Hype by 町田 哲平（teppei machida）, on Flickr"><img src="http://farm7.static.flickr.com/6233/6252557439_b2c773397f.jpg" width="500" height="454" alt="Hype" /></a>


今回使ったHypeで簡単に設定できるシーンの切り替わり機能はIEだと全滅ですね。まぁ、今回はスマホだったらWindows Phoneを除けばOKだからよしとしちゃいます。

完成したのが<a href="http://fjord.jp/hype_demo/hype_blog.html" target="_blank">コレ</a>。

8秒は確認するには長かったので、2秒でシーンを移動するバージョンを作りました。<a href="http://fjord.jp/hype_demo/two_seconds.html" target="_blank">こちら</a>。