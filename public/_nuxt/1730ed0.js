(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{411:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{date:(new Date).toISOString().substr(0,10),menu:!1,modal:!1,menu2:!1}}},r=n(0),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":e.date,transition:"scale-transition","offset-y":"","min-width":"auto"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Picker in menu","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",r,!1),o))]}}]),model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[e._v(" "),n("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("\n          Cancel\n        ")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.menu.save(e.date)}}},[e._v("\n          OK\n        ")])],1)],1)],1),e._v(" "),n("v-spacer"),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-dialog",{ref:"dialog",attrs:{"return-value":e.date,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Picker in dialog","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",r,!1),o))]}}]),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[e._v(" "),n("v-date-picker",{attrs:{scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v("\n          Cancel\n        ")]),e._v(" "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialog.save(e.date)}}},[e._v("\n          OK\n        ")])],1)],1)],1),e._v(" "),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-menu",{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,r=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{label:"Picker without buttons","prepend-icon":"mdi-calendar",readonly:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",r,!1),o))]}}]),model:{value:e.menu2,callback:function(t){e.menu2=t},expression:"menu2"}},[e._v(" "),n("v-date-picker",{on:{input:function(t){e.menu2=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1)],1),e._v(" "),n("v-spacer")],1)}),[],!1,null,null,null);t.default=component.exports}}]);