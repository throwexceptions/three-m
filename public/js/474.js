(self.webpackChunk=self.webpackChunk||[]).push([[474,554,410,24,457],{9554:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>b});var o=t(5166),s=(0,o.withScopeId)("data-v-8ce5572e");(0,o.pushScopeId)("data-v-8ce5572e");var r={class:"wrapper"},l={class:"main"},d={class:"content"},c=(0,o.createVNode)("footer",null,null,-1);(0,o.popScopeId)();var i=s((function(e,a,t,s,i,n){var u=(0,o.resolveComponent)("sidebar"),m=(0,o.resolveComponent)("topbar");return(0,o.openBlock)(),(0,o.createBlock)("div",r,[(0,o.createVNode)(u,{sidebar_collapse:i.sidebar_collapse},null,8,["sidebar_collapse"]),(0,o.createVNode)("div",l,[(0,o.createVNode)(m,{sidebar_collapse:i.sidebar_collapse,onSideBarToggle:a[1]||(a[1]=function(e){return i.sidebar_collapse=e})},null,8,["sidebar_collapse"]),(0,o.createVNode)("main",d,[(0,o.renderSlot)(e.$slots,"default",{},void 0,!0)]),c])])})),n=t(9024),u=t(9410);const m={name:"Admin",components:{Topbar:t(3457).default,Footer:u.default,Sidebar:n.default},data:function(){return{sidebar_collapse:!0}},methods:{},mounted:function(){}};m.render=i,m.__scopeId="data-v-8ce5572e";const b=m},9410:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>f});var o=t(5166),s=(0,o.withScopeId)("data-v-7aa72738");(0,o.pushScopeId)("data-v-7aa72738");var r={class:"footer"},l={class:"container-fluid"},d={class:"row text-muted"},c={class:"col-6 text-start"},i={class:"mb-0"},n={href:"index.html",class:"text-muted"},u=(0,o.createTextVNode)(" © Laravel v (PHP v) "),m=(0,o.createStaticVNode)('<div class="col-6 text-end" data-v-7aa72738><ul class="list-inline" data-v-7aa72738><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Support</a></li><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Help Center</a></li><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Privacy</a></li><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Terms</a></li></ul></div>',1);(0,o.popScopeId)();var b=s((function(e,a,t,s,b,p){return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)("footer",r,[(0,o.createVNode)("div",l,[(0,o.createVNode)("div",d,[(0,o.createVNode)("div",c,[(0,o.createVNode)("p",i,[(0,o.createVNode)("a",n,[(0,o.createVNode)("strong",null,(0,o.toDisplayString)(b.footer.app_name),1)]),u])]),m])])])])}));const p={name:"Footer",data:function(){return{footer:{}}},methods:{getDefaults:function(){var e=this;axios.post("/admin/footer",{}).then((function(a){e.footer=a.data}))}},mounted:function(){this.getDefaults()}};p.render=b,p.__scopeId="data-v-7aa72738";const f=p},9024:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>_});var o=t(5166),s=(0,o.withScopeId)("data-v-38df5e85");(0,o.pushScopeId)("data-v-38df5e85");var r={key:0,id:"sidebar",class:"sidebar"},l={class:"sidebar-content js-simplebar"},d={class:"align-middle"},c={class:"sidebar-nav"},i=(0,o.createVNode)("li",{class:"sidebar-header"}," Components ",-1),n=(0,o.createVNode)("i",{class:"fas fa-chart-area"},null,-1),u=(0,o.createTextVNode)(),m=(0,o.createVNode)("span",{class:"align-middle"},"Dashboard",-1),b=(0,o.createVNode)("i",{class:"fas fa-wrench"},null,-1),p=(0,o.createTextVNode)(),f=(0,o.createVNode)("span",{class:"align-middle"},"Services",-1),v=(0,o.createVNode)("a",{href:"#manageusers","data-bs-toggle":"collapse",role:"button","aria-expanded":"false","aria-controls":"collapseExample",class:"sidebar-link"},[(0,o.createVNode)("i",{class:"fas fa-users-cog"}),(0,o.createTextVNode)(),(0,o.createVNode)("span",{class:"align-middle"},"Manage Users")],-1),h=(0,o.createTextVNode)("Roles "),V=(0,o.createTextVNode)("Users ");(0,o.popScopeId)();var N=s((function(e,a,t,N,k,_){var g=(0,o.resolveComponent)("inertia-link");return(0,o.openBlock)(),(0,o.createBlock)("div",null,[(0,o.createVNode)(o.Transition,{name:"fade"},{default:s((function(){return[t.sidebar_collapse?((0,o.openBlock)(),(0,o.createBlock)("nav",r,[(0,o.createVNode)("div",l,[k.sidebar.home?((0,o.openBlock)(),(0,o.createBlock)(g,{key:0,class:"sidebar-brand",style:{"text-decoration":"unset"},href:k.sidebar.home},{default:s((function(){return[(0,o.createVNode)("span",d,(0,o.toDisplayString)(k.sidebar.appname),1)]})),_:1},8,["href"])):(0,o.createCommentVNode)("",!0),(0,o.createVNode)("ul",c,[i,k.sidebar.home?((0,o.openBlock)(),(0,o.createBlock)("li",{key:0,class:["sidebar-item",{active:_.isActive(k.sidebar.home)}]},[(0,o.createVNode)(g,{class:"sidebar-link",href:k.sidebar.home},{default:s((function(){return[n,u,m]})),_:1},8,["href"])],2)):(0,o.createCommentVNode)("",!0),k.sidebar.services?((0,o.openBlock)(),(0,o.createBlock)("li",{key:1,class:["sidebar-item",{active:_.isActive(k.sidebar.services)}]},[(0,o.createVNode)(g,{class:"sidebar-link",href:k.sidebar.services},{default:s((function(){return[b,p,f]})),_:1},8,["href"])],2)):(0,o.createCommentVNode)("",!0),_.isUrl(k.sidebar.roles)||_.isUrl(k.sidebar.users)?((0,o.openBlock)(),(0,o.createBlock)("li",{key:2,class:["sidebar-item",{active:_.isActive(k.sidebar.roles)||_.isActive(k.sidebar.users)}]},[v,(0,o.createVNode)("ul",{id:"manageusers",class:["sidebar-dropdown list-unstyled collapse",{show:_.isActive(k.sidebar.roles)||_.isActive(k.sidebar.users)}]},[k.sidebar.roles?((0,o.openBlock)(),(0,o.createBlock)("li",{key:0,class:["sidebar-item",{active:_.isActive(k.sidebar.roles)}]},[(0,o.createVNode)(g,{class:"sidebar-link",href:k.sidebar.roles},{default:s((function(){return[h]})),_:1},8,["href"])],2)):(0,o.createCommentVNode)("",!0),k.sidebar.users?((0,o.openBlock)(),(0,o.createBlock)("li",{key:1,class:["sidebar-item",{active:_.isActive(k.sidebar.users)}]},[(0,o.createVNode)(g,{class:"sidebar-link",href:k.sidebar.users},{default:s((function(){return[V]})),_:1},8,["href"])],2)):(0,o.createCommentVNode)("",!0)],2)],2)):(0,o.createCommentVNode)("",!0)])])])):(0,o.createCommentVNode)("",!0)]})),_:1})])}));const k={name:"Sidebar",props:["sidebar_collapse"],data:function(){return{sidebar:{}}},methods:{getDefaults:function(){var e=this;axios.post("/admin/sidebar",{}).then((function(a){e.sidebar=a.data}))},isUrl:function(e){var a=!1,t=this;return $.each(t.sidebar,(function(e){if(t.sidebar[e]===window.location.href)return a=!0})),a},isActive:function(e){return window.location.href===e}},mounted:function(){this.getDefaults()}};k.render=N,k.__scopeId="data-v-38df5e85";const _=k},3457:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>N});var o=t(5166),s=(0,o.withScopeId)("data-v-8b6753f0");(0,o.pushScopeId)("data-v-8b6753f0");var r={class:"navbar navbar-expand navbar-light navbar-bg"},l=(0,o.createVNode)("i",{class:"hamburger align-self-center"},null,-1),d={class:"navbar-collapse collapse"},c={class:"navbar-nav navbar-align"},i={class:"nav-item dropdown"},n={class:"nav-link dropdown-toggle d-none d-sm-inline-block",href:"#","data-bs-toggle":"dropdown"},u={class:"dropdown-menu dropdown-menu-end"},m=(0,o.createVNode)("i",{class:"align-middle me-1","data-feather":"settings"},null,-1),b=(0,o.createTextVNode)(" Settings & Privacy "),p=(0,o.createVNode)("a",{class:"dropdown-item",href:"#"},[(0,o.createVNode)("i",{class:"align-middle me-1","data-feather":"help-circle"}),(0,o.createTextVNode)(" Help Center ")],-1),f=(0,o.createVNode)("div",{class:"dropdown-divider"},null,-1),v=(0,o.createVNode)("a",{class:"dropdown-item",href:"/logout"},"Log out",-1);(0,o.popScopeId)();var h=s((function(e,a,t,s,h,V){return(0,o.openBlock)(),(0,o.createBlock)("nav",r,[(0,o.createVNode)("a",{class:"sidebar-toggle d-flex",onClick:a[1]||(a[1]=function(){return V.toggleSideBar&&V.toggleSideBar.apply(V,arguments)})},[l]),(0,o.createVNode)("div",d,[(0,o.createVNode)("ul",c,[(0,o.createVNode)("li",i,[(0,o.createVNode)("a",n,[(0,o.createVNode)("img",{src:h.top_bar.profile_pic,class:"avatar img-fluid rounded me-1"},null,8,["src"]),(0,o.createTextVNode)(" "+(0,o.toDisplayString)(h.top_bar.name),1)]),(0,o.createVNode)("div",u,[(0,o.createVNode)("a",{class:"dropdown-item",href:h.top_bar.settings_privacy},[m,b],8,["href"]),p,f,v])])])])])}));const V={name:"Topbar",props:["sidebar_collapse"],data:function(){return{top_bar:{}}},methods:{toggleSideBar:function(){this.$emit("sideBarToggle",!this.sidebar_collapse)},getDefaults:function(){var e=this;axios.post("/admin/top-bar",{}).then((function(a){e.top_bar=a.data}))}},mounted:function(){this.getDefaults()}};V.render=h,V.__scopeId="data-v-8b6753f0";const N=V},1474:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>K});var o=t(5166),s={class:"container-fluid p-0"},r=(0,o.createVNode)("h1",{class:"h3 mb-3"},"Roles and Abilities",-1),l={class:"row"},d={class:"col-12"},c={class:"card"},i=(0,o.createVNode)("div",{class:"card-header"}," Roles Data Table ",-1),n={class:"card-body"},u={class:"row"},m={class:"col-12 mb-3"},b=(0,o.createVNode)("div",{class:"col-12 mb-3"},[(0,o.createVNode)("table",{id:"roles-table",class:"table table-hover",style:{width:"100%"}})],-1),p={id:"role-add-modal",class:"modal fade",tabindex:"-1"},f={class:"modal-dialog modal-sm"},v={class:"modal-content"},h=(0,o.createVNode)("div",{class:"modal-header"},[(0,o.createVNode)("h5",{class:"modal-title"},"Add Role Modal"),(0,o.createVNode)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),V={class:"modal-body"},N={class:"d-flex flex-column"},k=(0,o.createVNode)("label",null,"Role Name",-1),_={class:"modal-footer"},g=(0,o.createVNode)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),w={id:"role-edit-modal",class:"modal fade",tabindex:"-1"},x={class:"modal-dialog"},y={class:"modal-content"},C=(0,o.createVNode)("div",{class:"modal-header"},[(0,o.createVNode)("h5",{class:"modal-title"},"Edit Role Modal"),(0,o.createVNode)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),S={class:"modal-body"},B={class:"d-flex flex-column"},T=(0,o.createVNode)("label",null,"Role Name",-1),A=(0,o.createVNode)("h5",{class:"my-2"},"Manage Users",-1),D={class:"d-flex flex-fill"},I={class:"form-check form-switch me-3"},R=(0,o.createVNode)("label",{class:"form-check-label"},"manage-users",-1),M={class:"form-check form-switch me-3"},U=(0,o.createVNode)("label",{class:"form-check-label"},"users",-1),O={class:"form-check form-switch me-3"},P=(0,o.createVNode)("label",{class:"form-check-label"},"roles",-1),E={class:"modal-footer"},j=(0,o.createVNode)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);const H={components:{Admin:t(9554).default},props:{data:Object},data:function(){return{role_edit_modal:null,role_add_modal:null,role_name:"",myToast:null,overview:{}}},methods:{showAddModal:function(){this.role_add_modal.show(),this.role_name=""},saveRole:function(){var e=this;e.role_add_modal.hide(),axios.post(this.$props.data.roles_store_link,{role_name:this.role_name}).then((function(a){alertify.success('<label class="text-white">Success!</label>'),e.dt.draw()})).catch((function(e){console.log(e.response.data.errors);var a=e.response.data.errors,t="";$.each(a,(function(e,a){$.each(a,(function(e,a){t+=a+"\n"}))})),alertify.alert(t,(function(){alertify.message("OK")}))}))},editRole:function(){var e=this;e.role_add_modal.hide(),axios.post(this.$props.data.roles_update_link,this.overview).then((function(a){alertify.success('<label class="text-white">Success!</label>'),e.dt.draw()})).catch((function(e){console.log(e.response.data.errors);var a=e.response.data.errors,t="";$.each(a,(function(e,a){$.each(a,(function(e,a){t+=a+"\n"}))})),alertify.alert(t,(function(){alertify.message("OK")}))}))},deleteRole:function(){var e=this;e.role_edit_modal.hide(),axios.post(this.$props.data.roles_delete_link,this.overview).then((function(a){alertify.success('<label class="text-white">Success!</label>'),e.dt.draw()})).catch((function(e){console.log(e.response.data.errors);var a=e.response.data.errors,t="";$.each(a,(function(e,a){$.each(a,(function(e,a){t+=a+"\n"}))})),alertify.alert(t,(function(){alertify.message("OK")}))}))}},mounted:function(){var e=this;this.role_add_modal=new bootstrap.Modal(document.getElementById("role-add-modal"),{keyboard:!1}),this.role_edit_modal=new bootstrap.Modal(document.getElementById("role-edit-modal"),{keyboard:!1}),this.dt=$("#roles-table").DataTable({serverSide:!0,ajax:{url:e.data.roles_table_link,type:"POST"},order:[[0,"desc"]],columns:[{data:"id",title:"ID"},{data:function(e){return"<button class='btn btn-link'>"+e.name+"</button>"},title:"Name"},{data:"created_at",title:"Created At"},{data:"updated_at",title:"Created At"}],drawCallback:function(a){$("#roles-table tr button").on("click",(function(){e.overview=e.dt.row($(this).parent().parent()).data(),e.role_edit_modal.show()}))}})},render:function(e,a,t,$,H,K){var F=(0,o.resolveComponent)("Admin");return(0,o.openBlock)(),(0,o.createBlock)(F,null,{default:(0,o.withCtx)((function(){return[(0,o.createVNode)("div",null,[(0,o.createVNode)("div",s,[r,(0,o.createVNode)("div",l,[(0,o.createVNode)("div",d,[(0,o.createVNode)("div",c,[i,(0,o.createVNode)("div",n,[(0,o.createVNode)("div",u,[(0,o.createVNode)("div",m,[(0,o.createVNode)("button",{class:"btn btn-primary",onClick:a[1]||(a[1]=function(e){return K.showAddModal()})},"Add a Role")]),b])])])])])]),(0,o.createVNode)("div",p,[(0,o.createVNode)("div",f,[(0,o.createVNode)("div",v,[h,(0,o.createVNode)("div",V,[(0,o.createVNode)("div",N,[k,(0,o.withDirectives)((0,o.createVNode)("input",{type:"text",class:"form-control","onUpdate:modelValue":a[2]||(a[2]=function(e){return H.role_name=e})},null,512),[[o.vModelText,H.role_name]])])]),(0,o.createVNode)("div",_,[g,(0,o.createVNode)("button",{type:"button",class:"btn btn-success text-white",onClick:a[3]||(a[3]=function(){return K.saveRole&&K.saveRole.apply(K,arguments)})},"Save changes")])])])]),(0,o.createVNode)("div",w,[(0,o.createVNode)("div",x,[(0,o.createVNode)("div",y,[C,(0,o.createVNode)("div",S,[(0,o.createVNode)("div",B,[T,(0,o.withDirectives)((0,o.createVNode)("input",{type:"text",class:"form-control","onUpdate:modelValue":a[4]||(a[4]=function(e){return H.overview.name=e})},null,512),[[o.vModelText,H.overview.name]])]),A,(0,o.createVNode)("div",D,[(0,o.createVNode)("div",I,[(0,o.withDirectives)((0,o.createVNode)("input",{class:"form-check-input",type:"checkbox",value:"manage-users","onUpdate:modelValue":a[5]||(a[5]=function(e){return H.overview.abilities=e})},null,512),[[o.vModelCheckbox,H.overview.abilities]]),R]),(0,o.createVNode)("div",M,[(0,o.withDirectives)((0,o.createVNode)("input",{class:"form-check-input",type:"checkbox",value:"users","onUpdate:modelValue":a[6]||(a[6]=function(e){return H.overview.abilities=e})},null,512),[[o.vModelCheckbox,H.overview.abilities]]),U]),(0,o.createVNode)("div",O,[(0,o.withDirectives)((0,o.createVNode)("input",{class:"form-check-input",type:"checkbox",value:"roles","onUpdate:modelValue":a[7]||(a[7]=function(e){return H.overview.abilities=e})},null,512),[[o.vModelCheckbox,H.overview.abilities]]),P])])]),(0,o.createVNode)("div",E,[j,(0,o.createVNode)("button",{type:"button",class:"btn btn-danger text-white",onClick:a[8]||(a[8]=function(){return K.deleteRole&&K.deleteRole.apply(K,arguments)})},"Delete"),(0,o.createVNode)("button",{type:"button",class:"btn btn-info text-white",onClick:a[9]||(a[9]=function(){return K.editRole&&K.editRole.apply(K,arguments)})},"Update")])])])])])]})),_:1})}},K=H}}]);
//# sourceMappingURL=474.js.map?id=24c861f88f69ccd94d76