(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,17,18,19,20,21,22,29,30,43,44],{250:function(e,t,o){"use strict";var n,c=o(22),r=o(17);o(24),o(31),o(38);t.a={data:function(){return{customer:[],size:20,devicePasswordView:!0,serverListView:!0,methodView:!0}},mounted:function(){var e={name:this.customer.name,id:this.customer._id};localStorage.setItem("customer",JSON.stringify(e))},methods:(n={copyChild:function(e){this.$emit("copy",e)},editMode:function(view,e){this.$emit("editMode",view,e)},abort:function(e,view,t){this.$emit("abort",e,view,t)},update:function(e,view,t){this.$emit("update",e,view,t)},test:function(){alert("from mixins")}},Object(c.a)(n,"editMode",(function(e,t){var o=document.getElementsByClassName("".concat(e)),n=document.getElementsByClassName("".concat(t));o.forEach((function(e){e.classList.add("hide")})),n.forEach((function(e){e.classList.add("show")}))})),Object(c.a)(n,"viewMode",(function(e,t){var o=document.getElementsByClassName("".concat(e)),n=document.getElementsByClassName("".concat(t));o.forEach((function(e){e.classList.remove("hide")})),n.forEach((function(e){e.classList.remove("show")})),this.$router.push("/customer/"+this.$route.params.customer)})),Object(c.a)(n,"copy",(function(e){var t=this.$refs[e];console.log(t.value),t.select(),document.execCommand("copy")})),Object(c.a)(n,"copy2",(function(a){document.querySelector("#".concat(a)).select(),document.execCommand("copy")})),Object(c.a)(n,"getCustomers",(function(){var e=this;this.$axios.get("/api/customers").then((function(data){e.$store.commit("setCustomers",data.data)}))})),Object(c.a)(n,"getCustomer",(function(){var e=this,t=this.$store.state.customers.filter((function(p){return p._id===e.$route.params.customer})),a=Object(r.a)(t,1)[0];this.customer=a})),n),created:function(){this.getCustomer()}}},263:function(e,t,o){var content=o(273);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(84).default)("143bf53c",content,!0,{sourceMap:!1})},264:function(e,t,o){var content=o(275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(84).default)("3f48997a",content,!0,{sourceMap:!1})},265:function(e,t,o){var content=o(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(84).default)("6ef5929c",content,!0,{sourceMap:!1})},267:function(e,t,o){"use strict";o.r(t);var n={props:["device"],mixins:[o(250).a]},c=o(2),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"tools"},[o("div",{staticClass:"view",class:"content-view-"+e.device._id},[o("Pencil",{on:{click:function(t){return e.editMode("content-view-"+e.device._id,"content-edit-"+e.device._id)}}})],1),e._v(" "),o("div",{staticClass:"edit",class:"content-edit-"+e.device._id},[o("CloseCircle",{attrs:{title:"Cancel"},on:{click:function(t){return e.abort(e.device._id,"content-view-"+e.device._id,"content-edit-"+e.device._id)}}}),o("Send",{on:{click:function(t){return e.update(e.device._id,"content-view-"+e.device._id,"content-edit-"+e.device._id)}}})],1)])}),[],!1,null,null,null);t.default=component.exports},272:function(e,t,o){"use strict";o(263)},273:function(e,t,o){var n=o(83)(!1);n.push([e.i,".huge[data-v-14456daf]{font-size:8rem;color:#928f8f;width:100%;padding:20px}",""]),e.exports=n},274:function(e,t,o){"use strict";o(264)},275:function(e,t,o){var n=o(83)(!1);n.push([e.i,".huge[data-v-9e74d8bc]{font-size:8rem;color:#928f8f;width:100%;padding:20px}",""]),e.exports=n},276:function(e,t,o){"use strict";o(265)},277:function(e,t,o){var n=o(83)(!1);n.push([e.i,".huge[data-v-33cd128c]{font-size:8rem;color:#928f8f;width:100%;padding:20px}",""]),e.exports=n},278:function(e,t,o){"use strict";o.r(t);var n={mixins:[o(250).a],props:["device"]},c=(o(272),o(2)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"field"},[o("label",[e._v("username:")]),e._v(" "),o("input",{attrs:{readonly:"",type:"text",id:"username-view-"+e.device._id},domProps:{value:e.device.username}}),e._v(" "),o("ContentCopy",{on:{click:function(t){return e.copy("username-view-"+e.device._id)}}})],1)}),[],!1,null,"14456daf",null);t.default=component.exports},279:function(e,t,o){"use strict";o.r(t);var n={mixins:[o(250).a],props:["device"]},c=o(2),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"field"},[o("label",[e._v("password:")]),e._v(" "),o("input",{attrs:{readonly:"",type:"text",id:"password-view-"+e.device._id},domProps:{value:e.device.password}}),e._v(" "),o("ContentCopy",{on:{click:function(t){return e.copy("password-view-"+e.device._id)}}})],1)}),[],!1,null,null,null);t.default=component.exports},280:function(e,t,o){"use strict";o.r(t);var n={mixins:[o(250).a],props:["device"]},c=(o(274),o(2)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"field"},[o("label",[e._v("username:")]),e._v(" "),o("input",{attrs:{type:"text",id:"username-edit-"+e.device._id},domProps:{value:e.device.username}})])}),[],!1,null,"9e74d8bc",null);t.default=component.exports},281:function(e,t,o){"use strict";o.r(t);var n={mixins:[o(250).a],props:["device"]},c=(o(276),o(2)),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"field"},[o("label",[e._v("password:")]),e._v(" "),o("input",{attrs:{type:"text",id:"password-edit-"+e.device._id},domProps:{value:e.device.password}})])}),[],!1,null,"33cd128c",null);t.default=component.exports},339:function(e,t,o){"use strict";o.r(t);var n={props:["method"]},c=o(2),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"boxMake view",class:"content-view-"+e.method._id},[o("input",{attrs:{type:"text",readonly:"",id:"methodName-view-"+e.method._id},domProps:{value:e.method.methodName}})])}),[],!1,null,null,null);t.default=component.exports},340:function(e,t,o){"use strict";o.r(t);var n={props:["method"]},c=o(2),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"boxMake edit",class:"content-edit-"+e.method._id},[o("input",{attrs:{type:"text",id:"methodName-edit-"+e.method._id},domProps:{value:e.method.methodName}})])}),[],!1,null,null,null);t.default=component.exports},341:function(e,t,o){"use strict";o.r(t);var n={mixins:[o(250).a],props:["method"]},c=o(2),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"field"},[o("label",[e._v("url:")]),e._v(" "),o("input",{attrs:{readonly:"",type:"text",id:"url-view-"+e.method._id},domProps:{value:e.method.url}}),e._v(" "),o("ContentCopy",{on:{click:function(t){return e.copy("url-view-"+e.method._id)}}})],1)}),[],!1,null,null,null);t.default=component.exports},342:function(e,t,o){"use strict";o.r(t);var n={props:["method"]},c=o(2),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"field notes"},[o("label",[e._v("notes:")]),e._v(" "),o("textarea",{attrs:{readonly:"",type:"text",id:"notes-view-"+e.method._id},domProps:{value:e.method.notes}})])}),[],!1,null,null,null);t.default=component.exports},343:function(e,t,o){"use strict";o.r(t);var n={props:["method"]},c=o(2),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"field"},[o("label",[e._v("url:")]),e._v(" "),o("input",{attrs:{type:"text",id:"url-edit-"+e.method._id},domProps:{value:e.method.url}})])}),[],!1,null,null,null);t.default=component.exports},344:function(e,t,o){"use strict";o.r(t);var n={props:["method"]},c=o(2),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"field notes"},[o("label",[e._v("notes:")]),e._v(" "),o("textarea",{attrs:{cols:"5",type:"text",id:"notes-edit-"+e.method._id},domProps:{value:e.method.notes}})])}),[],!1,null,null,null);t.default=component.exports},419:function(e,t,o){"use strict";o.r(t);var n={mixins:[o(250).a],methods:{abort:function(e,t,o){var n=document.querySelector("#methodName-view-".concat(e)).value;document.querySelector("#methodName-edit-".concat(e)).value=n;var c=document.querySelector("#username-view-".concat(e)).value;document.querySelector("#username-edit-".concat(e)).value=c;var r=document.querySelector("#password-view-".concat(e)).value;document.querySelector("#password-edit-".concat(e)).value=r;var d=document.querySelector("#url-view-".concat(e)).value;document.querySelector("#url-edit-".concat(e)).value=d;var l=document.querySelector("#notes-view-".concat(e)).value;document.querySelector("#notes-edit-".concat(e)).value=l,this.viewMode(t,o)},update:function(e,t,o){var n=this,c=document.querySelector("#methodName-view-".concat(e)),r=document.querySelector("#methodName-edit-".concat(e)),d=document.querySelector("#username-view-".concat(e)),l=document.querySelector("#username-edit-".concat(e)),v=document.querySelector("#password-view-".concat(e)),m=document.querySelector("#password-edit-".concat(e)),f=document.querySelector("#url-view-".concat(e)),h=document.querySelector("#url-edit-".concat(e)),_=document.querySelector("#notes-view-".concat(e)),w=document.querySelector("#notes-edit-".concat(e)),y=localStorage.getItem("token"),x=[{_id:e,methodName:r.value,username:l.value,password:m.value,notes:w.value,url:h.value}];this.$axios.put("/api/customers/"+this.customer._id+"/updateMethodInfo",{methodInfo:x},{headers:{token:y}}).then((function(e){"OK"===e.statusText&&(c.value=r.value,d.value=l.value,v.value=m.value,f.value=h.value,_.value=w.value,n.viewMode(t,o))}))}}},c=o(2),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"method"},[e._m(0),e._v(" "),o("div",{staticClass:"boxes methodBox"},e._l(e.customer.methodInfo,(function(t){return o("div",{key:t._id,staticClass:"boxContainer"},[o("div",{staticClass:"boxHeader"},[o("method-make-read",{attrs:{method:t}}),e._v(" "),o("method-make-edit",{attrs:{method:t}}),e._v(" "),o("action-tools",{attrs:{device:t},on:{editMode:function(t){return e.editMode(arguments[0],arguments[1])},abort:function(t){return e.abort(arguments[0],arguments[1],arguments[2])},update:function(t){return e.update(arguments[0],arguments[1],arguments[2])}}})],1),e._v(" "),o("div",{staticClass:"boxContent",class:"content-view-"+t._id},[o("username-read",{attrs:{device:t}}),e._v(" "),o("password-read",{attrs:{device:t}}),e._v(" "),o("method-url-read",{attrs:{method:t}}),e._v(" "),o("method-notes-read",{attrs:{method:t}})],1),e._v(" "),o("div",{staticClass:"boxContent edit",class:"content-edit-"+t._id},[o("username-edit",{attrs:{device:t}}),e._v(" "),o("password-edit",{attrs:{device:t}}),e._v(" "),o("method-url-edit",{attrs:{method:t}}),e._v(" "),o("method-notes-edit",{attrs:{method:t}})],1)])})),0),e._v(" "),o("nuxt-link",{attrs:{to:"/add-method"}},[o("Plus")],1)],1)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"topBar"},[o("h3",[e._v("Remote Steps")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{MethodMakeRead:o(339).default,MethodMakeEdit:o(340).default,ActionTools:o(267).default,UsernameRead:o(278).default,PasswordRead:o(279).default,MethodUrlRead:o(341).default,MethodNotesRead:o(342).default,UsernameEdit:o(280).default,PasswordEdit:o(281).default,MethodUrlEdit:o(343).default,MethodNotesEdit:o(344).default})}}]);