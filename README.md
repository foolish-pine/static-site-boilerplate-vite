# 静的サイトボイラープレート（Vite + Dart Sass + PostCSS + Prettier + stylelint + ESLint）
- 静的サイト制作のためのボイラープレートです
- Visual Studio CodeとそのプラグインおよびNode.jsを使用します
- HTML、Dart Sass、Vanilla JSの使用を想定しています
- モジュールバンドラとして[Vite](https://ja.vitejs.dev/)を使用します
- 各種設定は必要に応じて変更してください

## 動作確認環境
- Node.js v16.18.1  
Node.jsのバージョン管理には[Volta](https://volta.sh/)を使用する。

## 使い方
1. zip形式で本レポジトリをダウンロードする
2. zipファイルを解凍し、フォルダ名を任意のプロジェクト名に変更する
3. プロジェクトのディレクトリに移動し、`npm i`コマンドを実行してパッケージをインストールする
4. [必要なVisual Studio Codeプラグイン](#visual-studio-code%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3)をインストール・有効化する
5. 必要に応じて、README.mdや各種設定ファイルを編集する
6. コーディングを開始する

## 設定ファイルについての説明
- `.vscode`ディレクトリ  
Visual Studio Codeの設定ファイルを格納するディレクトリ。
このディレクトリのファイルに記述した設定はプロジェクト内でのみ有効となる。

- `.vscode/extensions.json`  
プロジェクトにおけるVisual Studio Codeの推奨プラグインを記述したファイル。

- `.vscode/settings.json`  
Visual Studio Codeの設定ファイル。

- `.browserslistrc`  
対応ブラウザを指定するファイル。

- `.editorconfig`  
EditorConfigの設定ファイル。使用するルールについては後述。

- `.eslintrc.json`  
ESlintの設定ファイル。使用するルールについては後述。

- `.gitignore`  
Gitの追跡対象にしないファイル・ディレクトリを記述する。
プロジェクトをGitで管理する場合、以下のファイル・ディレクトリは追跡対象としない。
	- `node_modules`
	- `.DS_Store`
	- `dist`

- `.stylelintrc.json`  
stylelintの設定ファイル。使用するルールについては後述。

- `package-lock.json`  
使用するパッケージのバージョンを固定するためのファイル。

- `package.json`  
プロジェクトで使用するパッケージを記載したファイル。

- `postcss.config.cjs`  
PostCSSの設定ファイル。

- `README.md`  
本ドキュメント。

- `vite.config.js`  
viteの設定ファイル。

## コマンド
- `dev`  
開発用サーバーを立ち上げる。

- `build`  
ビルドする。  
ビルド後のHTMLファイルはPrettierでフォーマットされる。

- `preview`  
ローカルで静的なサーバーを起動し、distのファイルをlocalhostで配信する。プロダクションビルドが問題ないかどうかを自分のローカル環境で確認するために使用する。

## コーディングルール
### コーディング全般
#### 対応ブラウザ
コンパイル時、以下を満たすブラウザを対象とする  
- サポート中かつシェアが0.2%より大きい
- Internet Explorer 11は含まない
- Safari > 11
- iOS > 11

プロジェクトの要件に合わせて変更すること。その場合、必要に応じて`.browserslistrc`も更新すること。

#### [EditorConfig](https://editorconfig.org/)のルール
- `indent_style = tab`  
インデントにタブを使用する。
- `indent_size = 2`  
インデントサイズは2とする。
- `end_of_line = lf`  
改行コードはLFとする。
- `charset = utf-8`  
文字コードはUTF-8とする。
- `trim_trailing_whitespace = true`  
文末のスペースを削除する。ただし、`.md`ファイルでは`false`とする。
- `insert_final_newline = true`  
ファイルの最終行に空行を挿入する。

#### コメント
必要に応じてコメントを挿入する。  
ただし、不要なコメントは削除する。なんらかの理由でコメントアウトしたコードを残す場合は、その理由もコメントで残しておく。

#### Visual Studio Codeプラグイン
以下のプラグインを使用すること。

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### HTML
#### フォーマッター
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)を使用する

#### HTMLファイルの分割
- [vite-plugin-handlebars](https://github.com/alexlafroscia/vite-plugin-handlebars)を使用し、HTMLファイルを[Handlebars](https://handlebarsjs.com/)として扱う。これにより、ページ共通のHTMLをパーツとして切り出すことができる

### CSS
- 原則として、SCSSファイルをコンパイルして生成したCSSファイルを直接編集することは禁止する

#### リセットCSS
- [destyle.css](https://github.com/nicolas-cusan/destyle.css)を使用する

### SCSS
#### コンパイラ
- [Dart Sass](https://github.com/sass/dart-sass)を使用する

#### CSSプロセッサー
- [PostCSS](https://github.com/postcss/postcss)を使用する
- プラグインとして以下を使用する
	- [autoprefixer](https://github.com/postcss/autoprefixer)
	- [postcss-sort-media-queries](https://github.com/solversgroup/postcss-sort-media-queries)
- プレフィックスの付与は`.browserslistrc`に基づく

#### リンター
- [stylelint](https://stylelint.io/)を使用する
- ベースのルールとして[stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss)を使用する
- 以下のルールを追加済み

[`"at-rule-empty-line-before": always`](https://stylelint.io/user-guide/rules/list/at-rule-empty-line-before/)  
at-rulesの前に必ず空行を挿入する。
```
// 以下は許容されない
a {} @media {}

a {}
@media {}
```

[`"declaration-block-no-duplicate-properties": true`](https://stylelint.io/user-guide/rules/list/declaration-block-no-duplicate-properties/)  
プロパティの重複を許容しない。
```
// 以下は許容されない
a {
  color: red;
  color: blue;
}
```

[`"declaration-block-no-redundant-longhand-properties": null`](https://stylelint.io/user-guide/rules/list/declaration-block-no-redundant-longhand-properties/)  
プロパティのロングハンド指定を許容する。
```
// 以下は許容される
a {
  padding-top: 1px;
  padding-right: 2px;
  padding-bottom: 3px;
  padding-left: 4px;
}
```

[`"keyframes-name-pattern": null`](https://stylelint.io/user-guide/rules/list/keyframes-name-pattern/)  
keyframeの命名パターンを制限しない。

[`"selector-class-pattern": null`](https://stylelint.io/user-guide/rules/list/selector-class-pattern/)  
classセレクタの命名パターンを制限しない。

[`"selector-id-pattern": null`](https://stylelint.io/user-guide/rules/list/selector-id-pattern/)  
idセレクタの命名パターンを制限しない。

[`"scss/at-function-pattern": null`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/at-function-pattern)  
functionの命名パターンを制限しない。

[`"scss/at-mixin-pattern": null`](https://github.com/stylelint-scss/stylelint-scss/blob/master/src/rules/at-mixin-pattern)  
mixinの命名パターンを制限しない。

[`"scss/dollar-variable-pattern": null`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/dollar-variable-pattern)  
変数の命名パターンを制限しない。

[`"scss/no-duplicate-dollar-variables": true`](https://github.com/kristerkari/stylelint-scss/tree/master/src/rules/no-duplicate-dollar-variables)  
変数宣言の重複を許容しない。
```
// 以下は許容されない
$red: red;
$red: blue;
```

[`"scss/percent-placeholder-pattern": null`](https://github.com/stylelint-scss/stylelint-scss/tree/master/src/rules/percent-placeholder-pattern)  
`%`-placeholderの命名パターンを制限しない。

#### フォーマッター
- [Prettier](https://prettier.io/)を使用する
- ベースのルールとして[stylelint-prettier/recommended](https://github.com/prettier/stylelint-prettier)を使用する
- プロパティの並び順は[stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order)に準拠する

### JavaScript
#### モジュールバンドラ
- [Vite](https://ja.vitejs.dev/)を使用する。

#### リンター
- [ESLint](https://eslint.org/)を使用する
- ベースのルールとして[eslint:recommended](https://eslint.org/docs/rules/)を使用する
- プラグインとして以下を使用する
	- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md)
	- [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports)
- 加えて、以下のルールを追加済み。ルールの詳細は[こちら](https://eslint.org/docs/rules/)を参照すること

`"no-alert""warn"`  
`alert`, `confirm`, `prompt`が使用されていたら警告する。

`"no-console""warn"`  
`console`が使用されていたら警告する。

`"no-unused-vars": "warn"`  
未使用の変数があれば警告する。

`"no-var": "warn"`  
`var`が使用されていたら警告する。

`"eqeqeq": "warn"`  
`==`または`!=`が使用されていたら警告する。

#### フォーマッター
- [Prettier](https://prettier.io/)を使用する

### 画像
#### 最適化
- [vite-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin)を使用する
- 設定は`vite.config.js`に記述済み。必要に応じて変更すること
