(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{367:function(e,t,r){var content=r(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(5).default)("6ecda65a",content,!0,{sourceMap:!1})},381:function(e,t,r){"use strict";r(367)},382:function(e,t,r){var n=r(4)(!1);n.push([e.i,".huge[data-v-0fdad689]{font-size:8rem;color:#928f8f;width:100%;padding:20px}*[data-v-0fdad689]{box-sizing:border-box;transition:.3s}ips[data-v-0fdad689]{display:flex}.addServer[data-v-0fdad689]{height:100%;margin:auto}.addServer[data-v-0fdad689],.addServer ul[data-v-0fdad689]{display:flex;flex-direction:column}.addServer ul[data-v-0fdad689]{width:95%;padding:15px;margin:40px auto;border:1px solid #999}@media (min-width:500px){.addServer ul[data-v-0fdad689]{width:490px}}.addServer ul .item[data-v-0fdad689]{margin:10px;display:flex;flex-direction:column}.addServer ul .item input[data-v-0fdad689]{padding:5px;outline:none;border:1px solid #c5c2c2}.addServer ul .item input.ip[data-v-0fdad689]{width:55px;margin-right:1px}.addServer ul .item input[data-v-0fdad689]:active,.addServer ul .item input[data-v-0fdad689]:focus{border-color:#666}@media (min-width:500px){.addServer ul .item[data-v-0fdad689]{flex-direction:row}.addServer ul .item label[data-v-0fdad689]{text-align:right;flex-basis:125px;padding-right:5px}}",""]),e.exports=n},403:function(e,t,r){"use strict";r.r(t);r(26),r(79);var n={data:function(){return{customer:"",name:"",ip:[],username:"",password:""}},mounted:function(){this.customer=JSON.parse(localStorage.getItem("customer")).name},methods:{getCustomers:function(){var e=this;this.$axios.get("/api/customers").then((function(data){e.$store.commit("setCustomers",data.data)}))},clear:function(){this.name="",this.ip="",this.username="",this.password=""},insertServer:function(e,t,r){var n=this,o=localStorage.getItem("token"),d=null==this.ip[0]?"":this.ip[0],l=null==this.ip[1]?"":this.ip[1],m=null==this.ip[2]?"":this.ip[2],c=null==this.ip[3]?"":this.ip[3],v=JSON.parse(localStorage.getItem("customer")).id,f="".concat(d,".").concat(l,".").concat(m,".").concat(c),x=[{name:this.name,username:this.username,password:this.password,ip:f}];this.$axios.put("/api/customers/"+v+"/insertOneServer",{server:x},{headers:{token:o}}).then((function(e){"OK"===e.statusText&&(n.getCustomers(),n.$router.push("/customer/".concat(v)))}))}}},o=(r(381),r(0)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("add-new",[r("div",{staticClass:"addServer"},[r("h2",{attrs:{slot:"header"},slot:"header"},[e._v("Add server for "+e._s(e.customer))]),e._v(" "),r("ul",[r("li",{staticClass:"item"},[r("label",[e._v("Server Name:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),r("li",{staticClass:"item"},[r("label",[e._v("Server IP:")]),e._v(" "),r("div",{staticClass:"ips"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.ip[0],expression:"ip[0]"}],staticClass:"ip",attrs:{type:"number",min:"10",max:"255"},domProps:{value:e.ip[0]},on:{input:function(t){t.target.composing||e.$set(e.ip,0,t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.ip[1],expression:"ip[1]"}],staticClass:"ip",attrs:{type:"number",min:"10",max:"255"},domProps:{value:e.ip[1]},on:{input:function(t){t.target.composing||e.$set(e.ip,1,t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.ip[2],expression:"ip[2]"}],staticClass:"ip",attrs:{type:"number",min:"10",max:"255"},domProps:{value:e.ip[2]},on:{input:function(t){t.target.composing||e.$set(e.ip,2,t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.ip[3],expression:"ip[3]"}],staticClass:"ip",attrs:{type:"number",min:"10",max:"255"},domProps:{value:e.ip[3]},on:{input:function(t){t.target.composing||e.$set(e.ip,3,t.target.value)}}})])]),e._v(" "),r("li",{staticClass:"item"},[r("label",[e._v("Server Username:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),e._v(" "),r("li",{staticClass:"item"},[r("label",[e._v("Server Password:")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"text"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._v(" "),r("div",{staticClass:"actions",attrs:{slot:"default"},slot:"default"},[r("div",{on:{click:function(t){return e.$router.back()}}},[r("Button",[r("span",{staticClass:"text textLeft orange"},[e._v("Back")]),e._v(" "),r("span",{staticClass:"icon iconRight orange"},[r("LeftArrow")],1)])],1),e._v(" "),r("div",{on:{click:e.clear}},[r("Button",[r("span",{staticClass:"text textLeft orange"},[e._v("Clear")]),e._v(" "),r("span",{staticClass:"icon iconRight orange"},[r("DeleteForever")],1)])],1),e._v(" "),r("div",{on:{click:e.insertServer}},[r("Button",[r("span",{staticClass:"text textLeft orange"},[e._v("Add server")]),e._v(" "),r("span",{staticClass:"icon iconRight orange"},[r("Send")],1)])],1)])])])])}),[],!1,null,"0fdad689",null);t.default=component.exports;installComponents(component,{Button:r(36).default,AddNew:r(141).default})}}]);