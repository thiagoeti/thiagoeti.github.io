import{_ as c,S as d,C as h}from"./layout-CSKnOliM.js";import{C as f}from"./sidebar-DJMDReLB.js";import{o as t,c as s,a as i,b as a,d as u,F as S,r,p as C,e as b,f as v,w as V}from"./index-CuM-SK-z.js";const $={name:"ComponentSidebarVue",components:{ComponentNavigatorSidebar:f},data(){return{store:{},language:null}},async mounted(){this.store.language=d(),this.store.language.data=await this.store.language._data,this.language=this.store.language.data},watch:{"store.language.data":{handler(e){if(e===void 0||e==null)return null;this.language=e},immediate:!0,deep:!0}}},w=e=>(C("data-v-090fcbc5"),e=e(),b(),e),y=w(()=>a("h2",null,"VueJS",-1)),x={id:"structure"},N={class:"box"},k={key:0},B={key:1};function I(e,l,p,g,o,_){const n=r("ComponentNavigatorSidebar");return t(),s(S,null,[i(n),a("section",null,[y,a("div",x,[a("div",N,[o.language=="pt"?(t(),s("p",k,"#desenvolvimento")):u("",!0),o.language=="en"?(t(),s("p",B,"#development")):u("",!0)])])])],64)}const L=c($,[["render",I],["__scopeId","data-v-090fcbc5"]]),F={name:"ViewSidebarVue",components:{ComponentStructureLayout:h,ComponentSidebarVue:L},data(){return{store:{},language:null}},async mounted(){this.store.language=d(),this.store.language.data=await this.store.language._data,this.language=this.store.language.data}};function E(e,l,p,g,o,_){const n=r("ComponentSidebarVue"),m=r("ComponentStructureLayout");return t(),v(m,null,{default:V(()=>[i(n)]),_:1})}const z=c(F,[["render",E]]);export{z as default};