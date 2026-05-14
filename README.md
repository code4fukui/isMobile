# isMobile

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple JavaScript library that detects mobile devices in both browser and Deno environments.

## Features

-   **Comprehensive Detection**: Identifies a wide range of mobile devices, including Apple (iPhone, iPad, iPod), Android, Amazon (Kindle, Fire), and Windows devices.
-   **Granular Results**: Provides a detailed object with boolean flags for specific device types (e.g., `isMobile.apple.phone`, `isMobile.android.tablet`).
-   **Platform Support**: Works seamlessly in browsers and server-side environments like Deno.
-   **Robust Edge-Case Handling**: Correctly identifies iPads on iOS 13+ that report as desktop browsers and cleans up user-agent strings from in-app browsers (Facebook, Twitter).
-   **Lightweight**: Tiny footprint at ~1.3kB minified.

## Usage

Import the module and call the `isMobile` function. By default, it uses the global `navigator` object.

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

You can also provide your own user-agent string or a `navigator`-like object.

```ts
import isMobile from "https://code4fukui.github.io/isMobile/isMobile.js";

// Pass a user-agent string
const userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/604.1';
console.log(isMobile(userAgent).phone); // true

// Pass a navigator-like object
// This is required for accurate iPad detection on iOS 13+
const navigator = {
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko)',
  platform: 'MacIntel',
  maxTouchPoints: 5,
};
console.log(isMobile(navigator).apple.tablet); // true
```

## Return Value

The function returns an object with the following structure:

```js
{
  apple: {
    phone: false,
    ipod: false,
    tablet: false,
    universal: false,
    device: false, // true if any Apple device
  },
  amazon: {
    phone: false,
    tablet: false,
    device: false, // true if any Amazon device
  },
  android: {
    phone: false,
    tablet: false,
    device: false, // true if any Android device
  },
  windows: {
    phone: false,
    tablet: false,
    device: false, // true if any Windows device
  },
  other: {
    blackberry: false,
    blackberry10: false,
    opera: false,
    firefox: false,
    chrome: false,
    device: false, // true if any "other" device
  },
  any: false,    // true if any mobile device
  phone: false,  // true if any mobile phone
  tablet: false, // true if any tablet
}
```

## Credits

This library is based on the original work by the contributors listed in [CONTRIBUTORS.md](CONTRIBUTORS.md).

## License

MIT License — see [LICENSE](LICENSE).