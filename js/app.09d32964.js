(function(t){function a(a){for(var s,l,o=a[0],r=a[1],c=a[2],p=0,d=[];p<o.length;p++)l=o[p],i[l]&&d.push(i[l][0]),i[l]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(a);while(d.length)d.shift()();return n.push.apply(n,c||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],s=!0,o=1;o<e.length;o++){var r=e[o];0!==i[r]&&(s=!1)}s&&(n.splice(a--,1),t=l(l.s=e[0]))}return t}var s={},i={app:0},n=[];function l(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=s,l.d=function(t,a,e){l.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,a){if(1&a&&(t=l(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)l.d(e,s,function(a){return t[a]}.bind(null,s));return e},l.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(a,"a",a),a},l.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},l.p="/vueapp/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],r=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var u=r;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"00b2":function(t,a,e){},"034f":function(t,a,e){"use strict";var s=e("64a9"),i=e.n(s);i.a},"56d7":function(t,a,e){"use strict";e.r(a);e("cadf"),e("551c"),e("f751"),e("097d");var s=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container pt-3"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 p-0"},[e("Header")],1),e("div",{staticClass:"col-md-4 p-0"},[e("PersonalInfo")],1),e("div",{staticClass:"col-md-8 p-0 bg-light"},[e("b-card-body",{ref:"content",staticStyle:{position:"relative",height:"80vh","overflow-y":"scroll"},attrs:{id:"nav-scroller"}},[e("p",{attrs:{id:"About"}},[e("About",{attrs:{user:t.details["user"]}})],1),e("hr",{staticClass:"w-75 float-left ml-5"}),e("p",{attrs:{id:"ProfessionalDetails"}},[e("ProfessionalDetails",{attrs:{profileDetails:t.profileDetails}})],1),e("hr",{staticClass:"w-75 float-left ml-5"}),e("p",{attrs:{id:"Languages"}},[e("Languages",{attrs:{profileDetails:t.profileDetails}})],1),e("hr",{staticClass:"w-75 float-left ml-5"}),e("p",{attrs:{id:"Education"}},[e("Education",{attrs:{profileDetails:t.profileDetails}})],1),e("hr",{staticClass:"w-75 float-left ml-5"}),e("p",{attrs:{id:"Experience"}},[e("Experience",{attrs:{profileDetails:t.profileDetails}})],1),e("hr",{staticClass:"w-75 float-left ml-5"}),e("p",{attrs:{id:"Contact"}},[e("Contact",{attrs:{profileDetails:t.profileDetails}})],1)])],1)])])])},n=[],l=(e("96cf"),e("3b8d")),o=(e("c5f6"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-navbar",{staticClass:"pb-0",attrs:{toggleable:"lg",type:"light",variant:"transparent"}},[e("b-navbar-brand",{attrs:{href:"#"}},[e("Name"),e("h2",[t._v(t._s(t.head))])],1),e("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),e("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy:nav-scroller",arg:"nav-scroller"}],attrs:{slot:"header",pills:""},slot:"header"},[e("b-nav-item",{attrs:{href:"#About"},on:{click:t.scrollIntoView}},[t._v("About")]),e("b-nav-item",{attrs:{href:"#ProfessionalDetails"},on:{click:t.scrollIntoView}},[t._v("Professional Details")]),e("b-nav-item",{attrs:{href:"#Languages"},on:{click:t.scrollIntoView}},[t._v("Languages")]),e("b-nav-item",{attrs:{href:"#Education"},on:{click:t.scrollIntoView}},[t._v("Education")]),e("b-nav-item",{attrs:{href:"#Experience"},on:{click:t.scrollIntoView}},[t._v("Experience")]),e("b-nav-item",{attrs:{href:"#Contact"},on:{click:t.scrollIntoView}},[t._v("Contact")])],1)],1)],1)],1)],1)}),r=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",[t._v(t._s(t.name))])},u=[],p={name:"Name",data:function(){return{name:"Kelina Shrestha"}}},d=p,m=e("2877"),f=Object(m["a"])(d,c,u,!1,null,null,null),v=f.exports,g={name:"Header",components:{Name:v},props:{head:{type:String},profileId:{type:Number}},data:function(){return{name:"Kelina Shrestha",detailHeaders:[{name:"About",component:"#About"},{name:"Professional Details",component:"#ProfessionalDetails"},{name:"Languages",component:"#Languages"},{name:"Education",component:"#Education"},{name:"Experience",component:"#Experience"},{name:"Contact",component:"#Contact"}]}}},b=g,_=(e("faf5"),Object(m["a"])(b,o,r,!1,null,"56f993cf",null)),h=_.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"card w-100 border-0"},[e("img",{staticClass:"card-img-top",attrs:{src:t.image,alt:"Profile Pic"}}),e("div",{staticClass:"card-body bg-personal-info"},[e("h2",{staticClass:"card-title text-center text-white"},[t._v("General Information")]),e("div",{staticClass:"card-text"},[e("ul",{staticClass:"list-unstyled mb-0"},t._l(t.personalinfo,function(a,s){return e("li",{key:s,staticClass:"pb-2 text-white pl-2"},[e("span",{staticClass:"pr-2"},[e("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:a.icon}})],1),e("span",{staticClass:"pl-2"},[t._v("\n                "+t._s(a.value)+"\n              ")])])}),0)])])])])])},C=[],w={name:"PersonalInfo",data:function(){return{image:"https://scontent.fktm8-1.fna.fbcdn.net/v/t1.0-9/22528488_10208674443253424_8742489099592047203_n.jpg?_nc_cat=102&_nc_ht=scontent.fktm8-1.fna&oh=ae70d3f6448024ca51666a7ba58d7aa0&oe=5D4F0D66",personalinfo:[{key:"name",value:"Kelina Shrestha",icon:"grin-beam"},{key:"address",value:"Gatthaghar, Bhaktapur",icon:"home"},{key:"dob",value:"March 28, 1992",icon:"birthday-cake"},{key:"email",value:"kelishrestha97@gmail.com",icon:"envelope"},{key:"contact_num",value:"+977-9860790767",icon:"phone-volume"}]}}},k=w,I=(e("a113"),Object(m["a"])(k,y,C,!1,null,"d88588b8",null)),x=I.exports,q=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-5"},[e("h4",{staticClass:"text-secondary"},[t._v("Interpreter")]),e("h1",{staticClass:"display-4"},[t._v(t._s(t.user["first_name"]))]),e("blockquote",{staticClass:"blockquote"},[e("p",{staticClass:"mb-0"},[e("i",[t._v(t._s(t.personalinfo.quote))])])]),e("div",{staticClass:"pt-5"},[e("h4",[t._v("Description")]),e("p",[t._v(t._s(t.personalinfo.description))])])])},P=[],E={name:"About",props:{name:{type:String},user:{type:Object}},data:function(){return{personalinfo:{aname:"",skilled_languages:[{name:"English",color:"badge badge-secondary"},{name:"Nepali",color:"badge badge-danger ml-2"}],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit amet, aliquam lorem. Fusce id ligula non risus mollis consectetur. Nam lobortis, erat quis pulvinar dignissim, velit ligula ullamcorper ipsum, at sodales elit odio at velit. Sed a est a quam mattis suscipit. Proin et faucibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit amet, aliquam lorem. Fusce id ligula non risus mollis consectetur. Nam lobortis, erat quis pulvinar dignissim, velit ligula ullamcorper ipsum, at sodales elit odio at velit. Sed a est a quam mattis suscipit.",quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."}}},mounted:function(){console.log("--------------------------"),console.log(this.details)}},D=E,N=Object(m["a"])(D,q,P,!1,null,null,null),L=N.exports,j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-5"},[e("h1",{staticClass:"display-4"},[t._v("Professional Details")]),e("h5",{staticClass:"text-secondary"},[t._v("Interpreter Since "+t._s(t.professionalInfo.interpreter_since))]),e("div",{staticClass:"row pt-3"},[e("div",{staticClass:"col-md-12"},[e("h4",[t._v("Domicile")]),e("p",[t._v(t._s(t.professionalInfo.domicile))])]),e("div",{staticClass:"col-md-12 pt-2"},[e("h4",[t._v("Working Languages")]),e("ul",{staticClass:"list-unstyled mb-0"},t._l(t.professionalInfo.workingLanguages,function(a,s){return e("li",{key:s,staticClass:"pb-2 pl-2"},[t._v("\n          "+t._s(a.code)+":\n          "),e("span",{staticClass:"pl-2"},[t._v("\n            "+t._s(a.name)+"\n          ")])])}),0)]),e("div",{staticClass:"col-md-12 pt-2"},[e("h4",[t._v("Summary")]),e("p",[t._v(t._s(t.professionalInfo.summary))])]),e("div",{staticClass:"col-md-12 pt-2"},[e("h5",[t._v("\n        Accept Hourly Pay\n        "),e("span",{staticClass:"badge badge-pill pb-0 text-uppercase",class:t.professionalInfo.accepts_hourly_pay.color},[t._v(t._s(t.professionalInfo.accepts_hourly_pay.value))])])]),e("div",{staticClass:"col-md-12 pt-2"},[e("h5",[t._v("\n        Accept Half Day Pay\n        "),e("span",{staticClass:"badge badge-pill pb-0 text-uppercase",class:t.professionalInfo.accepts_half_day_pay.color},[t._v(t._s(t.professionalInfo.accepts_half_day_pay.value))])])])])])},O=[],S={name:"ProfessionalDetails",data:function(){return{professionalInfo:{interpreter_since:"2018",aiic_member:"no",workingLanguages:[{name:"Nepali",code:"A",color:"badge badge-secondary"},{name:"English",code:"B",color:"badge badge-danger ml-2"},{name:"Japanese",code:"C",color:"badge badge-danger ml-2"}],summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit amet, aliquam lorem. Fusce id ligula non risus mollis consectetur. Nam lobortis, erat quis pulvinar dignissim, velit ligula ullamcorper ipsum, at sodales elit odio at velit. Sed a est a quam mattis suscipit. Proin et faucibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit amet, aliquam lorem. Fusce id ligula non risus mollis consectetur. Nam lobortis, erat quis pulvinar dignissim, velit ligula ullamcorper ipsum, at sodales elit odio at velit. Sed a est a quam mattis suscipit.",domicile:"Nepal",accreditation:"",accepts_hourly_pay:{value:"no",color:"badge-danger"},accepts_half_day_pay:{value:"yes",color:"badge-success"}}}}},A=S,$=Object(m["a"])(A,j,O,!1,null,null,null),F=$.exports,H=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-5"},[e("h1",{staticClass:"display-4"},[t._v("Languages")]),e("h5",{staticClass:"text-secondary"},[t._v("Interpreter Since "+t._s(t.professionalInfo.interpreter_since))]),e("div",{staticClass:"row pt-3"},[e("div",{staticClass:"col-md-12 pt-2"},[e("h4",[t._v("Working Languages")]),e("ul",{staticClass:"list-unstyled mb-0"},t._l(t.professionalInfo.workingLanguages,function(a,s){return e("li",{key:s,staticClass:"pb-2 pl-2"},[t._v("\n          "+t._s(a.code)+":\n          "),e("span",{staticClass:"pl-2"},[t._v("\n            "+t._s(a.name)+"\n          ")])])}),0)])])])},K=[],M={name:"Languages",data:function(){return{professionalInfo:{interpreter_since:"2018",aiic_member:"no",workingLanguages:[{name:"Nepali",code:"A",color:"badge badge-secondary"},{name:"English",code:"B",color:"badge badge-danger ml-2"},{name:"Japanese",code:"C",color:"badge badge-danger ml-2"}],summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit amet, aliquam lorem. Fusce id ligula non risus mollis consectetur. Nam lobortis, erat quis pulvinar dignissim, velit ligula ullamcorper ipsum, at sodales elit odio at velit. Sed a est a quam mattis suscipit. Proin et faucibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit amet, aliquam lorem. Fusce id ligula non risus mollis consectetur. Nam lobortis, erat quis pulvinar dignissim, velit ligula ullamcorper ipsum, at sodales elit odio at velit. Sed a est a quam mattis suscipit.",domicile:"Nepal",accreditation:"",accepts_hourly_pay:{value:"no",color:"badge-danger"},accepts_half_day_pay:{value:"yes",color:"badge-success"}}}}},T=M,V=Object(m["a"])(T,H,K,!1,null,null,null),z=V.exports,G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-5"},[e("h1",{staticClass:"display-4"},[t._v("Education")]),e("div",{staticClass:"pt-3"},[e("b-list-group",t._l(t.educationInfo,function(a,s){return e("b-list-group-item",{key:s,staticClass:"flex-column align-items-start border-0"},[e("div",{staticClass:"d-flex w-100 justify-content-between"},[e("h5",{staticClass:"mb-1"},[t._v(t._s(a.heading))])]),e("p",{staticClass:"mb-1"},[t._v("\n          "+t._s(a.description)+"\n        ")])])}),1)],1)])},J=[],B={name:"Education",data:function(){return{educationInfo:[{heading:"Highest education completed",description:"Graduate"},{heading:"Graduation Date",description:"12th November 2015"},{heading:"School",description:"Lorem Ipsum"},{heading:"Interpretation Degree",description:"No"}]}}},R=B,U=Object(m["a"])(R,G,J,!1,null,null,null),W=U.exports,X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-5"},[e("h1",{staticClass:"display-4"},[t._v("Experience")]),e("div",{staticClass:"pt-5"},[e("h4",[t._v("Description")]),e("p",[t._v(t._s(t.personalinfo.description))])])])},Q=[],Y={name:"Experience",props:{profileDetails:{type:Object}},data:function(){return{personalinfo:{name:"Kelina Shrestha",skilled_languages:[{name:"English",color:"badge badge-secondary"},{name:"Nepali",color:"badge badge-danger ml-2"}],description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit amet, aliquam lorem. Fusce id ligula non risus mollis consectetur. Nam lobortis, erat quis pulvinar dignissim, velit ligula ullamcorper ipsum, at sodales elit odio at velit. Sed a est a quam mattis suscipit. Proin et faucibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae sapien porttitor, dignissim quam sit amet, aliquam lorem. Fusce id ligula non risus mollis consectetur. Nam lobortis, erat quis pulvinar dignissim, velit ligula ullamcorper ipsum, at sodales elit odio at velit. Sed a est a quam mattis suscipit.",quote:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."}}}},Z=Y,tt=Object(m["a"])(Z,X,Q,!1,null,null,null),at=tt.exports,et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"p-5"},[e("h1",{staticClass:"display-4"},[t._v("Contact")]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:"envelope"}}),t._v("\n      "+t._s(t.contactInfo.email)+"\n    ")],1),e("div",{staticClass:"col-md-12 pt-2"},[e("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:"map-marker"}}),t._v("\n      "+t._s(t.contactInfo.country)+"\n    ")],1),e("div",{staticClass:"col-md-12 pt-2"},[e("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:"building"}}),t._v("\n      "+t._s(t.contactInfo.city)+"\n    ")],1),e("div",{staticClass:"col-md-12 pt-2"},[e("font-awesome-icon",{staticClass:"fa-lg",attrs:{icon:"clock"}}),t._v("\n      "+t._s(t.contactInfo.timezone)+"\n    ")],1)]),e("div",{staticClass:"row mt-4"},[e("div",{staticClass:"col-md-12 pt-2"},[e("h4",[t._v(" Nationality ")]),t._v("\n\n      "+t._s(t.contactInfo.nationality)+"\n    ")]),e("div",{staticClass:"col-md-12 pt-2"},[e("h4",[t._v(" Other Nationalities ")]),e("ul",{staticClass:"list-unstyled mb-0"},t._l(t.contactInfo.other_nationalities,function(a,s){return e("li",{key:s,staticClass:"pb-2"},[t._v("\n          "+t._s(s+1)+"\n          "),e("span",{staticClass:"pl-2"},[t._v("\n            "+t._s(a.name)+"\n          ")])])}),0)]),e("div",{staticClass:"col-md-12 pt-2"},[e("h4",[t._v(" Links ")]),e("ul",{staticClass:"list-unstyled mb-0"},t._l(t.contactInfo.links,function(a,s){return e("li",{key:s,staticClass:"pb-2"},[e("span",{staticClass:"text-capitalize"},[t._v("\n            "+t._s(a.name)+":\n          ")]),e("a",{attrs:{href:a.url}},[t._v("\n            "+t._s(a.url)+"\n          ")])])}),0)])])])},st=[],it={name:"Contact",data:function(){return{contactInfo:{email:"kelishrestha97@gmail.com",country:"Nepal",city:"Kathmandu",timezone:"Kathmandu",nationality:"Nepali",other_nationalities:[{name:"English",color:"badge badge-secondary"},{name:"Nepali",color:"badge badge-danger ml-2"}],links:[{name:"linkedin",url:"https://google.com"},{name:"web",url:"https://google.com"}]}}}},nt=it,lt=Object(m["a"])(nt,et,st,!1,null,null,null),ot=lt.exports,rt="https://staging-api.kudoway.com",ct={name:"app",components:{Header:h,About:L,ProfessionalDetails:F,PersonalInfo:x,Languages:z,Education:W,Experience:at,Contact:ot},props:{profileDetails:Object,details:Object,profileId:Number},methods:{getUserDetail:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var a,e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=rt+"/api/v2/users/1349/profile/1349",t.next=3,this.$http({method:"get",url:a,headers:{"Content-Type":"application/json","X-API-TOKEN":"itsAPIToken"}}).then(function(t){e.details=t.data,e.categorizeData()}).catch(function(t){console.log(t),e.errored=!0});case 3:case"end":return t.stop()}},t,this)}));function a(){return t.apply(this,arguments)}return a}(),categorizeData:function(){}},beforeMount:function(){this.getUserDetail()}},ut=ct,pt=(e("034f"),Object(m["a"])(ut,i,n,!1,null,null,null)),dt=pt.exports,mt=e("9f7b"),ft=e.n(mt),vt=e("ecee"),gt=e("c074"),bt=e("ad3d"),_t=e("bc3a"),ht=e.n(_t);e("f9e3"),e("2dd8");s["a"].config.productionTip=!1,s["a"].use(ft.a),vt["c"].add(gt["e"],gt["f"],gt["d"],gt["i"],gt["h"],gt["g"],gt["b"],gt["c"],gt["a"]),s["a"].component("font-awesome-icon",bt["a"]),s["a"].prototype.$http=ht.a,new s["a"]({render:function(t){return t(dt)}}).$mount("#app")},"64a9":function(t,a,e){},a113:function(t,a,e){"use strict";var s=e("aad1"),i=e.n(s);i.a},aad1:function(t,a,e){},faf5:function(t,a,e){"use strict";var s=e("00b2"),i=e.n(s);i.a}});
//# sourceMappingURL=app.09d32964.js.map