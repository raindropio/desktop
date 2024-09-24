"use strict";var Gr=Object.defineProperty;var In=t=>{throw TypeError(t)};var Zr=(t,e,n)=>e in t?Gr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ct=(t,e,n)=>Zr(t,typeof e!="symbol"?e+"":e,n),qn=(t,e,n)=>e.has(t)||In("Cannot "+n);var K=(t,e,n)=>(qn(t,e,"read from private field"),n?n.call(t):e.get(t)),ze=(t,e,n)=>e.has(t)?In("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),Xe=(t,e,n,r)=>(qn(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);(function(){var t=window.Document.prototype.createElement,e=window.Document.prototype.createElementNS,n=window.Document.prototype.importNode,r=window.Document.prototype.prepend,o=window.Document.prototype.append,s=window.DocumentFragment.prototype.prepend,l=window.DocumentFragment.prototype.append,d=window.Node.prototype.cloneNode,h=window.Node.prototype.appendChild,f=window.Node.prototype.insertBefore,_=window.Node.prototype.removeChild,g=window.Node.prototype.replaceChild,C=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),m=window.Element.prototype.attachShadow,b=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),T=window.Element.prototype.getAttribute,L=window.Element.prototype.setAttribute,S=window.Element.prototype.removeAttribute,k=window.Element.prototype.toggleAttribute,$=window.Element.prototype.getAttributeNS,A=window.Element.prototype.setAttributeNS,xt=window.Element.prototype.removeAttributeNS,Z=window.Element.prototype.insertAdjacentElement,N=window.Element.prototype.insertAdjacentHTML,P=window.Element.prototype.prepend,I=window.Element.prototype.append,F=window.Element.prototype.before,O=window.Element.prototype.after,X=window.Element.prototype.replaceWith,U=window.Element.prototype.remove,wt=window.HTMLElement,ut=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),te=window.HTMLElement.prototype.insertAdjacentElement,ee=window.HTMLElement.prototype.insertAdjacentHTML,Sn=new Set;"annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(i){return Sn.add(i)});function An(i){var a=Sn.has(i);return i=/^[a-z][.0-9_a-z]*-[-.0-9_a-z]*$/.test(i),!a&&i}var Vr=document.contains?document.contains.bind(document):document.documentElement.contains.bind(document.documentElement);function V(i){var a=i.isConnected;if(a!==void 0)return a;if(Vr(i))return!0;for(;i&&!(i.__CE_isImportDocument||i instanceof Document);)i=i.parentNode||(window.ShadowRoot&&i instanceof ShadowRoot?i.host:void 0);return!(!i||!(i.__CE_isImportDocument||i instanceof Document))}function Be(i){var a=i.children;if(a)return Array.prototype.slice.call(a);for(a=[],i=i.firstChild;i;i=i.nextSibling)i.nodeType===Node.ELEMENT_NODE&&a.push(i);return a}function Ve(i,a){for(;a&&a!==i&&!a.nextSibling;)a=a.parentNode;return a&&a!==i?a.nextSibling:null}function We(i,a,c){for(var p=i;p;){if(p.nodeType===Node.ELEMENT_NODE){var u=p;a(u);var v=u.localName;if(v==="link"&&u.getAttribute("rel")==="import"){if(p=u.import,c===void 0&&(c=new Set),p instanceof Node&&!c.has(p))for(c.add(p),p=p.firstChild;p;p=p.nextSibling)We(p,a,c);p=Ve(i,u);continue}else if(v==="template"){p=Ve(i,u);continue}if(u=u.__CE_shadowRoot)for(u=u.firstChild;u;u=u.nextSibling)We(u,a,c)}p=p.firstChild?p.firstChild:Ve(i,p)}}function me(){var i=!(dt==null||!dt.noDocumentConstructionObserver),a=!(dt==null||!dt.shadyDomFastWalk);this.m=[],this.g=[],this.j=!1,this.shadyDomFastWalk=a,this.I=!i}function ne(i,a,c,p){var u=window.ShadyDOM;if(i.shadyDomFastWalk&&u&&u.inUse){if(a.nodeType===Node.ELEMENT_NODE&&c(a),a.querySelectorAll)for(i=u.nativeMethods.querySelectorAll.call(a,"*"),a=0;a<i.length;a++)c(i[a])}else We(a,c,p)}function Wr(i,a){i.j=!0,i.m.push(a)}function Yr(i,a){i.j=!0,i.g.push(a)}function Ye(i,a){i.j&&ne(i,a,function(c){return qt(i,c)})}function qt(i,a){if(i.j&&!a.__CE_patched){a.__CE_patched=!0;for(var c=0;c<i.m.length;c++)i.m[c](a);for(c=0;c<i.g.length;c++)i.g[c](a)}}function ft(i,a){var c=[];for(ne(i,a,function(u){return c.push(u)}),a=0;a<c.length;a++){var p=c[a];p.__CE_state===1?i.connectedCallback(p):we(i,p)}}function Q(i,a){var c=[];for(ne(i,a,function(u){return c.push(u)}),a=0;a<c.length;a++){var p=c[a];p.__CE_state===1&&i.disconnectedCallback(p)}}function yt(i,a,c){c=c===void 0?{}:c;var p=c.J,u=c.upgrade||function(w){return we(i,w)},v=[];for(ne(i,a,function(w){if(i.j&&qt(i,w),w.localName==="link"&&w.getAttribute("rel")==="import"){var y=w.import;y instanceof Node&&(y.__CE_isImportDocument=!0,y.__CE_registry=document.__CE_registry),y&&y.readyState==="complete"?y.__CE_documentLoadHandled=!0:w.addEventListener("load",function(){var E=w.import;if(!E.__CE_documentLoadHandled){E.__CE_documentLoadHandled=!0;var D=new Set;p&&(p.forEach(function(q){return D.add(q)}),D.delete(E)),yt(i,E,{J:D,upgrade:u})}})}else v.push(w)},p),a=0;a<v.length;a++)u(v[a])}function we(i,a){try{var c=a.ownerDocument,p=c.__CE_registry,u=p&&(c.defaultView||c.__CE_isImportDocument)?ye(p,a.localName):void 0;if(u&&a.__CE_state===void 0){u.constructionStack.push(a);try{try{if(new u.constructorFunction!==a)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{u.constructionStack.pop()}}catch(E){throw a.__CE_state=2,E}if(a.__CE_state=1,a.__CE_definition=u,u.attributeChangedCallback&&a.hasAttributes()){var v=u.observedAttributes;for(u=0;u<v.length;u++){var w=v[u],y=a.getAttribute(w);y!==null&&i.attributeChangedCallback(a,w,null,y,null)}}V(a)&&i.connectedCallback(a)}}catch(E){Bt(E)}}me.prototype.connectedCallback=function(i){var a=i.__CE_definition;if(a.connectedCallback)try{a.connectedCallback.call(i)}catch(c){Bt(c)}},me.prototype.disconnectedCallback=function(i){var a=i.__CE_definition;if(a.disconnectedCallback)try{a.disconnectedCallback.call(i)}catch(c){Bt(c)}},me.prototype.attributeChangedCallback=function(i,a,c,p,u){var v=i.__CE_definition;if(v.attributeChangedCallback&&-1<v.observedAttributes.indexOf(a))try{v.attributeChangedCallback.call(i,a,c,p,u)}catch(w){Bt(w)}};function Dn(i,a,c,p){var u=a.__CE_registry;if(u&&(p===null||p==="http://www.w3.org/1999/xhtml")&&(u=ye(u,c)))try{var v=new u.constructorFunction;if(v.__CE_state===void 0||v.__CE_definition===void 0)throw Error("Failed to construct '"+c+"': The returned value was not constructed with the HTMLElement constructor.");if(v.namespaceURI!=="http://www.w3.org/1999/xhtml")throw Error("Failed to construct '"+c+"': The constructed element's namespace must be the HTML namespace.");if(v.hasAttributes())throw Error("Failed to construct '"+c+"': The constructed element must not have any attributes.");if(v.firstChild!==null)throw Error("Failed to construct '"+c+"': The constructed element must not have any children.");if(v.parentNode!==null)throw Error("Failed to construct '"+c+"': The constructed element must not have a parent node.");if(v.ownerDocument!==a)throw Error("Failed to construct '"+c+"': The constructed element's owner document is incorrect.");if(v.localName!==c)throw Error("Failed to construct '"+c+"': The constructed element's local name is incorrect.");return v}catch(w){return Bt(w),a=p===null?t.call(a,c):e.call(a,p,c),Object.setPrototypeOf(a,HTMLUnknownElement.prototype),a.__CE_state=2,a.__CE_definition=void 0,qt(i,a),a}return a=p===null?t.call(a,c):e.call(a,p,c),qt(i,a),a}function Bt(i){var a="",c="",p=0,u=0;i instanceof Error?(a=i.message,c=i.sourceURL||i.fileName||"",p=i.line||i.lineNumber||0,u=i.column||i.columnNumber||0):a="Uncaught "+String(i);var v=void 0;ErrorEvent.prototype.initErrorEvent===void 0?v=new ErrorEvent("error",{cancelable:!0,message:a,filename:c,lineno:p,colno:u,error:i}):(v=document.createEvent("ErrorEvent"),v.initErrorEvent("error",!1,!0,a,c,p),v.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{configurable:!0,get:function(){return!0}})}),v.error===void 0&&Object.defineProperty(v,"error",{configurable:!0,enumerable:!0,get:function(){return i}}),window.dispatchEvent(v),v.defaultPrevented||console.error(i)}function Ln(){var i=this;this.g=void 0,this.F=new Promise(function(a){i.l=a})}Ln.prototype.resolve=function(i){if(this.g)throw Error("Already resolved.");this.g=i,this.l(i)};function Mn(i){var a=document;this.l=void 0,this.h=i,this.g=a,yt(this.h,this.g),this.g.readyState==="loading"&&(this.l=new MutationObserver(this.G.bind(this)),this.l.observe(this.g,{childList:!0,subtree:!0}))}function jn(i){i.l&&i.l.disconnect()}Mn.prototype.G=function(i){var a=this.g.readyState;for(a!=="interactive"&&a!=="complete"||jn(this),a=0;a<i.length;a++)for(var c=i[a].addedNodes,p=0;p<c.length;p++)yt(this.h,c[p])};function W(i){this.s=new Map,this.u=new Map,this.C=new Map,this.A=!1,this.B=new Map,this.o=function(a){return a()},this.i=!1,this.v=[],this.h=i,this.D=i.I?new Mn(i):void 0}W.prototype.H=function(i,a){var c=this;if(!(a instanceof Function))throw new TypeError("Custom element constructor getters must be functions.");On(this,i),this.s.set(i,a),this.v.push(i),this.i||(this.i=!0,this.o(function(){return Fn(c)}))},W.prototype.define=function(i,a){var c=this;if(!(a instanceof Function))throw new TypeError("Custom element constructors must be functions.");On(this,i),Rn(this,i,a),this.v.push(i),this.i||(this.i=!0,this.o(function(){return Fn(c)}))};function On(i,a){if(!An(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(ye(i,a))throw Error("A custom element with name '"+(a+"' has already been defined."));if(i.A)throw Error("A custom element is already being defined.")}function Rn(i,a,c){i.A=!0;var p;try{var u=c.prototype;if(!(u instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var v=function(q){var Vt=u[q];if(Vt!==void 0&&!(Vt instanceof Function))throw Error("The '"+q+"' callback must be a function.");return Vt},w=v("connectedCallback"),y=v("disconnectedCallback"),E=v("adoptedCallback"),D=(p=v("attributeChangedCallback"))&&c.observedAttributes||[]}catch(q){throw q}finally{i.A=!1}return c={localName:a,constructorFunction:c,connectedCallback:w,disconnectedCallback:y,adoptedCallback:E,attributeChangedCallback:p,observedAttributes:D,constructionStack:[]},i.u.set(a,c),i.C.set(c.constructorFunction,c),c}W.prototype.upgrade=function(i){yt(this.h,i)};function Fn(i){if(i.i!==!1){i.i=!1;for(var a=[],c=i.v,p=new Map,u=0;u<c.length;u++)p.set(c[u],[]);for(yt(i.h,document,{upgrade:function(E){if(E.__CE_state===void 0){var D=E.localName,q=p.get(D);q?q.push(E):i.u.has(D)&&a.push(E)}}}),u=0;u<a.length;u++)we(i.h,a[u]);for(u=0;u<c.length;u++){for(var v=c[u],w=p.get(v),y=0;y<w.length;y++)we(i.h,w[y]);(v=i.B.get(v))&&v.resolve(void 0)}c.length=0}}W.prototype.get=function(i){if(i=ye(this,i))return i.constructorFunction},W.prototype.whenDefined=function(i){if(!An(i))return Promise.reject(new SyntaxError("'"+i+"' is not a valid custom element name."));var a=this.B.get(i);if(a)return a.F;a=new Ln,this.B.set(i,a);var c=this.u.has(i)||this.s.has(i);return i=this.v.indexOf(i)===-1,c&&i&&a.resolve(void 0),a.F},W.prototype.polyfillWrapFlushCallback=function(i){this.D&&jn(this.D);var a=this.o;this.o=function(c){return i(function(){return a(c)})}};function ye(i,a){var c=i.u.get(a);if(c)return c;if(c=i.s.get(a)){i.s.delete(a);try{return Rn(i,a,c())}catch(p){Bt(p)}}}W.prototype.define=W.prototype.define,W.prototype.upgrade=W.prototype.upgrade,W.prototype.get=W.prototype.get,W.prototype.whenDefined=W.prototype.whenDefined,W.prototype.polyfillDefineLazy=W.prototype.H,W.prototype.polyfillWrapFlushCallback=W.prototype.polyfillWrapFlushCallback;function Ue(i,a,c){function p(u){return function(v){for(var w=[],y=0;y<arguments.length;++y)w[y]=arguments[y];y=[];for(var E=[],D=0;D<w.length;D++){var q=w[D];if(q instanceof Element&&V(q)&&E.push(q),q instanceof DocumentFragment)for(q=q.firstChild;q;q=q.nextSibling)y.push(q);else y.push(q)}for(u.apply(this,w),w=0;w<E.length;w++)Q(i,E[w]);if(V(this))for(w=0;w<y.length;w++)E=y[w],E instanceof Element&&ft(i,E)}}c.prepend!==void 0&&(a.prepend=p(c.prepend)),c.append!==void 0&&(a.append=p(c.append))}function Ur(i){Document.prototype.createElement=function(a){return Dn(i,this,a,null)},Document.prototype.importNode=function(a,c){return a=n.call(this,a,!!c),this.__CE_registry?yt(i,a):Ye(i,a),a},Document.prototype.createElementNS=function(a,c){return Dn(i,this,c,a)},Ue(i,Document.prototype,{prepend:r,append:o})}function zr(i){function a(p){return function(u){for(var v=[],w=0;w<arguments.length;++w)v[w]=arguments[w];w=[];for(var y=[],E=0;E<v.length;E++){var D=v[E];if(D instanceof Element&&V(D)&&y.push(D),D instanceof DocumentFragment)for(D=D.firstChild;D;D=D.nextSibling)w.push(D);else w.push(D)}for(p.apply(this,v),v=0;v<y.length;v++)Q(i,y[v]);if(V(this))for(v=0;v<w.length;v++)y=w[v],y instanceof Element&&ft(i,y)}}var c=Element.prototype;F!==void 0&&(c.before=a(F)),O!==void 0&&(c.after=a(O)),X!==void 0&&(c.replaceWith=function(p){for(var u=[],v=0;v<arguments.length;++v)u[v]=arguments[v];v=[];for(var w=[],y=0;y<u.length;y++){var E=u[y];if(E instanceof Element&&V(E)&&w.push(E),E instanceof DocumentFragment)for(E=E.firstChild;E;E=E.nextSibling)v.push(E);else v.push(E)}for(y=V(this),X.apply(this,u),u=0;u<w.length;u++)Q(i,w[u]);if(y)for(Q(i,this),u=0;u<v.length;u++)w=v[u],w instanceof Element&&ft(i,w)}),U!==void 0&&(c.remove=function(){var p=V(this);U.call(this),p&&Q(i,this)})}function Xr(i){function a(u,v){Object.defineProperty(u,"innerHTML",{enumerable:v.enumerable,configurable:!0,get:v.get,set:function(w){var y=this,E=void 0;if(V(this)&&(E=[],ne(i,this,function(Vt){Vt!==y&&E.push(Vt)})),v.set.call(this,w),E)for(var D=0;D<E.length;D++){var q=E[D];q.__CE_state===1&&i.disconnectedCallback(q)}return this.ownerDocument.__CE_registry?yt(i,this):Ye(i,this),w}})}function c(u,v){u.insertAdjacentElement=function(w,y){var E=V(y);return w=v.call(this,w,y),E&&Q(i,y),V(w)&&ft(i,y),w}}function p(u,v){function w(y,E){for(var D=[];y!==E;y=y.nextSibling)D.push(y);for(E=0;E<D.length;E++)yt(i,D[E])}u.insertAdjacentHTML=function(y,E){if(y=y.toLowerCase(),y==="beforebegin"){var D=this.previousSibling;v.call(this,y,E),w(D||this.parentNode.firstChild,this)}else if(y==="afterbegin")D=this.firstChild,v.call(this,y,E),w(this.firstChild,D);else if(y==="beforeend")D=this.lastChild,v.call(this,y,E),w(D||this.firstChild,null);else if(y==="afterend")D=this.nextSibling,v.call(this,y,E),w(this.nextSibling,D);else throw new SyntaxError("The value provided ("+String(y)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.")}}m&&(Element.prototype.attachShadow=function(u){if(u=m.call(this,u),i.j&&!u.__CE_patched){u.__CE_patched=!0;for(var v=0;v<i.m.length;v++)i.m[v](u)}return this.__CE_shadowRoot=u}),b&&b.get?a(Element.prototype,b):ut&&ut.get?a(HTMLElement.prototype,ut):Yr(i,function(u){a(u,{enumerable:!0,configurable:!0,get:function(){return d.call(this,!0).innerHTML},set:function(v){var w=this.localName==="template",y=w?this.content:this,E=e.call(document,this.namespaceURI,this.localName);for(E.innerHTML=v;0<y.childNodes.length;)_.call(y,y.childNodes[0]);for(v=w?E.content:E;0<v.childNodes.length;)h.call(y,v.childNodes[0])}})}),Element.prototype.setAttribute=function(u,v){if(this.__CE_state!==1)return L.call(this,u,v);var w=T.call(this,u);L.call(this,u,v),v=T.call(this,u),i.attributeChangedCallback(this,u,w,v,null)},Element.prototype.setAttributeNS=function(u,v,w){if(this.__CE_state!==1)return A.call(this,u,v,w);var y=$.call(this,u,v);A.call(this,u,v,w),w=$.call(this,u,v),i.attributeChangedCallback(this,v,y,w,u)},Element.prototype.removeAttribute=function(u){if(this.__CE_state!==1)return S.call(this,u);var v=T.call(this,u);S.call(this,u),v!==null&&i.attributeChangedCallback(this,u,v,null,null)},k&&(Element.prototype.toggleAttribute=function(u,v){if(this.__CE_state!==1)return k.call(this,u,v);var w=T.call(this,u),y=w!==null;return v=k.call(this,u,v),y!==v&&i.attributeChangedCallback(this,u,w,v?"":null,null),v}),Element.prototype.removeAttributeNS=function(u,v){if(this.__CE_state!==1)return xt.call(this,u,v);var w=$.call(this,u,v);xt.call(this,u,v);var y=$.call(this,u,v);w!==y&&i.attributeChangedCallback(this,v,w,y,u)},te?c(HTMLElement.prototype,te):Z&&c(Element.prototype,Z),ee?p(HTMLElement.prototype,ee):N&&p(Element.prototype,N),Ue(i,Element.prototype,{prepend:P,append:I}),zr(i)}var Hn={};function Kr(i){function a(){var c=this.constructor,p=document.__CE_registry.C.get(c);if(!p)throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");var u=p.constructionStack;if(u.length===0)return u=t.call(document,p.localName),Object.setPrototypeOf(u,c.prototype),u.__CE_state=1,u.__CE_definition=p,qt(i,u),u;var v=u.length-1,w=u[v];if(w===Hn)throw Error("Failed to construct '"+p.localName+"': This element was already constructed.");return u[v]=Hn,Object.setPrototypeOf(w,c.prototype),qt(i,w),w}a.prototype=wt.prototype,Object.defineProperty(HTMLElement.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:a}),window.HTMLElement=a}function Jr(i){function a(c,p){Object.defineProperty(c,"textContent",{enumerable:p.enumerable,configurable:!0,get:p.get,set:function(u){if(this.nodeType===Node.TEXT_NODE)p.set.call(this,u);else{var v=void 0;if(this.firstChild){var w=this.childNodes,y=w.length;if(0<y&&V(this)){v=Array(y);for(var E=0;E<y;E++)v[E]=w[E]}}if(p.set.call(this,u),v)for(u=0;u<v.length;u++)Q(i,v[u])}}})}Node.prototype.insertBefore=function(c,p){if(c instanceof DocumentFragment){var u=Be(c);if(c=f.call(this,c,p),V(this))for(p=0;p<u.length;p++)ft(i,u[p]);return c}return u=c instanceof Element&&V(c),p=f.call(this,c,p),u&&Q(i,c),V(this)&&ft(i,c),p},Node.prototype.appendChild=function(c){if(c instanceof DocumentFragment){var p=Be(c);if(c=h.call(this,c),V(this))for(var u=0;u<p.length;u++)ft(i,p[u]);return c}return p=c instanceof Element&&V(c),u=h.call(this,c),p&&Q(i,c),V(this)&&ft(i,c),u},Node.prototype.cloneNode=function(c){return c=d.call(this,!!c),this.ownerDocument.__CE_registry?yt(i,c):Ye(i,c),c},Node.prototype.removeChild=function(c){var p=c instanceof Element&&V(c),u=_.call(this,c);return p&&Q(i,c),u},Node.prototype.replaceChild=function(c,p){if(c instanceof DocumentFragment){var u=Be(c);if(c=g.call(this,c,p),V(this))for(Q(i,p),p=0;p<u.length;p++)ft(i,u[p]);return c}u=c instanceof Element&&V(c);var v=g.call(this,c,p),w=V(this);return w&&Q(i,p),u&&Q(i,c),w&&ft(i,c),v},C&&C.get?a(Node.prototype,C):Wr(i,function(c){a(c,{enumerable:!0,configurable:!0,get:function(){for(var p=[],u=this.firstChild;u;u=u.nextSibling)u.nodeType!==Node.COMMENT_NODE&&p.push(u.textContent);return p.join("")},set:function(p){for(;this.firstChild;)_.call(this,this.firstChild);p!=null&&p!==""&&h.call(this,document.createTextNode(p))}})})}var dt=window.customElements;function Pn(){var i=new me;Kr(i),Ur(i),Ue(i,DocumentFragment.prototype,{prepend:s,append:l}),Jr(i),Xr(i),window.CustomElementRegistry=W,i=new W(i),document.__CE_registry=i,Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:i})}dt&&!dt.forcePolyfill&&typeof dt.define=="function"&&typeof dt.get=="function"||Pn(),window.__CE_installPolyfill=Pn}).call(self);const fn=1,dn=2,tr=4,Qr=8,to=16,eo=2,no=1,ro=2,er="[",hn="[!",vn="]",se={},tt=Symbol(),nr=!1;function pn(t){console.warn("hydration_mismatch")}var _n=Array.isArray,gn=Array.from,Ce=Object.keys,ke=Object.defineProperty,Rt=Object.getOwnPropertyDescriptor,oo=Object.getOwnPropertyDescriptors,io=Object.prototype,so=Array.prototype,Qe=Object.getPrototypeOf;function rr(t){for(var e=0;e<t.length;e++)t[e]()}const kt=2,or=4,Jt=8,ir=16,Lt=32,Oe=64,It=128,$e=256,G=512,St=1024,fe=2048,Ht=4096,de=8192,lo=16384,mn=32768,ao=1<<18,sr=1<<19,Ut=Symbol("$state"),uo=Symbol("");function lr(t){return t===this.v}function co(t,e){return t!=t?e==e:t!==e||t!==null&&typeof t=="object"||typeof t=="function"}function fo(t){return!co(t,this.v)}function ho(t){throw new Error("effect_in_teardown")}function vo(){throw new Error("effect_in_unowned_derived")}function po(t){throw new Error("effect_orphan")}function _o(){throw new Error("effect_update_depth_exceeded")}function go(){throw new Error("hydration_failed")}function mo(t){throw new Error("props_invalid_value")}function wo(){throw new Error("state_descriptors_fixed")}function yo(){throw new Error("state_prototype_fixed")}function bo(){throw new Error("state_unsafe_local_read")}function Eo(){throw new Error("state_unsafe_mutation")}function nt(t){return{f:0,v:t,reactions:null,equals:lr,version:0}}function jt(t){return Co(nt(t))}function wn(t){var n;const e=nt(t);return e.equals=fo,Y!==null&&Y.l!==null&&((n=Y.l).s??(n.s=[])).push(e),e}function Co(t){return H!==null&&H.f&kt&&(pt===null?Do([t]):pt.push(t)),t}function B(t,e){return H!==null&&De()&&H.f&kt&&(pt===null||!pt.includes(t))&&Eo(),t.equals(e)||(t.v=e,t.version=br(),ar(t,St),De()&&M!==null&&M.f&G&&!(M.f&Lt)&&(z!==null&&z.includes(t)?(gt(M,St),Fe(M)):Nt===null?Lo([t]):Nt.push(t))),e}function ar(t,e){var n=t.reactions;if(n!==null)for(var r=De(),o=n.length,s=0;s<o;s++){var l=n[s],d=l.f;d&St||!r&&l===M||(gt(l,e),d&(G|It)&&(d&kt?ar(l,fe):Fe(l)))}}function ko(t){M===null&&H===null&&po(),H!==null&&H.f&It&&vo(),kn&&ho()}function $o(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function Gt(t,e,n,r=!0){var o=(t&Oe)!==0,s=M,l={ctx:Y,deps:null,nodes_start:null,nodes_end:null,f:t|St,first:null,fn:e,last:null,next:null,parent:o?null:s,prev:null,teardown:null,transitions:null,version:0};if(n){var d=zt;try{Bn(!0),Re(l),l.f|=lo}catch(_){throw Zt(l),_}finally{Bn(d)}}else e!==null&&Fe(l);var h=n&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&sr)===0;if(!h&&!o&&r&&(s!==null&&$o(l,s),H!==null&&H.f&kt)){var f=H;(f.children??(f.children=[])).push(l)}return l}function ur(t){const e=Gt(Jt,null,!1);return gt(e,G),e.teardown=t,e}function tn(t){ko();var e=M!==null&&(M.f&Jt)!==0&&Y!==null&&!Y.m;if(e){var n=Y;(n.e??(n.e=[])).push({fn:t,effect:M,reaction:H})}else{var r=bn(t);return r}}function yn(t){const e=Gt(Oe,t,!0);return()=>{Zt(e)}}function bn(t){return Gt(or,t,!1)}function he(t){return Gt(Jt,t,!0)}function vt(t){return he(t)}function cr(t,e=0){return Gt(Jt|ir|e,t,!0)}function ae(t,e=!0){return Gt(Jt|Lt,t,!0,e)}function fr(t){var e=t.teardown;if(e!==null){const n=kn,r=H;Vn(!0),Se(null);try{e.call(null)}finally{Vn(n),Se(r)}}}function Zt(t,e=!0){var n=!1;if((e||t.f&ao)&&t.nodes_start!==null){for(var r=t.nodes_start,o=t.nodes_end;r!==null;){var s=r===o?null:$t(r);r.remove(),r=s}n=!0}Cr(t,e&&!n),ce(t,0),gt(t,de);var l=t.transitions;if(l!==null)for(const h of l)h.stop();fr(t);var d=t.parent;d!==null&&d.first!==null&&dr(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function dr(t){var e=t.parent,n=t.prev,r=t.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),e!==null&&(e.first===t&&(e.first=r),e.last===t&&(e.last=n))}function en(t,e){var n=[];En(t,n,!0),hr(n,()=>{Zt(t),e&&e()})}function hr(t,e){var n=t.length;if(n>0){var r=()=>--n||e();for(var o of t)o.out(r)}else e()}function En(t,e,n){if(!(t.f&Ht)){if(t.f^=Ht,t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&e.push(l);for(var r=t.first;r!==null;){var o=r.next,s=(r.f&mn)!==0||(r.f&Lt)!==0;En(r,e,s?n:!1),r=o}}}function xe(t){vr(t,!0)}function vr(t,e){if(t.f&Ht){t.f^=Ht,ve(t)&&Re(t);for(var n=t.first;n!==null;){var r=n.next,o=(n.f&mn)!==0||(n.f&Lt)!==0;vr(n,o?e:!1),n=r}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||e)&&s.in()}}const xo=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let Te=!1,Ne=!1,nn=[],rn=[];function pr(){Te=!1;const t=nn.slice();nn=[],rr(t)}function _r(){Ne=!1;const t=rn.slice();rn=[],rr(t)}function Pt(t){Te||(Te=!0,queueMicrotask(pr)),nn.push(t)}function To(t){Ne||(Ne=!0,xo(_r)),rn.push(t)}function No(){Te&&pr(),Ne&&_r()}function Cn(t){let e=kt|St;M===null?e|=It:M.f|=sr;const n={children:null,deps:null,equals:lr,f:e,fn:t,reactions:null,v:null,version:0,parent:M};if(H!==null&&H.f&kt){var r=H;(r.children??(r.children=[])).push(n)}return n}function gr(t){var e=t.children;if(e!==null){t.children=null;for(var n=0;n<e.length;n+=1){var r=e[n];r.f&kt?So(r):Zt(r)}}}function mr(t){var e,n=M;Ae(t.parent);try{gr(t),e=Er(t)}finally{Ae(n)}var r=(Yt||t.f&It)&&t.deps!==null?fe:G;gt(t,r),t.equals(e)||(t.v=e,t.version=br())}function So(t){gr(t),ce(t,0),gt(t,de),t.children=t.deps=t.reactions=t.fn=null}const wr=0,Ao=1;let be=wr,ue=!1,zt=!1,kn=!1;function Bn(t){zt=t}function Vn(t){kn=t}let Ot=[],Xt=0;let H=null;function Se(t){H=t}let M=null;function Ae(t){M=t}let pt=null;function Do(t){pt=t}let z=null,et=0,Nt=null;function Lo(t){Nt=t}let yr=0,Yt=!1,Y=null;function br(){return++yr}function De(){return Y!==null&&Y.l===null}function ve(t){var l,d;var e=t.f;if(e&St)return!0;if(e&fe){var n=t.deps,r=(e&It)!==0;if(n!==null){var o;if(e&$e){for(o=0;o<n.length;o++)((l=n[o]).reactions??(l.reactions=[])).push(t);t.f^=$e}for(o=0;o<n.length;o++){var s=n[o];if(ve(s)&&mr(s),r&&M!==null&&!Yt&&!((d=s==null?void 0:s.reactions)!=null&&d.includes(t))&&(s.reactions??(s.reactions=[])).push(t),s.version>t.version)return!0}}r||gt(t,G)}return!1}function Mo(t,e,n){throw t}function Er(t){var _;var e=z,n=et,r=Nt,o=H,s=Yt,l=pt;z=null,et=0,Nt=null,H=t.f&(Lt|Oe)?null:t,Yt=!zt&&(t.f&It)!==0,pt=null;try{var d=(0,t.fn)(),h=t.deps;if(z!==null){var f;if(ce(t,et),h!==null&&et>0)for(h.length=et+z.length,f=0;f<z.length;f++)h[et+f]=z[f];else t.deps=h=z;if(!Yt)for(f=et;f<h.length;f++)((_=h[f]).reactions??(_.reactions=[])).push(t)}else h!==null&&et<h.length&&(ce(t,et),h.length=et);return d}finally{z=e,et=n,Nt=r,H=o,Yt=s,pt=l}}function jo(t,e){let n=e.reactions;if(n!==null){var r=n.indexOf(t);if(r!==-1){var o=n.length-1;o===0?n=e.reactions=null:(n[r]=n[o],n.pop())}}n===null&&e.f&kt&&(z===null||!z.includes(e))&&(gt(e,fe),e.f&(It|$e)||(e.f^=$e),ce(e,0))}function ce(t,e){var n=t.deps;if(n!==null)for(var r=e;r<n.length;r++)jo(t,n[r])}function Cr(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var r=n.next;Zt(n,e),n=r}}function Re(t){var e=t.f;if(!(e&de)){gt(t,G);var n=M,r=Y;M=t,Y=t.ctx;try{e&ir||Cr(t),fr(t);var o=Er(t);t.teardown=typeof o=="function"?o:null,t.version=yr}catch(s){Mo(s)}finally{M=n,Y=r}}}function kr(){Xt>1e3&&(Xt=0,_o()),Xt++}function $r(t){var e=t.length;if(e!==0){kr();var n=zt;zt=!0;try{for(var r=0;r<e;r++){var o=t[r];o.f&G||(o.f^=G);var s=[];xr(o,s),Oo(s)}}finally{zt=n}}}function Oo(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var r=t[n];!(r.f&(de|Ht))&&ve(r)&&(Re(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?dr(r):r.fn=null))}}function Ro(){if(ue=!1,Xt>1001)return;const t=Ot;Ot=[],$r(t),ue||(Xt=0)}function Fe(t){be===wr&&(ue||(ue=!0,queueMicrotask(Ro)));for(var e=t;e.parent!==null;){e=e.parent;var n=e.f;if(n&(Oe|Lt)){if(!(n&G))return;e.f^=G}}Ot.push(e)}function xr(t,e){var n=t.first,r=[];t:for(;n!==null;){var o=n.f,s=(o&Lt)!==0,l=s&&(o&G)!==0;if(!l&&!(o&Ht))if(o&Jt){s?n.f^=G:ve(n)&&Re(n);var d=n.first;if(d!==null){n=d;continue}}else o&or&&r.push(n);var h=n.next;if(h===null){let g=n.parent;for(;g!==null;){if(t===g)break t;var f=g.next;if(f!==null){n=f;continue t}g=g.parent}}n=h}for(var _=0;_<r.length;_++)d=r[_],e.push(d),xr(d,e)}function Qt(t){var e=be,n=Ot;try{kr();const o=[];be=Ao,Ot=o,ue=!1,$r(n);var r=t==null?void 0:t();return No(),(Ot.length>0||o.length>0)&&Qt(),Xt=0,r}finally{be=e,Ot=n}}function x(t){var e=t.f;if(e&de)return t.v;if(H!==null){pt!==null&&pt.includes(t)&&bo();var n=H.deps;z===null&&n!==null&&n[et]===t?et++:z===null?z=[t]:z.push(t),Nt!==null&&M!==null&&M.f&G&&!(M.f&Lt)&&Nt.includes(t)&&(gt(M,St),Fe(M))}if(e&kt){var r=t;ve(r)&&mr(r)}return t.v}function Fo(t){const e=H;try{return H=null,t()}finally{H=e}}const Ho=~(St|fe|G);function gt(t,e){t.f=t.f&Ho|e}function pe(t,e=!1,n){Y={p:Y,c:null,e:null,m:!1,s:t,x:null,l:null},e||(Y.l={s:null,u:null,r1:[],r2:nt(!1)})}function _e(t){const e=Y;if(e!==null){t!==void 0&&(e.x=t);const l=e.e;if(l!==null){var n=M,r=H;e.e=null;try{for(var o=0;o<l.length;o++){var s=l[o];Ae(s.effect),Se(s.reaction),bn(s.fn)}}finally{Ae(n),Se(r)}}Y=e.p,e.m=!0}return t||{}}function st(t,e=null,n){if(typeof t!="object"||t===null||Ut in t)return t;const r=Qe(t);if(r!==io&&r!==so)return t;var o=new Map,s=_n(t),l=nt(0);s&&o.set("length",nt(t.length));var d;return new Proxy(t,{defineProperty(h,f,_){(!("value"in _)||_.configurable===!1||_.enumerable===!1||_.writable===!1)&&wo();var g=o.get(f);return g===void 0?(g=nt(_.value),o.set(f,g)):B(g,st(_.value,d)),!0},deleteProperty(h,f){var _=o.get(f);return _===void 0?f in h&&o.set(f,nt(tt)):(B(_,tt),Wn(l)),!0},get(h,f,_){var b;if(f===Ut)return t;var g=o.get(f),C=f in h;if(g===void 0&&(!C||(b=Rt(h,f))!=null&&b.writable)&&(g=nt(st(C?h[f]:tt,d)),o.set(f,g)),g!==void 0){var m=x(g);return m===tt?void 0:m}return Reflect.get(h,f,_)},getOwnPropertyDescriptor(h,f){var _=Reflect.getOwnPropertyDescriptor(h,f);if(_&&"value"in _){var g=o.get(f);g&&(_.value=x(g))}else if(_===void 0){var C=o.get(f),m=C==null?void 0:C.v;if(C!==void 0&&m!==tt)return{enumerable:!0,configurable:!0,value:m,writable:!0}}return _},has(h,f){var m;if(f===Ut)return!0;var _=o.get(f),g=_!==void 0&&_.v!==tt||Reflect.has(h,f);if(_!==void 0||M!==null&&(!g||(m=Rt(h,f))!=null&&m.writable)){_===void 0&&(_=nt(g?st(h[f],d):tt),o.set(f,_));var C=x(_);if(C===tt)return!1}return g},set(h,f,_,g){var $;var C=o.get(f),m=f in h;if(s&&f==="length")for(var b=_;b<C.v;b+=1){var T=o.get(b+"");T!==void 0?B(T,tt):b in h&&(T=nt(tt),o.set(b+"",T))}C===void 0?(!m||($=Rt(h,f))!=null&&$.writable)&&(C=nt(void 0),B(C,st(_,d)),o.set(f,C)):(m=C.v!==tt,B(C,st(_,d)));var L=Reflect.getOwnPropertyDescriptor(h,f);if(L!=null&&L.set&&L.set.call(g,_),!m){if(s&&typeof f=="string"){var S=o.get("length"),k=Number(f);Number.isInteger(k)&&k>=S.v&&B(S,k+1)}Wn(l)}return!0},ownKeys(h){x(l);var f=Reflect.ownKeys(h).filter(C=>{var m=o.get(C);return m===void 0||m.v!==tt});for(var[_,g]of o)g.v!==tt&&!(_ in h)&&f.push(_);return f},setPrototypeOf(){yo()}})}function Wn(t,e=1){B(t,t.v+e)}function Le(t){return t!==null&&typeof t=="object"&&Ut in t?t[Ut]:t}function Po(t,e){return Object.is(Le(t),Le(e))}var Me,Mt,Tr,Nr;function on(){if(Me===void 0){Me=window,Mt=document;var t=Element.prototype,e=Node.prototype;Tr=Rt(e,"firstChild").get,Nr=Rt(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function ge(t=""){return document.createTextNode(t)}function At(t){return Tr.call(t)}function $t(t){return Nr.call(t)}function lt(t){if(!j)return At(t);var e=At(R);return e===null&&(e=R.appendChild(ge())),_t(e),e}function $n(t,e){if(!j){var n=At(t);return n instanceof Comment&&n.data===""?$t(n):n}return R}function rt(t,e=1,n=!1){let r=j?R:t;for(;e--;)r=$t(r);if(!j)return r;var o=r.nodeType;if(n&&o!==3){var s=ge();return r==null||r.before(s),_t(s),s}return _t(r),r}function xn(t){t.textContent=""}let j=!1;function Ct(t){j=t}let R;function _t(t){if(t===null)throw pn(),se;return R=t}function He(){return _t($t(R))}function J(t){if(j){if($t(R)!==null)throw pn(),se;R=t}}function Io(t=1){if(j){for(var e=t,n=R;e--;)n=$t(n);R=n}}function sn(){for(var t=0,e=R;;){if(e.nodeType===8){var n=e.data;if(n===vn){if(t===0)return e;t-=1}else(n===er||n===hn)&&(t+=1)}var r=$t(e);e.remove(),e=r}}const Sr=new Set,ln=new Set;function qo(t,e,n,r){function o(s){if(r.capture||oe.call(e,s),!s.cancelBubble)return n.call(this,s)}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Pt(()=>{e.addEventListener(t,o,r)}):e.addEventListener(t,o,r),o}function ht(t,e,n,r,o){var s={capture:r,passive:o},l=qo(t,e,n,s);(e===document.body||e===window||e===document)&&ur(()=>{e.removeEventListener(t,l,s)})}function Ar(t){for(var e=0;e<t.length;e++)Sr.add(t[e]);for(var n of ln)n(t)}function oe(t){var L;var e=this,n=e.ownerDocument,r=t.type,o=((L=t.composedPath)==null?void 0:L.call(t))||[],s=o[0]||t.target,l=0,d=t.__root;if(d){var h=o.indexOf(d);if(h!==-1&&(e===document||e===window)){t.__root=e;return}var f=o.indexOf(e);if(f===-1)return;h<=f&&(l=h)}if(s=o[l]||t.target,s!==e){ke(t,"currentTarget",{configurable:!0,get(){return s||n}});try{for(var _,g=[];s!==null;){var C=s.assignedSlot||s.parentNode||s.host||null;try{var m=s["__"+r];if(m!==void 0&&!s.disabled)if(_n(m)){var[b,...T]=m;b.apply(s,[t,...T])}else m.call(s,t)}catch(S){_?g.push(S):_=S}if(t.cancelBubble||C===e||C===null)break;s=C}if(_){for(let S of g)queueMicrotask(()=>{throw S});throw _}}finally{t.__root=e,delete t.currentTarget}}}function Bo(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function Kt(t,e){var n=M;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}function mt(t,e){var n=(e&no)!==0,r=(e&ro)!==0,o,s=!t.startsWith("<!>");return()=>{if(j)return Kt(R,null),R;o===void 0&&(o=Bo(s?t:"<!>"+t),n||(o=At(o)));var l=r?document.importNode(o,!0):o.cloneNode(!0);if(n){var d=At(l),h=l.lastChild;Kt(d,h)}else Kt(l,l);return l}}function Vo(){if(j)return Kt(R,null),R;var t=document.createDocumentFragment(),e=document.createComment(""),n=ge();return t.append(e,n),Kt(e,n),t}function at(t,e){if(j){M.nodes_end=R,He();return}t!==null&&t.before(e)}const Wo=["touchstart","touchmove"];function Yo(t){return Wo.includes(t)}function Ke(t,e){e!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=e,t.nodeValue=e==null?"":e+"")}function Dr(t,e){const n=e.anchor??e.target.appendChild(ge());return Lr(t,{...e,anchor:n})}function Uo(t,e){on(),e.intro=e.intro??!1;const n=e.target,r=j,o=R;try{for(var s=At(n);s&&(s.nodeType!==8||s.data!==er);)s=$t(s);if(!s)throw se;Ct(!0),_t(s),He();const l=Lr(t,{...e,anchor:s});if(R===null||R.nodeType!==8||R.data!==vn)throw pn(),se;return Ct(!1),l}catch(l){if(l===se)return e.recover===!1&&go(),on(),xn(n),Ct(!1),Dr(t,e);throw l}finally{Ct(r),_t(o)}}const Wt=new Map;function Lr(t,{target:e,anchor:n,props:r={},events:o,context:s,intro:l=!0}){on();var d=new Set,h=g=>{for(var C=0;C<g.length;C++){var m=g[C];if(!d.has(m)){d.add(m);var b=Yo(m);e.addEventListener(m,oe,{passive:b});var T=Wt.get(m);T===void 0?(document.addEventListener(m,oe,{passive:b}),Wt.set(m,1)):Wt.set(m,T+1)}}};h(gn(Sr)),ln.add(h);var f=void 0,_=yn(()=>(ae(()=>{if(s){pe({});var g=Y;g.c=s}o&&(r.$$events=o),j&&Kt(n,null),f=t(n,r)||{},j&&(M.nodes_end=R),s&&_e()}),()=>{for(var g of d){e.removeEventListener(g,oe);var C=Wt.get(g);--C===0?(document.removeEventListener(g,oe),Wt.delete(g)):Wt.set(g,C)}ln.delete(h),an.delete(f)}));return an.set(f,_),f}let an=new WeakMap;function zo(t){const e=an.get(t);e&&e()}function je(t,e,n,r=null,o=!1){j&&He();var s=t,l=null,d=null,h=null,f=o?mn:0;cr(()=>{if(h===(h=!!e()))return;let _=!1;if(j){const g=s.data===hn;h===g&&(s=sn(),_t(s),Ct(!1),_=!0)}h?(l?xe(l):l=ae(()=>n(s)),d&&en(d,()=>{d=null})):(d?xe(d):r&&(d=ae(()=>r(s))),l&&en(l,()=>{l=null})),_&&Ct(!0)},f),j&&(s=R)}let Je=null;function Xo(t,e){return e}function Ko(t,e,n,r){for(var o=[],s=e.length,l=0;l<s;l++)En(e[l].e,o,!0);var d=s>0&&o.length===0&&n!==null;if(d){var h=n.parentNode;xn(h),h.append(n),r.clear(),Tt(t,e[0].prev,e[s-1].next)}hr(o,()=>{for(var f=0;f<s;f++){var _=e[f];d||(r.delete(_.k),Tt(t,_.prev,_.next)),Zt(_.e,!d)}})}function Tn(t,e,n,r,o,s=null){var l=t,d={flags:e,items:new Map,first:null},h=(e&tr)!==0;if(h){var f=t;l=j?_t(At(f)):f.appendChild(ge())}j&&He();var _=null;cr(()=>{var g=n(),C=_n(g)?g:g==null?[]:gn(g),m=C.length;let b=!1;if(j){var T=l.data===hn;T!==(m===0)&&(l=sn(),_t(l),Ct(!1),b=!0)}if(j){for(var L=null,S,k=0;k<m;k++){if(R.nodeType===8&&R.data===vn){l=R,b=!0,Ct(!1);break}var $=C[k],A=r($,k);S=Mr(R,d,L,null,$,A,k,o,e),d.items.set(A,S),L=S}m>0&&_t(sn())}j||Jo(C,d,l,o,e,r),s!==null&&(m===0?_?xe(_):_=ae(()=>s(l)):_!==null&&en(_,()=>{_=null})),b&&Ct(!0)}),j&&(l=R)}function Jo(t,e,n,r,o,s){var U,wt,ut,te;var l=(o&Qr)!==0,d=(o&(fn|dn))!==0,h=t.length,f=e.items,_=e.first,g=_,C,m=null,b,T=[],L=[],S,k,$,A;if(l)for(A=0;A<h;A+=1)S=t[A],k=s(S,A),$=f.get(k),$!==void 0&&((U=$.a)==null||U.measure(),(b??(b=new Set)).add($));for(A=0;A<h;A+=1){if(S=t[A],k=s(S,A),$=f.get(k),$===void 0){var xt=g?g.e.nodes_start:n;m=Mr(xt,e,m,m===null?e.first:m.next,S,k,A,r,o),f.set(k,m),T=[],L=[],g=m.next;continue}if(d&&Go($,S,A,o),$.e.f&Ht&&(xe($.e),l&&((wt=$.a)==null||wt.unfix(),(b??(b=new Set)).delete($))),$!==g){if(C!==void 0&&C.has($)){if(T.length<L.length){var Z=L[0],N;m=Z.prev;var P=T[0],I=T[T.length-1];for(N=0;N<T.length;N+=1)Yn(T[N],Z,n);for(N=0;N<L.length;N+=1)C.delete(L[N]);Tt(e,P.prev,I.next),Tt(e,m,P),Tt(e,I,Z),g=Z,m=I,A-=1,T=[],L=[]}else C.delete($),Yn($,g,n),Tt(e,$.prev,$.next),Tt(e,$,m===null?e.first:m.next),Tt(e,m,$),m=$;continue}for(T=[],L=[];g!==null&&g.k!==k;)(C??(C=new Set)).add(g),L.push(g),g=g.next;if(g===null)continue;$=g}T.push($),m=$,g=$.next}if(g!==null||C!==void 0){for(var F=C===void 0?[]:gn(C);g!==null;)F.push(g),g=g.next;var O=F.length;if(O>0){var X=o&tr&&h===0?n:null;if(l){for(A=0;A<O;A+=1)(ut=F[A].a)==null||ut.measure();for(A=0;A<O;A+=1)(te=F[A].a)==null||te.fix()}Ko(e,F,X,f)}}l&&Pt(()=>{var ee;if(b!==void 0)for($ of b)(ee=$.a)==null||ee.apply()}),M.first=e.first&&e.first.e,M.last=m&&m.e}function Go(t,e,n,r){r&fn&&B(t.v,e),r&dn?B(t.i,n):t.i=n}function Mr(t,e,n,r,o,s,l,d,h){var f=Je;try{var _=(h&fn)!==0,g=(h&to)===0,C=_?g?wn(o):nt(o):o,m=h&dn?nt(l):l,b={i:m,v:C,k:s,a:null,e:null,prev:n,next:r};return Je=b,b.e=ae(()=>d(t,C,m),j),b.e.prev=n&&n.e,b.e.next=r&&r.e,n===null?e.first=b:(n.next=b,n.e.next=b.e),r!==null&&(r.prev=b,r.e.prev=b.e),b}finally{Je=f}}function Yn(t,e,n){for(var r=t.next?t.next.e.nodes_start:n,o=e?e.e.nodes_start:n,s=t.e.nodes_start;s!==r;){var l=$t(s);o.before(s),s=l}}function Tt(t,e,n){e===null?t.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function Nn(t,e){Pt(()=>{var n=t.getRootNode(),r=n.host?n:n.head??n.ownerDocument.head;if(!r.querySelector("#"+e.hash)){const o=document.createElement("style");o.id=e.hash,o.textContent=e.code,r.appendChild(o)}})}function Zo(t,e){{const n=document.body;t.autofocus=!0,Pt(()=>{document.activeElement===n&&t.focus()})}}function Qo(t){j&&At(t)!==null&&xn(t)}let Un=!1;function jr(){Un||(Un=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const n of t.target.elements)(e=n.__on_r)==null||e.call(n)})},{capture:!0}))}function ti(t){if(j){var e=!1,n=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var r=t.value;it(t,"value",null),t.value=r}if(t.hasAttribute("checked")){var o=t.checked;it(t,"checked",null),t.checked=o}}};t.__on_r=n,To(n),jr()}}function ei(t,e){var n=t.__attributes??(t.__attributes={});n.value!==(n.value=e)&&(t.value=e)}function it(t,e,n,r){var o=t.__attributes??(t.__attributes={});j&&(o[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||o[e]!==(o[e]=n)&&(e==="loading"&&(t[uo]=n),n==null?t.removeAttribute(e):typeof n!="string"&&ni(t).includes(e)?t[e]=n:t.setAttribute(e,n))}var zn=new Map;function ni(t){var e=zn.get(t.nodeName);if(e)return e;zn.set(t.nodeName,e=[]);for(var n,r=Qe(t);r.constructor.name!=="Element";){n=oo(r);for(var o in n)n[o].set&&e.push(o);r=Qe(r)}return e}function le(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}function Or(t,e,n,r=n){t.addEventListener(e,n);const o=t.__on_r;o?t.__on_r=()=>{o(),r()}:t.__on_r=r,jr()}function ri(t,e,n=e){var r=De();Or(t,"input",()=>{var o=Kn(t)?Jn(t.value):t.value;n(o),r&&o!==(o=e())&&(t.value=o??"")}),he(()=>{var o=e();if(j&&t.defaultValue!==t.value){n(t.value);return}Kn(t)&&o===Jn(t.value)||t.type==="date"&&!o&&!t.value||(t.value=o??"")})}const Ge=new Set;function oi(t,e,n,r,o=r){var s=n.getAttribute("type")==="checkbox",l=t;let d=!1;if(e!==null)for(var h of e)l=l[h]??(l[h]=[]);l.push(n),Or(n,"change",()=>{var f=n.__value;s&&(f=Xn(l,f,n.checked)),o(f)},()=>o(s?[]:null)),he(()=>{var f=r();if(j&&n.defaultChecked!==n.checked){d=!0;return}s?(f=f||[],n.checked=Le(f).includes(Le(n.__value))):n.checked=Po(n.__value,f)}),ur(()=>{var f=l.indexOf(n);f!==-1&&l.splice(f,1)}),Ge.has(l)||(Ge.add(l),Pt(()=>{l.sort((f,_)=>f.compareDocumentPosition(_)===4?-1:1),Ge.delete(l)})),Pt(()=>{if(d){var f;if(s)f=Xn(l,f,n.checked);else{var _=l.find(g=>g.checked);f=_==null?void 0:_.__value}o(f)}})}function Xn(t,e,n){for(var r=new Set,o=0;o<t.length;o+=1)t[o].checked&&r.add(t[o].__value);return n||r.delete(e),Array.from(r)}function Kn(t){var e=t.type;return e==="number"||e==="range"}function Jn(t){return t===""?null:+t}function Gn(t,e){return t===e||(t==null?void 0:t[Ut])===e}function un(t={},e,n,r){return bn(()=>{var o,s;return he(()=>{o=s,s=[],Fo(()=>{t!==n(...s)&&(e(t,...s),o&&Gn(n(...o),t)&&e(null,...o))})}),()=>{Pt(()=>{s&&Gn(n(...s),t)&&e(null,...s)})}}),t}function Pe(t,e,n,r){var L;var o=(n&eo)!==0,s=t[e],l=(L=Rt(t,e))==null?void 0:L.set,d=r,h=!0,f=!1,_=()=>(f=!0,h&&(h=!1,d=r),d);s===void 0&&r!==void 0&&(l&&o&&mo(),s=_(),l&&l(s));var g;if(g=()=>{var S=t[e];return S===void 0?_():(h=!0,f=!1,S)},l){var C=t.$$legacy;return function(S,k){return arguments.length>0?((!k||C)&&l(k?g():S),S):g()}}var m=!1,b=wn(s),T=Cn(()=>{var S=g(),k=x(b);return m?(m=!1,k):b.v=S});return function(S,k){var $=x(T);if(arguments.length>0){const A=k?x(T):S;return T.equals(A)||(m=!0,B(b,A),f&&d!==void 0&&(d=A),x(T)),S}return $}}function ii(t){return new si(t)}var bt,ot;class si{constructor(e){ze(this,bt);ze(this,ot);var s;var n=new Map,r=(l,d)=>{var h=wn(d);return n.set(l,h),h};const o=new Proxy({...e.props||{},$$events:{}},{get(l,d){return x(n.get(d)??r(d,Reflect.get(l,d)))},has(l,d){return x(n.get(d)??r(d,Reflect.get(l,d))),Reflect.has(l,d)},set(l,d,h){return B(n.get(d)??r(d,h),h),Reflect.set(l,d,h)}});Xe(this,ot,(e.hydrate?Uo:Dr)(e.component,{target:e.target,props:o,context:e.context,intro:e.intro??!1,recover:e.recover})),(!((s=e==null?void 0:e.props)!=null&&s.$$host)||e.sync===!1)&&Qt(),Xe(this,bt,o.$$events);for(const l of Object.keys(K(this,ot)))l==="$set"||l==="$destroy"||l==="$on"||ke(this,l,{get(){return K(this,ot)[l]},set(d){K(this,ot)[l]=d},enumerable:!0});K(this,ot).$set=l=>{Object.assign(o,l)},K(this,ot).$destroy=()=>{zo(K(this,ot))}}$set(e){K(this,ot).$set(e)}$on(e,n){K(this,bt)[e]=K(this,bt)[e]||[];const r=(...o)=>n.call(this,...o);return K(this,bt)[e].push(r),()=>{K(this,bt)[e]=K(this,bt)[e].filter(o=>o!==r)}}$destroy(){K(this,ot).$destroy()}}bt=new WeakMap,ot=new WeakMap;let Rr;typeof HTMLElement=="function"&&(Rr=class extends HTMLElement{constructor(e,n,r){super();ct(this,"$$ctor");ct(this,"$$s");ct(this,"$$c");ct(this,"$$cn",!1);ct(this,"$$d",{});ct(this,"$$r",!1);ct(this,"$$p_d",{});ct(this,"$$l",{});ct(this,"$$l_u",new Map);ct(this,"$$me");this.$$ctor=e,this.$$s=n,r&&this.attachShadow({mode:"open"})}addEventListener(e,n,r){if(this.$$l[e]=this.$$l[e]||[],this.$$l[e].push(n),this.$$c){const o=this.$$c.$on(e,n);this.$$l_u.set(n,o)}super.addEventListener(e,n,r)}removeEventListener(e,n,r){if(super.removeEventListener(e,n,r),this.$$c){const o=this.$$l_u.get(n);o&&(o(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let e=function(o){return s=>{const l=document.createElement("slot");o!=="default"&&(l.name=o),at(s,l)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=li(this);for(const o of this.$$s)o in r&&(o==="default"&&!this.$$d.children?(this.$$d.children=e(o),n.default=!0):n[o]=e(o));for(const o of this.attributes){const s=this.$$g_p(o.name);s in this.$$d||(this.$$d[s]=Ee(s,o.value,this.$$p_d,"toProp"))}for(const o in this.$$p_d)!(o in this.$$d)&&this[o]!==void 0&&(this.$$d[o]=this[o],delete this[o]);this.$$c=ii({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=yn(()=>{he(()=>{var o;this.$$r=!0;for(const s of Ce(this.$$c)){if(!((o=this.$$p_d[s])!=null&&o.reflect))continue;this.$$d[s]=this.$$c[s];const l=Ee(s,this.$$d[s],this.$$p_d,"toAttribute");l==null?this.removeAttribute(this.$$p_d[s].attribute||s):this.setAttribute(this.$$p_d[s].attribute||s,l)}this.$$r=!1})});for(const o in this.$$l)for(const s of this.$$l[o]){const l=this.$$c.$on(o,s);this.$$l_u.set(s,l)}this.$$l={}}}attributeChangedCallback(e,n,r){var o;this.$$r||(e=this.$$g_p(e),this.$$d[e]=Ee(e,r,this.$$p_d,"toProp"),(o=this.$$c)==null||o.$set({[e]:this.$$d[e]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(e){return Ce(this.$$p_d).find(n=>this.$$p_d[n].attribute===e||!this.$$p_d[n].attribute&&n.toLowerCase()===e)||e}});function Ee(t,e,n,r){var s;const o=(s=n[t])==null?void 0:s.type;if(e=o==="Boolean"&&typeof e!="boolean"?e!=null:e,!r||!n[t])return e;if(r==="toAttribute")switch(o){case"Object":case"Array":return e==null?null:JSON.stringify(e);case"Boolean":return e?"":null;case"Number":return e??null;default:return e}else switch(o){case"Object":case"Array":return e&&JSON.parse(e);case"Boolean":return e;case"Number":return e!=null?+e:e;default:return e}}function li(t){const e={};return t.childNodes.forEach(n=>{e[n.slot||"default"]=!0}),e}function Ie(t,e,n,r,o,s){let l=class extends Rr{constructor(){super(t,n,o),this.$$p_d=e}static get observedAttributes(){return Ce(e).map(d=>(e[d].attribute||d).toLowerCase())}};return Ce(e).forEach(d=>{ke(l.prototype,d,{get(){return this.$$c&&d in this.$$c?this.$$c[d]:this.$$d[d]},set(h){var g;h=Ee(d,h,e),this.$$d[d]=h;var f=this.$$c;if(f){var _=(g=Rt(f,d))==null?void 0:g.get;_?f[d]=h:f.$set({[d]:h})}}})}),r.forEach(d=>{ke(l.prototype,d,{get(){var h;return(h=this.$$c)==null?void 0:h[d]}})}),t.element=l,l}const Dt=new Map([["yellow","#F8B920"],["red","#FF4646"],["blue","#0064FF"],["green","#00C564"]]),ai=["SCRIPT","STYLE","NOSCRIPT","TEXTAREA","OPTION"];function Fr(t){const e=document.documentElement.lang||void 0,n=t.map(d=>d.trim().toLocaleLowerCase(e)),r=n.map(()=>({start:null,end:null,shift:0})),o=n.map(()=>[]),s=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,d=>{var h,f;return ai.includes((h=d.parentNode)==null?void 0:h.tagName)||((f=d.parentNode)==null?void 0:f.contentEditable)=="true"?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT});let l;for(;l=s.nextNode();)if(l!=null&&l.nodeValue)for(let d=0;d<l.nodeValue.length;d++){const h=l.nodeValue[d].toLocaleLowerCase(e).trim();h&&n.forEach((f,_)=>{var C,m;for(;f[r[_].shift]&&!f[r[_].shift].trim();)r[_].shift++;let g=f[r[_].shift]===h;if(!g&&r[_].shift&&(r[_].shift=0,g=f[r[_].shift]===h),g&&(r[_].shift||(r[_].start=[l,d]),r[_].end=[l,d],r[_].shift++),r[_].shift>=f.length){const b=document.createRange();b.setStart(r[_].start[0],r[_].start[1]),b.setEnd(r[_].end[0],r[_].end[1]+1),!b.collapsed&&(!((C=b.commonAncestorContainer.parentElement)!=null&&C.checkVisibility)||(m=b.commonAncestorContainer.parentElement)!=null&&m.checkVisibility())?o[_].push(b):b.detach(),g=!1}g||(r[_].shift=0,r[_].start=null,r[_].end=null)})}return o}const Ft=`rh-${new Date().getTime()}-`,qe="highlights"in CSS;function ui(t){if(!t.length&&!CSS.highlights.size)return;const e=[];if(CSS.highlights.clear(),t.length){const r=Fr(t.map(({text:o})=>o||""));for(const o in t){if(!r[o].length)continue;const{_id:s,color:l,note:d}=t[o],h=`${Ft}${s}`;CSS.highlights.set(h,new Highlight(...r[o]));const f=r[o][0].getBoundingClientRect();e.push(`
                ::highlight(${h}) {
                    all: unset;
                    background-color: color-mix(in srgb, ${Dt.get(l)||l||"yellow"}, white 60%) !important;
                    color: color-mix(in srgb, ${Dt.get(l)||l||"yellow"}, black 80%) !important;
                    ${d?"text-decoration: underline wavy; -webkit-text-decoration: underline wavy;":""}
                    text-decoration-thickness: from-font;
                }

                /* fuck you dark reader */
                html[data-darkreader-scheme="dark"] ::highlight(${h}) {
                    color: CanvasText !important;
                }

                :root {
                    --highlight-${s}-top: ${(100/document.documentElement.scrollHeight*(window.scrollY+f.top-10)).toFixed(2)}%;
                }
            `);for(const _ of r[o])_.detach()}}const n=(()=>{let r=document.getElementById(Ft);return r||(r=document.createElement("style"),r.id=Ft,document.head.appendChild(r)),r})();n.innerHTML=e.join(`
`)}function ci(){var t;(t=document.getElementById(Ft))==null||t.remove()}function fi(t){var e;for(const[n,r]of CSS.highlights){const o=n.replace(Ft,"");if(t==o)for(const s of r){(e=s.startContainer.parentElement)==null||e.scrollIntoView({behavior:"smooth",block:"start"});break}}}function di(t){let e;for(const[n,r]of CSS.highlights)for(const o of r){const s=t.compareBoundaryPoints(Range.START_TO_START,o),l=t.compareBoundaryPoints(Range.END_TO_END,o);(s==0&&l==0||t!=null&&t.collapsed&&s>=0&&l<=0)&&(e=[n.replace(Ft,""),o])}if(e)return e[0].replace(Ft,"")}const Et=`rh-${new Date().getTime()}`;function hi(t){const e=document.body.querySelectorAll(`.${Et}`);if(!t.length&&!e.length)return;e.forEach(s=>s.outerHTML=s.innerText);const n=[],r=Fr(t.map(({text:s})=>s||""));for(const s in t){const{_id:l,color:d}=t[s];for(const h of r[s]){const f=document.createElement("mark");f.className=Et,f.setAttribute("data-id",String(l)),f.append(h.extractContents()),h.insertNode(f),h.detach()}n.push(`
            .${Et}[data-id="${l}"] {
                all: unset;
                display: inline-block !important;
                background-color: white !important;
                background-image: linear-gradient(to bottom, ${Zn(Dt.get(d)||d,.4)} 0, ${Zn(Dt.get(d)||d,.4)} 100%) !important;
                color: black !important;
            }
        `)}const o=(()=>{let s=document.getElementById(Et);return s||(s=document.createElement("style"),s.id=Et,document.head.appendChild(s)),s})();o.innerHTML=n.join(`
`)}function vi(){var t;document.body.querySelectorAll(`.${Et}`).forEach(e=>e.outerHTML=e.innerText),(t=document.getElementById(Et))==null||t.remove()}function pi(t){const e=document.body.querySelector(`.${Et}[data-id="${t}"]`);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function _i(t){const e=t.commonAncestorContainer.nodeType==Node.ELEMENT_NODE?t.commonAncestorContainer:t.commonAncestorContainer.parentElement;if((e==null?void 0:e.className)==Et){if(!t.collapsed){const n=new Range;n.selectNodeContents(t.commonAncestorContainer);const r=t.compareBoundaryPoints(Range.START_TO_START,n),o=t.compareBoundaryPoints(Range.END_TO_END,n);if(n.detach(),r!=0||o!=0)return}return e.getAttribute("data-id")||void 0}}function Zn(t,e){if(!t)return t;const n=parseInt(t.slice(1,3),16),r=parseInt(t.slice(3,5),16),o=parseInt(t.slice(5,7),16);return`rgba(${n}, ${r}, ${o}, ${e})`}function gi(t){return qe?ui(t):hi(t)}function Ze(t){return gi(t)}function mi(){return qe?ci():vi()}function Hr(t){return qe?fi(t):pi(t)}function Pr(){var n,r,o;const t=document.getSelection();if(!(t!=null&&t.rangeCount))return;const e=t.getRangeAt(0);if(!((o=((n=e==null?void 0:e.commonAncestorContainer)==null?void 0:n.nodeType)==1?e==null?void 0:e.commonAncestorContainer:(r=e==null?void 0:e.commonAncestorContainer)==null?void 0:r.parentElement)!=null&&o.closest('[contenteditable=""], [contenteditable=true]')))return e}function ie(){const t=document.getSelection();t!=null&&t.rangeCount&&t.removeAllRanges()}function wi(t){return qe?di(t):_i(t)}function Qn(t){if(!t)return"";var e=document.createElement("div");e.appendChild(t.cloneContents().cloneNode(!0)),document.body.appendChild(e);const n=e.innerText;return document.body.removeChild(e),e=void 0,n}function yi(t,e,n){let r=jt(st([])),o=jt(!1),s=jt(!1),l=jt(void 0);function d(m){const b=wi(m);if(b)return x(r).find(L=>L._id==b);if(Qn(m).trim())return{text:Qn(m).trim()}}function h(m){const b={...typeof m._id=="string"?{_id:m._id}:{},...typeof m.text=="string"?{text:m.text}:{},...typeof m.note=="string"?{note:m.note}:{},color:m.color||"yellow"};if(!b.text)return;const T=x(r).findIndex(L=>{var S,k;return L._id==b._id||((S=L.text)==null?void 0:S.toLocaleLowerCase().trim())===((k=b.text)==null?void 0:k.toLocaleLowerCase().trim())});T!=-1?(x(r)[T]=b,e(b)):(x(r).push(b),t(b))}function f({_id:m}){B(r,st(x(r).filter(b=>b._id!=m))),n({_id:m})}function _(m){B(l,st(JSON.parse(JSON.stringify(m))))}function g(){x(l)&&(h(x(l)),B(l,void 0))}function C(){B(l,void 0)}return{get highlights(){return x(r)},set highlights(m){B(r,st(m))},get pro(){return x(o)},set pro(m){B(o,st(m))},get nav(){return x(s)},set nav(m){B(s,st(m))},get draft(){return x(l)},find:d,upsert:h,remove:f,setDraft:_,draftSubmit:g,draftCancel:C}}const bi="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(bi);function Ei(t,e){let n=null,r=!0;return function(...s){n||(r?(t(...s),r=!1):(clearTimeout(n),n=setTimeout(()=>{t(...s),clearTimeout(n),n=null},e)))}}function cn(){var t;return(t=navigator==null?void 0:navigator.userAgentData)!=null&&t.mobile?!0:/Android|webOS|iPhone|iPad|iPod|Opera Mini/i.test(navigator.userAgent)}var Ci=mt('<button type="submit" class="svelte-ado8wf"><span class="color svelte-ado8wf"></span></button>'),ki=mt('<button type="submit" value="remove" title="Delete highlight" aria-label="Delete highlight" class="svelte-ado8wf"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="svelte-ado8wf"><g class="svelte-ado8wf"><line x1="2.75" y1="4.25" x2="15.25" y2="4.25" fill="none" stroke-linecap="round" stroke-linejoin="round" class="svelte-ado8wf"></line><path d="M6.75,4.25v-1.5c0-.552,.448-1,1-1h2.5c.552,0,1,.448,1,1v1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="svelte-ado8wf"></path><path d="M13.5,6.75l-.4,7.605c-.056,1.062-.934,1.895-1.997,1.895H6.898c-1.064,0-1.941-.833-1.997-1.895l-.4-7.605" fill="none" stroke-linecap="round" stroke-linejoin="round" class="svelte-ado8wf"></path></g></svg></button>'),$i=mt('<dialog class="svelte-ado8wf"><form method="dialog" class="svelte-ado8wf"><!> <button type="submit" value="note" title="Add note" aria-label="Add note" class="svelte-ado8wf"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" class="svelte-ado8wf"><g class="svelte-ado8wf"><path stroke-linecap="round" stroke-linejoin="round" d="M9,1.75C4.996,1.75,1.75,4.996,1.75,9c0,1.319,.358,2.552,.973,3.617,.43,.806-.053,2.712-.973,3.633,1.25,.068,2.897-.497,3.633-.973,.489,.282,1.264,.656,2.279,.848,.433,.082,.881,.125,1.338,.125,4.004,0,7.25-3.246,7.25-7.25S13.004,1.75,9,1.75Z" class="svelte-ado8wf"></path><path stroke-width="0" d="M9,10c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" class="svelte-ado8wf"></path><path stroke-width="0" d="M5.5,10c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" class="svelte-ado8wf"></path><path stroke-width="0" d="M12.5,10c-.552,0-1-.449-1-1s.448-1,1-1,1,.449,1,1-.448,1-1,1Z" class="svelte-ado8wf"></path></g></svg></button> <!></form></dialog>');const xi={hash:"svelte-ado8wf",code:`
    .svelte-ado8wf {
        user-select: none;
        -webkit-user-select: none;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    dialog.svelte-ado8wf {
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
        dialog.svelte-ado8wf {
            --bg-light: rgba(255, 255, 255, .8);
            --bg-dark: rgba(60, 60, 60, .8);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }
    }

    dialog.mobile.svelte-ado8wf {
        --control-size: 26px;
    }

    dialog.svelte-ado8wf {
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

    dialog.mobile.new.svelte-ado8wf {
        position: fixed;
        top: auto !important;
        left: auto !important;
        right: 16px !important;
        bottom: 16px !important;
        margin-right: env(safe-area-inset-right);
        margin-bottom: env(safe-area-inset-bottom);
    }

    [open].svelte-ado8wf {
        box-shadow: 0 0 0 .5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.05), 0 15px 40px rgba(0,0,0,.1);
    }

    form.svelte-ado8wf {
        display: flex;
        gap: 2px;
        margin: 0;
        padding: 0;
    }

    button.svelte-ado8wf {
        border-radius: var(--control-size);
        border: 0;
        background: transparent;
        cursor: pointer;
        appearance: none;
        touch-action: manipulation;
        width: calc(var(--control-size) + var(--padding-s)*2);
        height: calc(var(--control-size) + var(--padding-s)*2);
        padding: var(--padding-s);
        color: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background .15s ease-in-out;
    }

    @media (pointer: fine) {
        button.svelte-ado8wf:hover {
            transition: none;
            background: var(--hover-bg-light);

            @supports(color: light-dark(white,black)) {
                background: light-dark(var(--hover-bg-light), var(--hover-bg-dark));
            }
        }
    }

    button.svelte-ado8wf:active {
        transition: none;
        background: var(--active-bg-light);

        @supports(color: light-dark(white,black)) {
            background: light-dark(var(--active-bg-light), var(--active-bg-dark));
        }
    }

    svg.svelte-ado8wf {
        stroke: currentColor;
        stroke-width: 1.5px;
    }

    .color.svelte-ado8wf {
        pointer-events: none;
        content: '';
        display: block;
        width: 15px;
        height: 15px;
        background: var(--color);
        transition: background .15s ease-in-out, box-shadow .15s ease-in-out;
        border-radius: 50%;
    }

    .color.active.svelte-ado8wf {
        background: transparent;
        box-shadow: inset 0 0 0 5px var(--color);
    }

    /* animation */
    dialog.svelte-ado8wf {
        transition: 
            display .25s allow-discrete ease-in-out, 
            overlay .25s allow-discrete ease-in-out, 
            box-shadow .25s allow-discrete ease-in-out, 
            opacity .25s ease-in-out,
            left .15s ease-in-out,
            top .15s ease-in-out,
            right .15s ease-in-out,
            bottom .15s ease-in-out;
        opacity: 0;
    }

    [open].svelte-ado8wf {
        opacity: 1;
    }

    dialog.svelte-ado8wf:not([open]) {
        transition-duration: .2s;
        pointer-events: none;
    }

    @starting-style {
        [open].svelte-ado8wf {
            opacity: 0;
        }
    }
`};function Ir(t,e){pe(e,!0),Nn(t,xi);let n=Pe(e,"store",7),r,o=jt(void 0),s=jt(!1);function l(N){if(!x(o))return;const P=N.currentTarget.returnValue;switch(N.currentTarget.returnValue="",P){case"add":n().upsert(x(o)),ie();break;case"note":n().setDraft(x(o)),ie();break;case"remove":n().remove(x(o)),ie();break;default:if(Dt.has(P)){n().upsert({...x(o),color:P}),ie();return}break}}function d(){B(s,!0)}function h(){B(s,!1),setTimeout(f)}function f(){if(x(s)){r==null||r.close();return}requestAnimationFrame(()=>{const N=Pr(),P=N&&n().find(N);if(!N||!(P!=null&&P._id)&&!N.toString().trim()){r==null||r.close();return}B(o,st(P)),r.inert=!0,r==null||r.show(),r.inert=!1;const I=256,F=10,O=N.getBoundingClientRect(),X=Math.min(Math.max(O.x,F)+window.scrollX,window.innerWidth+window.scrollX-I-F),U=Math.min(window.innerWidth-Math.max(O.x,F)-window.scrollX-O.width,window.innerWidth-window.scrollX-I-F),wt=Math.max(O.y,40)+window.scrollY+O.height+4;window.innerHeight-Math.max(O.y,40)-window.scrollY+4;const ut=X<window.innerWidth/2+window.scrollX;r==null||r.style.setProperty("left",ut?`${X}px`:"unset"),r==null||r.style.setProperty("right",ut?"unset":`${U}px`),r==null||r.style.setProperty("top",`${wt}px`),r==null||r.style.setProperty("bottom","unset")})}const _=Ei(f,200);var g=$i();ht("mousedown",Mt,d),ht("touchstart",Mt,d,void 0,!0),ht("mouseup",Mt,h),ht("touchend",Mt,h),ht("touchcancel",Mt,h),ht("selectionchange",Mt,_),un(g,N=>r=N,()=>r);const C=Cn(cn);vt(()=>le(g,"mobile",x(C)));var m=lt(g),b=lt(m);Tn(b,17,()=>Dt,([N,P])=>N,(N,P)=>{let I=()=>x(P)[0],F=()=>x(P)[1];var O=Ci(),X=lt(O);J(O),vt(()=>{var U;it(O,"aria-label",I()),ei(O,I()),it(X,"style",`--color: ${F()??""}`),le(X,"active",I()==((U=x(o))==null?void 0:U.color))}),at(N,O)});var T=rt(b,2),L=lt(T),S=lt(L),k=lt(S),$=rt(k),A=rt($),xt=rt(A);J(S),J(L),J(T);var Z=rt(T,2);return je(Z,()=>{var N;return(N=x(o))==null?void 0:N._id},N=>{var P=ki();at(N,P)}),J(m),J(g),vt(()=>{var N,P,I,F,O,X;le(g,"new",!((N=x(o))!=null&&N._id)),it(k,"fill",(P=x(o))!=null&&P.note?"currentColor":"none"),it(k,"stroke-width",(I=x(o))!=null&&I.note?"0":void 0),it($,"fill",(F=x(o))!=null&&F.note?"none":"currentColor"),it(A,"fill",(O=x(o))!=null&&O.note?"none":"currentColor"),it(xt,"fill",(X=x(o))!=null&&X.note?"none":"currentColor")}),ht("close",g,l),at(t,g),_e({get store(){return n()},set store(N){n(N),Qt()}})}Ie(Ir,{store:{}},[],[],!0);function Ti(t){const e=t.currentTarget.getBoundingClientRect();e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width||(t.preventDefault(),t.currentTarget.close())}var Ni=(t,e)=>B(e,!1),Si=mt('<input type="radio" name="color" class="svelte-n7j6yt">'),Ai=mt('<div class="unlock svelte-n7j6yt"><a href="https://raindrop.io/pro/buy" target="_blank" class="svelte-n7j6yt">Upgrade to Pro</a> to unlock annotation</div>'),Di=mt('<blockquote role="presentation" class="svelte-n7j6yt"> </blockquote> <fieldset class="color svelte-n7j6yt"></fieldset> <textarea class="note svelte-n7j6yt" rows="4" maxlength="5000" placeholder="Notes (optional)"></textarea> <!>',1),Li=mt('<dialog role="presentation" class="svelte-n7j6yt"><header class="svelte-n7j6yt"> </header> <form method="dialog" class="svelte-n7j6yt"><!> <footer class="svelte-n7j6yt"><button formnovalidate="" class="svelte-n7j6yt">Cancel <sup class="svelte-n7j6yt">esc</sup></button> <button type="submit" value="OK" class="svelte-n7j6yt"> <sup class="svelte-n7j6yt">&crarr;</sup></button></footer></form></dialog>');const Mi={hash:"svelte-n7j6yt",code:`
    .svelte-n7j6yt {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    dialog.svelte-n7j6yt {
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

    dialog.mobile.svelte-n7j6yt {
        left: 0;right: 0;bottom: 0;top: 0;
        width: 100%;
        margin: 0;
        max-width: 100%;
        max-height: 100%;
        border-radius: 0;
        bottom: auto;
    }

    dialog.svelte-n7j6yt, header.svelte-n7j6yt {
        background: var(--bg-light);

        @supports(color: light-dark(white,black)) {
            background: light-dark(var(--bg-light), var(--bg-dark));
        }
    }

    [open].svelte-n7j6yt {
        box-shadow: 0 0 0 .5px rgba(60, 60, 60, .9), 0 3px 10px rgba(0,0,0,.05), 0 7px 15px -3px rgba(0,0,0,.15);
    }

    .svelte-n7j6yt::backdrop {
        background-color: rgba(0,0,0,.3);
    }

    header.svelte-n7j6yt {
        margin: 0;
        padding: 1em;
        font-weight: bold;
        position: sticky;
        top: 0;
    }

    @supports(animation-timeline: scroll()) {
        header.svelte-n7j6yt {
            animation: svelte-n7j6yt-header-scroll linear both;
            animation-timeline: scroll();
            animation-range: 0 1px;
        }
    }

    @keyframes svelte-n7j6yt-header-scroll {
        to {
            box-shadow: 0 .5px 0 rgba(0,0,0,.2);
        }
    }

    form.svelte-n7j6yt {
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 1em;
        padding-top: 0;
    }

    .color.svelte-n7j6yt {
        all: unset;
        display: flex;
        gap: .75em;
    }

    .color.svelte-n7j6yt input[type="radio"]:where(.svelte-n7j6yt) {
        cursor: pointer;
        appearance: none;
        user-select: none;
        -webkit-user-select: none;
        margin: 0;
        background: var(--color);
        transition: box-shadow .2s ease-in-out, background .2s ease-in-out;
        width: 2em;
        height: 2em;
        border-radius: 50%;
    }

    .color.svelte-n7j6yt input[type="radio"]:where(.svelte-n7j6yt):checked {
        background: transparent;
        box-shadow: inset 0 0 0 .5em var(--color);
    }

    .color.svelte-n7j6yt input[type="radio"]:where(.svelte-n7j6yt):active {
        transform: translateY(1px);
    }

    blockquote.svelte-n7j6yt, .note.svelte-n7j6yt, button.svelte-n7j6yt {
        background: var(--control-bg-light);

        @supports(color: light-dark(white,black)) {
            background: light-dark(var(--control-bg-light), var(--control-bg-dark));
        }
    }

    blockquote.svelte-n7j6yt {
        white-space: pre-wrap;
        margin: 0;
        min-width: 100%;
        width: 0;
        font-size: 16px;
    }

    blockquote.compact.svelte-n7j6yt {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        overflow: clip;
    }

    blockquote.svelte-n7j6yt, .note.svelte-n7j6yt {
        border-radius: .5em;
        padding: .5em .6em;
    }

    .note.svelte-n7j6yt {
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

    .note.svelte-n7j6yt:focus {
        background: transparent;
    }
    
    footer.svelte-n7j6yt {
        all: unset;
        display: flex;
        justify-content: flex-end;
        gap: .75em;
    }

    button.svelte-n7j6yt {
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

    button.svelte-n7j6yt:active {
        transform: translateY(1px);
    }

    button.svelte-n7j6yt sup:where(.svelte-n7j6yt) {
        margin-left: .25em;
        vertical-align: text-top;
        opacity: .5;
    }

    dialog.mobile.svelte-n7j6yt button:where(.svelte-n7j6yt) sup:where(.svelte-n7j6yt) {
        display: none;
    }

    button[value].svelte-n7j6yt {
        background: blue;
        background: AccentColor;
        color: white;
    }

    .unlock.svelte-n7j6yt {
        font-size: .75em;
        color: GrayText;
    }

    /* animation */
    dialog.svelte-n7j6yt, .svelte-n7j6yt::backdrop {
        transition: 
            display .2s allow-discrete ease-in-out, 
            overlay .2s allow-discrete ease-in-out, 
            opacity .2s ease-in-out,
            transform .2s ease-in-out,
            box-shadow .2s ease-in-out;
        opacity: 0;
    }

    dialog.svelte-n7j6yt {
        transform: translateY(1em);
    }

    [open].svelte-n7j6yt,
    [open].svelte-n7j6yt::backdrop {
        opacity: 1;
        transform: translateY(0);
    }

    @starting-style {
        [open].svelte-n7j6yt,
        [open].svelte-n7j6yt::backdrop {
            opacity: 0;
        }

        [open].svelte-n7j6yt {
            transform: translateY(-1em);
        }
    }

    @supports not selector(::highlight(a)) {
        dialog.svelte-n7j6yt, dialog.svelte-n7j6yt::backdrop {
            animation: svelte-n7j6yt-simple-appear .2s forwards;
        }
        @keyframes svelte-n7j6yt-simple-appear {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    }
`};function qr(t,e){pe(e,!0),Nn(t,Mi);const n=[];let r=Pe(e,"store",7),o,s,l=jt(!0);tn(()=>{r().draft?(B(l,!0),o==null||o.showModal()):o==null||o.close()});function d(k){const $=k.currentTarget.returnValue;k.currentTarget.returnValue="",setTimeout($?r().draftSubmit:r().draftCancel,200)}function h(k){var $;cn()||(k.stopImmediatePropagation(),k.stopPropagation(),k.key=="Enter"&&!k.shiftKey&&(k.preventDefault(),s&&(($=k.currentTarget.closest("form"))==null||$.requestSubmit(s))))}var f=Li();un(f,k=>o=k,()=>o),f.__mousedown=[Ti];const _=Cn(cn);vt(()=>le(f,"mobile",x(_)));var g=lt(f),C=lt(g);J(g);var m=rt(g,2),b=lt(m);je(b,()=>r().draft,k=>{var $=Di(),A=$n($);A.__click=[Ni,l];var xt=lt(A);vt(()=>{var I,F;return Ke(xt,((F=(I=r().draft)==null?void 0:I.text)==null?void 0:F.trim())||"")}),J(A);var Z=rt(A,2);Tn(Z,21,()=>Dt,Xo,(I,F)=>{let O=()=>x(F)[0],X=()=>x(F)[1];var U=Si();ti(U);var wt;vt(()=>{wt!==(wt=O())&&(U.value=(U.__value=O())==null?"":O()),it(U,"style",`--color: ${X()??""}`)}),oi(n,[],U,()=>(O(),r().draft.color),ut=>r().draft.color=ut),at(I,U)}),J(Z);var N=rt(Z,2);Qo(N),Zo(N),N.__keydown=h;var P=rt(N,2);je(P,()=>!r().pro,I=>{var F=Ai();at(I,F)}),vt(()=>{le(A,"compact",x(l)),N.disabled=!r().pro}),ri(N,()=>r().draft.note,I=>r().draft.note=I),at(k,$)});var T=rt(b,2),L=rt(lt(T),2);un(L,k=>s=k,()=>s);var S=lt(L);return Io(),J(L),J(T),J(m),J(f),vt(()=>{var k,$;Ke(C,`${((k=r().draft)!=null&&k._id?"Edit":"New")??""} highlight`),Ke(S,`${(($=r().draft)!=null&&$._id?"Update":"Create")??""} `)}),ht("close",f,d),at(t,f),_e({get store(){return r()},set store(k){r(k),Qt()}})}Ar(["mousedown","click","keydown"]);Ie(qr,{store:{}},[],[],!0);const ji=t=>{const e=t.target.getAttribute("data-highlight");e&&(t.preventDefault(),Hr(e))};var Oi=mt('<div class="svelte-rwfy02"></div>'),Ri=mt('<nav role="presentation" class="svelte-rwfy02"></nav>');const Fi={hash:"svelte-rwfy02",code:`
    nav.svelte-rwfy02 {
        all: unset;
    }
    
    div.svelte-rwfy02 {
        position: fixed;
        right: 0;
        width: 24px;
        height: 20px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        cursor: pointer;
        background: transparent;
        z-index: 99999999999999;
    }

    div.svelte-rwfy02::before {
        content: '';
        display: block;
        height: 3px;
        border-radius: 3px;
        width: 16px;
        background: var(--color);
        transition: width .15s ease-in-out;
    }

    div.svelte-rwfy02:hover::before {
        width: 100%;
    }
`};function Br(t,e){pe(e,!0),Nn(t,Fi);let n=Pe(e,"store",7);var r=Vo(),o=$n(r);return je(o,()=>n().nav,s=>{var l=Ri();l.__click=[ji],Tn(l,21,()=>n().highlights,d=>d._id,(d,h)=>{var f=Oi();vt(()=>it(f,"style",`top: var(--highlight-${x(h)._id??""}-top); --color: ${(Dt.get(x(h).color)||x(h).color)??""}`)),vt(()=>it(f,"data-highlight",x(h)._id)),at(d,f)}),J(l),at(s,l)}),at(t,r),_e({get store(){return n()},set store(s){n(s),Qt()}})}Ar(["click"]);Ie(Br,{store:{}},[],[],!0);var Hi=mt("<!> <!> <!>",1);function Pi(t,e){pe(e,!0);let n=Pe(e,"store",7);tn(()=>{Ze(n().highlights)});let r;function o(){Ze(n().highlights),clearTimeout(r),r=setTimeout(()=>Ze(n().highlights),3e3)}yn(()=>{document.readyState&&o()}),tn(()=>mi);var s=Hi();ht("load",Me,o),ht("popstate",Me,o);var l=$n(s);Ir(l,{get store(){return n()}});var d=rt(l,2);qr(d,{get store(){return n()}});var h=rt(d,2);return Br(h,{get store(){return n()}}),at(t,s),_e({get store(){return n()},set store(f){n(f),Qt()}})}customElements.define("rdh-ui",Ie(Pi,{store:{}},[],[],!0));function Ii(t){if(typeof chrome=="object"&&chrome.runtime&&chrome.runtime.onMessage||typeof browser=="object"&&browser.runtime&&browser.runtime.onMessage){const{runtime:e}=typeof browser=="object"?browser:chrome,n=(r,o)=>{o.id==e.id&&typeof r.type=="string"&&t(r)};return e.onMessage.removeListener(n),e.onMessage.addListener(n),r=>e.sendMessage(null,r)}if(window.webkit&&window.webkit.messageHandlers&&window.webkit.messageHandlers.rdh)return window.rdhSend=t,e=>window.webkit.messageHandlers.rdh.postMessage(e);if(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron){const{ipcRenderer:e}=require("electron"),n=(r,o)=>t(o);return e.removeListener("RDH",n),e.on("RDH",n),r=>e.sendToHost("RDH",r)}if("ReactNativeWebView"in window)return window.ReactNativeWebViewSendMessage=t,e=>window.ReactNativeWebView.postMessage(JSON.stringify(e));if(window.self!==window.top){const e=({data:n,source:r})=>{r!==window.parent||typeof n!="object"||typeof n.type!="string"||t(n)};return window.removeEventListener("message",e),window.addEventListener("message",e),n=>window.parent.postMessage(n,"*")}throw new Error("unsupported platform")}async function qi(t){let e=!1;const n=new Set,r=Ii(o=>{if(!e){n.add(o);return}t(o)});await new Promise(o=>{function s(){window.removeEventListener("DOMContentLoaded",s),o()}document.readyState=="loading"?(window.removeEventListener("DOMContentLoaded",s),window.addEventListener("DOMContentLoaded",s,{once:!0})):o()}),e=!0;for(const o of n)t(o),n.delete(o);return r}const re=document.createElement("rdh-ui");(async()=>{const t=await qi(n=>{switch(n.type){case"RDH_APPLY":Array.isArray(n.payload)&&(e.highlights=n.payload);break;case"RDH_CONFIG":typeof n.payload.pro=="boolean"&&(e.pro=n.payload.pro),typeof n.payload.nav=="boolean"&&(e.nav=n.payload.nav),typeof n.payload.enabled=="boolean"&&(n.payload.enabled===!0?document.body.contains(re)||document.body.appendChild(re):document.body.contains(re)&&document.body.removeChild(re));break;case"RDH_SCROLL":typeof n.payload._id=="string"&&Hr(n.payload._id);break;case"RDH_ADD_SELECTION":const r=Pr();if(!r)return;const o=e.find(r);if(!o)return;e.upsert(o),ie();break;case"RDH_NOTE_SELECTION":console.log("not implemented yet");break}}),e=yi(n=>t({type:"RDH_ADD",payload:n}),n=>t({type:"RDH_UPDATE",payload:n}),({_id:n})=>t({type:"RDH_REMOVE",payload:{_id:n}}));re.store=e,t({type:"RDH_READY",payload:{url:location.href}})})();
