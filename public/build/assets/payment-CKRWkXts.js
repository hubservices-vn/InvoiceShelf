import{a4 as r,E as u,L as f,ab as P,a1 as i,s as m,u as l}from"./main-DuDaNFOP.js";const y={maxPayableAmount:Number.MAX_SAFE_INTEGER,selectedCustomer:"",currency:null,currency_id:"",customer_id:"",payment_number:"",payment_date:"",amount:0,invoice_id:"",notes:"",payment_method_id:"",customFields:[],fields:[]},w=(h=!1)=>{const p=h?window.pinia.defineStore:r,{global:d}=window.i18n;return p({id:"payment",state:()=>({payments:[],paymentTotalCount:0,selectAllField:!1,selectedPayments:[],selectedNote:null,showExchangeRate:!1,drivers:[],providers:[],paymentProviders:{id:null,name:"",driver:"",active:!1,settings:{key:"",secret:""}},currentPayment:{...y},paymentModes:[],currentPaymentMode:{id:"",name:null},isFetchingInitialData:!1}),getters:{isEdit:t=>!!t.paymentProviders.id},actions:{fetchPaymentInitialData(t){const s=u(),n=f();this.isFetchingInitialData=!0;let e=[];t&&(e=[this.fetchPayment(n.params.id)]),Promise.all([this.fetchPaymentModes({limit:"all"}),this.getNextNumber(),...e]).then(async([a,c,o])=>{t?o.data.data.invoice&&(this.currentPayment.maxPayableAmount=parseInt(o.data.data.invoice.due_amount)):!t&&c.data&&(this.currentPayment.payment_date=P().format("YYYY-MM-DD"),this.currentPayment.payment_number=c.data.nextNumber,this.currentPayment.currency=s.selectedCompanyCurrency),this.isFetchingInitialData=!1}).catch(a=>{i(a)})},fetchPayments(t){return new Promise((s,n)=>{m.get("/api/v1/payments",{params:t}).then(e=>{this.payments=e.data.data,this.paymentTotalCount=e.data.meta.payment_total_count,s(e)}).catch(e=>{i(e),n(e)})})},fetchPayment(t){return new Promise((s,n)=>{m.get(`/api/v1/payments/${t}`).then(e=>{Object.assign(this.currentPayment,e.data.data),s(e)}).catch(e=>{i(e),n(e)})})},addPayment(t){return new Promise((s,n)=>{m.post("/api/v1/payments",t).then(e=>{this.payments.push(e.data),l().showNotification({type:"success",message:d.t("payments.created_message")}),s(e)}).catch(e=>{i(e),n(e)})})},updatePayment(t){return new Promise((s,n)=>{m.put(`/api/v1/payments/${t.id}`,t).then(e=>{if(e.data){let a=this.payments.findIndex(o=>o.id===e.data.data.id);this.payments[a]=t.payment,l().showNotification({type:"success",message:d.t("payments.updated_message")})}s(e)}).catch(e=>{i(e),n(e)})})},deletePayment(t){const s=l();return new Promise((n,e)=>{m.post("/api/v1/payments/delete",t).then(a=>{let c=this.payments.findIndex(o=>o.id===t);this.payments.splice(c,1),s.showNotification({type:"success",message:d.t("payments.deleted_message",1)}),n(a)}).catch(a=>{i(a),e(a)})})},deleteMultiplePayments(){const t=l();return new Promise((s,n)=>{m.post("/api/v1/payments/delete",{ids:this.selectedPayments}).then(e=>{this.selectedPayments.forEach(a=>{let c=this.payments.findIndex(o=>o.id===a.id);this.payments.splice(c,1)}),t.showNotification({type:"success",message:d.tc("payments.deleted_message",2)}),s(e)}).catch(e=>{i(e),n(e)})})},setSelectAllState(t){this.selectAllField=t},selectPayment(t){this.selectedPayments=t,this.selectedPayments.length===this.payments.length?this.selectAllField=!0:this.selectAllField=!1},selectAllPayments(){if(this.selectedPayments.length===this.payments.length)this.selectedPayments=[],this.selectAllField=!1;else{let t=this.payments.map(s=>s.id);this.selectedPayments=t,this.selectAllField=!0}},selectNote(t){this.selectedNote=null,this.selectedNote=t},resetSelectedNote(t){this.selectedNote=null},searchPayment(t){return new Promise((s,n)=>{m.get("/api/v1/payments",{params:t}).then(e=>{this.payments=e.data,s(e)}).catch(e=>{i(e),n(e)})})},previewPayment(t){return new Promise((s,n)=>{m.get(`/api/v1/payments/${t.id}/send/preview`,{params:t}).then(e=>{s(e)}).catch(e=>{i(e),n(e)})})},sendEmail(t){return new Promise((s,n)=>{m.post(`/api/v1/payments/${t.id}/send`,t).then(e=>{l().showNotification({type:"success",message:d.t("payments.send_payment_successfully")}),s(e)}).catch(e=>{i(e),n(e)})})},getNextNumber(t,s=!1){return new Promise((n,e)=>{m.get("/api/v1/next-number?key=payment",{params:t}).then(a=>{s&&(this.currentPayment.payment_number=a.data.nextNumber),n(a)}).catch(a=>{i(a),e(a)})})},resetCurrentPayment(){this.currentPayment={...y}},fetchPaymentModes(t){return new Promise((s,n)=>{m.get("/api/v1/payment-methods",{params:t}).then(e=>{this.paymentModes=e.data.data,s(e)}).catch(e=>{i(e),n(e)})})},fetchPaymentMode(t){return new Promise((s,n)=>{m.get(`/api/v1/payment-methods/${t}`).then(e=>{this.currentPaymentMode=e.data.data,s(e)}).catch(e=>{i(e),n(e)})})},addPaymentMode(t){const s=l();return new Promise((n,e)=>{m.post("/api/v1/payment-methods",t).then(a=>{this.paymentModes.push(a.data.data),s.showNotification({type:"success",message:d.t("settings.payment_modes.payment_mode_added")}),n(a)}).catch(a=>{i(a),e(a)})})},updatePaymentMode(t){const s=l();return new Promise((n,e)=>{m.put(`/api/v1/payment-methods/${t.id}`,t).then(a=>{if(a.data){let c=this.paymentModes.findIndex(o=>o.id===a.data.data.id);this.paymentModes[c]=t.paymentModes,s.showNotification({type:"success",message:d.t("settings.payment_modes.payment_mode_updated")})}n(a)}).catch(a=>{i(a),e(a)})})},deletePaymentMode(t){const s=l();return new Promise((n,e)=>{m.delete(`/api/v1/payment-methods/${t}`).then(a=>{let c=this.paymentModes.findIndex(o=>o.id===t);this.paymentModes.splice(c,1),a.data.success&&s.showNotification({type:"success",message:d.t("settings.payment_modes.deleted_message")}),n(a)}).catch(a=>{i(a),e(a)})})}}})()};export{w as u};
