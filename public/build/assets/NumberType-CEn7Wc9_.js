import{k as s,r,o as d,m as c}from"./main-DuDaNFOP.js";const i={__name:"NumberType",props:{modelValue:{type:[String,Number],default:null}},emits:["update:modelValue"],setup(l,{emit:u}){const a=l,n=u,e=s({get:()=>a.modelValue,set:t=>{n("update:modelValue",t)}});return(t,o)=>{const m=r("BaseInput");return d(),c(m,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=p=>e.value=p),type:"number"},null,8,["modelValue"])}}};export{i as default};
