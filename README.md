# satoshiest.github.io

個人サイト / ポートフォリオ。[Astro](https://astro.build) 製の静的サイトで、
GitHub Actions 経由で GitHub Pages に公開しています。

**https://satoshiest.github.io**

## 開発

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に出力
npm run preview  # ビルド結果をローカルで確認
npm run check    # 型・テンプレートのチェック
```

## 文言を直したいとき

サイト内のテキストは日本語・英語ともに [`src/data/site.ts`](src/data/site.ts) に
まとまっています。ここだけ編集すれば、ヘッダーの `EN / 日本語` トグルの
両方に反映されます。

`// TODO:` コメントが付いている箇所（勤務地・職歴など）は
実際の情報に置き換えてください。

## 構成

```
src/
  data/site.ts        全コンテンツ（ja / en）
  layouts/Base.astro  <head>・フォント・言語の初期化
  components/         Header / Hero / About / Experience / Work / Contact / Footer
  styles/global.css   デザイントークンと共通スタイル
public/               画像・favicon・robots.txt
.github/workflows/    Pages へのデプロイ
```

## デプロイ

`main` に push すると [deploy.yml](.github/workflows/deploy.yml) が走り、
ビルド結果が Pages に配信されます。

初回のみ GitHub 側の設定が必要です:
**Settings → Pages → Build and deployment → Source を "GitHub Actions" に変更**
