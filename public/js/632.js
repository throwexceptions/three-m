(self.webpackChunk=self.webpackChunk||[]).push([[632,554,410,491,457],{9554:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>v});var o=t(5166),s=(0,o.withScopeId)("data-v-8ce5572e");(0,o.pushScopeId)("data-v-8ce5572e");var r={class:"wrapper"},d={class:"main"},l={class:"content"},c=(0,o.createVNode)("footer",null,null,-1);(0,o.popScopeId)();var n=s((function(e,a,t,s,n,i){var u=(0,o.resolveComponent)("sidebar"),p=(0,o.resolveComponent)("topbar");return(0,o.openBlock)(),(0,o.createBlock)("div",r,[(0,o.createVNode)(u,{sidebar_collapse:n.sidebar_collapse},null,8,["sidebar_collapse"]),(0,o.createVNode)("div",d,[(0,o.createVNode)(p,{sidebar_collapse:n.sidebar_collapse,onSideBarToggle:a[1]||(a[1]=function(e){return n.sidebar_collapse=e})},null,8,["sidebar_collapse"]),(0,o.createVNode)("main",l,[(0,o.renderSlot)(e.$slots,"default",{},void 0,!0)]),c])])})),i=t(5491),u=t(9410);const p={name:"Admin",components:{Topbar:t(3457).default,Footer:u.default,Sidebar:i.default},data:function(){return{sidebar_collapse:!0}},methods:{},mounted:function(){}};p.render=n,p.__scopeId="data-v-8ce5572e";const v=p},9410:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>b});var o=t(5166),s=(0,o.withScopeId)("data-v-7aa72738");(0,o.pushScopeId)("data-v-7aa72738");var r={class:"footer"},d={class:"container-fluid"},l={class:"row text-muted"},c={class:"col-6 text-start"},n={class:"mb-0"},i={href:"index.html",class:"text-muted"},u=(0,o.createTextVNode)(" © Laravel v (PHP v) "),p=(0,o.createStaticVNode)('<div class="col-6 text-end" data-v-7aa72738><ul class="list-inline" data-v-7aa72738><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Support</a></li><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Help Center</a></li><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Privacy</a></li><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Terms</a></li></ul></div>',1);(0,o.popScopeId)();var v=s((function(e,a,t,s,v,m){return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)("footer",r,[(0,o.createVNode)("div",d,[(0,o.createVNode)("div",l,[(0,o.createVNode)("div",c,[(0,o.createVNode)("p",n,[(0,o.createVNode)("a",i,[(0,o.createVNode)("strong",null,(0,o.toDisplayString)(v.footer.app_name),1)]),u])]),p])])])])}));const m={name:"Footer",data:function(){return{footer:{}}},methods:{getDefaults:function(){var e=this;axios.post("/admin/footer",{}).then((function(a){e.footer=a.data}))}},mounted:function(){this.getDefaults()}};m.render=v,m.__scopeId="data-v-7aa72738";const b=m},5491:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>k});var o=t(5166),s=(0,o.withScopeId)("data-v-5d544f30");(0,o.pushScopeId)("data-v-5d544f30");var r={key:0,id:"sidebar",class:"sidebar"},d={class:"sidebar-content js-simplebar"},l={class:"align-middle"},c={class:"sidebar-nav"},n=(0,o.createVNode)("li",{class:"sidebar-header"}," Components ",-1),i=(0,o.createVNode)("i",{class:"fas fa-chart-area"},null,-1),u=(0,o.createTextVNode)(),p=(0,o.createVNode)("span",{class:"align-middle"},"Dashboard",-1),v=(0,o.createVNode)("i",{class:"fas fa-car-crash"},null,-1),m=(0,o.createTextVNode)(),b=(0,o.createVNode)("span",{class:"align-middle"},"Services",-1),f=(0,o.createVNode)("i",{class:"fas fa-calendar-day"},null,-1),V=(0,o.createTextVNode)(),N=(0,o.createVNode)("span",{class:"align-middle"},"Reservation",-1),h=(0,o.createVNode)("a",{href:"#manageusers","data-bs-toggle":"collapse",role:"button","aria-expanded":"false","aria-controls":"collapseExample",class:"sidebar-link"},[(0,o.createVNode)("i",{class:"fas fa-users-cog"}),(0,o.createTextVNode)(),(0,o.createVNode)("span",{class:"align-middle"},"Manage Users")],-1),w=(0,o.createTextVNode)("Roles "),_=(0,o.createTextVNode)("Users ");(0,o.popScopeId)();var y=s((function(e,a,t,y,g,k){var x=(0,o.resolveComponent)("inertia-link");return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)(o.Transition,{name:"fade"},{default:s((function(){return[t.sidebar_collapse?((0,o.openBlock)(),(0,o.createBlock)("nav",r,[(0,o.createVNode)("div",d,[g.sidebar.home?((0,o.openBlock)(),(0,o.createBlock)(x,{key:0,class:"sidebar-brand",style:{"text-decoration":"unset"},href:g.sidebar.home},{default:s((function(){return[(0,o.createVNode)("span",l,(0,o.toDisplayString)(g.sidebar.appname),1)]})),_:1},8,["href"])):(0,o.createCommentVNode)("",!0),(0,o.createVNode)("ul",c,[n,g.sidebar.home?((0,o.openBlock)(),(0,o.createBlock)("li",{key:0,class:["sidebar-item",{active:k.isActive(g.sidebar.home)}]},[(0,o.createVNode)(x,{class:"sidebar-link",href:g.sidebar.home},{default:s((function(){return[i,u,p]})),_:1},8,["href"])],2)):(0,o.createCommentVNode)("",!0),g.sidebar.services?((0,o.openBlock)(),(0,o.createBlock)("li",{key:1,class:["sidebar-item",{active:k.isActive(g.sidebar.services)}]},[(0,o.createVNode)(x,{class:"sidebar-link",href:g.sidebar.services},{default:s((function(){return[v,m,b]})),_:1},8,["href"])],2)):(0,o.createCommentVNode)("",!0),g.sidebar.reservation?((0,o.openBlock)(),(0,o.createBlock)("li",{key:2,class:["sidebar-item",{active:k.isActive(g.sidebar.reservation)}]},[(0,o.createVNode)(x,{class:"sidebar-link",href:g.sidebar.reservation},{default:s((function(){return[f,V,N]})),_:1},8,["href"])],2)):(0,o.createCommentVNode)("",!0),k.isUrl(g.sidebar.roles)||k.isUrl(g.sidebar.users)?((0,o.openBlock)(),(0,o.createBlock)("li",{key:3,class:["sidebar-item",{active:k.isActive(g.sidebar.roles)||k.isActive(g.sidebar.users)}]},[h,(0,o.createVNode)("ul",{id:"manageusers",class:["sidebar-dropdown list-unstyled collapse",{show:k.isActive(g.sidebar.roles)||k.isActive(g.sidebar.users)}]},[g.sidebar.roles?((0,o.openBlock)(),(0,o.createBlock)("li",{key:0,class:["sidebar-item",{active:k.isActive(g.sidebar.roles)}]},[(0,o.createVNode)(x,{class:"sidebar-link",href:g.sidebar.roles},{default:s((function(){return[w]})),_:1},8,["href"])],2)):(0,o.createCommentVNode)("",!0),g.sidebar.users?((0,o.openBlock)(),(0,o.createBlock)("li",{key:1,class:["sidebar-item",{active:k.isActive(g.sidebar.users)}]},[(0,o.createVNode)(x,{class:"sidebar-link",href:g.sidebar.users},{default:s((function(){return[_]})),_:1},8,["href"])],2)):(0,o.createCommentVNode)("",!0)],2)],2)):(0,o.createCommentVNode)("",!0)])])])):(0,o.createCommentVNode)("",!0)]})),_:1})])}));const g={name:"Sidebar",props:["sidebar_collapse"],data:function(){return{sidebar:{}}},methods:{getDefaults:function(){var e=this;axios.post("/admin/sidebar",{}).then((function(a){e.sidebar=a.data}))},isUrl:function(e){var a=!1,t=this;return $.each(t.sidebar,(function(e){if(t.sidebar[e]===window.location.href)return a=!0})),a},isActive:function(e){return window.location.href===e}},mounted:function(){this.getDefaults()}};g.render=y,g.__scopeId="data-v-5d544f30";const k=g},3457:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>h});var o=t(5166),s=(0,o.withScopeId)("data-v-8b6753f0");(0,o.pushScopeId)("data-v-8b6753f0");var r={class:"navbar navbar-expand navbar-light navbar-bg"},d=(0,o.createVNode)("i",{class:"hamburger align-self-center"},null,-1),l={class:"navbar-collapse collapse"},c={class:"navbar-nav navbar-align"},n={class:"nav-item dropdown"},i={class:"nav-link dropdown-toggle d-none d-sm-inline-block",href:"#","data-bs-toggle":"dropdown"},u={class:"dropdown-menu dropdown-menu-end"},p=(0,o.createVNode)("i",{class:"align-middle me-1","data-feather":"settings"},null,-1),v=(0,o.createTextVNode)(" Settings & Privacy "),m=(0,o.createVNode)("a",{class:"dropdown-item",href:"#"},[(0,o.createVNode)("i",{class:"align-middle me-1","data-feather":"help-circle"}),(0,o.createTextVNode)(" Help Center ")],-1),b=(0,o.createVNode)("div",{class:"dropdown-divider"},null,-1),f=(0,o.createVNode)("a",{class:"dropdown-item",href:"/logout"},"Log out",-1);(0,o.popScopeId)();var V=s((function(e,a,t,s,V,N){return(0,o.openBlock)(),(0,o.createBlock)("nav",r,[(0,o.createVNode)("a",{class:"sidebar-toggle d-flex",onClick:a[1]||(a[1]=function(){return N.toggleSideBar&&N.toggleSideBar.apply(N,arguments)})},[d]),(0,o.createVNode)("div",l,[(0,o.createVNode)("ul",c,[(0,o.createVNode)("li",n,[(0,o.createVNode)("a",i,[(0,o.createVNode)("img",{src:V.top_bar.profile_pic,class:"avatar img-fluid rounded me-1"},null,8,["src"]),(0,o.createTextVNode)(" "+(0,o.toDisplayString)(V.top_bar.name),1)]),(0,o.createVNode)("div",u,[(0,o.createVNode)("a",{class:"dropdown-item",href:V.top_bar.settings_privacy},[p,v],8,["href"]),m,b,f])])])])])}));const N={name:"Topbar",props:["sidebar_collapse"],data:function(){return{top_bar:{}}},methods:{toggleSideBar:function(){this.$emit("sideBarToggle",!this.sidebar_collapse)},getDefaults:function(){var e=this;axios.post("/admin/top-bar",{}).then((function(a){e.top_bar=a.data}))}},mounted:function(){this.getDefaults()}};N.render=V,N.__scopeId="data-v-8b6753f0";const h=N},9632:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>ee});var o=t(5166),s={class:"container-fluid p-0"},r=(0,o.createVNode)("h1",{class:"h3 mb-3"},"Users",-1),d={class:"row"},l={class:"col-12"},c={class:"card"},n=(0,o.createVNode)("div",{class:"card-header"}," Users Data Table ",-1),i={class:"card-body"},u={class:"row"},p={class:"col-12"},v=(0,o.createVNode)("div",{class:"col-12 mt-3"},[(0,o.createVNode)("table",{id:"users-table",class:"table table-hover",style:{width:"100%"}})],-1),m={id:"user-edit-modal",class:"modal fade",tabindex:"-1"},b={class:"modal-dialog"},f={class:"modal-content"},V=(0,o.createVNode)("div",{class:"modal-header"},[(0,o.createVNode)("h5",{class:"modal-title"},"User Edit Modal"),(0,o.createVNode)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),N={class:"modal-body"},h={class:"d-flex flex-column"},w={class:"mb-3"},_=(0,o.createVNode)("label",null,"Name",-1),y={class:"mb-3"},g=(0,o.createVNode)("label",null,"Roles",-1),k={class:"modal-footer"},x=(0,o.createVNode)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),B={id:"user-add-modal",class:"modal fade",tabindex:"-1"},C={class:"modal-dialog"},S={class:"modal-content"},D=(0,o.createVNode)("div",{class:"modal-header"},[(0,o.createVNode)("h5",{class:"modal-title"},"User Add Modal"),(0,o.createVNode)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),T={class:"modal-body"},U={class:"d-flex flex-column"},A={class:"mb-2"},I=(0,o.createVNode)("label",null,"Name",-1),M={class:"mb-2"},P=(0,o.createVNode)("label",null,"E-mail",-1),E={class:"mb-2"},j=(0,o.createVNode)("label",null,"New Password",-1),F={class:"mb-2"},H=(0,o.createVNode)("label",null,"Confirm Password",-1),L={class:"modal-footer"},R=(0,o.createVNode)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),O={id:"user-cp-modal",class:"modal fade",tabindex:"-1"},q={class:"modal-dialog"},z={class:"modal-content"},G=(0,o.createVNode)("div",{class:"modal-header"},[(0,o.createVNode)("h5",{class:"modal-title"},"Change Password Modal"),(0,o.createVNode)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),J={class:"modal-body"},K={class:"d-flex flex-column"},Q=(0,o.createVNode)("label",null,"New Password",-1),W=(0,o.createVNode)("label",null,"Confirm Password",-1),X={class:"modal-footer"},Y=(0,o.createVNode)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);const Z={components:{Admin:t(9554).default},props:{data:Object},data:function(){return{overview:{name:"",email:"",password:"",password_confirmation:""},dt:null,user_edit_modal:null,user_add_modal:null,user_cp_modal:null}},methods:{showAddUser:function(){this.user_add_modal.show(),this.overview={name:"",email:"",password:"",password_confirmation:""}},changePassword:function(){var e=this;e.user_cp_modal.hide(),axios.post(e.data.users_cp_link,e.overview).then((function(){alertify.success('<label class="text-white">Change Password Success!</label>'),e.dt.draw()})).catch((function(e){catchError(e.response.data.errors)}))},update:function(){var e=this;e.user_edit_modal.hide(),axios.post(e.data.users_update_link,e.overview).then((function(){e.dt.draw(),alertify.success('<label class="text-white">Update Success!</label>')})).catch((function(e){catchError(e.response.data.errors)}))},save:function(){var e=this;e.user_add_modal.hide(),axios.post(e.data.users_store_link,e.overview).then((function(){e.dt.draw(),alertify.success('<label class="text-white">Insert Success!</label>')})).catch((function(e){catchError(e.response.data.errors)}))},showDestroy:function(){var e=this;alertify.confirm("Delete User","Are you sure you want to delete this user?",(function(){axios.post(e.data.users_del_link,e.overview).then((function(){e.dt.draw(),alertify.success('<label class="text-white">Delete Success!</label>')}))}),(function(){alertify.error("Cancel")}))}},mounted:function(){var e=this;e.user_add_modal=new bootstrap.Modal(document.getElementById("user-add-modal"),{keyboard:!1}),e.user_edit_modal=new bootstrap.Modal(document.getElementById("user-edit-modal"),{keyboard:!1}),e.user_cp_modal=new bootstrap.Modal(document.getElementById("user-cp-modal"),{keyboard:!1}),e.dt=$("#users-table").DataTable({serverSide:!0,ajax:{url:e.data.users_table_link,type:"POST"},order:[[0,"desc"]],columns:[{data:function(e){return'<div class="btn-group btn-group-sm" role="group" aria-label="Basic example">\n  <button type="button" class="btn btn-edit btn-primary"><i class="fas fa-pencil-alt"></i></button>\n  <button type="button" class="btn btn-cp btn-warning text-white"><i class="fas fa-key"></i></button>\n  <button type="button" class="btn btn-destroy btn-danger text-white"><i class="fas fa-trash"></i></button>\n</div>'},name:"id",title:"ID"},{data:function(e){return'<div class="d-flex justify-content-between"><span>'+e.name+'</span><div><span class="badge bg-primary">'+e.role+"</span></div></div>"},title:"Name"},{data:"email",title:"E-mail"},{data:"created_at",title:"Created At"},{data:"updated_at",title:"Created At"}],drawCallback:function(a){$(".btn-edit").on("click",(function(){e.user_edit_modal.show(),e.overview=e.dt.row($(this).parent().parent()).data()})),$(".btn-cp").on("click",(function(){e.user_cp_modal.show(),e.overview=e.dt.row($(this).parent().parent()).data()})),$(".btn-destroy").on("click",(function(){e.overview=e.dt.row($(this).parent().parent()).data(),e.showDestroy()}))}})},render:function(e,a,t,$,Z,ee){var ae=(0,o.resolveComponent)("Admin");return(0,o.openBlock)(),(0,o.createBlock)(ae,null,{default:(0,o.withCtx)((function(){return[(0,o.createVNode)("div",null,[(0,o.createVNode)("div",s,[r,(0,o.createVNode)("div",d,[(0,o.createVNode)("div",l,[(0,o.createVNode)("div",c,[n,(0,o.createVNode)("div",i,[(0,o.createVNode)("div",u,[(0,o.createVNode)("div",p,[(0,o.createVNode)("button",{class:"btn btn-primary",onClick:a[1]||(a[1]=function(){return ee.showAddUser&&ee.showAddUser.apply(ee,arguments)})},"Add User")]),v])])])])])]),(0,o.createVNode)("div",m,[(0,o.createVNode)("div",b,[(0,o.createVNode)("div",f,[V,(0,o.createVNode)("div",N,[(0,o.createVNode)("div",h,[(0,o.createVNode)("div",w,[_,(0,o.withDirectives)((0,o.createVNode)("input",{class:"form-control","onUpdate:modelValue":a[2]||(a[2]=function(e){return Z.overview.name=e})},null,512),[[o.vModelText,Z.overview.name]])]),(0,o.createVNode)("div",y,[g,(0,o.withDirectives)((0,o.createVNode)("select",{class:"form-select","onUpdate:modelValue":a[3]||(a[3]=function(e){return Z.overview.role=e})},[((0,o.openBlock)(!0),(0,o.createBlock)(o.Fragment,null,(0,o.renderList)(t.data.roles,(function(e){return(0,o.openBlock)(),(0,o.createBlock)("option",{value:e.name},(0,o.toDisplayString)(e.title),9,["value"])})),256))],512),[[o.vModelSelect,Z.overview.role]])])])]),(0,o.createVNode)("div",k,[x,(0,o.createVNode)("button",{type:"button",class:"btn btn-primary",onClick:a[4]||(a[4]=function(){return ee.update&&ee.update.apply(ee,arguments)})},"Save changes")])])])]),(0,o.createVNode)("div",B,[(0,o.createVNode)("div",C,[(0,o.createVNode)("div",S,[D,(0,o.createVNode)("div",T,[(0,o.createVNode)("div",U,[(0,o.createVNode)("div",A,[I,(0,o.withDirectives)((0,o.createVNode)("input",{name:"name",class:"form-control","onUpdate:modelValue":a[5]||(a[5]=function(e){return Z.overview.name=e})},null,512),[[o.vModelText,Z.overview.name]])]),(0,o.createVNode)("div",M,[P,(0,o.withDirectives)((0,o.createVNode)("input",{type:"email",name:"email",class:"form-control","onUpdate:modelValue":a[6]||(a[6]=function(e){return Z.overview.email=e})},null,512),[[o.vModelText,Z.overview.email]])]),(0,o.createVNode)("div",E,[j,(0,o.withDirectives)((0,o.createVNode)("input",{name:"password",type:"password",class:"form-control","onUpdate:modelValue":a[7]||(a[7]=function(e){return Z.overview.password=e})},null,512),[[o.vModelText,Z.overview.password]])]),(0,o.createVNode)("div",F,[H,(0,o.withDirectives)((0,o.createVNode)("input",{name:"password_confirmation",type:"password",class:"form-control","onUpdate:modelValue":a[8]||(a[8]=function(e){return Z.overview.password_confirmation=e})},null,512),[[o.vModelText,Z.overview.password_confirmation]])])])]),(0,o.createVNode)("div",L,[R,(0,o.createVNode)("button",{type:"button",class:"btn btn-primary",onClick:a[9]||(a[9]=function(){return ee.save&&ee.save.apply(ee,arguments)})},"Save changes")])])])]),(0,o.createVNode)("div",O,[(0,o.createVNode)("div",q,[(0,o.createVNode)("div",z,[G,(0,o.createVNode)("div",J,[(0,o.createVNode)("div",K,[(0,o.createVNode)("div",null,[Q,(0,o.withDirectives)((0,o.createVNode)("input",{type:"password",class:"form-control","onUpdate:modelValue":a[10]||(a[10]=function(e){return Z.overview.password=e})},null,512),[[o.vModelText,Z.overview.password]])]),(0,o.createVNode)("div",null,[W,(0,o.withDirectives)((0,o.createVNode)("input",{type:"password",class:"form-control","onUpdate:modelValue":a[11]||(a[11]=function(e){return Z.overview.password_confirmation=e})},null,512),[[o.vModelText,Z.overview.password_confirmation]])])])]),(0,o.createVNode)("div",X,[Y,(0,o.createVNode)("button",{type:"button",class:"btn btn-primary",onClick:a[12]||(a[12]=function(){return ee.changePassword&&ee.changePassword.apply(ee,arguments)})},"Save changes")])])])])])]})),_:1})}},ee=Z}}]);
//# sourceMappingURL=632.js.map?id=071eb0100eea1d4e7306