(function(e){function t(t){for(var r,s,o=t[0],u=t[1],i=t[2],d=0,b=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(c,s)&&c[s]&&b.push(c[s][0]),c[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/bot/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2fb3":function(e,t,n){},"3da6":function(e,t,n){},4345:function(e,t,n){"use strict";n("2fb3")},"4afd":function(e,t,n){},"4b95":function(e,t,n){},"51f2":function(e,t,n){e.exports=n.p+"img/search.c087e16a.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,a,s){var o=Object(r["A"])("Navbar"),u=Object(r["A"])("router-view"),i=Object(r["A"])("notifications");return Object(r["u"])(),Object(r["g"])(r["a"],null,[Object(r["j"])(o),Object(r["j"])(u),Object(r["j"])(i,{classes:"vue-notification notification-bar",position:"center bottom",width:"50%"})],64)}var a={id:"nav",class:"nav-list"},s={class:"link link-left"},o=Object(r["i"])("Home"),u={class:"link link-left"},i=Object(r["i"])("Commands"),l={class:"link link-left"},d=Object(r["i"])("Stats"),b={key:0,class:"link link-right"},p=Object(r["i"])("Logout"),f={key:1,class:"image-link"},m=["href"],h=["src"],j={key:2,class:"link link-right"},O={class:"link link-right"},v=Object(r["i"])("Login");function g(e,t,n,c,g,y){var k=this,_=Object(r["A"])("router-link");return Object(r["u"])(),Object(r["g"])("ul",a,[Object(r["h"])("li",s,[Object(r["j"])(_,{class:"link-item",to:"/"},{default:Object(r["H"])((function(){return[o]})),_:1})]),Object(r["h"])("li",u,[Object(r["j"])(_,{class:"link-item",to:"/commands"},{default:Object(r["H"])((function(){return[i]})),_:1})]),Object(r["h"])("li",l,[Object(r["j"])(_,{class:"link-item",to:"/stats"},{default:Object(r["H"])((function(){return[d]})),_:1})]),y.userDefined?(Object(r["u"])(),Object(r["g"])("li",b,[Object(r["j"])(_,{class:"link-item",to:"/logout"},{default:Object(r["H"])((function(){return[p]})),_:1})])):Object(r["f"])("",!0),y.userDefined?(Object(r["u"])(),Object(r["g"])("li",f,[Object(r["h"])("a",{href:"https://twitch.tv/".concat(this.current_user)},[Object(r["h"])("img",{class:"img-pfp",src:y.getImageSrc,alt:""},null,8,h)],8,m)])):Object(r["f"])("",!0),y.userDefined?(Object(r["u"])(),Object(r["g"])("li",j,[Object(r["j"])(_,{class:"link-item",to:"/user-info"},{default:Object(r["H"])((function(){return[Object(r["i"])(Object(r["D"])(k.current_user),1)]})),_:1})])):Object(r["f"])("",!0),Object(r["h"])("li",O,[y.userDefined?Object(r["f"])("",!0):(Object(r["u"])(),Object(r["e"])(_,{key:0,class:"link-item",to:"/login"},{default:Object(r["H"])((function(){return[v]})),_:1}))])])}var y=n("1da1"),k=(n("96cf"),n("5c40")),_=n("6c02");function w(e,t,n,c,a,s){var o=Object(r["A"])("LoginField");return Object(r["u"])(),Object(r["e"])(o)}var x={class:"wrapper"},R=Object(r["h"])("div",{class:"top-container"},null,-1),S={class:"container"},U={key:0,class:"form-wrapper"},C={class:"login-fieldset"},P=Object(r["h"])("legend",null,"Login",-1),V={class:"inner-login"},A={class:"login-btns"},D=["href"];function L(e,t,n,c,a,s){return Object(r["u"])(),Object(r["g"])("div",x,[R,Object(r["h"])("div",S,[a.loading?Object(r["f"])("",!0):(Object(r["u"])(),Object(r["g"])("div",U,[Object(r["h"])("form",{class:"login-form",onKeyup:t[3]||(t[3]=Object(r["J"])((function(e){return s.submit(a.username,a.password)}),["enter"]))},[Object(r["h"])("fieldset",C,[P,Object(r["h"])("div",V,[Object(r["I"])(Object(r["h"])("input",{class:"input-username",type:"text",required:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.username=e}),placeholder:"Enter email"},null,512),[[r["F"],a.username]]),Object(r["I"])(Object(r["h"])("input",{class:"input-password",type:"password",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e}),placeholder:"Password"},null,512),[[r["F"],a.password]]),Object(r["h"])("div",A,[Object(r["h"])("button",{class:"submit-btn",onClick:t[2]||(t[2]=function(e){return s.submit(a.username,a.password)})}," Log in "),Object(r["h"])("a",{class:"submit-btn",href:s.getTwitchLoginUrl}," Twich Login ",8,D)])])])],32)]))])])}n("d3b7"),n("99af"),n("e9c4");var q=n("d4ec"),B=n("bee2"),I=function(){function e(){Object(q["a"])(this,e)}return Object(B["a"])(e,null,[{key:"ok",value:function(e){return{data:e,success:!0,error:null}}},{key:"error",value:function(e){return{error:e,success:!1,data:null}}}]),e}(),N=n("bfbe"),E=15e3,T=function(e){var t=e.title,n=e.text;Object(N["b"])({title:t,text:n,duration:E,type:"error"})},H="token",F="signed_in",K=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=I,e.next=4,fetch("".concat(Object({VUE_APP_GQL_URL:"http://helltf.hopto.org:8081/gql",VUE_APP_TWITCH_LOGIN:"https://id.twitch.tv/oauth2/authorize?client_id=nls8y0wydkx7tae8881r6mokabufat&redirect_uri=https://helltf.hopto.org/&response_type=token&scope=user:read:subscriptions%20viewing_activity_read",NODE_ENV:"production",VUE_APP_CLIENT_ID:"nls8y0wydkx7tae8881r6mokabufat",BASE_URL:"/bot/"}).VUE_APP_BACKEND_URL).concat(t),{method:"post",headers:{"content-type":"application/json"},body:JSON.stringify(n)});case 4:return e.next=6,e.sent.json();case 6:return e.t1=e.sent,e.abrupt("return",e.t0.ok.call(e.t0,e.t1));case 10:return e.prev=10,e.t2=e["catch"](0),e.abrupt("return",I.error("Error reaching backend"));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,K("/login",{username:t,password:n});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),M={name:"LoginField",data:function(){return{username:"",password:"",loading:!1}},methods:{submit:function(e,t){return Object(y["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,J(e,t);case 2:case"end":return n.stop()}}),n)})))()}},computed:{getTwitchLoginUrl:function(){return"https://id.twitch.tv/oauth2/authorize?client_id=nls8y0wydkx7tae8881r6mokabufat&redirect_uri=https://helltf.hopto.org/&response_type=token&scope=user:read:subscriptions%20viewing_activity_read"}}},z=(n("6bf0"),n("6b0d")),W=n.n(z);const $=W()(M,[["render",L]]);var G=$,Q={name:"LoginPage",components:{LoginField:G},setup:function(){return{current_user:Object(k["s"])("user"),setUser:Object(k["s"])("setUser")}},mounted:function(){void 0!==this.current_user&&rn.push("/")}};const X=W()(Q,[["render",w]]);var Y=X,Z={class:"home"},ee=Object(r["h"])("h1",null,"Homepage",-1),te=[ee];function ne(e,t,n,c,a,s){return Object(r["u"])(),Object(r["g"])("div",Z,te)}var re={name:"HomePage",components:{}};const ce=W()(re,[["render",ne]]);var ae=ce;function se(e,t,n,c,a,s){return Object(r["u"])(),Object(r["g"])("h1",null,"Logout")}var oe=n("df85"),ue=Object(oe["b"])(),ie=ue.cookies,le=function(){ie.remove(F),ie.remove(H)},de={name:"LogoutPage",setup:function(){return{current_user:Object(k["s"])("user"),setUser:Object(k["s"])("setUser")}},mounted:function(){le(),this.setUser(void 0),rn.push("/")}};const be=W()(de,[["render",se]]);var pe=be;function fe(e,t,n,c,a,s){return Object(r["u"])(),Object(r["g"])("h1",null,"Nothing here :)")}var me={name:"EmptyPage"};const he=W()(me,[["render",fe]]);var je=he;function Oe(e,t,n,c,a,s){var o=Object(r["A"])("CommandTable");return Object(r["u"])(),Object(r["e"])(o)}n("b0c0"),n("a4d3"),n("e01a"),n("a15b");var ve={class:"table"},ge={key:0,class:"command-table"},ye=Object(r["h"])("th",null,"Description",-1),ke=Object(r["h"])("th",null,"Params (req)",-1),_e=Object(r["h"])("th",null,"Params (opt)",-1),we={class:"centered"},xe={class:"centered"};function Re(e,t,n,c,a,s){var o=Object(r["A"])("SearchBox");return Object(r["u"])(),Object(r["g"])("div",ve,[Object(r["j"])(o,{modelValue:a.search_value,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.search_value=e}),legendValue:"Search",classValue:"command-input"},null,8,["modelValue"]),s.commandsExists?(Object(r["u"])(),Object(r["g"])("table",ge,[Object(r["h"])("tr",null,[Object(r["h"])("th",{class:"clickable",onClick:t[1]||(t[1]=function(e){return s.orderByKey("name")})},"Name"),Object(r["h"])("th",{class:"clickable",onClick:t[2]||(t[2]=function(e){return s.orderByKey("counter")})},"Counter"),ye,Object(r["h"])("th",{class:"clickable",onClick:t[3]||(t[3]=function(e){return s.orderByKey("permissions")})}," Permissions "),ke,_e]),(Object(r["u"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(s.filteredCommands,(function(e){return Object(r["u"])(),Object(r["g"])("tr",{key:e.name},[Object(r["h"])("td",null,Object(r["D"])(e.name.toLowerCase()),1),Object(r["h"])("td",we,Object(r["D"])(e.count),1),Object(r["h"])("td",null,Object(r["D"])(e.description),1),Object(r["h"])("td",xe,Object(r["D"])(e.required_permissions),1),Object(r["h"])("td",null,Object(r["D"])(e.required_parameters.join(" ")),1),Object(r["h"])("td",null,Object(r["D"])(e.optional_parameters.join(" ")),1)])})),128))])):Object(r["f"])("",!0)])}n("ddb0");var Se,Ue,Ce=n("8785"),Pe=n("e852"),Ve=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=I,e.next=4,Object(Pe["request"])(t,n);case 4:return e.t1=e.sent,e.abrupt("return",e.t0.ok.call(e.t0,e.t1));case 8:return e.prev=8,e.t2=e["catch"](0),e.abrupt("return",I.error("Data could not be fetched"));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=Object(Pe["gql"])(Se||(Se=Object(Ce["a"])(["\n    query {\n        commands{\n            name,\n            count,\n            description,\n            required_permissions,\n            required_parameters,\n            optional_parameters\n        }\n    }\n    "]))),e.abrupt("return",Ve("http://helltf.hopto.org:8081/gql",t));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),De=(n("4e82"),{name:function(e){return e.sort((function(e,t){return e.name.localeCompare(t.name)}))},counter:function(e){return e.sort((function(e,t){return e.count-t.count}))},permissions:function(e){return e.sort((function(e,t){return e.required_permissions-t.required_permissions}))}}),Le=function(e,t){var n=t.values,r=t.orderedBy.orderAsc,c=De[e](n);return r=!r,r||c.reverse(),{orderedBy:{coloumn:e,orderAsc:r},values:c}},qe=function(e){var t=e.user,n=t.username,r=t.display_name,c=t.id,a=t.color,s=t.permissions,o=t.register_time;return{user:{username:n,display_name:r,id:c,color:a,permissions:s,register_time:o}}},Be=(n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("4de4"),n("841c"),function(e,t){if(0===e.length)return[];Ue=new RegExp(t,"gmi");var n=e.filter((function(e){var t=e.name,n=e.count,r=e.optional_parameters,c=e.required_parameters;return Ie(t)||Ie(n)||Ie(r)||Ie(c)}));return n}),Ie=function(e){return-1!==String(e).search(Ue)},Ne=n("51f2"),Ee=n.n(Ne),Te={class:"search-fieldset"},He={class:"search-legend"},Fe=["value"],Ke=Object(r["h"])("img",{class:"search-img",src:Ee.a,alt:"search"},null,-1);function Je(e,t,n,c,a,s){return Object(r["u"])(),Object(r["g"])("div",{class:Object(r["p"])(n.classValue)},[Object(r["h"])("fieldset",Te,[Object(r["h"])("legend",He,Object(r["D"])(n.legendValue),1),Object(r["h"])("form",{class:"search-form",type:"submit",onSubmit:t[1]||(t[1]=function(e){return e.preventDefault()})},[Object(r["h"])("input",{class:"search-input",id:"search",type:"text",placeholder:"",autocomplete:"off",value:n.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)})},null,40,Fe),Ke],32)])],2)}var Me={name:"SearchBox",props:{modelValue:String,legendValue:String,classValue:String}};n("afd0");const ze=W()(Me,[["render",Je]]);var We=ze,$e={name:"CommandTable",components:{SearchBox:We},data:function(){return{search_value:"",commands:{orderedBy:{coloumn:void 0,orderAsc:void 0},values:[]}}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r,c,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="name",t.next=3,Ae();case 3:r=t.sent,c=r.data,a=r.error,s=r.success,s?(e.commands.values=c.commands,e.commands.orderedBy.orderAsc=!0,e.commands.orderedBy.coloumn=n,Le(n,e.commands)):T({title:"Commands",text:a});case 8:case"end":return t.stop()}}),t)})))()},methods:{orderByKey:function(e){this.commands=Le(e,this.commands)}},computed:{commandsExists:function(){return 0!==this.commands.values.length},filteredCommands:function(){return Be(this.commands.values,this.search_value)}}};n("4345");const Ge=W()($e,[["render",Re]]);var Qe=Ge,Xe={components:{CommandTable:Qe},name:"CommandPage"};const Ye=W()(Xe,[["render",Oe]]);var Ze=Ye,et={key:0};function tt(e,t,n,c,a,s){var o=Object(r["A"])("search-box"),u=Object(r["A"])("stats-list");return Object(r["u"])(),Object(r["g"])(r["a"],null,[Object(r["j"])(o,{modelValue:a.searchValue,"onUpdate:modelValue":t[0]||(t[0]=function(e){return a.searchValue=e}),legendValue:"User",onKeyup:t[1]||(t[1]=Object(r["J"])((function(e){return s.openStatsPage()}),["enter"])),classValue:"stats-input"},null,8,["modelValue"]),""!==this.setUser?(Object(r["u"])(),Object(r["g"])("div",et,[Object(r["j"])(u,{userInput:this.setUser},null,8,["userInput"])])):Object(r["f"])("",!0)],64)}var nt=n("3835"),rt={class:"stats-list"};function ct(e,t,n,c,a,s){var o=this,u=Object(r["A"])("stats-card");return Object(r["u"])(),Object(r["g"])("div",rt,[Object(r["j"])(u,{field:"user_info",title:"User info",user:this.userInput},null,8,["user"]),(Object(r["u"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(this.statsFields,(function(e){var t=Object(nt["a"])(e,2),n=t[0],c=t[1];return Object(r["u"])(),Object(r["e"])(u,{title:n,field:c,user:o.userInput,key:c},null,8,["title","field","user"])})),128))])}n("4ec9"),n("3ca3");var at={class:"stats-card-top"},st={class:"stats-card-title"},ot={class:"card-content"};function ut(e,t,n,c,a,s){var o=Object(r["A"])("info-list"),u=Object(r["A"])("spinner");return void 0!==this.user?(Object(r["u"])(),Object(r["g"])("div",{key:this.user,class:"stats-card"},[Object(r["h"])("div",at,[Object(r["h"])("span",st,Object(r["D"])(this.title),1)]),Object(r["h"])("div",ot,[this.loading?(Object(r["u"])(),Object(r["e"])(u,{key:1})):(Object(r["u"])(),Object(r["e"])(o,{key:0,items:this.data},null,8,["items"]))])])):Object(r["f"])("",!0)}n("498a"),n("a9e3");var it,lt,dt={userFields:"id, username, color, permissions, register_time, display_name",color_history:"last_change, history, register_time",rps:"draw, win, lose",cookie:"amount, average, resets, last_reset, last_claim",ban:"amount, first_channel, last_channel",timeout:"amount, first_channel, last_channel"},bt=function(e){return e=e.trim(),isNaN(e)?'username:"'.concat(e,'"'):'twitch_id:"'.concat(Number(e),'"')},pt=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t){var n,r,c,a,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=bt(t),r=Object(Pe["gql"])(it||(it=Object(Ce["a"])(["\n        query{\n            user(","){\n                ","\n            }\n        }\n    "])),n,dt.userFields),e.next=4,Ve("http://helltf.hopto.org:8081/gql",r);case 4:if(c=e.sent,a=c.data,s=c.success,o=c.error,!s){e.next=10;break}return e.abrupt("return",I.ok(qe(a)));case 10:return e.abrupt("return",I.error(o));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ft=function(e,t){var n=bt(e),r=Object(Pe["gql"])(lt||(lt=Object(Ce["a"])(["\n        query{\n            user(","){\n                stats{\n                    ","{\n                        ","\n                    }\n                }\n            }\n        }\n    "])),n,t,dt[t]);return Ve("http://helltf.hopto.org:8081/gql",r)},mt={key:0,class:"list-content"},ht={class:"info-fieldset"},jt={class:"info-legend"},Ot={key:1,class:"info-value"},vt={key:1,class:"list-empty-container"},gt=Object(r["h"])("span",{class:"list-empty"},"No Record found",-1),yt=[gt];function kt(e,t,n,c,a,s){var o=Object(r["A"])("color-display");return this.items?(Object(r["u"])(),Object(r["g"])("div",mt,[(Object(r["u"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(s.getItems,(function(e,t){return Object(r["u"])(),Object(r["g"])("div",{class:"info-list",key:t},[Object(r["h"])("fieldset",ht,[Object(r["h"])("legend",jt,Object(r["D"])(t),1),s.hasColor(t)?(Object(r["u"])(),Object(r["e"])(o,{key:0,color:e},null,8,["color"])):(Object(r["u"])(),Object(r["g"])("span",Ot,Object(r["D"])(e),1))])])})),128))])):(Object(r["u"])(),Object(r["g"])("div",vt,yt))}n("466d"),n("4fadc");var _t={display_name:"display name",register_time:"registered since",last_change:"last change",first_channel:"first in channel",last_channel:"last in channel",last_claim:"last time claimed",last_reset:"last reset"},wt=function(e){return _t[e]?_t[e]:e},xt=function(e){if("string"!==typeof e)return e;var t=e.match(/\d{4}-\d{2}-\d{2}/gim);return t?t[0]:e},Rt=function(e){var t={};if(!e)return t;for(var n=0,r=Object.entries(e);n<r.length;n++){var c=Object(nt["a"])(r[n],2),a=c[0],s=c[1];t[wt(a)]=xt(s)}return t},St=["onClick"],Ut={class:"color-tooltip"};function Ct(e,t,n,c,a,s){var o=this;return Object(r["u"])(!0),Object(r["g"])(r["a"],null,Object(r["y"])(s.getColors,(function(e){return Object(r["u"])(),Object(r["g"])("div",{key:e},[Object(r["h"])("div",{style:Object(r["q"])(o.colorStyle(e)),class:"color-display",onClick:function(t){return s.copyValue(e)}},[Object(r["h"])("span",Ut,Object(r["D"])(e),1)],12,St)])})),128)}var Pt=n("2909"),Vt={name:"ColorDisplay",props:["color"],computed:{getColors:function(){return"string"===typeof this.color?[this.color]:Object(Pt["a"])(this.color)}},methods:{colorStyle:function(e){return{"background-color":e}},copyValue:function(e){navigator.clipboard.writeText(e)}}};n("5f5e");const At=W()(Vt,[["render",Ct]]);var Dt=At,Lt={components:{ColorDisplay:Dt},props:{items:Object},computed:{getItems:function(){return Rt(this.items)}},methods:{hasColor:function(e){return"color"===e||"history"===e}}};n("81ab");const qt=W()(Lt,[["render",kt]]);var Bt=qt,It={class:"spinner"},Nt=Object(r["h"])("div",{class:"lds-facebook"},[Object(r["h"])("div"),Object(r["h"])("div"),Object(r["h"])("div")],-1),Et=[Nt];function Tt(e,t,n,c,a,s){return Object(r["u"])(),Object(r["g"])("div",It,Et)}var Ht={name:"Spinner"};n("5862");const Ft=W()(Ht,[["render",Tt]]);var Kt=Ft,Jt={name:"StatsCard",components:{InfoList:Bt,Spinner:Kt},data:function(){return{data:void 0,oldUser:"",loading:!1}},props:{title:String,field:String,user:String},methods:{updateStats:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.loading=!0,"user_info"!==e.field){t.next=7;break}return t.next=4,pt(e.user);case 4:t.t0=t.sent,t.next=10;break;case 7:return t.next=9,ft(e.user,e.field);case 9:t.t0=t.sent;case 10:n=t.t0,r=n.data,c=n.success,c?e.data=Mt(r,e.field):"user_info"===e.field&&T({title:"Stats Card",text:"No stats found for input ".concat(e.user)}),e.oldUser=e.user,e.loading=!1;case 16:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.updateStats();case 2:case"end":return t.stop()}}),t)})))()},updated:function(){this.oldUser!==this.user&&(this.data=void 0,this.updateStats())}};function Mt(e,t){var n;return void 0===(null===(n=e.user)||void 0===n?void 0:n.stats)?e.user:e.user.stats[t]}n("9b45");const zt=W()(Jt,[["render",ut]]);var Wt=zt,$t=new Map([["Recent Colors","color_history"],["Cookie stats","cookie"],["Rps games","rps"],["Received timeouts","timeout"],["Received bans","ban"]]),Gt={name:"StatsList",components:{StatsCard:Wt},props:{userInput:String},data:function(){return{loading:!1,statsFields:$t}}};n("5bcf");const Qt=W()(Gt,[["render",ct]]);var Xt=Qt,Yt={components:{SearchBox:We,StatsList:Xt},data:function(){return{searchValue:"",setUser:""}},methods:{openStatsPage:function(){rn.push("/stats/"+this.searchValue)},getUserRouteParam:function(){return this.$route.params.user?this.$route.params.user:""}},updated:function(){void 0!==this.getUserRouteParam()&&(this.setUser=this.getUserRouteParam())},mounted:function(){this.setUser=this.getUserRouteParam()}};n("bb70");const Zt=W()(Yt,[["render",tt]]);var en=Zt,tn=[{path:"/login",name:"Login",component:Y},{path:"/logout",name:"Logout",component:pe},{path:"/:access_token",name:"HomeWithToken",component:ae,redirect:function(){return{name:"Home"}}},{path:"/",name:"Home",component:ae},{path:"/about",name:"About",component:je},{path:"/commands",name:"Commands",component:Ze},{path:"/user-info/",name:"User",component:je},{path:"/stats",name:"EmptyStats",component:en},{path:"/stats/:user",name:"Stats",component:en}],nn=Object(_["a"])({history:Object(_["b"])(),routes:tn}),rn=nn,cn=(n("2ca0"),n("1276"),n("fb6a"),function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=I,e.next=4,fetch("https://id.twitch.tv/oauth2/validate",{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(t)}});case 4:return e.next=6,e.sent.json();case 6:return e.t1=e.sent,e.abrupt("return",e.t0.ok.call(e.t0,e.t1));case 10:return e.prev=10,e.t2=e["catch"](0),e.abrupt("return",I.error("could not validate token"));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),an=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=I,e.next=4,fetch("https://api.twitch.tv/helix/users",{headers:{"content-type":"application/json",Authorization:"Bearer ".concat(t),"Client-id":"nls8y0wydkx7tae8881r6mokabufat"}});case 4:return e.next=6,e.sent.json();case 6:return e.t1=e.sent,e.abrupt("return",e.t0.ok.call(e.t0,e.t1));case 10:return e.prev=10,e.t2=e["catch"](0),e.abrupt("return",I.error("could fetch user data"));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();function sn(e){return e.startsWith("#/access_token=")?on(e):void 0}function on(e){return e.slice(2).split("&")[0].split("=")[1]}function un(e){return ln.apply(this,arguments)}function ln(){return ln=Object(y["a"])(regeneratorRuntime.mark((function e(t){var n,r,c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",void 0);case 2:return e.next=4,cn(t);case 4:if(n=e.sent,r=n.data,c=n.success,a=n.error,!c){e.next=12;break}return e.abrupt("return",r.login);case 12:T("Twitch",a);case 13:case"end":return e.stop()}}),e)}))),ln.apply(this,arguments)}var dn=function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t){var n,r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,an(t);case 2:return r=e.sent,c=r.data.data,e.abrupt("return",null===(n=c[0])||void 0===n?void 0:n.profile_image_url);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),bn={name:"Navbar",inject:["access_token"],setup:function(){return{current_user:Object(k["s"])("user"),setUser:Object(k["s"])("setUser")}},data:function(){return{image_source:void 0}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=sn(document.location.hash),e.access_token=n,!n){t.next=10;break}return t.next=5,un(n);case 5:return r=t.sent,t.next=8,dn(n);case 8:e.image_source=t.sent,e.setUser(r);case 10:case"end":return t.stop()}}),t)})))()},methods:{logout:function(){return Object(y["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:rn.push("/logout");case 1:case"end":return e.stop()}}),e)})))()}},computed:{getImageSrc:function(){return this.image_source},userDefined:function(){return this.current_user}}};n("a62f");const pn=W()(bn,[["render",g]]);var fn=pn,mn=n("a1e9"),hn={name:"App",components:{Navbar:fn},setup:function(){var e=Object(mn["l"])(void 0);Object(k["D"])("user",e),Object(k["D"])("setUser",(function(t){e.value=t}))}};n("adbd");const jn=W()(hn,[["render",c]]);var On=jn;Object(oe["a"])({expireTimes:"30d",path:"/",domain:"",secure:!0,sameSite:"None"});var vn=Object(r["d"])({render:function(){return Object(r["m"])(On)}}).use(rn).use(N["a"]).provide("access_token",{token:void 0});vn.mount("#app")},5862:function(e,t,n){"use strict";n("d92b")},"5a2b":function(e,t,n){},"5bcf":function(e,t,n){"use strict";n("5a2b")},"5f5e":function(e,t,n){"use strict";n("4afd")},"6bf0":function(e,t,n){"use strict";n("8818")},8053:function(e,t,n){},"81ab":function(e,t,n){"use strict";n("8053")},8314:function(e,t,n){},8818:function(e,t,n){},"8ebd":function(e,t,n){},"9b45":function(e,t,n){"use strict";n("3da6")},a62f:function(e,t,n){"use strict";n("4b95")},adbd:function(e,t,n){"use strict";n("8314")},afd0:function(e,t,n){"use strict";n("8ebd")},b68a:function(e,t,n){},bb70:function(e,t,n){"use strict";n("b68a")},d92b:function(e,t,n){}});
//# sourceMappingURL=app.19d7f3d3.js.map