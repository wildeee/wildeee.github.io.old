"use strict";var precacheConfig=[["/index.html","6df1812f97b8e1da2dda95ee3c990d12"],["/static/css/main.5bfba953.css","b193547b7955cc685f8d5784fada1ea9"],["/static/js/main.ae004d13.js","00924287155cc67c123989db16eec910"],["/static/media/roboto-latin-100.987b8457.woff2","987b84570ea69ee660455b8d5e91f5f1"],["/static/media/roboto-latin-100.e9dbbe8a.woff","e9dbbe8a693dd275c16d32feb101f1c1"],["/static/media/roboto-latin-100italic.6232f43d.woff2","6232f43d15b0e7a0bf0fe82e295bdd06"],["/static/media/roboto-latin-100italic.d704bb3d.woff","d704bb3d579b7d5e40880c75705c8a71"],["/static/media/roboto-latin-300.55536c8e.woff2","55536c8e9e9a532651e3cf374f290ea3"],["/static/media/roboto-latin-300.a1471d1d.woff","a1471d1d6431c893582a5f6a250db3f9"],["/static/media/roboto-latin-300italic.210a7c78.woff","210a7c781f5a354a0e4985656ab456d9"],["/static/media/roboto-latin-300italic.d69924b9.woff2","d69924b98acd849cdeba9fbff3f88ea6"],["/static/media/roboto-latin-400.5d4aeb4e.woff2","5d4aeb4e5f5ef754e307d7ffaef688bd"],["/static/media/roboto-latin-400.bafb105b.woff","bafb105baeb22d965c70fe52ba6b49d9"],["/static/media/roboto-latin-400italic.9680d5a0.woff","9680d5a0c32d2fd084e07bbc4c8b2923"],["/static/media/roboto-latin-400italic.d8bcbe72.woff2","d8bcbe724fd6f4ba44d0ee6a2675890f"],["/static/media/roboto-latin-500.28546717.woff2","285467176f7fe6bb6a9c6873b3dad2cc"],["/static/media/roboto-latin-500.de8b7431.woff","de8b7431b74642e830af4d4f4b513ec9"],["/static/media/roboto-latin-500italic.510dec37.woff2","510dec37fa69fba39593e01a469ee018"],["/static/media/roboto-latin-500italic.ffcc050b.woff","ffcc050b2d92d4b14a4fcb527ee0bcc8"],["/static/media/roboto-latin-700.037d8304.woff2","037d830416495def72b7881024c14b7b"],["/static/media/roboto-latin-700.cf6613d1.woff","cf6613d1adf490972c557a8e318e0868"],["/static/media/roboto-latin-700italic.010c1aee.woff2","010c1aeee3c6d1cbb1d5761d80353823"],["/static/media/roboto-latin-700italic.846d1890.woff","846d1890aee87fde5d8ced8eba360c3a"],["/static/media/roboto-latin-900.19b7a0ad.woff2","19b7a0adfdd4f808b53af7e2ce2ad4e5"],["/static/media/roboto-latin-900.8c2ade50.woff","8c2ade503b34e31430d6c98aa29a52a3"],["/static/media/roboto-latin-900italic.7b770d6c.woff2","7b770d6c53423deb1a8e49d3c9175184"],["/static/media/roboto-latin-900italic.bc833e72.woff","bc833e725c137257c2c42a789845d82f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),t=urlsToCacheKeys.has(n));var o="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(o,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function o(i,c){if(!n[i]){if(!t[i]){var s="function"==typeof require&&require;if(!c&&s)return s(i,!0);if(a)return a(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[i]={exports:{}};t[i][0].call(f.exports,function(e){var n=t[i][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||c.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||c.cache.name,caches.open(t)}function a(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var i,c=e("./options"),s=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||c.successResponses;return fetch(e.clone()).then(function(a){return"GET"===e.method&&n.test(a.status)&&o(t).then(function(n){n.put(e,a).then(function(){var o,a=t.cache||c.cache;(a.maxEntries||a.maxAgeSeconds)&&a.name&&(o=function(e,t,n){var o=e.url,a=n.maxAgeSeconds,i=n.maxEntries,c=n.name,u=Date.now();return r("Updating LRU order for "+o+". Max entries is "+i+", max age is "+a),s.getDb(c).then(function(e){return s.setTimestampForUrl(e,o,u)}).then(function(e){return s.expireEntries(e,i,a,u)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}.bind(null,e,n,a),i=i?i.then(o):o())})}),a.clone()})},openCache:o,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return o(t).then(function(t){return t.add(e)})},uncache:function(e,t){return o(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||a(e),c.preCacheItems=c.preCacheItems.concat(e)},validatePrecacheInput:a,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",o=1,a="store",i="url",c="timestamp",s={};t.exports={getDb:function(e){return e in s||(s[e]=(t=e,new Promise(function(e,n){var s=indexedDB.open(r+t,o);s.onupgradeneeded=function(){s.result.createObjectStore(a,{keyPath:i}).createIndex(c,c,{unique:!1})},s.onsuccess=function(){e(s.result)},s.onerror=function(){n(s.error)}}))),s[e];var t},setTimestampForUrl:function(e,t,n){return new Promise(function(r,o){var i=e.transaction(a,"readwrite");i.objectStore(a).put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})},expireEntries:function(e,t,n,r){return(o=e,s=n,u=r,s?new Promise(function(e,t){var n=1e3*s,r=[],f=o.transaction(a,"readwrite"),h=f.objectStore(a);h.index(c).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&u-n>t.value[c]){var o=t.value[i];r.push(o),h.delete(o),t.continue()}},f.oncomplete=function(){e(r)},f.onabort=t}):Promise.resolve([])).then(function(n){return(r=e,o=t,o?new Promise(function(e,t){var n=[],s=r.transaction(a,"readwrite"),u=s.objectStore(a),f=u.index(c),h=f.count();f.count().onsuccess=function(){var e=h.result;e>o&&(f.openCursor().onsuccess=function(t){var r=t.target.result;if(r){var a=r.value[i];n.push(a),u.delete(a),e-n.length>o&&r.continue()}})},s.oncomplete=function(){e(n)},s.onabort=t}):Promise.resolve([])).then(function(e){return n.concat(e)});var r,o});var o,s,u}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),a=e("./router"),i=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=i.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,i.cache.name))},installListener:function(e){var t=i.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(e){return Promise.all(i.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(t){return o.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,o=e("path-to-regexp"),a=function(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=o(t,this.keys)),this.method=e,this.options=a,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),o=e("./helpers"),a=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},i=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){i.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),i.prototype.add=function(e,t,n,a){var i;a=a||{},t instanceof RegExp?i=RegExp:i=(i=a.origin||self.location.origin)instanceof RegExp?i.source:i.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var c=new r(e,t,n,a);this.routes.has(i)||this.routes.set(i,new Map);var s=this.routes.get(i);s.has(e)||s.set(e,new Map);var u=s.get(e),f=c.regexp||c.fullUrlRegExp;u.has(f.source)&&o.debug('"'+t+'" resolves to same regex as existing route.'),u.set(f.source,c)},i.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,a(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},i.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var c=a(i,n);if(c.length>0)return c[0].makeHandler(n)}}return null},i.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new i},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){var a=n.cache||r.cache,i=Date.now();return o.isResponseFresh(t,a.maxAgeSeconds,i)?t:o.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,a=Date.now();if(o.isResponseFresh(e,t.maxAgeSeconds,a))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),o=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(a,i){var c=!1,s=[],u=function(e){s.push(e.toString()),c?i(new Error('Both cache and network failed: "'+s.join('", "')+'"')):c=!0},f=function(e){e instanceof Response?a(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),o(e,t,n).then(f,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){var a=(n=n||{}).successResponses||r.successResponses,i=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return o.debug("Strategy: network first ["+e.url+"]",n),o.openCache(n).then(function(t){var c,s,u=[];if(i){var f=new Promise(function(a){c=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,i=Date.now(),c=t.maxAgeSeconds;o.isResponseFresh(e,c,i)&&a(e)})},1e3*i)});u.push(f)}var h=o.fetchAndCache(e,n).then(function(e){if(c&&clearTimeout(c),a.test(e.status))return e;throw o.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return o.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return u.push(h),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),a=e("./helpers"),i=e("./strategies"),c=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",c.installListener),self.addEventListener("activate",c.activateListener),self.addEventListener("fetch",c.fetchListener),t.exports={networkOnly:i.networkOnly,networkFirst:i.networkFirst,cacheOnly:i.cacheOnly,cacheFirst:i.cacheFirst,fastest:i.fastest,router:o,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,a=0,c="",s=t&&t.delimiter||"/";null!=(n=l.exec(e));){var u=n[0],f=n[1],h=n.index;if(c+=e.slice(a,h),a=h+u.length,f)c+=f[1];else{var d=e[a],p=n[2],m=n[3],b=n[4],g=n[5],w=n[6],v=n[7];c&&(r.push(c),c="");var x=null!=p&&null!=d&&d!==p,y="+"===w||"*"===w,R="?"===w||"*"===w,E=n[2]||s,C=b||g;r.push({name:m||o++,prefix:p||"",delimiter:E,optional:R,repeat:y,partial:x,asterisk:!!v,pattern:C?(k=C,k.replace(/([=!:$\/()])/g,"\\$1")):v?".*":"[^"+i(E)+"]+?"})}}var k;return a<e.length&&(c+=e.substr(a)),c&&r.push(c),r}function o(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},c=(r||{}).pretty?o:encodeURIComponent,s=0;s<e.length;s++){var u=e[s];if("string"!=typeof u){var f,l=i[u.name];if(null==l){if(u.optional){u.partial&&(a+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(h(l)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(f=c(l[d]),!t[s].test(f))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(f)+"`");a+=(0===d?u.prefix:u.delimiter)+f}}else{if(f=u.asterisk?encodeURI(l).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):c(l),!t[s].test(f))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+f+'"');a+=u.prefix+f}}else a+=u}return a}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function c(e,t){return e.keys=t,e}function s(e){return e.sensitive?"":"i"}function u(e,t,n){h(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,a="",u=0;u<e.length;u++){var f=e[u];if("string"==typeof f)a+=i(f);else{var l=i(f.prefix),d="(?:"+f.pattern+")";t.push(f),f.repeat&&(d+="(?:"+l+d+")*"),a+=d=f.optional?f.partial?l+"("+d+")?":"(?:"+l+"("+d+"))?":l+"("+d+")"}}var p=i(n.delimiter||"/"),m=a.slice(-p.length)===p;return r||(a=(m?a.slice(0,-p.length):a)+"(?:"+p+"(?=$))?"),a+=o?"$":r&&m?"":"(?="+p+"|$)",c(new RegExp("^"+a,s(n)),t)}function f(e,t,n){return h(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return c(e,t)}(e,t):h(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(f(e[o],t,n).source);return c(new RegExp("(?:"+r.join("|")+")",s(n)),t)}(e,t,n):(o=t,u(r(e,a=n),o,a));var o,a}var h=e("isarray");t.exports=f,t.exports.parse=r,t.exports.compile=function(e,t){return a(r(e,t))},t.exports.tokensToFunction=a,t.exports.tokensToRegExp=u;var l=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/^https:\/\/graph\.facebook\.com/,toolbox.networkFirst,{}),toolbox.router.get(/^https:\/\/scontent\.xx\.fbcdn\.net/,toolbox.networkFirst,{});