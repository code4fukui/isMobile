# isMobile

ブラウザおよびDeno環境でモバイルデバイスを検出するシンプルなJavaScriptライブラリです。

## 機能

- **包括的な検出**: Apple（iPhone、iPad、iPod）、Android、Amazon（Kindle、Fire）、Windowsデバイスなど、幅広いモバイルデバイスを識別します。
- **詳細な判定結果**: 特定のデバイスタイプ（例: `isMobile.apple.phone`、`isMobile.android.tablet`）を示すブール値フラグを持つ、詳細なオブジェクトを提供します。
- **プラットフォームサポート**: ブラウザおよびDenoなどのサーバーサイド環境でシームレスに動作します。
- **エッジケースへの堅牢な対応**: デスクトップブラウザとして報告されるiOS 13以降のiPadを正しく識別し、アプリ内ブラウザ（Facebook、Twitter）のユーザーエージェント文字列をクリーンアップします。
- **軽量**: 最小化時で約1.3kBという非常に小さなフットプリントです。

## 使い方

モジュールをインポートし、`isMobile`関数を呼び出します。デフォルトではグローバルな`navigator`オブジェクトを使用します。

```ts
import isMobile from "https://code4fukui.github.io/isMobile/isMobile.js";

const mobile = isMobile();

if (mobile.any) {
  console.log("This is a mobile device.");
}

if (mobile.apple.tablet) {
  console.log("This is an iPad.");
}
```

独自のユーザーエージェント文字列や`navigator`ライクなオブジェクトを渡すことも可能です。

```ts
import isMobile from "https://code4fukui.github.io/isMobile/isMobile.js";

// ユーザーエージェント文字列を渡す
const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1';
console.log(isMobile(userAgent).phone); // true

// navigatorライクなオブジェクトを渡す
// iOS 13+での正確なiPad検出には必須です
const navigator = {
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko)',
  platform: 'MacIntel',
  maxTouchPoints: 5,
};
console.log(isMobile(navigator).apple.tablet); // true
```

## 戻り値

関数は以下の構造を持つオブジェクトを返します。

```js
{
  apple: {
    phone: false,
    ipod: false,
    tablet: false,
    universal: false,
    device: false, // いずれかのAppleデバイスであればtrue
  },
  amazon: {
    phone: false,
    tablet: false,
    device: false, // いずれかのAmazonデバイスであればtrue
  },
  android: {
    phone: false,
    tablet: false,
    device: false, // いずれかのAndroidデバイスであればtrue
  },
  windows: {
    phone: false,
    tablet: false,
    device: false, // いずれかのWindowsデバイスであればtrue
  },
  other: {
    blackberry: false,
    blackberry10: false,
    opera: false,
    firefox: false,
    chrome: false,
    device: false, // いずれかの「その他(other)」のデバイスであればtrue
  },
  any: false,    // いずれかのモバイルデバイスであればtrue
  phone: false,  // いずれかの携帯電話であればtrue
  tablet: false, // いずれかのタブレットであればtrue
}
```

## クレジット

このライブラリは、[CONTRIBUTORS.md](CONTRIBUTORS.md)に記載されている貢献者によるオリジナルの成果物に基づいています。

## ライセンス

MIT License — 詳細は[LICENSE](LICENSE)を参照してください。
