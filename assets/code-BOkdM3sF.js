import{_ as h,S as g,C as b}from"./layout-B1lOZljL.js";import{a as k,_ as y,b as v,c as w}from"./linkedin-D72ez-RY.js";import{C as x}from"./sidebar-DupAtGVe.js";import{o,c as n,a as p,b as a,d as r,F as u,f as $,r as c,t as _,g as d,p as N,h as L,e as V,w as B}from"./index-B4Yc_uzR.js";const I={name:"ComponentSidebarCode",components:{ComponentNavigatorSidebar:x},data(){return{store:{},language:null,path:"code",data:[]}},async mounted(){this.store.language=g(),this.store.language.data=await this.store.language._data,this.language=this.store.language.data;try{this.data=await k({method:"get",url:"/data/code.json?v="+Math.random()}),this.data=this.data.data.data;for(let t=0;t<this.data.length;t++)this.data[t].content=this.data[t].content.replace(`
`,"<br>");this.data.sort(()=>Math.random()-.5)}catch(t){console.log(t.message)}},watch:{"store.language.data":{handler(t){if(t===void 0||t==null)return null;this.language=t},immediate:!0,deep:!0}}},l=t=>(N("data-v-38097400"),t=t(),L(),t),M={key:0},j={key:1},D={id:"structure"},E={class:"box"},F=["src"],z={class:"link"},T={key:0},q=["href"],A=l(()=>a("img",{src:y},null,-1)),G={key:1},H=["href"],J=l(()=>a("img",{src:v},null,-1)),K={key:2},O=["href"],P=l(()=>a("img",{src:w},null,-1));function Q(t,m,f,C,s,S){const i=c("ComponentNavigatorSidebar");return o(),n(u,null,[p(i),a("section",null,[s.language=="pt"?(o(),n("h2",M,"Código")):r("",!0),s.language=="en"?(o(),n("h2",j,"Code")):r("",!0),a("div",D,[(o(!0),n(u,null,$(s.data,e=>(o(),n("div",E,[a("h4",null,_(e.title),1),a("img",{src:"/image/"+s.path+"/"+e.uri+".jpg",loading:"lazy"},null,8,F),a("p",null,_(e.content),1),a("ul",z,[e.social&&e.social.medium?(o(),n("li",T,[a("a",{href:e.social.medium,target:"_blank"},[A,d(" Medium ")],8,q)])):r("",!0),e.social&&e.social.dev?(o(),n("li",G,[a("a",{href:e.social.dev,target:"_blank"},[J,d(" DEV ")],8,H)])):r("",!0),e.social&&e.social.linkedin?(o(),n("li",K,[a("a",{href:e.social.linkedin,target:"_blank"},[P,d(" Linkedin ")],8,O)])):r("",!0)])]))),256))])])],64)}const R=h(I,[["render",Q],["__scopeId","data-v-38097400"]]),U={name:"ViewSidebarCode",components:{ComponentStructureLayout:b,ComponentSidebarCode:R},data(){return{store:{},language:null}},async mounted(){this.store.language=g(),this.store.language.data=await this.store.language._data,this.language=this.store.language.data,this.$route.path=="/codigo"&&(this.store.language.data="pt"),this.$route.path=="/code"&&(this.store.language.data="en")}};function W(t,m,f,C,s,S){const i=c("ComponentSidebarCode"),e=c("ComponentStructureLayout");return o(),V(e,null,{default:B(()=>[p(i)]),_:1})}const et=h(U,[["render",W]]);export{et as default};