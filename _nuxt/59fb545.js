(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{367:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(132).default)("39a71dc0",content,!0,{sourceMap:!1})},387:function(t,e,n){"use strict";n(367)},388:function(t,e,n){var o=n(129),r=n(130),d=n(131),c=o((function(i){return i[1]})),l=r(d);c.push([t.i,'@font-face{font-display:block;font-family:"Bubbleboddy Neue";src:url('+l+') format("woff2")}nav[data-v-e5c72306]{background-color:hsla(0,0%,100%,.4);border:3px solid #fff;border-radius:10px;margin:.5em 0}a[data-v-e5c72306]{color:inherit;-webkit-text-decoration:none;text-decoration:none}*[data-v-e5c72306]{box-sizing:border-box}body[data-v-e5c72306]{color:#2c3e50}nav[data-v-e5c72306]{align-items:center;background:linear-gradient(transparent,hsla(0,0%,100%,.4));border-radius:0 0 1rem 1rem;border-width:0 0 3px;display:flex;justify-content:flex-start;margin-top:0;padding:1rem}nav img[data-v-e5c72306]{border-radius:50%;cursor:pointer;height:4rem;width:4rem}nav .content[data-v-e5c72306]{padding:.5rem}nav .content a[data-v-e5c72306],nav .content h1[data-v-e5c72306],nav .content h2[data-v-e5c72306],nav .content p[data-v-e5c72306]{line-height:1.2rem;margin:0}nav .content h2[data-v-e5c72306]{font-size:1.2rem}nav .content .adress[data-v-e5c72306]{font-family:Avenir,Helvetica,Arial,sans-serif;font-size:.8rem;font-weight:700}nav input[data-v-e5c72306],nav label[data-v-e5c72306]{display:none}nav .links[data-v-e5c72306]{align-items:center;display:flex;flex:1;justify-content:flex-end;list-style:none;margin:0;padding:0;z-index:2}nav .links a[data-v-e5c72306]{margin:.25rem .5rem}nav .links .dropDown[data-v-e5c72306]{height:2rem;position:relative;width:3rem}nav .links .dropDown .dropDownContent[data-v-e5c72306]{display:flex;flex-direction:column;position:absolute;width:100%}nav .links .dropDown .dropDownContent .langButton[data-v-e5c72306]{background-position:50%;background-size:cover;border:none;cursor:pointer;height:2rem;margin:2px 0;opacity:.8;position:relative;text-shadow:1px 1px #fff;text-transform:uppercase;width:100%}nav .links .dropDown .dropDownContent .langButton[data-v-e5c72306]:hover{opacity:1}@media(max-width:768px){.links[data-v-e5c72306]{background:linear-gradient(90deg,#f0b1cf,#dc468e);border:3px solid #fff;border-radius:1rem 0 0 1rem;bottom:0;flex-direction:column;height:calc(100% - 50px - 2rem);justify-content:start!important;position:fixed;right:0;transform:translateX(100%);transition:.5s;z-index:1}.links li[data-v-e5c72306]{margin:.5rem 0;padding:.25rem}label[data-v-e5c72306]{align-items:center;background-color:hsla(0,0%,100%,.5);border-radius:50%;cursor:pointer;display:flex!important;flex-direction:column;height:4rem;justify-content:center;margin:1rem;position:fixed;right:0;top:0;transition:.5s;width:4rem;z-index:2}label div[data-v-e5c72306]{background-color:#331b62;border-radius:5px;height:5px;margin:3px 0;position:relative;transition:.5s;width:60%}#toggler:checked~.links[data-v-e5c72306]{transform:translateX(0)}#toggler:checked~label div[data-v-e5c72306]{transition:1s}#toggler:checked~label div[data-v-e5c72306]:first-child{top:5px;transform:rotate(45deg)}#toggler:checked~label div[data-v-e5c72306]:nth-child(2){display:none}#toggler:checked~label div[data-v-e5c72306]:nth-child(3){top:-5px;transform:rotate(-45deg)}}',""]),c.locals={},t.exports=c},409:function(t,e,n){"use strict";n.r(e);var o={name:"appNav",data:function(){return{expandLang:!1}},methods:{langDropdown:function(){this.expandLang=!this.expandLang}}},r=(n(387),n(67)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("nav",[e("routerLink",{attrs:{to:"/"}},[e("img",{attrs:{src:"/bombeltyj/bombeltyj_logo.svg",alt:"Bombel Tyj Logo",fetchpriority:"high"}})]),t._v(" "),t._m(0),t._v(" "),e("input",{attrs:{type:"checkbox",id:"toggler"}}),t._v(" "),t._m(1),t._v(" "),e("ul",{staticClass:"links"},[e("li",[e("routerLink",{attrs:{to:"/"}},[t._v(t._s(t.$t("menu").toUpperCase()))])],1),t._v(" "),e("li",[e("nuxtLink",{attrs:{to:"/opinie"}},[t._v(t._s(t.$t("opinie").toUpperCase()))])],1),t._v(" "),e("li",[e("nuxtLink",{attrs:{to:"/story/elza"}},[t._v(t._s(t.$t("produkty").toUpperCase()))])],1),t._v(" "),e("li",[e("div",{staticClass:"dropDown"},[e("div",{staticClass:"dropDownContent"},[e("button",{staticClass:"langButton",style:"background-image: url('/bombeltyj/img/flags/".concat(t.$i18n.localeProperties.code,".svg');"),on:{click:t.langDropdown}},[t._v(t._s(t.$i18n.localeProperties.code)+" ")]),t._v(" "),t.expandLang?e("div",{staticClass:"dropDownList"},t._l(t.$i18n.localeCodes,(function(n){return e("button",{staticClass:"langButton",style:"background-image: url('/bombeltyj/img/flags/".concat(n,".svg');"),on:{click:function(e){t.$i18n.setLocale(n),t.expandLang=!1}}},[t._v(" "+t._s(n)+" ")])})),0):t._e()])])])])],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"content"},[e("h1",[t._v("BOMBEL TYJ")]),t._v(" "),e("a",{attrs:{href:"https://www.google.com/maps/dir//bombel+tyj/",target:"_blank"}},[e("p",{staticClass:"adress"},[t._v(" Rybnik, Sobieskiego 13 ")])])])},function(){var t=this,e=t._self._c;return e("label",{attrs:{for:"toggler"}},[e("div"),t._v(" "),e("div"),t._v(" "),e("div")])}],!1,null,"e5c72306",null);e.default=component.exports}}]);