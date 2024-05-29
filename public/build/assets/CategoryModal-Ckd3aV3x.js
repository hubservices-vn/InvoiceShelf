import{F as O,v as A,f as m,k as I,g as b,h as S,I as K,ai as P,j as X,z as N,r as d,o as q,m as U,w as u,b as $,p as V,t as w,l as a,a as n,q as H,J as Q,K as W}from"./main-ChW8_T14.js";import{u as Y}from"./category-e7sXz5yx.js";const Z={class:"flex justify-between w-full"},ee={class:"p-8 sm:p-6"},ae={class:"z-0 flex justify-end p-4 border-t border-gray-200 border-solid border-modal-bg"},ne={__name:"CategoryModal",setup(te){const o=Y(),l=O(),{t:f}=A.useI18n(),p=m(!1),C=m([]),c=m(null),g=m(null);let y=m(!1);const B=m([]),k=I(()=>({currentCategory:{name:{required:b.withMessage(f("validation.required"),S),minLength:b.withMessage(f("validation.name_min_length",{count:3}),K(3))},type:{required:b.withMessage(f("validation.required"),S)},description:{maxLength:b.withMessage(f("validation.description_maxlength",{count:255}),P(255))}}})),s=X(k,I(()=>o)),x=I(()=>{var t,e;return(t=l.data)!=null&&t.type&&(o.currentCategory.type=(e=l.data)==null?void 0:e.type),l.active||(C.value=[],c.value=null,g.value=null,p.value=!1),l.active&&l.componentName==="CategoryModal"});async function F(){if(s.value.currentCategory.$touch(),s.value.currentCategory.$invalid)return!0;const t=o.isEdit?o.updateCategory:o.addCategory;y.value=!0;const e=await t(o.currentCategory);if(y.value=!1,e.data.data&&(c.value||p.value)){let i=new FormData;i.append("category_image",JSON.stringify({name:g.value,data:c.value})),console.log(JSON.stringify({name:g.value,data:c.value})),i.append("is_category_image_removed",p.value),await o.updateCategoryImage(e.data.data.id,i),c.value=null,p.value=!1}l.refreshData&&l.refreshData(),_()}function _(){l.closeModal(),setTimeout(()=>{o.$reset(),s.value.$reset()},300)}function T(t,e,i,h){g.value=h.name,c.value=e}function D(){c.value=null,g.value=null,p.value=!0}return N(()=>o.currentCategory.type,t=>{if(!t){B.value=[];return}l.data&&(l.data.type=t),o.fetchCategories({limit:"all",type:t}).then(e=>{var i;B.value=((i=e.data)==null?void 0:i.data)||[]})}),N(()=>o.currentCategory.image_url,t=>{t&&(C.value=[{image:t}])}),(t,e)=>{const i=d("BaseIcon"),h=d("BaseInput"),v=d("BaseInputGroup"),j=d("BaseMultiselect"),G=d("BaseTreeSelect"),L=d("BaseFileUploader"),z=d("BaseTextarea"),J=d("BaseInputGrid"),M=d("BaseButton"),R=d("BaseModal");return q(),U(R,{show:x.value,onClose:_},{header:u(()=>[$("div",Z,[V(w(a(l).title)+" ",1),n(i,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:_})])]),default:u(()=>[$("form",{action:"",onSubmit:H(F,["prevent"])},[$("div",ee,[n(J,{layout:"one-column"},{default:u(()=>[n(v,{label:t.$t("expenses.category"),error:a(s).currentCategory.name.$error&&a(s).currentCategory.name.$errors[0].$message,required:""},{default:u(()=>[n(h,{modelValue:a(o).currentCategory.name,"onUpdate:modelValue":e[0]||(e[0]=r=>a(o).currentCategory.name=r),invalid:a(s).currentCategory.name.$error,type:"text",onInput:e[1]||(e[1]=r=>a(s).currentCategory.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),n(v,{label:t.$t("categories.type"),error:a(s).currentCategory.type.$error&&a(s).currentCategory.type.$errors[0].$message,required:""},{default:u(()=>{var r;return[n(j,{modelValue:a(o).currentCategory.type,"onUpdate:modelValue":e[2]||(e[2]=E=>a(o).currentCategory.type=E),options:a(o).categoryItems,"value-prop":"id",disabled:!!((r=a(l).data)!=null&&r.type),searchable:"",placeholder:t.$t("categories.select_type"),"max-height":200,class:"mt-1 md:mt-0"},null,8,["modelValue","options","disabled","placeholder"])]}),_:1},8,["label","error"]),n(v,{label:t.$t("categories.parent")},{default:u(()=>[n(G,{name:"parent_id","value-prop":"id","label-prop":"name",placeholder:t.$t("categories.select_parent"),"parent-prop":"parent_id",options:B.value,modelValue:a(o).currentCategory.parent_id,"onUpdate:modelValue":e[3]||(e[3]=r=>a(o).currentCategory.parent_id=r)},null,8,["placeholder","options","modelValue"])]),_:1},8,["label"]),n(v,{label:t.$t("categories.image")},{default:u(()=>[n(L,{modelValue:C.value,"onUpdate:modelValue":e[4]||(e[4]=r=>C.value=r),base64:"",onChange:T,onRemove:D},null,8,["modelValue"])]),_:1},8,["label"]),n(v,{label:t.$t("categories.description"),error:a(s).currentCategory.description.$error&&a(s).currentCategory.description.$errors[0].$message},{default:u(()=>[n(z,{modelValue:a(o).currentCategory.description,"onUpdate:modelValue":e[5]||(e[5]=r=>a(o).currentCategory.description=r),rows:"4",cols:"50",onInput:e[6]||(e[6]=r=>a(s).currentCategory.description.$touch())},null,8,["modelValue"])]),_:1},8,["label","error"])]),_:1})]),$("div",ae,[n(M,{type:"button",variant:"primary-outline",class:"mr-3 text-sm",onClick:_},{default:u(()=>[V(w(t.$t("general.cancel")),1)]),_:1}),n(M,{loading:a(y),disabled:a(y),variant:"primary",type:"submit"},{left:u(r=>[a(y)?W("",!0):(q(),U(i,{key:0,name:"SaveIcon",class:Q(r.class)},null,8,["class"]))]),default:u(()=>[V(" "+w(a(o).isEdit?t.$t("general.update"):t.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],32)]),_:1},8,["show"])}}};export{ne as _};
