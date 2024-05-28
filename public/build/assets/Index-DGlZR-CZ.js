import{a7 as E,u as M,v as R,M as G,L as ne,e as O,a5 as oe,r as n,o as p,m as f,w as e,l as u,a as t,p as v,t as d,f as B,H as re,k as D,z as ue,X as ie,aa as ce,b as g,ac as T,ad as j,J as x,K as A,a6 as de}from"./main-DuDaNFOP.js";import{u as W}from"./users-Bt4Iq4Rz.js";import{_ as me}from"./AstronautIcon-HFj5TUcv.js";const pe={__name:"UserIndexDropdown",props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:null}},setup(w){const U=w,r=E();M();const{t:_}=R.useI18n();G();const y=ne();O();const b=W();oe("utils");function m(i){r.openDialog({title:_("general.are_you_sure"),message:_("users.confirm_delete",1),yesLabel:_("general.ok"),noLabel:_("general.cancel"),variant:"danger",size:"lg",hideNoButton:!1}).then(l=>{l&&b.deleteUser({ids:[i]}).then(h=>{h&&U.loadData&&U.loadData()})})}return(i,l)=>{const h=n("BaseIcon"),$=n("BaseButton"),k=n("BaseDropdownItem"),C=n("router-link"),V=n("BaseDropdown");return p(),f(V,null,{activator:e(()=>[u(y).name==="users.view"?(p(),f($,{key:0,variant:"primary"},{default:e(()=>[t(h,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(p(),f(h,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:e(()=>[t(C,{to:`/admin/users/${w.row.id}/edit`},{default:e(()=>[t(k,null,{default:e(()=>[t(h,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),v(" "+d(i.$t("general.edit")),1)]),_:1})]),_:1},8,["to"]),t(k,{onClick:l[0]||(l[0]=S=>m(w.row.id))},{default:e(()=>[t(h,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),v(" "+d(i.$t("general.delete")),1)]),_:1})]),_:1})}}},fe={class:"flex items-center justify-end space-x-5"},_e={class:"relative table-container"},he={class:"relative flex items-center justify-end h-5 border-gray-200 border-solid"},ge={class:"flex text-sm font-medium cursor-pointer select-none text-primary-400"},ve={class:"absolute z-10 items-center left-6 top-2.5 select-none"},ye={class:"custom-control custom-checkbox"},Ie={__name:"Index",setup(w){M();const U=E(),r=W(),_=G();O();let y=B(!1),b=B(!0);B(null),B("created_at"),B(!1);const{t:m}=R.useI18n();let i=B(null),l=re({name:"",email:"",phone:""});const h=D(()=>[{key:"status",thClass:"extra",tdClass:"font-medium text-gray-900",sortable:!1},{key:"name",label:m("users.name"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"email",label:"Email"},{key:"phone",label:m("users.phone")},{key:"created_at",label:m("users.added_on")},{key:"actions",tdClass:"text-right text-sm font-medium",sortable:!1}]),$=D(()=>!r.totalUsers&&!b.value),k=D({get:()=>r.selectedUsers,set:s=>r.selectUser(s)}),C=D({get:()=>r.selectAllField,set:s=>r.setSelectAllState(s)});ue(l,()=>{V()},{deep:!0}),ie(()=>{r.fetchUsers(),r.fetchRoles()}),ce(()=>{r.selectAllField&&r.selectAllUsers()});function V(){S()}function S(){i.value&&i.value.refresh()}async function X({page:s,filter:o,sort:I}){let F={display_name:l.name!==null?l.name:"",phone:l.phone!==null?l.phone:"",email:l.email!==null?l.email:"",orderByField:I.fieldName||"created_at",orderBy:I.order||"desc",page:s};b.value=!0;let c=await r.fetchUsers(F);return b.value=!1,{data:c.data.data,pagination:{totalPages:c.data.meta.last_page,currentPage:s,totalCount:c.data.meta.total,limit:10}}}function H(){l.name="",l.email="",l.phone=null}function J(){y.value&&H(),y.value=!y.value}function K(){U.openDialog({title:m("general.are_you_sure"),message:m("users.confirm_delete",2),yesLabel:m("general.ok"),noLabel:m("general.cancel"),variant:"danger",size:"lg",hideNoButton:!1}).then(s=>{s&&r.deleteMultipleUsers().then(o=>{o.data.success&&i.value&&i.value.refresh()})})}return(s,o)=>{const I=n("BaseBreadcrumbItem"),F=n("BaseBreadcrumb"),c=n("BaseIcon"),P=n("BaseButton"),q=n("BasePageHeader"),N=n("BaseInput"),z=n("BaseInputGroup"),Q=n("BaseFilterWrapper"),Y=n("BaseEmptyPlaceholder"),Z=n("BaseDropdownItem"),ee=n("BaseDropdown"),L=n("BaseCheckbox"),te=n("router-link"),ae=n("BaseTable"),se=n("BasePage");return p(),f(se,null,{default:e(()=>[t(q,{title:s.$t("users.title")},{actions:e(()=>[g("div",fe,[T(t(P,{variant:"primary-outline",onClick:J},{right:e(a=>[u(y)?(p(),f(c,{key:1,name:"XIcon",class:x(a.class)},null,8,["class"])):(p(),f(c,{key:0,name:"FilterIcon",class:x(a.class)},null,8,["class"]))]),default:e(()=>[v(d(s.$t("general.filter"))+" ",1)]),_:1},512),[[j,u(r).totalUsers]]),u(_).currentUser.is_owner?(p(),f(P,{key:0,onClick:o[0]||(o[0]=a=>s.$router.push("users/create"))},{left:e(a=>[t(c,{name:"PlusIcon",class:x(a.class),"aria-hidden":"true"},null,8,["class"])]),default:e(()=>[v(" "+d(s.$t("users.add_user")),1)]),_:1})):A("",!0)])]),default:e(()=>[t(F,null,{default:e(()=>[t(I,{title:s.$t("general.home"),to:"dashboard"},null,8,["title"]),t(I,{title:s.$t("users.title",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),t(Q,{show:u(y),class:"mt-3",onClear:H},{default:e(()=>[t(z,{label:s.$t("users.name"),class:"flex-1 mt-2 mr-4"},{default:e(()=>[t(N,{modelValue:u(l).name,"onUpdate:modelValue":o[1]||(o[1]=a=>u(l).name=a),type:"text",name:"name",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label"]),t(z,{label:s.$t("users.email"),class:"flex-1 mt-2 mr-4"},{default:e(()=>[t(N,{modelValue:u(l).email,"onUpdate:modelValue":o[2]||(o[2]=a=>u(l).email=a),type:"text",name:"email",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label"]),t(z,{class:"flex-1 mt-2",label:s.$t("users.phone")},{default:e(()=>[t(N,{modelValue:u(l).phone,"onUpdate:modelValue":o[3]||(o[3]=a=>u(l).phone=a),type:"text",name:"phone",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["show"]),T(t(Y,{title:s.$t("users.no_users"),description:s.$t("users.list_of_users")},{actions:e(()=>[u(_).currentUser.is_owner?(p(),f(P,{key:0,variant:"primary-outline",onClick:o[4]||(o[4]=a=>s.$router.push("/admin/users/create"))},{left:e(a=>[t(c,{name:"PlusIcon",class:x(a.class)},null,8,["class"])]),default:e(()=>[v(" "+d(s.$t("users.add_user")),1)]),_:1})):A("",!0)]),default:e(()=>[t(me,{class:"mt-5 mb-4"})]),_:1},8,["title","description"]),[[j,$.value]]),T(g("div",_e,[g("div",he,[u(r).selectedUsers.length?(p(),f(ee,{key:0},{activator:e(()=>[g("span",ge,[v(d(s.$t("general.actions"))+" ",1),t(c,{name:"ChevronDownIcon",class:"h-5"})])]),default:e(()=>[t(Z,{onClick:K},{default:e(()=>[t(c,{name:"TrashIcon",class:"h-5 mr-3 text-gray-600"}),v(" "+d(s.$t("general.delete")),1)]),_:1})]),_:1})):A("",!0)]),t(ae,{ref_key:"table",ref:i,data:X,columns:h.value,class:"mt-3"},de({header:e(()=>[g("div",ve,[t(L,{modelValue:C.value,"onUpdate:modelValue":o[5]||(o[5]=a=>C.value=a),variant:"primary",onChange:u(r).selectAllUsers},null,8,["modelValue","onChange"])])]),"cell-status":e(({row:a})=>[g("div",ye,[t(L,{id:a.data.id,modelValue:k.value,"onUpdate:modelValue":o[6]||(o[6]=le=>k.value=le),value:a.data.id,variant:"primary"},null,8,["id","modelValue","value"])])]),"cell-name":e(({row:a})=>[t(te,{to:{path:`users/${a.data.id}/edit`},class:"font-medium text-primary-500"},{default:e(()=>[v(d(a.data.name),1)]),_:2},1032,["to"])]),"cell-phone":e(({row:a})=>[g("span",null,d(a.data.phone?a.data.phone:"-"),1)]),"cell-created_at":e(({row:a})=>[g("span",null,d(a.data.formatted_created_at),1)]),_:2},[u(_).currentUser.is_owner?{name:"cell-actions",fn:e(({row:a})=>[t(pe,{row:a.data,table:u(i),"load-data":S},null,8,["row","table"])]),key:"0"}:void 0]),1032,["columns"])],512),[[j,!$.value]])]),_:1})}}};export{Ie as default};
