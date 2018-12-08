// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/src/pages/page-2.js")),
  "component---src-pages-about-js": preferDefault(require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/src/pages/about.js")),
  "component---src-pages-works-cited-js": preferDefault(require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/src/pages/works-cited.js")),
  "component---src-pages-detailed-writeup-js": preferDefault(require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/src/pages/detailed-writeup.js"))
}

exports.json = {
  "layout-index.json": require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/.cache/json/dev-404-page.json"),
  "404.json": require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/.cache/json/404.json"),
  "index.json": require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/.cache/json/index.json"),
  "page-2.json": require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/.cache/json/page-2.json"),
  "404-html.json": require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/.cache/json/404-html.json"),
  "about.json": require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/.cache/json/about.json"),
  "works-cited.json": require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/.cache/json/works-cited.json"),
  "detailed-writeup.json": require("/mnt/c/Users/matth/Documents/PCPSLFWebsite/.cache/json/detailed-writeup.json")
}