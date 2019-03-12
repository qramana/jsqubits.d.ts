# jsqubits.d.ts

## これは

[jsqubits](https://github.com/davidbkemp/jsqubits) の型定義です。

## TypeScript での型定義の利用

jsqubits に依存しているプロジェクトで、 本リポジトリをプロジェクトに含めてください。
本リポジトリは npm に登録されていないため、 `npm install` で node_modules 以下にインストールすることができません。

```
git clone git@github.com:m-qgame/jsqubits.d.ts.git
```

した後、 `jsqubits.d.ts` ファイルを使いたいプロジェクト以下のディレクトリにコピーしてください。

または、 jsqubits.d.ts ディレクトリで `npm link` を実行した後、
プロジェクトのディレクトリで `npm link jsqubits.d.ts` を実行してください。
その後、tsconfig.json の files に `./node_modules/jsqubits.d.ts/jsqubits.d.ts` を追加してください。

## テスト方法

jsqubits 本体は型定義を持たないため、 この d.ts が正しく定義されているかテストする必要があります。

```
npm install
npm run test
```

jsqubits 本体と d.ts に差異があれば、エラーログが出力されます。

## 支援

本リポジトリの開発は、以下の組織の支援を受けています。

[2018年度未踏ターゲット事業（ゲート式量子コンピュータ部門）](https://www.ipa.go.jp/jinzai/target/2018/koubo2_index.html)

This software is supported by IPA Mitou Target Project 2018 (Category: quantum logic gate).
See the abstract [here](https://www.ipa.go.jp/jinzai/target/2018/koubo2_index.html) (written in Japanese).