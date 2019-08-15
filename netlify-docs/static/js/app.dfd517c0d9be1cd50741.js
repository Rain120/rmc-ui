!function(e){function t(t){for(var r,a,i=t[0],o=t[1],s=t[2],u=t[3]||[],l=0,c=[];l<i.length;l++)a=i[l],O[a]&&c.push(O[a][0]),O[a]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(D&&D(t),I.push.apply(I,u);c.length;)c.shift()();return P.push.apply(P,s||[]),n()}function n(){for(var e,t=0;t<P.length;t++){for(var n=P[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==O[i]&&(r=!1)}r&&(P.splice(t--,1),e=C(C.s=n[0]))}return 0===P.length&&(I.forEach(function(e){if(void 0===O[e]){O[e]=null;var t=document.createElement("link");t.crossOrigin="anonymous",C.nc&&t.setAttribute("nonce",C.nc),t.rel="prefetch",t.as="script",t.href=E(e),document.head.appendChild(t)}}),I.length=0),e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!q[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0===--y&&0===v&&R()}(e,t),r&&r(e,t)};var a,i=!0,o="dfd517c0d9be1cd50741",s=1e4,u={},l=[],c=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"===typeof e)t._selfAccepted=e;else if("object"===typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"===typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:V,apply:j,status:function(e){if(!e)return m;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:u[e]};return a=void 0,t}var p=[],m="idle";function h(e){m=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var f,g,b,y=0,v=0,x={},w={},q={};function k(e){return+e+""===e?+e:e}function V(e){if("idle"!==m)throw new Error("check() is only allowed in idle status");return i=e,h("check"),(t=s,t=t||1e4,new Promise(function(e,n){if("undefined"===typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=C.p+""+o+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(i){return n(i)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(i){return void n(i)}e(t)}}})).then(function(e){if(!e)return h("idle"),null;w={},x={},q=e.c,b=e.h,h("prepare");var t=new Promise(function(e,t){f={resolve:e,reject:t}});for(var n in g={},O)S(n);return"prepare"===m&&0===v&&0===y&&R(),t});var t}function S(e){q[e]?(w[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=C.p+""+e+"."+o+".hot-update.js",t.crossOrigin="anonymous",document.head.appendChild(t)}(e)):x[e]=!0}function R(){h("ready");var e=f;if(f=null,e)if(i)Promise.resolve().then(function(){return j(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(k(n));e.resolve(t)}}function j(t){if("ready"!==m)throw new Error("apply() is only allowed in ready status");var n,r,a,i,s;function c(e){for(var t=[e],n={},r=t.map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),o=a.id,s=a.chain;if((i=A[o])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:o};if(i.hot._main)return{type:"unaccepted",chain:s,moduleId:o};for(var u=0;u<i.parents.length;u++){var l=i.parents[u],c=A[l];if(c){if(c.hot._declinedDependencies[o])return{type:"declined",chain:s.concat([l]),moduleId:o,parentId:l};-1===t.indexOf(l)&&(c.hot._acceptedDependencies[o]?(n[l]||(n[l]=[]),d(n[l],[o])):(delete n[l],t.push(l),r.push({chain:s.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},f=[],y={},v=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var x in g)if(Object.prototype.hasOwnProperty.call(g,x)){var w;s=k(x);var V=!1,S=!1,R=!1,j="";switch((w=g[x]?c(s):{type:"disposed",moduleId:x}).chain&&(j="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(V=new Error("Aborted because of self decline: "+w.moduleId+j));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(V=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+j));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(V=new Error("Aborted because "+s+" is not accepted"+j));break;case"accepted":t.onAccepted&&t.onAccepted(w),S=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),R=!0;break;default:throw new Error("Unexception type "+w.type)}if(V)return h("abort"),Promise.reject(V);if(S)for(s in y[s]=g[s],d(f,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,s)&&(p[s]||(p[s]=[]),d(p[s],w.outdatedDependencies[s]));R&&(d(f,[w.moduleId]),y[s]=v)}var P,I=[];for(r=0;r<f.length;r++)s=f[r],A[s]&&A[s].hot._selfAccepted&&y[s]!==v&&I.push({module:s,errorHandler:A[s].hot._selfAccepted});h("dispose"),Object.keys(q).forEach(function(e){!1===q[e]&&function(e){delete O[e]}(e)});for(var E,_,T=f.slice();T.length>0;)if(s=T.pop(),i=A[s]){var M={},D=i.hot._disposeHandlers;for(a=0;a<D.length;a++)(n=D[a])(M);for(u[s]=M,i.hot.active=!1,delete A[s],delete p[s],a=0;a<i.children.length;a++){var H=A[i.children[a]];H&&((P=H.parents.indexOf(s))>=0&&H.parents.splice(P,1))}}for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(i=A[s]))for(_=p[s],a=0;a<_.length;a++)E=_[a],(P=i.children.indexOf(E))>=0&&i.children.splice(P,1);for(s in h("apply"),o=b,y)Object.prototype.hasOwnProperty.call(y,s)&&(e[s]=y[s]);var N=null;for(s in p)if(Object.prototype.hasOwnProperty.call(p,s)&&(i=A[s])){_=p[s];var z=[];for(r=0;r<_.length;r++)if(E=_[r],n=i.hot._acceptedDependencies[E]){if(-1!==z.indexOf(n))continue;z.push(n)}for(r=0;r<z.length;r++){n=z[r];try{n(_)}catch(F){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:s,dependencyId:_[r],error:F}),t.ignoreErrored||N||(N=F)}}}for(r=0;r<I.length;r++){var L=I[r];s=L.module,l=[s];try{C(s)}catch(F){if("function"===typeof L.errorHandler)try{L.errorHandler(F)}catch(U){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:U,originalError:F}),t.ignoreErrored||N||(N=U),N||(N=F)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:s,error:F}),t.ignoreErrored||N||(N=F)}}return N?(h("fail"),Promise.reject(N)):(h("idle"),new Promise(function(e){e(f)}))}var A={},O={1:0},P=[],I=[];function E(e){return C.p+"static/js/"+({2:"developer-error-manual",3:"docs-changelog",4:"docs-components-alert",5:"docs-components-flex",6:"docs-components-icon",7:"docs-components-white-space",8:"docs-components-wing-blank",9:"docs-introduction",10:"docs-quick-start"}[e]||e)+"."+{2:"11725343",3:"6bd6a009",4:"86e4f5d6",5:"310266dd",6:"752598e4",7:"3ec4324f",8:"c011d337",9:"c6137b37",10:"63439df8"}[e]+".js"}function C(t){if(A[t])return A[t].exports;var n=A[t]={i:t,l:!1,exports:{},hot:d(t),parents:(c=l,l=[],c),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=A[e];if(!t)return C;var n=function(n){return t.hot.active?(A[n]?-1===A[n].parents.indexOf(e)&&A[n].parents.push(e):(l=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),l=[]),C(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return C[e]},set:function(t){C[e]=t}}};for(var i in C)Object.prototype.hasOwnProperty.call(C,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(n,i,r(i));return n.e=function(e){return"ready"===m&&h("prepare"),v++,C.e(e).then(t,function(e){throw t(),e});function t(){v--,"prepare"===m&&(x[e]||S(e),0===v&&0===y&&R())}},n.t=function(e,t){return 1&t&&(e=n(e)),C.t(e,-2&t)},n}(t)),n.l=!0,n.exports}C.e=function(e){var t=[],n=O[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=O[e]=[t,r]});t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,C.nc&&i.setAttribute("nonce",C.nc),i.src=E(e),0!==i.src.indexOf(window.location.origin+"/")&&(i.crossOrigin="anonymous");var o=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=O[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",o.name="ChunkLoadError",o.type=r,o.request=a,n[1](o)}O[e]=void 0}};var s=setTimeout(function(){a({type:"timeout",target:i})},12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},C.m=e,C.c=A,C.d=function(e,t,n){C.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},C.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},C.t=function(e,t){if(1&t&&(e=C(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(C.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)C.d(n,r,function(t){return e[t]}.bind(null,r));return n},C.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return C.d(t,"a",t),t},C.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},C.p="/",C.oe=function(e){throw console.error(e),e},C.h=function(){return o};var _=window.webpackJsonp=window.webpackJsonp||[],T=_.push.bind(_);_.push=t,_=_.slice();for(var M=0;M<_.length;M++)t(_[M]);var D=T,H=(P.push([0,0]),n());t([[],{},0,[0,2,3,4,5,6,7,8,9,10]])}({"./.docz/app/db.json":function(e){e.exports=JSON.parse('{"config":{"title":"zc/rmc-ui","description":"@react mobile components ui design for study","menu":["Introduction","Quick Start","Changelog",{"name":"Components"}],"version":"0.0.2","repository":"https://github.com/Rain120/rmc-ui","native":false,"codeSandbox":false,"themeConfig":{"showPlaygroundEditor":true,"codemirrorTheme":"material"},"separator":"-","hashRouter":true,"dest":"netlify-docs","htmlContext":{"head":{"links":[{"rel":"stylesheet","href":"https://codemirror.net/theme/material.css"}]}},"typescript":true,"propsParser":true,"notUseSpecifiers":true,"plugins":[]},"props":[{"key":"components/Alert/index.tsx","value":[{"description":"","displayName":"Alert","methods":[],"props":{"type":{"defaultValue":null,"description":"","name":"type","required":false,"type":{"name":"\\"success\\" | \\"error\\" | \\"warn\\" | \\"info\\" | undefined"}},"message":{"defaultValue":null,"description":"","name":"message","required":true,"type":{"name":"ReactNode"}},"className":{"defaultValue":null,"description":"","name":"className","required":false,"type":{"name":"string | undefined"}},"style":{"defaultValue":null,"description":"","name":"style","required":false,"type":{"name":"CSSProperties | undefined"}},"banner":{"defaultValue":null,"description":"","name":"banner","required":false,"type":{"name":"boolean | undefined"}}}}]},{"key":"components/_util/setPrefix.ts","value":[{"description":"","displayName":"setPrefix","methods":[],"props":{"toString":{"defaultValue":{},"description":"Returns a string representation of a string.","name":"toString","required":true,"type":{"name":"() => string"}},"charAt":{"defaultValue":null,"description":"Returns the character at the specified index.\\n@param pos The zero-based index of the desired character.","name":"charAt","required":true,"type":{"name":"(pos: number) => string"}},"charCodeAt":{"defaultValue":null,"description":"Returns the Unicode value of the character at the specified location.\\n@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.","name":"charCodeAt","required":true,"type":{"name":"(index: number) => number"}},"concat":{"defaultValue":null,"description":"Returns a string that contains the concatenation of two or more strings.\\n@param strings The strings to append to the end of the string.","name":"concat","required":true,"type":{"name":"(...strings: string[]) => string"}},"indexOf":{"defaultValue":null,"description":"Returns the position of the first occurrence of a substring.\\n@param searchString The substring to search for in the string\\n@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.","name":"indexOf","required":true,"type":{"name":"(searchString: string, position?: number | undefined) => number"}},"lastIndexOf":{"defaultValue":null,"description":"Returns the last occurrence of a substring in the string.\\n@param searchString The substring to search for.\\n@param position The index at which to begin searching. If omitted, the search begins at the end of the string.","name":"lastIndexOf","required":true,"type":{"name":"(searchString: string, position?: number | undefined) => number"}},"localeCompare":{"defaultValue":null,"description":"Determines whether two strings are equivalent in the current locale.\\nDetermines whether two strings are equivalent in the current or specified locale.\\n@param that String to compare to target string\\n@param that String to compare to target string\\n@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.\\n@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.","name":"localeCompare","required":true,"type":{"name":"{ (that: string): number; (that: string, locales?: string | string[] | undefined, options?: CollatorOptions | undefined): number; }"}},"match":{"defaultValue":null,"description":"Matches a string with a regular expression, and returns an array containing the results of that search.\\nMatches a string an object that supports being matched against, and returns an array containing the results of that search.\\n@param regexp A variable name or string literal containing the regular expression pattern and flags.\\n@param matcher An object that supports being matched against.","name":"match","required":true,"type":{"name":"{ (regexp: string | RegExp): RegExpMatchArray | null; (matcher: { [Symbol.match](string: string): RegExpMatchArray | null; }): RegExpMatchArray | null; }"}},"replace":{"defaultValue":null,"description":"Replaces text in a string, using a regular expression or search string.\\nReplaces text in a string, using a regular expression or search string.\\nReplaces text in a string, using an object that supports replacement within a string.\\nReplaces text in a string, using an object that supports replacement within a string.\\n@param searchValue A string to search for.\\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\\n@param searchValue A string to search for.\\n@param replacer A function that returns the replacement text.\\n@param searchValue A object can search for and replace matches within a string.\\n@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.\\n@param searchValue A object can search for and replace matches within a string.\\n@param replacer A function that returns the replacement text.","name":"replace","required":true,"type":{"name":"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { [Symbol.replace](string: string, replaceValue: string): string; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substri..."}},"search":{"defaultValue":null,"description":"Finds the first substring match in a regular expression search.\\nFinds the first substring match in a regular expression search.\\n@param regexp The regular expression pattern and applicable flags.\\n@param searcher An object which supports searching within a string.","name":"search","required":true,"type":{"name":"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},"slice":{"defaultValue":null,"description":"Returns a section of a string.\\n@param start The index to the beginning of the specified portion of stringObj.\\n@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.\\nIf this value is not specified, the substring continues to the end of stringObj.","name":"slice","required":true,"type":{"name":"(start?: number | undefined, end?: number | undefined) => string"}},"split":{"defaultValue":null,"description":"Split a string into substrings using the specified separator and return them as an array.\\nSplit a string into substrings using the specified separator and return them as an array.\\n@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.\\n@param limit A value used to limit the number of elements returned in the array.\\n@param splitter An object that can split a string.\\n@param limit A value used to limit the number of elements returned in the array.","name":"split","required":true,"type":{"name":"{ (separator: string | RegExp, limit?: number | undefined): string[]; (splitter: { [Symbol.split](string: string, limit?: number | undefined): string[]; }, limit?: number | undefined): string[]; }"}},"substring":{"defaultValue":null,"description":"Returns the substring at the specified location within a String object.\\n@param start The zero-based index number indicating the beginning of the substring.\\n@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.\\nIf end is omitted, the characters from start through the end of the original string are returned.","name":"substring","required":true,"type":{"name":"(start: number, end?: number | undefined) => string"}},"toLowerCase":{"defaultValue":null,"description":"Converts all the alphabetic characters in a string to lowercase.","name":"toLowerCase","required":true,"type":{"name":"() => string"}},"toLocaleLowerCase":{"defaultValue":null,"description":"Converts all alphabetic characters to lowercase, taking into account the host environment\'s current locale.","name":"toLocaleLowerCase","required":true,"type":{"name":"() => string"}},"toUpperCase":{"defaultValue":null,"description":"Converts all the alphabetic characters in a string to uppercase.","name":"toUpperCase","required":true,"type":{"name":"() => string"}},"toLocaleUpperCase":{"defaultValue":null,"description":"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment\'s current locale.","name":"toLocaleUpperCase","required":true,"type":{"name":"() => string"}},"trim":{"defaultValue":null,"description":"Removes the leading and trailing white space and line terminator characters from a string.","name":"trim","required":true,"type":{"name":"() => string"}},"length":{"defaultValue":null,"description":"Returns the length of a String object.","name":"length","required":true,"type":{"name":"number"}},"substr":{"defaultValue":null,"description":"Gets a substring beginning at the specified location and having the specified length.\\n@param from The starting position of the desired substring. The index of the first character in the string is zero.\\n@param length The number of characters to include in the returned substring.","name":"substr","required":true,"type":{"name":"(from: number, length?: number | undefined) => string"}},"valueOf":{"defaultValue":{},"description":"Returns the primitive value of the specified object.","name":"valueOf","required":true,"type":{"name":"() => string"}},"codePointAt":{"defaultValue":null,"description":"Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point\\nvalue of the UTF-16 encoded code point starting at the string element at position pos in\\nthe String resulting from converting this object to a String.\\nIf there is no element at that position, the result is undefined.\\nIf a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.","name":"codePointAt","required":true,"type":{"name":"(pos: number) => number | undefined"}},"includes":{"defaultValue":null,"description":"Returns true if searchString appears as a substring of the result of converting this\\nobject to a String, at one or more positions that are\\ngreater than or equal to position; otherwise, returns false.\\n@param searchString search string\\n@param position If position is undefined, 0 is assumed, so as to search all of the String.","name":"includes","required":true,"type":{"name":"(searchString: string, position?: number | undefined) => boolean"}},"endsWith":{"defaultValue":null,"description":"Returns true if the sequence of elements of searchString converted to a String is the\\nsame as the corresponding elements of this object (converted to a String) starting at\\nendPosition \u2013 length(this). Otherwise returns false.","name":"endsWith","required":true,"type":{"name":"(searchString: string, endPosition?: number | undefined) => boolean"}},"normalize":{"defaultValue":null,"description":"Returns the String value result of normalizing the string into the normalization form\\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\\nReturns the String value result of normalizing the string into the normalization form\\nnamed by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.\\n@param form Applicable values: \\"NFC\\", \\"NFD\\", \\"NFKC\\", or \\"NFKD\\", If not specified default\\nis \\"NFC\\"\\n@param form Applicable values: \\"NFC\\", \\"NFD\\", \\"NFKC\\", or \\"NFKD\\", If not specified default\\nis \\"NFC\\"","name":"normalize","required":true,"type":{"name":"{ (form: \\"NFC\\" | \\"NFD\\" | \\"NFKC\\" | \\"NFKD\\"): string; (form?: string | undefined): string; }"}},"repeat":{"defaultValue":null,"description":"Returns a String value that is made from count copies appended together. If count is 0,\\nthe empty string is returned.\\n@param count number of copies to append","name":"repeat","required":true,"type":{"name":"(count: number) => string"}},"startsWith":{"defaultValue":null,"description":"Returns true if the sequence of elements of searchString converted to a String is the\\nsame as the corresponding elements of this object (converted to a String) starting at\\nposition. Otherwise returns false.","name":"startsWith","required":true,"type":{"name":"(searchString: string, position?: number | undefined) => boolean"}},"anchor":{"defaultValue":null,"description":"Returns an <a> HTML anchor element and sets the name attribute to the text value\\n@param name","name":"anchor","required":true,"type":{"name":"(name: string) => string"}},"big":{"defaultValue":null,"description":"Returns a <big> HTML element","name":"big","required":true,"type":{"name":"() => string"}},"blink":{"defaultValue":null,"description":"Returns a <blink> HTML element","name":"blink","required":true,"type":{"name":"() => string"}},"bold":{"defaultValue":null,"description":"Returns a <b> HTML element","name":"bold","required":true,"type":{"name":"() => string"}},"fixed":{"defaultValue":null,"description":"Returns a <tt> HTML element","name":"fixed","required":true,"type":{"name":"() => string"}},"fontcolor":{"defaultValue":null,"description":"Returns a <font> HTML element and sets the color attribute value","name":"fontcolor","required":true,"type":{"name":"(color: string) => string"}},"fontsize":{"defaultValue":null,"description":"Returns a <font> HTML element and sets the size attribute value\\nReturns a <font> HTML element and sets the size attribute value","name":"fontsize","required":true,"type":{"name":"{ (size: number): string; (size: string): string; }"}},"italics":{"defaultValue":null,"description":"Returns an <i> HTML element","name":"italics","required":true,"type":{"name":"() => string"}},"link":{"defaultValue":null,"description":"Returns an <a> HTML element and sets the href attribute value","name":"link","required":true,"type":{"name":"(url: string) => string"}},"small":{"defaultValue":null,"description":"Returns a <small> HTML element","name":"small","required":true,"type":{"name":"() => string"}},"strike":{"defaultValue":null,"description":"Returns a <strike> HTML element","name":"strike","required":true,"type":{"name":"() => string"}},"sub":{"defaultValue":null,"description":"Returns a <sub> HTML element","name":"sub","required":true,"type":{"name":"() => string"}},"sup":{"defaultValue":null,"description":"Returns a <sup> HTML element","name":"sup","required":true,"type":{"name":"() => string"}},"__@iterator":{"defaultValue":null,"description":"Iterator","name":"__@iterator","required":true,"type":{"name":"() => IterableIterator<string>"}}}}]},{"key":"components/index.tsx","value":[{"description":"","displayName":"components","methods":[],"props":{"size":{"defaultValue":null,"description":"","name":"size","required":true,"type":{"name":"\\"sm\\" | \\"md\\" | \\"lg\\""}},"id":{"defaultValue":null,"description":"","name":"id","required":false,"type":{"name":"string | undefined"}},"className":{"defaultValue":null,"description":"","name":"className","required":false,"type":{"name":"string | undefined"}},"style":{"defaultValue":null,"description":"","name":"style","required":false,"type":{"name":"CSSProperties | undefined"}}}}]}],"entries":[{"key":"developerErrorManual.md","value":{"id":"bc95887ae840c8acbbb4cbaf8712f4c2","filepath":"developerErrorManual.md","link":"https://github.com/Rain120/rmc-ui/edit/master/developerErrorManual.md","slug":"developer-error-manual","route":"/developer-error-manual","name":"Developer error manual","menu":"","headings":[{"slug":"\u5f00\u53d1\u8005\u9519\u8befqa\u624b\u518c","depth":1,"value":"\u5f00\u53d1\u8005\u9519\u8befQA\u624b\u518c"},{"slug":"\u642d\u5efa\u51fa\u73b0\u95ee\u9898\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5","depth":4,"value":"\u642d\u5efa\u51fa\u73b0\u95ee\u9898\u53ca\u5176\u89e3\u51b3\u65b9\u6cd5"}]}},{"key":"docs/changelog.mdx","value":{"name":"Changelog","route":"/changelog","id":"930fff76ecc60a15c61587b3693c8fc1","filepath":"docs/changelog.mdx","link":"https://github.com/Rain120/rmc-ui/edit/master/docs/changelog.mdx","slug":"docs-changelog","menu":"","headings":[{"slug":"change-log","depth":1,"value":"Change Log"}]}},{"key":"docs/introduction.mdx","value":{"name":"Introduction","route":"/introduction","id":"dcb8d76187bb876677644bdd455b2636","filepath":"docs/introduction.mdx","link":"https://github.com/Rain120/rmc-ui/edit/master/docs/introduction.mdx","slug":"docs-introduction","menu":"","headings":[{"slug":"introduction","depth":1,"value":"Introduction"}]}},{"key":"docs/quick-start.mdx","value":{"name":"Quick Start","route":"/","id":"7586325c237102c01eddb44ffdebaa83","filepath":"docs/quick-start.mdx","link":"https://github.com/Rain120/rmc-ui/edit/master/docs/quick-start.mdx","slug":"docs-quick-start","menu":"","headings":[{"slug":"quick-start","depth":1,"value":"Quick Start"}]}},{"key":"docs/components/flex.mdx","value":{"name":"Flex","menu":"Components","route":"/components/Flex","id":"835d1b1e89c636c27279f060bfb5e221","filepath":"docs/components/flex.mdx","link":"https://github.com/Rain120/rmc-ui/edit/master/docs/components/flex.mdx","slug":"docs-components-flex","headings":[{"slug":"flex","depth":1,"value":"Flex"},{"slug":"\u57fa\u672c\u7528\u6cd5","depth":3,"value":"\u57fa\u672c\u7528\u6cd5"},{"slug":"api","depth":3,"value":"API"}]}},{"key":"docs/components/alert.mdx","value":{"name":"Alert","menu":"Components","route":"/components/Alert","id":"56c20352a248ba945e9a8a163e7f0326","filepath":"docs/components/alert.mdx","link":"https://github.com/Rain120/rmc-ui/edit/master/docs/components/alert.mdx","slug":"docs-components-alert","headings":[{"slug":"alert","depth":1,"value":"Alert"},{"slug":"\u57fa\u672c\u7528\u6cd5","depth":3,"value":"\u57fa\u672c\u7528\u6cd5"},{"slug":"api","depth":3,"value":"API"}]}},{"key":"docs/components/icon.mdx","value":{"name":"Icon","menu":"Components","route":"/components/Icon","id":"0f33ed399cc5fa99c02ff375877cba82","filepath":"docs/components/icon.mdx","link":"https://github.com/Rain120/rmc-ui/edit/master/docs/components/icon.mdx","slug":"docs-components-icon","headings":[{"slug":"icon","depth":1,"value":"Icon"},{"slug":"\u57fa\u672c\u7528\u6cd5","depth":3,"value":"\u57fa\u672c\u7528\u6cd5"},{"slug":"api","depth":3,"value":"API"}]}},{"key":"docs/components/white-space.mdx","value":{"name":"WhiteSpace","menu":"Components","route":"/components/WhiteSpace","id":"730b51f52c7490e10edd2b287a46bc7b","filepath":"docs/components/white-space.mdx","link":"https://github.com/Rain120/rmc-ui/edit/master/docs/components/white-space.mdx","slug":"docs-components-white-space","headings":[{"slug":"whitespace","depth":1,"value":"WhiteSpace"},{"slug":"\u57fa\u672c\u7528\u6cd5","depth":3,"value":"\u57fa\u672c\u7528\u6cd5"},{"slug":"api","depth":3,"value":"API"}]}},{"key":"docs/components/wing-blank.mdx","value":{"name":"WingBlank","menu":"Components","route":"/components/WingBlank","id":"468c4663d8b72774217e6467b472003c","filepath":"docs/components/wing-blank.mdx","link":"https://github.com/Rain120/rmc-ui/edit/master/docs/components/wing-blank.mdx","slug":"docs-components-wing-blank","headings":[{"slug":"wingspace","depth":1,"value":"WingSpace"},{"slug":"\u57fa\u672c\u7528\u6cd5","depth":3,"value":"\u57fa\u672c\u7528\u6cd5"},{"slug":"api","depth":3,"value":"API"}]}}]}')},"./.docz/app/index.jsx":function(e,t,n){"use strict";n.r(t);var r=n("./node_modules/react/index.js"),a=n.n(r),i=n("./node_modules/react-dom/index.js"),o=n.n(i),s=n("./node_modules/docz/dist/index.esm.js"),u=n("./node_modules/docz-theme-default/dist/index.esm.js"),l={"developerErrorManual.md":function(){return Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"./developerErrorManual.md"))},"docs/changelog.mdx":function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"./docs/changelog.mdx"))},"docs/introduction.mdx":function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"./docs/introduction.mdx"))},"docs/quick-start.mdx":function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"./docs/quick-start.mdx"))},"docs/components/flex.mdx":function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"./docs/components/flex.mdx"))},"docs/components/alert.mdx":function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"./docs/components/alert.mdx"))},"docs/components/icon.mdx":function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"./docs/components/icon.mdx"))},"docs/components/white-space.mdx":function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"./docs/components/white-space.mdx"))},"docs/components/wing-blank.mdx":function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"./docs/components/wing-blank.mdx"))}},c=n("./.docz/app/db.json"),d=function(){return a.a.createElement(u.a,{linkComponent:s.b,db:c},a.a.createElement(s.e,{imports:l}))},p=[],m=[],h=function(){return p.forEach(function(e){return e&&e()})},f=function(){return m.forEach(function(e){return e&&e()})},g=document.querySelector("#root");!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d;h(),o.a.render(a.a.createElement(e,null),g,f)}(d)},0:function(e,t,n){e.exports=n("./.docz/app/index.jsx")}});
//# sourceMappingURL=app.dfd517c0d9be1cd50741.js.map