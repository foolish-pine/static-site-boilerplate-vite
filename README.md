# static-site-boilerplate-vite

- Web制作のためのボイラープレートです
- Visual Studio CodeとそのプラグインおよびNode.jsを使用します
- モジュールバンドラとして[Vite](https://ja.vitejs.dev/)を使用します
- 各種設定は必要に応じて変更してください

## 使い方

1. zip形式で本レポジトリをダウンロードする
2. zipファイルを解凍し、フォルダ名を任意のプロジェクト名に変更する
3. プロジェクトのディレクトリに移動し、`npm i`コマンドを実行してパッケージをインストールする
4. 必要なVisual Studio Codeプラグインをインストール・有効化する
5. 必要に応じて、README.mdや各種設定ファイルを編集する
6. Gitを使用する場合は、`git init`のあとに`npx simple-git-hooks`を実行する
7. コーディングを開始する

## コマンド

- `dev`  
開発用サーバーを立ち上げる。

- `build`  
ビルドする。  
ビルド後のHTMLファイルはPrettierでフォーマットされる。

- `preview`  
ローカルで静的なサーバーを起動し、distのファイルをlocalhostで配信する。プロダクションビルドが問題ないかどうかを自分のローカル環境で確認するために使用する。

- `lint`  
lintする。

- `fix`  
fixする。

## Gitフック

- pre-commit  
コミット前にステージングエリアのファイルをリント・フォーマットする。エラーが発生した場合、コミットを中断する。

## コーディングルール

### コーディング全般

#### Node.js

- Node.jsのバージョン管理には[Volta](https://volta.sh/)を使用する

#### 対応ブラウザ

コンパイル時、以下を満たすブラウザを対象とする  

- サポート中かつシェアが0.2%より大きい
- Internet Explorer 11は含まない
- Safari > 11
- iOS > 11

プロジェクトの要件に合わせて変更すること。その場合、必要に応じて`.browserslistrc`も更新すること。

#### Visual Studio Codeプラグイン

以下のプラグインを使用すること。

- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### HTML

#### フォーマッター

- [Prettier](https://prettier.io/)を使用する

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
- プロパティの並び順は[stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order)に準拠する

#### フォーマッター

- [Prettier](https://prettier.io/)を使用する

### JavaScript

#### モジュールバンドラ

- [Vite](https://ja.vitejs.dev/)を使用する。

#### リンター・フォーマッター

- [ESLint](https://eslint.org/)を使用する
- ベースのルールとして[eslint:recommended](https://eslint.org/docs/rules/)を使用する
- プラグインとして以下を使用する
  - [eslint-plugin-css-import-order](https://www.npmjs.com/package/eslint-plugin-css-import-order)
  - [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md)
  - [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports)

#### フォーマッター

- [Prettier](https://prettier.io/)を使用する

### 画像

#### 最適化

- [vite-plugin-imagemin](https://github.com/vbenjs/vite-plugin-imagemin)を使用する
- 設定は`vite.config.js`に記述済み。必要に応じて変更すること
