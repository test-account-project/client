"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[610],{8272:function(t,c,e){e.d(c,{n:function(){return n}});e(2791);var r=e(184),n=function(t){var c=t.title;return(0,r.jsxs)("div",{className:"cart__block",children:[(0,r.jsx)("h1",{className:"cart__title",children:"Your ".concat(c," is empty...")}),(0,r.jsx)("p",{className:"cart__subtitle",children:"But it's never too late to fix it!"}),(0,r.jsx)("a",{className:"back-home",href:"#/",children:"Go main page"})]})}},2615:function(t,c,e){e.d(c,{a:function(){return u},w:function(){return l}});var r=e(4942),n=e(1694),s=e.n(n),a=e(3863),i=e(2791),o=e(184),u=function(t){var c,e=t.product,n=t.styles,u=(0,i.useContext)(a.A9),d=u.saveToCart,l=u.cart,p=(0,i.useContext)(a.Tr),_=p.darkTheme,f=p.notifyCart,h=l.some((function(t){return t.itemId===e.itemId}));return(0,o.jsx)("div",{className:"cart-button",children:(0,o.jsx)("button",{type:"button",className:s()(n[0],(c={},(0,r.Z)(c,n[1],h),(0,r.Z)(c,"product__add--dark",_&&h),c)),onClick:function(){d(e),f()},disabled:h,children:h?"Added to cart":"Add to cart"})})},d=e(9075),l=function(t){var c,e=t.product,n=t.styles,a=i.useContext(d.T),u=a.favProducts,l=a.handleLike,p=a.darkTheme,_=a.notifyFavs,f=a.notifyFavsDelete,h=u.find((function(t){return t.productId===e.productId})),m=void 0!==h;return(0,o.jsx)("div",{className:"favourites-button",children:(0,o.jsx)("button",{type:"button",className:s()(n[0],n[2],(c={},(0,r.Z)(c,n[1],h),(0,r.Z)(c,"product__favourites-dark",p),c)),onClick:function(){l(e),m?f():_()},children:(0,o.jsx)("p",{hidden:!0,children:"add to favourites"})})})}},6994:function(t,c,e){e.d(c,{I:function(){return u}});e(2791),e(9386);var r=e(1087),n=e(3963),s=e(6591),a=e(6910),i=e(2615),o=e(184),u=function(t){var c=t.product,e=(0,a.M)(c.itemId),u=[["Screen",c.screen],["Capacity",(0,n.O)(c.capacity_id||0,s.rW)],["RAM",c.ram]],d=[["Color",(0,n.O)(c.color_id||0,s.NV)],["Made in","USA"]];return(0,o.jsx)("li",{className:"product",children:(0,o.jsxs)("div",{className:"product__container",children:[(0,o.jsxs)(r.rU,{to:"/".concat((0,n.O)(c.category_id,s.cr),"/").concat(c.itemId),relative:"path",className:"product__link",children:[(0,o.jsx)("div",{className:"product__image-block",children:(0,o.jsx)("img",{src:"".concat("https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/","/").concat(c.image),alt:c.name,className:"product__image"})}),(0,o.jsx)("h2",{className:"product__title",children:"".concat(c.name," (").concat(e,")")})]}),(0,o.jsxs)("div",{className:"product__prices",children:[(0,o.jsx)("p",{className:"product__price",children:c.discountPrice?"$".concat(c.discountPrice):"$".concat(c.fullPrice)}),c.discountPrice&&(0,o.jsx)("p",{className:"product__price-full",children:"$".concat(c.fullPrice)})]}),(0,o.jsx)("div",{className:"product__techspecs",children:1===c.category_id||2===c.category_id?u.map((function(t){return(0,o.jsxs)("div",{className:"product__techspecs-block",children:[(0,o.jsx)("p",{className:"product__techspecs-title",children:t[0]}),(0,o.jsx)("p",{className:"product__techspecs-data",children:t[1]})]},t[0])})):d.map((function(t){return(0,o.jsxs)("div",{className:"product__techspecs-block",children:[(0,o.jsx)("p",{className:"product__techspecs-title",children:t[0]}),(0,o.jsx)("p",{className:"product__techspecs-data",children:t[1]})]},t[0])}))}),(0,o.jsxs)("div",{className:"product__buttons",children:[(0,o.jsx)(i.a,{product:c,styles:["product__add","product__add--active"]}),(0,o.jsx)(i.w,{product:c,styles:["product__favourites","product__favourites--active"]})]})]})})}},7610:function(t,c,e){e.r(c),e.d(c,{FavoritesPage:function(){return o}});var r=e(9075),n=e(6909),s=e(2791),a=e(8272),i=e(184),o=function(){var t=s.useContext(r.T).favProducts;return(0,i.jsxs)("div",{className:"favourites__page",children:[(0,i.jsx)("h1",{className:"favourites__title",children:"Favourites"}),t.length>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{className:"favourites__subtitle",children:"".concat(t.length," models")}),(0,i.jsx)(n.R,{products:t})]}):(0,i.jsx)(a.n,{title:"favourites page"})]})}},6909:function(t,c,e){e.d(c,{R:function(){return s}});e(2791);var r=e(6994),n=e(184),s=function(t){var c=t.products;return(0,n.jsx)("section",{className:"products",children:c.map((function(t){return(0,n.jsx)(r.I,{product:t},t.id)}))})}},6591:function(t,c,e){e.d(c,{NV:function(){return s},cr:function(){return n},rW:function(){return r}});var r={1:"32GB",2:"64GB",3:"128GB",4:"256GB",5:"512GB"},n={1:"phones",2:"tablets",3:"accessories"},s={1:"black",2:"gold",3:"yellow",4:"green",5:"silver",6:"spacegray",7:"red",8:"white",9:"purple",10:"midnightgreen",11:"coral",12:"rosegold",13:"gray",14:"blue",15:"pink"}},6910:function(t,c,e){function r(t){return t.split("-").map((function(t){return t[0].toUpperCase()})).join("")}e.d(c,{M:function(){return r}})},3963:function(t,c,e){function r(t,c){return c[t]}e.d(c,{O:function(){return r}})},9386:function(){}}]);
//# sourceMappingURL=610.322c0cce.chunk.js.map