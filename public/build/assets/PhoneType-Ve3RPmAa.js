import{k as s,r,o as d,m as c}from"./main-DuDaNFOP.js";const i={__name:"PhoneType",props:{modelValue:{type:[String,Number],default:null}},emits:["update:modelValue"],setup(l,{emit:a}){const u=l,n=a,e=s({get:()=>u.modelValue,set:t=>{n("update:modelValue",t)}});return(t,o)=>{const p=r("BaseInput");return d(),c(p,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=m=>e.value=m),type:"tel"},null,8,["modelValue"])}}};export{i as default};
