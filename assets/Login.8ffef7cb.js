var u=Object.defineProperty,f=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var l=(e,s,o)=>s in e?u(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,c=(e,s)=>{for(var o in s||(s={}))h.call(s,o)&&l(e,o,s[o]);if(r)for(var o of r(s))g.call(s,o)&&l(e,o,s[o]);return e},p=(e,s)=>f(e,b(s));import{n as w,o as v,g as x,h as t,p as y,q as m,v as _,s as j,t as I}from"./vendor.1bbb409a.js";import{_ as S,a as k,s as q,r as B}from"./index.fcf73245.js";const V={data(){return{account:"",password:"",disabled:!1}},mounted(){},methods:p(c({},w(["login"])),{login(){this.disabled=!0;const e=this.account,s=this.password;k.login(e,s).then(o=>{q.dispatch("login",o.data.token),B.push("/")}).catch(o=>{this.disabled=!1,alert(o.response.data.message)})}})},n=e=>(j("data-v-f973b874"),e=e(),I(),e),E={class:"container mt-4 h-100 text-center d-flex flex-column align-items-center justify-content-center"},L={class:"row justify-content-center"},M=n(()=>t("h1",{class:"h3 mb-3 font-weight-normal"}," \u8ACB\u5148\u767B\u5165 ",-1)),P={class:"col-8"},U={class:"form-floating mb-3"},A=["disabled"],D=n(()=>t("label",{for:"username"},"Email address",-1)),N={class:"form-floating"},T=["disabled"],z=n(()=>t("label",{for:"password"},"Password",-1)),C=["disabled"],F=n(()=>t("p",{class:"row mt-5 mb-3 text-muted"}," \xA9 2021~\u221E - \u516D\u89D2\u5B78\u9662 ",-1));function G(e,s,o,H,a,i){return v(),x("div",E,[t("div",L,[M,t("div",P,[t("form",{id:"form",class:"form-sign",onSubmit:s[2]||(s[2]=y((...d)=>i.login&&i.login(...d),["prevent"]))},[t("div",U,[m(t("input",{id:"username","onUpdate:modelValue":s[0]||(s[0]=d=>a.account=d),type:"email",class:"form-control",placeholder:"name@example.com",required:"",autofocus:"",disabled:a.disabled},null,8,A),[[_,a.account]]),D]),t("div",N,[m(t("input",{id:"password","onUpdate:modelValue":s[1]||(s[1]=d=>a.password=d),type:"password",class:"form-control",placeholder:"Password",required:"",disabled:a.disabled},null,8,T),[[_,a.password]]),z]),t("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit",disabled:a.disabled}," \u767B\u5165 ",8,C)],32)])]),F])}var Q=S(V,[["render",G],["__scopeId","data-v-f973b874"]]);export{Q as default};
