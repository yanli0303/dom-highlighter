(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{14:function(e,t,n){"use strict";n.r(t);var r=n(6),o=(n(8),n(3)),i=n.n(o),u=n(5),a=n(0),c=n.n(a),l=n(1);function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"===typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}var d=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{f(r,1,i(this.v))}catch(u){f(r,2,u)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?f(r,1,t?t(o):o):n?f(r,1,n(o)):f(r,2,o)}catch(u){f(r,2,u)}},r},e}();function f(e,t,n){if(!e.s){if(n instanceof d){if(!n.s)return void(n.o=f.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(f.bind(null,e,t),f.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}function m(e){return e instanceof d&&1&e.s}"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var v=function(){function e(e,t,n){void 0===n&&(n=1e3),this.getTextNodes=e,this.match=t,this.minBatchTextLength=n,this.matches=[]}var t=e.prototype;return t.groupNodes=function(e){var t=new Map;this.matches.forEach((function(e){t.set(e.nodeValueHash,e)}));var n=[],r=[];return e.forEach((function(e){var o=e.nodeValue||"",u=i()(o),a=t.get(u),c={node:e,nodeValueHash:u,tokens:a?a.tokens:[],ranges:[]};a?n.push(c):r.push(c)})),{unchanged:n,changedAndNew:r}},t.setTokens=function(e){try{var t=this,n=e.length,r=[],o=0,i=0;return Promise.resolve(function(e,t,n){for(var r;;){var o=e();if(m(o)&&(o=o.v),!o)return i;if(o.then){r=0;break}var i=n();if(i&&i.then){if(!m(i)){r=1;break}i=i.s}if(t){var u=t();if(u&&u.then&&!m(u)){r=2;break}}}var a=new d,c=f.bind(null,a,2);return(0===r?o.then(h):1===r?i.then(l):u.then(s)).then(void 0,c),a;function l(r){i=r;do{if(t&&(u=t())&&u.then&&!m(u))return void u.then(s).then(void 0,c);if(!(o=e())||m(o)&&!o.v)return void f(a,1,i);if(o.then)return void o.then(h).then(void 0,c);m(i=n())&&(i=i.v)}while(!i||!i.then);i.then(l).then(void 0,c)}function h(e){e?(i=n())&&i.then?i.then(l).then(void 0,c):l(i):f(a,1,i)}function s(){(o=e())?o.then?o.then(h).then(void 0,c):h(o):f(a,1,i)}}((function(){return i<n}),(function(){return!!(i+=1)}),(function(){var u=e[i];r.push(u),o+=(u.node.nodeValue||"").length;var a=function(){if(i===n-1||o>t.minBatchTextLength)return Promise.resolve(t.match(r.map((function(e){return e.node.nodeValue||""})))).then((function(e){r.forEach((function(t,n){t.tokens=e[n]})),r=[],o=0}))}();if(a&&a.then)return a.then((function(){}))})))}catch(u){return Promise.reject(u)}},t.scan=function(){try{var e=this;return e.matches.forEach((function(e){return e.ranges.forEach((function(e){return e.detach()}))})),Promise.resolve(e.getTextNodes()).then((function(t){var n=e.groupNodes(t),r=n.unchanged,o=n.changedAndNew;return console.log("Highlighter.scan: unchanged="+r.length+", changed and new: "+o.length),Promise.resolve(e.setTokens(o)).then((function(){e.matches=[].concat(r,o)}))}))}catch(t){return Promise.reject(t)}},t.updateHighlights=function(){for(var e,t=function(){var t=e.value;t.ranges.forEach((function(e){return e.detach()})),t.ranges=t.tokens.map((function(e){var n=document.createRange();return n.setStart(t.node,e.start),n.setEnd(t.node,e.end),n}))},n=s(this.matches);!(e=n()).done;)t()},e}(),g=function(e){var t=e.token,n=e.rect,r=e.onMouseEnter,o=e.onMouseLeave;return c.a.createElement("div",{onMouseEnter:function(e){return r(t,n,e)},onMouseLeave:function(e){return o(t,n,e)},style:{position:"fixed",top:n.top,left:n.left,width:n.width,height:n.height-2,borderBottom:"2px solid "+t.color}})},p=null,b=function(e){var t=Object(a.useState)(0),n=t[0],r=t[1];return Object(a.useEffect)((function(){p&&(document.removeEventListener("scroll",p),window.removeEventListener("resize",p),p=null);var t=function(){return e.highlighter.scan().then((function(){return r((function(e){return e+1}))}))},n=Object(u.a)(t,e.throttleUpdates);p=n,new MutationObserver(n).observe(document.documentElement,{attributes:!0,childList:!0,subtree:!0}),t(),document.addEventListener("scroll",n),window.addEventListener("resize",n)}),[e.highlighter,e.throttleUpdates,r]),console.log("Rendering highlights...#"+n),e.highlighter.updateHighlights(),c.a.createElement(c.a.Fragment,null,e.highlighter.matches.map((function(t,n){return t.ranges.filter(Boolean).map((function(r,o){var i=t.tokens[o];return Array.from(r.getClientRects()).map((function(t,r){return c.a.createElement(g,{key:[n,i.id,r].join("-"),token:i,rect:t,onMouseEnter:e.onMouseEnterItem,onMouseLeave:e.onMouseLeaveItem})}))}))})).flat(3))},y=function(e){var t=e.left,n=e.right,r=e.top,o=e.bottom,i=window.innerWidth||document.documentElement.clientWidth,u=window.innerHeight||document.documentElement.clientHeight;return r>=0&&r<=u&&t>=0&&t<=i||o>=0&&o<=u&&t>=0&&t<=i||r>=0&&r<=u&&n>=0&&n<=i||o>=0&&o<=u&&n>=0&&n<=i},E=/^[\u0000-\u001F\u21B5\s]+|[\u0000-\u001F\u21B5\s]+$/gm,w=function(e){return e.replace(E,"")},k=function(e,t,n){void 0===e&&(e=!0),void 0===t&&(t=!0),void 0===n&&(n=3);for(var r,o=document.createTreeWalker(document.documentElement,NodeFilter.SHOW_TEXT,null,!1),i=[];o.nextNode();){var u=o.currentNode,a=u.nodeValue||"";if(n>0)if((t?w(a):a).length<n)continue;if(e){var c=u.parentElement;if(!c||!((r=c).offsetWidth||r.offsetHeight||r.getClientRects().length))continue;if(!y(c.getBoundingClientRect()))continue}i.push(u)}return i},S=function(e){var t=e.data;return t?c.a.createElement("div",{className:"token-view",style:{background:t.token.color,top:t.rect.bottom,left:t.rect.left}},c.a.createElement("ul",null,c.a.createElement("li",null,"Card ID: ",t.token.id),c.a.createElement("li",null,"Title: ",t.token.keyword))):null},M=function(){var e=["red","pink","orange","purple","blue","black","green"];return e[Math.floor(1e3*Math.random())%e.length]},j=0,x=/\w+/gm,N=function(e){return new Promise((function(t,n){var r=function(e){for(var t=[],n=x.exec(e);null!==n;)t.push({id:j.toString(),color:M(),start:n.index,end:n.index+n[0].length,keyword:n[0]}),j+=1,n=x.exec(e);return t};setTimeout((function(){try{var o=e.map(r);t(o)}catch(i){n(i)}}),5)}))},I=function(){var e=Object(a.useState)(null),t=Object(r.a)(e,2),n=t[0],o=t[1];Object(a.useEffect)((function(){!function(e,t,n,r,o,i){void 0===r&&(r=1e3),void 0===o&&(o=""),void 0===i&&(i=500);var u=new v(k,e,r),a=document.createElement("highlights");a.setAttribute("class",o),document.body.appendChild(a),Object(l.render)(c.a.createElement(b,{highlighter:u,throttleUpdates:i,className:o,onMouseEnterItem:t,onMouseLeaveItem:n}),a)}(N,(function(e,t){o({token:e,rect:t})}),(function(){return o(null)}),20,"dh-underline",500)}),[o]);return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:function(){var e=document.createElement("div");e.innerHTML="New DIV element",document.body.appendChild(e)},style:{padding:"5px 1em"}},"Add New DOM Node, trigger mutation observer"),c.a.createElement(S,{data:n}))};Object(l.render)(c.a.createElement(I,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)},8:function(e,t,n){}},[[7,1,2]]]);
//# sourceMappingURL=main.785202fe.chunk.js.map