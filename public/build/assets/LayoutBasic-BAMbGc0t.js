import{u as Y}from"./auth-BpWLCjHG.js";import{b0 as L,f as x,b1 as M,b2 as R,b3 as D,b4 as V,b5 as Z,k as w,b6 as P,b7 as j,X as z,aa as H,an as ee,b8 as te,b9 as se,ba as K,a5 as X,bb as $,v as ae,L as F,e as oe,z as re,r as C,o as v,m as S,w as f,b as a,l as n,U as le,c as I,N as U,O as N,J as E,p as B,t as y,a as d,bc as ne,bd as ue,be as ie,bf as ce,bg as de,bh as pe,K as fe}from"./main-DuDaNFOP.js";import{u as G}from"./global-Od_Pzmnv.js";import{N as me}from"./NotificationRoot--ReZASP0.js";var ve=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(ve||{});let J=Symbol("DisclosureContext");function A(s){let i=X(J,null);if(i===null){let p=new Error(`<${s} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,A),p}return i}let Q=Symbol("DisclosurePanelContext");function ge(){return X(Q,null)}let be=L({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup(s,{slots:i,attrs:p}){let t=x(s.defaultOpen?0:1),e=x(null),g=x(null),r={buttonId:x(`headlessui-disclosure-button-${M()}`),panelId:x(`headlessui-disclosure-panel-${M()}`),disclosureState:t,panel:e,button:g,toggleDisclosure(){t.value=R(t.value,{0:1,1:0})},closeDisclosure(){t.value!==1&&(t.value=1)},close(o){r.closeDisclosure();let m=o?o instanceof HTMLElement?o:o.value instanceof HTMLElement?D(o):D(r.button):D(r.button);m==null||m.focus()}};return V(J,r),Z(w(()=>R(t.value,{0:P.Open,1:P.Closed}))),()=>{let{defaultOpen:o,...m}=s,b={open:t.value===0,close:r.close};return j({theirProps:m,ourProps:{},slot:b,slots:i,attrs:p,name:"Disclosure"})}}}),he=L({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1},id:{type:String,default:null}},setup(s,{attrs:i,slots:p,expose:t}){let e=A("DisclosureButton"),g=ge(),r=w(()=>g===null?!1:g.value===e.panelId.value);z(()=>{r.value||s.id!==null&&(e.buttonId.value=s.id)}),H(()=>{r.value||(e.buttonId.value=null)});let o=x(null);t({el:o,$el:o}),r.value||ee(()=>{e.button.value=o.value});let m=te(w(()=>({as:s.as,type:i.type})),o);function b(){var l;s.disabled||(r.value?(e.toggleDisclosure(),(l=D(e.button))==null||l.focus()):e.toggleDisclosure())}function h(l){var c;if(!s.disabled)if(r.value)switch(l.key){case $.Space:case $.Enter:l.preventDefault(),l.stopPropagation(),e.toggleDisclosure(),(c=D(e.button))==null||c.focus();break}else switch(l.key){case $.Space:case $.Enter:l.preventDefault(),l.stopPropagation(),e.toggleDisclosure();break}}function _(l){switch(l.key){case $.Space:l.preventDefault();break}}return()=>{var l;let c={open:e.disclosureState.value===0},{id:T,...k}=s,O=r.value?{ref:o,type:m.value,onClick:b,onKeydown:h}:{id:(l=e.buttonId.value)!=null?l:T,ref:o,type:m.value,"aria-expanded":e.disclosureState.value===0,"aria-controls":e.disclosureState.value===0||D(e.panel)?e.panelId.value:void 0,disabled:s.disabled?!0:void 0,onClick:b,onKeydown:h,onKeyup:_};return j({ourProps:O,theirProps:k,slot:c,attrs:i,slots:p,name:"DisclosureButton"})}}}),_e=L({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(s,{attrs:i,slots:p,expose:t}){let e=A("DisclosurePanel");z(()=>{s.id!==null&&(e.panelId.value=s.id)}),H(()=>{e.panelId.value=null}),t({el:e.panel,$el:e.panel}),V(Q,e.panelId);let g=se(),r=w(()=>g!==null?(g.value&P.Open)===P.Open:e.disclosureState.value===0);return()=>{var o;let m={open:e.disclosureState.value===0,close:e.close},{id:b,...h}=s,_={id:(o=e.panelId.value)!=null?o:b,ref:e.panel};return j({ourProps:_,theirProps:h,slot:m,attrs:i,slots:p,features:K.RenderStrategy|K.Static,visible:r.value,name:"DisclosurePanel"})}}});const ye={class:"mx-auto px-8"},xe={class:"flex justify-between h-16 w-full"},we={class:"flex"},ke={class:"shrink-0 flex items-center"},Se=["href"],De=["src"],$e={class:"hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"},Be={class:"hidden sm:ml-6 sm:flex sm:items-center"},Ie=a("button",{type:"button",class:"bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"},null,-1),Oe=["src"],Ce={class:"-mr-2 flex items-center sm:hidden"},Pe=a("span",{class:"sr-only"},"Open main menu",-1),Ue={class:"pt-2 pb-3 space-y-1"},Ne={class:"pt-4 pb-3 border-t border-gray-200"},Ee={class:"flex items-center px-4"},Le={class:"shrink-0"},je=["src"],Ae={class:"ml-3"},Te={class:"text-base font-medium text-gray-800"},Me={class:"text-sm font-medium text-gray-500"},Re=a("button",{type:"button",class:"ml-auto bg-white shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"},null,-1),Ke={class:"mt-3 space-y-1"},Ve={__name:"TheSiteHeader",setup(s){const{t:i}=ae.useI18n(),p=F(),t=G(),e=[{title:i("navigation.logout"),link:`/${t.companySlug}/customer/login`}],g=Y(),r=oe(),o=x(""),m=w(()=>t.currentUser&&t.currentUser.avatar!==0?t.currentUser.avatar:b());function b(){return new URL("/build/assets/default-avatar-DiPf6Xay.jpg",import.meta.url)}re(p,c=>{o.value=c.path},{immediate:!0});const h=w(()=>window.customer_logo?window.customer_logo:!1);function _(c){return p.path.indexOf(c)>-1}function l(){g.logout(t.companySlug).then(c=>{c&&r.push({name:"customer.login"})})}return(c,T)=>{const k=C("router-link"),O=C("BaseDropdownItem"),q=C("BaseDropdown");return v(),S(n(be),{as:"nav",class:"bg-white shadow-sm fixed top-0 left-0 z-20 w-full"},{default:f(({open:W})=>[a("div",ye,[a("div",xe,[a("div",we,[a("div",ke,[a("a",{href:`/${n(t).companySlug}/customer/dashboard`,class:"float-none text-lg not-italic font-black tracking-wider text-white brand-main md:float-left font-base"},[h.value?(v(),I("img",{key:1,src:h.value,class:"h-6"},null,8,De)):(v(),S(le,{key:0,class:"h-6"}))],8,Se)]),a("div",$e,[(v(!0),I(U,null,N(n(t).mainMenu,u=>(v(),S(k,{key:u.title,to:`/${n(t).companySlug}${u.link}`,class:E([_(u.link)?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"])},{default:f(()=>[B(y(u.title),1)]),_:2},1032,["to","class"]))),128))])]),a("div",Be,[Ie,d(n(ne),{as:"div",class:"ml-3 relative"},{default:f(()=>[d(q,{"width-class":"w-48"},{activator:f(()=>[d(n(ue),{class:"bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"},{default:f(()=>[a("img",{class:"h-8 w-8 rounded-full",src:m.value,alt:""},null,8,Oe)]),_:1})]),default:f(()=>[d(k,{to:{name:"customer.profile"}},{default:f(()=>[d(O,null,{default:f(()=>[d(n(ie),{class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),B(" "+y(c.$t("navigation.settings")),1)]),_:1})]),_:1}),d(O,{onClick:l},{default:f(()=>[d(n(ce),{class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),B(" "+y(c.$t("navigation.logout")),1)]),_:1})]),_:1})]),_:1})]),a("div",Ce,[d(n(he),{class:"bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"},{default:f(()=>[Pe,W?(v(),S(n(pe),{key:1,class:"block h-6 w-6","aria-hidden":"true"})):(v(),S(n(de),{key:0,class:"block h-6 w-6","aria-hidden":"true"}))]),_:2},1024)])])]),d(n(_e),{class:"sm:hidden"},{default:f(()=>[a("div",Ue,[(v(!0),I(U,null,N(n(t).mainMenu,u=>(v(),S(k,{key:u.title,to:`/${n(t).companySlug}${u.link}`,class:E([_(u.link)?"bg-primary-50 border-primary-500 text-primary-700":"border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800","block pl-3 pr-4 py-2 border-l-4 text-base font-medium"]),"aria-current":u.current?"page":void 0},{default:f(()=>[B(y(u.title),1)]),_:2},1032,["to","class","aria-current"]))),128))]),a("div",Ne,[a("div",Ee,[a("div",Le,[a("img",{class:"h-10 w-10 rounded-full",src:m.value,alt:""},null,8,je)]),a("div",Ae,[a("div",Te,y(n(t).currentUser.title),1),a("div",Me,y(n(t).currentUser.email),1)]),Re]),a("div",Ke,[(v(),I(U,null,N(e,u=>d(k,{key:u.title,to:u.link,class:E([_(u.link)?"bg-primary-50 border-primary-500 text-primary-700":"border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800","block pl-3 pr-4 py-2 border-l-4 text-base font-medium"])},{default:f(()=>[B(y(u.title),1)]),_:2},1032,["to","class"])),64))])])]),_:1})]),_:1})}}},ze={key:0,class:"h-full"},He={class:"mt-16 pb-16 h-screen overflow-y-auto min-h-0"},Qe={__name:"LayoutBasic",setup(s){const i=G(),p=F(),t=w(()=>i.isAppLoaded);e();async function e(){await i.bootstrap(p.params.company)}return(g,r)=>{const o=C("router-view");return t.value?(v(),I("div",ze,[d(me),d(Ve),a("main",He,[d(o)])])):fe("",!0)}}};export{Qe as default};
