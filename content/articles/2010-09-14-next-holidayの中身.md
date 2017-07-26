---
title: Next Holidayの中身
author: komagata
type: post
date: 2010-09-14T07:16:10+00:00
url: /articles/494.html
pvc_views:
  - 36150
dsq_thread_id:
  - 1533648207
categories:
  - blog
tags:
  - Next Holiday
  - Ruby

---
次の祝日を表示するだけのサービス[Next Holiday][1]をリリースしました。

中身は僕が去年作った[holiday_jp][2]というgemを使っています。今回使ったら祝日データがHashで返ってくるのが使い辛かったのでOpenStructを使うようにアップデートしてみました。

[cc lang=&#8221;ruby&#8221;]require &#8216;holiday_jp&#8217;

from, to = Date.new(2010, 9, 14), Date.new(2010, 9, 21)
  
holiday = HolidayJp.between(from, to).first
  
holiday.date # 2010-09-20
  
holiday.name # 敬老の日[/cc]

[komagata&#8217;s holiday_jp at master &#8211; GitHub][2]

だからどうしたって感じですね！

でも祝日っていうのは意外と面倒です。春分の日と秋分の日は天文台で観測した結果を元に前年の2月1日に決められます。ほぼこの日だろうというのはずっと先までわかるんですが、確実にこの日というのは来年の分までしか分かりません。

> [よくある質問：国立天文台][3]
> 
> **質問3-1) 何年後かの春分の日・秋分の日はわかるの？**
> 
> **答え）**
> 
> まず、春分の日・秋分の日はいつどのようにして決まるのでしょうか。
> 
> 　祝日としての春分の日・秋分の日は、前年の2月1日に、春分の日・秋分の日の日付が書かれた「暦要項（れきようこう）」が官報に掲載されることによって、正式決定となります。

そもそも祝日に関する法律は10年もしないうちに変わったりするので基本的に未来にわたって計算だけで求めるのは無理です。なのではなから祝日データをメンテナンスするつもりで取り組まないといけません。保存形式は複雑にしようと思えばいくらでも出来てしまうので一番簡単にライブラリ内にHashで保存することにしました。

 [1]: http://holiday.fjord.jp/
 [2]: http://github.com/komagata/holiday_jp
 [3]: http://www.nao.ac.jp/QA/faq/a0301.html