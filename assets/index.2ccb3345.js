import{s as Se}from"./index.97b60394.js";var D={exports:{}},K=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}},Ce=K,w=Object.prototype.toString;function q(r){return Array.isArray(r)}function _(r){return typeof r=="undefined"}function xe(r){return r!==null&&!_(r)&&r.constructor!==null&&!_(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function G(r){return w.call(r)==="[object ArrayBuffer]"}function Oe(r){return w.call(r)==="[object FormData]"}function Re(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&G(r.buffer),e}function $e(r){return typeof r=="string"}function Ae(r){return typeof r=="number"}function Y(r){return r!==null&&typeof r=="object"}function $(r){if(w.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function Ne(r){return w.call(r)==="[object Date]"}function Pe(r){return w.call(r)==="[object File]"}function ge(r){return w.call(r)==="[object Blob]"}function Q(r){return w.call(r)==="[object Function]"}function Te(r){return Y(r)&&Q(r.pipe)}function Ue(r){return w.call(r)==="[object URLSearchParams]"}function je(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Be(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function k(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),q(r))for(var t=0,a=r.length;t<a;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function F(){var r={};function e(n,i){$(r[i])&&$(n)?r[i]=F(r[i],n):$(n)?r[i]=F({},n):q(n)?r[i]=n.slice():r[i]=n}for(var t=0,a=arguments.length;t<a;t++)k(arguments[t],e);return r}function Le(r,e,t){return k(e,function(n,i){t&&typeof n=="function"?r[i]=Ce(n,t):r[i]=n}),r}function De(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}var h={isArray:q,isArrayBuffer:G,isBuffer:xe,isFormData:Oe,isArrayBufferView:Re,isString:$e,isNumber:Ae,isObject:Y,isPlainObject:$,isUndefined:_,isDate:Ne,isFile:Pe,isBlob:ge,isFunction:Q,isStream:Te,isURLSearchParams:Ue,isStandardBrowserEnv:Be,forEach:k,merge:F,extend:Le,trim:je,stripBOM:De},C=h;function Z(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ee=function(e,t,a){if(!t)return e;var n;if(a)n=a(t);else if(C.isURLSearchParams(t))n=t.toString();else{var i=[];C.forEach(t,function(f,m){f===null||typeof f=="undefined"||(C.isArray(f)?m=m+"[]":f=[f],C.forEach(f,function(l){C.isDate(l)?l=l.toISOString():C.isObject(l)&&(l=JSON.stringify(l)),i.push(Z(m)+"="+Z(l))}))}),n=i.join("&")}if(n){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},qe=h;function A(){this.handlers=[]}A.prototype.use=function(e,t,a){return this.handlers.push({fulfilled:e,rejected:t,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};A.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};A.prototype.forEach=function(e){qe.forEach(this.handlers,function(a){a!==null&&e(a)})};var _e=A,ke=h,Fe=function(e,t){ke.forEach(e,function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])})},re=function(e,t,a,n,i){return e.config=t,a&&(e.code=a),e.request=n,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},He=re,te=function(e,t,a,n,i){var o=new Error(e);return He(o,t,a,n,i)},Ie=te,Me=function(e,t,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):t(Ie("Request failed with status code "+a.status,a.config,null,a.request,a))},N=h,Je=N.isStandardBrowserEnv()?function(){return{write:function(t,a,n,i,o,u){var f=[];f.push(t+"="+encodeURIComponent(a)),N.isNumber(n)&&f.push("expires="+new Date(n).toGMTString()),N.isString(i)&&f.push("path="+i),N.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(t){var a=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),ze=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Ve=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},We=ze,Xe=Ve,Ke=function(e,t){return e&&!We(t)?Xe(e,t):t},H=h,Ge=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Ye=function(e){var t={},a,n,i;return e&&H.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),a=H.trim(u.substr(0,i)).toLowerCase(),n=H.trim(u.substr(i+1)),a){if(t[a]&&Ge.indexOf(a)>=0)return;a==="set-cookie"?t[a]=(t[a]?t[a]:[]).concat([n]):t[a]=t[a]?t[a]+", "+n:n}}),t},ne=h,Qe=ne.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),a;function n(i){var o=i;return e&&(t.setAttribute("href",o),o=t.href),t.setAttribute("href",o),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return a=n(window.location.href),function(o){var u=ne.isString(o)?n(o):o;return u.protocol===a.protocol&&u.host===a.host}}():function(){return function(){return!0}}();function I(r){this.message=r}I.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};I.prototype.__CANCEL__=!0;var P=I,g=h,Ze=Me,er=Je,rr=ee,tr=Ke,nr=Ye,ar=Qe,M=te,sr=U,ir=P,ae=function(e){return new Promise(function(a,n){var i=e.data,o=e.headers,u=e.responseType,f;function m(){e.cancelToken&&e.cancelToken.unsubscribe(f),e.signal&&e.signal.removeEventListener("abort",f)}g.isFormData(i)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(l+":"+y)}var d=tr(e.baseURL,e.url);s.open(e.method.toUpperCase(),rr(d,e.params,e.paramsSerializer),!0),s.timeout=e.timeout;function W(){if(!!s){var v="getAllResponseHeaders"in s?nr(s.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?s.responseText:s.response,E={data:S,status:s.status,statusText:s.statusText,headers:v,config:e,request:s};Ze(function(L){a(L),m()},function(L){n(L),m()},E),s=null}}if("onloadend"in s?s.onloadend=W:s.onreadystatechange=function(){!s||s.readyState!==4||s.status===0&&!(s.responseURL&&s.responseURL.indexOf("file:")===0)||setTimeout(W)},s.onabort=function(){!s||(n(M("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){n(M("Network Error",e,null,s)),s=null},s.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",E=e.transitional||sr.transitional;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),n(M(S,e,E.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",s)),s=null},g.isStandardBrowserEnv()){var X=(e.withCredentials||ar(d))&&e.xsrfCookieName?er.read(e.xsrfCookieName):void 0;X&&(o[e.xsrfHeaderName]=X)}"setRequestHeader"in s&&g.forEach(o,function(S,E){typeof i=="undefined"&&E.toLowerCase()==="content-type"?delete o[E]:s.setRequestHeader(E,S)}),g.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),u&&u!=="json"&&(s.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&s.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(f=function(v){!s||(n(!v||v&&v.type?new ir("canceled"):v),s.abort(),s=null)},e.cancelToken&&e.cancelToken.subscribe(f),e.signal&&(e.signal.aborted?f():e.signal.addEventListener("abort",f))),i||(i=null),s.send(i)})},c=h,se=Fe,or=re,ur={"Content-Type":"application/x-www-form-urlencoded"};function ie(r,e){!c.isUndefined(r)&&c.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function fr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=ae),r}function lr(r,e,t){if(c.isString(r))try{return(e||JSON.parse)(r),c.trim(r)}catch(a){if(a.name!=="SyntaxError")throw a}return(t||JSON.stringify)(r)}var T={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:fr(),transformRequest:[function(e,t){return se(t,"Accept"),se(t,"Content-Type"),c.isFormData(e)||c.isArrayBuffer(e)||c.isBuffer(e)||c.isStream(e)||c.isFile(e)||c.isBlob(e)?e:c.isArrayBufferView(e)?e.buffer:c.isURLSearchParams(e)?(ie(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):c.isObject(e)||t&&t["Content-Type"]==="application/json"?(ie(t,"application/json"),lr(e)):e}],transformResponse:[function(e){var t=this.transitional||T.transitional,a=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!a&&this.responseType==="json";if(i||n&&c.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(i)throw o.name==="SyntaxError"?or(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(e){T.headers[e]={}});c.forEach(["post","put","patch"],function(e){T.headers[e]=c.merge(ur)});var U=T,cr=h,dr=U,hr=function(e,t,a){var n=this||dr;return cr.forEach(a,function(o){e=o.call(n,e,t)}),e},oe=function(e){return!!(e&&e.__CANCEL__)},ue=h,J=hr,pr=oe,mr=U,vr=P;function z(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new vr("canceled")}var yr=function(e){z(e),e.headers=e.headers||{},e.data=J.call(e,e.data,e.headers,e.transformRequest),e.headers=ue.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ue.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||mr.adapter;return t(e).then(function(n){return z(e),n.data=J.call(e,n.data,n.headers,e.transformResponse),n},function(n){return pr(n)||(z(e),n&&n.response&&(n.response.data=J.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},p=h,fe=function(e,t){t=t||{};var a={};function n(s,l){return p.isPlainObject(s)&&p.isPlainObject(l)?p.merge(s,l):p.isPlainObject(l)?p.merge({},l):p.isArray(l)?l.slice():l}function i(s){if(p.isUndefined(t[s])){if(!p.isUndefined(e[s]))return n(void 0,e[s])}else return n(e[s],t[s])}function o(s){if(!p.isUndefined(t[s]))return n(void 0,t[s])}function u(s){if(p.isUndefined(t[s])){if(!p.isUndefined(e[s]))return n(void 0,e[s])}else return n(void 0,t[s])}function f(s){if(s in t)return n(e[s],t[s]);if(s in e)return n(void 0,e[s])}var m={url:o,method:o,data:o,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:f};return p.forEach(Object.keys(e).concat(Object.keys(t)),function(l){var y=m[l]||i,d=y(l);p.isUndefined(d)&&y!==f||(a[l]=d)}),a},le={version:"0.25.0"},br=le.version,V={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){V[r]=function(a){return typeof a===r||"a"+(e<1?"n ":" ")+r}});var ce={};V.transitional=function(e,t,a){function n(i,o){return"[Axios v"+br+"] Transitional option '"+i+"'"+o+(a?". "+a:"")}return function(i,o,u){if(e===!1)throw new Error(n(o," has been removed"+(t?" in "+t:"")));return t&&!ce[o]&&(ce[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,o,u):!0}};function wr(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var a=Object.keys(r),n=a.length;n-- >0;){var i=a[n],o=e[i];if(o){var u=r[i],f=u===void 0||o(u,i,r);if(f!==!0)throw new TypeError("option "+i+" must be "+f);continue}if(t!==!0)throw Error("Unknown option "+i)}}var Er={assertOptions:wr,validators:V},de=h,Sr=ee,he=_e,pe=yr,j=fe,me=Er,x=me.validators;function R(r){this.defaults=r,this.interceptors={request:new he,response:new he}}R.prototype.request=function(e,t){if(typeof e=="string"?(t=t||{},t.url=e):t=e||{},!t.url)throw new Error("Provided config url is not valid");t=j(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var a=t.transitional;a!==void 0&&me.assertOptions(a,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(d){typeof d.runWhen=="function"&&d.runWhen(t)===!1||(i=i&&d.synchronous,n.unshift(d.fulfilled,d.rejected))});var o=[];this.interceptors.response.forEach(function(d){o.push(d.fulfilled,d.rejected)});var u;if(!i){var f=[pe,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(o),u=Promise.resolve(t);f.length;)u=u.then(f.shift(),f.shift());return u}for(var m=t;n.length;){var s=n.shift(),l=n.shift();try{m=s(m)}catch(y){l(y);break}}try{u=pe(m)}catch(y){return Promise.reject(y)}for(;o.length;)u=u.then(o.shift(),o.shift());return u};R.prototype.getUri=function(e){if(!e.url)throw new Error("Provided config url is not valid");return e=j(this.defaults,e),Sr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};de.forEach(["delete","get","head","options"],function(e){R.prototype[e]=function(t,a){return this.request(j(a||{},{method:e,url:t,data:(a||{}).data}))}});de.forEach(["post","put","patch"],function(e){R.prototype[e]=function(t,a,n){return this.request(j(n||{},{method:e,url:t,data:a}))}});var Cr=R,xr=P;function O(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(a){if(!!t._listeners){var n,i=t._listeners.length;for(n=0;n<i;n++)t._listeners[n](a);t._listeners=null}}),this.promise.then=function(a){var n,i=new Promise(function(o){t.subscribe(o),n=o}).then(a);return i.cancel=function(){t.unsubscribe(n)},i},r(function(n){t.reason||(t.reason=new xr(n),e(t.reason))})}O.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};O.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};O.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};O.source=function(){var e,t=new O(function(n){e=n});return{token:t,cancel:e}};var Or=O,Rr=function(e){return function(a){return e.apply(null,a)}},$r=h,Ar=function(e){return $r.isObject(e)&&e.isAxiosError===!0},ve=h,Nr=K,B=Cr,Pr=fe,gr=U;function ye(r){var e=new B(r),t=Nr(B.prototype.request,e);return ve.extend(t,B.prototype,e),ve.extend(t,e),t.create=function(n){return ye(Pr(r,n))},t}var b=ye(gr);b.Axios=B;b.Cancel=P;b.CancelToken=Or;b.isCancel=oe;b.VERSION=le.version;b.all=function(e){return Promise.all(e)};b.spread=Rr;b.isAxiosError=Ar;D.exports=b;D.exports.default=b;var be=D.exports;const we="https://vue3-course-api.hexschool.io",Tr="ken888686",jr={login(r,e){return new Promise((t,a)=>{be.post(`${we}/v2/admin/signin`,{username:r,password:e}).then(n=>{t(n)}).catch(n=>{a(n)})})},getProducts(){return new Promise((r,e)=>{be.get(`${we}/v2/api/${Tr}/admin/products`,{headers:{authorization:Se.state.token}}).then(t=>{r(t)}).catch(t=>{e(t)})})}};export{jr as a};
