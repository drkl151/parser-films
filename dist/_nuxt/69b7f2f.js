(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{383:function(t,e,r){var content=r(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(160).default)("098d592e",content,!0,{sourceMap:!1})},384:function(t,e,r){"use strict";r.r(e);var n={name:"Table",props:{films:{type:Array}}},o=(r(385),r(66)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table-wrapper"},[t._m(0),t._v(" "),r("table",{staticClass:"table"},[t._m(1),t._v(" "),t._l(t.films,(function(e){return r("tr",{key:e.poster},[e.torrentUrls.length?[r("td",[t._v("\n          "+t._s(e.Название)+"\n          "),e.АльтернативноеНазвание?r("span",[t._v("\n            / "+t._s(e.АльтернативноеНазвание))]):t._e()]),t._v(" "),r("td",[t._v(t._s(e.Год))]),t._v(" "),r("td",[t._v(t._s(e.Жанр))]),t._v(" "),r("td",[t._v(t._s(e.Описание))]),t._v(" "),r("td",[t._v(t._s(e.Актеры))]),t._v(" "),r("td",[t._v(t._s(e.Перевод))]),t._v(" "),r("td",[t._v(t._s(e.Продолжительность))]),t._v(" "),r("td",[t._v(t._s(e.Режиссер))]),t._v(" "),r("td",[t._v(t._s(e.Качество))]),t._v(" "),r("td",[t._v("\n          "+t._s(e.Постер)+"\n        ")]),t._v(" "),r("td",t._l(e.torrentUrls,(function(e,i){return r("p",{key:i},[r("a",{attrs:{target:"_blank",href:e}},[t._v(t._s(e))])])})),0)]:t._e()],2)}))],2)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"choose-site"},[r("p",[t._v("Выбери сайт для парсинга")]),t._v(" "),r("select",{attrs:{name:"select"}},[r("option",{attrs:{value:"site1",selected:""}},[t._v("Kinobase")]),t._v(" "),r("option",{attrs:{value:"site2"}},[t._v("rezka")]),t._v(" "),r("option",{attrs:{value:"site3"}},[t._v("film 3")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tr",{staticClass:"title-row"},[r("th",[t._v("Название")]),t._v(" "),r("th",[t._v("Год")]),t._v(" "),r("th",[t._v("Категории")]),t._v(" "),r("th",[t._v("Описание")]),t._v(" "),r("th",[t._v("Актеры")]),t._v(" "),r("th",[t._v("Перевод")]),t._v(" "),r("th",[t._v("Длительность")]),t._v(" "),r("th",[t._v("Режиссер")]),t._v(" "),r("th",[t._v("Формат видео")]),t._v(" "),r("th",[t._v("Постер")]),t._v(" "),r("th",[t._v("Торент")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Table:r(384).default})},385:function(t,e,r){"use strict";r(383)},386:function(t,e,r){var n=r(159)(!1);n.push([t.i,".table{width:100%;border-collapse:collapse;background-color:#fff}th{border:2px solid #800069;min-width:200px}td{border:2px solid green}",""]),t.exports=n},387:function(t,e,r){var content=r(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(160).default)("1b7833da",content,!0,{sourceMap:!1})},388:function(t,e,r){"use strict";r(387)},389:function(t,e,r){var n=r(159)(!1);n.push([t.i,"body{margin:0;padding:0;box-sizing:border-box}#main{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;padding:40px 20px;width:100vw;height:100vh}",""]),t.exports=n},390:function(t,e,r){"use strict";r.r(e);r(44),r(28),r(43),r(15),r(70),r(33),r(71);var n=r(27),o=r(89);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={name:"IndexPage",components:{Table:r(384).default},mounted:function(){this.parse()},computed:_({},Object(o.c)({films:"parse/films"})),methods:_({},Object(o.b)({parse:"parse/parse"}))},v=(r(388),r(66)),component=Object(v.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{attrs:{id:"main"}},[r("Table",{attrs:{films:t.films}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Table:r(384).default})}}]);