(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{"5c67":function(t,e){},"722c":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md",staticStyle:{width:"100%","margin-top":"-20px"}},[a("q-table",{attrs:{title:"Treats",dense:"",data:t.data,columns:t.columns,"row-key":"t_code",separator:t.separator,filter:t.filter,loading:t.loading,"selected-rows-label":t.getSelectedString,selection:"multiple",selected:t.selected,"hide-bottom":"",pagination:t.pagination,"no-data-label":"没有找到任何数据","no-results-label":"没有找到您想要的数据","table-style":{height:t.height}},on:{"update:selected":function(e){t.selected=e},"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:"新增",icon:"add"},on:{click:function(e){t.newForm=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          新增一条数据\n        ")]),a("q-dialog",{model:{value:t.newForm,callback:function(e){t.newForm=e},expression:"newForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[t._v("新增数据")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[t._v("关闭")])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"500px"}},[a("q-input",{attrs:{label:t.label_name.name1,placeholder:t.placeholder_name.name1,autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newFormDataCheck()}},model:{value:t.newFormData.name,callback:function(e){t.$set(t.newFormData,"name",e)},expression:"newFormData.name"}}),a("q-input",{attrs:{type:"number",label:t.label_name.name2,placeholder:t.placeholder_name.name2},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newFormDataCheck()}},model:{value:t.newFormData.binl,callback:function(e){t.$set(t.newFormData,"binl",e)},expression:"newFormData.binl"}}),a("q-input",{attrs:{type:"number",label:t.label_name.name3,placeholder:t.placeholder_name.name3},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newFormDataCheck()}},model:{value:t.newFormData.binw,callback:function(e){t.$set(t.newFormData,"binw",e)},expression:"newFormData.binw"}}),a("q-input",{attrs:{type:"number",label:t.label_name.name4,placeholder:t.placeholder_name.name4},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newFormDataCheck()}},model:{value:t.newFormData.binh,callback:function(e){t.$set(t.newFormData,"binh",e)},expression:"newFormData.binh"}})],1),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.newFormDataCancel()}}},[t._v("取消提交")]),a("q-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.newFormDataCheck()}}},[t._v("确认提交")])],1)],1)],1)],1),a("q-btn",{attrs:{label:"修改",icon:"edit"},on:{click:function(e){return t.editFormDataCheck()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          修改数据，一次只能修改一条数据\n        ")]),a("q-dialog",{model:{value:t.editForm,callback:function(e){t.editForm=e},expression:"editForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[t._v("修改数据")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[t._v("关闭")])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"500px"}},[a("q-input",{attrs:{label:t.label_name.name1,placeholder:t.placeholder_name.name1,autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editFormDataSubmit()}},model:{value:t.editFormData.name,callback:function(e){t.$set(t.editFormData,"name",e)},expression:"editFormData.name"}}),a("q-input",{attrs:{type:"number",label:t.label_name.name2,placeholder:t.placeholder_name.name2},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editFormDataSubmit()}},model:{value:t.editFormData.binl,callback:function(e){t.$set(t.editFormData,"binl",e)},expression:"editFormData.binl"}}),a("q-input",{attrs:{type:"number",label:t.label_name.name3,placeholder:t.placeholder_name.name3},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editFormDataSubmit()}},model:{value:t.editFormData.binw,callback:function(e){t.$set(t.editFormData,"binw",e)},expression:"editFormData.binw"}}),a("q-input",{attrs:{type:"number",label:t.label_name.name4,placeholder:t.placeholder_name.name4},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.editFormDataSubmit()}},model:{value:t.editFormData.binh,callback:function(e){t.$set(t.editFormData,"binh",e)},expression:"editFormData.binh"}})],1),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.editFormDataCancel()}}},[t._v("取消提交")]),a("q-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.editFormDataSubmit()}}},[t._v("确认提交")])],1)],1)],1)],1),a("q-btn",{attrs:{label:"删除",icon:"delete"},on:{click:function(e){return t.deleteDataCheck()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          删除选中条数据，可以批量删除\n        ")]),a("q-dialog",{model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[t._v("删除数据")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[t._v("关闭")])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"500px"}},[t._v("\n            数据删除后不可逆\n        ")]),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.deleteDataCancel()}}},[t._v("取消提交")]),a("q-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.deleteDataSubmit()}}},[t._v("确认提交")])],1)],1)],1)],1),a("q-btn",{attrs:{label:"刷新",icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          刷新页面\n        ")])],1),a("q-btn",{attrs:{label:"下载",icon:"cloud_download"},on:{click:function(e){return t.downloadexample()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          将选中的数据下载下来\n        ")])],1),a("q-btn-dropdown",{attrs:{"menu-anchor":"bottom right",label:"日期筛选"}},[a("div",{staticClass:"row no-wrap q-pa-md"},[a("div",{staticClass:"column"},[a("div",{staticClass:"text-h6"},[t._v("起始日期")]),a("q-date",{attrs:{"today-btn":""},model:{value:t.date1,callback:function(e){t.date1=e},expression:"date1"}})],1),a("q-separator",{staticClass:"q-mx-lg",attrs:{vertical:"",inset:""}}),a("div",{staticClass:"column"},[a("div",{staticClass:"text-h6"},[t._v("结束日期")]),a("q-date",{attrs:{"today-btn":""},model:{value:t.date2,callback:function(e){t.date2=e},expression:"date2"}})],1)],1)]),a("q-btn",{attrs:{label:"日期查询",icon:"search"},on:{click:function(e){return t.DatereFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          确认以日期查询数据\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.selected.length>1,expression:"selected.length >1"}],attrs:{icon:"done_all"}},[t._v("Selected: "+t._s(JSON.stringify(t.selected.length))+"\n           "),a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          您选择了("+t._s(JSON.stringify(t.selected.length))+")条数据\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:1===t.selected.length,expression:"selected.length === 1"}],attrs:{icon:"done"}},[t._v("Selected: "+t._s(JSON.stringify(t.selected.length))+"\n         "),a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          您选择了(1)条数据\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:0===t.selected.length,expression:"selected.length === 0"}],attrs:{icon:"check_circle_outline"}},[t._v("Selected: "+t._s(JSON.stringify(t.selected.length))+"\n            "),a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          您还没有选择任何数据\n        ")])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:"本页关键字搜索"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"no-data",fn:function(e){var o=e.icon,i=e.message,n=e.filter;return[a("div",{staticClass:"full-width row flex-center text-accent q-gutter-sm"},[a("q-icon",{attrs:{size:"2em",name:"sentiment_dissatisfied"}}),a("span",[t._v("\n            Well this is sad... "+t._s(i)+"\n          ")]),a("q-icon",{attrs:{size:"2em",name:n?"filter_b_and_w":o}})],1)]}}])}),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-pagination",{staticStyle:{"z-index":"1000"},attrs:{color:"purple",max:t.totlepage,"max-pages":7,"boundary-links":!0,"direction-links":!0,"boundary-numbers":!0},on:{click:function(e){return t.pageChange()}},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1)]],2)},i=[],n=(a("7f7f"),a("b06b")),s={name:"Pagebinsize",data:function(){return{baseurl:"http://127.0.0.1:8000/",pathname:"binsize/",authorization_get:!1,authorization_post:!1,authorization_getfile:!1,authorization_delete:!1,authorization_patch:!1,label_name:{name1:"库位尺寸名",name2:"长(单位：mm)",name3:"宽(单位：mm)",name4:"高(单位：mm)"},placeholder_name:{name1:"请输入库位尺寸名",name2:"长的单位是毫米(单位：mm)",name3:"宽的单位是毫米(单位：mm)",name4:"高度的单位是毫米(单位：mm)"},separator:"cell",loading:!1,filter:"",selected:[],totlepage:1,current:1,height:"",columns:[{name:"name",required:!0,label:"库位尺寸名",align:"left",field:"name"},{name:"binl",label:"长(单位：mm)",field:"binl"},{name:"binw",label:"宽(单位：mm)",field:"binw"},{name:"binh",label:"高(单位：mm)",field:"binh"},{name:"create_name",label:"创建人",field:"create_name"},{name:"create_time",label:"创建时间",field:"create_time"},{name:"last_update_time",label:"最后修改时间",field:"last_update_time"}],data:[],pagination:{sortBy:"create_time",descending:!0,page:1,rowsPerPage:50},newForm:!1,newFormData:{name:"",binl:"",binw:"",binh:""},editForm:!1,editFormData:{},deleteDialog:!1,deleteFormData:[],date1:"",date2:""}},methods:{authCheck:function(){var t=this,e=this.$q.localStorage.getItem("openid");this.$axios.get(this.baseurl+"userauth/",{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e,authorization:"1"},data:{}}).then((function(e){"200"===e.data.results.code?0===e.data.results.data.length?(t.authorization_get=!0,t.authorization_post=!0,t.authorization_getfile=!0,t.authorization_delete=!0,t.authorization_patch=!0,t.getList()):1===e.data.results.data.length?(0===e.data.results.data[0].aut1?(t.authorization_get=!0,t.getList()):t.authorization_get=!1,0===e.data.results.data[0].aut2?t.authorization_getfile=!0:t.authorization_getfile=!1,0===e.data.results.data[0].aut3?t.authorization_post=!0:t.authorization_post=!1,0===e.data.results.data[0].aut4?t.authorization_patch=!0:t.authorization_patch=!1,0===e.data.results.data[0].aut5?t.authorization_delete=!0:t.authorization_delete=!1):(t.authorization=!1,t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})):(t.authorization_get=!1,t.authorization_post=!1,t.authorization_getfile=!1,t.authorization_delete=!1,t.authorization_patch=!1,t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500}))})).catch((function(e){t.authorization_get=!1,t.authorization_post=!1,t.authorization_getfile=!1,t.authorization_delete=!1,t.authorization_patch=!1,console.log(e)}))},getList:function(){var t=this;if(this.authorization_get)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.get(this.baseurl+this.pathname,{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e,page:this.current,max_page:50,date1:this.date1,date2:this.date2},data:{}}).then((function(e){"200"===e.data.results.code?(t.data=e.data.results.data,t.totlepage=e.data.results.totlepage):t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有查询权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},getSelectedString:function(){return 0===this.selected.length?"":"".concat(this.selected.length," record").concat(this.selected.length>1?"s":""," selected of ").concat(this.data.length)},pageChange:function(){this.getList()},reFresh:function(){this.current=1,this.date1="",this.date2="",this.getList()},DatereFresh:function(){this.current=1,this.getList()},newFormDataCheck:function(){""===this.newFormData.name?this.$q.notify({message:"用户名不可以为空",icon:"close",color:"negative",position:"right",timeout:2500}):this.newFormDataSubmit()},newFormDataSubmit:function(){var t=this;if(this.authorization_post)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.post(this.baseurl+this.pathname,{data:this.newFormData},{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e}}).then((function(e){"200"===e.data.code?(t.$q.notify({message:e.data.msg,icon:"check",color:"positive",position:"right",timeout:2500}),t.newFormDataCancel(),t.getList()):t.$q.notify({message:e.data.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.newFormDataCancel(),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有添加数据权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},newFormDataCancel:function(){this.newForm=!1,this.newFormData.name="",this.newFormData.binl="",this.newFormData.binw="",this.newFormData.binh=""},editFormDataCheck:function(){if(this.$q.localStorage.has("openid"))if(0===this.selected.length)this.$q.notify({message:"您没有选中任何1条数据",icon:"close",color:"negative",position:"right",timeout:2500});else if(this.selected.length>1)this.$q.notify({message:"一次只能修改一条数据",icon:"close",color:"negative",position:"right",timeout:2500});else{this.$q.localStorage.set("editFormData",this.selected[0]);var t=this.$q.localStorage.getItem("editFormData");this.editFormData=t,this.editForm=!0}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500})},editFormDataSubmit:function(){var t=this;if(this.authorization_patch)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.patch(this.baseurl+this.pathname,{data:this.editFormData},{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e}}).then((function(e){"200"===e.data.code?(t.$q.notify({message:e.data.msg,icon:"check",color:"positive",position:"right",timeout:2500}),t.editFormDataCancel(),t.getList()):t.$q.notify({message:e.data.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.editFormDataCancel(),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有修改数据权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},editFormDataCancel:function(){this.editForm=!1,this.$q.localStorage.remove("editFormData"),this.editFormData={},this.selected=[]},deleteDataCheck:function(){this.$q.localStorage.has("openid")?0===this.selected.length?this.$q.notify({message:"您没有选中任何1条数据",icon:"close",color:"negative",position:"right",timeout:2500}):this.selected.length>0&&(this.deleteDialog=!0):this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500})},deleteDataSubmit:function(){var t=this;if(this.authorization_delete)if(this.$q.localStorage.has("openid")){this.selected.forEach((function(e){var a={t_code:e.t_code};t.deleteFormData.push(a)}));var e=this.$q.localStorage.getItem("openid");this.$axios.delete(this.baseurl+this.pathname,{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e},data:{data:this.deleteFormData}}).then((function(e){"200"===e.data.code?(t.$q.notify({message:e.data.msg,icon:"check",color:"positive",position:"right",timeout:2500}),t.deleteDataCancel(),t.getList()):t.$q.notify({message:e.data.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.deleteDataCancel(),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有删除数据权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},deleteDataCancel:function(){this.deleteDialog=!1,this.selected=[],this.deleteFormData=[]},downloadexample:function(){this.authorization_getfile?this.$q.localStorage.has("openid")?Object(n["a"])(this.baseurl+this.pathname+"?openid="+this.$q.localStorage.getItem("openid")+"&getfile=1"):this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500}):this.$q.notify({message:"您没有下载权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})}},created:function(){var t=this;if(this.$q.localStorage.has("authid")){var e=this.$q.localStorage.getItem("authid");this.$axios.get("https://www.56yhz.com/baseurl/",{headers:{"Content-Type":"application/json;charset=utf-8"},params:{authid:e},data:{}}).then((function(e){"200"===e.data.code&&(t.baseurl=e.data.data.baseurl,t.$q.localStorage.has("openid")&&t.authCheck())})).catch((function(e){console.log(e),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}},mounted:function(){this.$q.platform.is.electron?this.height=String(this.$q.screen.height-290)+"px":this.height=this.$q.screen.height-290+"px"},updated:function(){}},l=s,r=a("2877"),c=a("e95e"),d=a("eebe"),h=a.n(d),u=a("eaac"),m=a("e7a9"),p=a("9c40"),g=a("05c0"),f=a("24e8"),b=a("f09f"),y=a("d847"),q=a("2c91"),_=a("a370"),v=a("27f9"),k=a("f20b"),w=a("52ee"),x=a("eb85"),D=a("0016"),F=a("3b16"),$=a("7f67"),C=Object(r["a"])(l,o,i,!1,null,null,null);"function"===typeof c["default"]&&Object(c["default"])(C);e["default"]=C.exports;h()(C,"components",{QTable:u["a"],QBtnGroup:m["a"],QBtn:p["a"],QTooltip:g["a"],QDialog:f["a"],QCard:b["a"],QBar:y["a"],QSpace:q["a"],QCardSection:_["a"],QInput:v["a"],QBtnDropdown:k["a"],QDate:w["a"],QSeparator:x["a"],QIcon:D["a"],QPagination:F["a"]}),h()(C,"directives",{ClosePopup:$["a"]})},e95e:function(t,e,a){"use strict";var o=a("5c67"),i=a.n(o);e["default"]=i.a}}]);