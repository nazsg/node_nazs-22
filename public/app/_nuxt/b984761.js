(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){"use strict";var o=n(1),r=n(163),c=n(164),l=n(165),d=n(166),f=n(167),x=n(168),m=n(169),h=n(170),v=n(171),C=n(172),w=n(173),y=n(174);o.a.component("ArrowRight",r.a),o.a.component("CloseCircle",c.a),o.a.component("Send",l.a),o.a.component("Delete",d.a),o.a.component("Refresh",f.a),o.a.component("ContentCopy",x.a),o.a.component("Pencil",m.a),o.a.component("DeleteForever",h.a),o.a.component("Lock",v.a),o.a.component("Account",C.a),o.a.component("LeftArrow",w.a),o.a.component("Plus",y.a)},144:function(e,t,n){var content=n(217);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(75).default)("7388ab72",content,!0,{sourceMap:!1})},146:function(e,t,n){var content=n(221);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(75).default)("4e8213bc",content,!0,{sourceMap:!1})},162:function(e,t,n){"use strict";var o={},r=(n(220),n(2)),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrapper"},[t("div",{staticClass:"content"},[t("my-header"),this._v(" "),t("nuxt")],1),this._v(" "),t("my-footer")],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{MyHeader:n(243).default,MyFooter:n(244).default})},175:function(e,t,n){n(176),e.exports=n(177)},216:function(e,t,n){"use strict";n(144)},217:function(e,t,n){(t=n(74)(!1)).push([e.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),e.exports=t},220:function(e,t,n){"use strict";n(146)},221:function(e,t,n){(t=n(74)(!1)).push([e.i,".huge{font-size:8rem;color:#928f8f;width:100%;padding:20px}.boxes{flex-wrap:wrap}.boxes,.devicePasswordContent{display:flex;justify-content:center}.devicePasswordContent{height:75px;flex-direction:column;align-items:center}.serversContent{height:110px}.boxContent,.boxMake{padding:10px}.boxContainer{border:1px solid #999;margin:5px;min-width:290px}.boxContainer .field{align-items:center;justify-content:space-between;display:flex}.boxContainer .field textarea{display:block;width:100%;background-color:inherit;outline:none;border-color:#f8efef;height:auto;resize:none}.boxContainer .field label{display:inline-block;color:#858383;font:12px Arial}.boxContainer .field.notes{flex-direction:column;align-items:flex-start}.boxContainer .boxHeader{display:flex;background-color:#dbdbdb;justify-content:space-between}.boxContainer .boxHeader .material-design-icon{padding:5px}.boxContainer input{outline:none;border:1px solid #f8efef;padding:5px;background-color:inherit}.boxContainer .edit input{background-color:#fff}.boxContainer .boxMake.view input{border:1px solid #dbdbdb;padding:5px}.edit{display:none}.edit .field input{border-color:#a3a2a2}.edit .field textarea{background-color:#fff;border-color:#a3a2a2;resize:auto}.boxContent.edit input{margin:2px 0}.hide{display:none}.show{display:block}.methodBox .boxContainer{height:220px}html{overflow:auto}html *{margin:0;padding:0}html .wrapper{display:flex;flex-direction:column;height:100vh}html .content{flex:1 0 auto}html footer{flex-shrink:0}footer,header{background-color:#a8a5a5}",""]),e.exports=t},222:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return r})),n.d(t,"getters",(function(){return c})),n.d(t,"mutations",(function(){return l})),n.d(t,"actions",(function(){return d}));n(38);var o=n(6),r=function(){return{test:"hi from root store",loggedIn:!1,customers:[]}},c={getTest:function(e){return e.test},getloggedIn:function(e){return e.loggedIn},getCustomers:function(e){return e.customers}},l={set_test:function(e,t){},set_loggedIn:function(e,t){e.loggedIn=t},setCustomers:function(e,t){e.customers=t,localStorage.setItem("customers",JSON.stringify(t)),console.log("plans set from actions")}},d={setCustomers:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("/api/customers");case 3:n=t.sent,e.commit("setCustomers",n.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},nuxtServerInit:function(e,t){return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,t.$axios.get("/api/customers");case 3:o=n.sent,e.commit("setCustomers",o.data),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))()}}},243:function(e,t,n){"use strict";n.r(t);var o={},r=n(2),component=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("header",[t("nuxt-link",{attrs:{to:"/customer"}},[this._v("home")])],1)}),[],!1,null,null,null);t.default=component.exports},244:function(e,t,n){"use strict";n.r(t);var o={},r=n(2),component=Object(r.a)(o,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("footer",[t("h1",[this._v("footer")])])}],!1,null,null,null);t.default=component.exports},27:function(e,t,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(216),n(2)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{dark:""}},[404===e.error.statusCode?n("h1",[e._v("\n    "+e._s(e.pageNotFound)+"\n  ")]):n("h1",[e._v("\n    "+e._s(e.otherError)+"\n  ")]),e._v(" "),n("NuxtLink",{attrs:{to:"/"}},[e._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);t.a=component.exports}},[[175,14,1,15]]]);