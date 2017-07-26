---
title: iOSアプリ開発：DeployGateを利用したAd Hoc配布
author: komagata

date: 2014-12-26T01:16:24+00:00
url: /articles/1544.html
dsq_thread_id:
  - 4053480576
categories:
  - blog

---
注意：管理者アカウント兼配布用証明書のプライベートキーを持っているユーザーのみ実行できます。また、既にリリース済みのアプリを例にまとめています。

**\# 配布用証明書の確認**

Xcode > Preferences > Accountsタブ > チーム名選択 > View Details

[<img class="alignnone size-full wp-image-1545" alt="ios5" src="http://fjord.jp/wp-content/uploads/2014/12/ios5.png" width="548" height="192" />][1]

「iOS Distribution」が見つからない場合は、[iOS Distributionの証明書][2]があるか確認してください。

配布用証明書がない場合、または、Invalid/Expiredの場合、[「App Store and Ad Hoc」用のCertificateを作成・ダウンロード・ダブルクリック][3]してください。

※ 配布用証明書のプライベートキーがない場合も新たに作りなおす必要があります。

配布用証明書のプライベートキーの確認は、Keychain Access > サイドバーのCertificates > iPhone Distribution: 会社名 の横に矢印アイコンがない場合、プライベートキーが紛失してる可能性があります。

[<img class="alignnone size-full wp-image-1546" alt="ios6" src="http://fjord.jp/wp-content/uploads/2014/12/ios6.png" width="548" height="91" />][4]

また、下記のようなメッセージが出た場合、配布用証明書のプライベートキーがない可能性があります。

> Your account already has a valid iOS Distribution certificate

**\# 配布用プロビジョニングプロファイルの確認**

  1. [配布用プロビジョニングプロファイル][5]をクリック > Edit
  2. 配布用証明書と紐付いているか確認
  3. 配布したい端末に✓が付いているか確認
  4. 問題なければ、プロビジョニングファイルをダウンロード・ダブルクリック

※ 新たに端末を追加する場合は、[端末を追加][6]後、配布用プロビジョニングプロファイルを編集して、その端末を追加してください。更新後、ダウンロード、ダブルクリックで完了です。

**\# Version、Buildの数字を更新**

[<img class="alignnone size-full wp-image-1548" alt="ios7" src="http://fjord.jp/wp-content/uploads/2014/12/ios7.png" width="548" height="140" />][7]

**\# アーカイブ**

  * Xcode > Product > Archive > Export > Save for Ad Hoc Deployment
  * \*****.ipaを保存

**\# 配布**

\*****.ipa を[DeployGate][8]にアップロードして完了。
  
アップロード後、DeployGateのメンバーに更新通知メールが送信されますが、少し時間がかかるときがあります。

\## コマンドラインからpush

$ gem install dgate
  
$ dgate push \*****.ipa -m &#8216;optional message of this push&#8217;

※ [shenzhen][9]使うのもオススメです。

**\## DeployGateにメンバー追加**

[<img class="alignnone size-full wp-image-1549" alt="ios8" src="http://fjord.jp/wp-content/uploads/2014/12/ios8.png" width="548" height="215" />][10]

追加後、メンバーにメールが飛ぶので、iPhoneのSafariからアカウントの作成、構成プロファイルのインストールで完了です。

メンバー登録完了後、DeployGateのUDID一覧からUDIDをコピーして、[端末の追加][6]、[プロビジョニングの更新][5]をします。

&nbsp;

**\# 配布方法の比較**

**\## [TestFlight][11]**

  * テスターの端末のUDID必須
  * Ad Hocプロビジョニングファイルに設定必須
  * TestFlightアカウント必須
  * Androidは非対応

**\## [Apple（TestFlight）][12]**

  * UDIDやAd Hocプロビジョニングファイル不要
  * [iTunes Connect][13]でテスターの管理
  * 既にApple IDとiTunes Connectのアカウントが紐付いているユーザーをテスターとして招待できない
  * Androidは非対応

詳細：[iTunes Connect Developer Guide][14]

**\## [DeployGate][8]**

  * テスターの端末のUDID必須
  * Ad Hocプロビジョニングファイルに設定必須
  * DeployGateアカウント必須
  * Androidもサポート

 [1]: http://fjord.jp/wp-content/uploads/2014/12/ios5.png
 [2]: https://developer.apple.com/account/ios/certificate/certificateList.action
 [3]: https://developer.apple.com/account/ios/certificate/certificateCreate.action
 [4]: http://fjord.jp/wp-content/uploads/2014/12/ios6.png
 [5]: https://developer.apple.com/account/ios/profile/profileList.action
 [6]: https://developer.apple.com/account/ios/device/deviceList.action
 [7]: http://fjord.jp/wp-content/uploads/2014/12/ios7.png
 [8]: https://deploygate.com/
 [9]: https://github.com/nomad/shenzhen
 [10]: http://fjord.jp/wp-content/uploads/2014/12/ios8.png
 [11]: https://www.testflightapp.com
 [12]: https://developer.apple.com/app-store/testflight/
 [13]: https://itunesconnect.apple.com/
 [14]: https://developer.apple.com/library/ios/documentation/LanguagesUtilities/Conceptual/iTunesConnect_Guide/iTunesConnect_Guide.pdf