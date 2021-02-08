var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function c(t){t.forEach(e)}function o(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function p(){return u(" ")}function d(){return u("")}function f(t,e,n,c){return t.addEventListener(e,n,c),()=>t.removeEventListener(e,n,c)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let m;function h(t){m=t}const $=[],k=[],y=[],b=[],x=Promise.resolve();let v=!1;function _(t){y.push(t)}function w(t){b.push(t)}let C=!1;const L=new Set;function M(){if(!C){C=!0;do{for(let t=0;t<$.length;t+=1){const e=$[t];h(e),j(e.$$)}for(h(null),$.length=0;k.length;)k.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];L.has(e)||(L.add(e),e())}y.length=0}while($.length);for(;b.length;)b.pop()();v=!1,C=!1,L.clear()}}function j(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const N=new Set;let W;function H(){W={r:0,c:[],p:W}}function O(){W.r||c(W.c),W=W.p}function T(t,e){t&&t.i&&(N.delete(t),t.i(e))}function E(t,e,n,c){if(t&&t.o){if(N.has(t))return;N.add(t),W.c.push((()=>{N.delete(t),c&&(n&&t.d(1),c())})),t.o(e)}}function P(t,e,n){const c=t.$$.props[e];void 0!==c&&(t.$$.bound[c]=n,n(t.$$.ctx[c]))}function U(t){t&&t.c()}function G(t,n,r){const{fragment:i,on_mount:l,on_destroy:s,after_update:a}=t.$$;i&&i.m(n,r),_((()=>{const n=l.map(e).filter(o);s?s.push(...n):c(n),t.$$.on_mount=[]})),a.forEach(_)}function S(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&($.push(t),v||(v=!0,x.then(M)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(e,o,r,i,l,a,u=[-1]){const p=m;h(e);const d=o.props||{},f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:u,skip_bound:!1};let g=!1;if(f.ctx=r?r(e,d,((t,n,...c)=>{const o=c.length?c[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=o)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](o),g&&I(e,t)),n})):[],f.update(),g=!0,c(f.before_update),f.fragment=!!i&&i(f.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);f.fragment&&f.fragment.l(t),t.forEach(s)}else f.fragment&&f.fragment.c();o.intro&&T(e.$$.fragment),G(e,o.target,o.anchor),M()}h(p)}class R{$destroy(){S(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function F(e){let n,c,o;return{c(){n=a("h1"),n.textContent="Hello!",c=p(),o=a("p"),o.textContent="a cozy space for web, software and game development."},m(t,e){l(t,n,e),l(t,c,e),l(t,o,e)},p:t,i:t,o:t,d(t){t&&s(n),t&&s(c),t&&s(o)}}}function B(t,e,n){return["Home!"]}class D extends R{constructor(t){super(),A(this,t,B,F,r,{text:0})}get text(){return this.$$.ctx[0]}}function q(e){let n,o,r,u,d,g,m,h,$,k,y,b;return{c(){n=a("p"),n.textContent="Projects:",o=p(),r=a("ul"),u=a("li"),u.innerHTML='<p href="./heartwood.html">Heartwood</p>',d=p(),g=a("li"),m=a("p"),m.textContent="Groceries",h=p(),$=a("li"),k=a("p"),k.textContent="Where's Waldo?"},m(t,c){l(t,n,c),l(t,o,c),l(t,r,c),i(r,u),i(r,d),i(r,g),i(g,m),i(r,h),i(r,$),i($,k),y||(b=[f(m,"click",e[0]("Groceries")),f(k,"click",e[0]("Waldo"))],y=!0)},p:t,i:t,o:t,d(t){t&&s(n),t&&s(o),t&&s(r),y=!1,c(b)}}}function K(t,e,n){let{page:c="Main"}=e;return t.$$set=t=>{"page"in t&&n(1,c=t.page)},[t=>()=>n(1,c=t),c]}class V extends R{constructor(t){super(),A(this,t,K,q,r,{page:1})}}function Y(e){let n;return{c(){n=a("header"),n.innerHTML='<h1 class="svelte-1iuja27">kosi.dev<img src="assets/icon.svg" alt="" width="100"/></h1>'},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&s(n)}}}class z extends R{constructor(t){super(),A(this,t,null,Y,r,{})}}function J(t){let e,n,c;return{c(){e=a("button"),e.textContent=""+t[3],g(e,"class","svelte-wdlj2")},m(r,i){l(r,e,i),n||(c=f(e,"click",(function(){o(t[0])&&t[0].apply(this,arguments)})),n=!0)},p(e,n){t=e},d(t){t&&s(e),n=!1,c()}}}function Q(t){let e,n,c;return{c(){e=a("button"),e.textContent=""+t[3],g(e,"class","selected svelte-wdlj2")},m(r,i){l(r,e,i),n||(c=f(e,"click",(function(){o(t[0])&&t[0].apply(this,arguments)})),n=!0)},p(e,n){t=e},d(t){t&&s(e),n=!1,c()}}}function X(e){let n;function c(t,e){return t[1]==t[2]?Q:J}let o=c(e),r=o(e);return{c(){r.c(),n=d()},m(t,e){r.m(t,e),l(t,n,e)},p(t,[e]){o===(o=c(t))&&r?r.p(t,e):(r.d(1),r=o(t),r&&(r.c(),r.m(n.parentNode,n)))},i:t,o:t,d(t){r.d(t),t&&s(n)}}}function Z(t,e,n){let{click:c}=e,{main:o}=e,{page:r}=e,i=r.name;return t.$$set=t=>{"click"in t&&n(0,c=t.click),"main"in t&&n(1,o=t.main),"page"in t&&n(2,r=t.page)},[c,o,r,i]}class tt extends R{constructor(t){super(),A(this,t,Z,X,r,{click:0,main:1,page:2})}}function et(e){let n;return{c(){n=a("div"),n.innerHTML='<script async="" src="https://www.googletagmanager.com/gtag/js?id=G-7YF6NW0FWG"><\/script> \n\t<script>window.dataLayer = window.dataLayer || [];\n\tfunction gtag(){dataLayer.push(arguments);}\n\tgtag("js", new Date());\n\tgtag("config", "G-7YF6NW0FWG");<\/script>'},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&s(n)}}}class nt extends R{constructor(t){super(),A(this,t,null,et,r,{})}}function ct(t,e,n){const c=t.slice();return c[0]=e[n],c}function ot(t){let e,n,c,o;function r(...e){return t[3](t[0],...e)}function i(e){t[4].call(null,e)}let u={click:r,page:t[0]};return void 0!==t[1]&&(u.main=t[1]),n=new tt({props:u}),k.push((()=>P(n,"main",i))),{c(){e=a("li"),U(n.$$.fragment),g(e,"class","svelte-173cyh4")},m(t,c){l(t,e,c),G(n,e,null),o=!0},p(e,o){t=e;const i={};2&o&&(i.click=r),!c&&2&o&&(c=!0,i.main=t[1],w((()=>c=!1))),n.$set(i)},i(t){o||(T(n.$$.fragment,t),o=!0)},o(t){E(n.$$.fragment,t),o=!1},d(t){t&&s(e),S(n)}}}function rt(t){let e,n,c,o,r,u,d,f,m,h,$;c=new z({});let y=t[2],b=[];for(let e=0;e<y.length;e+=1)b[e]=ot(ct(t,y,e));const x=t=>E(b[t],1,1,(()=>{b[t]=null}));function v(e){t[5].call(null,e)}var _=t[1].class;function C(t){let e={};return void 0!==t[0]&&(e.page=t[0]),{props:e}}return _&&(m=new _(C(t)),k.push((()=>P(m,"page",v)))),{c(){e=a("link"),n=p(),U(c.$$.fragment),o=p(),r=a("nav"),u=a("ul");for(let t=0;t<b.length;t+=1)b[t].c();d=p(),f=a("main"),m&&U(m.$$.fragment),document.title="kosi.dev",g(e,"rel","icon"),g(e,"type","image/x-icon"),g(e,"href","assets/icon.ico"),g(u,"class","svelte-173cyh4"),g(r,"class","svelte-173cyh4"),g(f,"class","svelte-173cyh4")},m(t,s){i(document.head,e),l(t,n,s),G(c,t,s),l(t,o,s),l(t,r,s),i(r,u);for(let t=0;t<b.length;t+=1)b[t].m(u,null);l(t,d,s),l(t,f,s),m&&G(m,f,null),$=!0},p(t,[e]){if(6&e){let n;for(y=t[2],n=0;n<y.length;n+=1){const c=ct(t,y,n);b[n]?(b[n].p(c,e),T(b[n],1)):(b[n]=ot(c),b[n].c(),T(b[n],1),b[n].m(u,null))}for(H(),n=y.length;n<b.length;n+=1)x(n);O()}const n={};if(!h&&1&e&&(h=!0,n.page=t[0],w((()=>h=!1))),_!==(_=t[1].class)){if(m){H();const t=m;E(t.$$.fragment,1,0,(()=>{S(t,1)})),O()}_?(m=new _(C(t)),k.push((()=>P(m,"page",v))),U(m.$$.fragment),T(m.$$.fragment,1),G(m,f,null)):m=null}else _&&m.$set(n)},i(t){if(!$){T(c.$$.fragment,t);for(let t=0;t<y.length;t+=1)T(b[t]);m&&T(m.$$.fragment,t),$=!0}},o(t){E(c.$$.fragment,t),b=b.filter(Boolean);for(let t=0;t<b.length;t+=1)E(b[t]);m&&E(m.$$.fragment,t),$=!1},d(t){s(e),t&&s(n),S(c,t),t&&s(o),t&&s(r),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(b,t),t&&s(d),t&&s(f),m&&S(m)}}}function it(t,e){return{class:t,name:e}}function lt(t,e,n){const c=[it(D,"Home"),it(V,"Projects")];let o=c[0],{page:r="Main"}=e;return t.$$set=t=>{"page"in t&&n(0,r=t.page)},[r,o,c,t=>n(1,o=t),function(t){o=t,n(1,o)},function(t){r=t,n(0,r)}]}class st extends R{constructor(t){super(),A(this,t,lt,rt,r,{page:0})}}function at(e){let n,c,o,r,i,u,d,g,m,h,$;return{c(){n=a("header"),n.innerHTML='<h1 class="svelte-1iuja27">Where&#39;s Waldo?</h1>',c=p(),o=a("p"),o.textContent="Home",r=p(),i=a("br"),u=a("br"),d=a("br"),g=p(),m=a("main"),m.innerHTML='<div><img src="assets/waldo.jpg" alt="Waldo?" usemap="#map-waldo"/></div> \n\t\n\t<map name="map-waldo"><area shape="circle" coords="1278, 96, 25" onclick="waldo = true; waldo_alert()" alt="Waldo."/> \n\t\t<area shape="rectangle" coords="0, 0, 1590, 981" onclick="waldo_alert()" alt=""/></map>'},m(t,s){l(t,n,s),l(t,c,s),l(t,o,s),l(t,r,s),l(t,i,s),l(t,u,s),l(t,d,s),l(t,g,s),l(t,m,s),h||($=f(o,"click",e[0]("Main")),h=!0)},p:t,i:t,o:t,d(t){t&&s(n),t&&s(c),t&&s(o),t&&s(r),t&&s(i),t&&s(u),t&&s(d),t&&s(g),t&&s(m),h=!1,$()}}}function ut(t,e,n){let{page:c="Waldo"}=e;return t.$$set=t=>{"page"in t&&n(1,c=t.page)},[t=>()=>n(1,c=t),c]}class pt extends R{constructor(t){super(),A(this,t,ut,at,r,{page:1})}}function dt(e){let n,c,o;return{c(){n=a("head"),n.innerHTML='<title>Matlista</title> \n\t<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"><\/script> \n\t<script src="groceries/groceries.js"><\/script> \n\t<meta charset="UTF-16"/> \n\t<link rel="stylesheet" href="groceries/groceries.css"/>',c=p(),o=a("body"),o.innerHTML='<main><br/> \n\t\t<div style="display: flex; width: 100%;"><div style="width:32%; padding-right: 100px; align-self: flex-end;"><ul><li><input id="trumf" checked="" type="checkbox" onclick="grocery_table.edit_kiwi_pluss(); grocery_list.calculate()" class="checkbox"/> KIWI PLUSS</li> \n\t\t\t\t\t\n\t\t\t\t\t<li><input id="store" type="checkbox" onclick="grocery_table.edit_columns(COLUMN.STORE)" class="checkbox"/> Butikk</li> \n\t\t\t\t\t<li><input id="brand" type="checkbox" onclick="grocery_table.edit_columns(COLUMN.BRAND)" class="checkbox"/> Produsent</li> \n\t\t\t\t\t<li><input id="price" checked="" type="checkbox" onclick="grocery_table.edit_columns(COLUMN.PRICE)" class="checkbox"/> Pris</li> \n\t\t\t\t\t<li><input id="weight" type="checkbox" onclick="grocery_table.edit_columns(COLUMN.WEIGHT)" class="checkbox"/> Vekt</li> \n\t\t\t\t\t<li><input id="discount" type="checkbox" onclick="grocery_table.edit_columns(COLUMN.DISCOUNT)" class="checkbox"/> Rabatt</li> \n\t\t\t\t\t<li><input id="price_kg" checked="" type="checkbox" onclick="grocery_table.edit_columns(COLUMN.PRICE_KG)" class="checkbox"/> Pris / kg</li> \n\t\t\t\t\t<li><input id="calories" checked="" type="checkbox" onclick="grocery_table.edit_columns(COLUMN.CALORIES)" class="checkbox"/> Pris / 2000 kcal</li></ul> \n\t\n\t\t\t\t<input id="search" type="text" placeholder="Søk.." oninput="grocery_table.search()" autocomplete="off" class="search"/></div> \n\t\t\t<div style="width:64%;"><h2>Velkommen!</h2> \n\t\t\t\t<p>Her kan du sammenligne priser på matvarer.</p> \n\t\t\t\t<p>Du kan også sette opp en meny og se hva den vil koste.</p> \n\t\t\t\t<p>Trykk på varene i listen nedenfor for å legge dem til i menyen.</p> \n\t\t\t\t\n\t\t\t\t<div id="grocery_list"></div></div></div> \n\n\t\t<br/> \n\t\t<br/> \n\n\t\t<div id="grocery_table"></div></main>'},m(t,e){l(t,n,e),l(t,c,e),l(t,o,e)},p:t,i:t,o:t,d(t){t&&s(n),t&&s(c),t&&s(o)}}}class ft extends R{constructor(t){super(),A(this,t,null,dt,r,{})}}function gt(t){let e,n,c;function o(e){t[3].call(null,e)}let r={};return void 0!==t[0]&&(r.page=t[0]),e=new ft({props:r}),k.push((()=>P(e,"page",o))),{c(){U(e.$$.fragment)},m(t,n){G(e,t,n),c=!0},p(t,c){const o={};!n&&1&c&&(n=!0,o.page=t[0],w((()=>n=!1))),e.$set(o)},i(t){c||(T(e.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),c=!1},d(t){S(e,t)}}}function mt(t){let e,n,c;function o(e){t[2].call(null,e)}let r={};return void 0!==t[0]&&(r.page=t[0]),e=new pt({props:r}),k.push((()=>P(e,"page",o))),{c(){U(e.$$.fragment)},m(t,n){G(e,t,n),c=!0},p(t,c){const o={};!n&&1&c&&(n=!0,o.page=t[0],w((()=>n=!1))),e.$set(o)},i(t){c||(T(e.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),c=!1},d(t){S(e,t)}}}function ht(t){let e,n,c;function o(e){t[1].call(null,e)}let r={};return void 0!==t[0]&&(r.page=t[0]),e=new st({props:r}),k.push((()=>P(e,"page",o))),{c(){U(e.$$.fragment)},m(t,n){G(e,t,n),c=!0},p(t,c){const o={};!n&&1&c&&(n=!0,o.page=t[0],w((()=>n=!1))),e.$set(o)},i(t){c||(T(e.$$.fragment,t),c=!0)},o(t){E(e.$$.fragment,t),c=!1},d(t){S(e,t)}}}function $t(t){let e,n,c,o,r,i;e=new nt({});const a=[ht,mt,gt],u=[];function f(t,e){return"Main"==t[0]?0:"Waldo"==t[0]?1:"Groceries"==t[0]?2:-1}return~(c=f(t))&&(o=u[c]=a[c](t)),{c(){U(e.$$.fragment),n=p(),o&&o.c(),r=d()},m(t,o){G(e,document.head,null),l(t,n,o),~c&&u[c].m(t,o),l(t,r,o),i=!0},p(t,[e]){let n=c;c=f(t),c===n?~c&&u[c].p(t,e):(o&&(H(),E(u[n],1,1,(()=>{u[n]=null})),O()),~c?(o=u[c],o||(o=u[c]=a[c](t),o.c()),T(o,1),o.m(r.parentNode,r)):o=null)},i(t){i||(T(e.$$.fragment,t),T(o),i=!0)},o(t){E(e.$$.fragment,t),E(o),i=!1},d(t){S(e),t&&s(n),~c&&u[c].d(t),t&&s(r)}}}function kt(t,e,n){let{page:c="Main"}=e;return t.$$set=t=>{"page"in t&&n(0,c=t.page)},[c,function(t){c=t,n(0,c)},function(t){c=t,n(0,c)},function(t){c=t,n(0,c)}]}return new class extends R{constructor(t){super(),A(this,t,kt,$t,r,{page:0})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
