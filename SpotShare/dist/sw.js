if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const t=e=>s(e,o),l={module:{uri:o},exports:c,require:t};i[o]=Promise.all(r.map((e=>l[e]||t(e)))).then((e=>(n(...e),c)))}}define(["./workbox-3494f737"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-6c91b591.css",revision:null},{url:"assets/index-ae090bb1.js",revision:null},{url:"index.html",revision:"3906c807c79e66b9947e377da3ee707f"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"service-worker.js",revision:"ef124adb19194a3e9aaca29724b9554a"},{url:"img/icons/android-chrome-192x192.png",revision:"3f5371f370128ace29512be1c7238240"},{url:"img/icons/android-chrome-512x512.png",revision:"3f5371f370128ace29512be1c7238240"},{url:"manifest.webmanifest",revision:"f634bda2b7ca7967517d8ccb35991d87"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));