!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.preactHtml={})}(this,function(e){var t={},n=[],r=[];function o(e,o){var i,a,l,p,s=r;for(p=arguments.length;p-- >2;)n.push(arguments[p]);for(o&&null!=o.children&&(n.length||n.push(o.children),delete o.children);n.length;)if((a=n.pop())&&void 0!==a.pop)for(p=a.length;p--;)n.push(a[p]);else"boolean"==typeof a&&(a=null),(l="function"!=typeof e)&&(null==a?a="":"number"==typeof a?a=String(a):"string"!=typeof a&&(l=!1)),l&&i?s[s.length-1]+=a:s===r?s=[a]:s.push(a),i=l;var c=new function(){};return c.nodeName=e,c.children=s,c.attributes=null==o?void 0:o,c.key=null==o?void 0:o.key,void 0!==t.vnode&&t.vnode(c),c}function i(e,t){for(var n in t)e[n]=t[n];return e}var a="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout,l=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,p=[];function s(e){!e._dirty&&(e._dirty=!0)&&1==p.push(e)&&(t.debounceRendering||a)(c)}function c(){var e,t=p;for(p=[];e=t.pop();)e._dirty&&$(e)}function u(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function f(e){var t=i({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function v(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var i in n)i in r||(e.style[i]="");for(var i in r)e.style[i]="number"==typeof r[i]&&!1===l.test(i)?r[i]+"px":r[i]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var a=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,_,a):e.removeEventListener(t,_,a),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var p=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?p?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(p?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function _(e){return this._listeners[e.type](t.event&&t.event(e)||e)}var m=[],h=0,b=!1,y=!1;function g(){for(var e;e=m.pop();)t.afterMount&&t.afterMount(e),e.componentDidMount&&e.componentDidMount()}function C(e,t,n,r,o,i){h++||(b=null!=o&&void 0!==o.ownerSVGElement,y=null!=e&&!("__preactattr_"in e));var a=x(e,t,n,r,i);return o&&a.parentNode!==o&&o.appendChild(a),--h||(y=!1,i||g()),a}function x(e,t,n,r,o){var i=e,a=b;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(i=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(i,e),N(e,!0))),i.__preactattr_=!0,i;var l,p,s=t.nodeName;if("function"==typeof s)return function(e,t,n,r){var o=e&&e._component,i=o,a=e,l=o&&e._componentConstructor===t.nodeName,p=l,s=f(t);for(;o&&!p&&(o=o._parentComponent);)p=o.constructor===t.nodeName;o&&p&&(!r||o._component)?(U(o,s,3,n,r),e=o.base):(i&&!l&&(L(i),e=a=null),o=S(t.nodeName,s,n),e&&!o.nextBase&&(o.nextBase=e,a=null),U(o,s,1,n,r),e=o.base,a&&e!==a&&(a._component=null,N(a,!1)));return e}(e,t,n,r);if(b="svg"===s||"foreignObject"!==s&&b,s=String(s),(!e||!u(e,s))&&(l=s,(p=b?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l)).normalizedNodeName=l,i=p,e)){for(;e.firstChild;)i.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(i,e),N(e,!0)}var c=i.firstChild,_=i.__preactattr_,m=t.children;if(null==_){_=i.__preactattr_={};for(var h=i.attributes,g=h.length;g--;)_[h[g].name]=h[g].value}return!y&&m&&1===m.length&&"string"==typeof m[0]&&null!=c&&void 0!==c.splitText&&null==c.nextSibling?c.nodeValue!=m[0]&&(c.nodeValue=m[0]):(m&&m.length||null!=c)&&function(e,t,n,r,o){var i,a,l,p,s,c=e.childNodes,f=[],v={},_=0,m=0,h=c.length,b=0,y=t?t.length:0;if(0!==h)for(var g=0;g<h;g++){var C=c[g],w=C.__preactattr_,k=y&&w?C._component?C._component.__key:w.key:null;null!=k?(_++,v[k]=C):(w||(void 0!==C.splitText?!o||C.nodeValue.trim():o))&&(f[b++]=C)}if(0!==y)for(var g=0;g<y;g++){s=null;var k=(p=t[g]).key;if(null!=k)_&&void 0!==v[k]&&(s=v[k],v[k]=void 0,_--);else if(!s&&m<b)for(i=m;i<b;i++)if(void 0!==f[i]&&(S=a=f[i],U=o,"string"==typeof(T=p)||"number"==typeof T?void 0!==S.splitText:"string"==typeof T.nodeName?!S._componentConstructor&&u(S,T.nodeName):U||S._componentConstructor===T.nodeName)){s=a,f[i]=void 0,i===b-1&&b--,i===m&&m++;break}s=x(s,p,n,r),l=c[g],s&&s!==e&&s!==l&&(null==l?e.appendChild(s):s===l.nextSibling?d(l):e.insertBefore(s,l))}var S,T,U;if(_)for(var g in v)void 0!==v[g]&&N(v[g],!1);for(;m<=b;)void 0!==(s=f[b--])&&N(s,!1)}(i,m,n,r,y||null!=_.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||v(e,r,n[r],n[r]=void 0,b);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||v(e,r,n[r],n[r]=t[r],b)}(i,t.attributes,_),b=a,i}function N(e,t){var n=e._component;n?L(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||d(e),w(e))}function w(e){for(e=e.lastChild;e;){var t=e.previousSibling;N(e,!0),e=t}}var k={};function S(e,t,n){var r,o=k[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),M.call(r,t,n)):((r=new M(t,n)).constructor=e,r.render=T),o)for(var i=o.length;i--;)if(o[i].constructor===e){r.nextBase=o[i].nextBase,o.splice(i,1);break}return r}function T(e,t,n){return this.constructor(e,n)}function U(e,n,r,o,i){e._disable||(e._disable=!0,(e.__ref=n.ref)&&delete n.ref,(e.__key=n.key)&&delete n.key,!e.base||i?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(n,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=n,e._disable=!1,0!==r&&(1!==r&&!1===t.syncComponentUpdates&&e.base?s(e):$(e,1,i)),e.__ref&&e.__ref(e))}function $(e,n,r,o){if(!e._disable){var a,l,p,s=e.props,c=e.state,u=e.context,d=e.prevProps||s,v=e.prevState||c,_=e.prevContext||u,b=e.base,y=e.nextBase,x=b||y,w=e._component,k=!1;if(b&&(e.props=d,e.state=v,e.context=_,2!==n&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(s,c,u)?k=!0:e.componentWillUpdate&&e.componentWillUpdate(s,c,u),e.props=s,e.state=c,e.context=u),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!k){a=e.render(s,c,u),e.getChildContext&&(u=i(i({},u),e.getChildContext()));var T,M,B=a&&a.nodeName;if("function"==typeof B){var P=f(a);(l=w)&&l.constructor===B&&P.key==l.__key?U(l,P,1,u,!1):(T=l,e._component=l=S(B,P,u),l.nextBase=l.nextBase||y,l._parentComponent=e,U(l,P,0,u,!1),$(l,1,r,!0)),M=l.base}else p=x,(T=w)&&(p=e._component=null),(x||1===n)&&(p&&(p._component=null),M=C(p,a,u,r||!b,x&&x.parentNode,!0));if(x&&M!==x&&l!==w){var W=x.parentNode;W&&M!==W&&(W.replaceChild(M,x),T||(x._component=null,N(x,!1)))}if(T&&L(T),e.base=M,M&&!o){for(var A=e,E=e;E=E._parentComponent;)(A=E).base=M;M._component=A,M._componentConstructor=A.constructor}}if(!b||r?m.unshift(e):k||(e.componentDidUpdate&&e.componentDidUpdate(d,v,_),t.afterUpdate&&t.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);h||o||g()}}function L(e){t.beforeUnmount&&t.beforeUnmount(e);var n=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var r=e._component;r?L(r):n&&(n.__preactattr_&&n.__preactattr_.ref&&n.__preactattr_.ref(null),e.nextBase=n,d(n),function(e){var t=e.constructor.name;(k[t]||(k[t]=[])).push(e)}(e),w(n)),e.__ref&&e.__ref(null)}function M(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}i(M.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=i({},n)),i(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),s(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),$(this,2)},render:function(){}});var B=new Map,P=document.createElement("template"),W=/(\$_h\[\d+\])/g;function A(e,t){var n=e.match(W),r=JSON.stringify(e);if(null!=n){if(n[0]===e)return e;r=r.replace(W,'"'+t+"$1"+t+'"').replace(/"[+,]"/g,""),","===t&&(r="["+r+"]")}return r}e.render=function(e,t){var n=t.$_h;t.$_h=function(e,t,n){return C(n,e,{},!1,t,!1)}(e,t,n&&n._component&&n._component.base||n)},e.h=o,e.Component=M,e.html=function(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];var r=B.get(e);return null==r&&B.set(e,r=function(e){for(var t="",n=0;n<e.length;)0!==n&&(t+="$_h["+(n-1)+"]"),t+=e[n++];return P.innerHTML=t.replace(/<(\$_h\[\d+\])/g,"<c@ c@=$1").replace(/<\/\$_h\[\d+\]/g,"</c@").replace(/<([a-z0-9:@-]+)(\s.*?)?\/>/gi,"<$1$2></$1>").trim(),new Function("$_h","h","return "+function e(t){if(1!==t.nodeType)return 3===t.nodeType&&t.data?A(t.data.trim(),","):"null";for(var n,r,o="h("+(t.getAttribute("c@")||'"'+t.localName+'"')+",",i=0;i<t.attributes.length;i++)"c@"!=(r=t.attributes[i].name)&&(o+=void 0===n?"{":",",n=t.attributes[i].value,o+='"'+r.replace(/^on-/,"on")+'":'+(n?A(n,"+"):"true"));o+=void 0===n?"null":"}";for(var a=t.firstChild;a;)o+=","+e(a),a=a.nextSibling;return o+")"}((P.content||P).firstChild))}(e)),r(t,o)}});
