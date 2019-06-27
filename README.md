# 環境構築

## nodebrew

### nodebrewをインストール

```
$ brew install nodebrew
```

### 環境変数にnodebrew関連のものを追加

```
$ vi ~/.bash_profile
```

次の内容を追加

```
NODEBREW_HOME=/usr/local/var/nodebrew/current
export NODEBREW_HOME
export NODEBREW_ROOT=/usr/local/var/nodebrew

export PATH=$PATH:$NODEBREW_HOME/bin
```

### 最新のNode.jsをインストール

```
$ nodebrew install-binary latest
```

### 最新版のNode.jsをcurrentに設定

インストールされたNode.jsのバージョンを確認

```
$ nodebrew list
```

インストールされた Node.js の一覧が表示される。

### 最新版のNode.jsをcurrentに設定

例として v7.10.0 (実際は前の工程で表示されたバージョンにする)

```
$ nodebrew use v7.10.0
```

### 設定が出来ているか確認

```
$ nodebrew list
```

current: のところに、前工程で指定したバージョン（例では v7.10.0）が表示されていれば設定OK。

## yarn

### yarnのインストール

```
$ brew install yarn
```

### パスを通す

```
$ vi ~/.bash_profile
```

次の内容を追加

```
export PATH="$HOME/.yarn/bin:$PATH"
```

## Hugo

### Hugoのインストール

```
$ brew install hugo
```

# ローカルで立ち上げる

```
$ git clone git@github.com:fjordllc/fjordllc.git
$ cd fjordllc
$ yarn install
$ yarn watch
$ open http://localhost:1313/
```

# トラブルシューティング

## sassのコンパイルでコケる

```
$ npm rebuild node-sass
```
