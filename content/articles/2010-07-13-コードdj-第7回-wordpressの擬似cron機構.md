---
title: コードDJ 第7回 – WordPressの擬似cron機構
author: komagata

date: 2010-07-13T06:59:45+00:00
url: /articles/401.html
pvc_views:
  - 28453
  - 28453
dsq_thread_id:
  - 1538848769
categories:
  - blog
tags:
  - Help me hackers!
  - コードDJ

---
毎週火曜日、Help me, hackers!に上がったコードを紹介していくコードDJ 第7回。

今、流行の２４シーズン１を見ているkomagata a.k.a. DJ（@流行に疎い方）です。

今回紹介するコードはコレ。

[任意の期間、ブログが更新されないとメールが飛ぶwordpressのplugin &#8211; Help me, hackers!][1]

出題したのは[@machida][2] a.k.a. お米嫌い。議論に対していきなりコードで回答を示したのが[@terakuma][3] a.k.a. 法務系PHPer。

コード：

[cc lang=&#8221;php&#8221;]<?php
/*
Plugin Name: Remember The WordPress
Plugin URI: http://github.com/e2esoundcom/Remember-The-WordPress
Description: If you forgot write a new post,this plugin send you E-mail.
Version: 0.2
Author: Yuya Terajima
Author URI: http://www.e2esound.com/
*/

/* When Activate Plugin
==================================================================== */
function rtw_activate() {
    $time = time();
    $terms = 7; //default terms
    $unixtime_per_day = 86400;
    $email = get_bloginfo('admin_email');
    $subject = "Remember the WordPress!!";
    $message = "Blogの更新が滞っているようです。サイトの更新をお願いします。";

    if(!get_option('rtw_initialized') || get_option('rtw_initialized') !== $time) {
        update_option('rtw_initialized',$time);
    }
    if(!get_option('rtw_terms')) {
        update_option('rtw_terms',$terms * $unixtime_per_day);
    }
    if(!get_option('rtw_email')) {
        update_option('rtw_email',$email);
    }
    if(!get_option('rtw_subject')) {
        update_option('rtw_subject',$subject);
    }
    if(!get_option('rtw_message')) {
        update_option('rtw_message',$message);
    }
    wp_schedule_event($time + 86400, 'daily', 'rtw_cron');
}
register_activation_hook(__FILE__, 'rtw_activate');

function get_latest_post_time() {
    global $wpdb;
    $query = "SELECT post_date FROM ".$wpdb->posts.&#8221;


              
WHERE post_status = &#8216;publish&#8217;
              
ORDER BY \`&#8221;.$wpdb->posts.&#8221;\`.\`post_date\` DESC LIMIT 0,1&#8243;;
      
$query = $wpdb->prepare($query);
      
return strtotime($wpdb->get_var($query));
      
}

function rtw_sendmail()
  
{
      
$subject = get\_option(&#8216;rtw\_subject&#8217;);
      
$mailbody = get\_option(&#8216;rtw\_message&#8217;);
      
$to\_email = get\_option(&#8216;rtw_email&#8217;);

mb\_send\_mail($to_email,$subject,$mailbody);
  
}

function rtw\_compare\_time(){
      
$unixtime\_per\_day = 86400;
      
$latest = get\_latest\_post_time();
      
$terms = intval(get\_option(&#8216;rtw\_terms&#8217;)) + intval($latest);
      
$time = time();

if(intval($terms) < intval($time)){ rtw\_sendmail(); } } add\_action('rtw\_cron', 'rtw\_compare\_time'); /\* When New Post or Edited Post. ==================================================================== \*/ function rtw\_new\_posted(){ update\_option('rtw\_initialized',time()); } add\_action('publish\_post','rtw\_new\_posted'); /\* When De-Activate Plugin ==================================================================== \*/ function rtw\_deactivate() { wp\_clear\_scheduled\_hook('rtw\_cron'); delete\_option('rtw\_initialized'); delete\_option('rtw\_terms'); delete\_option('rtw\_message'); delete\_option('rtw\_subject'); delete\_option('rtw\_email'); } register\_deactivation\_hook(\_\_FILE\_\_, 'rtw\_deactivate'); /\* Admin ==================================================================== \*/ function rtw\_add\_admin\_menu(){ add\_options\_page('Remember The WordPress','Remember The WP','administrator',\_\_FILE\_\_,'rtw\_add\_admin\_page'); } add\_action('admin\_menu','rtw\_add\_admin\_menu'); function rtw\_add\_admin\_page(){ if(isset($\_POST\['posted']) === FALSE){ $posted = FALSE; }elseif(isset($\_POST['posted']) === TRUE){ $posted = TRUE; } $unixtime\_per\_day = 86400; if($posted) { //Validation if(preg\_match('/[1-3\]\[0-9\]|[1-9]/',intval($\_POST['terms']) AND intval($\_POST['terms']) <= 30)){ update\_option('rtw\_terms',intval($\_POST['terms'] * $unixtime\_per\_day)); update\_option('rtw\_email',stripslashes($\_POST['email'])); update\_option('rtw\_subject',stripslashes($\_POST['subject'])); update\_option('rtw\_message',stripslashes($\_POST['message'])); $rtw\_error = FALSE; }else{ $rtw\_error = TRUE; } } ?>

<?php 
    //Admin Page Start
    //Updated Message
    if($posted === TRUE AND $rtw_error === FALSE) : ?>

<div class="updated">
  <p>
    <strong>設定を保存しました</strong>
  </p>
</div>

<?php elseif($posted === TRUE AND $rtw_error === TRUE):?>

<div class="error">
  <p>
    <strong>アラート発生日数は1-30の間の値を入力して下さい。</strong>
  </p>
</div>

<?php endif; ?>

<div class="wrap">
  <h2>
    Remember The WordPress Settings
  </h2>
</div>

<?php } ?>[/cc]

少々長いがへこたれずに頑張ってみていくことにしよう。（自分自身を鼓舞）

#### WordPressプラグインの作成方法

前提としてこれはWordPressプラグインなのでその大まかな作り方を紹介しよう。

まず、単体のphpファイルか、もしくは同名のディレクトリにプラグイン用のファイルを作る。
  
（例：foo\_plugin/foo\_plugin.php）

プラグインの各種情報は決まったコメントの書き方があるのでそれにしたがってファイル内先頭に書く。これがWordPressのプラグイン管理画面に出てくる情報になる。

一番単純なプラグインとしては、プラグインを管理画面から有効にすると、プラグインのphpファイルがWordPressにincludeされる。よって適当な関数をプラグイン内で定義しておき、テーマの中で使うといったことが可能だ。（モチロン名前はぶつかる可能性がある。プラグイン名をprefixにした関数を作るか、プラグイン名のクラスに閉じ込めることが推奨されている。）

これでWordPressの関数や変数、DBをプラグイン内からでも使うことが出来る。また、プラグイン用にactionやfilterといったフックをかける事ができる。この辺は公式ドキュメントに全関数リファレンスやプラグイン用のフックの説明がちゃんとあるのでPHPが分かれば理解するのは容易だ。（[Main Page &#8211; WordPress Codex 日本語版][4]）

#### 擬似cron

今回のコードを理解する上でもう一つ必要になるのが、wp\_schedule\_event関数を使った擬似cronの仕組みだ。WordPressにはwp\_schedule\_event関数でcronのように定期スケジュールを登録することが出来る。こういう処理はcron daemonのように常に起動しているプロセスと連携する必要があり、一見単純なPHPウェブアプリだけでは無理に思えるが、Webからのユーザーリクエストのみをトリガーにcronのようなスケジュール実行を可能にしている。

もちろんWebからのリクエスト頼みなのでアクセスがまったく来なければスケジュールした時間には実行されない擬似的な機能なので厳密な処理には向かない。しかし、一般的なサイトであれば大抵毎分１アクセスぐらいはあるので大体このぐらいの頻度でやって欲しいといった処理なら実用上は問題なさそうだ。

参照：[Function Reference/wp schedule event « WordPress Codex][5]

こんないい加減な仕組み使うなんてありえねー！とヤルタイプからは言われそうだが、phpのsession削除は同様の仕組みで行われている。（アクセスが来なければ永久にセッションファイルは消えない）
  
根本的なこの仕組の是非は兎も角、PHPの流儀に従った実装方法ではあると言える。

参照：[PHP: 実行時設定 &#8211; Manual][6]

#### Remenber The WordPress

まず、38行目でregister\_activation\_hook関数で自分自身のファイルのrtw\_activate関数をactivation\_hookに登録している。activationとはプラグイン管理画面でそのプラグインを「有効」にしたときのことだ。データベーステーブルを独自に持つようなプラグインでは大抵この場所でテーブルをCREATEしている。（WordPressはORMを提供していないので、各種プラグインのこの場所にはMySQLに特化したSQLが大抵使用されている。WordPressはプラグインエコシステムがキモであるため、コレのせいで他DBへの対応が非常に難しくなっている。）

rtw\_activate関数の中でwp\_schedule\_eventを使ってdailyで実行されるようにrtw\_cronを登録している。

あとは、40行目のget\_latest\_post\_time関数で最終投稿日を取得して、管理画面で設定できる「何日更新が無かったらメールを送るか？」という値と比較してmb\_send_mailでメールを送っている。

殆どの行数は管理画面用なので長く見えるし大変そうだが、管理画面からプラグインの設定が出来るというのがWordPressユーザーに非常に訴える箇所なので重要だ。

議論にコードで答えた事。（これが結構貴重なんだが）WordPress流儀に則った実装。管理画面まで手を抜かない所。等々、@terakuma a.k.a. 法務系PHPerは素晴らしい。それにRemember The MilkをパクったRemember The WordPressというプラグイン名も素敵だ。

WordPressプラグインで困ったことがあったら@terakuma a.k.a. 法務系PHPerに相談してみたらいいかもしれない！

 [1]: http://help-me-hackers.com/tasks/93
 [2]: http://help-me-hackers.com/machida
 [3]: http://help-me-hackers.com/terakuma
 [4]: http://wpdocs.sourceforge.jp/
 [5]: http://codex.wordpress.org/Function_Reference/wp_schedule_event
 [6]: http://jp2.php.net/manual/ja/session.configuration.php#ini.session.gc_maxlifetime