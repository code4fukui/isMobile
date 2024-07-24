# isMobile

A simple JS library that detects mobile devices in both the browser and Deno.

## Why use isMobile?

### In the Browser

You might not need this library. In most cases, [responsive design](https://en.wikipedia.org/wiki/Responsive_web_design) solves the problem of controlling how to render things across different screen sizes. I recommend a [mobile first](https://medium.com/@Vincentxia77/what-is-mobile-first-design-why-its-important-how-to-make-it-7d3cf2e29d00) approach. But there are always edge cases. If you have an edge case, then this library might be for you.

My edge case at the time was redirecting users to a completely separate mobile site. I tried to keep this script small (**currently ~1.3k bytes, minified**) and simple, because it would need to execute in the `<head>`, which is generally a bad idea, since JS blocks the downloading and rendering of all assets while it parses and executes. In the case of mobile redirection, I don't mind so much, because I want to start the redirect as soon as possible, before the device has a chance to start downloading and rendering other stuff. For non-mobile platforms, the script should execute fast, so the browser can quickly get back to downloading and rendering.

#### How it works in the browser

isMobile runs quickly during initial page load to detect mobile devices; it then creates a JavaScript object with the results.

## Devices detected by isMobile

In a browser, the following properties of the global `isMobile` object will either be `true` or `false`. In Node, `isMobile` will be whatever you named the variable.

### Apple devices

- `isMobile.apple.phone`
- `isMobile.apple.ipod`
- `isMobile.apple.tablet`
- `isMobile.apple.universal`
- `isMobile.apple.device` (any mobile Apple device)

### Android devices

- `isMobile.android.phone`
- `isMobile.android.tablet`
- `isMobile.android.device` (any mobile Android device; OkHttp user agents will match this)

### Amazon Silk devices (also passes Android checks)

- `isMobile.amazon.phone`
- `isMobile.amazon.tablet`
- `isMobile.amazon.device` (any mobile Amazon Silk device)

### Windows devices

- `isMobile.windows.phone`
- `isMobile.windows.tablet`
- `isMobile.windows.device` (any mobile Windows device)

### "Other" devices

- `isMobile.other.blackberry_10`
- `isMobile.other.blackberry`
- `isMobile.other.opera` (Opera Mini)
- `isMobile.other.firefox`
- `isMobile.other.chrome`
- `isMobile.other.device` (any "Other" device)

### Aggregate Groupings

- `isMobile.any` - any device matched
- `isMobile.phone` - any device in the 'phone' groups above
- `isMobile.tablet` - any device in the 'tablet' groups above

## Usage

```ts
import isMobile from "https://code4fukui.github.io/isMobile/isMobile.js";

console.log(isMobile(window.navigator).any);
```

Or pass in a `window.navigator`-shaped object that includes at least a `userAgent` property. To properly detect iPad on iOS 13, the object should also include the `platform` and `maxTouchPoints` properties.

```js
// this is just an example. window.navigator is readonly in the browser
window.navigator = {
  ...
  userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko)',
  platform: 'MacIntel',
  maxTouchPoints: 2,
  ..
}
```

## Contributing

This library uses Spotify's [web-scripts](https://github.com/spotify/web-scripts) project to build, lint, test, format and release the this library.

You must use `yarn commit` rather than `git commit` to commit files. This enforced commit messages to following a specific format and enables automation of release notes and version bump.
