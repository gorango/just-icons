let e,t,n=!1;const l="undefined"!=typeof window?window:{},s=l.document||{head:{}},o={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},c=e=>Promise.resolve(e),r=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),i=new WeakMap,a=e=>"sc-"+e.s,u={},f=e=>"object"==(e=typeof e)||"function"===e,$=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!f(l))&&(l+=""),s&&o?c[c.length-1].o+=l:c.push(s?d(null,l):l),o=s)};if(r(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}const i=d(e,null);return i.i=t,c.length>0&&(i.u=c),i},d=(e,t)=>({t:0,$:e,o:t,h:null,u:null,i:null}),y={},h=(e,t,n,l,s,o)=>{if(n!==l){let c=V(e,t);if(t.toLowerCase(),"class"===t){const t=e.classList,s=m(n),o=m(l);t.remove(...s.filter(e=>e&&!o.includes(e))),t.add(...o.filter(e=>e&&!s.includes(e)))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else{const r=f(l);if((c||r&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!c||4&o||s)&&!r&&e.setAttribute(t,l=!0===l?"":l)}}},p=/\s/,m=e=>e?e.split(p):[],b=(e,t,n,l)=>{const s=11===t.h.nodeType&&t.h.host?t.h.host:t.h,o=e&&e.i||u,c=t.i||u;for(l in o)l in c||h(s,l,o[l],void 0,n,t.t);for(l in c)h(s,l,o[l],c[l],n,t.t)},w=(t,n,l)=>{let o,c,r=n.u[l],i=0;if(null!==r.o)o=r.h=s.createTextNode(r.o);else if(o=r.h=s.createElement(r.$),b(null,r,!1),null!=e&&o["s-si"]!==e&&o.classList.add(o["s-si"]=e),r.u)for(i=0;i<r.u.length;++i)c=w(t,r,i),c&&o.appendChild(c);return o},g=(e,n,l,s,o,c)=>{let r,i=e;for(i.shadowRoot&&i.tagName===t&&(i=i.shadowRoot);o<=c;++o)s[o]&&(r=w(null,l,o),r&&(s[o].h=r,i.insertBefore(r,n)))},j=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.h.remove()},v=(e,t)=>e.$===t.$,S=(e,t)=>{const n=t.h=e.h,l=e.u,s=t.u,o=t.o;null===o?(b(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,c=0,r=t.length-1,i=t[0],a=t[r],u=l.length-1,f=l[0],$=l[u];for(;o<=r&&c<=u;)null==i?i=t[++o]:null==a?a=t[--r]:null==f?f=l[++c]:null==$?$=l[--u]:v(i,f)?(S(i,f),i=t[++o],f=l[++c]):v(a,$)?(S(a,$),a=t[--r],$=l[--u]):v(i,$)?(S(i,$),e.insertBefore(i.h,a.h.nextSibling),i=t[++o],$=l[--u]):v(a,f)?(S(a,f),e.insertBefore(a.h,i.h),a=t[--r],f=l[++c]):(s=w(t&&t[c],n,c),f=l[++c],s&&i.h.parentNode.insertBefore(s,i.h));o>r?g(e,null==l[u+1]?null:l[u+1].h,n,l,c,u):c>u&&j(t,o,r)})(n,l,t,s):null!==s?(null!==e.o&&(n.textContent=""),g(n,null,t,s,0,s.length-1)):null!==l&&j(l,0,l.length-1)):e.o!==o&&(n.data=o)},M=e=>q(e).p,k=(e,t)=>{t&&!e.m&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.m=t))},C=(e,t)=>{if(e.t|=16,!(4&e.t))return k(e,e.g),Y(()=>O(e,t));e.t|=512},O=(e,t)=>{const n=e.j;return A(void 0,()=>P(e,n,t))},P=async(n,l,o)=>{const c=n.p,r=c["s-rc"];o&&(e=>{const t=e.v,n=e.p,l=t.t,o=((e,t)=>{let n=a(t),l=D.get(n);if(e=11===e.nodeType?e:s,l)if("string"==typeof l){let t,o=i.get(e=e.head||e);o||i.set(e,o=new Set),o.has(n)||(t=s.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),o&&o.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"))})(n);((n,l)=>{const s=n.p,o=n.v,c=n.S||d(null,null),r=(e=>e&&e.$===y)(l)?l:$(null,null,l);t=s.tagName,o.M&&(r.i=r.i||{},o.M.map(([e,t])=>r.i[t]=s[e])),r.$=null,r.t|=4,n.S=r,r.h=c.h=s.shadowRoot||s,e=s["s-sc"],S(c,r)})(n,x(n,l)),r&&(r.map(e=>e()),c["s-rc"]=void 0);{const e=c["s-p"],t=()=>E(n);0===e.length?t():(Promise.all(e).then(t),n.t|=4,e.length=0)}},x=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2}catch(e){_(e)}return t},E=e=>{const t=e.p,n=e.g;64&e.t||(e.t|=64,H(t),e.k(t),n||T()),e.m&&(e.m(),e.m=void 0),512&e.t&&X(()=>C(e,!1)),e.t&=-517},T=()=>{H(s.documentElement),X(()=>(e=>{const t=o.ce("appload",{detail:{namespace:"rounded-icon"}});return e.dispatchEvent(t),t})(l))},A=(e,t)=>e&&e.then?e.then(t):t(),H=e=>e.classList.add("hydrated"),L=(e,t,n)=>{if(t.C){e.watchers&&(t.O=e.watchers);const l=Object.entries(t.C),s=e.prototype;if(l.map(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>q(this).P.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=q(e),o=s.P.get(t),c=s.t,r=s.j;if(n=((e,t)=>null==e||f(e)?e:1&t?e+"":e)(n,l.C[t][0]),!(8&c&&void 0!==o||n===o)&&(s.P.set(t,n),r)){if(l.O&&128&c){const e=l.O[t];e&&e.map(e=>{try{r[e](n,o,t)}catch(e){_(e)}})}2==(18&c)&&C(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){o.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.M.push([e,s]),s})}}return e},R=e=>{((e,t)=>{if(e&&e[t])try{e[t](void 0)}catch(e){_(e)}})(e,"connectedCallback")},U=(e,t={})=>{const n=[],c=t.exclude||[],i=l.customElements,u=s.head,f=u.querySelector("meta[charset]"),$=s.createElement("style"),d=[];let y,h=!0;Object.assign(o,t),o.l=new URL(t.resourcesUrl||"./",s.baseURI).href,e.map(e=>e[1].map(t=>{const l={t:t[0],s:t[1],C:t[2],T:t[3]};l.C=t[2],l.M=[],l.O={};const s=l.s,u=class extends HTMLElement{constructor(e){super(e),N(e=this,l),1&l.t&&e.attachShadow({mode:"open"})}connectedCallback(){y&&(clearTimeout(y),y=null),h?d.push(this):o.jmp(()=>(e=>{if(0==(1&o.t)){const t=q(e),n=t.v,l=()=>{};if(1&t.t)R(t.j);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){k(t,t.g=n);break}}n.C&&Object.entries(n.C).map(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=B(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.O=s.watchers,L(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){_(e)}t.t&=-9,t.t|=128,e(),R(t.j)}if(s.style){let e=s.style;const t=a(n);if(!D.has(t)){const l=()=>{};((e,t,n)=>{let l=D.get(e);r&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,D.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.g,c=()=>C(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)}l()}})(this))}disconnectedCallback(){o.jmp(()=>{})}componentOnReady(){return q(this).A}};l.H=e[0],c.includes(s)||i.get(s)||(n.push(s),i.define(s,L(u,l,1)))})),$.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),u.insertBefore($,f?f.nextSibling:u.firstChild),h=!1,d.length?d.map(e=>e.connectedCallback()):o.jmp(()=>y=setTimeout(T,30))},W=new WeakMap,q=e=>W.get(e),F=(e,t)=>W.set(t.j=e,t),N=(e,t)=>{const n={t:0,p:e,v:t,P:new Map};return n.A=new Promise(e=>n.k=e),e["s-p"]=[],e["s-rc"]=[],W.set(e,n)},V=(e,t)=>t in e,_=e=>console.error(e),z=new Map,B=e=>{const t=e.s.replace(/-/g,"_"),n=e.H,l=z.get(n);return l?l[t]:import(`./${n}.entry.js`).then(e=>(z.set(n,e),e[t]),_)},D=new Map,G=[],I=[],J=(e,t)=>l=>{e.push(l),n||(n=!0,t&&4&o.t?X(Q):o.raf(Q))},K=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){_(e)}e.length=0},Q=()=>{K(G),K(I),(n=G.length>0)&&o.raf(Q)},X=e=>c().then(e),Y=J(I,!0);export{y as H,U as b,M as g,$ as h,c as p,F as r}