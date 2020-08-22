var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function c(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t,n){t.value=null==n?"":n}let m;function p(t){m=t}function g(t){(function(){if(!m)throw new Error("Function called outside component initialization");return m})().$$.on_mount.push(t)}const $=[],y=[],b=[],v=[],w=Promise.resolve();let x=!1;function _(t){b.push(t)}let j=!1;const k=new Set;function E(){if(!j){j=!0;do{for(let t=0;t<$.length;t+=1){const n=$[t];p(n),A(n.$$)}for($.length=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];k.has(n)||(k.add(n),n())}b.length=0}while($.length);for(;v.length;)v.pop()();x=!1,j=!1,k.clear()}}function A(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const C=new Set;let N;function q(){N={r:0,c:[],p:N}}function z(){N.r||r(N.c),N=N.p}function L(t,n){t&&t.i&&(C.delete(t),t.i(n))}function M(t,n,e,r){if(t&&t.o){if(C.has(t))return;C.add(t),N.c.push(()=>{C.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function O(t){t&&t.c()}function S(t,e,i){const{fragment:u,on_mount:l,on_destroy:c,after_update:s}=t.$$;u&&u.m(e,i),_(()=>{const e=l.map(n).filter(o);c?c.push(...e):r(e),t.$$.on_mount=[]}),s.forEach(_)}function T(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function B(t,n){-1===t.$$.dirty[0]&&($.push(t),x||(x=!0,w.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Q(n,o,i,u,l,s,a=[-1]){const f=m;p(n);const d=o.props||{},h=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:l,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:e(),dirty:a,skip_bound:!1};let g=!1;if(h.ctx=i?i(n,d,(t,e,...r)=>{const o=r.length?r[0]:e;return h.ctx&&l(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),g&&B(n,t)),e}):[],h.update(),g=!0,r(h.before_update),h.fragment=!!u&&u(h.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();o.intro&&L(n.$$.fragment),S(n,o.target,o.anchor),E()}p(f)}class D{$destroy(){T(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function F(n){let e,r;return{c(){e=s("img"),e.src!==(r=n[0])&&d(e,"src",r),d(e,"alt",n[1]),d(e,"width",H),d(e,"height",n[2]),d(e,"loading","lazy")},m(t,n){l(t,e,n)},p(t,[n]){1&n&&e.src!==(r=t[0])&&d(e,"src",r),2&n&&d(e,"alt",t[1]),4&n&&d(e,"height",t[2])},i:t,o:t,d(t){t&&c(e)}}}let H=400;function P(t,n,e){let r,{url:o}=n,{name:i}=n,{width:u}=n,{height:l}=n;return t.$$set=t=>{"url"in t&&e(0,o=t.url),"name"in t&&e(1,i=t.name),"width"in t&&e(3,u=t.width),"height"in t&&e(4,l=t.height)},t.$$.update=()=>{24&t.$$.dirty&&e(2,r=H*(l/u))},[o,i,r,u,l]}class R extends D{constructor(t){super(),Q(this,t,P,F,i,{url:0,name:1,width:3,height:4})}}function U(t,n,e){const r=t.slice();return r[2]=n[e].name,r[3]=n[e].url,r[4]=n[e].width,r[5]=n[e].height,r[6]=n[e].ratio,r}function Y(n){let e,r,o,i,h,m,p,g,$,y,b,v,w,x,_,j=n[2]+"",k=n[4]+"",E=n[5]+"",A=n[6]+"",C=n[3]+"";return x=new R({props:{name:n[2],url:n[3],width:n[4],height:n[5]}}),{c(){e=s("h2"),r=a(j),o=a(" ("),i=a(k),h=a(" x "),m=a(E),p=a(", "),g=a(A),$=a(")"),y=f(),b=s("p"),v=a(C),w=f(),O(x.$$.fragment),d(b,"class","url svelte-dm5jeo")},m(t,n){l(t,e,n),u(e,r),u(e,o),u(e,i),u(e,h),u(e,m),u(e,p),u(e,g),u(e,$),l(t,y,n),l(t,b,n),u(b,v),l(t,w,n),S(x,t,n),_=!0},p:t,i(t){_||(L(x.$$.fragment,t),_=!0)},o(t){M(x.$$.fragment,t),_=!1},d(t){t&&c(e),t&&c(y),t&&c(b),t&&c(w),T(x,t)}}}function Z(t){let n,e,r=t[0],o=[];for(let n=0;n<r.length;n+=1)o[n]=Y(U(t,r,n));const i=t=>M(o[t],1,1,()=>{o[t]=null});return{c(){n=s("section");for(let t=0;t<o.length;t+=1)o[t].c()},m(t,r){l(t,n,r);for(let t=0;t<o.length;t+=1)o[t].m(n,null);e=!0},p(t,[e]){if(1&e){let u;for(r=t[0],u=0;u<r.length;u+=1){const i=U(t,r,u);o[u]?(o[u].p(i,e),L(o[u],1)):(o[u]=Y(i),o[u].c(),L(o[u],1),o[u].m(n,null))}for(q(),u=r.length;u<o.length;u+=1)i(u);z()}},i(t){if(!e){for(let t=0;t<r.length;t+=1)L(o[t]);e=!0}},o(t){o=o.filter(Boolean);for(let t=0;t<o.length;t+=1)M(o[t]);e=!1},d(t){t&&c(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(o,t)}}}function G(t,n,e){let{id:r}=n;const o=function(t){return[{url:`https://img.youtube.com/vi/${t}/default.jpg`,name:"Normal",width:120,height:90,ratio:"4:3"},{url:`https://img.youtube.com/vi/${t}/mqdefault.jpg`,name:"Medium Quality",width:320,height:180,ratio:"16:9"},{url:`https://img.youtube.com/vi/${t}/hqdefault.jpg`,name:"High Quality",width:480,height:360,ratio:"4:3"},{url:`https://img.youtube.com/vi/${t}/sddefault.jpg`,name:"Standard Definition",width:640,height:480,ratio:"4:3"},{url:`https://img.youtube.com/vi/${t}/maxresdefault.jpg`,name:"Max",width:1280,height:720,ratio:"16:9"}]}(r);return t.$$set=t=>{"id"in t&&e(1,r=t.id)},[o,r]}class I extends D{constructor(t){super(),Q(this,t,G,Z,i,{id:1})}}function J(t){let n,e;return n=new I({props:{id:t[1]}}),{c(){O(n.$$.fragment)},m(t,r){S(n,t,r),e=!0},p(t,e){const r={};2&e&&(r.id=t[1]),n.$set(r)},i(t){e||(L(n.$$.fragment,t),e=!0)},o(t){M(n.$$.fragment,t),e=!1},d(t){T(n,t)}}}function K(t){let n,e,r,o,i,a,m,p,g,$,y,b=null!==t[1]&&J(t);return{c(){n=s("main"),e=s("h1"),e.textContent="YouTube Thumbnail",r=f(),o=s("div"),i=s("label"),i.textContent="URL",a=f(),m=s("input"),p=f(),b&&b.c(),d(e,"class","svelte-rr9mdt"),d(i,"for","url"),d(i,"class","svelte-rr9mdt"),d(m,"id","url"),d(m,"name","url"),d(m,"inputmode","url"),d(m,"placeholder",""),m.autofocus=!0,d(m,"class","svelte-rr9mdt"),d(o,"class","field svelte-rr9mdt"),d(n,"class","svelte-rr9mdt")},m(c,s){var f,d,v,w;l(c,n,s),u(n,e),u(n,r),u(n,o),u(o,i),u(o,a),u(o,m),h(m,t[0]),u(n,p),b&&b.m(n,null),g=!0,m.focus(),$||(f=m,d="input",v=t[2],f.addEventListener(d,v,w),y=()=>f.removeEventListener(d,v,w),$=!0)},p(t,[e]){1&e&&m.value!==t[0]&&h(m,t[0]),null!==t[1]?b?(b.p(t,e),2&e&&L(b,1)):(b=J(t),b.c(),L(b,1),b.m(n,null)):b&&(q(),M(b,1,1,()=>{b=null}),z())},i(t){g||(L(b),g=!0)},o(t){M(b),g=!1},d(t){t&&c(n),b&&b.d(),$=!1,y()}}}function V(t,n,e){let r="",o="";return g(()=>{}),t.$$.update=()=>{1&t.$$.dirty&&(console.log(r),e(1,o=function(t){if(null===t||0===t.length)return null;const n=t.trim().match(/https:\/\/www\.youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);return null!==n&&n.length>0?n[1]:null}(r)))},[r,o,function(){r=this.value,e(0,r)}]}return new class extends D{constructor(t){super(),Q(this,t,V,K,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map