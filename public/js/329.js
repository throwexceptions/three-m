(self.webpackChunk=self.webpackChunk||[]).push([[329,554,410,649,457],{9554:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>p});var r=t(5166),o=(0,r.withScopeId)("data-v-8ce5572e");(0,r.pushScopeId)("data-v-8ce5572e");var s={class:"wrapper"},c={class:"main"},d={class:"content"},i=(0,r.createVNode)("footer",null,null,-1);(0,r.popScopeId)();var l=o((function(e,a,t,o,l,n){var u=(0,r.resolveComponent)("sidebar"),v=(0,r.resolveComponent)("topbar");return(0,r.openBlock)(),(0,r.createBlock)("div",s,[(0,r.createVNode)(u,{sidebar_collapse:l.sidebar_collapse},null,8,["sidebar_collapse"]),(0,r.createVNode)("div",c,[(0,r.createVNode)(v,{sidebar_collapse:l.sidebar_collapse,onSideBarToggle:a[1]||(a[1]=function(e){return l.sidebar_collapse=e})},null,8,["sidebar_collapse"]),(0,r.createVNode)("main",d,[(0,r.renderSlot)(e.$slots,"default",{},void 0,!0)]),i])])})),n=t(8649),u=t(9410);const v={name:"Admin",components:{Topbar:t(3457).default,Footer:u.default,Sidebar:n.default},data:function(){return{sidebar_collapse:!0}},methods:{},mounted:function(){}};v.render=l,v.__scopeId="data-v-8ce5572e";const p=v},9410:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>f});var r=t(5166),o=(0,r.withScopeId)("data-v-7aa72738");(0,r.pushScopeId)("data-v-7aa72738");var s={class:"footer"},c={class:"container-fluid"},d={class:"row text-muted"},i={class:"col-6 text-start"},l={class:"mb-0"},n={href:"index.html",class:"text-muted"},u=(0,r.createTextVNode)(" © Laravel v (PHP v) "),v=(0,r.createStaticVNode)('<div class="col-6 text-end" data-v-7aa72738><ul class="list-inline" data-v-7aa72738><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Support</a></li><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Help Center</a></li><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Privacy</a></li><li class="list-inline-item" data-v-7aa72738><a class="text-muted" href="#" data-v-7aa72738>Terms</a></li></ul></div>',1);(0,r.popScopeId)();var p=o((function(e,a,t,o,p,m){return(0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)("footer",s,[(0,r.createVNode)("div",c,[(0,r.createVNode)("div",d,[(0,r.createVNode)("div",i,[(0,r.createVNode)("p",l,[(0,r.createVNode)("a",n,[(0,r.createVNode)("strong",null,(0,r.toDisplayString)(p.footer.app_name),1)]),u])]),v])])])])}));const m={name:"Footer",data:function(){return{footer:{}}},methods:{getDefaults:function(){var e=this;axios.post("/admin/footer",{}).then((function(a){e.footer=a.data}))}},mounted:function(){this.getDefaults()}};m.render=p,m.__scopeId="data-v-7aa72738";const f=m},8649:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>x});var r=t(5166),o=(0,r.withScopeId)("data-v-e940272e");(0,r.pushScopeId)("data-v-e940272e");var s={key:0,id:"sidebar",class:"sidebar"},c={class:"sidebar-content js-simplebar"},d={class:"align-middle"},i={class:"sidebar-nav"},l=(0,r.createVNode)("li",{class:"sidebar-header"}," Components ",-1),n=(0,r.createVNode)("i",{class:"fas fa-chart-area"},null,-1),u=(0,r.createTextVNode)(),v=(0,r.createVNode)("span",{class:"align-middle"},"Dashboard",-1),p=(0,r.createVNode)("i",{class:"fas fa-wrench"},null,-1),m=(0,r.createTextVNode)(),f=(0,r.createVNode)("span",{class:"align-middle"},"Services",-1),b=(0,r.createVNode)("i",{class:"fas fa-calendar-day"},null,-1),V=(0,r.createTextVNode)(),h=(0,r.createVNode)("span",{class:"align-middle"},"Reservation",-1),N=(0,r.createVNode)("a",{href:"#manageusers","data-bs-toggle":"collapse",role:"button","aria-expanded":"false","aria-controls":"collapseExample",class:"sidebar-link"},[(0,r.createVNode)("i",{class:"fas fa-users-cog"}),(0,r.createTextVNode)(),(0,r.createVNode)("span",{class:"align-middle"},"Manage Users")],-1),w=(0,r.createTextVNode)("Roles "),k=(0,r.createTextVNode)("Users ");(0,r.popScopeId)();var g=o((function(e,a,t,g,_,x){var y=(0,r.resolveComponent)("inertia-link");return(0,r.openBlock)(),(0,r.createBlock)("div",null,[(0,r.createVNode)(r.Transition,{name:"fade"},{default:o((function(){return[t.sidebar_collapse?((0,r.openBlock)(),(0,r.createBlock)("nav",s,[(0,r.createVNode)("div",c,[_.sidebar.home?((0,r.openBlock)(),(0,r.createBlock)(y,{key:0,class:"sidebar-brand",style:{"text-decoration":"unset"},href:_.sidebar.home},{default:o((function(){return[(0,r.createVNode)("span",d,(0,r.toDisplayString)(_.sidebar.appname),1)]})),_:1},8,["href"])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)("ul",i,[l,_.sidebar.home?((0,r.openBlock)(),(0,r.createBlock)("li",{key:0,class:["sidebar-item",{active:x.isActive(_.sidebar.home)}]},[(0,r.createVNode)(y,{class:"sidebar-link",href:_.sidebar.home},{default:o((function(){return[n,u,v]})),_:1},8,["href"])],2)):(0,r.createCommentVNode)("",!0),_.sidebar.services?((0,r.openBlock)(),(0,r.createBlock)("li",{key:1,class:["sidebar-item",{active:x.isActive(_.sidebar.services)}]},[(0,r.createVNode)(y,{class:"sidebar-link",href:_.sidebar.services},{default:o((function(){return[p,m,f]})),_:1},8,["href"])],2)):(0,r.createCommentVNode)("",!0),_.sidebar.reservation?((0,r.openBlock)(),(0,r.createBlock)("li",{key:2,class:["sidebar-item",{active:x.isActive(_.sidebar.reservation)}]},[(0,r.createVNode)(y,{class:"sidebar-link",href:_.sidebar.reservation},{default:o((function(){return[b,V,h]})),_:1},8,["href"])],2)):(0,r.createCommentVNode)("",!0),x.isUrl(_.sidebar.roles)||x.isUrl(_.sidebar.users)?((0,r.openBlock)(),(0,r.createBlock)("li",{key:3,class:["sidebar-item",{active:x.isActive(_.sidebar.roles)||x.isActive(_.sidebar.users)}]},[N,(0,r.createVNode)("ul",{id:"manageusers",class:["sidebar-dropdown list-unstyled collapse",{show:x.isActive(_.sidebar.roles)||x.isActive(_.sidebar.users)}]},[_.sidebar.roles?((0,r.openBlock)(),(0,r.createBlock)("li",{key:0,class:["sidebar-item",{active:x.isActive(_.sidebar.roles)}]},[(0,r.createVNode)(y,{class:"sidebar-link",href:_.sidebar.roles},{default:o((function(){return[w]})),_:1},8,["href"])],2)):(0,r.createCommentVNode)("",!0),_.sidebar.users?((0,r.openBlock)(),(0,r.createBlock)("li",{key:1,class:["sidebar-item",{active:x.isActive(_.sidebar.users)}]},[(0,r.createVNode)(y,{class:"sidebar-link",href:_.sidebar.users},{default:o((function(){return[k]})),_:1},8,["href"])],2)):(0,r.createCommentVNode)("",!0)],2)],2)):(0,r.createCommentVNode)("",!0)])])])):(0,r.createCommentVNode)("",!0)]})),_:1})])}));const _={name:"Sidebar",props:["sidebar_collapse"],data:function(){return{sidebar:{}}},methods:{getDefaults:function(){var e=this;axios.post("/admin/sidebar",{}).then((function(a){e.sidebar=a.data}))},isUrl:function(e){var a=!1,t=this;return $.each(t.sidebar,(function(e){if(t.sidebar[e]===window.location.href)return a=!0})),a},isActive:function(e){return window.location.href===e}},mounted:function(){this.getDefaults()}};_.render=g,_.__scopeId="data-v-e940272e";const x=_},3457:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>N});var r=t(5166),o=(0,r.withScopeId)("data-v-8b6753f0");(0,r.pushScopeId)("data-v-8b6753f0");var s={class:"navbar navbar-expand navbar-light navbar-bg"},c=(0,r.createVNode)("i",{class:"hamburger align-self-center"},null,-1),d={class:"navbar-collapse collapse"},i={class:"navbar-nav navbar-align"},l={class:"nav-item dropdown"},n={class:"nav-link dropdown-toggle d-none d-sm-inline-block",href:"#","data-bs-toggle":"dropdown"},u={class:"dropdown-menu dropdown-menu-end"},v=(0,r.createVNode)("i",{class:"align-middle me-1","data-feather":"settings"},null,-1),p=(0,r.createTextVNode)(" Settings & Privacy "),m=(0,r.createVNode)("a",{class:"dropdown-item",href:"#"},[(0,r.createVNode)("i",{class:"align-middle me-1","data-feather":"help-circle"}),(0,r.createTextVNode)(" Help Center ")],-1),f=(0,r.createVNode)("div",{class:"dropdown-divider"},null,-1),b=(0,r.createVNode)("a",{class:"dropdown-item",href:"/logout"},"Log out",-1);(0,r.popScopeId)();var V=o((function(e,a,t,o,V,h){return(0,r.openBlock)(),(0,r.createBlock)("nav",s,[(0,r.createVNode)("a",{class:"sidebar-toggle d-flex",onClick:a[1]||(a[1]=function(){return h.toggleSideBar&&h.toggleSideBar.apply(h,arguments)})},[c]),(0,r.createVNode)("div",d,[(0,r.createVNode)("ul",i,[(0,r.createVNode)("li",l,[(0,r.createVNode)("a",n,[(0,r.createVNode)("img",{src:V.top_bar.profile_pic,class:"avatar img-fluid rounded me-1"},null,8,["src"]),(0,r.createTextVNode)(" "+(0,r.toDisplayString)(V.top_bar.name),1)]),(0,r.createVNode)("div",u,[(0,r.createVNode)("a",{class:"dropdown-item",href:V.top_bar.settings_privacy},[v,p],8,["href"]),m,f,b])])])])])}));const h={name:"Topbar",props:["sidebar_collapse"],data:function(){return{top_bar:{}}},methods:{toggleSideBar:function(){this.$emit("sideBarToggle",!this.sidebar_collapse)},getDefaults:function(){var e=this;axios.post("/admin/top-bar",{}).then((function(a){e.top_bar=a.data}))}},mounted:function(){this.getDefaults()}};h.render=V,h.__scopeId="data-v-8b6753f0";const N=h},2329:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>M});var r=t(5166),o={class:"container-fluid p-0"},s=(0,r.createVNode)("h1",{class:"h3 mb-3"},"Services",-1),c={class:"row"},d={class:"col-12"},i={class:"card"},l=(0,r.createVNode)("div",{class:"card-header"}," Services Data Table ",-1),n={class:"card-body"},u={class:"row"},v={class:"col-12"},p=(0,r.createVNode)("div",{class:"col-12 mt-3"},[(0,r.createVNode)("table",{id:"services-table",class:"table table-hover",style:{width:"100%"}})],-1),m={id:"services-modal",class:"modal fade",tabindex:"-1"},f={class:"modal-dialog"},b={class:"modal-content"},V=(0,r.createVNode)("div",{class:"modal-header"},[(0,r.createVNode)("h5",{class:"modal-title"},"Services Modal"),(0,r.createVNode)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),h={class:"modal-body"},N={class:"d-flex flex-column"},w={class:"mb-3"},k=(0,r.createVNode)("label",null,"Name",-1),g={class:"mb-3"},_=(0,r.createVNode)("label",null,"Price",-1),x={class:"d-flex flex-row mb-3 align-items-center"},y={class:"flex-grow-1"},S=(0,r.createVNode)("label",null,"Promo",-1),B={class:"pt-4 ps-4"},C={class:"form-check form-switch"},T=(0,r.createVNode)("label",{class:"form-check-label",for:"flexSwitchCheckDefault"},"Is Promo",-1),D={class:"mb-3"},I=(0,r.createVNode)("label",null,"Description",-1),A={class:"modal-footer"},P=(0,r.createVNode)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);const U={components:{Admin:t(9554).default},props:{data:Object},methods:{showForm:function(){this.services_modal.show(),this.overview={name:"",desc:"",price:0,promo_price:0,is_promo:!1}},save:function(){var e=this;axios.post(e.data.services_store_link,e.overview).then((function(){alertify.success("Success!"),e.dt.draw()}))},destroy:function(){var e=this;axios.post(e.data.services_destroy_link,e.overview).then((function(){alertify.success("Success!"),e.dt.draw()}))}},data:function(){return{dt:null,services_modal:null,overview:{}}},mounted:function(){var e=this;e.services_modal=new bootstrap.Modal(document.getElementById("services-modal"),{keyboard:!1}),e.dt=$("#services-table").DataTable({serverSide:!0,ajax:{url:e.data.services_table_link,type:"POST"},order:[[0,"desc"]],columns:[{data:"name",title:"Service Name"},{data:"price",title:"Price"},{data:"promo_price",title:"Promo Price"},{data:"is_promo",title:"is Promo"}],drawCallback:function(a){$(".btn-edit").on("click",(function(){e.user_edit_modal.show(),e.overview=e.dt.row($(this).parent().parent()).data()})),$("#services-table tbody tr").on("click",(function(){e.services_modal.show(),e.overview=e.dt.row($(this)).data()}))}})},render:function(e,a,t,U,M,$){var F=(0,r.resolveComponent)("Admin");return(0,r.openBlock)(),(0,r.createBlock)(F,null,{default:(0,r.withCtx)((function(){return[(0,r.createVNode)("div",null,[(0,r.createVNode)("div",o,[s,(0,r.createVNode)("div",c,[(0,r.createVNode)("div",d,[(0,r.createVNode)("div",i,[l,(0,r.createVNode)("div",n,[(0,r.createVNode)("div",u,[(0,r.createVNode)("div",v,[(0,r.createVNode)("button",{class:"btn btn-primary",onClick:a[1]||(a[1]=function(){return $.showForm&&$.showForm.apply($,arguments)})},"Add User")]),p])])])])])]),(0,r.createVNode)("div",m,[(0,r.createVNode)("div",f,[(0,r.createVNode)("div",b,[V,(0,r.createVNode)("div",h,[(0,r.createVNode)("div",N,[(0,r.createVNode)("div",w,[k,(0,r.withDirectives)((0,r.createVNode)("input",{class:"form-control","onUpdate:modelValue":a[2]||(a[2]=function(e){return M.overview.name=e})},null,512),[[r.vModelText,M.overview.name]])]),(0,r.createVNode)("div",g,[_,(0,r.withDirectives)((0,r.createVNode)("input",{type:"number",class:"form-control","onUpdate:modelValue":a[3]||(a[3]=function(e){return M.overview.price=e})},null,512),[[r.vModelText,M.overview.price]])]),(0,r.createVNode)("div",x,[(0,r.createVNode)("div",y,[S,(0,r.withDirectives)((0,r.createVNode)("input",{type:"number",class:"form-control","onUpdate:modelValue":a[4]||(a[4]=function(e){return M.overview.promo_price=e})},null,512),[[r.vModelText,M.overview.promo_price]])]),(0,r.createVNode)("div",B,[(0,r.createVNode)("div",C,[(0,r.withDirectives)((0,r.createVNode)("input",{"onUpdate:modelValue":a[5]||(a[5]=function(e){return M.overview.is_promo=e}),class:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault"},null,512),[[r.vModelCheckbox,M.overview.is_promo]]),T])])]),(0,r.createVNode)("div",D,[I,(0,r.withDirectives)((0,r.createVNode)("textarea",{class:"form-control","onUpdate:modelValue":a[6]||(a[6]=function(e){return M.overview.desc=e})},null,512),[[r.vModelText,M.overview.desc]])])])]),(0,r.createVNode)("div",A,[(0,r.createVNode)("button",{type:"button",class:"btn btn-danger me-auto text-white",onClick:a[7]||(a[7]=function(){return $.destroy&&$.destroy.apply($,arguments)}),"data-bs-dismiss":"modal"},"Delete "),P,(0,r.createVNode)("button",{type:"button",class:"btn btn-primary",onClick:a[8]||(a[8]=function(){return $.save&&$.save.apply($,arguments)}),"data-bs-dismiss":"modal"},"Save ")])])])])])]})),_:1})}},M=U}}]);
//# sourceMappingURL=329.js.map?id=3e51dd8371530a712e2a