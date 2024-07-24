import * as t from "https://deno.land/std/testing/asserts.ts";
import isMobile from "./isMobile.js";

Deno.test("simple", () => {
  const userAgent = 'Mozilla/5.0 (Linux; U; Android android-version; locale; KFOT Build/product-build) AppleWebKit/webkit-version (KHTML, like Gecko) Silk/browser-version like Chrome/chrome-version Safari/webkit-version';
  const mobile = isMobile(userAgent);
  t.assert(mobile.any);
});
