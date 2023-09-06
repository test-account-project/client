"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[610],{2615:function(t,c,e){e.d(c,{a:function(){return d},w:function(){return l}});var r=e(4942),n=e(1694),s=e.n(n),a=e(3863),o=e(2791),i=e(184),d=function(t){var c,e=t.product,n=t.styles,d=(0,o.useContext)(a.A9),u=d.saveToCart,l=d.cart,p=(0,o.useContext)(a.Tr),_=p.darkTheme,f=p.notifyCart,h=l.some((function(t){return t.itemId===e.itemId}));return(0,i.jsx)("div",{className:"cart-button",children:(0,i.jsx)("button",{type:"button",className:s()(n[0],(c={},(0,r.Z)(c,n[1],h),(0,r.Z)(c,"product__add--dark",_&&h),c)),onClick:function(){u(e),f()},disabled:h,children:h?"Added to cart":"Add to cart"})})},u=e(9075),l=function(t){var c,e=t.product,n=t.styles,a=o.useContext(u.T),d=a.favProducts,l=a.handleLike,p=a.darkTheme,_=a.notifyFavs,f=a.notifyFavsDelete,h=d.find((function(t){return t.productId===e.productId})),m=void 0!==h;return(0,i.jsx)("div",{className:"favourites-button",children:(0,i.jsx)("button",{type:"button",className:s()(n[0],n[2],(c={},(0,r.Z)(c,n[1],h),(0,r.Z)(c,"product__favourites-dark",p),c)),onClick:function(){l(e),m?f():_()},children:(0,i.jsx)("p",{hidden:!0,children:"add to favourites"})})})}},6994:function(t,c,e){e.d(c,{I:function(){return d}});e(2791),e(9386);var r=e(1087),n=e(3963),s=e(6591),a=e(6910),o=e(2615),i=e(184),d=function(t){var c=t.product,e=(0,a.M)(c.itemId),d=[["Screen",c.screen],["Capacity",(0,n.O)(c.capacity_id||0,s.rW)],["RAM",c.ram]],u=[["Color",(0,n.O)(c.color_id||0,s.NV)],["Made in","USA"]];return(0,i.jsx)("li",{className:"product",children:(0,i.jsxs)("div",{className:"product__container",children:[(0,i.jsxs)(r.rU,{to:"/".concat((0,n.O)(c.category_id,s.cr),"/").concat(c.productId),relative:"path",className:"product__link",children:[(0,i.jsx)("div",{className:"product__image-block",children:(0,i.jsx)("img",{src:"".concat("https://res.cloudinary.com/myfinance/image/upload/v1693416024/syncwave/","/").concat(c.image),alt:c.name,className:"product__image"})}),(0,i.jsx)("h2",{className:"product__title",children:"".concat(c.name," (").concat(e,")")})]}),(0,i.jsxs)("div",{className:"product__prices",children:[(0,i.jsx)("p",{className:"product__price",children:c.discountPrice?"$".concat(c.discountPrice):"$".concat(c.fullPrice)}),c.discountPrice&&(0,i.jsx)("p",{className:"product__price-full",children:"$".concat(c.fullPrice)})]}),(0,i.jsx)("div",{className:"product__techspecs",children:1===c.category_id||2===c.category_id?d.map((function(t){return(0,i.jsxs)("div",{className:"product__techspecs-block",children:[(0,i.jsx)("p",{className:"product__techspecs-title",children:t[0]}),(0,i.jsx)("p",{className:"product__techspecs-data",children:t[1]})]},t[0])})):u.map((function(t){return(0,i.jsxs)("div",{className:"product__techspecs-block",children:[(0,i.jsx)("p",{className:"product__techspecs-title",children:t[0]}),(0,i.jsx)("p",{className:"product__techspecs-data",children:t[1]})]},t[0])}))}),(0,i.jsxs)("div",{className:"product__buttons",children:[(0,i.jsx)(o.a,{product:c,styles:["product__add","product__add--active"]}),(0,i.jsx)(o.w,{product:c,styles:["product__favourites","product__favourites--active"]})]})]})})}},7610:function(t,c,e){e.r(c),e.d(c,{FavoritesPage:function(){return o}});var r=e(9075),n=e(6909),s=e(2791),a=e(184),o=function(){var t=s.useContext(r.T).favProducts;return(0,a.jsxs)("div",{className:"favourites__page",children:[(0,a.jsx)("h1",{className:"favourites__title",children:"Favourites"}),t.length>0?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"favourites__subtitle",children:"".concat(t.length," models")}),(0,a.jsx)(n.R,{products:t})]}):(0,a.jsx)("h2",{children:"You haven't added anything to your favorite products yet"})]})}},6909:function(t,c,e){e.d(c,{R:function(){return s}});e(2791);var r=e(6994),n=e(184),s=function(t){var c=t.products;return(0,n.jsx)("section",{className:"products",children:c.map((function(t){return(0,n.jsx)(r.I,{product:t},t.id)}))})}},6591:function(t,c,e){e.d(c,{NV:function(){return s},cr:function(){return n},rW:function(){return r}});var r={1:"32GB",2:"64GB",3:"128GB",4:"256GB",5:"512GB"},n={1:"phones",2:"tablets",3:"accessories"},s={1:"black",2:"gold",3:"yellow",4:"green",5:"silver",6:"spacegray",7:"red",8:"white",9:"purple",10:"midnightgreen",11:"coral",12:"rosegold",13:"gray",14:"blue",15:"pink"}},6910:function(t,c,e){function r(t){return t.split("-").map((function(t){return t[0].toUpperCase()})).join("")}e.d(c,{M:function(){return r}})},3963:function(t,c,e){function r(t,c){return c[t]}e.d(c,{O:function(){return r}})},9386:function(){}}]);
//# sourceMappingURL=610.2b7ec249.chunk.js.map