(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{292:function(t,e,r){var content=r(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(143).default)("11a11f66",content,!0,{sourceMap:!1})},294:function(t,e,r){"use strict";r.r(e);r(45),r(31),r(44),r(14),r(71),r(36),r(72);var n=r(28),o=r(84);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"Table",props:{films:{type:Array,default:function(){return[]}}},data:function(){return{selectedTranslate:"",selectedQuality:""}},computed:c({},Object(o.c)({isLoadingUrl:"hdrezka/isLoadingUrl"})),methods:c(c(c({},Object(o.b)({getUrlActions:"hdrezka/getUrl"})),Object(o.d)({changeTranslateValue:"hdrezka/changeTranslateValue",changeQualityValue:"hdrezka/changeQualityValue"})),{},{getUrl:function(t){this.getUrlActions(t)},changeTranslateValueMethod:function(t,e){this.changeTranslateValue({url:e,value:t.target.value})},changeQualityValueMethod:function(t,e){this.changeQualityValue({url:e,value:t.target.value})},copyM3U8:function(t){navigator.clipboard.writeText(t)}})},h=(r(295),r(52)),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table-wrapper"},[r("table",{staticClass:"table"},[t._m(0),t._v(" "),t._l(t.films,(function(e,i){return r("tr",{key:e.Оригинальное_название},[r("td",[t.isLoadingUrl?r("p",[t._v("Loading...")]):r("button",{staticClass:"btn-getm3u8",on:{click:function(r){return t.getUrl({url:e.url,quality:e.quality,translate:e.translate})}}},[t._v("\n          Получить ссылку m3u8\n        ")]),t._v(" "),e.m3u8Url?[r("input",{attrs:{id:"m3u8-text"},domProps:{value:e.m3u8Url}}),t._v(" "),r("p",{attrs:{id:"copy"},on:{click:function(r){return t.copyM3U8(e.m3u8Url)}}},[t._v("copy")])]:t._e()],2),t._v(" "),r("td",[t._v(t._s(i+1))]),t._v(" "),r("td",[t._v(t._s(e.Название)+" / "+t._s(e.Оригинальное_название))]),t._v(" "),r("td",[r("select",{staticClass:"select",attrs:{name:"translate"},domProps:{value:e.translate},on:{input:function(r){return t.changeTranslateValueMethod(r,e.url)}}},t._l(e["Перевод"],(function(e,n){return r("option",{key:n,domProps:{value:e}},[t._v("\n            "+t._s(e)+"\n          ")])})),0)]),t._v(" "),r("td",[r("select",{staticClass:"select",attrs:{name:"quality"},domProps:{value:e.quality},on:{input:function(r){return t.changeQualityValueMethod(r,e.url)}}},t._l(e["Качество"],(function(e,n){return r("option",{key:n,domProps:{value:e}},[t._v("\n            "+t._s(e)+"\n          ")])})),0)]),t._v(" "),r("td",[t._v(t._s(e["Дата выхода"]||e["Год"]))]),t._v(" "),r("td",[t._v(t._s(e.Жанр))]),t._v(" "),r("td",{staticStyle:{"min-width":"450px"}},[t._v(t._s(e["Описание"]))]),t._v(" "),r("td",[t._v(t._s(e["В ролях актеры"]))]),t._v(" "),r("td",[t._v(t._s(e.Время))]),t._v(" "),r("td",[t._v(t._s(e.Режиссер))]),t._v(" "),r("td",[r("img",{staticStyle:{width:"260px"},attrs:{src:e.Постер,alt:e.Название}})])])}))],2)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"title-row"},[r("th",[t._v("Получить m3u8")]),t._v(" "),r("th",{staticStyle:{"min-width":"70px"}},[t._v("№")]),t._v(" "),r("th",[t._v("Название")]),t._v(" "),r("th",[t._v("Перевод")]),t._v(" "),r("th",[t._v("Качество")]),t._v(" "),r("th",[t._v("Год")]),t._v(" "),r("th",[t._v("Категории")]),t._v(" "),r("th",[t._v("Описание")]),t._v(" "),r("th",[t._v("Актеры")]),t._v(" "),r("th",[t._v("Длительность")]),t._v(" "),r("th",[t._v("Режиссер")]),t._v(" "),r("th",[t._v("Постер")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Table:r(294).default})},295:function(t,e,r){"use strict";r(292)},296:function(t,e,r){var n=r(142)(!1);n.push([t.i,'.table-wrapper{width:-webkit-fill-available;margin:30px}.table-wrapper .table{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 0 40px hsla(0,1%,60%,.425)}.table-wrapper .table th{border:2.4px solid rgba(47,124,150,.682);background:rgba(141,184,255,.538);min-width:200px;height:60px}.table-wrapper .table td{border:2.4px solid rgba(47,124,150,.682);padding:4px}.table-wrapper .table td #copy{cursor:pointer;margin:0}.table-wrapper .table td #copy:hover{color:rgba(54,54,54,.764)}.btn-getm3u8{text-decoration:none;display:inline-block;padding:20px 30px;margin:10px 20px;position:relative;color:#000;border:2px solid rgba(29,133,159,.596);background:none;font-weight:300;font-family:"Montserrat",sans-serif;text-transform:uppercase;letter-spacing:2px;cursor:pointer;background:rgba(141,184,255,.538);border-radius:3px;transition:.8s}.btn-getm3u8:hover{background:rgba(141,185,255,.382)}.btn-getm3u8:after,.btn-getm3u8:before{content:"";position:absolute;width:0;height:0;opacity:0;box-sizing:border-box}.btn-getm3u8:before{bottom:0;left:0;border-left:2.4px solid rgba(47,124,150,.682);border-top:2.4px solid rgba(47,124,150,.682);transition:opacity 0s ease .8s,width .2s ease .4s,height .2s ease .6s}.btn-getm3u8:after{top:0;right:0;border-right:2.4px solid rgba(47,124,150,.682);border-bottom:2.4px solid rgba(47,124,150,.682);transition:opacity 0s ease .4s,width .2s ease,height .2s ease .2s}.btn-getm3u8:hover:after,.btn-getm3u8:hover:before{height:100%;width:100%;opacity:1}.btn-getm3u8:hover:before{transition:opacity 0s ease 0s,height .2s ease,width .2s ease .2s}.btn-getm3u8:hover:after{transition:opacity 0s ease .4s,height .2s ease .4s,width .2s ease .6s}',""]),t.exports=n}}]);