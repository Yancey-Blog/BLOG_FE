"use strict";var precacheConfig=[["/index.html","01795ac97c0023b29966f2c6c1a205c5"],["/static/css/main.54650469.css","339f2495bc0334a7427f3b4474e9f970"],["/static/js/main.fcea415f.js","531374fef5264408dc50191e80c0a750"],["/static/media/Brandon-Light.4147f3fd.otf","4147f3fd5f2e9b5eda890a67f4cd3f4f"],["/static/media/MerriweatherSans-Regular.bf49700d.ttf","bf49700d343b490c1885f6d22b1480c3"],["/static/media/Operator-Mono-Book-Regular.d49e36f0.otf","d49e36f086d6ae880be8ada17f273882"],["/static/media/Ubuntu-Bold.b5d4adff.ttf","b5d4adffb6b244532a12c78f4124af70"],["/static/media/Ubuntu-Regular.6bb9beb4.ttf","6bb9beb4ae22b811bfd5369d517e2f7c"],["/static/media/cursor.74bea72f.ico","74bea72fd9e9d93fc39d6a112d93593b"],["/static/media/miku.6feda5bc.webp","6feda5bcd9ad63ebe440e3ddb0048307"],["/static/media/native-mac.5d7e2168.png","5d7e2168705bb7e1a50bd3ffe960d386"],["/static/media/phone-android.853f5f9d.png","853f5f9d1b1012720db015478e945f5f"],["/static/media/phone-iphone.e17f3235.png","e17f3235af4bd965dc0685b91c05472d"],["/static/media/twitter-qr-code.ccb647c8.jpg","ccb647c8f33aea77d43dd70979d41ac5"],["/static/media/wechat-qr-code.d3cfcb97.jpg","d3cfcb97a237fbc14166b6511d1afb24"],["/static/media/yancey-official-blog-logo.48b2cc1f.png","48b2cc1f07f8301ffdd0352e359a6fd5"],["/static/media/yancey-official-blog-svg-icons.34572a04.svg","34572a0464b3e013bb95c5b972867ff7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});