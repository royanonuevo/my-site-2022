if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const t=e=>s(e,c),o={module:{uri:c},exports:r,require:t};a[c]=Promise.all(i.map((e=>o[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Kx5lJwOkvWuVxZ34VRT8a/_buildManifest.js",revision:"f46c1a049b2aef867e6a2de11e04d8af"},{url:"/_next/static/Kx5lJwOkvWuVxZ34VRT8a/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1bfc9850-d727411a1b30ccbe.js",revision:"d727411a1b30ccbe"},{url:"/_next/static/chunks/94-d9067ace36308275.js",revision:"d9067ace36308275"},{url:"/_next/static/chunks/94726e6d-83c2133663180dd7.js",revision:"83c2133663180dd7"},{url:"/_next/static/chunks/bf781ae0-9c52b9fbcbb59f57.js",revision:"9c52b9fbcbb59f57"},{url:"/_next/static/chunks/framework-7751730b10fa0f74.js",revision:"7751730b10fa0f74"},{url:"/_next/static/chunks/main-7272950ee3d9492e.js",revision:"7272950ee3d9492e"},{url:"/_next/static/chunks/pages/_app-44eef5cac14573bd.js",revision:"44eef5cac14573bd"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/index-4fbc025311376e00.js",revision:"4fbc025311376e00"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-b8f8d6679aaa5f42.js",revision:"b8f8d6679aaa5f42"},{url:"/_next/static/css/fe440b258f48d7e2.css",revision:"fe440b258f48d7e2"},{url:"/favicon.ico",revision:"9b94e2109512d543e411222e0133330e"},{url:"/icon-192x192.png",revision:"b3faada63b4e90a4a974c1df05d637bb"},{url:"/icon-256x256.png",revision:"3dd3692d7132b9e06fa36d9f2bae930d"},{url:"/icon-384x384.png",revision:"2a4d0e5bcdc783ab84368aa7c922d7fe"},{url:"/icon-512x512.png",revision:"ee43efe6f39446c49fab5bcad3a341d3"},{url:"/images/ig/1.jpg",revision:"9d06e84df38945d617ed2568b0816c6b"},{url:"/images/ig/2.jpg",revision:"864e3eb371a1dd1a5490baf7b2f34536"},{url:"/images/ig/3.jpg",revision:"b1fdb38047ba483c3017edd7ffe8d00b"},{url:"/images/ig/4.jpg",revision:"50c76e8d4931f8a2d625577435f65f05"},{url:"/images/ig/5.jpg",revision:"afced0074b977b6c0f9e65e52ace6203"},{url:"/images/ig/6.jpg",revision:"181214cf605934edc09b4d7a746a2f3e"},{url:"/images/ig/7.jpg",revision:"446c3e5e48b760784f9be9637e135e84"},{url:"/images/ig/other/Bomod Ok Falls.jpeg",revision:"2011cb22a63eedbb75bd8c828f99f11b"},{url:"/images/ig/other/Handara Gate.jpeg",revision:"b4368a088a8cc7c885fe11eecbf1b2a5"},{url:"/images/ig/other/LRM_EXPORT_115837530991750_20181230_222617112.jpg",revision:"51819967cd443de70cdd88470c6c905e"},{url:"/images/ig/other/LRM_EXPORT_443326509437269_20190930_190947380.jpg",revision:"66907efc33fb4c8181d7a56fb005a2ab"},{url:"/images/ig/other/Lempuyang Temple.jpeg",revision:"eb6ed67d5d6607b294c50a92c9ec7a83"},{url:"/images/ig/other/Mt-Pinatubo-2.jpg",revision:"4c6588ba36f8ef39808a609d29491d0a"},{url:"/images/ig/other/Mt-Pinatubo.jpg",revision:"de7ef0b27bc4b721edff5a2f7984cf9b"},{url:"/images/ig/other/Mt-Pulag.jpg",revision:"d5cc111724a15d9090aa81a425ae58e1"},{url:"/images/ig/other/Mt. Daraitan.jpeg",revision:"0dc5e3ad4c07a944d4473735cc3f1dbe"},{url:"/images/ig/other/Mt. Maculot.jpeg",revision:"fe5c3016f3542d57143eccd80151def8"},{url:"/images/ig/other/Nagpatong-Rock.jpeg",revision:"579a79c9ae491e8febd11456f6169bff"},{url:"/images/ig/other/Rice Terraces.jpeg",revision:"6e07dcf2af148db11256035a52b25d3b"},{url:"/images/ig/other/Tangadan Falls.jpeg",revision:"dd2aea70be7692b675e41083f82bca98"},{url:"/images/logo.png",revision:"2ec23c972de5eceaf24eb8850573daf7"},{url:"/images/photography/1.jpg",revision:"14cce3d91a763ce53879aa106cc02488"},{url:"/images/photography/2.jpeg",revision:"048cc72d350791c7f55a711d65b23101"},{url:"/images/photography/3.jpg",revision:"23f2018933e56bdf6845c40fc5261c64"},{url:"/images/photography/4.jpg",revision:"8fd7530484b80dd939373d776faacaf2"},{url:"/images/roy-anonuevo-2.jpeg",revision:"a4309a852fc53b56927f721d6ec831f1"},{url:"/images/roy-anonuevo-at-mt-batualo-summit.jpg",revision:"e3ae034c8bc402dd2aa5098bc7055476"},{url:"/images/roy-anonuevo-at-mt-daraitan-summit.jpg",revision:"150c3600c96ac110b95c70af8643a3a8"},{url:"/images/roy-anonuevo-og-image.jpg",revision:"be7d3fedaf2467efee6c9402f1942d40"},{url:"/images/roy-anonuevo.png",revision:"850f71b18f3c27c44456f752db2ae322"},{url:"/manifest.json",revision:"9917da3095ba1bc2bfd38239225d0a69"},{url:"/my-sw.js",revision:"a9f7a56a8c2d8c245e6b19d21a8a90fa"},{url:"/psd/logo.psd",revision:"f314eec9c2e239ee23aee1498020ed21"},{url:"/psd/og image.psd",revision:"db1226bd246ebb2feecfaf8599094c60"},{url:"/videos/nagpatong-rock.jpg",revision:"1e9be8067340678caa052db1751b3b8a"},{url:"/videos/nagpatong-rock.mp4",revision:"6b6142cfa475fc44a5b1f9a5240e2a90"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
