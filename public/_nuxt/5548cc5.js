(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{378:function(e,d,r){var content=r(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(5).default)("017d51cc",content,!0,{sourceMap:!1})},400:function(e,d,r){"use strict";r(378)},401:function(e,d,r){var t=r(4)(!1);t.push([e.i,'.huge{font-size:8rem;color:#928f8f;width:100%;padding:20px}.customer{border:1px solid #999}.view-make,.view-password,.view-username{background-color:#e7dcdc}.edit-make,.edit-password,.edit-username{display:none;background-color:#fff}.itemContainer{padding:5px}.table{box-sizing:border-box;width:95%;margin:0 auto}.tableHeader{font-weight:700}.tableContent,.tableHeader{display:flex;justify-content:space-between;background-color:#fff;flex-wrap:wrap}.methodInfo{background-color:#e2dddd;padding:5px;margin:5px}.methodInfo div,input{padding:5px}input{outline:none;border:1px solid #e7dcdc;font-family:"Courier New";background-color:inherit}.deviceList,.devicePassword,.method,.serverList,.solution{list-style-type:none;display:flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.deviceList,.devicePassword,.method,.serverList,.servers,.serverSetup{background-color:#f8efef;padding:5px;display:flex;flex-direction:column;margin:5px}.deviceList .topBar,.devicePassword .topBar,.method .topBar,.serverList .topBar,.servers .topBar,.serverSetup .topBar{display:flex;justify-content:space-between}.deviceList dl,.devicePassword dl,.method dl,.serverList dl,.servers dl,.serverSetup dl{padding:5px}.deviceList dl dd,.devicePassword dl dd,.method dl dd,.serverList dl dd,.servers dl dd,.serverSetup dl dd{background-color:#e7dcdc;border:1px solid #e7dcdc;text-align:right;padding:10px;margin:5px}.deviceList dl dd div,.devicePassword dl dd div,.method dl dd div,.serverList dl dd div,.servers dl dd div,.serverSetup dl dd div{display:flex;padding:5px;justify-content:space-between}.deviceList dl dd span,.devicePassword dl dd span,.method dl dd span,.serverList dl dd span,.servers dl dd span,.serverSetup dl dd span{display:flex}.material-design-icon{cursor:pointer}.devicePasswordEdit dd{border:1px solid #999}.devicePasswordEdit input{background-color:#fff}.devicePasswordEdit input:active,.devicePasswordEdit input:focus{border:1px solid orange}',""]),e.exports=t},416:function(e,d,r){"use strict";r.r(d);var t={mounted:function(){var e=this;this.$axios.get("/api/customers").then((function(data){e.$store.commit("setCustomers",data.data)}))}},o=(r(400),r(0)),component=Object(o.a)(t,(function(){var e=this,d=e.$createElement,r=e._self._c||d;return r("div",{staticClass:"customer itemContainer"},[r("customer-header"),e._v(" "),r("methodInfoBox"),e._v(" "),r("serverBox"),e._v(" "),r("server-setup-box"),e._v(" "),r("device-password-box"),e._v(" "),r("device-list")],1)}),[],!1,null,null,null);d.default=component.exports;installComponents(component,{CustomerHeader:r(142).default,ServerSetupBox:r(146).default,DevicePasswordBox:r(145).default,DeviceList:r(143).default})}}]);