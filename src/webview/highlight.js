"use strict";var Xr=Object.defineProperty;var Gr=(t,e,n)=>e in t?Xr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ct=(t,e,n)=>(Gr(t,typeof e!="symbol"?e+"":e,n),n),Dn=(t,e,n)=>{if(!e.has(t))throw TypeError("Cannot "+n)};var tt=(t,e,n)=>(Dn(t,e,"read from private field"),n?n.call(t):e.get(t)),We=(t,e,n)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,n)},Ue=(t,e,n,r)=>(Dn(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);(function(){var t=window.Document.prototype.createElement,e=window.Document.prototype.createElementNS,n=window.Document.prototype.importNode,r=window.Document.prototype.prepend,o=window.Document.prototype.append,s=window.DocumentFragment.prototype.prepend,c=window.DocumentFragment.prototype.append,v=window.Node.prototype.cloneNode,d=window.Node.prototype.appendChild,f=window.Node.prototype.insertBefore,b=window.Node.prototype.removeChild,g=window.Node.prototype.replaceChild,C=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),_=window.Element.prototype.attachShadow,E=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),$=window.Element.prototype.getAttribute,S=window.Element.prototype.setAttribute,O=window.Element.prototype.removeAttribute,T=window.Element.prototype.toggleAttribute,k=window.Element.prototype.getAttributeNS,A=window.Element.prototype.setAttributeNS,G=window.Element.prototype.removeAttributeNS,x=window.Element.prototype.insertAdjacentElement,z=window.Element.prototype.insertAdjacentHTML,L=window.Element.prototype.prepend,M=window.Element.prototype.append,H=window.Element.prototype.before,V=window.Element.prototype.after,K=window.Element.prototype.replaceWith,ut=window.Element.prototype.remove,B=window.HTMLElement,ot=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),$t=window.HTMLElement.prototype.insertAdjacentElement,Qt=window.HTMLElement.prototype.insertAdjacentHTML,te=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(i){return te.add(i)});function En(i){var l=te.has(i);return i=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(i),!l&&i}var Pr=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);function P(i){var l=i.isConnected;if(l!==void 0)return l;if(Pr(i))return!0;for(;i&&!(i.__CE_isImportDocument||i instanceof Document);)i=i.parentNode||(window.ShadowRoot&&i instanceof ShadowRoot?i.host:void 0);return!(!i||!(i.__CE_isImportDocument||i instanceof Document))}function Pe(i){var l=i.children;if(l)return Array.prototype.slice.call(l);for(l=[],i=i.firstChild;i;i=i.nextSibling)i.nodeType===Node.ELEMENT_NODE&&l.push(i);return l}function je(i,l){for(;l&&l!==i&&!l.nextSibling;)l=l.parentNode;return l&&l!==i?l.nextSibling:null}function qe(i,l,u){for(var p=i;p;){if(p.nodeType===Node.ELEMENT_NODE){var a=p;l(a);var h=a.localName;if(h==="link"&&a.getAttribute("rel")==="import"){if(p=a.import,u===void 0&&(u=new Set),p instanceof Node&&!u.has(p))for(u.add(p),p=p.firstChild;p;p=p.nextSibling)qe(p,l,u);p=je(i,a);continue}else if(h==="template"){p=je(i,a);continue}if(a=a.__CE_shadowRoot)for(a=a.firstChild;a;a=a.nextSibling)qe(a,l,u)}p=p.firstChild?p.firstChild:je(i,p)}}function me(){var i=!(vt==null||!vt.noDocumentConstructionObserver),l=!(vt==null||!vt.shadyDomFastWalk);this.m=[],this.g=[],this.j=!1,this.shadyDomFastWalk=l,this.I=!i}function ee(i,l,u,p){var a=window.ShadyDOM;if(i.shadyDomFastWalk&&a&&a.inUse){if(l.nodeType===Node.ELEMENT_NODE&&u(l),l.querySelectorAll)for(i=a.nativeMethods.querySelectorAll.call(l,"*"),l=0;l<i.length;l++)u(i[l])}else qe(l,u,p)}function jr(i,l){i.j=!0,i.m.push(l)}function qr(i,l){i.j=!0,i.g.push(l)}function Be(i,l){i.j&&ee(i,l,function(u){return Ft(i,u)})}function Ft(i,l){if(i.j&&!l.__CE_patched){l.__CE_patched=!0;for(var u=0;u<i.m.length;u++)i.m[u](l);for(u=0;u<i.g.length;u++)i.g[u](l)}}function pt(i,l){var u=[];for(ee(i,l,function(a){return u.push(a)}),l=0;l<u.length;l++){var p=u[l];p.__CE_state===1?i.connectedCallback(p):ge(i,p)}}function rt(i,l){var u=[];for(ee(i,l,function(a){return u.push(a)}),l=0;l<u.length;l++){var p=u[l];p.__CE_state===1&&i.disconnectedCallback(p)}}function wt(i,l,u){u=u===void 0?{}:u;var p=u.J,a=u.upgrade||function(m){return ge(i,m)},h=[];for(ee(i,l,function(m){if(i.j&&Ft(i,m),m.localName==="link"&&m.getAttribute("rel")==="import"){var y=m.import;y instanceof Node&&(y.__CE_isImportDocument=!0,y.__CE_registry=document.__CE_registry),y&&y.readyState==="complete"?y.__CE_documentLoadHandled=!0:m.addEventListener("load",function(){var w=m.import;if(!w.__CE_documentLoadHandled){w.__CE_documentLoadHandled=!0;var N=new Set;p&&(p.forEach(function(I){return N.add(I)}),N.delete(w)),wt(i,w,{J:N,upgrade:a})}})}else h.push(m)},p),l=0;l<h.length;l++)a(h[l])}function ge(i,l){try{var u=l.ownerDocument,p=u.__CE_registry,a=p&&(u.defaultView||u.__CE_isImportDocument)?_e(p,l.localName):void 0;if(a&&l.__CE_state===void 0){a.constructionStack.push(l);try{try{if(new a.constructorFunction!==l)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{a.constructionStack.pop()}}catch(w){throw l.__CE_state=2,w}if(l.__CE_state=1,l.__CE_definition=a,a.attributeChangedCallback&&l.hasAttributes()){var h=a.observedAttributes;for(a=0;a<h.length;a++){var m=h[a],y=l.getAttribute(m);y!==null&&i.attributeChangedCallback(l,m,null,y,null)}}P(l)&&i.connectedCallback(l)}}catch(w){Ht(w)}}me.prototype.connectedCallback=function(i){var l=i.__CE_definition;if(l.connectedCallback)try{l.connectedCallback.call(i)}catch(u){Ht(u)}},me.prototype.disconnectedCallback=function(i){var l=i.__CE_definition;if(l.disconnectedCallback)try{l.disconnectedCallback.call(i)}catch(u){Ht(u)}},me.prototype.attributeChangedCallback=function(i,l,u,p,a){var h=i.__CE_definition;if(h.attributeChangedCallback&&-1<h.observedAttributes.indexOf(l))try{h.attributeChangedCallback.call(i,l,u,p,a)}catch(m){Ht(m)}};function xn(i,l,u,p){var a=l.__CE_registry;if(a&&(p===null||p==="http://www.w3.org/1999/xhtml")&&(a=_e(a,u)))try{var h=new a.constructorFunction;if(h.__CE_state===void 0||h.__CE_definition===void 0)throw Error("Failed to construct '"+u+"': The returned value was not constructed with the HTMLElement constructor.");if(h.namespaceURI!=="http://www.w3.org/1999/xhtml")throw Error("Failed to construct '"+u+"': The constructed element's namespace must be the HTML namespace.");if(h.hasAttributes())throw Error("Failed to construct '"+u+"': The constructed element must not have any attributes.");if(h.firstChild!==null)throw Error("Failed to construct '"+u+"': The constructed element must not have any children.");if(h.parentNode!==null)throw Error("Failed to construct '"+u+"': The constructed element must not have a parent node.");if(h.ownerDocument!==l)throw Error("Failed to construct '"+u+"': The constructed element's owner document is incorrect.");if(h.localName!==u)throw Error("Failed to construct '"+u+"': The constructed element's local name is incorrect.");return h}catch(m){return Ht(m),l=p===null?t.call(l,u):e.call(l,p,u),Object.setPrototypeOf(l,HTMLUnknownElement.prototype),l.__CE_state=2,l.__CE_definition=void 0,Ft(i,l),l}return l=p===null?t.call(l,u):e.call(l,p,u),Ft(i,l),l}function Ht(i){var l="",u="",p=0,a=0;i instanceof Error?(l=i.message,u=i.sourceURL||i.fileName||"",p=i.line||i.lineNumber||0,a=i.column||i.columnNumber||0):l="Uncaught "+String(i);var h=void 0;ErrorEvent.prototype.initErrorEvent===void 0?h=new ErrorEvent("error",{cancelable:!0,message:l,filename:u,lineno:p,colno:a,error:i}):(h=document.createEvent("ErrorEvent"),h.initErrorEvent("error",!1,!0,l,u,p),h.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})}),h.error===void 0&&Object.defineProperty(h,"error",{configurable:!0,enumerable:!0,get:function(){return i}}),window.dispatchEvent(h),h.defaultPrevented||console.error(i)}function Cn(){var i=this;this.g=void 0,this.F=new Promise(function(l){i.l=l})}Cn.prototype.resolve=function(i){if(this.g)throw Error("Already resolved.");this.g=i,this.l(i)};function kn(i){var l=document;this.l=void 0,this.h=i,this.g=l,wt(this.h,this.g),this.g.readyState==="loading"&&(this.l=new MutationObserver(this.G.bind(this)),this.l.observe(this.g,{childList:!0,subtree:!0}))}function Tn(i){i.l&&i.l.disconnect()}kn.prototype.G=function(i){var l=this.g.readyState;for(l!=="interactive"&&l!=="complete"||Tn(this),l=0;l<i.length;l++)for(var u=i[l].addedNodes,p=0;p<u.length;p++)wt(this.h,u[p])};function q(i){this.s=new Map,this.u=new Map,this.C=new Map,this.A=!1,this.B=new Map,this.o=function(l){return l()},this.i=!1,this.v=[],this.h=i,this.D=i.I?new kn(i):void 0}q.prototype.H=function(i,l){var u=this;if(!(l instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");zn(this,i),this.s.set(i,l),this.v.push(i),this.i||(this.i=!0,this.o(function(){return Sn(u)}))},q.prototype.define=function(i,l){var u=this;if(!(l instanceof Function))throw new TypeError("Custom element constructors must be functions.");zn(this,i),$n(this,i,l),this.v.push(i),this.i||(this.i=!0,this.o(function(){return Sn(u)}))};function zn(i,l){if(!En(l))throw new SyntaxError("The element name '"+l+"' is not valid.");if(_e(i,l))throw Error("A custom element with name '"+(l+"' has already been defined."));if(i.A)throw Error("A custom element is already being defined.")}function $n(i,l,u){i.A=!0;var p;try{var a=u.prototype;if(!(a instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var h=function(I){var Pt=a[I];if(Pt!==void 0&&!(Pt instanceof Function))throw Error("The '"+I+"' callback must be a function.");return Pt},m=h("connectedCallback"),y=h("disconnectedCallback"),w=h("adoptedCallback"),N=(p=h("attributeChangedCallback"))&&u.observedAttributes||[]}catch(I){throw I}finally{i.A=!1}return u={localName:l,constructorFunction:u,connectedCallback:m,disconnectedCallback:y,adoptedCallback:w,attributeChangedCallback:p,observedAttributes:N,constructionStack:[]},i.u.set(l,u),i.C.set(u.constructorFunction,u),u}q.prototype.upgrade=function(i){wt(this.h,i)};function Sn(i){if(i.i!==!1){i.i=!1;for(var l=[],u=i.v,p=new Map,a=0;a<u.length;a++)p.set(u[a],[]);for(wt(i.h,document,{upgrade:function(w){if(w.__CE_state===void 0){var N=w.localName,I=p.get(N);I?I.push(w):i.u.has(N)&&l.push(w)}}}),a=0;a<l.length;a++)ge(i.h,l[a]);for(a=0;a<u.length;a++){for(var h=u[a],m=p.get(h),y=0;y<m.length;y++)ge(i.h,m[y]);(h=i.B.get(h))&&h.resolve(void 0)}u.length=0}}q.prototype.get=function(i){if(i=_e(this,i))return i.constructorFunction},q.prototype.whenDefined=function(i){if(!En(i))return Promise.reject(new SyntaxError("'"+i+"' is not a valid custom element name."));var l=this.B.get(i);if(l)return l.F;l=new Cn,this.B.set(i,l);var u=this.u.has(i)||this.s.has(i);return i=this.v.indexOf(i)===-1,u&&i&&l.resolve(void 0),l.F},q.prototype.polyfillWrapFlushCallback=function(i){this.D&&Tn(this.D);var l=this.o;this.o=function(u){return i(function(){return l(u)})}};function _e(i,l){var u=i.u.get(l);if(u)return u;if(u=i.s.get(l)){i.s.delete(l);try{return $n(i,l,u())}catch(p){Ht(p)}}}q.prototype.define=q.prototype.define,q.prototype.upgrade=q.prototype.upgrade,q.prototype.get=q.prototype.get,q.prototype.whenDefined=q.prototype.whenDefined,q.prototype.polyfillDefineLazy=q.prototype.H,q.prototype.polyfillWrapFlushCallback=q.prototype.polyfillWrapFlushCallback;function Ye(i,l,u){function p(a){return function(h){for(var m=[],y=0;y<arguments.length;++y)m[y]=arguments[y];y=[];for(var w=[],N=0;N<m.length;N++){var I=m[N];if(I instanceof Element&&P(I)&&w.push(I),I instanceof DocumentFragment)for(I=I.firstChild;I;I=I.nextSibling)y.push(I);else y.push(I)}for(a.apply(this,m),m=0;m<w.length;m++)rt(i,w[m]);if(P(this))for(m=0;m<y.length;m++)w=y[m],w instanceof Element&&pt(i,w)}}u.prepend!==void 0&&(l.prepend=p(u.prepend)),u.append!==void 0&&(l.append=p(u.append))}function Br(i){Document.prototype.createElement=function(l){return xn(i,this,l,null)},Document.prototype.importNode=function(l,u){return l=n.call(this,l,!!u),this.__CE_registry?wt(i,l):Be(i,l),l},Document.prototype.createElementNS=function(l,u){return xn(i,this,u,l)},Ye(i,Document.prototype,{prepend:r,append:o})}function Yr(i){function l(p){return function(a){for(var h=[],m=0;m<arguments.length;++m)h[m]=arguments[m];m=[];for(var y=[],w=0;w<h.length;w++){var N=h[w];if(N instanceof Element&&P(N)&&y.push(N),N instanceof DocumentFragment)for(N=N.firstChild;N;N=N.nextSibling)m.push(N);else m.push(N)}for(p.apply(this,h),h=0;h<y.length;h++)rt(i,y[h]);if(P(this))for(h=0;h<m.length;h++)y=m[h],y instanceof Element&&pt(i,y)}}var u=Element.prototype;H!==void 0&&(u.before=l(H)),V!==void 0&&(u.after=l(V)),K!==void 0&&(u.replaceWith=function(p){for(var a=[],h=0;h<arguments.length;++h)a[h]=arguments[h];h=[];for(var m=[],y=0;y<a.length;y++){var w=a[y];if(w instanceof Element&&P(w)&&m.push(w),w instanceof DocumentFragment)for(w=w.firstChild;w;w=w.nextSibling)h.push(w);else h.push(w)}for(y=P(this),K.apply(this,a),a=0;a<m.length;a++)rt(i,m[a]);if(y)for(rt(i,this),a=0;a<h.length;a++)m=h[a],m instanceof Element&&pt(i,m)}),ut!==void 0&&(u.remove=function(){var p=P(this);ut.call(this),p&&rt(i,this)})}function Wr(i){function l(a,h){Object.defineProperty(a,"innerHTML",{enumerable:h.enumerable,configurable:!0,get:h.get,set:function(m){var y=this,w=void 0;if(P(this)&&(w=[],ee(i,this,function(Pt){Pt!==y&&w.push(Pt)})),h.set.call(this,m),w)for(var N=0;N<w.length;N++){var I=w[N];I.__CE_state===1&&i.disconnectedCallback(I)}return this.ownerDocument.__CE_registry?wt(i,this):Be(i,this),m}})}function u(a,h){a.insertAdjacentElement=function(m,y){var w=P(y);return m=h.call(this,m,y),w&&rt(i,y),P(m)&&pt(i,y),m}}function p(a,h){function m(y,w){for(var N=[];y!==w;y=y.nextSibling)N.push(y);for(w=0;w<N.length;w++)wt(i,N[w])}a.insertAdjacentHTML=function(y,w){if(y=y.toLowerCase(),y==="beforebegin"){var N=this.previousSibling;h.call(this,y,w),m(N||this.parentNode.firstChild,this)}else if(y==="afterbegin")N=this.firstChild,h.call(this,y,w),m(this.firstChild,N);else if(y==="beforeend")N=this.lastChild,h.call(this,y,w),m(N||this.firstChild,null);else if(y==="afterend")N=this.nextSibling,h.call(this,y,w),m(this.nextSibling,N);else throw new SyntaxError("The value provided ("+String(y)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.")}}_&&(Element.prototype.attachShadow=function(a){if(a=_.call(this,a),i.j&&!a.__CE_patched){a.__CE_patched=!0;for(var h=0;h<i.m.length;h++)i.m[h](a)}return this.__CE_shadowRoot=a}),E&&E.get?l(Element.prototype,E):ot&&ot.get?l(HTMLElement.prototype,ot):qr(i,function(a){l(a,{enumerable:!0,configurable:!0,get:function(){return v.call(this,!0).innerHTML},set:function(h){var m=this.localName==="template",y=m?this.content:this,w=e.call(document,this.namespaceURI,this.localName);for(w.innerHTML=h;0<y.childNodes.length;)b.call(y,y.childNodes[0]);for(h=m?w.content:w;0<h.childNodes.length;)d.call(y,h.childNodes[0])}})}),Element.prototype.setAttribute=function(a,h){if(this.__CE_state!==1)return S.call(this,a,h);var m=$.call(this,a);S.call(this,a,h),h=$.call(this,a),i.attributeChangedCallback(this,a,m,h,null)},Element.prototype.setAttributeNS=function(a,h,m){if(this.__CE_state!==1)return A.call(this,a,h,m);var y=k.call(this,a,h);A.call(this,a,h,m),m=k.call(this,a,h),i.attributeChangedCallback(this,h,y,m,a)},Element.prototype.removeAttribute=function(a){if(this.__CE_state!==1)return O.call(this,a);var h=$.call(this,a);O.call(this,a),h!==null&&i.attributeChangedCallback(this,a,h,null,null)},T&&(Element.prototype.toggleAttribute=function(a,h){if(this.__CE_state!==1)return T.call(this,a,h);var m=$.call(this,a),y=m!==null;return h=T.call(this,a,h),y!==h&&i.attributeChangedCallback(this,a,m,h?"":null,null),h}),Element.prototype.removeAttributeNS=function(a,h){if(this.__CE_state!==1)return G.call(this,a,h);var m=k.call(this,a,h);G.call(this,a,h);var y=k.call(this,a,h);m!==y&&i.attributeChangedCallback(this,h,m,y,a)},$t?u(HTMLElement.prototype,$t):x&&u(Element.prototype,x),Qt?p(HTMLElement.prototype,Qt):z&&p(Element.prototype,z),Ye(i,Element.prototype,{prepend:L,append:M}),Yr(i)}var Nn={};function Ur(i){function l(){var u=this.constructor,p=document.__CE_registry.C.get(u);if(!p)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var a=p.constructionStack;if(a.length===0)return a=t.call(document,p.localName),Object.setPrototypeOf(a,u.prototype),a.__CE_state=1,a.__CE_definition=p,Ft(i,a),a;var h=a.length-1,m=a[h];if(m===Nn)throw Error("Failed to construct '"+p.localName+"': This element was already constructed.");return a[h]=Nn,Object.setPrototypeOf(m,u.prototype),Ft(i,m),m}l.prototype=B.prototype,Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:l}),window.HTMLElement=l}function Vr(i){function l(u,p){Object.defineProperty(u,"textContent",{enumerable:p.enumerable,configurable:!0,get:p.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)p.set.call(this,a);else{var h=void 0;if(this.firstChild){var m=this.childNodes,y=m.length;if(0<y&&P(this)){h=Array(y);for(var w=0;w<y;w++)h[w]=m[w]}}if(p.set.call(this,a),h)for(a=0;a<h.length;a++)rt(i,h[a])}}})}Node.prototype.insertBefore=function(u,p){if(u instanceof DocumentFragment){var a=Pe(u);if(u=f.call(this,u,p),P(this))for(p=0;p<a.length;p++)pt(i,a[p]);return u}return a=u instanceof Element&&P(u),p=f.call(this,u,p),a&&rt(i,u),P(this)&&pt(i,u),p},Node.prototype.appendChild=function(u){if(u instanceof DocumentFragment){var p=Pe(u);if(u=d.call(this,u),P(this))for(var a=0;a<p.length;a++)pt(i,p[a]);return u}return p=u instanceof Element&&P(u),a=d.call(this,u),p&&rt(i,u),P(this)&&pt(i,u),a},Node.prototype.cloneNode=function(u){return u=v.call(this,!!u),this.ownerDocument.__CE_registry?wt(i,u):Be(i,u),u},Node.prototype.removeChild=function(u){var p=u instanceof Element&&P(u),a=b.call(this,u);return p&&rt(i,u),a},Node.prototype.replaceChild=function(u,p){if(u instanceof DocumentFragment){var a=Pe(u);if(u=g.call(this,u,p),P(this))for(rt(i,p),p=0;p<a.length;p++)pt(i,a[p]);return u}a=u instanceof Element&&P(u);var h=g.call(this,u,p),m=P(this);return m&&rt(i,p),a&&rt(i,u),m&&pt(i,u),h},C&&C.get?l(Node.prototype,C):jr(i,function(u){l(u,{enumerable:!0,configurable:!0,get:function(){for(var p=[],a=this.firstChild;a;a=a.nextSibling)a.nodeType!==Node.COMMENT_NODE&&p.push(a.textContent);return p.join("")},set:function(p){for(;this.firstChild;)b.call(this,this.firstChild);p!=null&&p!==""&&d.call(this,document.createTextNode(p))}})})}var vt=window.customElements;function An(){var i=new me;Ur(i),Br(i),Ye(i,DocumentFragment.prototype,{prepend:s,append:c}),Vr(i),Wr(i),window.CustomElementRegistry=q,i=new q(i),document.__CE_registry=i,Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:i})}vt&&!vt.forcePolyfill&&typeof vt.define=="function"&&typeof vt.get=="function"||An(),window.__CE_installPolyfill=An}).call(self);const se=1,cn=2,Kr=4,Gn=8,Jr=16,Je=64,Zr=2,Qr=1,to=2,we="[",Kn="]",eo="",Jn=`${Kn}!`,Ze={},jt=Symbol(),On=["touchstart","touchmove","touchend"];function no(t){console.warn("hydration_mismatch")}let Q=!1;function Ct(t){Q=t}let Rt=null,Dt;function ro(t){Rt=t,Dt=t&&t[0]}function Wt(t){if(t.nodeType!==8)return t;var e=t;if(e.data!==we)return t;for(var n=[],r=0;(e=e.nextSibling)!==null;){if(e.nodeType===8){var o=e.data;if(o===we)r+=1;else if(o[0]===Kn){if(r===0)return Rt=n,Dt=n[0],e;r-=1}}n.push(e)}throw no(),Ze}var Ut=Array.isArray,oo=Array.from,Ee=Object.keys,Zn=Object.isFrozen,le=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,io=Object.prototype,so=Array.prototype,lo=Object.getPrototypeOf;const Ot=2,Qn=4,Xt=8,tr=16,yt=32,fn=64,zt=128,xe=256,dt=512,bt=1024,Lt=2048,Mt=4096,Gt=8192,ao=16384,dn=32768,X=Symbol("$state"),uo=Symbol("$state.frozen"),co=Symbol("");function er(t){return t===this.v}function fo(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function ho(t){return!fo(t,this.v)}function po(t){throw new Error("effect_in_teardown")}function vo(){throw new Error("effect_in_unowned_derived")}function mo(t){throw new Error("effect_orphan")}function go(){throw new Error("effect_update_depth_exceeded")}function _o(){throw new Error("hydration_failed")}function yo(t){throw new Error("props_invalid_value")}function bo(){throw new Error("state_unsafe_mutation")}function nt(t){return{f:0,reactions:null,equals:er,v:t,version:0}}function Ce(t){var n;const e=nt(t);return e.equals=ho,U!==null&&U.l!==null&&((n=U.l).s??(n.s=[])).push(e),e}function j(t,e){var n=t.v!==jt;return!_t&&n&&J!==null&&nn()&&J.f&Ot&&bo(),t.equals(e)||(t.v=e,t.version++,nn()&&n&&R!==null&&R.f&dt&&!(R.f&yt)&&(W!==null&&W.includes(t)?(at(R,bt),Me(R)):Tt===null?So([t]):Tt.push(t)),vn(t,bt,!0)),e}function st(t,e=!0,n=null,r){if(typeof t=="object"&&t!=null&&!Zn(t)&&!(uo in t)){if(X in t){const s=t[X];if(s.t===t||s.p===t)return s.p}const o=lo(t);if(o===io||o===so){const s=new Proxy(t,wo);return le(t,X,{value:{s:new Map,v:nt(0),a:Ut(t),i:e,p:s,t},writable:!0,enumerable:!1}),s}}return t}function Ln(t,e=1){j(t,t.v+e)}const wo={defineProperty(t,e,n){if(n.value){const r=t[X],o=r.s.get(e);o!==void 0&&j(o,st(n.value,r.i,r))}return Reflect.defineProperty(t,e,n)},deleteProperty(t,e){const n=t[X],r=n.s.get(e),o=n.a,s=delete t[e];if(o&&s){const c=n.s.get("length"),v=t.length-1;c!==void 0&&c.v!==v&&j(c,v)}return r!==void 0&&j(r,jt),s&&Ln(n.v),s},get(t,e,n){var s;if(e===X)return Reflect.get(t,X);const r=t[X];let o=r.s.get(e);if(o===void 0&&(!(e in t)||(s=Qe(t,e))!=null&&s.writable)&&(o=(r.i?nt:Ce)(st(t[e],r.i,r)),r.s.set(e,o)),o!==void 0){const c=D(o);return c===jt?void 0:c}return Reflect.get(t,e,n)},getOwnPropertyDescriptor(t,e){const n=Reflect.getOwnPropertyDescriptor(t,e);if(n&&"value"in n){const o=t[X].s.get(e);o&&(n.value=D(o))}return n},has(t,e){var s;if(e===X)return!0;const n=t[X],r=Reflect.has(t,e);let o=n.s.get(e);return(o!==void 0||R!==null&&(!r||(s=Qe(t,e))!=null&&s.writable))&&(o===void 0&&(o=(n.i?nt:Ce)(r?st(t[e],n.i,n):jt),n.s.set(e,o)),D(o)===jt)?!1:r},set(t,e,n,r){const o=t[X];let s=o.s.get(e);s===void 0&&(mn(()=>r[e]),s=o.s.get(e)),s!==void 0&&j(s,st(n,o.i,o));const c=o.a,v=!(e in t);if(c&&e==="length")for(let d=n;d<t.length;d+=1){const f=o.s.get(d+"");f!==void 0&&j(f,jt)}if(t[e]=n,v){if(c){const d=o.s.get("length"),f=t.length;d!==void 0&&d.v!==f&&j(d,f)}Ln(o.v)}return!0},ownKeys(t){const e=t[X];return D(e.v),Reflect.ownKeys(t)}};function ke(t){if(t!==null&&typeof t=="object"&&X in t){var e=t[X];if(e)return e.p}return t}function Eo(t,e){return Object.is(ke(t),ke(e))}function nr(t){for(var e=0;e<t.length;e++)t[e]()}const xo=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let Te=!1,ze=!1,tn=[],en=[];function rr(){Te=!1;const t=tn.slice();tn=[],nr(t)}function or(){ze=!1;const t=en.slice();en=[],nr(t)}function ir(t){Te||(Te=!0,queueMicrotask(rr)),tn.push(t)}function Co(t){ze||(ze=!0,xo(or)),en.push(t)}function ko(){Te&&rr(),ze&&or()}function To(t){let e=Ot|bt;R===null&&(e|=zt);const n={deps:null,deriveds:null,equals:er,f:e,first:null,fn:t,last:null,reactions:null,v:null,version:0};if(J!==null&&J.f&Ot){var r=J;r.deriveds===null?r.deriveds=[n]:r.deriveds.push(n)}return n}function sr(t){pn(t);var e=t.deriveds;if(e!==null){t.deriveds=null;for(var n=0;n<e.length;n+=1)zo(e[n])}}function lr(t,e){sr(t);var n=ur(t),r=(qt||t.f&zt)&&t.deps!==null?Lt:dt;at(t,r);var o=t.equals(n);return o||(t.v=n,vn(t,bt,e)),o}function zo(t){sr(t),Oe(t,0),at(t,Gt),t.first=t.last=t.deps=t.reactions=t.fn=null}const ar=0,$o=1;let ye=ar,ae=!1,Bt=!1,hn=!1;function Mn(t){Bt=t}function Rn(t){hn=t}function In(t){_t=t}let Nt=[],Yt=0,J=null,R=null,W=null,Y=0,Tt=null;function So(t){Tt=t}let _t=!1,qt=!1,U=null;function nn(){return U!==null&&U.l===null}function fe(t){var C;var e=t.f,n=(e&bt)!==0,r=(e&zt)!==0;if(n&&!r)return!0;var o=(e&xe)!==0;if(e&Lt||n&&r){var s=t.deps;if(s!==null)for(var c=s.length,v,d,f=0;f<c;f++){var b=s[f];!n&&fe(b)&&(v=lr(b,!0));var g=b.version;if(r){if(g>t.version)return t.version=g,!v;!qt&&!((C=b==null?void 0:b.reactions)!=null&&C.includes(t))&&(d=b.reactions,d===null?b.reactions=[t]:d.push(t))}else{if(t.f&bt)return!0;o&&(g>t.version&&(t.version=g,n=!0),d=b.reactions,d===null?b.reactions=[t]:d.includes(t)||d.push(t))}}r||at(t,dt),o&&(t.f^=xe)}return n}function No(t,e,n){throw t}function ur(t){const e=W,n=Y,r=Tt,o=J,s=qt,c=_t;W=null,Y=0,Tt=null,J=t,qt=!Bt&&(t.f&zt)!==0,_t=!1;try{let v=(0,t.fn)(),d=t.deps;if(W!==null){let f;if(d!==null){const b=d.length,g=Y===0?W:d.slice(0,Y).concat(W),_=g.length>16&&b-Y>1?new Set(g):null;for(f=Y;f<b;f++){const E=d[f];(_!==null?!_.has(E):!g.includes(E))&&cr(t,E)}}if(d!==null&&Y>0)for(d.length=Y+W.length,f=0;f<W.length;f++)d[Y+f]=W[f];else t.deps=d=W;if(!qt)for(f=Y;f<d.length;f++){const b=d[f],g=b.reactions;g===null?b.reactions=[t]:g[g.length-1]!==t&&g.push(t)}}else d!==null&&Y<d.length&&(Oe(t,Y),d.length=Y);return v}finally{W=e,Y=n,Tt=r,J=o,qt=s,_t=c}}function cr(t,e){const n=e.reactions;let r=0;if(n!==null){r=n.length-1;const o=n.indexOf(t);o!==-1&&(r===0?e.reactions=null:(n[o]=n[r],n.pop()))}r===0&&e.f&Ot&&(at(e,Lt),e.f&(zt|xe)||(e.f^=xe),Oe(e,0))}function Oe(t,e){const n=t.deps;if(n!==null){const r=e===0?null:n.slice(0,e);let o;for(o=e;o<n.length;o++){const s=n[o];(r===null||!r.includes(s))&&cr(t,s)}}}function pn(t,e=!0){let n=t.first;t.first=null,t.last=null;for(var r;n!==null;)r=n.next,ve(n,e),n=r}function Le(t){var e=t.f;if(!(e&Gt)){at(t,dt);var n=t.ctx,r=R,o=U;R=t,U=n;try{e&tr||pn(t),mr(t);var s=ur(t);t.teardown=typeof s=="function"?s:null}catch(c){No(c)}finally{R=r,U=o}}}function fr(){Yt>1e3&&(Yt=0,go()),Yt++}function dr(t){const e=t.length;if(e!==0){fr();var n=Bt;Bt=!0;try{for(var r=0;r<e;r++){var o=t[r];if(o.first===null&&!(o.f&yt))Fn([o]);else{var s=[];hr(o,s),Fn(s)}}}finally{Bt=n}}}function Fn(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];!(r.f&(Gt|Mt))&&fe(r)&&Le(r)}}function Ao(){if(ae=!1,Yt>1001)return;const t=Nt;Nt=[],dr(t),ae||(Yt=0)}function Me(t){ye===ar&&(ae||(ae=!0,queueMicrotask(Ao)));for(var e=t;e.parent!==null;){e=e.parent;var n=e.f;if(n&yt){if(!(n&dt))return;at(e,Lt)}}Nt.push(e)}function hr(t,e){var n=t.first,r=[];t:for(;n!==null;){var o=n.f,s=(o&(Gt|Mt))===0,c=o&yt,v=(o&dt)!==0,d=n.first;if(s&&(!c||!v)){if(c&&at(n,dt),o&Xt){if(!c&&fe(n)&&(Le(n),d=n.first),d!==null){n=d;continue}}else if(o&Qn)if(c||v){if(d!==null){n=d;continue}}else r.push(n)}var f=n.next;if(f===null){let C=n.parent;for(;C!==null;){if(t===C)break t;var b=C.next;if(b!==null){n=b;continue t}C=C.parent}}n=f}for(var g=0;g<r.length;g++)d=r[g],e.push(d),hr(d,e)}function It(t,e=!0){var n=ye,r=Nt;try{fr();const s=[];ye=$o,Nt=s,ae=!1,e&&dr(r);var o=t==null?void 0:t();return ko(),(Nt.length>0||s.length>0)&&It(),Yt=0,o}finally{ye=n,Nt=r}}function D(t){const e=t.f;if(e&Gt)return t.v;if(J!==null&&!(J.f&(yt|fn))&&!_t){const n=(J.f&zt)!==0,r=J.deps;W===null&&r!==null&&r[Y]===t&&!(n&&R!==null)?Y++:(r===null||Y===0||r[Y-1]!==t)&&(W===null?W=[t]:W[W.length-1]!==t&&W.push(t)),Tt!==null&&R!==null&&R.f&dt&&!(R.f&yt)&&Tt.includes(t)&&(at(R,bt),Me(R))}return e&Ot&&fe(t)&&lr(t,!1),t.v}function vn(t,e,n){var r=t.reactions;if(r!==null)for(var o=nn(),s=r.length,c=0;c<s;c++){var v=r[c],d=v.f;if(!(d&bt||(!n||!o)&&v===R)){at(v,e);var f=(d&Lt)!==0,b=(d&zt)!==0;(d&dt||f&&b)&&(v.f&Ot?vn(v,Lt,n):Me(v))}}}function mn(t){const e=_t;try{return _t=!0,t()}finally{_t=e}}const Do=~(bt|Lt|dt);function at(t,e){t.f=t.f&Do|e}function Oo(t){return typeof t=="object"&&t!==null&&typeof t.f=="number"}function de(t,e=!1,n){U={p:U,c:null,e:null,m:!1,s:t,x:null,l:null},e||(U.l={s:null,u:null,r1:[],r2:nt(!1)})}function he(t){const e=U;if(e!==null){t!==void 0&&(e.x=t);const r=e.e;if(r!==null){e.e=null;for(var n=0;n<r.length;n++)Jt(r[n])}U=e.p,e.m=!0}return t||{}}function Z(t){return Oo(t)?D(t):t}function Lo(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function gn(t){if(Ut(t))for(var e=0;e<t.length;e++){var n=t[e];n.isConnected&&n.remove()}else t.isConnected&&t.remove()}function Mo(t){R===null&&J===null&&mo(),hn&&po()}function Hn(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function Kt(t,e,n){var r=(t&fn)!==0,o={ctx:U,deps:null,dom:null,f:t|bt,first:null,fn:e,last:null,next:null,parent:r?null:R,prev:null,teardown:null,transitions:null};if(J!==null&&!r){var s=J.f;s&Ot&&(s&zt&&vo(),R!==null&&Hn(o,R)),Hn(o,J)}if(n){var c=Bt;try{Mn(!0),Le(o),o.f|=ao}finally{Mn(c)}}else e!==null&&Me(o);return o}function pr(t){const e=Kt(Xt,null,!1);return at(e,dt),e.teardown=t,e}function rn(t){Mo();var e=R!==null&&(R.f&Xt)!==0&&U!==null&&!U.m;if(e){var n=U;(n.e??(n.e=[])).push(t)}else{var r=Jt(t);return r}}function Ro(t){const e=Kt(fn,t,!0);return()=>{ve(e)}}function Jt(t){return Kt(Qn,t,!1)}function pe(t){return Kt(Xt,t,!0)}function gt(t){return pe(t)}function vr(t,e=0){return Kt(Xt|tr|e,t,!0)}function ue(t){return Kt(Xt|yt,t,!0)}function mr(t){var e=t.teardown;if(e!==null){const n=hn,r=_t;Rn(!0),In(!0);try{e.call(null)}finally{Rn(n),In(r)}}}function ve(t,e=!0){var n=t.dom;if(n!==null&&e&&gn(n),pn(t,e),Oe(t,0),at(t,Gt),t.transitions)for(const c of t.transitions)c.stop();mr(t);var r=t.parent;if(r!==null&&t.f&yt&&r.first!==null){var o=t.prev,s=t.next;o!==null?s!==null?(o.next=s,s.prev=o):(o.next=null,r.last=o):s!==null?(s.prev=null,r.first=s):(r.first=null,r.last=null)}t.next=t.prev=t.teardown=t.ctx=t.dom=t.deps=t.parent=t.fn=null}function on(t,e){var n=[];_n(t,n,!0),gr(n,()=>{ve(t),e&&e()})}function gr(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var o of t)o.out(r)}else e()}function _n(t,e,n){if(!(t.f&Mt)){if(t.f^=Mt,t.transitions!==null)for(const c of t.transitions)(c.is_global||n)&&e.push(c);for(var r=t.first;r!==null;){var o=r.next,s=(r.f&dn)!==0||(r.f&yt)!==0;_n(r,e,s?n:!1),r=o}}}function $e(t){_r(t,!0)}function _r(t,e){if(t.f&Mt){t.f^=Mt,fe(t)&&Le(t);for(var n=t.first;n!==null;){var r=n.next,o=(n.f&dn)!==0||(n.f&yt)!==0;_r(n,o?e:!1),n=r}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||e)&&s.in()}}var Se,St;function yr(){if(Se===void 0){Se=window,St=document;var t=Element.prototype;t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function Zt(){return document.createTextNode("")}function lt(t){const e=t.firstChild;return Q?e===null?t.appendChild(Zt()):Wt(e):e}function Re(t,e){return Q?Wt(Dt):t.firstChild}function F(t,e=!1){var n=t.nextSibling;if(!Q)return n;var r=n.nodeType;if(r===8&&n.data===eo)return F(n,e);if(e&&r!==3){var o=Zt(),s=R.dom;return s.unshift(o),n==null||n.before(o),o}return Wt(n)}function yn(t){t.textContent=""}function Io(t){return document.createElement(t)}function Fo(t,e,n,r){function o(s){if(r.capture||sn(e,s),!s.cancelBubble)return n.call(this,s)}return t.startsWith("pointer")||t==="wheel"?ir(()=>{e.addEventListener(t,o,r)}):e.addEventListener(t,o,r),o}function mt(t,e,n,r,o){var s={capture:r,passive:o},c=Fo(t,e,n,s);(e===document.body||e===window||e===document)&&pr(()=>{e.removeEventListener(t,c,s)})}function br(t){for(var e=0;e<t.length;e++)wr.add(t[e]);for(var n of ln)n(t)}function sn(t,e){var S;var n=t.ownerDocument,r=e.type,o=((S=e.composedPath)==null?void 0:S.call(e))||[],s=o[0]||e.target,c=0,v=e.__root;if(v){var d=o.indexOf(v);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var f=o.indexOf(t);if(f===-1)return;d<=f&&(c=d+1)}s=o[c]||e.target,le(e,"currentTarget",{configurable:!0,get(){return s||n}});try{for(var b,g=[];s!==null;){var C=s.parentNode||s.host||null;try{var _=s["__"+r];if(_!==void 0&&!s.disabled)if(Ut(_)){var[E,...$]=_;E.apply(s,[e,...$])}else _.call(s,e)}catch(O){b?g.push(O):b=O}if(e.cancelBubble||C===t||C===null||s===t)break;s=C}if(b){for(let O of g)queueMicrotask(()=>{throw O});throw b}}finally{e.__root=t,s=t}}const wr=new Set,ln=new Set;function Ve(t,e){(t.__t??(t.__t=t.nodeValue))!==e&&(t.nodeValue=t.__t=e)}function Er(t,e){const n=e.anchor??e.target.appendChild(Zt());return It(()=>xr(t,{...e,anchor:n}),!1)}function Ho(t,e){const n=e.target,r=Rt;try{return It(()=>{Ct(!0);for(var o=n.firstChild;o&&(o.nodeType!==8||o.data!==we);)o=o.nextSibling;if(!o)throw Ze;const s=Wt(o),c=xr(t,{...e,anchor:s});return Ct(!1),c},!1)}catch(o){if(o===Ze)return e.recover===!1&&_o(),yr(),yn(n),Ct(!1),Er(t,e);throw o}finally{Ct(!!r),ro(r)}}function xr(t,{target:e,anchor:n,props:r={},events:o,context:s,intro:c=!1}){yr();const v=new Set,d=sn.bind(null,e),f=sn.bind(null,document),b=_=>{for(let E=0;E<_.length;E++){const $=_[E];v.has($)||(v.add($),e.addEventListener($,d,On.includes($)?{passive:!0}:void 0),document.addEventListener($,f,On.includes($)?{passive:!0}:void 0))}};b(oo(wr)),ln.add(b);let g;const C=Ro(()=>(ue(()=>{if(s){de({});var _=U;_.c=s}o&&(r.$$events=o),g=t(n,r)||{},s&&he()}),()=>{for(const _ of v)e.removeEventListener(_,d);ln.delete(b),an.delete(g)}));return an.set(g,C),g}let an=new WeakMap;function Po(t){const e=an.get(t);e==null||e()}async function bn(t,e,n){await Promise.resolve();const r=jo(t);if(!r.getElementById(e)){const o=Io("style");o.id=e,o.textContent=n,(r.head||r).appendChild(o)}}function jo(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ce(t,e,n,r=null,o=!1){var s=null,c=null,v=null,d=o?dn:0;vr(()=>{if(v===(v=!!e()))return;let f=!1;if(Q){const b=t.data===Jn;v===b&&(gn(Rt),Ct(!1),f=!0)}v?(s?$e(s):s=ue(()=>n(t)),c&&on(c,()=>{c=null})):(c?$e(c):r&&(c=ue(()=>r(t))),s&&on(s,()=>{s=null})),f&&Ct(!0)},d)}let Xe=null;function qo(t,e){return e}function Bo(t,e,n){for(var r=[],o=t.length,s=0;s<o;s++)_n(t[s].e,r,!0);var c=o>0&&r.length===0&&e!==null;if(c){var v=e.parentNode;yn(v),v.append(e),n.clear(),kt(t[0].prev,t[o-1].next)}gr(r,()=>{for(var d=0;d<o;d++){var f=t[d];c||(n.delete(f.k),f.o.remove(),kt(f.prev,f.next)),ve(f.e,!c)}})}function wn(t,e,n,r,o,s=null){var c={flags:e,items:new Map,next:null},v=(e&Gn)!==0;if(v){var d=t;t=Q?Wt(d.firstChild):d.appendChild(Zt())}var f=null;vr(()=>{var b=n(),g=Ut(b)?b:b==null?[]:Array.from(b),C=g.length,_=c.flags;_&Je&&!Zn(g)&&!(X in g)&&(_^=Je,_&Kr&&!(_&se)&&(_^=se));let E=!1;if(Q){var $=t.data===Jn;$!==(C===0)&&(gn(Rt),Ct(!1),E=!0)}if(Q){for(var S=Dt,O=c,T,k=0;k<C;k++){if(S.nodeType!==8||S.data!==we){E=!0,Ct(!1);break}var A=S;S=Wt(S);var G=g[k],x=r(G,k);T=Cr(A,S,O,null,G,x,k,o,_),c.items.set(x,T),S=S.nextSibling,O=T}if(C>0)for(;S!==t;){var z=S.nextSibling;S.remove(),S=z}}Q||Yo(g,c,t,o,_,r),s!==null&&(C===0?f?$e(f):f=ue(()=>s(t)):f!==null&&on(f,()=>{f=null})),E&&Ct(!0)})}function Yo(t,e,n,r,o,s){var B,ot,$t,Qt;var c=(o&Jr)!==0,v=(o&(se|cn))!==0,d=t.length,f=e.items,b=e.next,g=b,C=new Set,_=e,E=new Set,$=[],S=[],O,T,k,A;if(c)for(A=0;A<d;A+=1)O=t[A],T=s(O,A),k=f.get(T),k!==void 0&&((B=k.a)==null||B.measure(),E.add(k));for(A=0;A<d;A+=1){if(O=t[A],T=s(O,A),k=f.get(T),k===void 0){var G=Zt(),x=g?g.o:n;x.before(G),_=Cr(G,x,_,_.next,O,T,A,r,o),f.set(T,_),$=[],S=[],g=_.next;continue}if(v&&Wo(k,O,A,o),k.e.f&Mt&&($e(k.e),c&&((ot=k.a)==null||ot.unfix(),E.delete(k))),k!==g){if(C.has(k)){if($.length<S.length){var z=S[0],L;_=z.prev;var M=$[0],H=$[$.length-1];for(L=0;L<$.length;L+=1)Pn($[L],z,n);for(L=0;L<S.length;L+=1)C.delete(S[L]);kt(M.prev,H.next),kt(_,M),kt(H,z),g=z,_=H,A-=1,$=[],S=[]}else C.delete(k),Pn(k,g,n),kt(k.prev,k.next),kt(k,_.next),kt(_,k),_=k;continue}for($=[],S=[];g!==null&&g.k!==T;)C.add(g),S.push(g),g=g.next;if(g===null)continue;k=g}$.push(k),_=k,g=k.next}const V=Array.from(C);for(;g!==null;)V.push(g),g=g.next;var K=V.length;if(K>0){var ut=o&Gn&&d===0?n:null;if(c){for(A=0;A<K;A+=1)($t=V[A].a)==null||$t.measure();for(A=0;A<K;A+=1)(Qt=V[A].a)==null||Qt.fix()}Bo(V,ut,f)}c&&Jt(()=>{mn(()=>{var te;for(k of E)(te=k.a)==null||te.apply()})})}function Wo(t,e,n,r){r&se&&j(t.v,e),r&cn?j(t.i,n):t.i=n}function Cr(t,e,n,r,o,s,c,v,d){var f=Xe;try{var b=(d&se)!==0,g=(d&Je)===0,C=b?g?Ce(o):nt(o):o,_=d&cn?nt(c):c,E={i:_,v:C,k:s,a:null,e:null,o:t,prev:n,next:r};return n.next=E,r!==null&&(r.prev=E),Xe=E,E.e=ue(()=>v(e,C,_)),E}finally{Xe=f}}function Pn(t,e,n){for(var r=t.next?t.next.o:n,o=e?e.o:n,s=t.o;s!==r;){var c=s.nextSibling;o.before(s),s=c}}function kt(t,e){t.next=e,e!==null&&(e.prev=t)}function Ne(t,e=R){var n=e.dom;return n===null?e.dom=t:(Ut(n)||(n=e.dom=[n]),Ut(t)?n.push(...t):n.push(t)),t}function ht(t,e){var n=(e&Qr)!==0,r=(e&to)!==0,o;return()=>{if(Q)return Ne(n?Rt:Dt),Dt;o||(o=Lo(t),n||(o=o.firstChild));var s=r?document.importNode(o,!0):o.cloneNode(!0);return Ne(n?[...s.childNodes]:s),s}}function kr(){if(Q)return Ne(Rt),Dt;var t=document.createDocumentFragment(),e=Zt();return t.append(e),Ne([e]),t}function et(t,e){Q||t.before(e)}function Uo(t,e){{const n=document.body;t.autofocus=!0,Jt(()=>{document.activeElement===n&&t.focus()})}}function Vo(t){Q&&t.firstChild!==null&&yn(t)}let jn=!1;function Tr(){jn||(jn=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const n of t.target.elements)(e=n.__on_r)==null||e.call(n)})},{capture:!0}))}function Xo(t){if(Q){let e=!1;const n=()=>{if(e)return;e=!0;const r=t.getAttribute("value");ft(t,"value",null),ft(t,"checked",null),r&&(t.value=r)};t.__on_r=n,Co(n),Tr()}}function Go(t,e){var n=t.__attributes??(t.__attributes={});n.value!==(n.value=e)&&(t.value=e)}function ft(t,e,n){n=n==null?null:n+"";var r=t.__attributes??(t.__attributes={});Q&&(r[e]=t.getAttribute(e),e==="src"||e==="href"||e==="srcset")||r[e]!==(r[e]=n)&&(e==="loading"&&(t[co]=n),n===null?t.removeAttribute(e):t.setAttribute(e,n))}function ie(t,e,n){n?t.classList.add(e):t.classList.remove(e)}function zr(t,e,n,r=n){t.addEventListener(e,n);const o=t.__on_r;o?t.__on_r=()=>{o(),r()}:t.__on_r=r,Tr()}function Ko(t,e,n){zr(t,"input",()=>{n(qn(t)?Bn(t.value):t.value)}),pe(()=>{var r=e();t.__value=r,!(qn(t)&&r===Bn(t.value))&&(t.type==="date"&&!r&&!t.value||(t.value=r??""))})}function Jo(t,e,n,r,o){var s=n.getAttribute("type")==="checkbox",c=t;if(e!==null)for(var v of e){var d=c;c=d[v],c===void 0&&(c=d[v]=[])}c.push(n),zr(n,"change",()=>{var f=n.__value;s&&(f=Zo(c,f,n.checked)),o(f)},()=>o(s?[]:null)),pe(()=>{var f=r();s?(f=f||[],n.checked=ke(f).includes(ke(n.__value))):n.checked=Eo(n.__value,f)}),pr(()=>{var f=c.indexOf(n);f!==-1&&c.splice(f,1)}),Jt(()=>{c.sort((f,b)=>f.compareDocumentPosition(b)===4?-1:1)})}function Zo(t,e,n){for(var r=new Set,o=0;o<t.length;o+=1)t[o].checked&&r.add(t[o].__value);return n||r.delete(e),Array.from(r)}function qn(t){var e=t.type;return e==="number"||e==="range"}function Bn(t){return t===""?null:+t}function Yn(t,e){var r;var n=t&&((r=t[X])==null?void 0:r.t);return t===e||n===e}function un(t,e,n,r){Jt(()=>{var o,s;return pe(()=>{o=s,s=[],mn(()=>{t!==n(...s)&&(e(t,...s),o&&Yn(n(...o),t)&&e(null,...o))})}),()=>{ir(()=>{s&&Yn(n(...s),t)&&e(null,...s)})}})}function Ie(t,e,n,r){var _;var o=(n&Zr)!==0,s=t[e],c=(_=Qe(t,e))==null?void 0:_.set,v=r,d=()=>v;s===void 0&&r!==void 0&&(c&&o&&yo(),s=d(),c&&c(s));var f;if(f=()=>{var E=t[e];return E===void 0?d():E},c)return function(E){return arguments.length===1?(c(E),E):f()};var b=!1,g=Ce(s),C=To(()=>{var E=f(),$=D(g);return b?(b=!1,$):g.v=E});return function(E){var $=D(C);return arguments.length>0?(C.equals(E)||(b=!0,j(g,E),D(C),C.version++),E):$}}function Qo(t){return new ti(t)}var Et,it;class ti{constructor(e){We(this,Et,void 0);We(this,it,void 0);const n=st({...e.props||{},$$events:{}},!1);Ue(this,it,(e.hydrate?Ho:Er)(e.component,{target:e.target,props:n,context:e.context,intro:e.intro,recover:e.recover})),Ue(this,Et,n.$$events);for(const r of Object.keys(tt(this,it)))r==="$set"||r==="$destroy"||r==="$on"||le(this,r,{get(){return tt(this,it)[r]},set(o){tt(this,it)[r]=o},enumerable:!0});tt(this,it).$set=r=>{Object.assign(n,r)},tt(this,it).$destroy=()=>{Po(tt(this,it))}}$set(e){tt(this,it).$set(e)}$on(e,n){tt(this,Et)[e]=tt(this,Et)[e]||[];const r=(...o)=>n.call(this,...o);return tt(this,Et)[e].push(r),()=>{tt(this,Et)[e]=tt(this,Et)[e].filter(o=>o!==r)}}$destroy(){tt(this,it).$destroy()}}Et=new WeakMap,it=new WeakMap;let $r;typeof HTMLElement=="function"&&($r=class extends HTMLElement{constructor(e,n,r){super();ct(this,"$$ctor");ct(this,"$$s");ct(this,"$$c");ct(this,"$$cn",!1);ct(this,"$$d",{});ct(this,"$$r",!1);ct(this,"$$p_d",{});ct(this,"$$l",{});ct(this,"$$l_u",new Map);ct(this,"$$me");this.$$ctor=e,this.$$s=n,r&&this.attachShadow({mode:"open"})}addEventListener(e,n,r){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(n),this.$$c){const o=this.$$c.$on(e,n);this.$$l_u.set(n,o)}super.addEventListener(e,n,r)}removeEventListener(e,n,r){if(super.removeEventListener(e,n,r),this.$$c){const o=this.$$l_u.get(n);o&&(o(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(o){return s=>{const c=document.createElement("slot");o!=="default"&&(c.name=o),et(s,c)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=ei(this);for(const o of this.$$s)o in r&&(o==="default"&&!this.$$d.children?(this.$$d.children=e(o),n.default=!0):n[o]=e(o));for(const o of this.attributes){const s=this.$$g_p(o.name);s in this.$$d||(this.$$d[s]=be(s,o.value,this.$$p_d,"toProp"))}for(const o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=Qo({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=pe(()=>{var o;this.$$r=!0;for(const s of Ee(this.$$c)){if(!((o=this.$$p_d[s])!=null&&o.reflect))continue;this.$$d[s]=this.$$c[s];const c=be(s,this.$$d[s],this.$$p_d,"toAttribute");c==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,c)}this.$$r=!1});for(const o in this.$$l)for(const s of this.$$l[o]){const c=this.$$c.$on(o,s);this.$$l_u.set(s,c)}this.$$l={}}}attributeChangedCallback(e,n,r){var o;this.$$r||(e=this.$$g_p(e),this.$$d[e]=be(e,r,this.$$p_d,"toProp"),(o=this.$$c)==null||o.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),ve(this.$$me),this.$$c=void 0)})}$$g_p(e){return Ee(this.$$p_d).find(n=>this.$$p_d[n].attribute===e||!this.$$p_d[n].attribute&&n.toLowerCase()===e)||e}});function be(t,e,n,r){var s;const o=(s=n[t])==null?void 0:s.type;if(e=o==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(o){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function ei(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function Fe(t,e,n,r,o,s){let c=class extends $r{constructor(){super(t,n,o),this.$$p_d=e}static get observedAttributes(){return Ee(e).map(v=>(e[v].attribute||v).toLowerCase())}};return Ee(e).forEach(v=>{le(c.prototype,v,{get(){return this.$$c&&v in this.$$c?this.$$c[v]:this.$$d[v]},set(d){var f;d=be(v,d,e),this.$$d[v]=d,(f=this.$$c)==null||f.$set({[v]:d})}})}),r.forEach(v=>{le(c.prototype,v,{get(){var d;return(d=this.$$c)==null?void 0:d[v]}})}),t.element=c,c}const Vt=new Map([["yellow","#F8B920"],["red","#FF4646"],["blue","#0064FF"],["green","#00C564"]]),ni=["SCRIPT","STYLE","NOSCRIPT","TEXTAREA","OPTION"];function Sr(t){const e=t.map(c=>c.trim().toLocaleLowerCase()),n=e.map(()=>({start:null,end:null,shift:0})),r=e.map(()=>[]),o=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,c=>{var v,d;return ni.includes((v=c.parentNode)==null?void 0:v.tagName)||!((d=c.parentNode)!=null&&d.checkVisibility())?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});let s;for(;s=o.nextNode();)if(s!=null&&s.nodeValue)for(let c=0;c<s.nodeValue.length;c++){const v=s.nodeValue[c].toLocaleLowerCase().trim();v&&e.forEach((d,f)=>{var g;for(;d[n[f].shift]&&!d[n[f].shift].trim();)n[f].shift++;let b=d[n[f].shift]===v;if(!b&&n[f].shift&&(n[f].shift=0,b=d[n[f].shift]===v),b&&(n[f].shift||(n[f].start=[s,c]),n[f].end=[s,c],n[f].shift++),n[f].shift>=d.length){const C=document.createRange();C.setStart(n[f].start[0],n[f].start[1]),C.setEnd(n[f].end[0],n[f].end[1]+1),!C.collapsed&&((g=C.commonAncestorContainer.parentElement)!=null&&g.checkVisibility())?r[f].push(C):C.detach(),b=!1}b||(n[f].shift=0,n[f].start=null,n[f].end=null)})}return r}const At=`rh-${new Date().getTime()}-`,He="highlights"in CSS;function ri(t){if(!t.length&&!CSS.highlights.size)return;const e=[];if(CSS.highlights.clear(),t.length){const r=Sr(t.map(({text:o})=>o||""));for(const o in t){if(!r[o].length)continue;const{_id:s,color:c}=t[o],v=`${At}${s}`;CSS.highlights.set(v,new Highlight(...r[o]));const d=r[o][0].getBoundingClientRect();e.push(`
                ::highlight(${v}) {
                    all: unset;
                    background-color: color-mix(in srgb, ${Vt.get(c)||c}, transparent 50%) !important;
                }

                :root {
                    --highlight-${s}-top: ${(100/document.documentElement.scrollHeight*(window.scrollY+d.top-10)).toFixed(2)}%;
                }
            `);for(const f of r[o])f.detach()}}const n=(()=>{let r=document.getElementById(At);return r||(r=document.createElement("style"),r.id=At,document.head.appendChild(r)),r})();n.innerHTML=e.join(`
`)}function oi(){var t;(t=document.getElementById(At))==null||t.remove()}function ii(t){var e;for(const[n,r]of CSS.highlights){const o=n.replace(At,"");if(t==o)for(const s of r){(e=s.startContainer.parentElement)==null||e.scrollIntoView({behavior:"smooth",block:"start"});break}}}function si(t){let e;for(const[n,r]of CSS.highlights)for(const o of r){const s=t.compareBoundaryPoints(Range.START_TO_START,o),c=t.compareBoundaryPoints(Range.END_TO_END,o);(s==0&&c==0||t!=null&&t.collapsed&&s>=0&&c<=0)&&(e=[n.replace(At,""),o])}if(e)return e[0].replace(At,"")}const xt=`rh-${new Date().getTime()}`;function li(t){const e=document.body.querySelectorAll(`.${xt}`);if(!t.length&&!e.length)return;e.forEach(s=>s.outerHTML=s.innerText);const n=[],r=Sr(t.map(({text:s})=>s||""));for(const s in t){const{_id:c,color:v}=t[s];for(const d of r[s]){const f=document.createElement("mark");f.className=xt,f.setAttribute("data-id",String(c)),f.append(d.extractContents()),d.insertNode(f),d.detach()}n.push(`
            .${xt}[data-id="${c}"] {
                all: unset;
                display: inline-block;
                background-color: ${fi(Vt.get(v)||v,.5)} !important;
            }
        `)}const o=(()=>{let s=document.getElementById(xt);return s||(s=document.createElement("style"),s.id=xt,document.head.appendChild(s)),s})();o.innerHTML=n.join(`
`)}function ai(){var t;document.body.querySelectorAll(`.${xt}`).forEach(e=>e.outerHTML=e.innerText),(t=document.getElementById(xt))==null||t.remove()}function ui(t){const e=document.body.querySelector(`.${xt}[data-id="${t}"]`);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function ci(t){const e=t.commonAncestorContainer.nodeType==Node.ELEMENT_NODE?t.commonAncestorContainer:t.commonAncestorContainer.parentElement;if((e==null?void 0:e.className)==xt){if(!t.collapsed){const n=new Range;n.selectNodeContents(t.commonAncestorContainer);const r=t.compareBoundaryPoints(Range.START_TO_START,n),o=t.compareBoundaryPoints(Range.END_TO_END,n);if(n.detach(),r!=0||o!=0)return}return e.getAttribute("data-id")||void 0}}function fi(t,e){if(!t)return t;const n=parseInt(t.slice(1,3),16),r=parseInt(t.slice(3,5),16),o=parseInt(t.slice(5,7),16);return`rgba(${n}, ${r}, ${o}, ${e})`}function Ae(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var di=typeof global=="object"&&global&&global.Object===Object&&global,hi=typeof self=="object"&&self&&self.Object===Object&&self,Nr=di||hi||Function("return this")(),Ge=function(){return Nr.Date.now()},pi=/\s/;function vi(t){for(var e=t.length;e--&&pi.test(t.charAt(e)););return e}var mi=/^\s+/;function gi(t){return t&&t.slice(0,vi(t)+1).replace(mi,"")}var De=Nr.Symbol,Ar=Object.prototype,_i=Ar.hasOwnProperty,yi=Ar.toString,ne=De?De.toStringTag:void 0;function bi(t){var e=_i.call(t,ne),n=t[ne];try{t[ne]=void 0;var r=!0}catch{}var o=yi.call(t);return r&&(e?t[ne]=n:delete t[ne]),o}var wi=Object.prototype,Ei=wi.toString;function xi(t){return Ei.call(t)}var Ci="[object Null]",ki="[object Undefined]",Wn=De?De.toStringTag:void 0;function Ti(t){return t==null?t===void 0?ki:Ci:Wn&&Wn in Object(t)?bi(t):xi(t)}function zi(t){return t!=null&&typeof t=="object"}var $i="[object Symbol]";function Si(t){return typeof t=="symbol"||zi(t)&&Ti(t)==$i}var Un=NaN,Ni=/^[-+]0x[0-9a-f]+$/i,Ai=/^0b[01]+$/i,Di=/^0o[0-7]+$/i,Oi=parseInt;function Vn(t){if(typeof t=="number")return t;if(Si(t))return Un;if(Ae(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Ae(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=gi(t);var n=Ai.test(t);return n||Di.test(t)?Oi(t.slice(2),n?2:8):Ni.test(t)?Un:+t}var Li="Expected a function",Mi=Math.max,Ri=Math.min;function Ii(t,e,n){var r,o,s,c,v,d,f=0,b=!1,g=!1,C=!0;if(typeof t!="function")throw new TypeError(Li);e=Vn(e)||0,Ae(n)&&(b=!!n.leading,g="maxWait"in n,s=g?Mi(Vn(n.maxWait)||0,e):s,C="trailing"in n?!!n.trailing:C);function _(x){var z=r,L=o;return r=o=void 0,f=x,c=t.apply(L,z),c}function E(x){return f=x,v=setTimeout(O,e),b?_(x):c}function $(x){var z=x-d,L=x-f,M=e-z;return g?Ri(M,s-L):M}function S(x){var z=x-d,L=x-f;return d===void 0||z>=e||z<0||g&&L>=s}function O(){var x=Ge();if(S(x))return T(x);v=setTimeout(O,$(x))}function T(x){return v=void 0,C&&r?_(x):(r=o=void 0,c)}function k(){v!==void 0&&clearTimeout(v),f=0,r=d=o=v=void 0}function A(){return v===void 0?c:T(Ge())}function G(){var x=Ge(),z=S(x);if(r=arguments,o=this,d=x,z){if(v===void 0)return E(d);if(g)return clearTimeout(v),v=setTimeout(O,e),_(d)}return v===void 0&&(v=setTimeout(O,e)),c}return G.cancel=k,G.flush=A,G}var Fi="Expected a function";function Dr(t,e,n){var r=!0,o=!0;if(typeof t!="function")throw new TypeError(Fi);return Ae(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Ii(t,e,{leading:r,maxWait:e,trailing:o})}function Or(t){return He?ri(t):li(t)}const Hi=Dr(Or,500);function Ke(t){return t.length?Hi(t):Or(t)}function Pi(){return He?oi():ai()}function Lr(t){return He?ii(t):ui(t)}function Mr(){const t=document.getSelection();if(t!=null&&t.rangeCount)return t.getRangeAt(0)}function oe(){const t=document.getSelection();t!=null&&t.rangeCount&&t.removeAllRanges()}function ji(t){return He?si(t):ci(t)}function Xn(t){if(!t)return"";var e=document.createElement("div");e.appendChild(t.cloneContents().cloneNode(!0)),document.body.appendChild(e);const n=e.innerText;return document.body.removeChild(e),e=void 0,n}function qi(t,e,n){let r=nt(st([])),o=nt(!1),s=nt(!1),c=nt(void 0);function v(_){const E=ji(_);if(E)return D(r).find(S=>S._id==E);if(Xn(_).trim())return{text:Xn(_).trim(),color:"yellow"}}function d(_){const E={..._._id?{_id:_._id}:{},..._.text?{text:_.text}:{},..._.note?{note:_.note}:{},..._.color?{color:_.color}:{}};if(!E.text)return;const $=D(r).findIndex(S=>{var O,T;return S._id==E._id||((O=S.text)==null?void 0:O.toLocaleLowerCase().trim())===((T=E.text)==null?void 0:T.toLocaleLowerCase().trim())});$!=-1?(D(r)[$]=E,e(E)):(D(r).push(E),t(E))}function f({_id:_}){j(r,st(D(r).filter(E=>E._id!=_))),n({_id:_})}function b(_){j(c,st(JSON.parse(JSON.stringify(_))))}function g(){D(c)&&(d(D(c)),j(c,void 0))}function C(){j(c,void 0)}return{get highlights(){return D(r)},set highlights(_){j(r,st(_))},get pro(){return D(o)},set pro(_){j(o,st(_))},get nav(){return D(s)},set nav(_){j(s,st(_))},get draft(){return D(c)},find:v,upsert:d,remove:f,setDraft:b,draftSubmit:g,draftCancel:C}}const Bi="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Bi);function Rr(){var t;return(t=navigator==null?void 0:navigator.userAgentData)!=null&&t.mobile?!0:/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)}var Yi=ht('<button type="submit" class="svelte-17ezxht"><span class="color svelte-17ezxht"></span></button>'),Wi=ht('<button type="submit" value="add" title="Create highlight" class="svelte-17ezxht"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="svelte-17ezxht"><g class="svelte-17ezxht"><path d="M12.974,8.731c-.474,3.691-3.724,4.113-6.974,3.519" fill="none" stroke-linecap="round" stroke-linejoin="round" class="svelte-17ezxht"></path><path d="M2.75,15.25S4.062,3.729,15.25,2.75c-.56,.976-.573,2.605-.946,4.239-.524,2.011-2.335,2.261-4.554,2.261" fill="none" stroke-linecap="round" stroke-linejoin="round" class="svelte-17ezxht"></path></g></svg></button>'),Ui=ht('<button type="submit" value="remove" title="Delete highlight" class="svelte-17ezxht"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="svelte-17ezxht"><g class="svelte-17ezxht"><line x1="2.75" y1="4.25" x2="15.25" y2="4.25" fill="none" stroke-linecap="round" stroke-linejoin="round" class="svelte-17ezxht"></line><path d="M6.75,4.25v-1.5c0-.552,.448-1,1-1h2.5c.552,0,1,.448,1,1v1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="svelte-17ezxht"></path><path d="M13.5,6.75l-.4,7.605c-.056,1.062-.934,1.895-1.997,1.895H6.898c-1.064,0-1.941-.833-1.997-1.895l-.4-7.605" fill="none" stroke-linecap="round" stroke-linejoin="round" class="svelte-17ezxht"></path></g></svg></button>'),Vi=ht('<dialog class="svelte-17ezxht"><form method="dialog" class="svelte-17ezxht"><!> <button type="submit" value="note" title="Add note" class="svelte-17ezxht"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="svelte-17ezxht"><g class="svelte-17ezxht"><path stroke-linecap="round" stroke-linejoin="round" d="M9,1.75C4.996,1.75,1.75,4.996,1.75,9c0,1.319,.358,2.552,.973,3.617,.43,.806-.053,2.712-.973,3.633,1.25,.068,2.897-.497,3.633-.973,.489,.282,1.264,.656,2.279,.848,.433,.082,.881,.125,1.338,.125,4.004,0,7.25-3.246,7.25-7.25S13.004,1.75,9,1.75Z" class="svelte-17ezxht"></path><path stroke-width="0" d="M9,10c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" class="svelte-17ezxht"></path><path stroke-width="0" d="M5.5,10c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" class="svelte-17ezxht"></path><path stroke-width="0" d="M12.5,10c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" class="svelte-17ezxht"></path></g></svg></button> <!></form></dialog>');function Ir(t,e){de(e,!0);let n=Ie(e,"store",7),r,o=nt(void 0),s=nt(!1);function c(x){if(!D(o))return;const z=x.currentTarget.returnValue;switch(x.currentTarget.returnValue="",z){case"add":e.store.upsert(D(o)),oe();break;case"note":e.store.setDraft(D(o)),oe();break;case"remove":e.store.remove(D(o)),oe();break;default:if(Vt.has(z)){e.store.upsert({...D(o),color:z}),oe();return}break}}function v(){j(s,!0)}function d(){j(s,!1),f()}function f(){if(D(s)){r==null||r.close();return}requestAnimationFrame(()=>{const x=Mr(),z=x&&e.store.find(x);if(!x||!(z!=null&&z._id)&&!x.toString().trim()){r==null||r.close();return}j(o,st(z)),r.inert=!0,r==null||r.show(),r.inert=!1;const L=x.getBoundingClientRect(),M=Math.max(L.x,10)+window.scrollX,H=window.innerWidth-Math.max(L.x,10)-window.scrollX-L.width,V=Math.max(L.y,40)+window.scrollY+L.height+4,K=window.innerHeight-Math.max(L.y,40)-window.scrollY+4,ut=M<window.innerWidth/2+window.scrollX,B=V<window.innerHeight/2+window.scrollY;r==null||r.style.setProperty("left",ut?`${M}px`:"unset"),r==null||r.style.setProperty("right",ut?"unset":`${H}px`),r==null||r.style.setProperty("top",B?`${V}px`:"unset"),r==null||r.style.setProperty("bottom",B?"unset":`${K}px`)})}const b=Dr(f,200,{leading:!0,trailing:!0});var g=Vi();mt("mousedown",St,v,!1),mt("touchstart",St,v,!1,!0),mt("mouseup",St,d,!1),mt("touchend",St,d,!1,!0),mt("touchcancel",St,d,!1,!0),mt("selectionchange",St,b,!1),un(g,x=>r=x,()=>r),gt(()=>ie(g,"mobile",Rr()));var C=lt(g),_=lt(C);ce(_,()=>{var x;return(x=D(o))==null?void 0:x._id},x=>{var z=kr(),L=Re(z);wn(L,71,()=>Vt,(M,H)=>Z(Z(M))[0],(M,H,V)=>{let K=()=>Z(Z(H))[0],ut=()=>Z(Z(H))[1];var B=Yi(),ot=lt(B);gt(()=>{Go(B,K()),ft(ot,"style",`--color: ${ut()??""}`),ie(ot,"active",K()==D(o).color)}),et(M,B)}),et(x,z)},x=>{var z=Wi();et(x,z)});var E=F(F(_,!0)),$=lt(E),S=lt($),O=lt(S),T=F(O),k=F(T),A=F(k),G=F(F(E,!0));return ce(G,()=>{var x;return(x=D(o))==null?void 0:x._id},x=>{var z=Ui();et(x,z)}),gt(()=>{var x,z,L,M,H,V;ie(g,"new",!((x=D(o))!=null&&x._id)),ft(O,"fill",(z=D(o))!=null&&z.note?"currentColor":"none"),ft(O,"stroke-width",(L=D(o))!=null&&L.note?"0":void 0),ft(T,"fill",(M=D(o))!=null&&M.note?"none":"currentColor"),ft(k,"fill",(H=D(o))!=null&&H.note?"none":"currentColor"),ft(A,"fill",(V=D(o))!=null&&V.note?"none":"currentColor")}),mt("close",g,c,!1),et(t,g),bn(t,"svelte-17ezxht",`
    .svelte-17ezxht {
        user-select: none;
        -webkit-user-select: none;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    dialog.svelte-17ezxht {
        --control-size: 16px;
        --padding-s: 6px;
        --padding-m: 8px;

        --bg-light: rgb(255, 255, 255);
        --bg-dark: rgb(60, 60, 60);
        --control-fg-light: rgb(65, 65, 65);
        --control-fg-dark: rgb(230, 230, 230);
        --hover-bg-light: rgba(0,0,0,.07);
        --hover-bg-dark: rgba(255,255,255,.1);
        --active-bg-light: rgba(0,0,0,.13);
        --active-bg-dark: rgba(255,255,255,.2);
    }

    @supports (background-color: -apple-system-control-background) {
        dialog.svelte-17ezxht {
            --bg-light: rgba(255, 255, 255, .8);
            --bg-dark: rgba(60, 60, 60, .8);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }
    }

    dialog.mobile.svelte-17ezxht {
        --control-size: 26px;
    }

    dialog.svelte-17ezxht {
        position: absolute;
        left: unset;
        top: unset;
        right: unset;
        bottom: unset;
        border: none;
        padding: 2px;
        border-radius: var(--control-size);
        overflow: clip;
        z-index: 999999999999999;

        background: var(--bg-light);
        color: var(--control-fg-light);

        @supports(color: light-dark(white,black)) {
            background: light-dark(var(--bg-light), var(--bg-dark));
            color: light-dark(var(--control-fg-light), var(--control-fg-dark));
        }
    }    

    dialog.mobile.new.svelte-17ezxht {
        position: fixed;
        top: auto !important;
        left: auto !important;
        right: 16px !important;
        bottom: 16px !important;
        margin-right: env(safe-area-inset-right);
        margin-bottom: env(safe-area-inset-bottom);
    }

    dialog.mobile.new[open].svelte-17ezxht {
        box-shadow: 0 0 0 5px color-mix(in srgb, currentColor 10%, transparent), 0 0 0 .5px color-mix(in srgb, currentColor 20%, transparent);
    }

    [open].svelte-17ezxht {
        box-shadow: 0 0 0 .5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.05), 0 15px 40px rgba(0,0,0,.1);
    }

    form.svelte-17ezxht {
        display: flex;
        margin: 0;
        padding: 0;
    }

    button.svelte-17ezxht {
        border-radius: 8px;
        border: 0;
        background: transparent;
        cursor: pointer;
        appearance: none;
        touch-action: manipulation;
        width: calc(var(--control-size) + var(--padding-m)*2);
        height: calc(var(--control-size) + var(--padding-s)*2);
        padding: var(--padding-s) var(--padding-m);
        color: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background .15s ease-in-out;
    }

    button.svelte-17ezxht:first-child {
        border-top-left-radius: var(--control-size);
        border-bottom-left-radius: var(--control-size);
    }

    button.svelte-17ezxht:last-child {
        border-top-right-radius: var(--control-size);
        border-bottom-right-radius: var(--control-size);
    }

    @media (pointer: fine) {
        button.svelte-17ezxht:hover {
            background: var(--hover-bg-light);

            @supports(color: light-dark(white,black)) {
                background: light-dark(var(--hover-bg-light), var(--hover-bg-dark));
            }
        }
    }

    button.svelte-17ezxht:active {
        transition: none;
        background: var(--active-bg-light);

        @supports(color: light-dark(white,black)) {
            background: light-dark(var(--active-bg-light), var(--active-bg-dark));
        }
    }

    svg.svelte-17ezxht {
        stroke: currentColor;
        stroke-width: 1.5px;
    }

    .color.svelte-17ezxht {
        pointer-events: none;
        content: '';
        display: block;
        width: 12px;
        height: 12px;
        box-shadow: inset 0 0 0 6px var(--color);
        transition: width .15s ease-in-out, height .15s ease-in-out;
        border-radius: 50%;
    }

    .color.active.svelte-17ezxht {
        width: 16px;
        height: 16px;
        box-shadow: inset 0 0 0 6px var(--color)
    }

    /* animation */
    dialog.svelte-17ezxht {
        transition: 
            display .25s allow-discrete ease-in-out, 
            overlay .25s allow-discrete ease-in-out, 
            box-shadow .25s allow-discrete ease-in-out, 
            transform .25s allow-discrete ease-in-out,
            opacity .25s ease-in-out;
        opacity: 0;
        transform: translateY(3px);
    }

    [open].svelte-17ezxht {
        opacity: 1;
        transform: translateY(0);
    }

    dialog.svelte-17ezxht:not([open]) {
        transition-duration: .2s;
        pointer-events: none;
    }

    @starting-style {
        [open].svelte-17ezxht {
            opacity: 0;
            transform: translateY(-3px);
        }
    }
`),he({get store(){return n()},set store(x){n(x),It()}})}Fe(Ir,{store:{}},[],[],!0);function Xi(t){const e=t.currentTarget.getBoundingClientRect();e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width||(t.preventDefault(),t.currentTarget.close())}var Gi=(t,e)=>j(e,!1),Ki=ht('<input type="radio" name="color" class="svelte-2yzs5z">'),Ji=ht('<div class="unlock svelte-2yzs5z"><a href="https://raindrop.io/pro/buy" target="_blank" class="svelte-2yzs5z">Upgrade to Pro</a> to unlock annotation</div>'),Zi=ht('<blockquote role="presentation" class="svelte-2yzs5z"> </blockquote> <fieldset class="color svelte-2yzs5z"></fieldset> <textarea class="note svelte-2yzs5z" rows="4" maxlength="5000" placeholder="Notes (optional)"></textarea> <!>',1),Qi=ht('<dialog role="presentation" class="svelte-2yzs5z"><header class="svelte-2yzs5z"> </header> <form method="dialog" class="svelte-2yzs5z"><!> <footer class="svelte-2yzs5z"><button formnovalidate="" class="svelte-2yzs5z">Cancel <sup class="svelte-2yzs5z">esc</sup></button> <button type="submit" value="OK" class="svelte-2yzs5z"> <sup class="svelte-2yzs5z">&crarr;</sup></button></footer></form></dialog>');function Fr(t,e){de(e,!0);const n=[];let r=Ie(e,"store",7),o,s,c=nt(!0);rn(()=>{e.store.draft?(j(c,!0),o==null||o.showModal()):o==null||o.close()});function v(T){const k=T.currentTarget.returnValue;T.currentTarget.returnValue="",setTimeout(k?e.store.draftSubmit:e.store.draftCancel,200)}function d(T){var k;T.stopImmediatePropagation(),T.stopPropagation(),T.key=="Enter"&&!T.shiftKey&&(T.preventDefault(),s&&((k=T.currentTarget.closest("form"))==null||k.requestSubmit(s)))}var f=Qi();un(f,T=>o=T,()=>o),f.__mousedown=[Xi],gt(()=>ie(f,"mobile",Rr()));var b=lt(f),g=lt(b),C=F(F(b,!0)),_=lt(C);ce(_,()=>e.store.draft,T=>{var k=Zi(),A=Re(k);A.__click=[Gi,c];var G=lt(A);gt(()=>{var M,H;return Ve(G,((H=(M=e.store.draft)==null?void 0:M.text)==null?void 0:H.trim())||"")});var x=F(F(A,!0));wn(x,73,()=>Vt,qo,(M,H,V)=>{let K=()=>Z(Z(H))[0],ut=()=>Z(Z(H))[1];var B=Ki();Xo(B);var ot;gt(()=>{ot!==(ot=K())&&(B.value=(B.__value=K())==null?"":K()),ft(B,"style",`--color: ${ut()??""}`)}),Jo(n,[],B,()=>(K(),e.store.draft.color),$t=>e.store.draft.color=$t),et(M,B)});var z=F(F(x,!0));Vo(z),Uo(z),z.__keydown=d;var L=F(F(z,!0));ce(L,()=>!e.store.pro,M=>{var H=Ji();et(M,H)}),gt(()=>{ie(A,"compact",D(c)),z.disabled=!e.store.pro}),Ko(z,()=>e.store.draft.note,M=>e.store.draft.note=M),et(T,k)});var E=F(F(_,!0)),$=lt(E),S=F(F($,!0));un(S,T=>s=T,()=>s);var O=lt(S);return gt(()=>{var T,k;Ve(g,`${((T=e.store.draft)!=null&&T._id?"Edit":"New")??""} highlight`),Ve(O,`${((k=e.store.draft)!=null&&k._id?"Update":"Create")??""} `)}),mt("close",f,v,!1),et(t,f),bn(t,"svelte-2yzs5z",`
    .svelte-2yzs5z {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    dialog.svelte-2yzs5z {
        --bg-light: rgb(245, 245, 245);
        --bg-dark: rgb(35, 35, 35);
        --fg-light: black;
        --fg-dark: white;
        --control-bg-light: rgb(230, 230, 230);
        --control-bg-dark: rgb(55, 55, 55);

        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
        font-size: 18px;
        line-height: 1.4;
        border: none;
        border-radius: .5em;
        padding: 0;
        overscroll-behavior: none;

        color: var(--fg-light);

        @supports(color: light-dark(white,black)) {
            color: light-dark(var(--fg-light), var(--fg-dark));
        }
    }

    dialog.mobile.svelte-2yzs5z {
        left: 0;right: 0;bottom: 0;top: 0;
        width: 100%;
        margin: 0;
        max-width: 100%;
        max-height: 100%;
        border-radius: 0;
        bottom: auto;
    }

    dialog.svelte-2yzs5z, header.svelte-2yzs5z {
        background: var(--bg-light);

        @supports(color: light-dark(white,black)) {
            background: light-dark(var(--bg-light), var(--bg-dark));
        }
    }

    [open].svelte-2yzs5z {
        box-shadow: 0 0 0 .5px rgba(60, 60, 60, .9), 0 3px 10px rgba(0,0,0,.05), 0 7px 15px -3px rgba(0,0,0,.15);
    }

    .svelte-2yzs5z::backdrop {
        background-color: rgba(0,0,0,.3);
    }

    header.svelte-2yzs5z {
        margin: 0;
        padding: 1em;
        font-weight: bold;
        position: sticky;
        top: 0;
        
    }

    @supports(animation-timeline: scroll()) {
        header.svelte-2yzs5z {
            animation: svelte-2yzs5z-header-scroll linear both;
            animation-timeline: scroll();
            animation-range: 0 1px;
        }
    }

    @keyframes svelte-2yzs5z-header-scroll {
        to {
            box-shadow: 0 .5px 0 rgba(0,0,0,.2);
        }
    }

    form.svelte-2yzs5z {
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 1em;
        padding-top: 0;
    }

    .color.svelte-2yzs5z {
        all: unset;
        display: flex;
        gap: .75em;
    }

    .color.svelte-2yzs5z input[type="radio"]:where(.svelte-2yzs5z) {
        cursor: pointer;
        appearance: none;
        user-select: none;
        -webkit-user-select: none;
        margin: 0;
        background: Canvas;
        box-shadow: inset 0 0 0 1em var(--color);
        transition: box-shadow .2s ease-in-out;
        width: 2em;
        height: 2em;
        border-radius: 50%;
    }

    .color.svelte-2yzs5z input[type="radio"]:where(.svelte-2yzs5z):checked {
        box-shadow: inset 0 0 0 .5em var(--color);
    }

    .color.svelte-2yzs5z input[type="radio"]:where(.svelte-2yzs5z):active {
        transform: translateY(1px);
    }

    blockquote.svelte-2yzs5z, .note.svelte-2yzs5z, button.svelte-2yzs5z {
        background: var(--control-bg-light);

        @supports(color: light-dark(white,black)) {
            background: light-dark(var(--control-bg-light), var(--control-bg-dark));
        }
    }

    blockquote.svelte-2yzs5z {
        white-space: pre-wrap;
        margin: 0;
        min-width: 100%;
        width: 0;
        font-size: 16px;
    }

    blockquote.compact.svelte-2yzs5z {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        overflow: clip;
    }

    blockquote.svelte-2yzs5z, .note.svelte-2yzs5z {
        border-radius: .5em;
        padding: .5em .6em;
    }

    .note.svelte-2yzs5z {
        min-width: min(21em, 70vw);
        min-height: 4lh;
        appearance: none;
        border: 0;
        font: inherit;
        color: inherit;
        display: block;
        scroll-margin-top: 100vh;
        transition: background .15s ease-in-out, box-shadow .15s ease-in-out;
    }

    .note.svelte-2yzs5z:focus {
        background: transparent;
    }
    
    footer.svelte-2yzs5z {
        all: unset;
        display: flex;
        justify-content: flex-end;
        gap: .75em;
    }

    button.svelte-2yzs5z {
        appearance: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        border: 0;
        font: inherit;
        color: inherit;
        cursor: pointer;
        padding: .25em .75em;
        border-radius: .5em;
    }

    button.svelte-2yzs5z:active {
        transform: translateY(1px);
    }

    button.svelte-2yzs5z sup:where(.svelte-2yzs5z) {
        margin-left: .25em;
        vertical-align: text-top;
        opacity: .5;
    }

    dialog.mobile.svelte-2yzs5z button:where(.svelte-2yzs5z) sup:where(.svelte-2yzs5z) {
        display: none;
    }

    button[value].svelte-2yzs5z {
        background: blue;
        background: AccentColor;
        color: white;
    }

    .unlock.svelte-2yzs5z {
        font-size: .75em;
        color: GrayText;
    }

    /* animation */
    dialog.svelte-2yzs5z, .svelte-2yzs5z::backdrop {
        transition: 
            display .2s allow-discrete ease-in-out, 
            overlay .2s allow-discrete ease-in-out, 
            opacity .2s ease-in-out,
            transform .2s ease-in-out,
            box-shadow .2s ease-in-out;
        opacity: 0;
    }

    dialog.svelte-2yzs5z {
        transform: translateY(1em);
    }

    [open].svelte-2yzs5z,
    [open].svelte-2yzs5z::backdrop {
        opacity: 1;
        transform: translateY(0);
    }

    @starting-style {
        [open].svelte-2yzs5z,
        [open].svelte-2yzs5z::backdrop {
            opacity: 0;
        }

        [open].svelte-2yzs5z {
            transform: translateY(-1em);
        }
    }

    @supports not selector(::highlight(a)) {
        dialog.svelte-2yzs5z, dialog.svelte-2yzs5z::backdrop {
            animation: svelte-2yzs5z-simple-appear .2s forwards;
        }
        @keyframes svelte-2yzs5z-simple-appear {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    }
`),he({get store(){return r()},set store(T){r(T),It()}})}br(["mousedown","click","keydown"]);Fe(Fr,{store:{}},[],[],!0);const ts=(t,e)=>{const n=t.target.getAttribute("data-highlight");n&&(t.preventDefault(),e(n))};var es=ht('<div class="svelte-1t9y4ki"></div>'),ns=ht('<nav role="presentation" class="svelte-1t9y4ki"></nav>');function Hr(t,e){de(e,!0);let n=Ie(e,"store",7);var r=kr(),o=Re(r);return ce(o,()=>e.store.nav,s=>{var c=ns();c.__click=[ts,Lr],wn(c,77,()=>e.store.highlights,(v,d)=>Z(v)._id,(v,d,f)=>{var b=es();gt(()=>ft(b,"style",`top: var(--highlight-${Z(d)._id??""}-top); --color: ${(Vt.get(Z(d).color)||Z(d).color)??""}`)),gt(()=>ft(b,"data-highlight",Z(d)._id)),et(v,b)}),et(s,c)}),et(t,r),bn(t,"svelte-1t9y4ki",`
    nav.svelte-1t9y4ki {
        all: unset;
    }
    
    div.svelte-1t9y4ki {
        position: fixed;
        right: 0;
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        cursor: pointer;
        background: transparent;
        z-index: 99999999999999;
    }

    div.svelte-1t9y4ki::before {
        content: '';
        display: block;
        height: 3px;
        border-radius: 3px;
        width: 100%;
        background: var(--color);
    }
`),he({get store(){return n()},set store(s){n(s),It()}})}br(["click"]);Fe(Hr,{store:{}},[],[],!0);var rs=ht("<!> <!> <!>",1);function os(t,e){de(e,!0);let n=Ie(e,"store",7);rn(()=>{Ke(e.store.highlights)});let r;function o(){Ke(e.store.highlights),clearTimeout(r),r=setTimeout(()=>Ke(e.store.highlights),3e3)}rn(()=>Pi);var s=rs();mt("load",Se,o,!1),mt("popstate",Se,o,!1);var c=Re(s);Ir(c,{get store(){return e.store}});var v=F(F(c,!0));Fr(v,{get store(){return e.store}});var d=F(F(v,!0));return Hr(d,{get store(){return e.store}}),et(t,s),he({get store(){return n()},set store(f){n(f),It()}})}customElements.define("rdh-ui",Fe(os,{store:{}},[],[],!0));function is(t){if(typeof chrome=="object"&&chrome.runtime&&chrome.runtime.onMessage||typeof browser=="object"&&browser.runtime&&browser.runtime.onMessage){const{runtime:e}=typeof browser=="object"?browser:chrome,n=(r,o)=>{o.id==e.id&&typeof r.type=="string"&&t(r)};return e.onMessage.removeListener(n),e.onMessage.addListener(n),r=>e.sendMessage(null,r)}if(window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.rdh)return window.rdhSend=t,e=>window.webkit.messageHandlers.rdh.postMessage(e);if(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0){const{ipcRenderer:e}=require("electron"),n=(r,o)=>t(o);return e.removeListener("RDH",n),e.on("RDH",n),r=>e.sendToHost("RDH",r)}if("ReactNativeWebView"in window)return window.ReactNativeWebViewSendMessage=t,e=>window.ReactNativeWebView.postMessage(JSON.stringify(e));if(window.self!==window.top){const e=({data:n,source:r})=>{r!==window.parent||typeof n!="object"||typeof n.type!="string"||t(n)};return window.removeEventListener("message",e),window.addEventListener("message",e),n=>window.parent.postMessage(n,"*")}throw new Error("unsupported platform")}async function ss(t){let e=!1;const n=new Set,r=is(o=>{if(!e){n.add(o);return}t(o)});await new Promise(o=>{function s(){window.removeEventListener("DOMContentLoaded",s),o()}document.readyState=="loading"?(window.removeEventListener("DOMContentLoaded",s),window.addEventListener("DOMContentLoaded",s,{once:!0})):o()}),e=!0;for(const o of n)t(o),n.delete(o);return r}const re=document.createElement("rdh-ui");(async()=>{const t=await ss(n=>{switch(n.type){case"RDH_APPLY":Array.isArray(n.payload)&&(e.highlights=n.payload);break;case"RDH_CONFIG":typeof n.payload.pro=="boolean"&&(e.pro=n.payload.pro),typeof n.payload.nav=="boolean"&&(e.nav=n.payload.nav),typeof n.payload.enabled=="boolean"&&(n.payload.enabled===!0?document.body.contains(re)||document.body.appendChild(re):document.body.contains(re)&&document.body.removeChild(re));break;case"RDH_SCROLL":typeof n.payload._id=="string"&&Lr(n.payload._id);break;case"RDH_ADD_SELECTION":const r=Mr();if(!r)return;const o=e.find(r);if(!o)return;e.upsert(o),oe();break;case"RDH_NOTE_SELECTION":console.log("not implemented yet");break}}),e=qi(n=>t({type:"RDH_ADD",payload:n}),n=>t({type:"RDH_UPDATE",payload:n}),({_id:n})=>t({type:"RDH_REMOVE",payload:{_id:n}}));re.store=e,t({type:"RDH_READY",payload:{url:location.href}})})();
