import{a8 as C,u as S,a7 as x,M as b,v as E,L as T,e as $,a5 as N,r as l,o as a,m as s,w as t,l as e,a as n,Q as g,p,t as _,K as w}from"./main-BAQDmuOe.js";const V={__name:"CustomerIndexDropdown",props:{row:{type:Object,default:null},table:{type:Object,default:null},loadData:{type:Function,default:()=>{}}},setup(i){const y=i,f=C();S();const v=x(),m=b(),{t:u}=E.useI18n(),h=T();$(),N("utils");function I(r){v.openDialog({title:u("general.are_you_sure"),message:u("customers.confirm_delete",1),yesLabel:u("general.ok"),noLabel:u("general.cancel"),variant:"danger",hideNoButton:!1,size:"lg"}).then(c=>{c&&f.deleteCustomer({ids:[r]}).then(o=>{if(o.data.success)return y.loadData&&y.loadData(),!0})})}return(r,c)=>{const o=l("BaseIcon"),B=l("BaseButton"),d=l("BaseDropdownItem"),D=l("router-link"),k=l("BaseDropdown");return a(),s(k,{"content-loading":e(f).isFetchingViewData},{activator:t(()=>[e(h).name==="customers.view"?(a(),s(B,{key:0,variant:"primary"},{default:t(()=>[n(o,{name:"DotsHorizontalIcon",class:"h-5 text-white"})]),_:1})):(a(),s(o,{key:1,name:"DotsHorizontalIcon",class:"h-5 text-gray-500"}))]),default:t(()=>[e(m).hasAbilities(e(g).EDIT_CUSTOMER)?(a(),s(D,{key:0,to:`/admin/customers/${i.row.id}/edit`},{default:t(()=>[n(d,null,{default:t(()=>[n(o,{name:"PencilIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),p(" "+_(r.$t("general.edit")),1)]),_:1})]),_:1},8,["to"])):w("",!0),e(h).name!=="customers.view"&&e(m).hasAbilities(e(g).VIEW_CUSTOMER)?(a(),s(D,{key:1,to:`customers/${i.row.id}/view`},{default:t(()=>[n(d,null,{default:t(()=>[n(o,{name:"EyeIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),p(" "+_(r.$t("general.view")),1)]),_:1})]),_:1},8,["to"])):w("",!0),e(m).hasAbilities(e(g).DELETE_CUSTOMER)?(a(),s(d,{key:2,onClick:c[0]||(c[0]=O=>I(i.row.id))},{default:t(()=>[n(o,{name:"TrashIcon",class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"}),p(" "+_(r.$t("general.delete")),1)]),_:1})):w("",!0)]),_:1},8,["content-loading"])}}};export{V as _};