(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{370:function(t,e,n){var content=n(394);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(132).default)("38b5a27b",content,!0,{sourceMap:!1})},393:function(t,e,n){"use strict";n(370)},394:function(t,e,n){var o=n(129),c=n(130),r=n(131),d=o((function(i){return i[1]})),l=c(r);d.push([t.i,'@font-face{font-display:block;font-family:"Bubbleboddy Neue";src:url('+l+') format("woff2")}a{color:inherit;-webkit-text-decoration:none;text-decoration:none}*{box-sizing:border-box}body{color:#2c3e50}.comment{background-color:hsla(0,0%,98%,.718);border-radius:7px;padding:1rem}.comment .fb-comments{display:flex;justify-content:center;width:100%}',""]),d.locals={},t.exports=d},412:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{script:null,loading:!0}},mounted:function(){this.fbCommentAppend(),"undefined"!=typeof FB&&FB.Event.subscribe("xfbml.render",this.fbCommentsRendered)},methods:{fbCommentsRendered:function(){this.loading=!1},fbCommentAppend:function(){this.script=document.createElement("script"),this.script.setAttribute("src","https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v14.0&appId=1156400821602518&autoLogAppEvents=1"),this.script.setAttribute("crossorigin","anonymous"),this.script.setAttribute("nonce","r78JeLos"),this.script.defer=!0,this.script.async=!0,document.head.appendChild(this.script)}}},c=(n(393),n(67)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"comment"},[t.loading?e("div",{staticClass:"loading"},[t._v("\n    loading...\n  ")]):t._e(),t._v(" "),e("div",{ref:"comments",staticClass:"fb-comments",attrs:{"data-numposts":"5"}})])}),[],!1,null,null,null);e.default=component.exports}}]);