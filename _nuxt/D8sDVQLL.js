import{_ as T,w as K,c as j,C as L,b as q,a as G,g as X,d as Z}from"./BSpTt_dy.js";import{u as Q,r as W,s as x,a as Y,i as A,_ as ee,d as O,g as E,b as ae,c as se,e as te,f as oe}from"./GmO1dntV.js";import{f as re,g as P,r as S,s as ne,h as ie,i as ce,j as le,k as de,l as U,m as ue,n as p,q as pe,v as _e,x as b,o as f,c as g,b as d,w as y,d as I,t as h,a as u,y as me,z as fe,A as H,B as N,C as V,D as k,E as J,F as he,G as F,H as M}from"./D8b-auhh.js";import{_ as ye}from"./DLQ8QqFs.js";import{_ as ve}from"./DlAUqK2U.js";const ge=t=>t==="defer"||t===!1;function be(...t){var z;const o=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(o);let[a,r,e={}]=t;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof r!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=re(),c=r,i=()=>P.value,_=()=>s.isHydrating?s.payload.data[a]:s.static.data[a];e.server=e.server??!0,e.default=e.default??i,e.getCachedData=e.getCachedData??_,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0,e.deep=e.deep??P.deep,e.dedupe=e.dedupe??"cancel";const w=()=>e.getCachedData(a,s)!=null;if(!s._asyncData[a]||!e.immediate){(z=s.payload._errors)[a]??(z[a]=P.errorValue);const m=e.deep?S:ne;s._asyncData[a]={data:m(e.getCachedData(a,s)??e.default()),pending:S(!w()),error:ie(s.payload._errors,a),status:S("idle"),_default:e.default}}const n={...s._asyncData[a]};delete n._default,n.refresh=n.execute=(m={})=>{if(s._asyncDataPromises[a]){if(ge(m.dedupe??e.dedupe))return s._asyncDataPromises[a];s._asyncDataPromises[a].cancelled=!0}if((m._initial||s.isHydrating&&m._initial!==!1)&&w())return Promise.resolve(e.getCachedData(a,s));n.pending.value=!0,n.status.value="pending";const $=new Promise((v,l)=>{try{v(c(s))}catch(R){l(R)}}).then(async v=>{if($.cancelled)return s._asyncDataPromises[a];let l=v;e.transform&&(l=await e.transform(v)),e.pick&&(l=De(l,e.pick)),s.payload.data[a]=l,n.data.value=l,n.error.value=P.errorValue,n.status.value="success"}).catch(v=>{if($.cancelled)return s._asyncDataPromises[a];n.error.value=ue(v),n.data.value=p(e.default()),n.status.value="error"}).finally(()=>{$.cancelled||(n.pending.value=!1,delete s._asyncDataPromises[a])});return s._asyncDataPromises[a]=$,s._asyncDataPromises[a]},n.clear=()=>we(s,a);const C=()=>n.refresh({_initial:!0}),D=e.server!==!1&&s.payload.serverRendered;{const m=pe();if(m&&!m._nuxtOnBeforeMountCbs){m._nuxtOnBeforeMountCbs=[];const l=m._nuxtOnBeforeMountCbs;ce(()=>{l.forEach(R=>{R()}),l.splice(0,l.length)}),le(()=>l.splice(0,l.length))}D&&s.isHydrating&&(n.error.value||w())?(n.pending.value=!1,n.status.value=n.error.value?"error":"success"):m&&(s.payload.serverRendered&&s.isHydrating||e.lazy)&&e.immediate?m._nuxtOnBeforeMountCbs.push(C):e.immediate&&C();const $=_e();if(e.watch){const l=de(e.watch,()=>n.refresh());$&&U(l)}const v=s.hook("app:data:refresh",async l=>{(!l||l.includes(a))&&await n.refresh()});$&&U(v)}const B=Promise.resolve(s._asyncDataPromises[a]).then(()=>n);return Object.assign(B,n),B}function we(t,o){o in t.payload.data&&(t.payload.data[o]=void 0),o in t.payload._errors&&(t.payload._errors[o]=P.errorValue),t._asyncData[o]&&(t._asyncData[o].data.value=void 0,t._asyncData[o].error.value=P.errorValue,t._asyncData[o].pending.value=!1,t._asyncData[o].status.value="idle"),o in t._asyncDataPromises&&(t._asyncDataPromises[o]&&(t._asyncDataPromises[o].cancelled=!0),t._asyncDataPromises[o]=void 0)}function De(t,o){const a={};for(const r of o)a[r]=t[r];return a}const $e={class:"flex gap-2"},xe=u("span",{"i-ic:baseline-save-as":"","size-4":"","mr-1":""},null,-1),Ce=u("span",{"i-ic:round-upload-file":"","size-4":"","mr-1":""},null,-1),Pe=b({__name:"File",emits:["update"],setup(t,{emit:o}){const a=o,{open:r,onChange:e}=Q(".json");e(async c=>{const i=await W(c);await x.importFromJson(i),a("update")});const s=()=>x.exportToJSON();return Y("shift+ctrl+s",s),(c,i)=>{const _=T;return f(),g("div",$e,[d(_,{onClick:s},{default:y(()=>[xe,I(" "+h(c.$t("dashboard.saveas")),1)]),_:1}),d(_,{class:"bg-neutral-800 hover:bg-neutral-800/90 hover:ring-neutral-800/40 dark:bg-secondary dark:hover:bg-background dark:hover:ring-secondary/40",onClick:p(r)},{default:y(()=>[Ce,I(" "+h(c.$t("dashboard.import")),1)]),_:1},8,["onClick"])])}}}),Se={class:"w-56 h-80"},Re=["aria-label"],ke=u("span",{"i-ic:round-plus":"",text:"5xl muted-foreground group-hover:primary"},null,-1),Be=[ke],ze=b({__name:"NewResume",setup(t){const o=me(),a=fe(),r=async()=>{const e=await x.createResume();if(e)o.push(a(`/editor/${e.id}`));else return};return(e,s)=>(f(),g("div",Se,[u("button",{class:"resume-card group w-[210px] h-[299px] flex-center bg-secondary hover:bg-background ring-when-focus","aria-label":e.$t("dashboard.new"),onClick:r},Be,8,Re)]))}}),Oe={flex:"~ col gap-y-2","items-end":""},Ee=u("span",{"i-ion:duplicate":""},null,-1),Ue={class:"hidden text-xs group-hover/btn:inline group-focus-visible/btn:inline"},Ie=u("span",{"i-material-symbols:delete-outline-rounded":""},null,-1),Ne={class:"hidden text-xs group-hover/btn:inline group-focus-visible/btn:inline"},Fe=b({__name:"ResumeOptions",props:{resume:{}},emits:["update"],setup(t,{emit:o}){const a=t,r=o,e=async()=>{await x.duplicateResume(a.resume.id),r("update")},s=async()=>{await x.deleteResume(a.resume.id),r("update")};return(c,i)=>{const _=T;return f(),g("div",Oe,[d(_,{size:"round",class:"group/btn gap-x-1 transition-all bg-gray-500/90 hover:bg-gray-500 hover:ring-none hover:w-auto hover:px-2 focus-visible:w-auto focus-visible:px-2",onClick:e,"aria-label":c.$t("dashboard.duplicate")},{default:y(()=>[Ee,u("span",Ue,h(c.$t("dashboard.duplicate")),1)]),_:1},8,["aria-label"]),d(_,{size:"round",variant:"destructive",class:"group/btn gap-x-1 transition-all bg-destructive/90 hover:bg-destructive hover:w-auto hover:px-2 focus-visible:w-auto focus-visible:px-2",onClick:s,"aria-label":c.$t("dashboard.delete")},{default:y(()=>[Ie,u("span",Ne,h(c.$t("dashboard.delete")),1)]),_:1},8,["aria-label"])])}}}),Me={class:"text-center"},Te={text:"xs muted-foreground","mt-1.5":""},je={text:"xs muted-foreground","mt-0.5":""},He=b({__name:"ResumeInfo",props:{resume:{}},setup(t){const o=t,a=async e=>{e&&await x.updateResume({id:o.resume.id,name:e},!1)},r=e=>e&&A(e,{allowString:!0})&&new Date(parseInt(e)).toISOString().substring(0,19).replace("T"," ").replaceAll("-","/");return(e,s)=>{const c=ee;return f(),g("div",Me,[d(c,{class:"w-53 mx-auto","default-value":e.resume.name,"submit-mode":"enter","auto-resize":"",onSubmit:s[0]||(s[0]=i=>a(i))},null,8,["default-value"]),u("div",Te,h(e.$t("dashboard.updated"))+h(r(e.resume.updated_at)),1),u("div",je,h(e.$t("dashboard.created"))+h(r(e.resume.created_at)),1)])}}}),Ve={"w-56":""},Je={"h-80":""},Ke={class:"resume-card group/card size-fit"},Le=b({__name:"ResumeItem",props:{resume:{}},emits:["update"],setup(t,{emit:o}){const a=t,r=o,{PAPER:e}=te(),s=e.SIZES[a.resume.styles.paper],c=S();return H(async()=>{var i;O.injectCssEditor(a.resume.css,a.resume.id),await E.resolve(a.resume.styles.fontEN),await E.resolve(a.resume.styles.fontCJK),O.injectToolbar(a.resume.styles,a.resume.id),await ae(100),(i=c.value)==null||i.render()}),(i,_)=>{const w=ye,n=Fe,C=He;return f(),g("div",Ve,[u("div",Je,[u("div",Ke,[d(w,{to:i.$nuxt.$localePath(`/editor/${a.resume.id}`),class:"block border overflow-hidden rounded-md ring-when-focus peer",style:N({width:`${p(s).w}px`,height:`${p(s).h}px`})},{default:y(()=>[d(p(se),{id:i.resume.id,ref_key:"renderRef",ref:c,markdown:i.resume.markdown,styles:i.resume.styles,class:"origin-top-left",style:N({transform:`scale(${1/p(e).MM_TO_PX})`})},null,8,["id","markdown","styles","style"])]),_:1},8,["to","style"]),d(n,{class:"opacity-0 group-hover/card:opacity-100 peer-focus-within:opacity-100 focus-within:opacity-100",pos:"absolute right-3 top-3",resume:i.resume,onUpdate:_[0]||(_[0]=D=>r("update"))},null,8,["resume"])])]),d(C,{resume:i.resume},null,8,["resume"])])}}}),qe=ve(Le,[["__scopeId","data-v-0302e048"]]),Ge=b({__name:"ScrollBar",props:{orientation:{default:"vertical"},forceMount:{type:Boolean},asChild:{type:Boolean},as:{},class:{}},setup(t){const o=t,a=V(()=>{const{class:r,...e}=o;return e});return(r,e)=>(f(),k(p(L),J(a.value,{class:p(j)("flex touch-none select-none transition-colors",r.orientation==="vertical"&&"h-full w-2.5 border-l border-l-transparent p-px",r.orientation==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent p-px",o.class)}),{default:y(()=>[d(p(K),{class:"relative flex-1 rounded-full bg-border"})]),_:1},16,["class"]))}}),Xe=b({__name:"ScrollArea",props:{type:{},dir:{},scrollHideDelay:{},asChild:{type:Boolean},as:{},class:{}},setup(t){const o=t,a=V(()=>{const{class:r,...e}=o;return e});return(r,e)=>(f(),k(p(X),J(a.value,{class:p(j)("relative overflow-hidden",o.class)}),{default:y(()=>[d(p(q),{class:"h-full w-full rounded-[inherit]"},{default:y(()=>[he(r.$slots,"default")]),_:3}),d(Ge),d(p(G))]),_:3},16,["class"]))}}),Ze={id:"dashboard-page"},Qe={class:"workspace max-w-310 mx-auto",flex:"~ col",p:"x-4 y-8"},We={class:"px-2 space-y-2",md:"hstack justify-between"},Ye={"font-bold":"","text-3xl":""},Ae={class:"gap-x-4 gap-y-8 pt-4",flex:"~ wrap"},ra=b({__name:"dashboard",setup(t){const{data:o,refresh:a,status:r}=be("resume-list",()=>x.getResumes(),{server:!1,immediate:!1,default:()=>[]});return H(a),(e,s)=>{const c=Z,i=Pe,_=ze,w=qe,n=oe,C=Xe;return f(),g("div",Ze,[d(c),u("div",Qe,[u("div",We,[u("h1",Ye,h(e.$t("dashboard.my_resumes")),1),d(i,{onUpdate:p(a)},null,8,["onUpdate"])]),d(C,{class:"flex-1 mt-4 px-2"},{default:y(()=>[u("div",Ae,[d(_),p(r)==="success"?(f(!0),g(F,{key:0},M(p(o),D=>(f(),k(w,{key:D.id,resume:D,onUpdate:p(a)},null,8,["resume","onUpdate"]))),128)):(f(),g(F,{key:1},M(4,D=>u("div",{key:D,class:"w-56 h-80"},[d(n,{class:"w-[210px] h-[299px] bg-secondary mx-auto"})])),64))])]),_:1})])])}}});export{ra as default};