(function(t){function e(e){for(var c,r,a=e[0],s=e[1],u=e[2],l=0,d=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(t[c]=s[c]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],c=!0,r=1;r<n.length;r++){var a=n[r];0!==i[a]&&(c=!1)}c&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var c={},r={app:0},i={app:0},o=[];function a(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-07d1d078":"0eec98b8","chunk-1c138494":"42ae63a3","chunk-1c6a066e":"2013d067","chunk-773923d7":"ea08315a","chunk-0c3e9138":"e98501a9","chunk-5e7cb852":"0e530ce6","chunk-3dbb5abf":"ae4bc772","chunk-4567950f":"c0167d28"}[t]+".js"}function s(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-07d1d078":1,"chunk-1c138494":1,"chunk-1c6a066e":1,"chunk-773923d7":1,"chunk-0c3e9138":1,"chunk-5e7cb852":1,"chunk-3dbb5abf":1,"chunk-4567950f":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var c="css/"+({}[t]||t)+"."+{"chunk-07d1d078":"a8413477","chunk-1c138494":"2bafa967","chunk-1c6a066e":"5d4257a8","chunk-773923d7":"ea048343","chunk-0c3e9138":"b814167b","chunk-5e7cb852":"9e83204a","chunk-3dbb5abf":"4c72283e","chunk-4567950f":"73192222"}[t]+".css",i=s.p+c,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var u=o[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===c||l===i))return e()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){u=d[a],l=u.getAttribute("data-href");if(l===c||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var c=e&&e.target&&e.target.src||i,o=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[t],f.parentNode.removeChild(f),n(o)},f.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[t]=0})));var c=i[t];if(0!==c)if(c)e.push(c[2]);else{var o=new Promise((function(e,n){c=i[t]=[e,n]}));e.push(c[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=i[t];if(0!==n){if(n){var c=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,n[1](d)}i[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=c,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)s.d(n,c,function(e){return t[e]}.bind(null,c));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1878:function(t,e,n){},"27fc":function(t,e,n){},2872:function(t,e,n){t.exports=n.p+"img/shopcart.c68224ce.svg"},3522:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},i=[],o=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("tab-bar",[c("tab-bar-item",{attrs:{link:"/home"}},[c("img",{attrs:{slot:"item-icon",src:n("9443"),alt:""},slot:"item-icon"}),c("img",{attrs:{slot:"item-icon-active",src:n("b508"),alt:""},slot:"item-icon-active"}),c("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),c("tab-bar-item",{attrs:{link:"/category"}},[c("img",{attrs:{slot:"item-icon",src:n("57cd"),alt:""},slot:"item-icon"}),c("img",{attrs:{slot:"item-icon-active",src:n("a5ef"),alt:""},slot:"item-icon-active"}),c("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),c("tab-bar-item",{attrs:{link:"/cart"}},[c("img",{attrs:{slot:"item-icon",src:n("2872"),alt:""},slot:"item-icon"}),c("img",{attrs:{slot:"item-icon-active",src:n("c3f8"),alt:""},slot:"item-icon-active"}),c("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),c("tab-bar-item",{attrs:{link:"/profile"}},[c("img",{attrs:{slot:"item-icon",src:n("e55d"),alt:""},slot:"item-icon"}),c("img",{attrs:{slot:"item-icon-active",src:n("d151"),alt:""},slot:"item-icon-active"}),c("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},u=[],l=(n("c975"),n("9911"),{name:"TabBarItem",computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.link)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},props:{link:String,activeColor:{type:String,default:"#d81e06"}},methods:{itemClick:function(){this.$router.push(this.link).catch((function(t){}))}}}),d=l,f=(n("dece"),n("2877")),m=Object(f["a"])(d,s,u,!1,null,"2c1e0d52",null),h=m.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},b=[],v={name:"TabBar"},g=v,k=(n("7bf3"),Object(f["a"])(g,p,b,!1,null,null,null)),y=k.exports,_={name:"MainTabBar",components:{TabBar:y,TabBarItem:h}},x=_,w=Object(f["a"])(x,o,a,!1,null,null,null),O=w.exports,S={name:"App",components:{MainTabBar:O}},j=S,T=(n("034f"),Object(f["a"])(j,r,i,!1,null,null,null)),C=T.exports,P=(n("d3b7"),n("8c4f")),E=function(){return Promise.all([n.e("chunk-07d1d078"),n.e("chunk-1c138494"),n.e("chunk-773923d7"),n.e("chunk-5e7cb852")]).then(n.bind(null,"b3d7"))},L=function(){return Promise.all([n.e("chunk-07d1d078"),n.e("chunk-1c138494"),n.e("chunk-1c6a066e")]).then(n.bind(null,"bb51"))},$=function(){return Promise.all([n.e("chunk-07d1d078"),n.e("chunk-3dbb5abf")]).then(n.bind(null,"c228"))},A=function(){return n.e("chunk-4567950f").then(n.bind(null,"3b42"))},B=function(){return Promise.all([n.e("chunk-07d1d078"),n.e("chunk-1c138494"),n.e("chunk-773923d7"),n.e("chunk-0c3e9138")]).then(n.bind(null,"6ab7"))};c["a"].use(P["a"]);var M,N=[{path:"",redirect:"/home"},{path:"/home",component:E},{path:"/category",component:L},{path:"/cart",component:$},{path:"/profile",component:A},{path:"/detail/:iid",component:B}],D=new P["a"]({routes:N,mode:"history"}),I=D,q=n("2f62"),J=n("ade3"),F="add_counter",H="add_to_cart",K=(M={},Object(J["a"])(M,F,(function(t,e){e.count++})),Object(J["a"])(M,H,(function(t,e){e.checked=!0,t.cartList.push(e)})),M),U=(n("7db0"),{addCart:function(t,e){return new Promise((function(n,c){var r=t.state.cartList.find((function(t){return t.iid===e.iid}));r?(t.commit(F,r),n("当前的商品数量+1")):(e.count=1,t.commit(H,e),n("添加了新的商品"))}))}}),z={cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList}};c["a"].use(q["a"]);var G={cartList:[]},Q=new q["a"].Store({state:G,mutations:K,actions:U,getters:z}),R=Q,V=n("fe3c"),W=n.n(V),X=n("caf9"),Y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[n("div",[t._v(t._s(t.message))])])},Z=[],tt={name:"Toast",data:function(){return{message:"",isShow:!1}},methods:{show:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;this.isShow=!0,this.message=t,setTimeout((function(){e.isShow=!1,e.message=""}),n)}}},et=tt,nt=(n("c89b"),Object(f["a"])(et,Y,Z,!1,null,"9c3a502a",null)),ct=nt.exports,rt={install:function(t){var e=t.extend(ct),n=new e;document.body.appendChild(n.$mount().$el),t.prototype.$toast=n}},it=rt;c["a"].config.productionTip=!1,c["a"].prototype.$bus=new c["a"],c["a"].use(it),W.a.attach(document.body),c["a"].use(X["a"],{loading:n("bc5e")}),new c["a"]({router:I,store:R,render:function(t){return t(C)}}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},"7bf3":function(t,e,n){"use strict";n("3522")},"85ec":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},bc5e:function(t,e,n){t.exports=n.p+"img/placeholder.48bcea0d.png"},c3f8:function(t,e,n){t.exports=n.p+"img/shopcart_active.3f0a2016.svg"},c89b:function(t,e,n){"use strict";n("1878")},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},dece:function(t,e,n){"use strict";n("27fc")},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"}});
//# sourceMappingURL=app.372affc8.js.map