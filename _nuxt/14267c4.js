(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{359:function(e){e.exports=JSON.parse('[{"name":"elza","class":"recommendedimg","img":"img/menu/elza.webp","tails":[{"name":"mleko truskawka","ico":"truskawka"},{"name":"kulki kokos","ico":"kokos"},{"name":"syrop słony karmel","ico":"karmel"}]},{"name":"frida","class":"recommendedimg","img":"img/menu/frida.webp","tails":[{"name":"mleko kawa","ico":"kawa"},{"name":"kulki karmel","ico":"karmel"},{"name":"syrop biała czekolada","ico":"biała czekolada"}]},{"name":"kawa mrożona","class":"recommendedimg","img":"img/menu/kawa_mrozona.webp","tails":[{"name":"kostki lodu","ico":"lód"},{"name":"spienione mleko","ico":"mleko"},{"name":"espresso","ico":"kawa"}]},{"name":"matcha mrożona","class":"recommendedimg","img":"img/menu/matcha_mrozona.webp","tails":[{"name":"kostki lodu","ico":"lód"},{"name":"spienione mleko","ico":"mleko"},{"name":"matcha","ico":"matcha"}]},{"name":"hajer","class":"recommendedimg","img":"img/menu/hajer.webp","tails":[{"name":"herbata winogrono","ico":"winogrono"},{"name":"kulki jagoda","ico":"jagoda"},{"name":"kulki wiśnia","ico":"wiśnia"}]},{"name":"oma","class":"recommendedimg","img":"img/menu/oma.webp","tails":[{"name":"lody waniliowe","ico":"wanilia"},{"name":"syrop czekolada","ico":"czekolada"},{"name":"kulki kokos","ico":"kokos"}]},{"name":"bajtel","class":"recommendedimg","img":"img/menu/bajtel.webp","tails":[{"name":"lody waniliowe","ico":"wanilia"},{"name":"kulki jagoda","ico":"jagoda"},{"name":"kulki truskawka","ico":"truskawka"}]},{"name":"blue matcha","class":"recommendedimg","img":"img/menu/blue_matcha.webp","tails":[{"name":"blue matcha","ico":"blue matcha"},{"name":"spienione mleko","ico":"mleko"}]},{"name":"pink matcha","class":"recommendedimg","img":"img/menu/pink_matcha.webp","tails":[{"name":"pink matcha","ico":"pink matcha"},{"name":"spienione mleko","ico":"mleko"}]}]')},368:function(e,o,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(132).default)("e4312ca2",content,!0,{sourceMap:!1})},389:function(e,o,n){"use strict";n(368)},390:function(e,o,n){var t=n(129),m=n(130),l=n(131),r=t((function(i){return i[1]})),c=m(l);r.push([e.i,'@font-face{font-display:block;font-family:"Bubbleboddy Neue";src:url('+c+') format("woff2")}a[data-v-650bd814]{color:inherit;-webkit-text-decoration:none;text-decoration:none}*[data-v-650bd814]{box-sizing:border-box}body[data-v-650bd814]{color:#2c3e50}.el[data-v-650bd814]{background:rgba(255,188,219,.5);border:.3em solid #ffbcdb;border-radius:.7em;display:inline-block;margin:.5em}.el figure[data-v-650bd814]{align-items:center;display:flex;flex-direction:column;justify-content:center;margin:0}.el figure .heading[data-v-650bd814]{display:flex;left:-.3rem;position:relative;top:-.3rem;width:100%}.el figure .heading .title[data-v-650bd814]{background:#ffbcdb;border-radius:.7rem 0 .7rem 0;margin:0;padding:.5rem 1rem}.el figure .content[data-v-650bd814]{align-items:center;display:flex;flex-direction:column}.el figure .content img[data-v-650bd814]{height:200px;width:250px}.el figure .content.horizontal[data-v-650bd814]{flex-direction:row-reverse}.el figure .content.horizontal img[data-v-650bd814]{height:250px;width:175px}.el figure .content figcaption[data-v-650bd814]{width:100%}.el figure .content figcaption ul[data-v-650bd814]{list-style:none;margin:0;padding:0 0 .5rem .5rem}.el figure .content figcaption ul li[data-v-650bd814]{display:flex}',""]),r.locals={},e.exports=r},410:function(e,o,n){"use strict";n.r(o);n(29),n(11),n(22),n(134);var t=n(359),m={data:function(){return{vals:this.values?this.values:this.getValuesByName(this.name)}},props:{name:{type:String,default:":NAME:"},values:{default:!1},customName:{type:String|Boolean,default:!1},tails:{type:Boolean,default:!0}},methods:{getValuesByName:function(e){var o=t.find((function(o){return o.name.toLowerCase()===e.toLowerCase()}));return this.$emit("desc",o.desc),o}}},l=(n(389),n(67)),component=Object(l.a)(m,(function(){var e=this,o=e._self._c;return o("routerLink",{staticClass:"el",attrs:{to:"/story/"+e.vals.name}},[o("figure",[o("div",{staticClass:"heading"},[o("h4",{staticClass:"title"},[e._v(" "+e._s(e.$t((e.customName?e.customName:e.vals.name).toLowerCase()).toUpperCase())+" ")])]),e._v(" "),o("div",{staticClass:"content",class:{horizontal:e.vals.horizontal}},[o("img",{attrs:{src:"/"+e.vals.img,alt:e.vals.name}}),e._v(" "),e.tails?o("figcaption",[o("ul",e._l(e.vals.tails,(function(n,t){return o("li",{key:t},[o("appIcon",{attrs:{values:{name:n.ico}}}),e._v(" "),o("span",[e._v(e._s(e.$t(n.name.toLowerCase()).toUpperCase()))])],1)})),0)]):e._e()])])])}),[],!1,null,"650bd814",null);o.default=component.exports}}]);