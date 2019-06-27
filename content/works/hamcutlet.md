---
title: ハムカツ
image: images/works/hamcutlet.png
author: machida
date: 2010-05-18T11:29:38+00:00
url: /works/hamcutlet.html
site_url: http://hamcutlet.fjord.jp/
developer: komagata
designer: machida
middlewares:
  - Ruby
  - Sinatra
  - Heroku
  - Sass
  - Haml
description: HTMLのインデントを綺麗に整形するサービス、ハムカツの説明です。
---

HTMLのインデントを綺麗に整形するサービス。

エンジニアってうるさくて、HTMLが階層の通りにインデントされていないと嫌がるのですが、HamlはHTMLの階層をインデントで表現するマークアップ言語なので、インデントがちゃんとしていないとエラーが出るし、そもそもインデントを正しくしないとマークアップ自体出来ない、強制的に綺麗なインデントをさせられるマークアップ言語。

HamlにはHTMLをHaml記法に変換する機能、逆にHaml記法で書いたHTMLを素のHTMLに戻す機能が備わってて、それを使って、インデントが汚いHTMLをHamlに変換して、それをまたHTMLに戻したらインデントの綺麗なHTMLになるんじゃないの？と、思いつき作りました。

![https://gyazo.com/a63af0f00d85cfca7098c150f684170d](https://i.gyazo.com/a63af0f00d85cfca7098c150f684170d.png)

---

ちなみに、このサービスをリリースした当時（2010年）のHamlのサイトは、

![昔のHamlサイト](https://i.gyazo.com/5372774af04cc72e2e93f02600b54649.png)

こういうデザインで、ハムをフューチャーしてたので、ハムを加工して作ったものってことでハムカツってサービスにしたのですが、2012年にHamlのサイトがリニューアルして、ハムがなくなってしまい、謎のネーミングサービスになってしまいました。

![現在のHamlサイト](https://i.gyazo.com/da313ed4e74341fde83857c4c591b457.png)
