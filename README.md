# 製造統合管理システム

品質管理・設備保全・生産実績・受注スケジュールを統合したブラウザベースの製造管理システムです。

## ページ構成

| ファイル | 内容 |
|---|---|
| `index.html` | 統合ダッシュボード（KPI・アラート・推移グラフ） |
| `quality.html` | ① 品質・不良管理（なぜなぜ分析・CSV出力） |
| `equipment.html` | ② 設備保全（点検スケジュール・修理履歴） |
| `production.html` | ③ 生産実績（OEE計算・グラフ分析） |
| `schedule.html` | ④ スケジュール・納期管理（ガントチャート） |
| `demo.html` | デモデータ一括投入ツール |

## GitHub Pages での公開手順

1. このフォルダを GitHub リポジトリに push する
2. リポジトリの「Settings」→「Pages」を開く
3. Source を「Deploy from a branch」→ branch を `main`、フォルダを `/ (root)` に設定
4. 数分後に `https://<username>.github.io/<repo-name>/` でアクセスできます

## データ保存

すべてのデータはブラウザの `localStorage` に保存されます。サーバー不要でそのまま動作します。
