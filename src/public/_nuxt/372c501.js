(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{325:function(t,e,r){var content=r(336);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("2aa14b0b",content,!0,{sourceMap:!1})},329:function(t,e,r){var content=r(361);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("7bdfe01c",content,!0,{sourceMap:!1})},330:function(t,e,r){var content=r(363);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(11).default)("c9e1de78",content,!0,{sourceMap:!1})},335:function(t,e,r){"use strict";r(325)},336:function(t,e,r){(e=r(10)(!1)).push([t.i,".signup-section[data-v-7bd6257a]{margin:40px}.signup-section .glossary-form .textbox[data-v-7bd6257a]{width:70%;margin-right:20px}",""]),t.exports=e},360:function(t,e,r){"use strict";r(329)},361:function(t,e,r){(e=r(10)(!1)).push([t.i,".v-card[data-v-3cc077ae]{width:100%}.glossary-list-item[data-v-3cc077ae]{display:flex;align-items:center;margin:12px;background:#1e1e1e;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);flex:0 0 23%;max-width:23%}.glossary-list-item .v-card[data-v-3cc077ae]{box-shadow:none!important}",""]),t.exports=e},362:function(t,e,r){"use strict";r(330)},363:function(t,e,r){(e=r(10)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap);"]),e.push([t.i,'body{padding:0;box-sizing:border-box}body,h1,h2,h3,h4{margin:0}h1{font-size:300%}h2{font-size:250%}h3{font-size:200%}h4{font-size:170%}[class$=title]{font-size:22px;margin-bottom:10px}div,input,label,p,span,strong,textarea{font-size:inherit;color:inherit;line-height:1.65rem;letter-spacing:inherit}#wrapper{padding:40px;margin:0;position:relative}#wrapper>div{flex:1}.d-flex{display:flex;align-items:center}.p-0{padding:0}.pb-0{padding-bottom:0}.pt-0{padding-top:0}.glossary-list-item{display:flex;align-items:center}.font-great{font-family:"Great Vibes",sans-serif}',""]),t.exports=e},370:function(t,e,r){"use strict";r.r(e);r(12),r(8),r(5),r(4),r(9);var o=r(2),n={name:"SignUp",data:function(){return{inputTitle:""}},methods:{createAccount:function(){this.$store.dispatch("user/setUserName",this.inputTitle),this.$router.push({path:"/",query:{user:this.inputTitle}}),this.$emit("showGlossary")}}},l=(r(335),r(67)),c=r(91),d=r.n(c),m=r(193),f=r(366),v=r(367),h=r(364),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"signup-section"},[r("v-row",[r("v-col",[r("h2",{staticClass:"font-great mb-6"},[t._v("Sign Up")]),t._v(" "),r("p",[t._v("利用者名を入れてください（※3文字以上、16文字以内の英数字）。")])])],1),t._v(" "),r("v-row",{staticClass:"glossary-form d-flex"},[r("v-col",[r("v-text-field",{attrs:{label:"User name","hide-details":"auto"},model:{value:t.inputTitle,callback:function(e){t.inputTitle=e},expression:"inputTitle"}}),t._v(" "),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.inputTitle,expression:"inputTitle"}],staticClass:"mt-4 text-capitalize",attrs:{color:"orange",dark:""},on:{click:t.createAccount}},[t._v("\n        Sign in\n      ")])],1)],1)],1)}),[],!1,null,"7bd6257a",null),x=component.exports;d()(component,{VBtn:m.a,VCol:f.a,VRow:v.a,VTextField:h.a});var y={name:"GlossaryAddForm",props:{username:{type:String,default:""}},data:function(){return{inputText:"",inputTitle:""}},methods:{clickInputButton:function(){var t=this,e={title:this.inputTitle,text:this.inputText};""!==e.title&&""!==e.text&&(this.createGlossaryFlg=!0,console.log(e),this.$ItemStorage.add(this.username,e).then((function(e){t.inputText="",t.inputTitle="",t.createGlossaryFlg=!1})))}}},_=r(368),C=Object(l.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"font-great mb-6"},[t._v("Glossary List")]),t._v(" "),r("div",{staticClass:"glossary-form"},[r("v-text-field",{attrs:{label:"Title","hide-details":"auto"},model:{value:t.inputTitle,callback:function(e){t.inputTitle=e},expression:"inputTitle"}}),t._v(" "),r("v-textarea",{staticClass:"mt-4",attrs:{filled:"",label:"Contents",solo:""},model:{value:t.inputText,callback:function(e){t.inputText=e},expression:"inputText"}}),t._v(" "),r("v-row",{attrs:{justify:"end"}},[r("v-col",{staticClass:"pt-0",attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"orange text-capitalize",dark:""},on:{click:t.clickInputButton}},[t._v("\n          リストに追加する\n        ")])],1)],1)],1)])}),[],!1,null,null,null),w=C.exports;d()(C,{VBtn:m.a,VCol:f.a,VRow:v.a,VTextField:h.a,VTextarea:_.a});var D={name:"ConfirmDialog",props:{title:{type:String,default:""},text:{type:String,default:""}},data:function(){return{dialog:!0}},methods:{closeDialog:function(t){this.dialog=!1,t&&this.$emit("deleteItem"),t||this.$emit("cancelDelete")}}},V=r(328),T=r(323),G=r(371),k=r(369),O=r(319),F=Object(l.a)(D,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{persistent:"",dark:"","max-width":"50%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),r("v-card-text",{domProps:{textContent:t._s(t.text)}}),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"secondary",text:""},on:{click:function(e){return t.closeDialog(!1)}}},[t._v("\n        キャンセル\n      ")]),t._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.closeDialog(!0)}}},[t._v("\n        削除する\n      ")])],1)],1)],1)}),[],!1,null,null,null),$=F.exports;d()(F,{VBtn:m.a,VCard:V.a,VCardActions:T.a,VCardText:T.b,VCardTitle:T.c,VDialog:G.a,VDivider:k.a,VSpacer:O.a});var j={name:"GlossaryEditForm",props:{title:{type:String,default:""},glossary:{type:Object,default:function(){return{}}}},data:function(){return{dialog:!0,item:{title:this.glossary.title,text:this.glossary.text}}},methods:{closeDialog:function(){this.dialog=!1,this.$emit("cancelUpdate")},fireUpdate:function(){this.dialog=!1,this.$emit("updateItem",{newData:this.item,originalData:this.glossary})}}},E=Object(l.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-dialog",{attrs:{persistent:"",dark:"","max-width":"80%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",{staticClass:"pa-8"},[r("v-card-title",[r("h2",{staticClass:"font-great mb-9"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),r("div",{staticClass:"glossary-form"},[r("v-text-field",{attrs:{label:"Title","hide-details":"auto"},model:{value:t.item.title,callback:function(e){t.$set(t.item,"title",e)},expression:"item.title"}}),t._v(" "),r("v-textarea",{staticClass:"mt-4",attrs:{filled:"",label:"Contents",solo:""},model:{value:t.item.text,callback:function(e){t.$set(t.item,"text",e)},expression:"item.text"}})],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"secondary",text:""},on:{click:function(e){return t.closeDialog()}}},[t._v("\n        キャンセル\n      ")]),t._v(" "),r("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.fireUpdate()}}},[t._v("\n        更新する\n      ")])],1)],1)],1)}),[],!1,null,null,null),S=E.exports;d()(E,{VBtn:m.a,VCard:V.a,VCardActions:T.a,VCardTitle:T.c,VDialog:G.a,VDivider:k.a,VSpacer:O.a,VTextField:h.a,VTextarea:_.a});var I={name:"GlossaryList",components:{ConfirmDialog:$,GlossaryEditForm:S},props:{glossarys:{type:Array,default:function(){return{}}},username:{type:String,default:""}},data:function(){return{deleteConfirmDialog:{title:"確認",text:"削除してもよろしいですか？",flg:!1},glossaryEditForm:{title:"Glossary edit form",flg:!1},tmpElm:{}}},mounted:function(){this.$ItemStorage.fetch(this.username)},methods:{openDialog:function(dialog,t){dialog.flg=!0,this.tmpElm=t},closeDialog:function(dialog){dialog.flg=!1,this.tmpElm={}},updateItem:function(t){var e=t.newData,r=t.originalData;this.$ItemStorage.update(this.username,r,e),this.closeDialog(this.glossaryEditForm)},deleteItem:function(t){this.closeDialog(this.deleteConfirmDialog),this.$ItemStorage.delete(this.username,t)}}},U=(r(360),r(125)),z=Object(l.a)(I,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"glossary-list"},t._l(t.glossarys,(function(e,o){return r("v-col",{key:o,staticClass:"glossary-list-item"},[r("v-card",{attrs:{dark:""}},[r("v-card-title",{staticClass:"headline pb-0",domProps:{textContent:t._s(e.title)}}),t._v(" "),r("v-card-text",[r("div",[t._v(t._s(e.text))])]),t._v(" "),r("v-row",{staticClass:"d-flex",attrs:{align:"center",justify:"end"}},[r("v-col",[r("v-card-text",{domProps:{textContent:t._s(e.dateStr)}})],1),t._v(" "),r("v-col",{staticClass:"p-0",attrs:{cols:"auto"}},[r("v-btn",{staticClass:"text-capitalize",attrs:{fab:"",icon:"",small:""},on:{click:function(r){return t.openDialog(t.glossaryEditForm,e)}}},[r("v-icon",[t._v("\n              mdi-pencil\n            ")])],1),t._v(" "),r("v-btn",{staticClass:"mr-5 text-capitalize",attrs:{fab:"",icon:"",small:""},on:{click:function(r){return t.openDialog(t.deleteConfirmDialog,e)}}},[r("v-icon",[t._v("mdi-delete")])],1)],1)],1)],1),t._v(" "),t.glossaryEditForm.flg?r("GlossaryEditForm",{attrs:{title:t.glossaryEditForm.title,glossary:t.tmpElm},on:{updateItem:function(r){return t.updateItem(r,e)},cancelUpdate:function(e){return t.closeDialog(t.glossaryEditForm)}}}):t._e(),t._v(" "),t.deleteConfirmDialog.flg?r("ConfirmDialog",{attrs:{title:t.deleteConfirmDialog.title,text:t.deleteConfirmDialog.text},on:{deleteItem:function(e){return t.deleteItem(t.tmpElm.id)},cancelDelete:function(e){return t.closeDialog(t.deleteConfirmDialog)}}}):t._e()],1)})),1)}),[],!1,null,"3cc077ae",null),P=z.exports;d()(z,{VBtn:m.a,VCard:V.a,VCardText:T.b,VCardTitle:T.c,VCol:f.a,VIcon:U.a,VRow:v.a});var A=r(57);function B(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var L={components:{SignUp:x,GlossaryAddForm:w,GlossaryList:P},data:function(){return{createGlossaryFlg:!1,showGlossaryFlg:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(A.b)({GlossaryList:function(t){return t.glossary.GlossaryList},CurrentGlossary:function(t){return t.glossary.CurrentGlossary},UserName:function(t){return t.user.userName}})),created:function(){this.$route.query.user&&(this.showGlossaryFlg=!0,this.$store.dispatch("user/setUserName",this.$route.query.user))},methods:{showGlossary:function(){this.showGlossaryFlg=!0}}},N=(r(362),Object(l.a)(L,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"wrapper"}},[t.showGlossaryFlg?t._e():r("SignUp",{on:{showGlossary:function(e){return t.showGlossary()}}}),t._v(" "),t.showGlossaryFlg?r("GlossaryAddForm",{attrs:{username:t.UserName}}):t._e(),t._v(" "),t.showGlossaryFlg?r("GlossaryList",{attrs:{glossarys:t.GlossaryList,username:t.UserName}}):t._e()],1)}),[],!1,null,null,null));e.default=N.exports}}]);