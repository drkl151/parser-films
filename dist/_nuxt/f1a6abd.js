(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{292:function(e,t,r){var content=r(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(143).default)("11a11f66",content,!0,{sourceMap:!1})},293:function(e,t,r){var content=r(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(143).default)("58d58e36",content,!0,{sourceMap:!1})},294:function(e,t,r){"use strict";r.r(t);r(45),r(31),r(44),r(14),r(71),r(36),r(72);var o=r(28),n=r(84);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={name:"Table",props:{films:{type:Array,default:function(){return[]}}},data:function(){return{selectedTranslate:"",selectedQuality:""}},computed:c({},Object(n.c)({isLoadingUrl:"hdrezka/isLoadingUrl"})),methods:c(c(c({},Object(n.b)({getUrlActions:"hdrezka/getUrl"})),Object(n.d)({changeTranslateValue:"hdrezka/changeTranslateValue",changeQualityValue:"hdrezka/changeQualityValue"})),{},{getUrl:function(e){this.getUrlActions(e)},changeTranslateValueMethod:function(e,t){this.changeTranslateValue({url:t,value:e.target.value})},changeQualityValueMethod:function(e,t){this.changeQualityValue({url:t,value:e.target.value})},copyM3U8:function(e){navigator.clipboard.writeText(e)}})},f=(r(295),r(52)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"table-wrapper"},[r("table",{staticClass:"table"},[e._m(0),e._v(" "),e._l(e.films,(function(t,i){return r("tr",{key:t.Оригинальное_название},[r("td",[e.isLoadingUrl?r("p",[e._v("Loading...")]):r("button",{staticClass:"btn-getm3u8",on:{click:function(r){return e.getUrl({url:t.url,quality:t.quality,translate:t.translate})}}},[e._v("\n          Получить ссылку m3u8\n        ")]),e._v(" "),t.m3u8Url?[r("input",{attrs:{id:"m3u8-text"},domProps:{value:t.m3u8Url}}),e._v(" "),r("p",{attrs:{id:"copy"},on:{click:function(r){return e.copyM3U8(t.m3u8Url)}}},[e._v("copy")])]:e._e()],2),e._v(" "),r("td",[e._v(e._s(i+1))]),e._v(" "),r("td",[e._v(e._s(t.Название)+" / "+e._s(t.Оригинальное_название))]),e._v(" "),r("td",[r("select",{staticClass:"select",attrs:{name:"translate"},domProps:{value:t.translate},on:{input:function(r){return e.changeTranslateValueMethod(r,t.url)}}},e._l(t["Перевод"],(function(t,o){return r("option",{key:o,domProps:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])})),0)]),e._v(" "),r("td",[r("select",{staticClass:"select",attrs:{name:"quality"},domProps:{value:t.quality},on:{input:function(r){return e.changeQualityValueMethod(r,t.url)}}},e._l(t["Качество"],(function(t,o){return r("option",{key:o,domProps:{value:t}},[e._v("\n            "+e._s(t)+"\n          ")])})),0)]),e._v(" "),r("td",[e._v(e._s(t["Дата выхода"]||t["Год"]))]),e._v(" "),r("td",[e._v(e._s(t.Жанр))]),e._v(" "),r("td",{staticStyle:{"min-width":"450px"}},[e._v(e._s(t["Описание"]))]),e._v(" "),r("td",[e._v(e._s(t["В ролях актеры"]))]),e._v(" "),r("td",[e._v(e._s(t.Время))]),e._v(" "),r("td",[e._v(e._s(t.Режиссер))]),e._v(" "),r("td",[r("img",{staticStyle:{width:"260px"},attrs:{src:t.Постер,alt:t.Название}})])])}))],2)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",{staticClass:"title-row"},[r("th",[e._v("Получить m3u8")]),e._v(" "),r("th",{staticStyle:{"min-width":"70px"}},[e._v("№")]),e._v(" "),r("th",[e._v("Название")]),e._v(" "),r("th",[e._v("Перевод")]),e._v(" "),r("th",[e._v("Качество")]),e._v(" "),r("th",[e._v("Год")]),e._v(" "),r("th",[e._v("Категории")]),e._v(" "),r("th",[e._v("Описание")]),e._v(" "),r("th",[e._v("Актеры")]),e._v(" "),r("th",[e._v("Длительность")]),e._v(" "),r("th",[e._v("Режиссер")]),e._v(" "),r("th",[e._v("Постер")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Table:r(294).default})},295:function(e,t,r){"use strict";r(292)},296:function(e,t,r){var o=r(142)(!1);o.push([e.i,'.table-wrapper{width:-webkit-fill-available;margin:30px}.table-wrapper .table{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 0 40px hsla(0,1%,60%,.425)}.table-wrapper .table th{border:2.4px solid rgba(47,124,150,.682);background:rgba(141,184,255,.538);min-width:200px;height:60px}.table-wrapper .table td{border:2.4px solid rgba(47,124,150,.682);padding:4px}.table-wrapper .table td #copy{cursor:pointer;margin:0}.table-wrapper .table td #copy:hover{color:rgba(54,54,54,.764)}.btn-getm3u8{text-decoration:none;display:inline-block;padding:20px 30px;margin:10px 20px;position:relative;color:#000;border:2px solid rgba(29,133,159,.596);background:none;font-weight:300;font-family:"Montserrat",sans-serif;text-transform:uppercase;letter-spacing:2px;cursor:pointer;background:rgba(141,184,255,.538);border-radius:3px;transition:.8s}.btn-getm3u8:hover{background:rgba(141,185,255,.382)}.btn-getm3u8:after,.btn-getm3u8:before{content:"";position:absolute;width:0;height:0;opacity:0;box-sizing:border-box}.btn-getm3u8:before{bottom:0;left:0;border-left:2.4px solid rgba(47,124,150,.682);border-top:2.4px solid rgba(47,124,150,.682);transition:opacity 0s ease .8s,width .2s ease .4s,height .2s ease .6s}.btn-getm3u8:after{top:0;right:0;border-right:2.4px solid rgba(47,124,150,.682);border-bottom:2.4px solid rgba(47,124,150,.682);transition:opacity 0s ease .4s,width .2s ease,height .2s ease .2s}.btn-getm3u8:hover:after,.btn-getm3u8:hover:before{height:100%;width:100%;opacity:1}.btn-getm3u8:hover:before{transition:opacity 0s ease 0s,height .2s ease,width .2s ease .2s}.btn-getm3u8:hover:after{transition:opacity 0s ease .4s,height .2s ease .4s,width .2s ease .6s}',""]),e.exports=o},297:function(e,t,r){"use strict";r(293)},298:function(e,t,r){var o=r(142)(!1);o.push([e.i,".loader{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}.loader__iframe{width:90vw;height:90vh}",""]),e.exports=o},299:function(e,t,r){"use strict";r.r(t);var o={name:"Loader"},n=(r(297),r(52)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loader"},[t("iframe",{staticClass:"loader__iframe",attrs:{src:"https://www.youtube.com/embed/3SeOVVJXOUo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}],!1,null,null,null);t.default=component.exports},300:function(e,t,r){var content=r(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(143).default)("28f1127f",content,!0,{sourceMap:!1})},301:function(e,t,r){"use strict";r(300)},302:function(e,t,r){var o=r(142)(!1);o.push([e.i,'.table-wrapper{width:-webkit-fill-available;margin:30px}.table-wrapper .table{width:100%;border-collapse:collapse;background-color:#fff;box-shadow:0 0 40px hsla(0,1%,60%,.425)}.table-wrapper .table th{border:2.4px solid rgba(47,124,150,.682);background:rgba(141,184,255,.538);min-width:200px;height:60px}.table-wrapper .table td{border:2.4px solid rgba(47,124,150,.682);padding:4px}.table-wrapper .table td #copy{cursor:pointer;margin:0}.table-wrapper .table td #copy:hover{color:rgba(54,54,54,.764)}.btn-getm3u8{text-decoration:none;display:inline-block;padding:20px 30px;margin:10px 20px;position:relative;color:#000;border:2px solid rgba(29,133,159,.596);background:none;font-weight:300;font-family:"Montserrat",sans-serif;text-transform:uppercase;letter-spacing:2px;cursor:pointer;background:rgba(141,184,255,.538);border-radius:3px;transition:.8s}.btn-getm3u8:hover{background:rgba(141,185,255,.382)}.btn-getm3u8:after,.btn-getm3u8:before{content:"";position:absolute;width:0;height:0;opacity:0;box-sizing:border-box}.btn-getm3u8:before{bottom:0;left:0;border-left:2.4px solid rgba(47,124,150,.682);border-top:2.4px solid rgba(47,124,150,.682);transition:opacity 0s ease .8s,width .2s ease .4s,height .2s ease .6s}.btn-getm3u8:after{top:0;right:0;border-right:2.4px solid rgba(47,124,150,.682);border-bottom:2.4px solid rgba(47,124,150,.682);transition:opacity 0s ease .4s,width .2s ease,height .2s ease .2s}.btn-getm3u8:hover:after,.btn-getm3u8:hover:before{height:100%;width:100%;opacity:1}.btn-getm3u8:hover:before{transition:opacity 0s ease 0s,height .2s ease,width .2s ease .2s}.btn-getm3u8:hover:after{transition:opacity 0s ease .4s,height .2s ease .4s,width .2s ease .6s}body{margin:0;padding:0;box-sizing:border-box}#main{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;width:100%;height:100%;display:flex;justify-content:center;align-items:center}#main .getFilms{display:flex;flex-direction:column;min-width:40%;border:2.4px solid rgba(47,124,150,.682);background:rgba(141,184,255,.538);padding:50px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}#main .getFilms .select-film{display:block;font-size:16px;margin:0 0 20px;padding-left:14px;border:1px solid rgba(69,69,69,.614);border-radius:4px;-moz-appearance:none;-webkit-appearance:none;appearance:none;outline:none;background-color:#fff}#main .getFilms .select-film,#main .getFilms__btn{width:100%;height:40px;box-shadow:0 1px 2px rgba(0,0,0,.334);cursor:pointer}.select{display:block;font-size:16px;width:90%;height:30px;margin:0 auto;padding-left:14px;border:1px solid rgba(69,69,69,.614);box-shadow:0 1px 2px rgba(0,0,0,.213);border-radius:4px;-moz-appearance:none;-webkit-appearance:none;appearance:none;outline:none;background-color:#fff;cursor:pointer}',""]),e.exports=o},303:function(e,t,r){"use strict";r.r(t);r(45),r(31),r(44),r(14),r(71),r(36),r(72);var o=r(28),n=r(84),l=r(294),c=r(299);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={name:"IndexPage",components:{Table:l.default,Loader:c.default},data:function(){return{pages:[{title:"Последние поступления",url:"https://hdrezka.ag/?filter=last&genre=1"},{title:"Популярные",url:"https://hdrezka.ag/?filter=popular&genre=1"},{title:"Сейчас смотрят",url:"https://hdrezka.ag/?filter=watching&genre=1"}],currentPage:{title:"Сейчас смотрят",url:"https://hdrezka.ag/?filter=watching&genre=1"}}},mounted:function(){this.loadSocket()},computed:f({},Object(n.c)({isRequest:"hdrezka/isRequest",films:"hdrezka/films"})),methods:f({},Object(n.b)({parseHdrezka:"hdrezka/parse",loadSocket:"hdrezka/loadSocket"}))},m=(r(301),r(52)),component=Object(m.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{attrs:{id:"main"}},[e.isRequest?r("Loader"):[e.isRequest||e.films.length?e._e():r("div",{staticClass:"getFilms"},[r("p",[e._v("Выберите категорию :")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.currentPage,expression:"currentPage"}],staticClass:"select-film",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.currentPage=t.target.multiple?r:r[0]}}},e._l(e.pages,(function(t){return r("option",{key:t.title,staticClass:"select-film__option",domProps:{value:t}},[e._v("\n          "+e._s(t.title)+"\n        ")])})),0),e._v(" "),r("button",{staticClass:"getFilms__btn",on:{click:function(t){return e.parseHdrezka(e.currentPage.url)}}},[e._v("\n        Получить фильмы\n      ")])]),e._v(" "),e.films.length?r("Table",{attrs:{films:e.films}}):e._e()]],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Loader:r(299).default,Table:r(294).default})}}]);