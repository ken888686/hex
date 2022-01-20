import{c as $,a as P,b as l,d,r as f,o as p,e as v,f as i,g as u,w as g,h as x,i as k,j as b,F as E,k as N,l as S,m as C}from"./vendor.adde3b81.js";const O=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}};O();const _=$({plugins:[P({storage:window.localStorage})],state(){return{isLogin:l.get("isLogin"),token:l.get("token")}},mutations:{login(e){e.isLogin=!0,l.set("isLogin",!0)},logout(e){e.isLogin=!1,l.set("isLogin",!1),l.set("token","")},updateToken(e,o){e.token=o,l.set("token",o)}},actions:{login({commit:e},o){e("login"),e("updateToken",o)},logout({commit:e}){e("logout"),e("updateToken","")}}}),h="https://vue3-course-api.hexschool.io",T="ken888686",A={login(e,o){return new Promise((n,a)=>{d.post(`${h}/v2/admin/signin`,{username:e,password:o}).then(t=>{n(t)}).catch(t=>{a(t)})})},logout(){return new Promise((e,o)=>{d.post(`${h}/v2/logout`,{},{headers:{authorization:_.state.token}}).then(n=>{e(n)}).catch(n=>{o(n)})})},check(){return new Promise((e,o)=>{d.post(`${h}/v2/api/user/check`,{},{headers:{authorization:_.state.token}}).then(n=>{e(n)}).catch(n=>{o(n)})})},getProducts(){return new Promise((e,o)=>{d.get(`${h}/v2/api/${T}/admin/products`,{headers:{authorization:_.state.token}}).then(n=>{e(n)}).catch(n=>{o(n)})})}};var V="/hex/assets/logo.03d6d6da.png",w=(e,o)=>{const n=e.__vccOpts||e;for(const[a,t]of o)n[a]=t;return n};const W={name:"Navbar",data(){return{logoSize:25}},computed:{isLogin(){return this.$store.state.isLogin}},mounted(){},methods:{logout(){A.logout().then(e=>{alert(e.data.message),this.$store.dispatch("logout"),this.$router.go()}).catch(e=>{alert(e.response.data.message),console.dir(e)})}}},j={class:"navbar navbar-expand-lg navbar-light bg-light"},z={class:"container"},D=["width","height"],R=i("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[i("span",{class:"navbar-toggler-icon"})],-1),I={id:"navbarSupportedContent",class:"collapse navbar-collapse"},B={class:"navbar-nav me-auto mb-2 mb-lg-0"},F={class:"nav-item dropdown"},H=i("a",{id:"navbarDropdown",class:"nav-link dropdown-toggle fw-bold",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," \u6BCF\u9031\u4EFB\u52D9 ",-1),q={class:"dropdown-menu","aria-labelledby":"navbarDropdown"},K=b(" Week 1 "),G=b(" Week 2 "),J=b(" \u767B\u5165 ");function M(e,o,n,a,t,s){const r=f("router-link");return p(),v("nav",j,[i("div",z,[u(r,{class:"navbar-brand",to:"/"},{default:g(()=>[i("img",{src:V,alt:"logo",width:t.logoSize,height:t.logoSize},null,8,D)]),_:1}),R,i("div",I,[i("ul",B,[i("li",F,[H,i("ul",q,[i("li",null,[u(r,{class:"dropdown-item",to:"/week-1"},{default:g(()=>[K]),_:1})]),i("li",null,[u(r,{class:"dropdown-item",to:"/week-2"},{default:g(()=>[G]),_:1})])])])])]),s.isLogin?k("",!0):(p(),x(r,{key:0,to:"/login",type:"button",class:"btn btn-primary"},{default:g(()=>[J]),_:1})),s.isLogin?(p(),v("button",{key:1,type:"button",class:"btn btn-outline-primary",onClick:o[0]||(o[0]=(...c)=>s.logout&&s.logout(...c))}," \u767B\u51FA ")):k("",!0)])])}var Q=w(W,[["render",M]]);const U={components:{Navbar:Q}};function X(e,o,n,a,t,s){const r=f("Navbar"),c=f("router-view");return p(),v(E,null,[u(r),u(c)],64)}var Y=w(U,[["render",X]]);const Z="modulepreload",y={},ee="/hex/",m=function(o,n){return!n||n.length===0?o():Promise.all(n.map(a=>{if(a=`${ee}${a}`,a in y)return;y[a]=!0;const t=a.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${s}`))return;const r=document.createElement("link");if(r.rel=t?"stylesheet":Z,t||(r.as="script",r.crossOrigin=""),r.href=a,document.head.appendChild(r),t)return new Promise((c,L)=>{r.addEventListener("load",c),r.addEventListener("error",L)})})).then(()=>o())},te=[{path:"/",name:"Home",component:()=>m(()=>import("./Home.0242097c.js"),["assets/Home.0242097c.js","assets/vendor.adde3b81.js"])},{path:"/login",name:"Login",component:()=>m(()=>import("./Login.7fa41542.js"),["assets/Login.7fa41542.js","assets/Login.9e1b12fd.css","assets/vendor.adde3b81.js"])},{path:"/week-1",name:"Week 1",component:()=>m(()=>import("./Week-1.5be88180.js"),["assets/Week-1.5be88180.js","assets/Week-1.1ac72454.css","assets/vendor.adde3b81.js"])},{path:"/week-2",name:"Week 2",component:()=>m(()=>import("./Week-2.fd961822.js"),["assets/Week-2.fd961822.js","assets/vendor.adde3b81.js"])}],oe=N({history:S("/hex/"),linkActiveClass:"active",routes:te});C(Y).use(oe).use(_).mount("#app");export{w as _,A as a,oe as r,_ as s};