(this.webpackJsonpecommerce=this.webpackJsonpecommerce||[]).push([[5],{100:function(n,t,e){"use strict";e(0);var c=e(20),i=e(46),r=e(25),a=(e(101),e(2));t.a=Object(c.b)(null,(function(n){return{addItem:function(t){return n(Object(r.a)(t))}}}))((function(n){var t=n.item,e=n.addItem,c=t.name,r=t.price,s=t.imageUrl;return Object(a.jsxs)("div",{className:"collection-item",children:[Object(a.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(s,")")}}),Object(a.jsxs)("div",{className:"collection-footer",children:[Object(a.jsx)("span",{className:"name",children:c}),Object(a.jsx)("span",{className:"price",children:r})]}),Object(a.jsx)(i.a,{onClick:function(){return e(t)},inverted:!0,children:" ADD TO CART"})]})}))},101:function(n,t,e){},102:function(n,t,e){"use strict";var c,i,r=e(5),a=e(47),s=(e(0),e(29)),o=e(30),u=o.b.div(c||(c=Object(s.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),l=o.b.div(i||(i=Object(s.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]))),b=e(2);t.a=function(n){return function(t){var e=t.isLoading,c=Object(a.a)(t,["isLoading"]);return e?Object(b.jsx)(u,{children:Object(b.jsx)(l,{})}):Object(b.jsx)(n,Object(r.a)({},c))}}},114:function(n,t,e){},116:function(n,t,e){"use strict";e.r(t);var c=e(20),i=e(15),r=e(12),a=e(99),s=e(102),o=(e(0),e(100)),u=(e(114),e(2)),l=Object(c.b)((function(n,t){return{collection:Object(a.a)(t.match.params.collectionId)(n)}}))((function(n){var t=n.collection,e=t.title,c=t.items;return Object(u.jsxs)("div",{className:"collection-page",children:[Object(u.jsx)("h2",{className:"title",children:e}),Object(u.jsx)("div",{className:"items",children:c.map((function(n){return Object(u.jsx)(o.a,{item:n},n.id)}))})]})})),b=Object(r.b)({isLoading:function(n){return!Object(a.d)(n)}}),d=Object(i.d)(Object(c.b)(b),s.a)(l);t.default=d},99:function(n,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"a",(function(){return s})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return u}));var c=e(12),i=function(n){return n.shop},r=Object(c.a)([i],(function(n){return n.collections})),a=Object(c.a)([r],(function(n){return n?Object.keys(n).map((function(t){return n[t]})):[]})),s=function(n){return Object(c.a)([r],(function(t){return t?t[n]:null}))},o=Object(c.a)([i],(function(n){return n.isFetching})),u=Object(c.a)([i],(function(n){return!!n.collections}))}}]);
//# sourceMappingURL=5.72484801.chunk.js.map