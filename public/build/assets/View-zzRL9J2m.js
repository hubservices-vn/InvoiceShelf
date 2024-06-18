import{L as Q,v as W,H as j,f as v,a4 as X,u as Y,k as B,z as Z,P as ee,r as d,o as u,m as y,w as s,a,l as n,J as z,p as V,t as m,K as k,b as l,bl as F,bm as te,c as S,O as oe,N as ae}from"./main-CO79g86p.js";import{u as se}from"./invoice-BsHs9lbZ.js";import{u as ne}from"./global-CBIbK4fW.js";import"./auth-BdqDFkj5.js";const re={class:"fixed top-0 left-0 hidden h-full pt-16 pb-4 bg-white w-88 xl:block"},le={class:"flex items-center justify-between px-4 pt-8 pb-6 border border-gray-200 border-solid"},ie={class:"flex ml-3",role:"group","aria-label":"First group"},de={class:"px-4 py-1 pb-2 mb-2 text-sm border-b border-gray-200 border-solid"},ce={class:"px-2"},ue={class:"px-2"},me={class:"px-2"},pe={class:"h-full pb-32 overflow-y-scroll border-l border-gray-200 border-solid sw-scroll"},_e={class:"flex-2"},fe={class:"mb-1 not-italic font-medium leading-5 text-gray-500 capitalize text-md"},ve={class:"flex-1 whitespace-nowrap right"},ye={class:"text-sm text-right text-gray-500 non-italic"},be={key:0,class:"flex justify-center px-4 mt-5 text-sm text-gray-600"},he={class:"flex flex-col min-h-0 mt-8 overflow-hidden",style:{height:"75vh"}},ge=["src"],ke={__name:"View",setup(Be){const p=Q(),i=se(),_=ne(),{tm:$}=W.useI18n();let b=j({}),t=j({orderBy:"",orderByField:"",invoice_number:""});v(null),v(null);let w=v(!1),N=v(!1);v(!1),X("utils"),Y();const R=B(()=>i.selectedViewInvoice),P=B(()=>t.orderBy==="asc"||t.orderBy==null);B(()=>P.value?$("general.ascending"):$("general.descending"));const D=B(()=>b.unique_hash?`/invoices/pdf/${b.unique_hash}`:!1);Z(p,()=>{C()}),E(),C(),c=ee.debounce(c,500);function U(e){return p.params.id==e}async function E(){await i.fetchInvoices({limit:"all"},_.companySlug),setTimeout(()=>{L()},500)}async function C(){if(p&&p.params.id){let e=await i.fetchViewInvoice({id:p.params.id},_.companySlug);e.data&&Object.assign(b,e.data.data)}}function L(){const e=document.getElementById(`invoice-${p.params.id}`);e&&(e.scrollIntoView({behavior:"smooth"}),e.classList.add("shake"))}async function c(){let e={};t.invoice_number!==""&&t.invoice_number!==null&&t.invoice_number!==void 0&&(e.invoice_number=t.invoice_number),t.orderBy!==null&&t.orderBy!==void 0&&(e.orderBy=t.orderBy),t.orderByField!==null&&t.orderByField!==void 0&&(e.orderByField=t.orderByField),w.value=!0;try{let r=await i.searchInvoice(e,_.companySlug);w.value=!1,r.data.data&&(i.invoices=r.data.data)}catch{w.value=!1}}function T(){return t.orderBy==="asc"?(t.orderBy="desc",c(),!0):(t.orderBy="asc",c(),!0)}function q(){router.push({name:"invoice.portal.payment",params:{id:i.selectedViewInvoice.id,company:i.selectedViewInvoice.company.slug}})}return(e,r)=>{const f=d("BaseIcon"),h=d("BaseButton"),A=d("BasePageHeader"),G=d("BaseInput"),I=d("BaseRadio"),x=d("BaseInputGroup"),H=d("BaseInvoiceStatusBadge"),M=d("BaseFormatMoney"),O=d("router-link"),J=d("BasePage");return u(),y(J,{class:"xl:pl-96"},{default:s(()=>[a(A,{title:R.value.invoice_number},{actions:s(()=>{var o,g;return[a(h,{disabled:n(N),variant:"primary-outline",class:"mr-2",tag:"a",href:`/invoices/pdf/${n(b).unique_hash}`,download:""},{left:s(K=>[a(f,{name:"DownloadIcon",class:z(K.class)},null,8,["class"]),V(" "+m(e.$t("invoices.download")),1)]),_:1},8,["disabled","href"]),((g=(o=n(i))==null?void 0:o.selectedViewInvoice)==null?void 0:g.paid_status)!=="PAID"&&n(_).enabledModules.includes("Payments")?(u(),y(h,{key:0,variant:"primary",onClick:q},{default:s(()=>[V(m(e.$t("invoices.pay_invoice")),1)]),_:1})):k("",!0)]}),_:1},8,["title"]),l("div",re,[l("div",le,[a(G,{modelValue:n(t).invoice_number,"onUpdate:modelValue":r[0]||(r[0]=o=>n(t).invoice_number=o),placeholder:e.$t("general.search"),type:"text",variant:"gray",onInput:c},{right:s(()=>[a(f,{name:"SearchIcon",class:"h-5 text-gray-400"})]),_:1},8,["modelValue","placeholder"]),l("div",ie,[a(te,{position:"bottom-start","width-class":"w-50","position-class":"left-0"},{activator:s(()=>[a(h,{variant:"gray"},{default:s(()=>[a(f,{name:"FilterIcon",class:"h-5"})]),_:1})]),default:s(()=>[l("div",de,m(e.$t("general.sort_by")),1),l("div",ce,[a(F,{class:"pt-3 rounded-md hover:rounded-md"},{default:s(()=>[a(x,{class:"-mt-3 font-normal"},{default:s(()=>[a(I,{id:"filter_invoice_date",modelValue:n(t).orderByField,"onUpdate:modelValue":[r[1]||(r[1]=o=>n(t).orderByField=o),c],label:e.$t("invoices.invoice_date"),name:"filter",size:"sm",value:"invoice_date"},null,8,["modelValue","label"])]),_:1})]),_:1})]),l("div",ue,[a(F,{class:"pt-3 rounded-md hover:rounded-md"},{default:s(()=>[a(x,{class:"-mt-3 font-normal"},{default:s(()=>[a(I,{id:"filter_due_date",modelValue:n(t).orderByField,"onUpdate:modelValue":[r[2]||(r[2]=o=>n(t).orderByField=o),c],label:e.$t("invoices.due_date"),name:"filter",size:"sm",value:"due_date"},null,8,["modelValue","label"])]),_:1})]),_:1})]),l("div",me,[a(F,{class:"pt-3 rounded-md hover:rounded-md"},{default:s(()=>[a(x,{class:"-mt-3 font-normal"},{default:s(()=>[a(I,{id:"filter_invoice_number",modelValue:n(t).orderByField,"onUpdate:modelValue":[r[3]||(r[3]=o=>n(t).orderByField=o),c],label:e.$t("invoices.invoice_number"),size:"sm",name:"filter",value:"invoice_number"},null,8,["modelValue","label"])]),_:1})]),_:1})])]),_:1}),a(h,{class:"ml-1",variant:"white",onClick:T},{default:s(()=>[P.value?(u(),y(f,{key:0,name:"SortAscendingIcon",class:"h-5"})):(u(),y(f,{key:1,name:"SortDescendingIcon",class:"h-5"}))]),_:1})])]),l("div",pe,[(u(!0),S(ae,null,oe(n(i).invoices,(o,g)=>(u(),y(O,{id:"invoice-"+o.id,key:g,to:`/${n(_).companySlug}/customer/invoices/${o.id}/view`,class:z(["flex justify-between p-4 items-center cursor-pointer hover:bg-gray-100 border-l-4 border-transparent",{"bg-gray-100 border-l-4 border-primary-500 border-solid":U(o.id)}]),style:{"border-bottom":"1px solid rgba(185, 193, 209, 0.41)"}},{default:s(()=>[l("div",_e,[l("div",fe,m(o.invoice_number),1),a(H,{status:o.status},{default:s(()=>[V(m(o.status),1)]),_:2},1032,["status"])]),l("div",ve,[a(M,{class:"mb-2 text-xl not-italic font-semibold leading-8 text-right text-gray-900 block",amount:o.total,currency:o.currency},null,8,["amount","currency"]),l("div",ye,m(o.formatted_invoice_date),1)])]),_:2},1032,["id","to","class"]))),128)),n(i).invoices.length?k("",!0):(u(),S("p",be,m(e.$t("invoices.no_matching_invoices")),1))])]),l("div",he,[D.value?(u(),S("iframe",{key:0,ref:"report",src:D.value,class:"flex-1 border border-gray-400 border-solid rounded-md",onClick:r[4]||(r[4]=(...o)=>e.ViewReportsPDF&&e.ViewReportsPDF(...o))},null,8,ge)):k("",!0)])]),_:1})}}};export{ke as default};