import{a4 as T,s as g,a1 as $,F as X,u as A,aq as H,as as J,L as O,v as R,f as E,H as K,k as B,g as _,h as S,I as Q,j as W,z as Y,X as Z,r as p,o as ee,m as te,w as m,b as I,p as b,t as C,l as o,a as l,q as ae,J as oe}from"./main-DuDaNFOP.js";import{u as ne}from"./payment-CKRWkXts.js";const se=(M=!1)=>(M?window.pinia.defineStore:T)({id:"notes",state:()=>({notes:[],currentNote:{id:null,type:"",name:"",notes:""}}),getters:{isEdit:n=>!!n.currentNote.id},actions:{resetCurrentNote(){this.currentNote={type:"",name:"",notes:""}},fetchNotes(n){return new Promise((e,u)=>{g.get("/api/v1/notes",{params:n}).then(t=>{this.notes=t.data.data,e(t)}).catch(t=>{$(t),u(t)})})},fetchNote(n){return new Promise((e,u)=>{g.get(`/api/v1/notes/${n}`).then(t=>{this.currentNote=t.data.data,e(t)}).catch(t=>{$(t),u(t)})})},addNote(n){return new Promise((e,u)=>{g.post("/api/v1/notes",n).then(t=>{this.notes.push(t.data),e(t)}).catch(t=>{$(t),u(t)})})},updateNote(n){return new Promise((e,u)=>{g.put(`/api/v1/notes/${n.id}`,n).then(t=>{if(t.data){let N=this.notes.findIndex(i=>i.id===t.data.data.id);this.notes[N]=n.notes}e(t)}).catch(t=>{$(t),u(t)})})},deleteNote(n){return new Promise((e,u)=>{g.delete(`/api/v1/notes/${n}`).then(t=>{let N=this.notes.findIndex(i=>i.id===n);this.notes.splice(N,1),e(t)}).catch(t=>{$(t),u(t)})})}}})(),re={class:"flex justify-between w-full"},ie={class:"px-8 py-8 sm:p-6"},ue={class:"z-0 flex justify-end px-4 py-4 border-t border-solid border-gray-light"},de={__name:"NoteModal",setup(M){const c=X(),n=A(),e=se(),u=H(),t=ne(),N=J(),i=O(),{t:v}=R.useI18n();let f=E(!1);const x=K(["Invoice","Estimate","Payment"]);let y=E(["customer","customerCustom"]);const z=B(()=>c.active&&c.componentName==="NoteModal"),k=B(()=>({currentNote:{name:{required:_.withMessage(v("validation.required"),S),minLength:_.withMessage(v("validation.name_min_length",{count:3}),Q(3))},notes:{required:_.withMessage(v("validation.required"),S)},type:{required:_.withMessage(v("validation.required"),S)}}})),s=W(k,B(()=>e));Y(()=>e.currentNote.type,a=>{V()}),Z(()=>{i.name==="estimates.create"?e.currentNote.type="Estimate":i.name==="invoices.create"?e.currentNote.type="Invoice":e.currentNote.type="Payment"});function V(){y.value=["customer","customerCustom"],e.currentNote.type=="Invoice"&&y.value.push("invoice","invoiceCustom"),e.currentNote.type=="Estimate"&&y.value.push("estimate","estimateCustom"),e.currentNote.type=="Payment"&&y.value.push("payment","paymentCustom")}async function D(){if(s.value.currentNote.$touch(),s.value.currentNote.$invalid)return!0;if(f.value=!0,e.isEdit){let a={id:e.currentNote.id,...e.currentNote};await e.updateNote(a).then(r=>{f.value=!1,r.data&&(n.showNotification({type:"success",message:v("settings.customization.notes.note_updated")}),c.refreshData&&c.refreshData(),h())}).catch(r=>{f.value=!1})}else await e.addNote(e.currentNote).then(a=>{f.value=!1,a.data&&(n.showNotification({type:"success",message:v("settings.customization.notes.note_added")}),(i.name==="invoices.create"&&a.data.data.type==="Invoice"||i.name==="invoices.edit"&&a.data.data.type==="Invoice")&&u.selectNote(a.data.data),(i.name==="estimates.create"&&a.data.data.type==="Estimate"||i.name==="estimates.edit"&&a.data.data.type==="Estimate")&&N.selectNote(a.data.data),(i.name==="payments.create"&&a.data.data.type==="Payment"||i.name==="payments.edit"&&a.data.data.type==="Payment")&&t.selectNote(a.data.data)),c.refreshData&&c.refreshData(),h()}).catch(a=>{f.value=!1})}function h(){c.closeModal(),setTimeout(()=>{e.resetCurrentNote(),s.value.$reset()},300)}return(a,r)=>{const q=p("BaseIcon"),j=p("BaseInput"),w=p("BaseInputGroup"),F=p("BaseMultiselect"),G=p("BaseCustomInput"),L=p("BaseInputGrid"),P=p("BaseButton"),U=p("BaseModal");return ee(),te(U,{show:z.value,onClose:h,onOpen:V},{header:m(()=>[I("div",re,[b(C(o(c).title)+" ",1),l(q,{name:"XIcon",class:"h-6 w-6 text-gray-500 cursor-pointer",onClick:h})])]),default:m(()=>[I("form",{action:"",onSubmit:ae(D,["prevent"])},[I("div",ie,[l(L,{layout:"one-column"},{default:m(()=>[l(w,{label:a.$t("settings.customization.notes.name"),variant:"vertical",error:o(s).currentNote.name.$error&&o(s).currentNote.name.$errors[0].$message,required:""},{default:m(()=>[l(j,{modelValue:o(e).currentNote.name,"onUpdate:modelValue":r[0]||(r[0]=d=>o(e).currentNote.name=d),invalid:o(s).currentNote.name.$error,type:"text",onInput:r[1]||(r[1]=d=>o(s).currentNote.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),l(w,{label:a.$t("settings.customization.notes.type"),error:o(s).currentNote.type.$error&&o(s).currentNote.type.$errors[0].$message,required:""},{default:m(()=>[l(F,{modelValue:o(e).currentNote.type,"onUpdate:modelValue":r[2]||(r[2]=d=>o(e).currentNote.type=d),options:x,"value-prop":"type",class:"mt-2"},null,8,["modelValue","options"])]),_:1},8,["label","error"]),l(w,{label:a.$t("settings.customization.notes.notes"),error:o(s).currentNote.notes.$error&&o(s).currentNote.notes.$errors[0].$message,required:""},{default:m(()=>[l(G,{modelValue:o(e).currentNote.notes,"onUpdate:modelValue":r[3]||(r[3]=d=>o(e).currentNote.notes=d),invalid:o(s).currentNote.notes.$error,fields:o(y),onInput:r[4]||(r[4]=d=>o(s).currentNote.notes.$touch())},null,8,["modelValue","invalid","fields"])]),_:1},8,["label","error"])]),_:1})]),I("div",ue,[l(P,{class:"mr-2",variant:"primary-outline",type:"button",onClick:h},{default:m(()=>[b(C(a.$t("general.cancel")),1)]),_:1}),l(P,{loading:o(f),disabled:o(f),variant:"primary",type:"submit"},{left:m(d=>[l(q,{name:"SaveIcon",class:oe(d.class)},null,8,["class"])]),default:m(()=>[b(" "+C(o(e).isEdit?a.$t("general.update"):a.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],32)]),_:1},8,["show"])}}};export{de as _,se as u};
