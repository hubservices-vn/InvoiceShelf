import{s as n,u as h}from"./main-DuDaNFOP.js";import{h as r}from"./auth-BpWLCjHG.js";const{defineStore:u}=window.pinia,f=u({id:"customerEstimateStore",state:()=>({estimates:[],totalEstimates:0,selectedViewEstimate:[]}),actions:{fetchEstimate(s,e){return new Promise((i,a)=>{n.get(`/api/v1/${e}/customer/estimates`,{params:s}).then(t=>{this.estimates=t.data.data,this.totalEstimates=t.data.meta.estimateTotalCount,i(t)}).catch(t=>{r(t),a(t)})})},fetchViewEstimate(s,e){return new Promise((i,a)=>{n.get(`/api/v1/${e}/customer/estimates/${s.id}`,{params:s}).then(t=>{this.selectedViewEstimate=t.data.data,i(t)}).catch(t=>{r(t),a(t)})})},searchEstimate(s,e){return new Promise((i,a)=>{n.get(`/api/v1/${e}/customer/estimates`,{params:s}).then(t=>{this.estimates=t.data,i(t)}).catch(t=>{r(t),a(t)})})},acceptEstimate({slug:s,id:e,status:i}){return new Promise((a,t)=>{n.post(`/api/v1/${s}/customer/estimate/${e}/status`,{status:i}).then(o=>{let m=this.estimates.findIndex(c=>c.id===e);this.estimates[m]&&(this.estimates[m].status="ACCEPTED",h(!0).showNotification({type:"success",message:global.t("estimates.marked_as_accepted_message")})),a(o)}).catch(o=>{r(o),t(o)})})},rejectEstimate({slug:s,id:e,status:i}){return new Promise((a,t)=>{n.post(`/api/v1/${s}/customer/estimate/${e}/status`,{status:i}).then(o=>{let m=this.estimates.findIndex(c=>c.id===e);this.estimates[m]&&(this.estimates[m].status="REJECTED",h(!0).showNotification({type:"success",message:global.t("estimates.marked_as_rejected_message")})),a(o)}).catch(o=>{r(o),t(o)})})}}});export{f as u};
