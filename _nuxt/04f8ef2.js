(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{362:function(e,t,c){var content=c(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,c(132).default)("8d6b7e3e",content,!0,{sourceMap:!1})},377:function(e,t,c){"use strict";c(362)},378:function(e,t,c){var l=c(129),o=c(130),n=c(131),r=l((function(i){return i[1]})),f=o(n);r.push([e.i,'@font-face{font-display:block;font-family:"Bubbleboddy Neue";src:url('+f+') format("woff2")}a[data-v-756c5fcc]{color:inherit;-webkit-text-decoration:none;text-decoration:none}*[data-v-756c5fcc]{box-sizing:border-box}body[data-v-756c5fcc]{color:#2c3e50}.level-left[data-v-756c5fcc]{align-items:center;display:flex}.level-left ul[data-v-756c5fcc]{display:flex;list-style:none;margin:0;padding:0}.level-left ul li[data-v-756c5fcc]:before{content:">"}.level-left a[data-v-756c5fcc]{cursor:pointer;margin:.7em}',""]),r.locals={},e.exports=r},404:function(e,t,c){"use strict";c.r(t);c(29),c(11),c(23),c(22),c(19),c(61),c(81);var l={computed:{crumbs:function(){var e=this,t=[];return this.$route.matched.forEach((function(c,i,l){var o=l.length,n={};n.path=c.path,n.name=e.$t(c.name.toLowerCase()).toUpperCase()||e.$t(c.path.toLowerCase()).toUpperCase(),i===o-1&&(c.regex.keys.length>0&&(t.push({path:c.path.replace(/\/:[^/:]*$/,""),name:""+e.$t(c.name.replace(/-[^-]*$/,"").toLowerCase()).toUpperCase()}),n.path=e.$route.path,n.name=e.$t(decodeURI(n.path.match(/[^/]*$/)[0]).toLowerCase()).toUpperCase()),n.classes="is-active"),t.push(n)})),t}}},o=(c(377),c(67)),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return"index"!=this.$route.name?t("div",{staticClass:"level"},[t("div",{staticClass:"level-left"},[t("div",{staticClass:"level-item"},[t("nuxtLink",{attrs:{to:"/"}},[e._v("BombelTyj")])],1),e._v(" "),t("div",{staticClass:"level-item"},[t("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[t("ul",e._l(e.crumbs,(function(c,i){return t("li",{key:i,class:c.classes},[t("nuxtLink",{attrs:{to:c.path}},[e._v(e._s(c.name))])],1)})),0)])])])]):e._e()}),[],!1,null,"756c5fcc",null);t.default=component.exports}}]);