(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{372:function(t,e,n){var content=n(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("3879ad43",content,!0,{sourceMap:!1})},388:function(t,e,n){"use strict";n(372)},389:function(t,e,n){var o=n(4)(!1);o.push([t.i,".huge{font-size:8rem;color:#928f8f;width:100%;padding:20px}.boxes{display:flex;flex-wrap:wrap;justify-content:center}.boxContent,.boxMake{padding:10px}.boxContainer{border:1px solid #999;margin:5px;width:250px}.boxContainer .boxHeader{display:flex;background-color:#dbdbdb;justify-content:space-between}.boxContainer input{outline:none;border:1px solid #fcfcfc;padding:5px;background-color:inherit}.boxContainer .edit input{background-color:#fff}.boxContainer .boxMake.view input{border:1px solid #dbdbdb;padding:5px}.edit{display:none}.edit input{border-color:#a3a2a2}.boxContent.edit input{margin:2px 0}.hide{display:none}.show{display:block}",""]),t.exports=o},408:function(t,e,n){"use strict";n.r(e);n(30);var o={data:function(){return{items:[{make:"hp",username:"admin",pass:"1234"},{make:"Samsung",username:"admin",pass:"1234"},{make:"Kyo",username:"admin",pass:"1234"}]}},methods:{edit:function(t,e){var n=document.getElementsByClassName("".concat(t)),o=document.getElementsByClassName("".concat(e));n.forEach((function(t){t.classList.add("hide")})),o.forEach((function(t){t.classList.add("show")}))},cancel:function(t,e){var n=document.getElementsByClassName("".concat(t)),o=document.getElementsByClassName("".concat(e));n.forEach((function(t){t.classList.remove("hide")})),o.forEach((function(t){t.classList.remove("show")}))}}},d=(n(388),n(0)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"boxes"},t._l(t.items,(function(a,i){return n("div",{key:i,staticClass:"boxContainer"},[n("div",{staticClass:"boxHeader"},[n("div",{staticClass:"boxMake view",class:"content-view-"+i},[n("input",{attrs:{type:"text",readonly:""},domProps:{value:a.make}})]),t._v(" "),n("div",{staticClass:"boxMake edit",class:"content-edit-"+i},[n("input",{attrs:{type:"text"},domProps:{value:a.make}})]),t._v(" "),n("div",{staticClass:"tools"},[n("div",{staticClass:"view",class:"content-view-"+i},[n("Pencil",{on:{click:function(e){return t.edit("content-view-"+i,"content-edit-"+i)}}})],1),t._v(" "),n("div",{staticClass:"edit",class:"content-edit-"+i},[n("CloseCircle",{on:{click:function(e){return t.cancel("content-view-"+i,"content-edit-"+i)}}}),n("Send")],1)])]),t._v(" "),n("div",{staticClass:"boxContent",class:"content-view-"+i},[n("div",{staticClass:"boxUsername"},[n("input",{attrs:{readonly:"",type:"text",id:"username-view-"+i},domProps:{value:a.username}}),t._v(" "),n("ContentCopy")],1),t._v(" "),n("div",{staticClass:"boxPassword"},[n("input",{attrs:{readonly:"",type:"text",id:"password-view-"+i},domProps:{value:a.pass}}),t._v(" "),n("ContentCopy")],1)]),t._v(" "),n("div",{staticClass:"boxContent edit",class:"content-edit-"+i},[n("div",{staticClass:"boxUsername"},[n("input",{attrs:{type:"text",id:"username-edit-"+i},domProps:{value:a.username}})]),t._v(" "),n("div",{staticClass:"boxPassword"},[n("input",{attrs:{type:"text",id:"password-edit-"+i},domProps:{value:a.pass}})])])])})),0)}),[],!1,null,null,null);e.default=component.exports}}]);