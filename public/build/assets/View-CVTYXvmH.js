import{L as A,v as M,H as P,f as w,a5 as J,u as K,k as b,z as Q,P as W,r as d,o as c,m as h,w as s,a,l as n,J as j,p as X,t as y,b as r,bj as V,bk as Y,c as k,O as Z,N as ee,K as z}from"./main-DuDaNFOP.js";import{u as te}from"./payment-3dlO3LDH.js";import{u as ae}from"./global-Od_Pzmnv.js";import"./auth-BpWLCjHG.js";const oe={class:"fixed top-0 left-0 hidden h-full pt-16 pb-4 bg-white w-88 xl:block"},se={class:"flex items-center justify-between px-4 pt-8 pb-6 border border-gray-200 border-solid"},ne={class:"flex ml-3",role:"group","aria-label":"First group"},re={class:"px-4 py-1 pb-2 mb-2 text-sm border-b border-gray-200 border-solid"},le={class:"px-2"},de={class:"px-2"},ie={class:"px-2"},me={class:"h-full pb-32 overflow-y-scroll border-l border-gray-200 border-solid sw-scroll"},ce={class:"flex-2"},ue={class:"mb-1 text-md not-italic font-medium leading-5 text-gray-500 capitalize"},pe={class:"flex-1 whitespace-nowrap right"},ye={class:"text-sm text-right text-gray-500 non-italic"},_e={key:0,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},fe={class:"flex flex-col min-h-0 mt-8 overflow-hidden",style:{height:"75vh"}},be=["src"],Ve={__name:"View",setup(he){const u=A(),m=te(),_=ae(),{tm:F,t:ge}=M.useI18n();let f=P({}),e=P({orderBy:"",orderByField:"",payment_number:""}),g=w(!1),N=w(!1);w(!1),J("utils"),K();const C=b(()=>m.selectedViewPayment),I=b(()=>e.orderBy==="asc"||e.orderBy==null);b(()=>I.value?F("general.ascending"):F("general.descending"));const S=b(()=>f.unique_hash?`/payments/pdf/${f.unique_hash}`:!1);Q(u,()=>{$()}),U(),$(),i=W.debounce(i,500);function D(t){return u.params.id==t}async function U(){await m.fetchPayments({limit:"all"},_.companySlug),setTimeout(()=>{E()},500)}async function $(){if(u&&u.params.id){let t=await m.fetchViewPayment({id:u.params.id},_.companySlug);t.data&&Object.assign(f,t.data.data)}}function E(){const t=document.getElementById(`payment-${u.params.id}`);t&&(t.scrollIntoView({behavior:"smooth"}),t.classList.add("shake"))}async function i(){let t={};e.payment_number!==""&&e.payment_number!==null&&e.payment_number!==void 0&&(t.payment_number=e.payment_number),e.orderBy!==null&&e.orderBy!==void 0&&(t.orderBy=e.orderBy),e.orderByField!==null&&e.orderByField!==void 0&&(t.orderByField=e.orderByField),g.value=!0;try{let l=await m.searchPayment(t,_.companySlug);g.value=!1,l.data.data&&(m.payments=l.data.data)}catch{g.value=!1}}function L(){return e.orderBy==="asc"?(e.orderBy="desc",i(),!0):(e.orderBy="asc",i(),!0)}return(t,l)=>{const p=d("BaseIcon"),v=d("BaseButton"),T=d("BasePageHeader"),q=d("BaseInput"),B=d("BaseRadio"),x=d("BaseInputGroup"),G=d("BaseFormatMoney"),H=d("router-link"),O=d("BasePage");return c(),h(O,{class:"xl:pl-96"},{default:s(()=>[a(T,{title:C.value.payment_number},{actions:s(()=>[a(v,{disabled:n(N),variant:"primary-outline",tag:"a",download:"",href:`/payments/pdf/${n(f).unique_hash}`},{left:s(o=>[a(p,{name:"DownloadIcon",class:j(o.class)},null,8,["class"]),X(" "+y(t.$t("general.download")),1)]),_:1},8,["disabled","href"])]),_:1},8,["title"]),r("div",oe,[r("div",se,[a(q,{modelValue:n(e).payment_number,"onUpdate:modelValue":l[0]||(l[0]=o=>n(e).payment_number=o),placeholder:t.$t("general.search"),type:"text",variant:"gray",onInput:i},{right:s(()=>[a(p,{name:"SearchIcon",class:"h-5 text-gray-400"})]),_:1},8,["modelValue","placeholder"]),r("div",ne,[a(Y,{position:"bottom-start","width-class":"w-50","position-class":"left-0"},{activator:s(()=>[a(v,{variant:"gray"},{default:s(()=>[a(p,{name:"FilterIcon",class:"h-5"})]),_:1})]),default:s(()=>[r("div",re,y(t.$t("general.sort_by")),1),r("div",le,[a(V,{class:"rounded-md pt-3 hover:rounded-md"},{default:s(()=>[a(x,{class:"-mt-3 font-normal"},{default:s(()=>[a(B,{id:"filter_invoice_number",modelValue:n(e).orderByField,"onUpdate:modelValue":[l[1]||(l[1]=o=>n(e).orderByField=o),i],label:t.$t("invoices.title"),size:"sm",name:"filter",value:"invoice_number"},null,8,["modelValue","label"])]),_:1})]),_:1})]),r("div",de,[a(V,{class:"rounded-md pt-3 hover:rounded-md"},{default:s(()=>[a(x,{class:"-mt-3 font-normal"},{default:s(()=>[a(B,{id:"filter_payment_date",modelValue:n(e).orderByField,"onUpdate:modelValue":[l[2]||(l[2]=o=>n(e).orderByField=o),i],label:t.$t("payments.date"),size:"sm",name:"filter",value:"payment_date"},null,8,["modelValue","label"])]),_:1})]),_:1})]),r("div",ie,[a(V,{class:"rounded-md pt-3 hover:rounded-md"},{default:s(()=>[a(x,{class:"-mt-3 font-normal"},{default:s(()=>[a(B,{id:"filter_payment_number",modelValue:n(e).orderByField,"onUpdate:modelValue":[l[3]||(l[3]=o=>n(e).orderByField=o),i],label:t.$t("payments.payment_number"),size:"sm",name:"filter",value:"payment_number"},null,8,["modelValue","label"])]),_:1})]),_:1})])]),_:1}),a(v,{class:"ml-1",variant:"white",onClick:L},{default:s(()=>[I.value?(c(),h(p,{key:0,name:"SortAscendingIcon",class:"h-5"})):(c(),h(p,{key:1,name:"SortDescendingIcon",class:"h-5"}))]),_:1})])]),r("div",me,[(c(!0),k(ee,null,Z(n(m).payments,(o,R)=>(c(),h(H,{id:"payment-"+o.id,key:R,to:`/${n(_).companySlug}/customer/payments/${o.id}/view`,class:j(["flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-primary-500 border-solid":D(o.id)}]),style:{"border-bottom":"1px solid rgba(185, 193, 209, 0.41)"}},{default:s(()=>[r("div",ce,[r("div",ue,y(o.payment_number),1)]),r("div",pe,[a(G,{class:"mb-2 text-xl not-italic font-semibold leading-8 text-right text-gray-900 block",amount:o.amount,currency:o.currency},null,8,["amount","currency"]),r("div",ye,y(o.formatted_payment_date),1)])]),_:2},1032,["id","to","class"]))),128)),n(m).payments.length?z("",!0):(c(),k("p",_e,y(t.$t("payments.no_matching_payments")),1))])]),r("div",fe,[S.value?(c(),k("iframe",{key:0,src:S.value,class:"flex-1 border border-gray-400 border-solid rounded-md"},null,8,be)):z("",!0)])]),_:1})}}};export{Ve as default};
