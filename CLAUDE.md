# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

株式会社フィヨルド（Fjord, Inc）のコーポレートサイト。Hugo（静的サイトジェネレーター）とWebpackを使用。

## 環境設定

Node.js v12.22.12が必要。miseで管理（`.mise.toml`で指定済み）。

```bash
# 初回のみ: mise設定を信頼
mise trust

# 依存関係インストール
mise exec -- npm install
```

## コマンド

```bash
# 開発サーバー起動（Webpack watchとHugo serverを同時実行）
mise exec -- npm run watch

# 本番ビルド（docs/ディレクトリに出力）
mise exec -- npm run build

# ブログ記事の新規作成
hugo new articles/`date "+%Y-%m-%d"`.md
```

## トラブルシューティング

sassのコンパイルでエラーが出る場合:
```bash
npm rebuild node-sass
```

## 技術構成

- **Hugo**: 静的サイトジェネレーター（config.tomlで設定）
- **Webpack**: JS/SASSのバンドル（webpack.config.babel.js）
- **Node.js**: v12.22.12（.node-versionで指定）
- **テーマ**: themes/fjord-2017/

## ディレクトリ構成

- `content/` - Markdownコンテンツ（articles/, works/など）
- `themes/fjord-2017/layouts/` - Hugoテンプレート
- `themes/fjord-2017/assets/` - JS/SASSソースファイル
- `themes/fjord-2017/static/assets/` - ビルド済みアセット出力先
- `docs/` - 静的サイト出力先（GitHub Pages用）
- `data/members/` - メンバー情報（TOMLファイル）

## ブログ記事のFront Matter

```yaml
---
title: 記事タイトル
author: komagata  # 半角英数
date: 2017-08-15T17:44:48+09:00
url: /articles/記事名.html
draft: true  # 公開時は削除
tags:
  - information  # トップページに表示する場合は必須
---
```

`<!--more-->`で抜粋の区切りを指定。
