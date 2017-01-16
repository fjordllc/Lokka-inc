## 合同会社フィヨルドホームページ

### 環境

- ruby
- middleman
- middleman blog
- node
- npm
- yarn
- webpack
- babel
- jQuery
- bootstrap (only js)
- oulu

### 環境セッティング

#### ruby

rbenv をインストール

```
$ brew update
$ brew install rbenv
```

`.zshrc` に rbenv のパスを追記

```
export RBENV_ROOT=/usr/local/var/rbenv
```

設定を再読み込み

```
$ source ~/.zshrc
```

ruby2.3.3 をインストール

```
$ rbenv install 2.3.3
```

bundler をインストール

```
$ gem install bundler
```

#### Node.js

NodeBrew をインストール

```
$ curl -L git.io/nodebrew | perl - setup
```

`.zshrc` に NodeBrew のパスを追記

```
export PATH=$HOME/.nodebrew/current/bin:$PATH
```

設定を再読み込み

```
$ source ~/.zshrc
```

インストール可能な Node.js を確認

```
$ nodebrew ls-remote
```

確認した最新の Node.js をインストール

```
$ nodebrew install-binary v{最新ver.}
```

インストールした Node.js を使う

```
$ nodebrew use v{インストールしたver.}
```

#### yarn

```
$ brew update
$ brew install yarn
```

`.zshrc` に yarn のパスを追記

```
export PATH="$PATH:`yarn global bin`
```

設定を再読み込み

```
$ source ~/.zshrc
```

### ローカルでの立ちあげかた

```
$ yarn install
$ bundle install
$ bundle exec middleman
```

see [http://localhost:4567/](http://localhost:4567/)

### 静的ファイルを生成

```
$ bundle exec middleman build
```

### 対応ブラウザ

- ie11 以上
- 最新のChrome
- 最新のFireFox
