# 日本語対応アプリケーション (Japanese Language Support Application)

このプロジェクトは日本語をサポートするTypeScriptアプリケーションです。

## 機能 (Features)

- **ユーザー管理** - 日本語の名前でユーザーを作成・管理
- **計算機能** - 基本的な四則演算
- **日本語メッセージ** - 全てのメッセージが日本語で表示

## 使用方法 (Usage)

```bash
# TypeScriptファイルを直接実行
npx tsx src/main.ts
```

## ファイル構成 (File Structure)

- `src/main.ts` - メインアプリケーション
- `src/user.ts` - ユーザー管理クラス
- `src/calculator.ts` - 計算機クラス

## 例 (Example)

アプリケーションを実行すると、以下のような出力が表示されます：

```
アプリケーションを開始しています...
作成されたユーザー: 田中太郎 (tanaka@example.com)
計算結果: 10 + 20 = 30
複雑な計算結果: 5 × 8 = 40
登録されているユーザー: [...]
```

## 日本語サポート (Japanese Language Support)

- UTF-8エンコーディングを使用
- 日本語の文字、コメント、メッセージをフルサポート
- TypeScriptのインターフェースとクラスで日本語文字列を適切に処理
