import{_ as u,S as c,C as y}from"./layout-Dmq4Lzmr.js";import{C as k}from"./explorer-DMzJBlCV.js";import{o as e,c as o,a as _,b as a,d as n,F as S,r as l,p as f,e as v,f as x,w as C}from"./index-CgrRE4cw.js";const B={name:"ComponentExplorerGraduation",components:{ComponentNavigatorExplorer:k},data(){return{store:{},language:null}},async mounted(){this.store.language=c(),this.store.language.data=await this.store.language._data,this.language=this.store.language.data},watch:{"store.language.data":{handler(s){if(s===void 0||s==null)return null;this.language=s},immediate:!0,deep:!0}}},r=s=>(f("data-v-60fec298"),s=s(),v(),s),T={key:0},L={key:1},E={id:"structure"},N={class:"box"},b={key:0},G={key:1},I={key:2},A={key:3},w=r(()=>a("time",null,"2017 - 2018",-1)),M={class:"box"},U={key:0},F={key:1},V={key:2},z={key:3},j=r(()=>a("time",null,"2010 - 2016",-1)),D={class:"box"},P={key:0},q={key:1},H={key:2},J={key:3},K=r(()=>a("time",null,"2014 - 2016",-1)),O={key:4},Q={key:5},R={class:"box"},W={key:0},X={key:1},Y={key:2},Z={key:3},$=r(()=>a("time",null,"2004 - 2006",-1)),ee={class:"box"},te={key:0},oe={key:1},ne={key:2},ae={key:3},se=r(()=>a("time",null,"2017 - 2018",-1));function re(s,g,h,d,t,p){const i=l("ComponentNavigatorExplorer");return e(),o(S,null,[_(i),a("section",null,[t.language=="pt"?(e(),o("h2",T,"Formação Acadêmica")):n("",!0),t.language=="en"?(e(),o("h2",L,"Academic Graduation")):n("",!0),a("div",E,[a("div",N,[t.language=="pt"?(e(),o("h3",b,"Universidade La Salle")):n("",!0),t.language=="en"?(e(),o("h3",G,"La Salle University")):n("",!0),t.language=="pt"?(e(),o("h4",I,"MBA - Gerenciamento de Projetos")):n("",!0),t.language=="en"?(e(),o("h4",A,"MBA - Project Management")):n("",!0),w]),a("div",M,[t.language=="pt"?(e(),o("h3",U,"Universidade La Salle")):n("",!0),t.language=="en"?(e(),o("h3",F,"La Salle University")):n("",!0),t.language=="pt"?(e(),o("h4",V,"Graduação Tecnológica, Sistemas de Informação")):n("",!0),t.language=="en"?(e(),o("h4",z,"Technological Degree, Information Systems")):n("",!0),j]),a("div",D,[t.language=="pt"?(e(),o("h3",P,"Universidade La Salle")):n("",!0),t.language=="en"?(e(),o("h3",q,"La Salle University")):n("",!0),t.language=="pt"?(e(),o("h4",H,"Graduação Bacharel, Ciência da Computação")):n("",!0),t.language=="en"?(e(),o("h4",J,"Bachelor's Degree, Computer Science")):n("",!0),K,t.language=="pt"?(e(),o("small",O,"Standby 60% concluído.")):n("",!0),t.language=="en"?(e(),o("small",Q,"Standby 60% complete.")):n("",!0)]),a("div",R,[t.language=="pt"?(e(),o("h3",W,"Escola Alcides Maya")):n("",!0),t.language=="en"?(e(),o("h3",X,"Alcides Maya School")):n("",!0),t.language=="pt"?(e(),o("h4",Y,"Técnico em Informática, TI")):n("",!0),t.language=="en"?(e(),o("h4",Z,"IT Technician")):n("",!0),$]),a("div",ee,[t.language=="pt"?(e(),o("h3",te,"STNB – Seminário Teológico Nazareno do Brasil")):n("",!0),t.language=="en"?(e(),o("h3",oe,"STNB – Nazarene Theological Seminary of Brazil")):n("",!0),t.language=="pt"?(e(),o("h4",ne,"MBA (Livre), Teologia")):n("",!0),t.language=="en"?(e(),o("h4",ae,"MBA (Free), Theology")):n("",!0),se])])])],64)}const ie=u(B,[["render",re],["__scopeId","data-v-60fec298"]]),le={name:"ViewExplorerGraduation",components:{ComponentStructureLayout:y,ComponentExplorerGraduation:ie},data(){return{store:{},language:null}},async mounted(){this.store.language=c(),this.store.language.data=await this.store.language._data,this.language=this.store.language.data,this.$route.path=="/habilidades"&&(this.store.language.data="pt"),this.$route.path=="/skills"&&(this.store.language.data="en")}};function ue(s,g,h,d,t,p){const i=l("ComponentExplorerGraduation"),m=l("ComponentStructureLayout");return e(),x(m,null,{default:C(()=>[_(i)]),_:1})}const he=u(le,[["render",ue]]);export{he as default};