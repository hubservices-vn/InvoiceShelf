import{a7 as O,u as U,v as M,au as Y,L as H,M as z,F as V,a5 as L,r as n,o as p,m as y,w as t,l as i,a as s,Q as T,p as D,t as w,K as P,E as R,av as J,f as $,k as A,a6 as N,J as K,c as Q}from"./main-DuDaNFOP.js";import{_ as q}from"./TaxTypeModal-CFYt10Rh.js";const G={__name:"TaxTypeIndexDropdown",props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:null}},setup(S){const a=S,f=O();U();const{t:c}=M.useI18n(),B=Y(),x=H(),b=z(),l=V();L("utils");async function v(r){await B.fetchTaxType(r),l.openModal({title:c("settings.tax_types.edit_tax"),componentName:"TaxTypeModal",size:"sm",refreshData:a.loadData&&a.loadData})}function E(r){f.openDialog({title:c("general.are_you_sure"),message:c("settings.tax_types.confirm_delete"),yesLabel:c("general.ok"),noLabel:c("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async o=>{if(o){if((await B.deleteTaxType(r)).data.success)return a.loadData&&a.loadData(),!0;a.loadData&&a.loadData()}})}return(r,o)=>{const d=n("BaseIcon"),C=n("BaseButton"),h=n("BaseDropdownItem"),k=n("BaseDropdown");return p(),y(k,null,{activator:t(()=>[i(x).name==="tax-types.view"?(p(),y(C,{key:0,variant:"primary"},{default:t(()=>[s(d,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(p(),y(d,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:t(()=>[i(b).hasAbilities(i(T).EDIT_TAX_TYPE)?(p(),y(h,{key:0,onClick:o[0]||(o[0]=e=>v(S.row.id))},{default:t(()=>[s(d,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),D(" "+w(r.$t("general.edit")),1)]),_:1})):P("",!0),i(b).hasAbilities(i(T).DELETE_TAX_TYPE)?(p(),y(h,{key:1,onClick:o[1]||(o[1]=e=>E(S.row.id))},{default:t(()=>[s(d,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),D(" "+w(r.$t("general.delete")),1)]),_:1})):P("",!0)]),_:1})}}},W={key:0},te={__name:"TaxTypesSetting",setup(S){const{t:a}=M.useI18n();L("utils");const f=R(),c=Y(),B=V(),x=z(),b=J(),l=$(null),v=$(f.selectedCompanySettings.tax_per_item),E=A(()=>[{key:"name",label:a("settings.tax_types.tax_name"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"percent",label:a("settings.tax_types.percent"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"actions",label:"",tdClass:"text-right text-sm font-medium",sortable:!1}]),r=A(()=>f.selectedCompanySettings.sales_tax_us_enabled==="YES"&&b.salesTaxUSEnabled),o=A({get:()=>v.value==="YES",set:async e=>{const m=e?"YES":"NO";let _={settings:{tax_per_item:m}};v.value=m,await f.updateCompanySettings({data:_,message:"general.setting_updated"})}});function d(){return x.hasAbilities([T.DELETE_TAX_TYPE,T.EDIT_TAX_TYPE])}async function C({page:e,filter:m,sort:_}){let I={orderByField:_.fieldName||"created_at",orderBy:_.order||"desc",page:e},g=await c.fetchTaxTypes(I);return{data:g.data.data,pagination:{totalPages:g.data.meta.last_page,currentPage:e,totalCount:g.data.meta.total,limit:5}}}async function h(){l.value&&l.value.refresh()}function k(){B.openModal({title:a("settings.tax_types.add_tax"),componentName:"TaxTypeModal",size:"sm",refreshData:l.value&&l.value.refresh})}return(e,m)=>{const _=n("BaseIcon"),I=n("BaseButton"),g=n("BaseTable"),X=n("BaseDivider"),j=n("BaseSwitchSection"),F=n("BaseSettingCard");return p(),y(F,{title:e.$t("settings.tax_types.title"),description:e.$t("settings.tax_types.description")},N({default:t(()=>[s(q),s(g,{ref_key:"table",ref:l,class:"mt-16",data:C,columns:E.value},N({"cell-percent":t(({row:u})=>[D(w(u.data.percent)+" % ",1)]),_:2},[d()?{name:"cell-actions",fn:t(({row:u})=>[s(G,{row:u.data,table:l.value,"load-data":h},null,8,["row","table"])]),key:"0"}:void 0]),1032,["columns"]),i(x).currentUser.is_owner?(p(),Q("div",W,[s(X,{class:"mt-8 mb-2"}),s(j,{modelValue:o.value,"onUpdate:modelValue":m[0]||(m[0]=u=>o.value=u),disabled:r.value,title:e.$t("settings.tax_types.tax_per_item"),description:e.$t("settings.tax_types.tax_setting_description")},null,8,["modelValue","disabled","title","description"])])):P("",!0)]),_:2},[i(x).hasAbilities(i(T).CREATE_TAX_TYPE)?{name:"action",fn:t(()=>[s(I,{type:"submit",variant:"primary-outline",onClick:k},{left:t(u=>[s(_,{class:K(u.class),name:"PlusIcon"},null,8,["class"])]),default:t(()=>[D(" "+w(e.$t("settings.tax_types.add_new_tax")),1)]),_:1})]),key:"0"}:void 0]),1032,["title","description"])}}};export{te as default};
