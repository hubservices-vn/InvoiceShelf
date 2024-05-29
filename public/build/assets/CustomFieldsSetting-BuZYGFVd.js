const __vite__fileDeps=["assets/DateTimeType-BPwxnKkD.js","assets/main-rWP4cpcr.js","assets/main-Bh0ixv27.css","assets/DateType-ChxYUzRU.js","assets/DropdownType-BeC4P69S.js","assets/InputType-rRvf3Opv.js","assets/NumberType-Cilzag2D.js","assets/PhoneType-DE6nua4n.js","assets/SwitchType-BppPec3K.js","assets/TextAreaType-kQj1DUJK.js","assets/TimeType-CGQVAjGB.js","assets/UrlType-CsAN80fw.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{a7 as ae,u as ne,v as H,ae as z,L as re,M as W,F as G,a5 as Z,r as i,o as C,m as b,w as n,a as s,l as e,Q as L,p as B,t as w,K as A,f as x,c as R,aw as ue,q as ee,H as X,k as T,ax as ie,ay as F,g as q,h as M,ar as de,j as me,b as O,n as ce,N as pe,O as _e,J as j,a3 as fe,a6 as ve}from"./main-rWP4cpcr.js";import{_ as Ce}from"./dynamic-import-helper-BheWnx7M.js";const ye={__name:"CustomFieldIndexDropdown",props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:null}},setup(k){const p=k,t=ae();ne();const{t:u}=H.useI18n(),c=z();re();const f=W(),d=G();Z("utils");async function m(v){await c.fetchCustomField(v),d.openModal({title:u("settings.custom_fields.edit_custom_field"),componentName:"CustomFieldModal",size:"sm",data:v,refreshData:p.loadData})}async function D(v){t.openDialog({title:u("general.are_you_sure"),message:u("settings.custom_fields.custom_field_confirm_delete"),yesLabel:u("general.ok"),noLabel:u("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(async g=>{g&&(await c.deleteCustomFields(v),p.loadData&&p.loadData())})}return(v,g)=>{const _=i("BaseIcon"),V=i("BaseDropdownItem"),I=i("BaseDropdown");return C(),b(I,null,{activator:n(()=>[s(_,{name:"DotsHorizontalIcon",class:"h-5 text-gray-500"})]),default:n(()=>[e(f).hasAbilities(e(L).EDIT_CUSTOM_FIELDS)?(C(),b(V,{key:0,onClick:g[0]||(g[0]=o=>m(k.row.id))},{default:n(()=>[s(_,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),B(" "+w(v.$t("general.edit")),1)]),_:1})):A("",!0),e(f).hasAbilities(e(L).DELETE_CUSTOM_FIELDS)?(C(),b(V,{key:1,onClick:g[1]||(g[1]=o=>D(k.row.id))},{default:n(()=>[s(_,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),B(" "+w(v.$t("general.delete")),1)]),_:1})):A("",!0)]),_:1})}}},ge={class:"flex items-center mt-1"},Fe={__name:"OptionsCreate",emits:["onAdd"],setup(k,{emit:p}){const t=p,u=x(null);function c(){if(u.value==null||u.value==""||u.value==null)return!0;t("onAdd",u.value),u.value=null}return(f,d)=>{const m=i("BaseInput"),D=i("BaseIcon");return C(),R("div",ge,[s(m,{modelValue:u.value,"onUpdate:modelValue":d[0]||(d[0]=v=>u.value=v),type:"text",class:"w-full md:w-96",placeholder:f.$t("settings.custom_fields.press_enter_to_add"),onClick:c,onKeydown:ue(ee(c,["prevent","stop"]),["enter"])},null,8,["modelValue","placeholder","onKeydown"]),s(D,{name:"PlusCircleIcon",class:"ml-1 text-primary-500 cursor-pointer",onClick:c})])}}},be={class:"flex justify-between w-full"},$e={class:"overflow-y-auto max-h-[550px]"},we={class:"px-4 md:px-8 py-8 overflow-y-auto sm:p-6"},Ie={class:"z-0 flex justify-end p-4 border-t border-solid border-gray-light border-modal-bg"},Te={__name:"CustomFieldModal",setup(k){const p=G(),t=z(),{t:u}=H.useI18n();let c=x(!1);const f=X(["Item","Customer","Invoice","Estimate","Expense","Payment"]),d=X([{label:"Text",value:"Input"},{label:"Textarea",value:"TextArea"},{label:"Phone",value:"Phone"},{label:"URL",value:"Url"},{label:"Number",value:"Number"},{label:"Select Field",value:"Dropdown"},{label:"Switch Toggle",value:"Switch"},{label:"Date",value:"Date"},{label:"Time",value:"Time"},{label:"Date & Time",value:"DateTime"}]);let m=x(d[0]);const D=T(()=>p.active&&p.componentName==="CustomFieldModal"),v=T(()=>m.value&&m.value.label==="Switch Toggle"),g=T(()=>m.value&&m.value.label==="Select Field"),_=T(()=>t.currentCustomField.type?ie(()=>Ce(Object.assign({"../../custom-fields/types/DateTimeType.vue":()=>F(()=>import("./DateTimeType-BPwxnKkD.js"),__vite__mapDeps([0,1,2])),"../../custom-fields/types/DateType.vue":()=>F(()=>import("./DateType-ChxYUzRU.js"),__vite__mapDeps([3,1,2])),"../../custom-fields/types/DropdownType.vue":()=>F(()=>import("./DropdownType-BeC4P69S.js"),__vite__mapDeps([4,1,2])),"../../custom-fields/types/InputType.vue":()=>F(()=>import("./InputType-rRvf3Opv.js"),__vite__mapDeps([5,1,2])),"../../custom-fields/types/NumberType.vue":()=>F(()=>import("./NumberType-Cilzag2D.js"),__vite__mapDeps([6,1,2])),"../../custom-fields/types/PhoneType.vue":()=>F(()=>import("./PhoneType-DE6nua4n.js"),__vite__mapDeps([7,1,2])),"../../custom-fields/types/SwitchType.vue":()=>F(()=>import("./SwitchType-BppPec3K.js"),__vite__mapDeps([8,1,2])),"../../custom-fields/types/TextAreaType.vue":()=>F(()=>import("./TextAreaType-kQj1DUJK.js"),__vite__mapDeps([9,1,2])),"../../custom-fields/types/TimeType.vue":()=>F(()=>import("./TimeType-CGQVAjGB.js"),__vite__mapDeps([10,1,2])),"../../custom-fields/types/UrlType.vue":()=>F(()=>import("./UrlType-CsAN80fw.js"),__vite__mapDeps([11,1,2]))}),`../../custom-fields/types/${t.currentCustomField.type}Type.vue`,5)):!1),V=T({get:()=>t.currentCustomField.is_required===1,set:l=>{const a=l?1:0;t.currentCustomField.is_required=a}}),I=T(()=>({currentCustomField:{type:{required:q.withMessage(u("validation.required"),M)},name:{required:q.withMessage(u("validation.required"),M)},label:{required:q.withMessage(u("validation.required"),M)},model_type:{required:q.withMessage(u("validation.required"),M)},order:{required:q.withMessage(u("validation.required"),M),numeric:q.withMessage(u("validation.numbers_only"),de)},type:{required:q.withMessage(u("validation.required"),M)}}})),o=me(I,T(()=>t));function h(){t.isEdit?m.value=d.find(l=>l.value==t.currentCustomField.type):(t.currentCustomField.model_type=f[0],t.currentCustomField.type=d[0].value,m.value=d[0])}async function P(){if(o.value.currentCustomField.$touch(),o.value.currentCustomField.$invalid)return!0;c.value=!0;let l={...t.currentCustomField};if(t.currentCustomField.options&&(l.options=t.currentCustomField.options.map(S=>S.name)),l.type=="Time"&&typeof l.default_answer=="object"){let S=l&&l.default_answer&&l.default_answer.HH?l.default_answer.HH:null,E=l&&l.default_answer&&l.default_answer.mm?l.default_answer.mm:null;l&&l.default_answer&&l.default_answer.ss&&l.default_answer.ss,l.default_answer=`${S}:${E}`}await(t.isEdit?t.updateCustomField:t.addCustomField)(l),c.value=!1,p.refreshData&&p.refreshData(),N()}function U(l){t.currentCustomField.options=[{name:l},...t.currentCustomField.options]}function y(l){if(t.isEdit&&t.currentCustomField.in_use)return;t.currentCustomField.options[l].name===t.currentCustomField.default_answer&&(t.currentCustomField.default_answer=null),t.currentCustomField.options.splice(l,1)}function te(l){t.currentCustomField.type=l.value}function N(){p.closeModal(),setTimeout(()=>{t.resetCurrentCustomField(),o.value.$reset()},300)}return(l,a)=>{const S=i("BaseIcon"),E=i("BaseInput"),$=i("BaseInputGroup"),K=i("BaseMultiselect"),le=i("BaseSwitch"),se=i("BaseInputGrid"),Y=i("BaseButton"),oe=i("BaseModal");return C(),b(oe,{show:D.value,onOpen:h},{header:n(()=>[O("div",be,[B(w(e(p).title)+" ",1),s(S,{name:"XIcon",class:"w-6 h-6 text-gray-500 cursor-pointer",onClick:N})])]),default:n(()=>[O("form",{action:"",onSubmit:ee(P,["prevent"])},[O("div",$e,[O("div",we,[s(se,{layout:"one-column"},{default:n(()=>[s($,{label:l.$t("settings.custom_fields.name"),required:"",error:e(o).currentCustomField.name.$error&&e(o).currentCustomField.name.$errors[0].$message},{default:n(()=>[s(E,{ref:"name",modelValue:e(t).currentCustomField.name,"onUpdate:modelValue":a[0]||(a[0]=r=>e(t).currentCustomField.name=r),invalid:e(o).currentCustomField.name.$error,onInput:a[1]||(a[1]=r=>e(o).currentCustomField.name.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),s($,{label:l.$t("settings.custom_fields.model"),error:e(o).currentCustomField.model_type.$error&&e(o).currentCustomField.model_type.$errors[0].$message,"help-text":e(t).currentCustomField.in_use?l.$t("settings.custom_fields.model_in_use"):"",required:""},{default:n(()=>[s(K,{modelValue:e(t).currentCustomField.model_type,"onUpdate:modelValue":a[2]||(a[2]=r=>e(t).currentCustomField.model_type=r),options:f,"can-deselect":!1,invalid:e(o).currentCustomField.model_type.$error,searchable:!0,disabled:e(t).currentCustomField.in_use,onInput:a[3]||(a[3]=r=>e(o).currentCustomField.model_type.$touch())},null,8,["modelValue","options","invalid","disabled"])]),_:1},8,["label","error","help-text"]),s($,{class:"flex items-center space-x-4",label:l.$t("settings.custom_fields.required")},{default:n(()=>[s(le,{modelValue:V.value,"onUpdate:modelValue":a[4]||(a[4]=r=>V.value=r)},null,8,["modelValue"])]),_:1},8,["label"]),s($,{label:l.$t("settings.custom_fields.type"),error:e(o).currentCustomField.type.$error&&e(o).currentCustomField.type.$errors[0].$message,"help-text":e(t).currentCustomField.in_use?l.$t("settings.custom_fields.type_in_use"):"",required:""},{default:n(()=>[s(K,{modelValue:e(m),"onUpdate:modelValue":[a[5]||(a[5]=r=>ce(m)?m.value=r:m=r),te],options:d,invalid:e(o).currentCustomField.type.$error,disabled:e(t).currentCustomField.in_use,searchable:!0,"can-deselect":!1,object:""},null,8,["modelValue","options","invalid","disabled"])]),_:1},8,["label","error","help-text"]),s($,{label:l.$t("settings.custom_fields.label"),required:"",error:e(o).currentCustomField.label.$error&&e(o).currentCustomField.label.$errors[0].$message},{default:n(()=>[s(E,{modelValue:e(t).currentCustomField.label,"onUpdate:modelValue":a[6]||(a[6]=r=>e(t).currentCustomField.label=r),invalid:e(o).currentCustomField.label.$error,onInput:a[7]||(a[7]=r=>e(o).currentCustomField.label.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"]),g.value?(C(),b($,{key:0,label:l.$t("settings.custom_fields.options")},{default:n(()=>[s(Fe,{onOnAdd:U}),(C(!0),R(pe,null,_e(e(t).currentCustomField.options,(r,J)=>(C(),R("div",{key:J,class:"flex items-center mt-5"},[s(E,{modelValue:r.name,"onUpdate:modelValue":Q=>r.name=Q,class:"w-64"},null,8,["modelValue","onUpdate:modelValue"]),s(S,{name:"MinusCircleIcon",class:j(["ml-1 cursor-pointer",e(t).currentCustomField.in_use?"text-gray-300":"text-red-300"]),onClick:Q=>y(J)},null,8,["class","onClick"])]))),128))]),_:1},8,["label"])):A("",!0),s($,{label:l.$t("settings.custom_fields.default_value"),class:"relative"},{default:n(()=>[(C(),b(fe(_.value),{modelValue:e(t).currentCustomField.default_answer,"onUpdate:modelValue":a[8]||(a[8]=r=>e(t).currentCustomField.default_answer=r),options:e(t).currentCustomField.options,"default-date-time":e(t).currentCustomField.dateTimeValue},null,8,["modelValue","options","default-date-time"]))]),_:1},8,["label"]),v.value?A("",!0):(C(),b($,{key:1,label:l.$t("settings.custom_fields.placeholder")},{default:n(()=>[s(E,{modelValue:e(t).currentCustomField.placeholder,"onUpdate:modelValue":a[9]||(a[9]=r=>e(t).currentCustomField.placeholder=r)},null,8,["modelValue"])]),_:1},8,["label"])),s($,{label:l.$t("settings.custom_fields.order"),error:e(o).currentCustomField.order.$error&&e(o).currentCustomField.order.$errors[0].$message,required:""},{default:n(()=>[s(E,{modelValue:e(t).currentCustomField.order,"onUpdate:modelValue":a[10]||(a[10]=r=>e(t).currentCustomField.order=r),type:"number",invalid:e(o).currentCustomField.order.$error,onInput:a[11]||(a[11]=r=>e(o).currentCustomField.order.$touch())},null,8,["modelValue","invalid"])]),_:1},8,["label","error"])]),_:1})])]),O("div",Ie,[s(Y,{class:"mr-3",type:"button",variant:"primary-outline",onClick:N},{default:n(()=>[B(w(l.$t("general.cancel")),1)]),_:1}),s(Y,{variant:"primary",loading:e(c),disabled:e(c),type:"submit"},{left:n(r=>[e(c)?A("",!0):(C(),b(S,{key:0,class:j(r.class),name:"SaveIcon"},null,8,["class"]))]),default:n(()=>[B(" "+w(e(t).isEdit?l.$t("general.update"):l.$t("general.save")),1)]),_:1},8,["loading","disabled"])])],32)]),_:1},8,["show"])}}},Be={class:"text-xs text-gray-500"},he={__name:"CustomFieldsSetting",setup(k){const p=G(),t=z(),u=W(),c=Z("utils"),{t:f}=H.useI18n(),d=x(null),m=T(()=>[{key:"name",label:f("settings.custom_fields.name"),thClass:"extra",tdClass:"font-medium text-gray-900"},{key:"model_type",label:f("settings.custom_fields.model")},{key:"type",label:f("settings.custom_fields.type")},{key:"is_required",label:f("settings.custom_fields.required")},{key:"actions",label:"",tdClass:"text-right text-sm font-medium",sortable:!1}]);async function D({page:_,filter:V,sort:I}){let o={orderByField:I.fieldName||"created_at",orderBy:I.order||"desc",page:_},h=await t.fetchCustomFields(o);return{data:h.data.data,pagination:{totalPages:h.data.meta.last_page,currentPage:_,limit:5,totalCount:h.data.meta.total}}}function v(){p.openModal({title:f("settings.custom_fields.add_custom_field"),componentName:"CustomFieldModal",size:"sm",refreshData:d.value&&d.value.refresh})}async function g(){d.value&&d.value.refresh()}return(_,V)=>{const I=i("BaseIcon"),o=i("BaseButton"),h=i("BaseBadge"),P=i("BaseTable"),U=i("BaseSettingCard");return C(),b(U,{title:_.$t("settings.menu_title.custom_fields"),description:_.$t("settings.custom_fields.section_description")},{action:n(()=>[e(u).hasAbilities(e(L).CREATE_CUSTOM_FIELDS)?(C(),b(o,{key:0,variant:"primary-outline",onClick:v},{left:n(y=>[s(I,{class:j(y.class),name:"PlusIcon"},null,8,["class"]),B(" "+w(_.$t("settings.custom_fields.add_custom_field")),1)]),_:1})):A("",!0)]),default:n(()=>[s(Te),s(P,{ref_key:"table",ref:d,data:D,columns:m.value,class:"mt-16"},ve({"cell-name":n(({row:y})=>[B(w(y.data.name)+" ",1),O("span",Be," ("+w(y.data.slug)+")",1)]),"cell-is_required":n(({row:y})=>[s(h,{"bg-color":e(c).getBadgeStatusColor(y.data.is_required?"YES":"NO").bgColor,color:e(c).getBadgeStatusColor(y.data.is_required?"YES":"NO").color},{default:n(()=>[B(w(y.data.is_required?_.$t("settings.custom_fields.yes"):_.$t("settings.custom_fields.no").replace("_"," ")),1)]),_:2},1032,["bg-color","color"])]),_:2},[e(u).hasAbilities([e(L).DELETE_CUSTOM_FIELDS,e(L).EDIT_CUSTOM_FIELDS])?{name:"cell-actions",fn:n(({row:y})=>[s(ye,{row:y.data,table:d.value,"load-data":g},null,8,["row","table"])]),key:"0"}:void 0]),1032,["columns"])]),_:1},8,["title","description"])}}};export{he as default};
