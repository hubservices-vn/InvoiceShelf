import{v as O,a5 as Q,L as Y,f as y,H as Z,k as I,a9 as ee,r as l,o as i,m as c,w as t,a as e,l as d,J as w,p as _,t as p,K as C,ac as S,ad as F,b as P}from"./main-BAQDmuOe.js";import te from"./BaseTable-CHnAoEJO.js";import{u as ae}from"./global-bm37jdWF.js";import{u as se}from"./estimate-BHzoxPPS.js";import{_ as le}from"./ObservatoryIcon-B3E4lu7M.js";import"./auth-BNe0WAN3.js";const oe=P("div",{class:"hidden w-8 h-0 mx-4 border border-gray-400 border-solid xl:block",style:{"margin-top":"1.5rem"}},null,-1),ne={class:"relative table-container"},pe={__name:"Index",setup(re){const{t:f}=O.useI18n();Q("utils"),Y();const E=y(null);let m=y(!1),h=y(!0);const x=y(["DRAFT","SENT","VIEWED","EXPIRED","ACCEPTED","REJECTED"]),s=Z({status:"",from_date:"",to_date:"",estimate_number:""}),v=ae(),b=se(),H=I(()=>[{key:"estimate_date",label:f("estimates.date"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"estimate_number",label:f("estimates.number",2)},{key:"status",label:f("estimates.status")},{key:"total",label:f("estimates.total")},{key:"actions",thClass:"text-right",tdClass:"text-right text-sm font-medium",sortable:!1}]),k=I(()=>!b.totalEstimates&&!h.value);I(()=>v.currency),ee(s,()=>{T()},{debounce:500});function N(){E.value.refresh()}function T(){N()}function D(){s.status="",s.from_date="",s.to_date="",s.estimate_number=""}function R(){m.value&&D(),m.value=!m.value}async function U({page:o,sort:n}){let B={status:s.status,estimate_number:s.estimate_number,from_date:s.from_date,to_date:s.to_date,orderByField:n.fieldName||"created_at",orderBy:n.order||"desc",page:o};h.value=!0;let u=await b.fetchEstimate(B,v.companySlug);return h.value=!1,{data:u.data.data,pagination:{totalPages:u.data.meta.last_page,currentPage:o,totalCount:u.data.meta.total,limit:10}}}return(o,n)=>{const B=l("BaseBreadcrumbItem"),u=l("BaseBreadcrumb"),r=l("BaseIcon"),z=l("BaseButton"),G=l("BasePageHeader"),W=l("BaseSelectInput"),g=l("BaseInputGroup"),j=l("BaseInput"),V=l("BaseDatePicker"),A=l("BaseFilterWrapper"),J=l("BaseEmptyPlaceholder"),$=l("router-link"),M=l("BaseEstimateStatusBadge"),X=l("BaseFormatMoney"),K=l("BaseDropdownItem"),L=l("BaseDropdown"),q=l("BasePage");return i(),c(q,null,{default:t(()=>[e(G,{title:o.$t("estimates.title")},{actions:t(()=>[d(b).totalEstimates?(i(),c(z,{key:0,variant:"primary-outline",onClick:R},{right:t(a=>[d(m)?(i(),c(r,{key:1,name:"XIcon",class:w(a.class)},null,8,["class"])):(i(),c(r,{key:0,name:"FilterIcon",class:w(a.class)},null,8,["class"]))]),default:t(()=>[_(p(o.$t("general.filter"))+" ",1)]),_:1})):C("",!0)]),default:t(()=>[e(u,null,{default:t(()=>[e(B,{title:o.$t("general.home"),to:`/${d(v).companySlug}/customer/dashboard`},null,8,["title","to"]),e(B,{title:o.$t("estimates.estimate",2),to:"#",active:""},null,8,["title"])]),_:1})]),_:1},8,["title"]),S(e(A,{onClear:D},{default:t(()=>[e(g,{label:o.$t("estimates.status"),class:"px-3"},{default:t(()=>[e(W,{modelValue:s.status,"onUpdate:modelValue":n[0]||(n[0]=a=>s.status=a),options:x.value,searchable:"","show-labels":!1,"allow-empty":!1,placeholder:o.$t("general.select_a_status")},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),e(g,{label:o.$t("estimates.estimate_number"),color:"black-light",class:"px-3 mt-2"},{default:t(()=>[e(j,{modelValue:s.estimate_number,"onUpdate:modelValue":n[1]||(n[1]=a=>s.estimate_number=a)},{default:t(()=>[e(r,{name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}),e(r,{name:"HashtagIcon",class:"h-5 mr-3 text-gray-600"})]),_:1},8,["modelValue"])]),_:1},8,["label"]),e(g,{label:o.$t("general.from"),class:"px-3"},{default:t(()=>[e(V,{modelValue:s.from_date,"onUpdate:modelValue":n[2]||(n[2]=a=>s.from_date=a),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"]),oe,e(g,{label:o.$t("general.to"),class:"px-3"},{default:t(()=>[e(V,{modelValue:s.to_date,"onUpdate:modelValue":n[3]||(n[3]=a=>s.to_date=a),"calendar-button":!0,"calendar-button-icon":"calendar"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},512),[[F,d(m)]]),k.value?(i(),c(J,{key:0,title:o.$t("estimates.no_estimates"),description:o.$t("estimates.list_of_estimates")},{default:t(()=>[e(le,{class:"mt-5 mb-4"})]),_:1},8,["title","description"])):C("",!0),S(P("div",ne,[e(te,{ref_key:"table",ref:E,data:U,columns:H.value,"placeholder-count":d(b).totalEstimates>=20?10:5,class:"mt-10"},{"cell-estimate_date":t(({row:a})=>[_(p(a.data.formatted_estimate_date),1)]),"cell-estimate_number":t(({row:a})=>[e($,{to:{path:`estimates/${a.data.id}/view`},class:"font-medium text-primary-500"},{default:t(()=>[_(p(a.data.estimate_number),1)]),_:2},1032,["to"])]),"cell-status":t(({row:a})=>[e(M,{status:a.data.status,class:"px-3 py-1"},{default:t(()=>[_(p(a.data.status),1)]),_:2},1032,["status"])]),"cell-total":t(({row:a})=>[e(X,{amount:a.data.total},null,8,["amount"])]),"cell-actions":t(({row:a})=>[e(L,null,{activator:t(()=>[e(r,{name:"DotsHorizontalIcon",class:"h-5 text-gray-500"})]),default:t(()=>[e($,{to:`estimates/${a.data.id}/view`},{default:t(()=>[e(K,null,{default:t(()=>[e(r,{name:"EyeIcon",class:"h-5 mr-3 text-gray-600"}),_(" "+p(o.$t("general.view")),1)]),_:1})]),_:2},1032,["to"])]),_:2},1024)]),_:1},8,["columns","placeholder-count"])],512),[[F,!k.value]])]),_:1})}}};export{pe as default};