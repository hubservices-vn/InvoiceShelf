import{a4 as p,s as r,a1 as o,u as h}from"./main-DuDaNFOP.js";const g=(d=!1)=>{const f=d?window.pinia.defineStore:p,{global:n}=window.i18n;return f({id:"users",state:()=>({roles:[],users:[],totalUsers:0,currentUser:null,selectAllField:!1,selectedUsers:[],customerList:[],userList:[],userData:{name:"",email:"",password:null,phone:null,companies:[]}}),actions:{resetUserData(){this.userData={name:"",email:"",password:null,phone:null,role:null,companies:[]}},fetchUsers(s){return new Promise((i,t)=>{r.get("/api/v1/users",{params:s}).then(e=>{this.users=e.data.data,this.totalUsers=e.data.meta.total,i(e)}).catch(e=>{o(e),t(e)})})},fetchUser(s){return new Promise((i,t)=>{r.get(`/api/v1/users/${s}`).then(e=>{var a,l;this.userData=e.data.data,(l=(a=this.userData)==null?void 0:a.companies)!=null&&l.length&&this.userData.companies.forEach((c,m)=>{this.userData.roles.forEach(u=>{u.scope===c.id&&(this.userData.companies[m].role=u.name)})}),i(e)}).catch(e=>{console.log(e),o(e),t(e)})})},fetchRoles(s){return new Promise((i,t)=>{r.get("/api/v1/roles").then(e=>{this.roles=e.data.data,i(e)}).catch(e=>{o(e),t(e)})})},addUser(s){return new Promise((i,t)=>{r.post("/api/v1/users",s).then(e=>{this.users.push(e.data),h().showNotification({type:"success",message:n.t("users.created_message")}),i(e)}).catch(e=>{o(e),t(e)})})},updateUser(s){return new Promise((i,t)=>{r.put(`/api/v1/users/${s.id}`,s).then(e=>{if(e){let l=this.users.findIndex(c=>c.id===e.data.data.id);this.users[l]=e.data.data}h().showNotification({type:"success",message:n.t("users.updated_message")}),i(e)}).catch(e=>{o(e),t(e)})})},deleteUser(s){const i=h();return new Promise((t,e)=>{r.post("/api/v1/users/delete",{users:s.ids}).then(a=>{let l=this.users.findIndex(c=>c.id===s);this.users.splice(l,1),i.showNotification({type:"success",message:n.tc("users.deleted_message",1)}),t(a)}).catch(a=>{o(a),e(a)})})},deleteMultipleUsers(){return new Promise((s,i)=>{r.post("/api/v1/users/delete",{users:this.selectedUsers}).then(t=>{this.selectedUsers.forEach(a=>{let l=this.users.findIndex(c=>c.id===a.id);this.users.splice(l,1)}),h().showNotification({type:"success",message:n.tc("users.deleted_message",2)}),s(t)}).catch(t=>{o(t),i(t)})})},searchUsers(s){return new Promise((i,t)=>{r.get("/api/v1/search",{params:s}).then(e=>{this.userList=e.data.users.data,this.customerList=e.data.customers.data,i(e)}).catch(e=>{o(e),t(e)})})},setSelectAllState(s){this.selectAllField=s},selectUser(s){this.selectedUsers=s,this.selectedUsers.length===this.users.length?this.selectAllField=!0:this.selectAllField=!1},selectAllUsers(){if(this.selectedUsers.length===this.users.length)this.selectedUsers=[],this.selectAllField=!1;else{let s=this.users.map(i=>i.id);this.selectedUsers=s,this.selectAllField=!0}}}})()};export{g as u};
