import{_ as c,S as i,C as h}from"./layout-Cs9SKMpa.js";import{C as f}from"./footer-gv7-GkeZ.js";import{o as e,c as a,a as l,b as s,d as n,F as C,r as u,f as v,w as F}from"./index-CWFptQNx.js";const L={name:"ComponentFooterLearn",components:{ComponentNavigatorFooter:f},data(){return{store:{},language:null}},async mounted(){this.store.language=i(),this.store.language.data=await this.store.language._data,this.language=this.store.language.data},watch:{"store.language.data":{handler(t){if(t===void 0||t==null)return null;this.language=t},immediate:!0,deep:!0}}},y={key:0},$={key:1},k={id:"structure"},w={class:"box"},x={key:0},N={key:1};function S(t,g,d,p,o,_){const r=u("ComponentNavigatorFooter");return e(),a(C,null,[l(r),s("section",null,[o.language=="pt"?(e(),a("h2",y,"Estudos")):n("",!0),o.language=="en"?(e(),a("h2",$,"Learn")):n("",!0),s("div",k,[s("div",w,[o.language=="pt"?(e(),a("p",x,"#desenvolvimento")):n("",!0),o.language=="en"?(e(),a("p",N,"#development")):n("",!0)])])])],64)}const B=c(L,[["render",S],["__scopeId","data-v-ac0c40e6"]]),V={name:"ViewFooterLearn",components:{ComponentStructureLayout:h,ComponentFooterLearn:B},data(){return{store:{},language:null}},async mounted(){this.store.language=i(),this.store.language.data=await this.store.language._data,this.language=this.store.language.data,this.$route.path=="/estudo"&&(this.store.language.data="pt"),this.$route.path=="/learn"&&(this.store.language.data="en")}};function b(t,g,d,p,o,_){const r=u("ComponentFooterLearn"),m=u("ComponentStructureLayout");return e(),v(m,null,{default:F(()=>[l(r)]),_:1})}const q=c(V,[["render",b]]);export{q as default};