(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(t,e,c){},15:function(t,e,c){"use strict";c.r(e);var n=c(4),s=c.n(n),r=c(3),a=c(5),o=c(6),i=c(8),u=c(7),d=c(1),l=c.n(d),b=(c(13),c(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(i.a)(c,t);var e=Object(u.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={basket:[]},t.addProduct=function(e){t.setState((function(t){var c=t.basket;return{basket:[].concat(Object(r.a)(c),[e])}}))},t.removeProduct=function(e){t.setState((function(t){return{basket:t.basket.filter((function(t){return t!==e}))}}))},t.getTitle=function(t){switch(t.length){case 0:return"No goods selected";case 1:return"".concat(t[0]," is selected");default:var e=Object(r.a)(t),c=e.pop();return"".concat(e.join(", ")," and ").concat(c," are selected")}},t}return Object(o.a)(c,[{key:"render",value:function(){var t=this,e=this.state.basket;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"wrapper",children:Object(b.jsx)("h1",{className:"title",children:this.getTitle(e)})}),Object(b.jsx)("button",{className:"products__btn-reset",type:"button",onClick:function(){t.setState((function(){return{basket:[]}}))},children:"Reset"}),Object(b.jsx)("ul",{className:"products",children:p.map((function(c){return Object(b.jsxs)("li",{className:e.includes(c)?"products__item products__item--active":"products__item",children:[c," ",Object(b.jsx)("button",{className:"products__btn",type:"button",onClick:function(){!function(c){e.includes(c)?t.removeProduct(c):t.addProduct(c)}(c)},children:e.includes(c)?"Remove":"Add"})]},c)}))})]})}}]),c}(l.a.Component),h=j;s.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ed079c50.chunk.js.map