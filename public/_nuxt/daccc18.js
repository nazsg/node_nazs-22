(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{368:function(e,t,d){var content=d(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,d(5).default)("096d2bae",content,!0,{sourceMap:!1})},380:function(e,t,d){"use strict";d(368)},381:function(e,t,d){var r=d(4)(!1);r.push([e.i,".huge[data-v-c29d5e8c]{font-size:8rem;color:#928f8f;width:100%;padding:20px}*[data-v-c29d5e8c]{box-sizing:border-box;transition:.3s}h2[data-v-c29d5e8c]{text-align:center}ips[data-v-c29d5e8c]{display:flex}.addServer[data-v-c29d5e8c]{height:100%;display:flex;margin:auto;flex-direction:column}.addServer fieldset[data-v-c29d5e8c],.addServer ul[data-v-c29d5e8c]{padding:15px 0;list-style:none;width:95%;margin:10px auto;border:1px solid #999}.addServer fieldset[data-v-c29d5e8c],.addServer fieldset div[data-v-c29d5e8c],.addServer ul[data-v-c29d5e8c],.addServer ul div[data-v-c29d5e8c]{display:flex;flex-direction:column}.addServer fieldset div input[data-v-c29d5e8c],.addServer fieldset div select[data-v-c29d5e8c],.addServer fieldset div textarea[data-v-c29d5e8c],.addServer ul div input[data-v-c29d5e8c],.addServer ul div select[data-v-c29d5e8c],.addServer ul div textarea[data-v-c29d5e8c]{font-family:Courier;padding:5px;outline:none;border:1px solid #bfbfc2}.addServer fieldset div input[data-v-c29d5e8c]:focus,.addServer fieldset div input[data-v-c29d5e8c]:hover,.addServer fieldset div select[data-v-c29d5e8c]:focus,.addServer fieldset div select[data-v-c29d5e8c]:hover,.addServer fieldset div textarea[data-v-c29d5e8c]:focus,.addServer fieldset div textarea[data-v-c29d5e8c]:hover,.addServer ul div input[data-v-c29d5e8c]:focus,.addServer ul div input[data-v-c29d5e8c]:hover,.addServer ul div select[data-v-c29d5e8c]:focus,.addServer ul div select[data-v-c29d5e8c]:hover,.addServer ul div textarea[data-v-c29d5e8c]:focus,.addServer ul div textarea[data-v-c29d5e8c]:hover{border-color:#616060}.addServer fieldset iframe[data-v-c29d5e8c],.addServer ul iframe[data-v-c29d5e8c]{display:block;margin-bottom:5px;outline:none;border:1px solid #999}@media (min-width:500px){.addServer fieldset[data-v-c29d5e8c],.addServer ul[data-v-c29d5e8c]{padding:15px;width:490px}.addServer fieldset div[data-v-c29d5e8c],.addServer ul div[data-v-c29d5e8c]{margin:2px 0;flex-direction:row;justify-content:center}.addServer fieldset div label[data-v-c29d5e8c],.addServer ul div label[data-v-c29d5e8c]{flex-basis:100px;text-align:right;padding-right:5px}.addServer fieldset div input[data-v-c29d5e8c],.addServer fieldset div select[data-v-c29d5e8c],.addServer fieldset div textarea[data-v-c29d5e8c],.addServer ul div input[data-v-c29d5e8c],.addServer ul div select[data-v-c29d5e8c],.addServer ul div textarea[data-v-c29d5e8c]{flex-basis:200px}}.addServer fieldset .item[data-v-c29d5e8c],.addServer ul .item[data-v-c29d5e8c]{margin:10px;display:flex;flex-direction:column}.addServer fieldset .item input[data-v-c29d5e8c],.addServer ul .item input[data-v-c29d5e8c]{padding:5px;outline:none;border:1px solid #c5c2c2}.addServer fieldset .item input.ip[data-v-c29d5e8c],.addServer ul .item input.ip[data-v-c29d5e8c]{width:55px;margin-right:1px}.addServer fieldset .item input[data-v-c29d5e8c]:active,.addServer fieldset .item input[data-v-c29d5e8c]:focus,.addServer ul .item input[data-v-c29d5e8c]:active,.addServer ul .item input[data-v-c29d5e8c]:focus{border-color:#666}@media (min-width:500px){.addServer fieldset .item[data-v-c29d5e8c],.addServer ul .item[data-v-c29d5e8c]{flex-direction:row}.addServer fieldset .item label[data-v-c29d5e8c],.addServer ul .item label[data-v-c29d5e8c]{text-align:right;flex-basis:125px;padding-right:5px}}.actions[data-v-c29d5e8c]{display:flex;flex-direction:column;align-items:center}@media (min-width:500px){.actions[data-v-c29d5e8c]{flex-direction:row;justify-content:center}}",""]),e.exports=r},404:function(e,t,d){"use strict";d.r(t);var r=d(10),o=(d(49),d(26),d(258),{data:function(){return{customer:{name:"",solution:""},methodInfo:{methodName:"",url:"",username:"",password:"",notes:""}}},mounted:function(){},methods:{getCustomers:function(){var e=this;this.$axios.get("/api/customers").then((function(data){e.$store.commit("setCustomers",data.data)}))},clear:function(){this.customer={},this.methodInfo={}},addCustomer:function(e,t,d){var o=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("token"),e.next=3,o.$axios.post("/api/customers",{name:o.customer.name,solution:o.customer.solution,methodInfo:[{methodName:o.methodInfo.methodName,url:o.methodInfo.url,username:o.methodInfo.username,password:o.methodInfo.password,notes:o.methodInfo.notes}]},{headers:{token:t}}).then((function(e){"Created"===e.statusText&&(o.getCustomers(),o.$router.push("/customer"))}));case 3:case"end":return e.stop()}}),e)})))()}}}),n=(d(380),d(0)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",{staticClass:"addServer"},[d("h2",[e._v("Add New Customer")]),e._v(" "),d("form",[d("fieldset",[d("legend",[e._v("Customer")]),e._v(" "),d("div",[d("label",[e._v("Name:")]),e._v(" "),d("input",{directives:[{name:"model",rawName:"v-model",value:e.customer.name,expression:"customer.name"}],attrs:{type:"text"},domProps:{value:e.customer.name},on:{input:function(t){t.target.composing||e.$set(e.customer,"name",t.target.value)}}})]),e._v(" "),d("div",[d("label",[e._v("Solution:")]),e._v(" "),d("select",{directives:[{name:"model",rawName:"v-model",value:e.customer.solution,expression:"customer.solution"}],on:{change:function(t){var d=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.customer,"solution",t.target.multiple?d:d[0])}}},[d("option",{attrs:{value:"Equitrac"}},[e._v("Equitrac")]),e._v(" "),d("option",{attrs:{value:"Papercut"}},[e._v("Papercut")]),e._v(" "),d("option",{attrs:{value:"Safecom"}},[e._v("Safecom")])])])]),e._v(" "),d("fieldset",[d("legend",[e._v("Remote method")]),e._v(" "),d("div",[d("label",[e._v("Remote Name")]),e._v(" "),d("input",{directives:[{name:"model",rawName:"v-model",value:e.methodInfo.methodName,expression:"methodInfo.methodName"}],attrs:{type:"text"},domProps:{value:e.methodInfo.methodName},on:{input:function(t){t.target.composing||e.$set(e.methodInfo,"methodName",t.target.value)}}})]),e._v(" "),d("div",[d("label",[e._v("URL")]),e._v(" "),d("input",{directives:[{name:"model",rawName:"v-model",value:e.methodInfo.url,expression:"methodInfo.url"}],attrs:{type:"text"},domProps:{value:e.methodInfo.url},on:{input:function(t){t.target.composing||e.$set(e.methodInfo,"url",t.target.value)}}})]),e._v(" "),d("div",[d("label",[e._v("username")]),e._v(" "),d("input",{directives:[{name:"model",rawName:"v-model",value:e.methodInfo.username,expression:"methodInfo.username"}],attrs:{type:"text"},domProps:{value:e.methodInfo.username},on:{input:function(t){t.target.composing||e.$set(e.methodInfo,"username",t.target.value)}}})]),e._v(" "),d("div",[d("label",[e._v("password")]),e._v(" "),d("input",{directives:[{name:"model",rawName:"v-model",value:e.methodInfo.password,expression:"methodInfo.password"}],attrs:{type:"text"},domProps:{value:e.methodInfo.password},on:{input:function(t){t.target.composing||e.$set(e.methodInfo,"password",t.target.value)}}})]),e._v(" "),d("div",[d("label",[e._v("Notes")]),e._v(" "),d("textarea",{directives:[{name:"model",rawName:"v-model",value:e.methodInfo.notes,expression:"methodInfo.notes"}],attrs:{name:"",id:"",cols:"30",rows:"10"},domProps:{value:e.methodInfo.notes},on:{input:function(t){t.target.composing||e.$set(e.methodInfo,"notes",t.target.value)}}})])])]),e._v(" "),d("div",{staticClass:"actions"},[d("div",{on:{click:function(t){return e.$router.back()}}},[d("Button",[d("span",{staticClass:"text textLeft orange"},[e._v("Back")]),e._v(" "),d("span",{staticClass:"icon iconRight orange"},[d("LeftArrow")],1)])],1),e._v(" "),d("div",{on:{click:e.clear}},[d("Button",[d("span",{staticClass:"text textLeft orange"},[e._v("Clear")]),e._v(" "),d("span",{staticClass:"icon iconRight orange"},[d("DeleteForever")],1)])],1),e._v(" "),d("div",{on:{click:e.addCustomer}},[d("Button",[d("span",{staticClass:"text textLeft orange"},[e._v("Add server")]),e._v(" "),d("span",{staticClass:"icon iconRight orange"},[d("Send")],1)])],1)])])}),[],!1,null,"c29d5e8c",null);t.default=component.exports;installComponents(component,{Button:d(37).default})}}]);