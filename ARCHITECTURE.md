# アーキテクチャ概要 - Koto-Koto

## 🏗️ プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/            # 共有UIコンポーネント
│   ├── TypingGame.tsx    # メインゲームコンテナ
│   ├── SeasonalParticles.tsx
│   └── MobileBlocker.tsx
│
├── contexts/             # React Context (状態管理)
│   └── SeasonalContext.tsx  # 季節テーマの提供
│
├── features/             # 機能別モジュール
│   ├── game/
│   │   ├── components/
│   │   │   ├── TitleScreen.tsx
│   │   │   ├── GameHeader.tsx
│   │   │   └── TypingArea.tsx
│   │   └── hooks/
│   │       ├── useGameController.ts
│   │       ├── useGameSession.ts
│   │       ├── useTypingEngine.ts
│   │       └── useSound.ts
│   └── result/
│       ├── components/
│       │   └── ResultScreen.tsx
│       └── utils/
│           └── rankLogic.ts
│
├── config/               # 設定ファイル
│   ├── seasons.ts       # 季節システム定義
│   ├── theme.ts         # テーマ設定
│   └── gameConfig.ts    # ゲーム設定
│
├── lib/                 # ユーティリティ関数
│   ├── formatters.ts   # フォーマッター関数
│   └── romaji.ts       # ローマ字変換
│
├── data/               # 静的データ
│   └── words.ts        # 単語リスト
│
└── hooks/              # カスタムフック
    └── useSeason.ts    # 季節検出フック
```

## 🎯 設計原則

### 1. 単一責任の原則 (SRP)

各コンポーネントは 1 つの責任のみを持つ:

-   `TitleScreen`: タイトル画面の表示のみ
-   `GameHeader`: ゲーム中のヘッダー情報のみ
-   `TypingArea`: タイピング領域の表示のみ

### 2. Context API による状態共有

季節テーマは`SeasonalProvider`を通じて全コンポーネントに提供され、prop drilling を回避:

```tsx
<SeasonalProvider>
    <TypingGameInner />
</SeasonalProvider>
```

### 3. カスタムフックによるロジック分離

ビジネスロジックはカスタムフックに分離:

-   `useGameController`: ゲーム全体の制御
-   `useTypingEngine`: タイピングエンジン
-   `useSeason`: 季節検出

### 4. ユーティリティ関数の再利用

共通処理は`lib/formatters.ts`に集約:

-   `formatTime()`: 時間フォーマット
-   `calculateWPM()`: WPM 計算
-   `calculateAccuracy()`: 精度計算

## 🎨 季節システムアーキテクチャ

### データフロー

```
getCurrentSeason() → SEASONAL_THEMES[season]
         ↓
   useSeason() (Hook)
         ↓
SeasonalProvider (Context)
         ↓
useSeasonalTheme() (Consumer Hook)
         ↓
   各コンポーネント
```

### パフォーマンス最適化

-   **遅延初期化**: `useState(() => ...)`で初回のみ計算
-   **メモ化**: 不要な再計算を防ぐ
-   **Context 分離**: 季節テーマのみを分離して再レンダリングを最小化

## 📦 コンポーネント依存関係

```
TypingGame (Provider)
  ├─ MobileBlocker
  ├─ SeasonalParticles
  ├─ GameHeader (playing時)
  └─ AnimatePresence
      ├─ TitleScreen (waiting)
      ├─ TypingArea (playing)
      └─ ResultScreen (finished)
```

## 🔄 状態管理戦略

### グローバル状態 (Context)

-   `SeasonalTheme`: 季節テーマ（全体で共有）

### ローカル状態 (useState/Custom Hooks)

-   `gameState`: ゲーム状態
-   `currentWord`: 現在の単語
-   `elapsedTime`: 経過時間
-   その他ゲームロジック

### 純粋関数 (Utils)

-   時間フォーマット
-   スコア計算
-   ランク判定

## 🚀 パフォーマンス考慮事項

1. **コンポーネント分割**: 大きなコンポーネントを小さく分割し、再レンダリング範囲を最小化
2. **Context 最適化**: 季節テーマのみを含む Context で、不要な再レンダリングを防止
3. **アニメーション最適化**: Framer Motion を使用し、GPU 加速を活用
4. **純粋関数**: 副作用のない関数で予測可能な動作を保証

## 🎓 拡張性

### 新しい季節の追加

`src/config/seasons.ts`に新しい季節定義を追加:

```typescript
export const SEASONAL_THEMES = {
    // 既存の季節...
    newSeason: {
        season: "newSeason",
        name: { ja: "新季節", en: "New Season" },
        // ...
    },
};
```

### 新しいゲームモードの追加

`src/features/`に新しいフィーチャーディレクトリを作成し、同じパターンに従う

## 📝 命名規則

-   **コンポーネント**: PascalCase (`TitleScreen.tsx`)
-   **フック**: camelCase with `use` prefix (`useSeason.ts`)
-   **ユーティリティ**: camelCase (`formatters.ts`)
-   **定数**: UPPER_SNAKE_CASE (`SEASONAL_THEMES`)
-   **型**: PascalCase (`SeasonalTheme`)
