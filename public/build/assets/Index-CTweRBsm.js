import{E as ue,a6 as ce,a7 as me,M as ie,f as _,v as de,H as pe,k as B,a8 as _e,a9 as fe,W as ye,aa as ge,r as o,o as f,m as y,w as l,a as t,b as d,ab as w,ac as D,l as n,J as b,p as h,t as p,Q as v,K as F,a5 as he}from"./main-CO79g86p.js";import{_ as ve}from"./CustomerIndexDropdown-CDpZzZ18.js";import{_ as Ce}from"./AstronautIcon-uQeUrd9j.js";import{u as Be}from"./category-R7YScaiA.js";const be={class:"flex items-center justify-end space-x-5"},ke={class:"relative table-container"},xe={class:"relative flex items-center justify-end h-5"},Se={class:"flex text-sm font-medium cursor-pointer select-none text-primary-400"},Ve={class:"absolute z-10 items-center left-6 top-2.5 select-none"},Ie={class:"relative block"},Fe={__name:"Index",setup($e){const W=Be();ue();const Y=ce(),u=me(),k=ie();let x=_(null),g=_(!1),S=_(!0);const{t:m}=de.useI18n(),A=_([]),V=_(!1);async function j(a=void 0){var i;V.value=!0;const s=await W.fetchCategories({search:a,type:"customer",limit:"all"});s.data.data.length&&(A.value=((i=s.data)==null?void 0:i.data)||[]),V.value=!1}let r=pe({display_name:"",contact_name:"",category_id:null,phone:""});const M=B(()=>!u.totalCustomers&&!S.value),U=B({get:()=>u.selectedCustomers,set:a=>u.selectCustomer(a)}),P=B({get:()=>u.selectAllField,set:a=>u.setSelectAllState(a)}),z=B(()=>[{key:"status",thClass:"extra w-10 pr-0",sortable:!1,tdClass:"font-medium text-gray-900 pr-0"},{key:"name",label:m("customers.name"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"category.name",label:"Category",thClass:"extra",tdClass:"cursor-pointer font-medium text-primary-500"},{key:"phone",label:m("customers.phone")},{key:"due_amount",label:m("customers.amount_due")},{key:"created_at",label:m("items.added_on")},{key:"actions",tdClass:"text-right text-sm font-medium pl-0",thClass:"pl-0",sortable:!1}]);_e(r,()=>{H()},{debounce:500}),fe(()=>{u.selectAllField&&u.selectAllCustomers()}),ye(()=>{j()});function I(){x.value.refresh()}function H(){I()}function G(){return k.hasAbilities([v.DELETE_CUSTOMER,v.EDIT_CUSTOMER,v.VIEW_CUSTOMER])}async function J({page:a,filter:s,sort:i}){let $={display_name:r.display_name,contact_name:r.contact_name,phone:r.phone,category_id:r.category_id,orderByField:i.fieldName||"created_at",orderBy:i.order||"desc",page:a};S.value=!0;let c=await u.fetchCustomers($);return S.value=!1,{data:c.data.data,pagination:{totalPages:c.data.meta.last_page,currentPage:a,totalCount:c.data.meta.total,limit:10}}}function R(){r.display_name="",r.contact_name="",r.phone="",r.category_id=null}function K(){g.value&&R(),g.value=!g.value}let N=_(new Date);N.value=ge(N).format("YYYY-MM-DD");function Q(){Y.openDialog({title:m("general.are_you_sure"),message:m("customers.confirm_delete",2),yesLabel:m("general.ok"),noLabel:m("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(a=>{a&&u.deleteMultipleCustomers().then(s=>{s.data&&I()})})}return(a,s)=>{const i=o("BaseBreadcrumbItem"),$=o("BaseBreadcrumb"),c=o("BaseIcon"),E=o("BaseButton"),X=o("BasePageHeader"),q=o("BaseTreeSelect"),C=o("BaseInputGroup"),T=o("BaseInput"),Z=o("BaseFilterWrapper"),ee=o("BaseEmptyPlaceholder"),te=o("BaseDropdownItem"),ae=o("BaseDropdown"),O=o("BaseCheckbox"),L=o("BaseText"),le=o("router-link"),se=o("BaseFormatMoney"),oe=o("BaseTable"),ne=o("BasePage");return f(),y(ne,null,{default:l(()=>[t(X,{title:a.$t("customers.title")},{actions:l(()=>[d("div",be,[w(t(E,{variant:"primary-outline",onClick:K},{right:l(e=>[n(g)?(f(),y(c,{key:1,name:"XIcon",class:b(e.class)},null,8,["class"])):(f(),y(c,{key:0,name:"FilterIcon",class:b(e.class)},null,8,["class"]))]),default:l(()=>[h(p(a.$t("general.filter"))+" ",1)]),_:1},512),[[D,n(u).totalCustomers]]),n(k).hasAbilities(n(v).CREATE_CUSTOMER)?(f(),y(E,{key:0,onClick:s[0]||(s[0]=e=>a.$router.push("customers/create"))},{left:l(e=>[t(c,{name:"PlusIcon",class:b(e.class)},null,8,["class"])]),default:l(()=>[h(" "+p(a.$t("customers.new_customer")),1)]),_:1})):F("",!0)])]),default:l(()=>[t($,null,{default:l(()=>[t(i,{title:a.$t("general.home"),to:"dashboard"},null,8,["title"]),t(i,{title:a.$t("customers.customer",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),t(Z,{show:n(g),class:"mt-5",onClear:R},{default:l(()=>[t(C,{label:a.$t("customers.phone"),class:"text-left"},{default:l(()=>[t(q,{name:"parent_id","value-prop":"id","label-prop":"name",placeholder:a.$t("expenses.categories.select_a_category"),"parent-prop":"parent_id",options:A.value,loading:V.value,modelValue:n(r).category_id,"onUpdate:modelValue":s[1]||(s[1]=e=>n(r).category_id=e)},null,8,["placeholder","options","loading","modelValue"])]),_:1},8,["label"]),t(C,{label:a.$t("customers.display_name"),class:"text-left"},{default:l(()=>[t(T,{modelValue:n(r).display_name,"onUpdate:modelValue":s[2]||(s[2]=e=>n(r).display_name=e),type:"text",name:"name",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label"]),t(C,{label:a.$t("customers.contact_name"),class:"text-left"},{default:l(()=>[t(T,{modelValue:n(r).contact_name,"onUpdate:modelValue":s[3]||(s[3]=e=>n(r).contact_name=e),type:"text",name:"address_name",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label"]),t(C,{label:a.$t("customers.phone"),class:"text-left"},{default:l(()=>[t(T,{modelValue:n(r).phone,"onUpdate:modelValue":s[4]||(s[4]=e=>n(r).phone=e),type:"text",name:"phone",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["show"]),w(t(ee,{title:a.$t("customers.no_customers"),description:a.$t("customers.list_of_customers")},{actions:l(()=>[n(k).hasAbilities(n(v).CREATE_CUSTOMER)?(f(),y(E,{key:0,variant:"primary-outline",onClick:s[5]||(s[5]=e=>a.$router.push("/admin/customers/create"))},{left:l(e=>[t(c,{name:"PlusIcon",class:b(e.class)},null,8,["class"])]),default:l(()=>[h(" "+p(a.$t("customers.add_new_customer")),1)]),_:1})):F("",!0)]),default:l(()=>[t(Ce,{class:"mt-5 mb-4"})]),_:1},8,["title","description"]),[[D,M.value]]),w(d("div",ke,[d("div",xe,[n(u).selectedCustomers.length?(f(),y(ae,{key:0},{activator:l(()=>[d("span",Se,[h(p(a.$t("general.actions"))+" ",1),t(c,{name:"ChevronDownIcon"})])]),default:l(()=>[t(te,{onClick:Q},{default:l(()=>[t(c,{name:"TrashIcon",class:"mr-3 text-gray-600"}),h(" "+p(a.$t("general.delete")),1)]),_:1})]),_:1})):F("",!0)]),t(oe,{ref_key:"tableComponent",ref:x,class:"mt-3",data:J,columns:z.value},he({header:l(()=>[d("div",Ve,[t(O,{modelValue:P.value,"onUpdate:modelValue":s[6]||(s[6]=e=>P.value=e),variant:"primary",onChange:n(u).selectAllCustomers},null,8,["modelValue","onChange"])])]),"cell-status":l(({row:e})=>[d("div",Ie,[t(O,{id:e.data.id,modelValue:U.value,"onUpdate:modelValue":s[7]||(s[7]=re=>U.value=re),value:e.data.id,variant:"primary"},null,8,["id","modelValue","value"])])]),"cell-name":l(({row:e})=>[t(le,{to:{path:`customers/${e.data.id}/view`}},{default:l(()=>[t(L,{text:e.data.name,length:30,tag:"span",class:"font-medium text-primary-500 flex flex-col"},null,8,["text"]),t(L,{text:e.data.contact_name?e.data.contact_name:"",length:30,tag:"span",class:"text-xs text-gray-400"},null,8,["text"])]),_:2},1032,["to"])]),"cell-phone":l(({row:e})=>[d("span",null,p(e.data.phone?e.data.phone:"-"),1)]),"cell-due_amount":l(({row:e})=>[t(se,{amount:e.data.due_amount||0,currency:e.data.currency},null,8,["amount","currency"])]),"cell-created_at":l(({row:e})=>[d("span",null,p(e.data.formatted_created_at),1)]),_:2},[G()?{name:"cell-actions",fn:l(({row:e})=>[t(ve,{row:e.data,table:n(x),"load-data":I},null,8,["row","table"])]),key:"0"}:void 0]),1032,["columns"])],512),[[D,!M.value]])]),_:1})}}};export{Fe as default};
