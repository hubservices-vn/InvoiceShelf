import{L as x,v as I,f as C,r as m,o as b,c as y,a as o,w as r,b as d,t as p,l as e,J as h,p as F,K as v,m as z,q as k}from"./main-DuDaNFOP.js";import{a as w,u as S}from"./global-Od_Pzmnv.js";import"./auth-BpWLCjHG.js";const D={class:"mb-6"},j={class:"font-bold text-left"},A={class:"mt-2 text-sm leading-snug text-left text-gray-500",style:{"max-width":"680px"}},N={class:"grid grid-cols-5 gap-4 mb-8"},G={class:"col-span-5 text-lg font-semibold text-left lg:col-span-1"},T={class:"grid col-span-5 lg:col-span-4 gap-y-6 gap-x-4 md:grid-cols-6"},q={class:"md:col-span-3"},E={class:"flex items-center justify-start mb-6 md:justify-end md:mb-0"},J={class:"p-1"},K={class:"grid grid-cols-5 gap-4 mb-8"},L={class:"col-span-5 text-lg font-semibold text-left lg:col-span-1"},R={key:0,class:"grid col-span-5 lg:col-span-4 gap-y-6 gap-x-4 md:grid-cols-6"},H={class:"md:col-span-3"},O={class:"flex items-center justify-end"},Z={__name:"AddressInformation",setup(P){const l=w();x();const{tm:$,t:Q}=I.useI18n(),g=S();let u=C(!1);g.fetchCountries();function B(){u.value=!0;let a=l.userForm;l.updateCurrentUser({data:a,message:$("customers.address_updated_message")}).then(s=>{u.value=!1}).catch(s=>{u.value=!1})}return(a,s)=>{const i=m("BaseInput"),n=m("BaseInputGroup"),f=m("BaseMultiselect"),c=m("BaseTextarea"),U=m("BaseDivider"),_=m("BaseIcon"),V=m("BaseButton"),M=m("BaseCard");return b(),y("form",{class:"relative h-full mt-4",onSubmit:k(B,["prevent"])},[o(M,null,{default:r(()=>[d("div",D,[d("h6",j,p(a.$t("settings.menu_title.address_information")),1),d("p",A,p(a.$t("settings.address_information.section_description")),1)]),d("div",N,[d("h6",G,p(a.$t("customers.billing_address")),1),d("div",T,[o(n,{label:a.$t("customers.name"),class:"w-full md:col-span-3"},{default:r(()=>[o(i,{modelValue:e(l).userForm.billing.name,"onUpdate:modelValue":s[0]||(s[0]=t=>e(l).userForm.billing.name=t),modelModifiers:{trim:!0},type:"text",class:"w-full",name:"address_name"},null,8,["modelValue"])]),_:1},8,["label"]),o(n,{label:a.$t("customers.country"),class:"md:col-span-3"},{default:r(()=>[o(f,{modelValue:e(l).userForm.billing.country_id,"onUpdate:modelValue":s[1]||(s[1]=t=>e(l).userForm.billing.country_id=t),"value-prop":"id",label:"name","track-by":"name","resolve-on-load":"",searchable:"",options:e(g).countries,placeholder:a.$t("general.select_country"),class:"w-full"},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),o(n,{label:a.$t("customers.state"),class:"md:col-span-3"},{default:r(()=>[o(i,{modelValue:e(l).userForm.billing.state,"onUpdate:modelValue":s[2]||(s[2]=t=>e(l).userForm.billing.state=t),name:"billing.state",type:"text"},null,8,["modelValue"])]),_:1},8,["label"]),o(n,{label:a.$t("customers.city"),class:"md:col-span-3"},{default:r(()=>[o(i,{modelValue:e(l).userForm.billing.city,"onUpdate:modelValue":s[3]||(s[3]=t=>e(l).userForm.billing.city=t),name:"billing.city",type:"text"},null,8,["modelValue"])]),_:1},8,["label"]),o(n,{label:a.$t("customers.address"),class:"md:col-span-3"},{default:r(()=>[o(c,{modelValue:e(l).userForm.billing.address_street_1,"onUpdate:modelValue":s[4]||(s[4]=t=>e(l).userForm.billing.address_street_1=t),modelModifiers:{trim:!0},placeholder:a.$t("general.street_1"),type:"text",name:"billing_street1","container-class":"mt-3"},null,8,["modelValue","placeholder"]),o(c,{modelValue:e(l).userForm.billing.address_street_2,"onUpdate:modelValue":s[5]||(s[5]=t=>e(l).userForm.billing.address_street_2=t),modelModifiers:{trim:!0},placeholder:a.$t("general.street_2"),type:"text",class:"mt-3",name:"billing_street2","container-class":"mt-3"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d("div",q,[o(n,{label:a.$t("customers.phone"),class:"text-left"},{default:r(()=>[o(i,{modelValue:e(l).userForm.billing.phone,"onUpdate:modelValue":s[6]||(s[6]=t=>e(l).userForm.billing.phone=t),modelModifiers:{trim:!0},type:"text",name:"phone"},null,8,["modelValue"])]),_:1},8,["label"]),o(n,{label:a.$t("customers.zip_code"),class:"mt-2 text-left"},{default:r(()=>[o(i,{modelValue:e(l).userForm.billing.zip,"onUpdate:modelValue":s[7]||(s[7]=t=>e(l).userForm.billing.zip=t),modelModifiers:{trim:!0},type:"text",name:"zip"},null,8,["modelValue"])]),_:1},8,["label"])])])]),o(U,{class:"mb-5 md:mb-8"}),d("div",E,[d("div",J,[o(V,{ref:"sameAddress",type:"button",onClick:s[8]||(s[8]=t=>e(l).copyAddress(!0))},{left:r(t=>[o(_,{name:"DocumentDuplicateIcon",class:h(t.class)},null,8,["class"])]),default:r(()=>[F(" "+p(a.$t("customers.copy_billing_address")),1)]),_:1},512)])]),d("div",K,[d("h6",L,p(a.$t("customers.shipping_address")),1),e(l).userForm.shipping?(b(),y("div",R,[o(n,{label:a.$t("customers.name"),class:"md:col-span-3"},{default:r(()=>[o(i,{modelValue:e(l).userForm.shipping.name,"onUpdate:modelValue":s[9]||(s[9]=t=>e(l).userForm.shipping.name=t),modelModifiers:{trim:!0},type:"text",name:"address_name"},null,8,["modelValue"])]),_:1},8,["label"]),o(n,{label:a.$t("customers.country"),class:"md:col-span-3"},{default:r(()=>[o(f,{modelValue:e(l).userForm.shipping.country_id,"onUpdate:modelValue":s[10]||(s[10]=t=>e(l).userForm.shipping.country_id=t),"value-prop":"id",label:"name","track-by":"name","resolve-on-load":"",searchable:"",options:e(g).countries,placeholder:a.$t("general.select_country"),class:"w-full"},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"]),o(n,{label:a.$t("customers.state"),class:"md:col-span-3"},{default:r(()=>[o(i,{modelValue:e(l).userForm.shipping.state,"onUpdate:modelValue":s[11]||(s[11]=t=>e(l).userForm.shipping.state=t),name:"shipping.state",type:"text"},null,8,["modelValue"])]),_:1},8,["label"]),o(n,{label:a.$t("customers.city"),class:"md:col-span-3"},{default:r(()=>[o(i,{modelValue:e(l).userForm.shipping.city,"onUpdate:modelValue":s[12]||(s[12]=t=>e(l).userForm.shipping.city=t),name:"shipping.city",type:"text"},null,8,["modelValue"])]),_:1},8,["label"]),o(n,{label:a.$t("customers.address"),class:"md:col-span-3"},{default:r(()=>[o(c,{modelValue:e(l).userForm.shipping.address_street_1,"onUpdate:modelValue":s[13]||(s[13]=t=>e(l).userForm.shipping.address_street_1=t),modelModifiers:{trim:!0},type:"text",placeholder:a.$t("general.street_1"),name:"shipping_street1"},null,8,["modelValue","placeholder"]),o(c,{modelValue:e(l).userForm.shipping.address_street_2,"onUpdate:modelValue":s[14]||(s[14]=t=>e(l).userForm.shipping.address_street_2=t),modelModifiers:{trim:!0},type:"text",placeholder:a.$t("general.street_2"),name:"shipping_street2",class:"mt-3"},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),d("div",H,[o(n,{label:a.$t("customers.phone"),class:"text-left"},{default:r(()=>[o(i,{modelValue:e(l).userForm.shipping.phone,"onUpdate:modelValue":s[15]||(s[15]=t=>e(l).userForm.shipping.phone=t),modelModifiers:{trim:!0},type:"text",name:"phone"},null,8,["modelValue"])]),_:1},8,["label"]),o(n,{label:a.$t("customers.zip_code"),class:"mt-2 text-left"},{default:r(()=>[o(i,{modelValue:e(l).userForm.shipping.zip,"onUpdate:modelValue":s[16]||(s[16]=t=>e(l).userForm.shipping.zip=t),modelModifiers:{trim:!0},type:"text",name:"zip"},null,8,["modelValue"])]),_:1},8,["label"])])])):v("",!0)]),d("div",O,[o(V,{loading:e(u),disabled:e(u)},{left:r(t=>[e(u)?v("",!0):(b(),z(_,{key:0,name:"SaveIcon",class:h(t.class)},null,8,["class"]))]),default:r(()=>[F(" "+p(a.$t("general.save")),1)]),_:1},8,["loading","disabled"])])]),_:1})],32)}}};export{Z as default};
